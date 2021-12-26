<?php
/**
 * Add wp block menu
 *
 * @package WordPress
 * @author Sacck
 */

/**
 * 管理画面にGutenbergの再利用ブロック一覧へのリンクを追加する
 */
function add_wp_block_menu() {
	if ( is_admin() ) {
		add_menu_page(
			'再利用ブロック',
			'再利用ブロック',
			'manage_options',
			'edit.php?post_type=wp_block',
			'',
			'dashicons-screenoptions',
			20
		);
	}
}
add_action( 'admin_menu', 'add_wp_block_menu' );
