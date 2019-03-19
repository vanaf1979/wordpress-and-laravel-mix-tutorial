<?php
/*!
Theme Name:         Mix tutorial
Theme URI:          https://vanaf1979.nl/
Description:        WordPress and Laravel Mix tutorial.
Version:            1.0.0
Author:             Vanaf1979
Author URI:         https://vanaf1979.nl
Text Domain:        mix-tutorial
License:            MIT License
License URI:        http://opensource.org/licenses/MIT
*/


function mix_tutorial_enqueue_styles() {
  
    $theme = wp_get_theme();

    wp_enqueue_style( $theme->get('TextDomain') . '-app' , get_template_directory_uri() . '/public/css/app.css' , array() , $theme->get('Version') , 'all' );

}

add_action( 'wp_enqueue_scripts', 'mix_tutorial_enqueue_styles' );


function mix_tutorial_enqueue_scripts() {
  
    $theme = wp_get_theme();

    wp_enqueue_script( $theme->get('TextDomain') . '-jquery' , 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js' , array() , '3.3.1' , true );
    wp_enqueue_script( $theme->get('TextDomain') . '-app' , get_template_directory_uri() . '/public/js/app.js' , array() , $theme->get('Version') , true );

}

add_action( 'wp_enqueue_scripts', 'mix_tutorial_enqueue_scripts' );

?>
