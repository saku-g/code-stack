<?php
/**
 * Custom search filter
 *
 * @package WordPress
 * @author Sacck
 */

/**
 * 検索対象を投稿のみに適用
 *
 * @param query $query メインクエリに検索の条件を設定.
 */
function search_filter( $query ) {
	if ( is_admin() || ! $query->is_main_query() ) {
		return;
	}
	if ( $query->is_search() ) {
		$query->set( 'post_type', 'post' );
		$query->set( 'order', 'ASC' );
	}
}
add_action( 'pre_get_posts', 'search_filter' );
