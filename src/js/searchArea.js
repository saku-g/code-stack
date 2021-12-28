/* ----------------------------------------
  Search Area
---------------------------------------- */

import { backgroundFixed } from './backgroundFixed';

const searchArea = () => {
  const searchButton = document.getElementById('js-search-button');
  const searchButtonSvg = document.getElementById('js-search-button').children[0]; // 検索ボタン子要素（svg）
  const searchButtonIcon = searchButtonSvg.firstElementChild; // svg子要素(use)
  const searchFormField = document.querySelector('.js-search-field');
  const overlay = document.getElementById('js-overlay');
  let state = false; // 検索エリアの状態

  // 検索フォームの入力候補をOffにする
  searchFormField.setAttribute('autocomplete', 'off');

  const open = () => {
    state = true;
    document.body.setAttribute('data-search', 'visible');
    searchButtonIcon.setAttribute('xlink:href', '#close'); // <use>のxlink:href属性をcloseアイコンに書き換え
    searchButtonIcon.setAttribute('fill', 'currentColor');
    searchFormField.focus();
    // 背面コンテンツのスクロールを無効にする
    backgroundFixed(true);
  };

  const close = () => {
    state = false;
    document.body.removeAttribute('data-search');
    searchButtonIcon.setAttribute('xlink:href', '#search'); // <use>のxlink:href属性をsearchアイコンに戻す
    searchButtonIcon.setAttribute('fill', 'var(--color-white)');
    searchFormField.blur();
    // 背面コンテンツのスクロールの無効を解除する
    backgroundFixed(false);
  };

  searchButton.addEventListener('click', () => {
    if (!state) {
      open();

      // overlayクリックで閉じる
      overlay.addEventListener('click', function () {
        close();
      });
    } else {
      close();
    }
  });
};

export { searchArea };
