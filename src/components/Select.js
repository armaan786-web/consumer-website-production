import React from "react";
import Select from "react-select";
import './SelectStyle.css';



function SelectInput(props) {
  const { error } = props;
  return (
    <div style={{height:"100%", width: "100%"}}>
      <Select
        isClearable={false}
        formatCreateLabel={(userInput) => `${userInput} (Add New Address)`}
        {...props}
      />
      {error ? (
        <p style={{ paddingTop: 5, fontSize: 13, color: "red" }}>{error}</p>
      ) : null}
    </div>
  );
}

export default SelectInput;
