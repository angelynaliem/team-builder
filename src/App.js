import React, { useState } from 'react';
import ReactDOM from "react-dom";
import data from "./data";
import MembersList from "./Components/MembersList";
import Form from "./Components/Form";
import logo from './logo.svg';
import './App.css';

function App() {

  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Angelyn Liem",
      email: "angelyn-liem@lambdastudents.com",
      role:
        "Full Stack Web Development"
    },
    {
        id: 2,
        name: "Asher Jackie Miao",
        email: "asher-jackie-miao@dinosaurland.com",
        role:
          "Boss"
    },
    {
        id: 3,
        name: "Darrell Liem Miao",
        email: "darrell-liem-miao@buffetland.com",
        role:
          "Asher's partner-in-crime"
    },
    {
        id: 4,
        name: "Darren Chuan-Roo Miao",
        email: "darren-chuan-roo-miao@coffeeland.com",
        role:
          "Parry Gripp's DJ"
    }
  ]);

  const addNewMember = (member) => {
    setMembers([...members, {...member, id: Date.now() }])

  };

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
       <h1>Our Members</h1>
       <Form addNewMember={addNewMember} name="Default name" />
      <MembersList members={members} />
      </header>
    </div>
  );
}

export default App;
 
  
  