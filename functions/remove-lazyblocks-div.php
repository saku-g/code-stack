<?php
/**
 * Remove lazyblocks div
 *
 * @package WordPress
 * @author Sacck
 */

/**
 * Lazy Blocksで自動付与される親要素のdivを取り除く
 */
add_filter( 'lazyblock/alert/frontend_allow_wrapper', '__return_false' );
add_filter( 'lazyblock/related-article/frontend_allow_wrapper', '__return_false' );
