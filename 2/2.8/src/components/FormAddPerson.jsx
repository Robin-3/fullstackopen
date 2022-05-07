import React from "react";

const FormAddPerson = props => {
  const { inputName, inputNumber, handleSubmit, handleInputName, handleInputNumber } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>name: <input value={inputName} onChange={handleInputName} /></div>
      <div>number: <input value={inputNumber} onChange={handleInputNumber} /></div>
      <div><button type="submit">add</button></div>
    </form>
  )
}

export default FormAddPerson
