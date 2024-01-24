/**
 * Script
 */
import { createRoot } from 'react-dom/client';
import { UsersImportContext_Provider } from './libs/context';
import UsersImportApp from './components/Users_Import_App';

((w, $) => {

  /**
   * DOM Ready
   */
  $(() => {
    const root = createRoot(document.getElementById('USERS_IMPORT_PAGE'));
    if(root)
      root.render(
      <UsersImportContext_Provider>
        <UsersImportApp />
      </UsersImportContext_Provider>);
  })
})(window, jQuery)
