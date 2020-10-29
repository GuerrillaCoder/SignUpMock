import React, { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";


export default function TextInput(props) {

  const labelRef = useRef(null);

  return (
    <div>

      {props.label &&
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-5 text-gray-700"
        >
          {props.label}
        </label>
      }
      <div className="mt-1 rounded-md shadow-sm z-10">
        <input
        
        onChange={props.onChange}
          id={props.id}
          type={props.type ?? "text"}
          className="appearance-none z-10 relative block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
          placeholder={props.placeHolder}
          required={props.required ?? false}
          
        />
        </div>
        <div className="h-6">
        <CSSTransition
          in={props.showValidation ?? false}
          mountOnEnter
          unmountOnExit
          // in={true}
          // timeout={{
          //   appear: 1000,
          // }}
          timeout={{
            appear: 0,
            enter: 0,
            exit: 800,
           }}
          appear={true}
          nodeRef={labelRef}
          classNames={{
            appear: 'my-appear',
            appearActive: 'animate__animated animate__fadeInDown',
            appearDone: 'my-done-appear',
            enter: 'my-enter',
            enterActive: 'animate__animated animate__slideInDown',
            enterDone: 'animate__animated animate__slideInDown',
            exit: 'animate__animated animate__slideOutUp',
            exitActive: 'animate__animated animate__slideOutUp',
            exitDone: 'animate__animated animate__slideOutUp',
           }}
        >
          <div ref={labelRef} 
          // className={(props.showValidation ? "" : "opacity-0") + " z-0"}
          >
          <p className={" validation text-sm mb-1 text-red-600 z-0 h-6"}>
            {props.valMessage}
          </p>
          </div>

        </CSSTransition>
        </div>

      
    </div>
  );
}
