import React, {useState, useRef, useEffect, useLayoutEffect} from "react";
import Buttons from "./components/Buttons";
import {CSSTransition} from "react-transition-group";
import SubHead from "./components/SubHead";
import useInProp from './hooks/useInProp';
import Select from './components/Select';
import TextInput from './components/TextInput';
import { isConstructSignatureDeclaration } from "typescript";

export default function TrackBacklinks({state, setState, moveNext: parentMoveNext, movePrev: parentMovePrev, entryDirection, showSelect = true}) {

    const {
        inProp,
        startMoveback,
        startMoveNext,
        move,
        moveDirection,
        moveValue
    } = useInProp(parentMovePrev, parentMoveNext);
    const slideRef = useRef(null);

    const [currentSelection, setCurrentSelection] = useState(
        {
            label: state.domains[0],
            value: state.domains[0],
            selected: true
        }
        );
    const [linkData, setLinkData] = useState(() => {

        let links = ({...state.links} ?? {});
        for(const domain of state.domains){
            if(!links.hasOwnProperty(domain))
            {
                links[domain] = {urls:"", provider:""};
            }
        }
        // console.log("Link data")
        // console.log(links);
        return links;
    });

    let values = state.domains.map((domain, index) => {
        return {
            label: domain,
            value: domain,
            selected: index === 0
        }
    });

    function saveLinks(event) {

        const val = event.target.value
        // console.log(val);

        // setState(prev => {

        //     let newState = ({...prev});

        //     newState.links[currentSelection.value].urls= val;

        //     console.log(newState);

        //     return newState;
        // })

        setLinkData(prev => {
            let newData = ({...linkData});
            newData[currentSelection.value].urls = val;
            return newData;
        });

        setState(prev => ({...state, links: linkData}));

        // console.log(linkData);

    }

    function handleSelection(value)
    {
        // console.log(value);
        setCurrentSelection(value);
        // console.log("in parent")
        // console.log(value);
    }

    function handleProvider(event)
    {
        const val = event.target.value

        setLinkData(prev => {
            let newData = ({...linkData});
            newData[currentSelection.value].provider = val;
            return newData;
        });

        setState(prev => ({...state, links: linkData}));
    }

    return (
        <CSSTransition
      nodeRef={slideRef}
        in={inProp}
        onExited={move}
        timeout={{
          appear: 550,
          exit: 550
        }}
        appear={true}
        classNames={{
          appearActive: entryDirection === "next" ?  "animate__animated animate__slideInRight" : "animate__animated animate__slideInLeft",
          exitActive:  moveDirection === "next" ? "animate__animated animate__fadeOutLeft" : "animate__animated animate__fadeOutRight"
        }}
      >
        <div ref={slideRef} className="">
            {console.log("component render")}
            {/* {console.log(currentSelection)} */}
            {showSelect && 
                <Select values={values} onSelect={handleSelection} labelCharacters={38} />
            }
            <p className="mt-4 text-md font-semibold">Enter URL(s) containing backlinks to your site</p>
            <p className="text-sm italic">(You can skip this step if you like by clicking next)</p>
            <textarea
            onChange={saveLinks}
            placeholder={'https://example1.com/my_link_is_here.html\nhttps://example2.com/my_link_is_also_here.html'}
            value={linkData[currentSelection.value].urls}
                name=""
                id=""
                cols=""
                rows="10"
                className="mt-3 resize-none rounded-md shadow-sm inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150"></textarea>
            <p className="text-sm italic">(We will check up to 1,000 per day for free)</p>
            <p className="mt-4 text-md font-semibold">Tag these URLs (optional)</p>
            {/* {console.log("provider")}
            {console.log(linkData[currentSelection.value].provider)}
            {console.log(linkData)} */}
            <TextInput placeHolder="ABC Link Vendor" hideValidation={true} value={linkData[currentSelection.value].provider} onChange={handleProvider} />
            <p className="text-sm italic mb-8">(If you add a provider name here later on you can run reports just on this provider)</p>
            <Buttons
                    back={true}
                    next={true}
                    // movePrev={props.movePrev}
                    // moveNext={props.moveNext}
                    movePrev={startMoveback}
                    moveNext={startMoveNext}
                    
                    />
        </div>
        </CSSTransition>
    )
}