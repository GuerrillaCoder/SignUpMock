import React, { useState } from "react";

export default function Buttons(props) {
  // const [status, setStatus] = useState({

  // });

  let nextEnabled =
    "inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150";
  let nextDisabled =
    "cursor-not-allowed  inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-gray-300 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150";
  let backEnabled =
    "inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150";
  let backDisabled =
    "cursor-not-allowed  inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-4 font-medium rounded-md text-gray-400 bg-white  transition ease-in-out duration-150";

  return (
    <div className="buttons mt-4">
      <span className="float-left rounded-md shadow-sm">
        <button
          onClick={props.movePrev}
          type="button"
          className={props.back === true ? backEnabled : backDisabled}
        >
          <svg
            className="mr-1 h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
          Back
        </button>
      </span>
      <span className="float-right rounded-md shadow-sm">
        <button
          type="button"
          className={props.next === true ? nextEnabled : nextDisabled}
        >
          Next
          <svg
            className="ml-2 -mr-1 h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </span>
      <div className="clear-both"></div>
    </div>
  );
}
