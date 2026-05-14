// ============================================================
// GAYA SPIRITUAL ACADEMY — Global JavaScript
// ============================================================

const LANG_KEY = 'gaya_lang';
let currentLang = localStorage.getItem(LANG_KEY) || 'zh';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem(LANG_KEY, lang);
  document.documentElement.setAttribute('lang', lang);
  document.querySelectorAll('[data-zh]').forEach(el => {
    el.innerHTML = lang === 'zh' ? el.getAttribute('data-zh') : el.getAttribute('data-en');
  });
  document.querySelectorAll('[data-zh-text]').forEach(el => {
    el.textContent = lang === 'zh' ? el.getAttribute('data-zh-text') : el.getAttribute('data-en-text');
  });
  document.querySelectorAll('[data-zh-placeholder]').forEach(el => {
    el.placeholder = lang === 'zh' ? el.getAttribute('data-zh-placeholder') : el.getAttribute('data-en-placeholder');
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setLang(currentLang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });

  // NOTE: Hamburger is handled inside components.js renderNav()
  // Do NOT add hamburger logic here — nav HTML is injected dynamically
  // so querySelector('.nav-hamburger') returns null at DOMContentLoaded time

  // Scroll reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => entry.target.classList.add('visible'), delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach((el, i) => {
    if (!el.dataset.delay) el.dataset.delay = (i % 4) * 80;
    observer.observe(el);
  });

  // Active nav link
  const path = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') && path.endsWith(a.getAttribute('href').replace('../', ''))) {
      a.classList.add('active');
    }
  });
});
