import React, {useState, useRef} from "react";
import Buttons from "./components/Buttons";
import {CSSTransition} from "react-transition-group";
import SubHead from "./components/SubHead";
import CheckBox from "./components/CheckBox";

export default function SetupComplete(props)
{
    return (
        <div className="text-center">
            <p>(Remember to confirm your email address by clicking the link in your email)</p>
            <div className="text-center mt-6">
                <button>
                    Finish
                </button>

            </div>
        </div>
        
    )
}