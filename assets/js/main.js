// ============================================================
// GAYA SPIRITUAL ACADEMY — Global JavaScript
// ============================================================

// Language toggle
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
  // Init language
  setLang(currentLang);

  // Lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });

  // Mobile menu
  const hamburger = document.querySelector('.nav-hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const spans = hamburger.querySelectorAll('span');
      const isOpen = navLinks.classList.contains('open');
      spans[0].style.transform = isOpen ? 'rotate(45deg) translate(4px, 4.5px)' : '';
      spans[1].style.opacity = isOpen ? '0' : '1';
      spans[2].style.transform = isOpen ? 'rotate(-45deg) translate(4px, -4.5px)' : '';
    });
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }

  // Scroll reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
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

  // Nav background on scroll
  const nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.style.background = window.scrollY > 60
        ? 'rgba(13, 17, 23, 0.98)'
        : 'rgba(13, 17, 23, 0.92)';
    });
  }

  // Active nav link
  const path = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') && path.endsWith(a.getAttribute('href').replace('../', ''))) {
      a.classList.add('active');
    }
  });
});
