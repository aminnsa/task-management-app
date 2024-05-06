import React from "react";
import ErrorMessage from "./ErrorMessage";
import cx from 'classnames'

function Input({ placeHolder, onChange, error }) {
  return (
   <div className="flex flex-col w-full gap-2">
     <input
      className={cx("bg-gray-300 text-gray-800 h-14 rounded-md p-3 outline-none", error && 'border border-1 border-red-500')}
      placeholder={placeHolder}
      onChange={onChange}
    />
    {error && <ErrorMessage message={error}/>}
   </div>
  );
}

export default Input;
