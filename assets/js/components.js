// ============================================================
// GAYA SPIRITUAL ACADEMY — Shared Components
// ============================================================

function renderNav(basePath = '') {
  const nav = document.getElementById('nav');
  if (!nav) return;

  nav.innerHTML = `
    <div class="nav-logo">
      <a href="${basePath}index.html">
        <img src="${basePath}assets/img/8.png" alt="Gaya Spiritual Academy" style="height:44px;width:auto;">
      </a>
    </div>
    <nav>
      <ul class="nav-links" id="navLinksList">
        <li><a href="${basePath}index.html" data-zh="首页" data-en="Home">首页</a></li>
        <li><a href="${basePath}about.html" data-zh="关于我" data-en="About">关于我</a></li>
        <li class="nav-dropdown">
          <a href="${basePath}courses/index.html" data-zh="培训" data-en="Programmes">培训</a>
          <ul class="dropdown-menu">
            <li><a href="${basePath}courses/cif.html" data-zh="意识智能先修培训 CIF" data-en="Conscious Intelligence Foundation">意识智能先修培训 CIF</a></li>
            <li><a href="${basePath}courses/aquarius.html" data-zh="宝瓶世纪教练" data-en="Aquarius Coach">宝瓶世纪教练</a></li>
            <li><a href="${basePath}courses/leadership.html" data-zh="新时代领导力" data-en="Leadership from Within">新时代领导力</a></li>
            <li><a href="${basePath}courses/insha.html" data-zh="INSHA 自然疗法" data-en="INSHA Healing">INSHA 自然疗法</a></li>
            <li><a href="${basePath}courses/piga.html" data-zh="PIGA 黄金世纪之路" data-en="Path into Golden Age">PIGA 黄金世纪之路</a></li>
          </ul>
        </li>
        <li><a href="${basePath}services/index.html" data-zh="疗愈与咨询" data-en="Healing &amp; Consultation">疗愈与咨询</a></li>
        <li class="nav-dropdown">
          <a href="${basePath}events/index.html" data-zh="旗舰活动" data-en="Signature Events">旗舰活动</a>
          <ul class="dropdown-menu">
            <li><a href="https://gayacongress.clicksummits.com/gaya-congress/" target="_blank">Gaya Congress</a></li>
            <li><a href="https://wirelesslovemalaysia.com" target="_blank" data-zh="无线爱疗愈" data-en="Wireless Love">无线爱疗愈</a></li>
            <li><a href="${basePath}events/leadership-workshop.html" data-zh="领导力工作坊" data-en="Leadership Workshop">领导力工作坊</a></li>
          </ul>
        </li>
        <li><a href="${basePath}gallery.html" data-zh="光迹" data-en="Gallery">光迹</a></li>
        <li><a href="${basePath}contact.html" data-zh="联络" data-en="Contact">联络</a></li>
      </ul>
    </nav>
    <div class="lang-toggle">
      <button class="lang-btn" data-lang="zh">中文</button>
      <button class="lang-btn" data-lang="en">EN</button>
    </div>
    <button class="nav-hamburger" id="navHamburger" aria-label="Menu">
      <span></span>
      <span></span>
      <span></span>
    </button>
  `;

  // ── Hamburger: direct reference, no document delegation ──
  const hamburgerBtn = document.getElementById('navHamburger');
  const navLinksList = document.getElementById('navLinksList');

  hamburgerBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    var isOpen = navLinksList.classList.toggle('open');
    hamburgerBtn.classList.toggle('open', isOpen);
  });

  // ── Desktop dropdown: hover only ──
  document.querySelectorAll('.nav-dropdown').forEach(function (item) {
    item.addEventListener('mouseenter', function () {
      if (window.innerWidth > 768) item.classList.add('open');
    });
    item.addEventListener('mouseleave', function () {
      if (window.innerWidth > 768) item.classList.remove('open');
    });
  });

  // ── Mobile dropdown: first tap = expand, second tap = navigate ──
  document.querySelectorAll('.nav-dropdown > a').forEach(function (link) {
    link.addEventListener('click', function (e) {
      if (window.innerWidth <= 768) {
        var parent = this.parentElement;
        if (!parent.classList.contains('open')) {
          // First tap: just open the sub-menu, don't navigate
          e.preventDefault();
          e.stopPropagation();
          // Close any other open dropdowns first
          document.querySelectorAll('.nav-dropdown').forEach(function(d) {
            if (d !== parent) d.classList.remove('open');
          });
          parent.classList.add('open');
        }
        // Second tap (already open): allow navigation naturally
      }
    });
  });

  // ── Click outside: close desktop dropdowns only ──
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.nav-dropdown') && !e.target.closest('#navHamburger')) {
      document.querySelectorAll('.nav-dropdown').forEach(function (i) {
        i.classList.remove('open');
      });
    }
  });
}

