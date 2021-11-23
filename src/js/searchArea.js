/* ----------------------------------------
  Search Area
---------------------------------------- */

export function searchArea() {
  const searchButton = document.getElementById('js-search-button');
  const searchButtonChild = document.getElementById('js-search-button').children[0];
  const searchForm = document.getElementById('js-search-form');
  const searchFormField = document.getElementById('js-search-form-field');
  const overlay = document.getElementById('js-overlay');
  let searchAreaState = false;

  const searchAreaOpen = () => {
    searchAreaState = true;
    searchButton.classList.add('is-active');
    searchForm.classList.add('is-active');
    overlay.classList.add('is-visible', 'is-trigger-search');
    searchButtonChild.style.display = 'none'; // 検索ボタンを非表示
    searchFormField.focus();
  };

  const searchAreaClose = () => {
    searchAreaState = false;
    searchButton.classList.remove('is-active');
    searchForm.classList.remove('is-active');
    overlay.classList.remove('is-visible', 'is-trigger-search');
    searchButtonChild.style.display = 'block'; // 検索ボタンを表示
    searchFormField.blur();
  };

  searchButton.addEventListener('click', () => {
    if (!searchAreaState) {
      searchAreaOpen();

      // overlayクリックで閉じる
      overlay.addEventListener('click', function () {
        searchAreaClose();
      });
    } else {
      searchAreaClose();
    }
  });
}
