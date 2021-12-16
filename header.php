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
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!-- Google Font -->
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

	<!-- svg -->
	<?php get_template_part( 'template-parts/svg' ); ?>
	<!-- /svg -->

	<!-- ルートコンテナ -->
	<div class="l-wrapper">

		<!-- header -->
		<header class="l-header">
			<div class="l-header__inner">
				<h1 class="l-header__logo">
					<a href="<?php echo esc_url( home_url( '/' ) ); ?>">
						<img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/img/logo.svg" alt="SACCK" width="98" height="24">
					</a>
				</h1>
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
				<form class="search-form">
					<input class="search-form__field" id="js-search-field" type="text" name="s" placeholder="Search">
				</form>
			</div>
			<!-- overlay-->
			<div class="overlay" id="js-overlay"></div>
		</header>
