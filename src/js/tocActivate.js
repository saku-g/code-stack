/* ----------------------------------------
  目次固定
  - headerが見えなくなったら、目次固定
---------------------------------------- */

export function tocActive() {
  const headingElements = document.querySelectorAll('.edit-area h2');

  const options = {
    root: null,
    rootMargin: '-30% 0px',
    threshold: 0,
  };

  /**
   * 交差したときに呼び出す関数
   * @param entries
   */
  const callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const currentTocItem = document.querySelector('.toc .is-current');
        if (currentTocItem !== null) {
          currentTocItem.classList.remove('is-current');
        }

        // 見出しid = <a href="#id">となる目次要素を取得
        const activeTocAnchor = document.querySelector(`.toc a[href='#${entry.target.id}']`);
        activeTocAnchor.parentNode.classList.add('is-current');
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);
  headingElements.forEach((element) => {
    observer.observe(element);
  });
}
