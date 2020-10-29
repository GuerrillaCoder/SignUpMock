import React, {useState, useRef} from "react";
import Buttons from "./components/Buttons";
import SubHead from "./components/SubHead";
import TextInput from "./components/TextInput";
import * as EmailValidator from 'email-validator';
import { CSSTransition } from "react-transition-group";
import useInProp from './hooks/useInProp'; 

export default function CreateAccount(props) {

    const [emailValid, setEmailValid] = useState(false);
    const [passValid, setPassValid] = useState(false);
    const [emailValidationMessage, setEmailValidationMessage] = useState(null);
    const [passValidationMessage, setPassValidationMessage] = useState(null);
    const slideRef= useRef(null);
    // const [inProp, setInProp] = useState(true);

    const [inProp, val, setValue, exit] = useInProp(props.movePrev, props.moveNext);

    function validateEmail(event) {
        clearTimeout(window.validateTimer);
        window.validateTimer = setTimeout((val) => {
            if (EmailValidator.validate(val)) {
                setEmailValid(true);
            } else {
                setEmailValidationMessage("Please enter a valid email address")
                setEmailValid(false);
            }
        }, 1000, event.target.value);
    }

    function validatePass(event) {
        clearTimeout(window.validateTimer);
        window.validateTimer = setTimeout((val) => {
            if (val.length >= 6) {
                setPassValid(true);
            } else {
                setPassValidationMessage("Password must be 6 or more characters")
                setPassValid(false);
            }
        }, 1000, event.target.value);
    }

    return (
      <CSSTransition
      nodeRef={slideRef}
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
        <div ref={slideRef}>
            <SubHead text="Create a login to add links to watch"/>

            <div className="mt-6">
                <form className="mb-8" action="#" method="POST">
                    <div>
                        <TextInput
                            showValidation={(emailValid === false && emailValidationMessage !== null)}
                            valMessage={emailValidationMessage}
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
                    movePrev={props.movePrev}
                    moveNext={props.moveNext}/>
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
                        <img onClick={props.moveNext} className="mx-auto h-14 mt-3" src="img/google-signin.png" alt=""/>
                        <img onClick={props.moveNext} className="mx-auto h-12 mt-3" src="img/facebook_login.png" alt=""/>
                        <img onClick={props.moveNext} className="mx-auto mt-3" src="img/signin-button-linkedin.png" alt=""/>
                        <img onClick={props.moveNext} className="mx-auto mt-3" src="img/sign-in-with-twitter.png" alt=""/>
                    </div>

                </div>
            </div>

        </div>
        </CSSTransition>
    );
}
