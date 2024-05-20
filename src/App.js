import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";

function App() {
  const [formFields, setFormFields] = useState([{ id: uuid(), name: "", age: "" }]);

  const handleFormChange = (event, id) => {
    const newFormFields = formFields.map(field => {
      if (field.id === id) {
        return { ...field, [event.target.name]: event.target.value };
      }
      return field;
    });
    setFormFields(newFormFields);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formFields);
    setFormFields([{ id: uuid(), name: "", age: "" }]);
  };

  const addFields = () => {
    setFormFields([...formFields, { id: uuid(), name: "", age: "" }]);
  };

  const removeFields = (id) => {
    const newFormFields = formFields.filter(field => field.id !== id);
    setFormFields(newFormFields);
  };

  return (
    <div className="app">
      <form onSubmit={submitHandler}>
        {formFields.map((form, index) => (
          <div key={form.id}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={(event) => handleFormChange(event, form.id)}
              value={form.name}
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              onChange={(event) => handleFormChange(event, form.id)}
              value={form.age}
            />
            <button type="button" onClick={() => removeFields(form.id)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={addFields}>
          Add More..
        </button>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
