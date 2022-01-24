<?php
/**
 * ヘッダーテンプレート
 *
 * @package WordPress
 * @author Sacck
 */

?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<?php
	/* ページタイプに応じて要素を分岐 */
	$attr = is_home() || is_front_page() ? 'website' : 'article';
	?>
	<head prefix="og: og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# <?php echo esc_attr( $attr ); ?>: http://ogp.me/ns/<?php echo esc_attr( $attr ); ?>#">
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!-- favicon -->
	<link rel="icon" href="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/img/favicon.ico">
	<link rel="apple-touch-icon" href="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/img/apple-touch-icon.png" sizes="180x180">
	<!-- Google Font -->
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

	<!-- svg -->
	<?php get_template_part( 'template-parts/svg' ); ?>

	<!-- ルートコンテナ -->
	<div class="l-wrapper">

		<!-- header -->
		<header class="l-header">
			<div class="l-header__inner">
			<?php
			if ( is_home() || is_front_page() ) {
				$tag_start = '<h1 class="l-header__logo">';
				$tag_end   = '</h1>';
			} else {
				$tag_start = '<div class="l-header__logo">';
				$tag_end   = '</div>';
			}
			?>
				<?php echo wp_kses_post( $tag_start ); ?>
					<a href="<?php echo esc_url( home_url( '/' ) ); ?>">
						<img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/img/logo.svg" alt="SACCK" width="98" height="24">
					</a>
				<?php echo wp_kses_post( $tag_end ); ?>
				<button class="l-header__menu-button button button--hamburger" id="js-hamburger-button">
					<svg width="24" height="16">
					<use xlink:href="#hamburger" fill="#fff"></use>
					</svg>
				</button>
				<button class="l-header__search-button button button--search" id="js-search-button">
					<svg width="20" height="20">
					<use xlink:href="#search" fill="#fff"></use>
					</svg>
				</button>
				<!-- form-->
				<?php get_search_form(); ?>
			</div>
			<!-- overlay-->
			<div class="overlay" id="js-overlay"></div>
		</header>
