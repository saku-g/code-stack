/* ----------------------------------------
  Drawer Menu
---------------------------------------- */

import { backgroundFixed } from './backgroundFixed';

const drawer = () => {
  const hamburgerButton = document.getElementById('js-hamburger-button');
  const overlay = document.getElementById('js-overlay');
  let state = false; // ドロワーの状態

  const open = () => {
    state = true;
    document.body.setAttribute('data-drawer', 'open');
    // 背面コンテンツのスクロールを無効にする
    backgroundFixed(true);
  };

  const close = () => {
    state = false;
    document.body.removeAttribute('data-drawer');
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
