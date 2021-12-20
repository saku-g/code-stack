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
