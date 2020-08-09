/** @format */

import React from "react";

export default function Form({ update, submit, value, dispatch }) {
  const onChange = (event) => {
    const { value } = event.target;
    update(value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    submit();
  };
  const onClick = () => {
    dispatch({ type: "CLEAR_TODO" });
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="text">
          <input
            type="text"
            name="text"
            id="text"
            placeholder="ENTER YOUR TODO"
            value={value}
            onChange={onChange}
          />
        </label>
        <button type="submit" className="green">
          Add{" "}
        </button>
      </form>
      <button className="red" onClick={onClick}>
        clear completed
      </button>
    </div>
  );
}
