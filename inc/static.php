<?php 
/**
 * Static
 */

function mui_admin_enqueue_scripts() {
  wp_enqueue_style('med-user-import-admin-css', MUI_URI . '/dist/css/med-user-import.admin.bundle.css', false, MUI_VERSION);
  wp_enqueue_script('med-user-import-admin-js', MUI_URI . '/dist/med-user-import.admin.bundle.js', ['jquery'], MUI_VERSION, true);

  wp_localize_script('med-user-import-admin-js', 'MUI_PHP_DATA', [
    'ajax_url' => admin_url('admin-ajax.php'),
    'lang' => [],
    'settings' => []
  ]);
}

add_action('admin_enqueue_scripts', 'mui_admin_enqueue_scripts');