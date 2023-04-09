<?php
/**
 * Plugin Name: Code Snippets Generator
 * Plugin URI:  https://www.braveryk7.com/
 * Description: This is a generator plugin for Code snippets code generation.
 * Version:     1.0.0
 * Author:      Ken-chan
 * Author URI:  https://twitter.com/braveryk7
 * Text Domain: code-snippets-generator
 * Domain Path: /languages
 * License:     GPL2
 *
 * @author Ken-chan
 * @package WordPress
 * @subpackage Code Snippets Generator
 * @since 1.0.0
 */

declare( strict_types = 1 );

if ( ! defined( 'ABSPATH' ) ) {
	exit( 'You do not have access rights.' );
}

load_plugin_textdomain( 'code-snippets-generator', false, basename( dirname( __FILE__ ) ) . '/languages' );

/**
 * Short code to output the display part of Code Snippets Generator.
 */
function code_snippets_generator_shortcode() {
	if ( str_ends_with( get_permalink( get_the_ID() ), '/code-snippets-generator/' ) ) {
		echo '<div id="code-snippets-generator"></div>';
	}
}
add_shortcode( 'code-snippets-generator', 'code_snippets_generator_shortcode' );
