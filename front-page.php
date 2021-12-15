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
		<?php
		while ( have_posts() ) :
			the_post();
			?>
			<article class="card">
				<a class="card__link" href="<?php the_permalink(); ?>">
					<div class="card__body">
						<h3 class="heading card__title"><?php the_title(); ?></h3>
					</div>
					<div class="card__thumbnail">
						<?php
						if ( has_post_thumbnail() ) :
							the_post_thumbnail( 'list-thumbnail' );
							?>
						<?php else : ?>
							<img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/img/default-thumbnail.png" width="280" height="156" srcset="">
						<?php endif; ?>
					</div>
				</a>
			</article>
		<?php endwhile; ?>
	<?php endif; ?>
		</div>
	</div><!-- /.l-container -->
</main>

<?php get_footer(); ?>
