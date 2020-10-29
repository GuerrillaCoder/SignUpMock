import React, { useState, useRef } from "react";
import SubHead from "./components/SubHead";
import { CSSTransition } from "react-transition-group";
import useInProp from './hooks/useInProp'; 

export default function SelectType(props) {
  // const [inProp, setInProp] = useState(true);
  // const [val, setVal] = useState(null);
  const freeOptionRef = useRef(null);
  const proOptionRef = useRef(null);

  const [inProp, val, setValue, exit] = useInProp();

  let selectedOutAnimation = "animate__animated animate__fadeOut";
  let notSelectedOutAnimation = "animate__animated animate__fadeOutLeft";

  // function moveNext() {
  //   console.log("Moving next from SelectType value: " + val);
  //   props.moveNext(val);
  // }

  // function handleMove(val) {
  //   setVal(val);
  //   setInProp(false);
  // }

  return (
    <>
      <CSSTransition
      nodeRef={freeOptionRef}
        in={inProp}
        // onExited={() => moveNext()}
        onExited={() => props.moveNext(val)}
        timeout={{
          appear: 2000,
          exit: 750
        }}
        appear={true}
        classNames={{
          appearActive: "animate__animated animate__zoomIn",
          exitActive:
            val === "free" ? selectedOutAnimation : notSelectedOutAnimation
        }}
      >
        <div ref={freeOptionRef}>
          <SubHead text="Free Account" />

          <div className="w-8/12 mx-auto mt-4">
            <ul className="list-disc">
              <li className="mb-1">
                Verify domain ownership with Google Search Console (Required)
              </li>
              <li className="mb-1">Track up to 3 domains for free</li>
              <li className="mb-1">1,000 URLs per domain watched</li>
              <li className="mb-1">Free Forever</li>
            </ul>
          </div>

          <button
            // onClick={() => handleMove("free")}
            onClick={() => setValue("free")}
            type="submit"
            className="mt-8 mx-auto flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
          >
            Start Free
            <svg
              className="ml-2 w-6 h-6"
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
        </div>
      </CSSTransition>

      <CSSTransition
      nodeRef={proOptionRef}
        in={inProp}
        // onExited={() => moveNext()}
        onClick={() => setValue("Pro")}
        timeout={{
          appear: 2000,
          exit: 1000
        }}
        appear={true}
        classNames={{
          appearActive: "animate__animated animate__zoomIn",
          exitActive:
            val === "pro" ? selectedOutAnimation : notSelectedOutAnimation
        }}
      >
        <div ref={proOptionRef} className="mt-6">
          <div className="relative mb-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm leading-5">
              <span className="px-2 bg-white text-gray-500">Or</span>
            </div>
          </div>

          <SubHead text="Pro Account" />

          <div className="w-8/12 mx-auto mt-4">
            <ul className="list-disc">
              <li className="mb-1">No verification required</li>
              <li className="mb-1">Additional domains $7 each</li>
              <li className="mb-1">10,000 links watched per domain</li>
            </ul>
          </div>

          <button
            type="submit"
            className="mt-8 mx-auto flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
            onClick={() => setValue("pro")}
          >
            Choose Pro ($7)
            <svg
              className="ml-2 w-6 h-6"
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
        </div>
      </CSSTransition>
    </>
  );
}
