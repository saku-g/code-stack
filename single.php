<?php
/**
 * 投稿ページテンプレート
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
	<?php
	if ( have_posts() ) :
		while ( have_posts() ) :
			the_post();
			?>
		<article class="post" id="post">
			<header class="post__header">
				<h1 class="heading heading--1"><?php the_title(); ?></h1>
			</header>
			<div class="post__meta">
				<div class="post__date date">
					<time class="date__posted" itemprop="datePublished" datetime="<?php the_time( 'c' ); ?>">
						<svg width="13" height="16">
							<use xlink:href="#calendar" fill="currentColor"></use>
						</svg>
						<?php the_time( 'Y.m.d' ); ?>
					</time>
				<?php if ( get_the_time( 'Ymd' ) !== get_the_modified_date( 'Ymd' ) ) : ?>
					<time class="date__updated" itemprop="dateModified" datetime="<?php the_modified_date( 'c' ); ?>">
						<svg width="16" height="16">
							<use xlink:href="#update" fill="currentColor"></use>
						</svg>
						<?php the_modified_time( 'Y.m.d' ); ?>
					</time>
				<?php endif; ?>
				</div>
			</div>
			<?php /* 目次がある場合はここに差し込まれる。目次はJSで生成。  */ ?>
			<section class="post__body edit-area">
				<?php
				the_content();  /* 投稿内容を取得 */
				?>
			</section>
		</article>
			<?php
		endwhile;
	endif;
	?>
	</div><!-- /.l-container -->
</main>

<?php get_footer(); ?>
