import React, { useState, useRef } from "react";
import Buttons from "./components/Buttons";
import TextInput from "./components/TextInput";
import isValidDomain from "is-valid-domain";
import isUrl from "../helpers/url-helper";
import { CSSTransition } from "react-transition-group";
import useInProp from './hooks/useInProp';

export default function EnterDomain(props) {
  const [valMessage, setValMessage] = useState("invisible");
  
  const [prevEnable, setPrevEnable] = useState(props.prev);
  const {
    inProp,
    startMoveback,
    startMoveNext,
    move,
    moveDirection,
    moveValue
} = useInProp(props.movePrev, props.moveNext);

  const domainRef = useRef(null);

  console.log(props.state.domains.length)

  const [domain, setDomain] = useState(props.state.domains.length > 0 ? props.state.domains[0] : "");
  const [nextEnable, setNextEnable] = useState(isUrl(domain));

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
    let eventVal = event.target.value
    if (isUrl(eventVal)) {
      // console.log(event.target.value + " is url");
      setNextEnable(true);
      props.setState(prev => ({...prev, domains: [eventVal]}))
    } else {
      setNextEnable(false);
      // console.log(event.target.value + " is NOT url");
    }

    setDomain(eventVal);
    
    clearTimeout(window.validateTimer);
    window.validateTimer = setTimeout(
      (val) => {
        // console.log("Trigger:" + val);
        validate(val);
      },
      1000,
      eventVal
    );
  }

  return (
    <CSSTransition
    nodeRef={domainRef}
      in={inProp}
      onExited={move}
      timeout={{
        appear: 550,
        exit: 550
      }}
      appear={true}
      classNames={{
        appearActive: props.entryDirection === "next" ?  "animate__animated animate__slideInRight" : "animate__animated animate__slideInLeft",
          exitActive:  moveDirection === "next" ? "animate__animated animate__fadeOutLeft" : "animate__animated animate__fadeOutRight"
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
          value={domain}
        />
        <p className="mb-8 text-sm italic">
          You will be able to add in more domains to track later
        </p>
        <Buttons
          back={true}
          next={nextEnable}
          movePrev={startMoveback}
          moveNext={startMoveNext}
        />
      </div>
    </CSSTransition>
  );
}
