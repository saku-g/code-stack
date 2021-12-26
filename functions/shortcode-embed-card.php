<?php
/**
 * Shortcode embed card
 *
 * @package WordPress
 * @author Sacck
 */

/**
 * ショートコードにオリジナルのブログカードを登録する
 *
 * @param atts $atts 属性の連想配列.
 */
function shortcode_embed_card( $atts ) {
	// phpcs:ignore
	extract(
		shortcode_atts(
			array(
				'url'     => '',
				'title'   => '',
				'excerpt' => '',
			),
			$atts
		)
	);

	/* OGP情報を取得 */
	require_once get_theme_file_path( './OpenGraph.php' );
	$graph = OpenGraph::fetch( $url );

	/* OGPタグからタイトルを取得 */
	$title   = $graph->title;
	$img_src = $graph->image;

	if ( null !== $img_src ) {
		$img_tag = '<img src="' . $img_src . '" />';
	} else {
		$img_tag = null;
	}

	/* HTML出力 */
	$sc_embed_card  = null;
	$sc_embed_card .= '
	<div class="embed-card">
		<a class="embed-card__link" href="' . $url . '" target="_blank" rel="noreferrer noopener">
			<div class="embed-card__body">
				<span class="embed-card__title">' . $title . '</span>
			</div>
			<div class="embed-card__thumbnail">'
				. $img_tag .
			'</div>
		</a>
	</div>';

	return $sc_embed_card;
}

/* ショートコードに登録 */
add_shortcode( 'sc_embed_card', 'shortcode_embed_card' );
