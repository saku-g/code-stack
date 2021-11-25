/* ----------------------------------------
  目次固定
---------------------------------------- */

export function tocFixed() {
  const header = document.querySelector('.l-header');

  //rootMarginを決めるために高さを取得
  const headerHeight = header.clientHeight;

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0,
  };

  const callback = function () {
    // target.classList.add('is-fixed');
    console.log('test');
  };

  const observer = new IntersectionObserver(callback, options);

  observer.observe(header);
}
