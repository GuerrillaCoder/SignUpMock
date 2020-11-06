import React, {useState, useRef} from "react";
import Buttons from "./components/Buttons";
import {CSSTransition} from "react-transition-group";
import SubHead from "./components/SubHead";
import CheckBox from "./components/CheckBox";
import useInProp from './hooks/useInProp';

export default function SetupComplete({state})
{
    console.log(state);
    const slideRef = useRef(null);
    
    return (
        <CSSTransition
        nodeRef={slideRef}
          in={true}
          timeout={{
            appear: 2000,
            exit: 1000
          }}
          appear={true}
          classNames={{
            appearActive: "animate__animated animate__fadeIn"
          }}
        >
        <div ref={slideRef} className="text-center">
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
                            return <li className="break-all" key={domain}>{domain}</li>
                        })
                    }
                </ul>
            </div>
            <button className= {"mt-8 inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 f" +
            "ont-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline" +
                "-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 t" +
                "ransition ease-in-out duration-150"}>
                        Go To Dashboard
                        <svg
                            className="ml-2 -mr-1 h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"></path>
                        </svg>
                    </button>
        </div>
        </CSSTransition>
        
    )
}