/* ----------------------------------------
  Drawer Menu
---------------------------------------- */

export function drawer() {
  const hamburgerButton = document.getElementById('js-hamburger-button');
  const sidebar = document.getElementById('js-sidebar');
  const overlay = document.getElementById('js-overlay');
  let drawerState = false;

  const drawerOpen = () => {
    drawerState = true;
    sidebar.classList.add('is-open');
    overlay.classList.add('is-visible', 'is-trigger-hamburger');
  };

  const drawerClose = () => {
    drawerState = false;
    sidebar.classList.remove('is-open');
    overlay.classList.remove('is-visible', 'is-trigger-hamburger');
  };

  hamburgerButton.addEventListener('click', function () {
    if (!drawerState) {
      drawerOpen();
      /**
       * CSSで背面を固定
       */
      const styles = {
        height: '100vh',
        left: '0',
        overflow: 'hidden',
        position: 'fixed',
        top: `${scrollY * -1}px`,
        width: '100vw',
      };

      // Object.keys(styles).forEach((key) => {
      //   // console.log(key);
      //   document.body.style[key] = styles[key];
      // });

      // overlayクリックで閉じる
      overlay.addEventListener('click', function () {
        drawerClose();
      });

      // ブレイクポイント992px以上で閉じる処理
      const mediaQueryList = window.matchMedia('(min-width:992px)');
      const initialDrawer = () => {
        if (window.matchMedia('(min-width:992px)')) {
          drawerClose();
        }
      };
      mediaQueryList.addEventListener('change', initialDrawer);
    }
  });
}
