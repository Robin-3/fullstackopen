import React from "react";
import Input from "./Input";

const FormAddPerson = props => {
  const { inputName, inputNumber, handleSubmit, handleInputName, handleInputNumber } = props
  return (
    <form onSubmit={handleSubmit}>
      <Input label='name:' value={inputName} handleChange={handleInputName} />
      <Input label='number:' value={inputNumber} handleChange={handleInputNumber} />
      <div><button type="submit">add</button></div>
    </form>
  )
}

export default FormAddPerson
