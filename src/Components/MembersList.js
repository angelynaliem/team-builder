import React from "react";

const MembersList = props => {
  return (
    <div>
      {props.members.map(member => (
        <div key={member.id}>
          <h2>Name: {member.name}</h2>
          <p>Email: {member.email}</p>
          <p>Role: {member.role}</p>
        </div>
      ))}
    </div>
  );
};

export default MembersList;
