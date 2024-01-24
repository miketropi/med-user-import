export default function UsersTableList({ users, onImport }) {
  return <div>
    <div className="users-import-meta">
      <div>{ users.length } Users import.</div>
      <div>
        <button className="button" onClick={ onImport }>Import Users</button>
      </div>
    </div>
    <table className="wp-list-table widefat fixed striped table-view-list">
      <thead>
        <tr>
          <th width="5%">Std</th>
          <th>Name</th> 
          <th>Email</th>
          <th>Password Default</th>
        </tr>
      </thead>
      <tbody>
        { 
          users.map((u, _u_index) => {
            return <tr className={ u.exists == true ? '__exists' : '' } key={ `u_key_${ _u_index }` } title={  u.exists == true ? 'User exists' : '' }>
              <td>{ _u_index + 1 }</td>
              <td>{ u.Name }</td>
              <td>{ u.Email.toLowerCase() }</td>
              <td>{ u.Password }</td>
            </tr>
          }) 
        }
      </tbody>
    </table>
  </div>
}