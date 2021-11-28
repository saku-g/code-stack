/* ----------------------------------------
  Smooth Scroll
---------------------------------------- */

export function smoothScroll() {
  const smoothScrollTrigger =
    document.querySelectorAll('a[href^="#"]').length > 0 ? document.querySelectorAll('a[href^="#"]') : null;

  // 値がnullのとき、処理を抜ける
  if (smoothScrollTrigger === null) {
    return;
  }

  smoothScrollTrigger.forEach((element) => {
    element.addEventListener('click', (e) => {
      e.preventDefault();
      const href = element.getAttribute('href');
      const targetElement = document.getElementById(href.replace('#', ''));
      const rect = targetElement.getBoundingClientRect().top; // ブラウザからの高さ
      const offset = window.pageYOffset; // 現在のスクロール量
      const gap = 30;
      const target = rect + offset - gap;

      window.scrollTo({
        top: target,
        behavior: 'smooth',
      });
    });
  });
}
