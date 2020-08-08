import React, { useState } from "react";

const Form = (props) => {

  const [member, setMember] = useState({ name: props.name, email: "", role: "" });
 
  const handleChanges = (event) => {

    const newStateObj = { ...member, [event.target.name]: event.target.value };
    setMember(newStateObj);
  };

  const submitForm = (event) => {
    event.preventDefault(); 
    props.addNewMember(member); 
    setMember({ name: "", email: "", role: "" }); 
  };

  console.log("member", member);

  return (
    <form onSubmit={submitForm}>
  
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        placeholder="Enter your full name"
        name="name"
        value={member.name}
        onChange={handleChanges}
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        placeholder="Enter your email address"
        name="email"
        value={member.email}
        onChange={handleChanges}
      />

       <label htmlFor="role">Role</label>
       <input
        id="role"
        placeholder="Enter your role"
        name="role"
        value={member.role}
        onChange={handleChanges}
      />

      <button type="submit">Add Member</button>

    </form>
  );
};

export default Form;
