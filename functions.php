<?php
/**
 * テーマ内で使用する関数
 *
 * @package WordPress
 * @author Sacck
 */

/**
 * 関数群の読み込み
 * require_onceを先頭に付け、重複ファイルの読み込み防ぐ
 */
require_once get_theme_file_path( './functions/add_theme_files.php' ); /* CSS・JSファイルの読み込み */
