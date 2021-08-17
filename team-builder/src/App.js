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
  const [teamMembers, setTeamMembers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [error, setError] = useState(null);

  const submitForm = (evt) => {
    evt.preventDefault();
    const newTeamMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    };

    if (!newTeamMember.name || !newTeamMember.email || !newTeamMember.role) {
      setError(`Make sure to enter a name and email!
      and select a role!`);
      return;
    }
    setTeamMembers([...teamMembers, newTeamMember]);
    setFormValues(initialFormValues);
  };

  return (
    <div className="App">
      <h1>Team Builder</h1>
      <Form submit={submitForm} formValues={formValues} setFormValues={setFormValues} />
      {error && <div>{error}</div>}
      {teamMembers && (
        <div>
          {teamMembers.map((teamMember, index) => {
            return <TeamMember key={index} details={teamMember} />;
          })}
        </div>
      )}
    </div>
  );
}
