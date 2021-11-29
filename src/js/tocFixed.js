/* ----------------------------------------
  目次固定
  - headerが見えなくなったら、目次固定
---------------------------------------- */

const tocFixed = () => {
  const header = document.querySelector('.l-header');
  const toc = document.getElementById('js-toc');

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0,
  };

  /**
   * 交差したときに呼び出す関数
   * @param entries
   */
  const callback = (entries) => {
    const [entry] = entries; // 今回は対象が一つのみのため、entries[0]と同じ意味(header)
    if (!entry.isIntersecting) {
      toc.classList.add('is-fixed');
    } else {
      toc.classList.remove('is-fixed');
    }
  };

  const observer = new IntersectionObserver(callback, options);
  observer.observe(header);
};

export { tocFixed };
