<?php 
/**
 * Admin
 */

add_action('admin_menu', 'mui_add_user_import_page');

function mui_add_user_import_page() {
  add_submenu_page(
		'tools.php',
		__('Users Import', 'mui'),
		__('Users Import', 'mui'),
		'manage_options',
		'med-user-import-page',
		'mui_users_import_page_callback' );
}

function mui_users_import_page_callback() {
  ?>
  <div id="USERS_IMPORT_PAGE">
    <!-- React render -->
  </div> <!-- #USERS_IMPORT_PAGE -->
  <?php
}