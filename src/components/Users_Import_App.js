import { useUsersImportContext } from "../libs/context"
import UsersTableList from "../components/Users_Table_list"
import ImportSegmentsBar from "./Import_Segments_Bar";

export default function UsersImportApp() {
  const { 
    version, 
    loadInit,
    wpUsers,
    users, setUsers,
    importUsersFn,
    inProgressImport, setInProgressImport,
    importSegments, setImportSegments,
    SegmentsNumber,
    percentImport
  } = useUsersImportContext();

  const onChangeFile = (event) => {
    let reader = new FileReader();
    reader.onload = function(event) {
      let jsonObj = JSON.parse(event.target.result);
      jsonObj.map(o => {
        // wpUsers
        let found = wpUsers.find(_wpu => {
          return _wpu.user_email == o.Email
        });

        if(found) {
          o.exists = true;
        }

        return o;
      });

      setUsers(jsonObj);
      setImportSegments(Math.ceil(jsonObj.length / SegmentsNumber));
    }
  
    reader.readAsText((event.target.files[0]));
  }

  return <div className="user-import-page-container">
    <div className="__heading">
      <h2>Users Import Page</h2>
    </div>
    <div className="__upload-form">
      <form method="post">
        Select file to import: 
        <input type="file" name="fileToUpload" onChange={ onChangeFile }/>
        {/* <button type="submit">Upload file</button> */}
      </form>
    </div>
    {
      inProgressImport &&
      <ImportSegmentsBar percent={ percentImport } />
    }
    <div className="__entry">
      {/* { JSON.stringify(users) } */}
      {
        users && 
        users.length > 0 && 
        <UsersTableList users={ users } onImport={ importUsersFn } />
      }
    </div>
  </div>
}