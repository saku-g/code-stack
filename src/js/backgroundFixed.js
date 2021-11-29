/* ----------------------------------------
  背面ロック
---------------------------------------- */
/**
 *
 * @param state → `true` or `false` - 背景固定の状態
 */
const backgroundFixed = (state) => {
  /**
   * ドキュメントのスクロール要素を取得
   */
  const rootElement = 'scrollingElement' in document ? document.scrollingElement : document.documentElement;

  /**
   * 変数にスクロール量を格納
   */
  const scrollY = state ? rootElement.scrollTop : parseInt(document.body.style.top || '0');

  /**
   * 表示されているスクロールバーとの差分を計測し、背面固定時はその差分body要素に余白を生成する
   */
  const scrollbarWidth = window.innerWidth - document.body.clientWidth;

  /**
   * CSSで背面を固定
   */
  const styles = {
    position: 'fixed',
    top: `${scrollY * -1}px`,
    left: '0',
    width: '100%',
    height: '100vh',
    paddingRight: `${scrollbarWidth}px`,
    overflow: 'hidden',
  };

  Object.keys(styles).forEach((key) => {
    document.body.style[key] = state ? styles[key] : '';
  });

  /**
   * 背面固定解除時に元の位置にスクロールする
   */
  if (!state) window.scrollTo(0, scrollY * -1);
};

export { backgroundFixed };
