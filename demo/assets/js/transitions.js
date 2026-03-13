// 全局页面切换过渡动画
(function () {
  // 页面进入时淡入
  document.documentElement.style.opacity = '0';
  document.documentElement.style.transition = 'opacity 0.22s ease';

  window.addEventListener('load', function () {
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        document.documentElement.style.opacity = '1';
        // 刷新购物车角标（CART 在 mock.js 中定义，所有引入了 mock.js 的页面都会更新）
        if (typeof CART !== 'undefined' && typeof CART.refreshBadge === 'function') {
          CART.refreshBadge();
        }
      });
    });
  });

  // 拦截所有内部链接，添加淡出过渡
  document.addEventListener('click', function (e) {
    const link = e.target.closest('a[href]');
    if (!link) return;

    const href = link.getAttribute('href');
    if (
      !href ||
      href.startsWith('#') ||
      href.startsWith('javascript') ||
      href.startsWith('http') ||
      href.startsWith('mailto') ||
      link.target === '_blank'
    ) return;

    e.preventDefault();
    document.documentElement.style.opacity = '0';
    setTimeout(function () {
      location.href = href;
    }, 200);
  });

  // 拦截 location.href 赋值（通过包装按钮 onclick）
  // 对于 onclick 中直接调用 location.href 的情况，在调用前手动触发淡出
  window._navigate = function (url) {
    document.documentElement.style.opacity = '0';
    setTimeout(function () { location.href = url; }, 200);
  };
})();
