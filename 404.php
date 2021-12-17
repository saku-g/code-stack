<?php
/**
 * 404ページテンプレート
 *
 * @package WordPress
 * @author Sacck
 */

?>

<?php get_header(); ?>

<!-- drawer-nav -->
<?php get_template_part( 'template-parts/drawer-nav' ); ?>

<!--main-->
<main class="l-main">
	<div class="l-container">
		<div class="hero">
			<h2 class="heading heading--1">404 - Page Not Found</h2>
			<p class="hero__text">アクセスしようとしたページが存在しません</p>
			<p class="hero__text">
				<a class="link" href="<?php echo esc_url( home_url( '/' ) ); ?>">
					<svg width="13" height="13">
						<use xlink:href="#back" fill="currentColor"></use>
					</svg>
					Back to top
				</a>
			</p>
		</div>
	</div><!-- /.l-container -->
</main>

<?php get_footer(); ?>
