/* ----------------------------------------
  Drawer Menu
---------------------------------------- */

// export文を使ってhello関数を定義する。
export function drawer() {
  const hamburgerButton = document.getElementById('js-hamburger');
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
