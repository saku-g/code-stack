/* ----------------------------------------
  Drawer Menu
---------------------------------------- */

import { backgroundFixed } from './backgroundFixed';

const drawer = () => {
  const hamburgerButton = document.getElementById('js-hamburger-button');
  const sidebar = document.getElementById('js-sidebar');
  const overlay = document.getElementById('js-overlay');
  let state = false; // ドロワーの状態

  const open = () => {
    state = true;
    sidebar.classList.add('is-open');
    overlay.classList.add('is-visible', 'is-trigger-hamburger');
    // 背面コンテンツのスクロールを無効にする
    backgroundFixed(true);
  };

  const close = () => {
    state = false;
    sidebar.classList.remove('is-open');
    overlay.classList.remove('is-visible', 'is-trigger-hamburger');
    // 背面コンテンツのスクロールの無効を解除する
    backgroundFixed(false);
  };

  hamburgerButton.addEventListener('click', function () {
    if (!state) {
      open();

      // overlayクリックで閉じる
      overlay.addEventListener('click', function () {
        close();
      });

      /**
       * イベントリスナー
       * - ブレークポイント992px以上に切り替わった際、ドロワーを閉じる
       */
      const mediaQueryList = window.matchMedia('(min-width:992px)');
      const listener = () => {
        if (window.matchMedia('(min-width:992px)')) {
          close();
        }
      };
      mediaQueryList.addEventListener('change', listener);
    }
  });
};

export { drawer };
