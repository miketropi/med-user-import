export const getAllUsers = async () => {
  return await jQuery.ajax({
    type: 'POST',
    url: MUI_PHP_DATA.ajax_url,
    data: {
      action: 'mui_ajax_get_all_users',
    }
  });
}

export const importUsers = async (usersImport) => {
  return await jQuery.ajax({
    type: 'POST',
    url: MUI_PHP_DATA.ajax_url,
    data: {
      action: 'mui_ajax_import_users',
      users: usersImport,
    }
  })
}