function renderFooter(basePath = '') {
  const footer = document.getElementById('footer');
  if (!footer) return;
  footer.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="footer-logo">Gaya Spiritual Academy</div>
          <p class="footer-desc"
            data-zh="迦雅灵性学院，由 Dr. Bonshuwa Chua 创立。致力于将灵性生活化、生活灵性化，帮助领导者与疗愈师从意识深处绽放真实的力量。"
            data-en="Founded by Dr. Bonshuwa Chua, Gaya Spiritual Academy bridges spirituality and life — helping leaders and healers awaken their truest power from within.">迦雅灵性学院，由 Dr. Bonshuwa Chua 创立。</p>
          <a href="https://wa.me/60126011607" class="btn-gold-outline" style="font-size:0.75rem;padding:9px 20px;"
            data-zh="WhatsApp 咨询" data-en="WhatsApp Us">WhatsApp 咨询</a>
        </div>
        <div>
          <div class="footer-heading" data-zh="培训项目" data-en="Programmes">培训项目</div>
          <ul class="footer-links">
            <li><a href="${basePath}courses/cif.html" data-zh="意识智能先修培训 CIF" data-en="Conscious Intelligence Foundation">意识智能先修培训 CIF</a></li>
            <li><a href="${basePath}courses/aquarius.html" data-zh="宝瓶世纪教练" data-en="Aquarius Coach">宝瓶世纪教练</a></li>
            <li><a href="${basePath}courses/leadership.html" data-zh="新时代领导力" data-en="Leadership from Within">新时代领导力</a></li>
            <li><a href="${basePath}courses/insha.html" data-zh="INSHA 自然疗法" data-en="INSHA Healing">INSHA 自然疗法</a></li>
            <li><a href="${basePath}courses/piga.html" data-zh="PIGA 黄金世纪之路" data-en="Path into Golden Age">PIGA 黄金世纪之路</a></li>
          </ul>
        </div>
        <div>
          <div class="footer-heading" data-zh="旗舰活动" data-en="Signature Events">旗舰活动</div>
          <ul class="footer-links">
            <li><a href="https://gayacongress.clicksummits.com/gaya-congress/" target="_blank">Gaya Congress</a></li>
            <li><a href="https://wirelesslovemalaysia.com" target="_blank" data-zh="无线爱疗愈" data-en="Wireless Love">无线爱疗愈</a></li>
            <li><a href="${basePath}events/leadership-workshop.html" data-zh="领导力工作坊" data-en="Leadership Workshop">领导力工作坊</a></li>
          </ul>
          <div class="footer-heading" style="margin-top:24px;" data-zh="疗愈与咨询" data-en="Healing &amp; Consultation">疗愈与咨询</div>
          <ul class="footer-links">
            <li><a href="${basePath}services/index.html" data-zh="能量风水 · 空间疗愈" data-en="Energy Feng Shui">能量风水 · 空间疗愈</a></li>
            <li><a href="${basePath}services/index.html#insha" data-zh="INSHA 疗愈" data-en="INSHA Healing">INSHA 疗愈</a></li>
            <li><a href="${basePath}services/index.html#akasha" data-zh="阿卡莎阅读" data-en="Akasha Reading">阿卡莎阅读</a></li>
          </ul>
        </div>
        <div>
          <div class="footer-heading" data-zh="联络我们" data-en="Contact">联络我们</div>
          <ul class="footer-links">
            <li><a href="mailto:info@gayaspiritualacademy.com">info@gayaspiritualacademy.com</a></li>
            <li><a href="tel:+60126011607">+60 12-601 1607</a></li>
            <li style="color:rgba(247,243,236,0.35);font-size:0.82rem;">D-2-3 Block D, Pusat Komersil Parklane</li>
            <li style="color:rgba(247,243,236,0.35);font-size:0.82rem;">Jalan SS7/26, Kelana Jaya, 47301 PJ</li>
            <li style="color:rgba(247,243,236,0.35);font-size:0.82rem;">Selangor, Malaysia</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2026 Gaya Spiritual Academy Sdn Bhd. <span data-zh="版权所有" data-en="All rights reserved.">版权所有</span></span>
        <span style="font-size:0.72rem;letter-spacing:0.1em;color:rgba(247,243,236,0.25);">FOUNDED BY DR. BONSHUWA CHUA</span>
      </div>
    </div>
  `;
}
