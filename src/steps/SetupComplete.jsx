import React, {useState, useRef} from "react";
import Buttons from "./components/Buttons";
import {CSSTransition} from "react-transition-group";
import SubHead from "./components/SubHead";
import CheckBox from "./components/CheckBox";

export default function SetupComplete({state})
{
    console.log(state);
    return (
        <div className="text-center">
            <p>(Remember to confirm your email address by clicking the link in your email)</p>
            <div className="text-left mt-6 leading-10">
                <h2 className="text-lg font-bold mb-4">Account Details:</h2>
                <p><strong>User: </strong>{state.email}</p>
                <p><strong>Pass: </strong>******</p>
                <p><strong>Type: </strong>Free</p>
                <h2><strong>Domains:</strong></h2>
                <ul className="list-disc list-inside pl-8">
                    {
                        state.domains.map(domain => {
                            return <li key={domain}>{domain}</li>
                        })
                    }
                </ul>
            </div>
        </div>
        
    )
}