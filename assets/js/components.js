// ============================================================
// GAYA SPIRITUAL ACADEMY — Shared Components
// ============================================================

// ============================================================
// BLOG POSTS — Single Source of Truth
// 每次新增文章，只需在这里加一条记录（最新放最前面）
// ============================================================
const BLOG_POSTS = [
  {
    slug: 'what-is-cif',
    title: 'What Is CIF?',
    titleEm: 'The Inner Foundation Every Conscious Leader Needs',
    excerpt: 'Real transformation does not begin with more information. It begins with awareness. CIF is where that foundation is built.',
    excerptZh: '真正的改变，不是来自更多知识，而是来自意识的开始。CIF 是建立这个基础的起点。',
    date: 'May 26, 2026',
    category: 'CIF Programme',
    categoryZh: 'CIF 培训',
    categoryColor: 'gold',
    readTime: '10',
    image: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=600&q=80&auto=format&fit=crop'
  },
  {
    slug: 'consciousness-leap',
    title: 'The Consciousness Leap',
    titleEm: 'Why Humanity Can No Longer Afford to Wait',
    excerpt: 'The real transformation happening in the world today is not merely technological. It is consciousness itself.',
    excerptZh: '世界正在经历的，不只是科技革命，而是一场意识层面的巨大转变。',
    date: 'May 26, 2026',
    category: 'Inner Transformation',
    categoryZh: '内在转化',
    categoryColor: 'teal',
    readTime: '8',
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80&auto=format&fit=crop'
  },
  {
    slug: 'inner-leadership-2025',
    title: 'Why Inner Leadership Matters',
    titleEm: 'More Than Strategy in 2025',
    excerpt: 'Strategy helps a person move. Inner leadership determines where they are moving from.',
    excerptZh: '策略可以帮助一个人前进，但内在领导力决定了他从哪里出发。',
    date: 'May 25, 2026',
    category: 'Inner Leadership',
    categoryZh: '内在领导力',
    categoryColor: 'teal',
    readTime: '7',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80&auto=format&fit=crop'
  },
  {
    slug: 'meditation-leadership-asia',
    title: 'Can Meditation Change the Way You Lead?',
    titleEm: 'What Asia Is Beginning to Discover',
    excerpt: "Meditation isn\'t about escaping reality — it\'s about returning to clarity within it.",
    excerptZh: '冥想不是让人逃离现实，而是让人更清晰地面对现实。',
    date: 'May 22, 2026',
    category: 'Meditation · Leadership',
    categoryZh: '冥想与领导力',
    categoryColor: 'gold',
    readTime: '9',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80&auto=format&fit=crop'
  },
  {
    slug: 'conscious-leadership-asia-perspective',
    title: 'What Is Conscious Leadership?',
    titleEm: 'The Asia Perspective',
    excerpt: "Across Asia, more leaders are realizing external success alone doesn\'t create inner clarity.",
    excerptZh: '在亚洲，越来越多的领导者开始意识到：外在的成功不能自动带来内在的清明。',
    date: 'May 22, 2026',
    category: 'Conscious Leadership',
    categoryZh: '意识领导力',
    categoryColor: 'teal',
    readTime: '8',
    image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=600&q=80&auto=format&fit=crop'
  }
];

