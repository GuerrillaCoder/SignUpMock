import React, {useState, useRef} from "react";
import Buttons from "./components/Buttons";
import {CSSTransition} from "react-transition-group";
import SubHead from "./components/SubHead";
import useInProp from './hooks/useInProp'; 

export default function GscVerify({state, setState, moveNext : parentMoveNext, movePrev: parentMovePrev, entryDirection, prev, showPrev, showNext}) {

    const {inProp, startMoveback, startMoveNext, move, moveDirection, moveValue} = useInProp(parentMovePrev, parentMoveNext);

    const slideRef = useRef(null);

    return (
        <CSSTransition
      nodeRef={slideRef}
        in={inProp}
        onExited={move}
        timeout={{
          appear: 2000,
          exit: 1000
        }}
        appear={true}
        classNames={{
          appearActive: "animate__animated animate__fadeIn" ,
          exitActive:  "animate__animated animate__bounceOutUp"
        }}
      >
        <div ref={slideRef}>
            <SubHead text="You may import up to 3 domains from GSC for free."/>

            <img className="mx-auto w-1/2 m-8" src="img/gsc.png" alt=""/>
            <div className="text-center">
            <button
            onClick={() => startMoveNext()}
                className="mx-auto inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
                Import
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

        </div>
        </CSSTransition>
    );
}