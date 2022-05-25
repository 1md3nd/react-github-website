import React, { useState } from "react";
import './App.css';
import Axios from 'axios';
import Repos from "./repos/repos";
import UserInfo from "./UserInfo/UserInfo";
function App() {
  const [query, setquery] = useState("")
  const [repos, setrepos] = useState([])
  const [Show, setShow] = useState(false)
  var url = 'https://api.github.com/users/'
  async function getUserInfo(){
    var result = await Axios.get(url+query);
    console.log(result.data);
    setrepos(result.data);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    setShow(true);
    getUserInfo();
  }

  return (
    <div className="App">
      {!Show ? (
        <div className="AppComponent">
         <h1> Get GitHub User Info</h1>
        <form className="appSearchForm" onSubmit={onSubmit}>
        <label>
          <input 
            className="appInput"
            type="text" 
            value={query}
            onChange={(e) => setquery(e.target.value)}/>
        </label>
        <input className="appSubmit" type="submit" value="Search"/>
      </form>
      </div>
      ): (
        <UserInfo repos = {repos}/>
        )}
        </div>
  );
}

export default App;
