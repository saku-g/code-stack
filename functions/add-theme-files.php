<?php
/**
 * Add my theme files
 *
 * @package WordPress
 * @author Sacck
 */

/**
 * CSS・JSファイルの読み込み
 */
function add_theme_files() {
	/* google-font */
	wp_enqueue_style(
		'google-font',
		'//fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap',
		array(),
		null,
	);
	/* my-css */
	wp_enqueue_style(
		'my-style',
		get_theme_file_uri( '/assets/css/app.css' ),
		array(),
		filemtime( get_theme_file_path( '/assets/css/app.css' ) ),
	);
	/* my-js */
	wp_enqueue_script(
		'my-script',
		get_theme_file_uri( '/assets/js/app.js' ),
		array(),
		filemtime( get_theme_file_path( '/assets/js/app.js' ) ),
		true,
	);

}

add_action( 'wp_enqueue_scripts', 'add_theme_files' );
