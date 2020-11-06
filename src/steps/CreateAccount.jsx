import React, {useState, useRef} from "react";
import Buttons from "./components/Buttons";
import SubHead from "./components/SubHead";
import TextInput from "./components/TextInput";
import * as EmailValidator from 'email-validator';
import { CSSTransition } from "react-transition-group";
import useInProp from './hooks/useInProp'; 

export default function CreateAccount({state, setState, moveNext : parentMoveNext, movePrev: parentMovePrev, entryDirection, prev, showPrev, showNext}) {

    const [emailValid, setEmailValid] = useState(false);
    const [passValid, setPassValid] = useState(false);
    const [emailValidationMessage, setEmailValidationMessage] = useState(null);
    const [passValidationMessage, setPassValidationMessage] = useState(null);
    const slideRef= useRef(null);


    const {inProp, startMoveback, startMoveNext, move, moveDirection, moveValue} = useInProp(parentMovePrev, parentMoveNext);

    function validateEmail(event) {

        let email = event.target.value;
        // if (EmailValidator.validate(email)) 
        setState(prev => ({...prev, email: email}));

        let valid = EmailValidator.validate(email)
        setEmailValid(valid);

        clearTimeout(window.validateTimer);
        window.validateTimer = setTimeout((val) => {
            if (!val) setEmailValidationMessage("Please enter a valid email address");
            
        }, 1000, valid);
    }

    function validatePass(event) {

        let pass = event.target.value;
        console.log({...state, password: pass});
        setState(prev => ({...prev, password: pass}));

        let valid = pass.length >= 6
        setPassValid(valid);

        clearTimeout(window.validateTimer);
        window.validateTimer = setTimeout((val) => {
            if(!val) setPassValidationMessage("Password must be 6 or more characters");
        }, 1000, valid);
    }

    return (
      <CSSTransition
      nodeRef={slideRef}
        in={inProp}
        onExited={move}
        timeout={{
          appear: 800,
          exit: 500
        }}
        appear={true}
        classNames={{
          appearActive: entryDirection === "next" ?  "animate__animated animate__slideInRight" : "animate__animated animate__slideInLeft",
          exitActive:  moveDirection === "next" ? "animate__animated animate__fadeOutLeft" : "animate__animated animate__fadeOutRight"
        }}
      >
        <div ref={slideRef}>
            <SubHead text="Create a login to add links to watch"/>

            <div className="mt-6">
                <form className="mb-8" action="#" method="POST">
                    <div>
                        <TextInput
                            showValidation={(emailValid === false && emailValidationMessage !== null)}
                            valMessage={emailValidationMessage}
                            defaultValue={state.email}
                            type="email"
                            id="email"
                            required={true}
                            label="Email Address"
                            onChange={(event) => validateEmail(event)}/>
                    </div>
                    <div className="">
                        <TextInput
                            showValidation={(passValid === false && passValidationMessage !== null)}
                            // showValidation={true}
                            valMessage={passValidationMessage}
                            defaultValue={state.password}
                            type="password"
                            id="password"
                            required={true}
                            label="Password"
                            onChange={(event) => validatePass(event)}/>
                    </div>

                </form>

                <Buttons
                    back={true}
                    next={emailValid && passValid}
                    // movePrev={props.movePrev}
                    // moveNext={props.moveNext}
                    movePrev={() => startMoveback()}
                    moveNext={() => startMoveNext()}
                    
                    />
                <div className="mt-6">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"/>
                        </div>
                        <div className="relative flex justify-center text-sm leading-5">
                            <span className="px-2 bg-white text-gray-500">
                                Or continue with
                            </span>
                        </div>
                    </div>
                    <div className="text-center w-3/4 mx-auto">
                        <img onClick={() => startMoveNext()} className="mx-auto h-14 mt-3" src="img/google-signin.png" alt=""/>
                        <img onClick={() => startMoveNext()} className="mx-auto h-12 mt-3" src="img/facebook_login.png" alt=""/>
                        <img onClick={() => startMoveNext()} className="mx-auto mt-3" src="img/signin-button-linkedin.png" alt=""/>
                        <img onClick={() => startMoveNext()} className="mx-auto mt-3" src="img/sign-in-with-twitter.png" alt=""/>
                    </div>

                </div>
            </div>

        </div>
        </CSSTransition>
    );
}
