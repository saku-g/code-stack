<?php
/**
 * Loop article
 *
 * @package WordPress
 * @author Sacck
 */

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
					the_post_thumbnail( 'medium' );
					?>
				<?php else : ?>
					<img
						width="280"
						height="156"
						src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/img/default-thumbnail.png"
						srcset="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/img/default-thumbnail.png 1x,
						<?php echo esc_url( get_template_directory_uri() ); ?>/assets/img/default-thumbnail@2x.png 2x"
					>
				<?php endif; ?>
			</div>
		</a>
	</article>
	<?php
endwhile;
