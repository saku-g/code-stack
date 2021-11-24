/* ----------------------------------------
  目次生成JS
  - 記事内のh2の数が3未満の場合は、目次を生成しない
---------------------------------------- */

export function tocGenerate() {
  const headingElements = document.querySelectorAll('.edit-area h2');

  if (headingElements.length < 3) {
    console.log(false);
    return;
  }

  // 目次の雛形を生成
  const toc = document.createElement('div');
  toc.className = 'post__toc toc';
  toc.innerHTML = `
  <span class ="toc__title">Contents</span>
  <nav class="toc__nav">
  </nav>
  `;

  // olを生成 + 追加
  const tocList = document.createElement('ol');
  tocList.className = 'toc__list';
  toc.appendChild(tocList);

  // 目次生成関数
  const createTocItem = (el) => {
    const li = document.createElement('li');
    li.className = 'toc__item';
    const a = document.createElement('a');
    a.href = `#${el.id}`;
    a.innerText = el.innerText;
    li.appendChild(a);
    return li;
  };

  // 見出しをループ + 目次を生成
  headingElements.forEach((el, i) => {
    el.id = `heading${i + 1}`;
    tocList.appendChild(createTocItem(el));
  });

  const postHeader = document.querySelector('.post__header');
  postHeader.after(toc);
}
