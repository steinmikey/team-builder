import React from "react";

export default function Form(props) {
  const { submit, formValues, setFormValues } = props;

  const onChange = (evt) => {
    setFormValues({ ...formValues, [evt.target.name]: evt.target.value });
  };

  return (
    <form onSubmit={submit}>
      <div>
        <label>
          Name
          <input type="text" name="name" onChange={onChange} value={formValues.name} />
        </label>
        <label>
          Email
          <input type="email" name="email" onChange={onChange} value={formValues.email} />
        </label>
        <label>
          Role
          <select onChange={onChange} name="role" value={formValues.role}>
            <option value="">-----Role-----</option>
            <option value="bEndEngineer">Backend Engineer</option>
            <option value="fEndEngineer">Frontend Engineer</option>
            <option value="pManager">Project Manager</option>
            <option value="pArchitect">Project Architect</option>
            <option value="uiDesigner">UI Designer</option>
            <option value="uxDesigner">UX Designer</option>
          </select>
        </label>
        <div className="submit">
          <button>submit</button>
        </div>
      </div>
    </form>
  );
}
