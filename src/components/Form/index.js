// == Import npm
import React from 'react';

// == Import
import './form.scss';

// == Composant
const Form = ({ manageSubmit, value, setValue }) => (
  <form
    className="form_container"
    onSubmit={(event) => {
      event.preventDefault();
      manageSubmit();
    }}
  >
    <input
      className="form_input-addTask"
      placeholder="Ajouter une tâche"
      type="text"
      value={value}
      onChange={(event) => {
        setValue(event.currentTarget.value);
      }}
    />
    <button type="submit">
      Ajouter
    </button>
  </form>
);

// == Export
export default Form;
