import React, { useState } from "react";

const Form = (props) => {

    // Set the state empty

  const [member, setMember] = useState({ name: "", email: "", role: "" });

    // Creating a function/event listener? for onChange. Using spread operator to keep everything the same, and using the 'name' attribute so that it knows which to change because we're using one onChange method for all fields. 
 
  const handleChanges = (event) => {

    const newStateObj = { ...member, [event.target.name]: event.target.value };
    setMember(newStateObj);
  };

    // Use prevent default here to prevent the form from refreshing and clearing the info details we just submitted via form.   
  
    const submitForm = (event) => {
    event.preventDefault(); 
    // Firing the addNewMember function/event listener? when we submit the form.
    props.addNewMember(member); 
    // Clearing the form once we have submitted a form.
    setMember({ name: "", email: "", role: "" }); 
  };

  console.log("member", member);

  return (
    <form onSubmit={submitForm} className="form">

        {/* The name used for htmlFor and id must be the same? */}
  
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
