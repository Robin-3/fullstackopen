import React from "react";
import Input from "./Input";

const Filter = ({ value, handleInput }) => {
  return (
    <Input label='filter show with' value={value} handleChange={handleInput} />
  )
}

export default Filter
