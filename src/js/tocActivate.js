/* ----------------------------------------
  目次固定
  - headerが見えなくなったら、目次固定
---------------------------------------- */

export function tocActive() {
  const headingElements = document.querySelectorAll('.edit-area h2');

  const options = {
    root: null,
    rootMargin: '-50% 0px', // ビューポートの中心が判定基準
    threshold: 0,
  };

  // 各見出し要素を監視
  const observer = new IntersectionObserver(callback, options);
  headingElements.forEach((headingElement) => {
    observer.observe(headingElement);
  });

  /**
   * 交差したときに呼び出す関数(callback)
   * - activeな目次 toc__item(li)にクラスをつける
   * @param entries
   */
  function callback(entries) {
    entries.forEach((entry) => {
      // すでにアクティブになっている目次を選択
      const currentActiveAnchor = document.querySelector('.toc .is-current a');

      // // すでにアクティブになっているものが0個の時（=null）以外は、activeクラスを除去
      // if (currentActiveAnchor !== null) {
      //   currentActiveAnchor.parentNode.classList.remove('is-current');
      // }

      // 引数 entryのDOMが飛び先のaタグを取得
      const targetTocAnchor = document.querySelector(`a[href='#${entry.target.id}']`);

      if (entry.isIntersecting) {
        targetTocAnchor.parentNode.classList.add('is-current'); // 親要素のliにクラスを付与
      } else {
        // targetTocAnchor.parentNode.classList.remove('is-current'); // 親要素のliにクラスを付与
      }
    });
  }

  // const callback = (entries) => {
  //   const [entry] = entries; //entries[0]と同じ意味
  //   if (!entry.isIntersecting) {
  //     toc.classList.add('is-fixed');
  //   } else {
  //     toc.classList.remove('is-fixed');
  //   }
  // };

  // /**
  //  * 目次アイテムをアクティブにする関数
  //  * @param element
  //  */
  // function activateTocItem(element) {
  //   // 引数で渡されたDOMが飛び先のaタグを選択し、activeクラスを付与
  //   const currentTocItem = document.querySelector(`a[href='#${element.id}']`);
  //   console.log(currentTocItem);
  // }
}
