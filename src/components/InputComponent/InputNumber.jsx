import { useState } from "react";

const InputNumber = () => {
  const [number, setNumber] = useState();
  const handleOnChange = (e) => {
    if (e.target.value.length <= 9) {
      setNumber(e.target.value);
    }
  };
  return (
    <>
      <label htmlFor="number">Telefon raqamingiz</label>
      <div className="input__group-wrapper">
        <span>+998</span>
        <input
          className="input-group"
          onChange={handleOnChange}
          type="number"
          id="number"
          value={number || ""}
          placeholder="71 200 70 07"
        />
      </div>
    </>
  );
};

export default InputNumber;
