import React from "react";

export default function Form() {
  return (
    <form>
      <label>
        Name
        <input type="text" />
      </label>
      <label>
        Email
        <input type="text" />
      </label>
      <label>
        Role
        <select>
          <option value="bEndEngineer">Backend Engineer</option>
          <option value="fEndEngineer">Frontend Engineer</option>
          <option value="pManager">Project Manager</option>
          <option value="pArchitect">Project Architect</option>
          <option value="uiDesigner">UI Designer</option>
          <option value="uxDesigner">UX Designer</option>
        </select>
      </label>
    </form>
  );
}
