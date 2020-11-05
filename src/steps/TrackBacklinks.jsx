import React, {useState, useRef} from "react";
import Buttons from "./components/Buttons";
import {CSSTransition} from "react-transition-group";
import SubHead from "./components/SubHead";
import useInProp from './hooks/useInProp';
import Select from './components/Select';
import TextInput from './components/TextInput';

export default function TrackBacklinks({state, setState, moveNext: parentMoveNext, movePrev: parentMovePrev, entryDirection}) {

    const {
        inProp,
        startMoveback,
        startMoveNext,
        move,
        moveDirection,
        moveValue
    } = useInProp(parentMovePrev, parentMoveNext);
    const slideRef = useRef(null);

    const [currentSelection, setCurrentSelection] = useState({});

    let domains = ["example1.com", "examfffffffffffsssssssssssssssssssssssssssssssssssffffffffple2.com", "example3.com"];

    let values = domains.map((domain, index) => {
        return {
            label: domain,
            value: domain,
            selected: index === 0
        }
    });

    function saveLinks(event) {
        console.log(event.target.value);

        let currentIndex = domains.findIndex(domain => {
            // domain == curr
        })

    }

    function handleSelection(value)
    {
        // console.log(value);
        setCurrentSelection(value);
        console.log("in parent")
        console.log(currentSelection);
    }

    return (
        <div className="">
            <Select values={values} onSelect={handleSelection} />
            <p className="mt-4 text-md font-semibold">Enter URL(s) containing backlinks to your site</p>
            <p className="text-sm italic">(You can skip this step if you like by clicking next)</p>
            <textarea
            onBlur={saveLinks}
            placeholder={'https://example1.com/my_link_is_here.html\nhttps://example2.com/my_link_is_also_here.html'}
                name=""
                id=""
                cols=""
                rows="10"
                className="mt-3 resize-none rounded-md shadow-sm inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150"></textarea>
            <p className="text-sm italic">(We will check up to 1,000 per day for free)</p>
            <p className="mt-4 text-md font-semibold">Tag these URLs (optional)</p>
            <TextInput placeHolder="ABC Link Vendor" hideValidation={true} />
            <p className="text-sm italic">(If you add a provider name here later on you can run reports just on this provider)</p>
            <Buttons
                    back={true}
                    next={true}
                    // movePrev={props.movePrev}
                    // moveNext={props.moveNext}
                    movePrev={startMoveback}
                    moveNext={startMoveNext}
                    
                    />
        </div>
    )
}