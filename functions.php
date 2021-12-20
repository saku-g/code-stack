<?php
/**
 * テーマ内で使用する関数
 *
 * @package WordPress
 * @author Sacck
 */

/**
 * Add Theme Supports
 * WordPressのテーマ拡張機能の有効化
 */
function my_theme_setup() {
	add_theme_support( 'post-thumbnails' ); /* サムネイル有効化 */
}
add_action( 'after_setup_theme', 'my_theme_setup' );

/**
 * 関数群の読み込み
 * require_onceを先頭に付け、重複ファイルの読み込み防ぐ
 */
require_once get_theme_file_path( './functions/add-theme-files.php' ); /* CSS・JSファイルの読み込み */
require_once get_theme_file_path( './functions/add-image-size.php' ); /* サムネイルサイズの設定 */
require_once get_theme_file_path( './functions/search-filter.php' ); /* 検索対象を投稿のみに適用 */
require_once get_theme_file_path( './functions/remove-lazyblocks-div.php' ); /* Lazy Blocksで自動付与される親要素のdivを取り除く */
