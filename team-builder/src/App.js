import React, { useState } from "react";
import "./App.css";
import Form from "./Form";
import TeamMember from "./TeamMember";

const initialFormValues = {
  name: "",
  email: "",
  role: "",
};

export default function App() {
  const [teamMembers, setTeamMembers] = useState();

  const [formValues, setFormValues] = useState(initialFormValues);

  return (
    <div className="App">
      <h1>Team Builder</h1>
      <Form />
      {teamMembers && (
        <div>
          {teamMembers.map((teamMember) => {
            return <TeamMember />;
          })}
        </div>
      )}
    </div>
  );
}
