<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package myTheme
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
	<head>
		<meta charset="<?php bloginfo( 'charset' ); ?>">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="profile" href="http://gmpg.org/xfn/11">
		<?php wp_head(); ?>
	</head>

	<body <?php body_class(); ?>>
		<div id="page" class="site">
		<header id="masthead" class="site-header" role="banner">
			<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
			<div id="logo">
				<a href="<?php echo esc_url( home_url( '/' ) ); ?>"><img <?php echo 'src="'.get_template_directory_uri().'/img/logo.png"'?> alt="Logo site Thomas Brun" height="50" title="Retour à l'accueil" id="logo-image" /></a>
			</div>
			<div id="primary-menu-access">
			</div>
			<?php
				wp_nav_menu( array( 'theme_location' => 'primary',
									'menu_id' => 'primary-menu' ) );
			?>
		</header><!-- #masthead -->
		<div id="content" class="site-content">
		<!-- On récupère l'URL du fichier ou l'on se trouve pour les images du footer -->
		<script>
			var templateUrl = '<?= get_bloginfo("template_url"); ?>';
		</script>