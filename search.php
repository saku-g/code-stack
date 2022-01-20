<?php
/**
 * 検索結果ページテンプレート
 *
 * @package WordPress
 * @author Sacck
 */

get_header(); ?>

<!-- drawer-nav -->
<?php get_template_part( 'template-parts/drawer-nav' ); ?>

<!--main-->
<main class="l-main">
	<div class="l-container">
	<?php if ( have_posts() ) : /* 検索キーワードに該当する記事がある場合 */ ?>
		<div class="hero">
			<h2 class="heading heading--1">「<?php echo esc_html( get_search_query( false ) ); ?>」の検索結果</h2>
			<p class="hero__text"><?php echo esc_html( $wp_query->found_posts ); ?>件見つかりました。</p>
		</div>
		<div class="cards">
			<?php get_template_part( 'template-parts/loop' ); ?>
		</div>
	<?php else : /* 検索キーワードに該当する記事がない場合 */ ?>
		<div class="hero">
			<h2 class="heading heading--1">「<?php echo esc_attr( get_search_query( false ) ); ?>」の検索結果</h2>
			<p class="hero__text">キーワードに該当する記事はありませんでした。</p>
			<p class="hero__text">
				<a class="link" href="<?php echo esc_url( home_url( '/' ) ); ?>">
					<svg width="13" height="13">
						<use xlink:href="#back" fill="currentColor"></use>
					</svg>
					Back to top
				</a>
			</p>
		</div>
	<?php endif; ?>
	</div><!-- /.l-container -->
</main>

<?php
get_footer();
