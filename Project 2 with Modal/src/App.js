import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/UsersList/UserList";

function App() {
  const [enteredUser, setUser] = useState([]);
  function userListHandler(username, userage) {
    setUser((prev) => {
      return [
        ...prev,
        { name: username, age: userage, id: Math.random().toString() },
      ];
    });
  }
  return (
    <div>
      <AddUser onUser={userListHandler} />
      <UserList users={enteredUser} />
    </div>
  );
}

export default App;
