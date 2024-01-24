import { createContext, useContext, useState, useEffect } from "react";
import { getAllUsers, importUsers } from "./api";

const UsersImportContext = createContext();

const UsersImportContext_Provider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loadInit, setLoadInit] = useState(true);
  const [wpUsers, setWpUsers] = useState([]);
  const [inProgressImport, setInProgressImport] = useState(false);
  const [SegmentsNumber, setSegmentsNumber] = useState(100)
  const [importSegments, setImportSegments] = useState(0);
  const [currentSegmentsImport, setCurrentSegmentsImport] = useState(0);
  const [percentImport, setPercentImport] = useState(0);

  const _getAllWpUsers = async () => {
    const res = await getAllUsers();
    setWpUsers(res);
    setLoadInit(false);
  }

  const importUsersFn = async () => {
    const r = confirm('Are you sure you want to import?');
    if(!r) return;

    setInProgressImport(true);

    async function* asyncImportUserGenerator() {
      let i = 1;
      while (i <= importSegments) {
        yield i++;
      }
    }

    (async () => {
      for await (const num of asyncImportUserGenerator()) {
        // console.log(num);
        let _u = users.slice((num - 1) * 100, 100 * num);
        const res = await importUsers(_u);
        setCurrentSegmentsImport(num);
        setPercentImport(((num / importSegments) * 100 ));
      }
    })();

    // const res = await importUsers(users);
    // console.log(res);
  }

  useEffect(() => {
    _getAllWpUsers();
  }, [])

  const value = {
    version: '1.0.1',
    loadInit,
    wpUsers,
    users, setUsers,
    importUsersFn,
    inProgressImport, setInProgressImport,
    importSegments, setImportSegments,
    currentSegmentsImport, setCurrentSegmentsImport,
    SegmentsNumber, setSegmentsNumber,
    percentImport
  }

  return <UsersImportContext.Provider value={ value }>
    { children }
  </UsersImportContext.Provider>;
}

const useUsersImportContext = () => {
  return useContext(UsersImportContext);
}

export { useUsersImportContext, UsersImportContext_Provider }