// ============================================================
// renderBlogGrid(containerId, basePath, options)
// options.limit    = 显示几篇 (default: 全部)
// options.homepage = true 时用首页卡片样式
// options.featured = true 时第一篇用大卡片 (blog/index 专用)
// ============================================================
function renderBlogGrid(containerId, basePath, options) {
  options = options || {};
  var container = document.getElementById(containerId);
  if (!container) return;

  var limit = options.limit || BLOG_POSTS.length;
  var posts = BLOG_POSTS.slice(0, limit);
  var isHomepage = options.homepage || false;
  var hasFeatured = options.featured || false;

  if (isHomepage) {
    // ── Homepage style: compact 2-col cards ──
    container.innerHTML = posts.map(function(post) {
      var tagStyle = post.categoryColor === 'gold'
        ? 'color:var(--gold-dark);background:var(--gold-pale);'
        : 'color:var(--teal-bright);background:var(--teal-pale);';
      var barStyle = post.categoryColor === 'gold'
        ? 'background:linear-gradient(90deg,var(--gold),var(--teal-bright));'
        : 'background:linear-gradient(90deg,var(--teal-bright),var(--gold));';
      var titleHtml = post.titleEm
        ? post.title + '<br><em style="font-style:italic;color:var(--teal-bright);">' + post.titleEm + '</em>'
        : post.title;
      return '<a href="' + basePath + 'blog/' + post.slug + '.html"'
        + ' style="display:block;background:white;border-radius:12px;overflow:hidden;'
        + 'border:1px solid rgba(42,172,184,0.1);box-shadow:0 4px 20px rgba(27,95,117,0.06);'
        + 'transition:all 0.3s;text-decoration:none;"'
        + ' onmouseover="this.style.transform=\'translateY(-4px)\';this.style.boxShadow=\'0 12px 40px rgba(27,95,117,0.12)\';"'
        + ' onmouseout="this.style.transform=\'\';this.style.boxShadow=\'0 4px 20px rgba(27,95,117,0.06)\';">'  
        + '<div style="height:6px;' + barStyle + '"></div>'
        + '<div style="padding:32px 28px 28px;">'
        + '<div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;">'
        + '<span style="font-size:0.65rem;font-weight:600;letter-spacing:0.2em;text-transform:uppercase;'
        + 'padding:4px 12px;border-radius:20px;' + tagStyle + '"'
        + ' data-zh="' + post.categoryZh + '" data-en="' + post.category + '">' + post.category + '</span>'
        + '<span style="font-size:0.72rem;color:var(--text-soft);">' + post.date + '</span>'
        + '</div>'
        + '<h3 style="font-family:var(--font-display);font-size:1.35rem;font-weight:300;line-height:1.3;color:var(--text-dark);margin-bottom:12px;">' + titleHtml + '</h3>'
        + '<p style="font-size:0.88rem;color:var(--text-mid);line-height:1.75;margin-bottom:20px;font-weight:300;"'
        + ' data-zh="' + post.excerptZh + '" data-en="' + post.excerpt + '">' + post.excerpt + '</p>'
        + '<div style="display:flex;align-items:center;gap:10px;">'
        + '<img src="' + basePath + 'assets/img/bonshuwa.jpg" alt="Dr. Bonshuwa Chua"'
        + ' style="width:32px;height:32px;border-radius:50%;object-fit:cover;object-position:top;border:1.5px solid rgba(42,172,184,0.2);">'
        + '<span style="font-size:0.78rem;font-weight:500;color:var(--teal-deep);">Dr. Bonshuwa Chua</span>'
        + '<span style="margin-left:auto;font-size:0.72rem;color:var(--teal-bright);font-weight:500;">' + post.readTime + ' min read →</span>'
        + '</div></div></a>';
    }).join('');

  } else if (hasFeatured) {
    // ── Blog index: first post = featured big card, rest = grid ──
    var featured = posts[0];
    var rest = posts.slice(1);
    var featTitleHtml = featured.titleEm
      ? featured.title + '<br><em>' + featured.titleEm + '</em>'
      : featured.title;

    var featuredHtml = '<a href="' + basePath + 'blog/' + featured.slug + '.html" class="featured-card reveal">'
      + '<div class="featured-img-wrap">'
      + '<img class="featured-img" src="' + featured.image + '" alt="' + featured.title + '">'
      + '<div class="featured-img-overlay"></div>'
      + '<span class="featured-badge" data-zh="最新" data-en="Latest">Latest</span>'
      + '</div>'
      + '<div class="featured-body">'
      + '<div class="featured-meta">'
      + '<span class="featured-tag" data-zh="' + featured.categoryZh + '" data-en="' + featured.category + '">' + featured.category + '</span>'
      + '<span class="featured-date">' + featured.date + '</span>'
      + '</div>'
      + '<h2 class="featured-title">' + featTitleHtml + '</h2>'
      + '<p class="featured-excerpt" data-zh="' + featured.excerptZh + '" data-en="' + featured.excerpt + '">' + featured.excerpt + '</p>'
      + '<div class="featured-author">'
      + '<img class="featured-avatar" src="' + basePath + 'assets/img/bonshuwa.jpg" alt="Dr. Bonshuwa Chua">'
      + '<span class="featured-author-name">Dr. Bonshuwa Chua</span>'
      + '<span class="featured-read">' + featured.readTime + ' min read'
      + '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>'
      + '</span></div></div></a>';

    var gridHtml = rest.map(function(post, i) {
      var tagClass = post.categoryColor === 'gold' ? 'gold' : 'teal';
      var titleHtml = post.titleEm ? post.title + '<br><em>' + post.titleEm + '</em>' : post.title;
      return '<a href="' + basePath + 'blog/' + post.slug + '.html" class="blog-card reveal">'
        + '<div class="blog-card-bar ' + tagClass + '"></div>'
        + '<div class="blog-card-img-wrap">'
        + '<img class="blog-card-img" src="' + post.image + '" alt="' + post.title + '" loading="lazy">'
        + '</div>'
        + '<div class="blog-card-body">'
        + '<div class="blog-card-meta">'
        + '<span class="blog-card-tag ' + tagClass + '" data-zh="' + post.categoryZh + '" data-en="' + post.category + '">' + post.category + '</span>'
        + '<span class="blog-card-date">' + post.date + '</span>'
        + '</div>'
        + '<h3 class="blog-card-title">' + titleHtml + '</h3>'
        + '<p class="blog-card-excerpt" data-zh="' + post.excerptZh + '" data-en="' + post.excerpt + '">' + post.excerpt + '</p>'
        + '<div class="blog-card-author">'
        + '<img class="blog-card-avatar" src="' + basePath + 'assets/img/bonshuwa.jpg" alt="Dr. Bonshuwa Chua">'
        + '<span class="blog-card-author-name">Dr. Bonshuwa Chua</span>'
        + '<span class="blog-card-read">' + post.readTime + ' min →</span>'
        + '</div></div></a>';
    }).join('');

    // Write to featured container + grid container
    var featuredEl = document.getElementById('blog-featured-card');
    if (featuredEl) featuredEl.innerHTML = featuredHtml;
    container.innerHTML = gridHtml;

  } else {
    // ── Standard grid cards ──
    container.innerHTML = posts.map(function(post) {
      var tagClass = post.categoryColor === 'gold' ? 'gold' : 'teal';
      var titleHtml = post.titleEm ? post.title + '<br><em>' + post.titleEm + '</em>' : post.title;
      return '<a href="' + basePath + 'blog/' + post.slug + '.html" class="blog-card reveal">'
        + '<div class="blog-card-bar ' + tagClass + '"></div>'
        + '<div class="blog-card-img-wrap">'
        + '<img class="blog-card-img" src="' + post.image + '" alt="' + post.title + '" loading="lazy">'
        + '</div>'
        + '<div class="blog-card-body">'
        + '<div class="blog-card-meta">'
        + '<span class="blog-card-tag ' + tagClass + '" data-zh="' + post.categoryZh + '" data-en="' + post.category + '">' + post.category + '</span>'
        + '<span class="blog-card-date">' + post.date + '</span>'
        + '</div>'
        + '<h3 class="blog-card-title">' + titleHtml + '</h3>'
        + '<p class="blog-card-excerpt" data-zh="' + post.excerptZh + '" data-en="' + post.excerpt + '">' + post.excerpt + '</p>'
        + '<div class="blog-card-author">'
        + '<img class="blog-card-avatar" src="' + basePath + 'assets/img/bonshuwa.jpg" alt="Dr. Bonshuwa Chua">'
        + '<span class="blog-card-author-name">Dr. Bonshuwa Chua</span>'
        + '<span class="blog-card-read">' + post.readTime + ' min →</span>'
        + '</div></div></a>';
    }).join('');
  }

  // Re-apply language
  if (typeof applyLang === 'function') {
    applyLang(localStorage.getItem('gaya-lang') || 'zh');
  }
}


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
            <li><a href="${basePath}courses/golden-children.html" data-zh="黄金世纪光之小孩" data-en="Golden Age Golden Children">黄金世纪光之小孩</a></li>
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
        <li><a href="${basePath}blog/" data-zh="洞见" data-en="Insights">洞见</a></li>
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
            <li><a href="${basePath}courses/golden-children.html" data-zh="黄金世纪光之小孩" data-en="Golden Age Golden Children">黄金世纪光之小孩</a></li>
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
          <div class="footer-heading" data-zh="最新洞见" data-en="Insights">最新洞见</div>
          <ul class="footer-links" id="footer-blog-links">
            <li><a href="${basePath}blog/${BLOG_POSTS[0].slug}.html" data-zh="${BLOG_POSTS[0].categoryZh}" data-en="${BLOG_POSTS[0].title}">${BLOG_POSTS[0].title}</a></li>
            <li><a href="${basePath}blog/${BLOG_POSTS[1].slug}.html" data-zh="${BLOG_POSTS[1].categoryZh}" data-en="${BLOG_POSTS[1].title}">${BLOG_POSTS[1].title}</a></li>
            <li><a href="${basePath}blog/" style="color:var(--teal-bright);font-size:0.78rem;" data-zh="查看全部 →" data-en="View All →">查看全部 →</a></li>
          </ul>
          <div class="footer-heading" style="margin-top:20px;" data-zh="联络我们" data-en="Contact">联络我们</div>
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
