import React, { useState } from "react";
import PropTypes from 'prop-types';
import "./AddCategory.css";

const AddCategory = ({setCategory}) => {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
      event.preventDefault();

      if(inputValue.trim().length > 2){
          setCategory(c=> [inputValue, ...c]);
          setInputValue('');
      }
  }

  return (
    <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Buscar..."
        ></input>
    </form>
  );
};

AddCategory.propTypes = {
  setCategory: PropTypes.func.isRequired
}

export default AddCategory;
