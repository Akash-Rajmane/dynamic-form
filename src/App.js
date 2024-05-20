import React, { useState } from "react";
import "./App.css";

function App() {
  const [formFields, setFormFields] = useState([{ name: "", age: "" }]);

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formFields);
    setFormFields([{ name: "", age: "" }]);
  };

  const addFields = () => {
    let newField = {
      name: "",
      age: "",
    };

    setFormFields([...formFields, newField]);
  };

  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1);
    setFormFields(data);
  };

  return (
    <div className="app">
      <form onSubmit={submitHandler}>
        {formFields.map((form, index) => {
          return (
            <div key={index}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={(event) => handleFormChange(event, index)}
                value={form.name}
              />
              <input
                type="number"
                name="age"
                placeholder="Age"
                onChange={(event) => handleFormChange(event, index)}
                value={form.age}
              />
              <button type="button" onClick={() => removeFields(index)}>
                Remove
              </button>
            </div>
          );
        })}
        <button type="button" onClick={addFields}>
          Add More..
        </button>
        <br />
        <button type="submit">Submit</button>{" "}
      </form>
    </div>
  );
}

export default App;
