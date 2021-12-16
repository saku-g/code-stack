<?php
/**
 * Drawerテンプレート
 *
 * @package WordPress
 * @author Sacck
 */

?>

<aside class="l-drawer-nav">
	<div class="drawer">
		<div class="drawer__header">
			<a href="<?php echo esc_url( home_url( '/' ) ); ?>">
				<img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/img/logo-colored.svg" alt="SACCK" width="98" height="24">
			</a>
		</div>
		<div class="drawer__body">
			<h2 class="heading drawer__title">Components</h2>
			<nav class="drawer__nav">
			<?php
			$args = array(
				'post_type'      => 'post',
				'post_status'    => 'publish',
				'posts_per_page' => -1,
				'order'          => 'ASC',
				'orderby'        => 'title',
			);

			$the_query = new WP_Query( $args );
			if ( $the_query->have_posts() ) :
				?>
				<ul class="drawer__list">
				<?php
				while ( $the_query->have_posts() ) :
					$the_query->the_post();
					?>
					<li class="drawer__item">
						<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
					</li>
					<?php
				endwhile;
			endif;
			wp_reset_postdata();
			?>
				</ul>
			</nav>
		</div>
	</div>
</aside>
