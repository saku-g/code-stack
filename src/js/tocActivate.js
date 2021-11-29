/* ----------------------------------------
  現在の目次をアクティブにする
---------------------------------------- */

const tocActivate = () => {
  const headingElements = document.querySelectorAll('.edit-area h2');

  const options = {
    root: null,
    rootMargin: '-25% 0px',
    threshold: [1.0],
  };

  /**
   * 交差したときに呼び出す関数
   * @param entries
   */
  const callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const currentTocItem = document.querySelector('#js-toc .is-active');
        // すでにアクティブになっているものが0個の時（=null）以外は、activeを除去
        if (currentTocItem !== null) {
          currentTocItem.classList.remove('is-active');
        }

        // 見出しid = <a href="#id">となる目次要素を取得
        const targetTocAnchor = document.querySelector(`.toc a[href='#${entry.target.id}']`);
        targetTocAnchor.parentNode.classList.add('is-active');
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);
  headingElements.forEach((element) => {
    observer.observe(element);
  });
};

export { tocActivate };
