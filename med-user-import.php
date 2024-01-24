<?php 
/*
Plugin Name: Med User Import
Plugin URI: #
Description: Import users
Version: 1.0.1
Author: Mike
Author URI: #
Text Domain: med-user-import
*/ 

{
  /** 
   * Defined
   */
  define('MUI_VERSION', '1.0.1');
  define('MUI_URI', plugin_dir_url(__FILE__));
  define('MUI_DIR', plugin_dir_path(__FILE__));
}

{
  /**
   * Inc
   */
  require(MUI_DIR . '/inc/static.php');
  require(MUI_DIR . '/inc/helpers.php');
  require(MUI_DIR . '/inc/ajax.php');
  require(MUI_DIR . '/inc/hooks.php'); 

  require(MUI_DIR . '/inc/admin.php'); 
}

{
  /**
   * Boot 
   */
}
