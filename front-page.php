<?php
/**
 * フロントページテンプレート
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
			<h2 class="heading heading--1">Components</h2>
		</div>
	<?php if ( have_posts() ) : ?>
		<div class="cards">
			<?php get_template_part( 'template-parts/loop' ); ?>
		</div>
	<?php endif; ?>
	</div><!-- /.l-container -->
</main>

<?php get_footer(); ?>
