/* Campo Belo Aquecedores — comportamento do site */
(function () {
  'use strict';
  var track = function (name, params) { if (window.gtag) window.gtag('event', name, params || {}); };
  var $ = function (id) { return document.getElementById(id); };

  /* Header sticky shadow */
  var hdr = $('hdr');
  if (hdr) {
    var onScrollHdr = function () { hdr.classList.toggle('is-stuck', window.scrollY > 8); };
    window.addEventListener('scroll', onScrollHdr, { passive: true });
    onScrollHdr();
  }

  /* Menu mobile */
  var burger = $('burger'), drawer = $('drawer'), dClose = $('drawerClose'), lastFocus = null;
  if (burger && drawer) {
    var setDrawer = function (open) {
      drawer.classList.toggle('is-open', open);
      burger.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
      if (open) { lastFocus = document.activeElement; if (dClose) dClose.focus(); }
      else if (lastFocus) { lastFocus.focus(); }
    };
    burger.addEventListener('click', function () { setDrawer(!drawer.classList.contains('is-open')); });
    if (dClose) dClose.addEventListener('click', function () { setDrawer(false); });
    drawer.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setDrawer(false); }); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && drawer.classList.contains('is-open')) setDrawer(false);
    });
  }

  /* Reveal on scroll */
  var rvs = document.querySelectorAll('.rv');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var sibs = Array.prototype.filter.call(e.target.parentElement.children, function (n) {
          return n.classList.contains('rv');
        });
        var i = Math.min(sibs.indexOf(e.target), 5);
        e.target.style.transitionDelay = (i > 0 ? i * 80 : 0) + 'ms';
        e.target.classList.add('is-in');
        io.unobserve(e.target);
      });
    }, { threshold: .12, rootMargin: '0px 0px -40px 0px' });
    rvs.forEach(function (el) { io.observe(el); });
  } else {
    rvs.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* FAQ */
  document.querySelectorAll('.faq__q').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.parentElement, panel = item.querySelector('.faq__a'), open = item.classList.contains('is-open');
      document.querySelectorAll('.faq__item.is-open').forEach(function (o) {
        o.classList.remove('is-open');
        o.querySelector('.faq__a').style.maxHeight = '';
        o.querySelector('.faq__q').setAttribute('aria-expanded', 'false');
      });
      if (!open) {
        item.classList.add('is-open');
        panel.style.maxHeight = panel.scrollHeight + 'px';
        btn.setAttribute('aria-expanded', 'true');
        track('faq_aberto', { pergunta: btn.textContent.trim().slice(0, 80) });
      }
    });
  });

  /* Barra fixa mobile */
  var bar = $('bar'), shown = false;
  if (bar) {
    var onScrollBar = function () {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      var pass = h > 0 && (window.scrollY / h) > 0.35;
      if (pass !== shown) {
        shown = pass;
        bar.classList.toggle('is-visible', pass);
        document.body.classList.toggle('has-bar', pass);
      }
    };
    window.addEventListener('scroll', onScrollBar, { passive: true });
    onScrollBar();
  }

  /* Scroll depth */
  var fired75 = false;
  window.addEventListener('scroll', function () {
    if (fired75) return;
    var h = document.documentElement.scrollHeight - window.innerHeight;
    if (h > 0 && (window.scrollY / h) >= 0.75) { fired75 = true; track('scroll_75'); }
  }, { passive: true });

  /* Tracking de contato */
  document.querySelectorAll('[data-track]').forEach(function (el) {
    el.addEventListener('click', function () {
      var kind = el.getAttribute('data-track');
      track(kind === 'wa' ? 'contato_whatsapp' : 'contato_telefone',
        { origem: el.getAttribute('data-origin') || 'nao_definido' });
    });
  });

  /* Máscara de telefone */
  var tel = $('tel');
  if (tel) {
    tel.addEventListener('input', function () {
      var v = tel.value.replace(/\D/g, '').slice(0, 11);
      if (v.length > 10)     v = v.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
      else if (v.length > 6) v = v.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
      else if (v.length > 2) v = v.replace(/(\d{2})(\d{0,5})/, '($1) $2');
      else if (v.length > 0) v = v.replace(/(\d{0,2})/, '($1');
      tel.value = v;
    });
  }

  /* Formulário */
  var form = $('form'), card = $('formCard'), started = false;
  if (form) {
    var digits = function (s) { return (s || '').replace(/\D/g, ''); };
    var setErr = function (el, bad) { el.classList.toggle('has-error', bad); return !bad; };

    var validate = function (id) {
      if (id === 'nome')   return setErr($('f-nome'),   $('nome').value.trim().length < 2);
      if (id === 'tel')    return setErr($('f-tel'),    digits($('tel').value).length < 10);
      if (id === 'bairro') return setErr($('f-bairro'), $('bairro').value.trim().length < 2);
      if (id === 'situacao') {
        var checked = form.querySelector('input[name="situacao"]:checked');
        var msg = $('f-situacao').querySelector('.err');
        msg.style.display = checked ? 'none' : 'block';
        return !!checked;
      }
      return true;
    };

    form.addEventListener('focusin', function () {
      if (!started) { started = true; track('form_iniciado'); }
    });

    ['nome', 'tel', 'bairro'].forEach(function (id) {
      $(id).addEventListener('blur', function () { validate(id); });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var ids = ['nome', 'tel', 'bairro', 'situacao'], valid = true, firstBad = null;
      ids.forEach(function (id) {
        var ok = validate(id);
        if (!ok && !firstBad) firstBad = id;
        valid = valid && ok;
      });
      if (!valid) {
        track('form_erro', { campo: firstBad, tipo_erro: 'validacao' });
        var t = $(firstBad) || $('f-' + firstBad);
        if (t && t.focus) t.focus();
        return;
      }
      var situacao = (form.querySelector('input[name="situacao"]:checked') || {}).value || '';
      track('form_enviado', { situacao: situacao, bairro: $('bairro').value.trim() });

      /* INTEGRAÇÃO: substituir por POST real — ver 00-README.md, seção "Ativação". */
      var btn = $('submitBtn');
      btn.disabled = true;
      btn.textContent = 'Enviando…';
      setTimeout(function () { card.classList.add('is-sent'); }, 500);
    });
  }
})();
