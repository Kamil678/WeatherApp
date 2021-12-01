import React from 'react';

const CitySearch = (props) => {
  return ( 
    <form onSubmit = {props.submitForm}>
      <input 
        type = "text" 
        value = {props.inputValue}
        onChange = {props.inputChange}
        placeholder = "Wpisz miasto"
      />
      <button >Wyszukaj misato</button>
    </form>
   );
}
 
export default CitySearch;


