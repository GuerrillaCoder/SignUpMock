import React, { useState, useRef } from "react";
import Buttons from "./components/Buttons";
import TextInput from "./components/TextInput";
import isValidDomain from "is-valid-domain";
import isUrl from "../helpers/url-helper";
import { CSSTransition } from "react-transition-group";

export default function EnterDomain(props) {
  const [valMessage, setValMessage] = useState("invisible");
  const [nextEnable, setNextEnable] = useState(props.next);
  const [prevEnable, setPrevEnable] = useState(props.prev);
  const [inProp, setInProp] = useState(true);
  const domainRef = useRef(null);

  const [showValidation, setShowValidation] = useState(false);

  function validate(val) {
    // console.log("Validate " + val);
    // if (!isUrl(val)) {
    //   setValMessage("");
    // }
    // else {
    //   setValMessage("invisible");
    // }

    if (!isUrl(val) && !showValidation) {
      setShowValidation(true);
    }
    
    if (isUrl(val) && showValidation) {
      setShowValidation(false);
    }
  }

  function handleChange(event) {
    if (isUrl(event.target.value)) {
      // console.log(event.target.value + " is url");
      setNextEnable(true);
    } else {
      setNextEnable(false);
      // console.log(event.target.value + " is NOT url");
    }
    
    clearTimeout(window.validateTimer);
    window.validateTimer = setTimeout(
      (val) => {
        // console.log("Trigger:" + val);
        validate(val);
      },
      1000,
      event.target.value
    );
  }

  return (
    <CSSTransition
    nodeRef={domainRef}
      in={inProp}
      // onExited={() => moveNext()}
      timeout={{
        appear: 2000,
        exit: 1000
      }}
      appear={true}
      classNames={{
        appearActive: "animate__animated animate__slideInRight"
        // exitActive:
        //   val === "free" ? selectedOutAnimation : notSelectedOutAnimation
      }}
    >
      <div ref={domainRef}>
        <h3 className="font-medium text-xl text-center mb-4">Enter Domain</h3>
        <p className="mb-4">
          Enter the domain that you want to monitor backlinks for (ownership
          verification with GSC is required for free accounts)
        </p>

        <TextInput 
          showValidation={showValidation} 
          valMessage="Please enter a valid domain to continue"  
          placeHolder="https://example.com"
          label="Domain"
          onChange={(event) => handleChange(event)}
        />
        <p className="mb-8 text-sm italic">
          You will be able to add in more domains to track later
        </p>
        <Buttons
          back={true}
          next={nextEnable}
          movePrev={props.movePrev}
          moveNext={props.moveNext}
        />
      </div>
    </CSSTransition>
  );
}
