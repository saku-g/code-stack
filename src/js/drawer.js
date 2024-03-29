/* ----------------------------------------
  Drawer Menu
---------------------------------------- */

import { backgroundFixed } from './backgroundFixed';

const drawer = () => {
  const hamburgerButton = document.getElementById('js-hamburger-button');
  const drawerCloseButton = document.getElementById('js-drawer-close-button');
  const overlay = document.getElementById('js-overlay');
  const drawerCloseTriggers = [drawerCloseButton, overlay]; // ドロワーを閉じるトリガーを配列で定義
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

      // `drawer__close.button or overlay`クリックで閉じる
      drawerCloseTriggers.forEach((trigger) => {
        trigger.addEventListener('click', function () {
          close();
        });
      });

      /**
       * イベントリスナー
       * - ブレークポイント768px以上に切り替わった際、ドロワーを閉じる
       */
      const mediaQueryList = window.matchMedia('(min-width:768px)');
      const listener = () => {
        if (mediaQueryList) {
          close();
        }
      };
      mediaQueryList.addEventListener('change', listener);
    }
  });
};

export { drawer };
