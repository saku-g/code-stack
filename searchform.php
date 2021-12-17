<?php
/**
 * 検索フォームテンプレート
 *
 * @package WordPress
 * @author Sacck
 */

?>

<form method="get" action="<?php echo esc_url( home_url() ); ?>" id="searchform" class="search-form">
	<input type="text" name="s" value="<?php the_search_query(); ?>" placeholder="Search" class="search-form__field" id="js-search-field">
</form>
