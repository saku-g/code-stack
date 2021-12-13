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
		<div class="cards">
			<?php
			$i = 1;
			for ( $i = 1; $i <= 10; $i++ ) :
				?>
			<article class="card">
				<a class="card__link" href="single.html">
					<div class="card__body">
						<h3 class="heading card__title">Cards</h3>
					</div>
					<div class="card__thumbnail">
						<img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/img/card-sample.png" srcset="">
					</div>
				</a>
			</article>
			<?php endfor; ?>
		</div>
	</div><!-- /.l-container -->
</main>

<?php get_footer(); ?>
