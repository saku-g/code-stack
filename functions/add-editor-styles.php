<?php
/**
 * Add editor style
 *
 * @package WordPress
 * @author Sacck
 */

/**
 * Lazy Blocksで自動付与される親要素のdivを取り除く
 */
function add_editor_styles() {
	// phpcs:ignore
	wp_enqueue_style( 'editor-style', get_theme_file_uri( '/editor-styles/editor-style.css' ) );
}
add_action( 'enqueue_block_editor_assets', 'add_editor_styles' );
