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
			<a href="index.html">
				<img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/img/logo-colored.svg" alt="SACCK" width="98" height="24">
			</a>
		</div>
		<div class="drawer__body">
			<h2 class="heading drawer__title">Components</h2>
			<nav class="drawer__nav">
				<ul class="drawer__list">
					<?php
					$i = 1;
					for ( $i = 1; $i < 20; $i++ ) :
						?>
						<?php if ( 0 === $i % 3 ) : ?>
							<li class="drawer__item">
								<a href="single.html">MenuMenuMenuMenuMenuMenuMenuMenuMenuMenuMenuText</a>
							</li>
						<?php else : ?>
							<li class="drawer__item">
								<a href="single.html">menuText</a>
							</li>
						<?php endif; ?>
					<?php endfor; ?>
				</ul>
			</nav>
		</div>
	</div>
</aside>
