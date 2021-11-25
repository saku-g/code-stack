/* ----------------------------------------
  目次固定
  - headerが見えなくなったら、目次固定
---------------------------------------- */

export function tocFixed() {
  const header = document.querySelector('.l-header');
  const toc = document.querySelector('.post__toc');

  const callback = (entries) => {
    const [entry] = entries; //entries[0]と同じ意味
    if (!entry.isIntersecting) {
      toc.classList.add('is-fixed');
    } else {
      toc.classList.remove('is-fixed');
    }
  };

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0,
  };

  const observer = new IntersectionObserver(callback, options);

  observer.observe(header);
}
