/* ----------------------------------------
  Search Area
---------------------------------------- */

import { backgroundFixed } from './backgroundFixed';

const searchArea = () => {
  const searchButton = document.getElementById('js-search-button');
  const searchButtonChild = document.getElementById('js-search-button').children[0]; // <svg>検索アイコン
  const searchForm = document.getElementById('js-search-form');
  const searchFormField = document.getElementById('js-search-form-field');
  const overlay = document.getElementById('js-overlay');
  let state = false; // 検索エリアの状態

  const open = () => {
    state = true;
    searchButton.classList.add('is-active');
    searchForm.classList.add('is-active');
    overlay.classList.add('is-visible', 'is-trigger-search');
    searchButtonChild.style.display = 'none'; // <svg>検索アイコンを非表示
    searchFormField.focus();
    backgroundFixed(true);
  };

  const close = () => {
    state = false;
    searchButton.classList.remove('is-active');
    searchForm.classList.remove('is-active');
    overlay.classList.remove('is-visible', 'is-trigger-search');
    searchButtonChild.style.display = 'block'; // <svg>検索アイコンを表示
    searchFormField.blur();
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
