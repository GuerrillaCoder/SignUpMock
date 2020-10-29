import React, {useState, useRef} from "react";
import Buttons from "./components/Buttons";
import {CSSTransition} from "react-transition-group";
import SubHead from "./components/SubHead";
import CheckBox from "./components/CheckBox";

export default function SelectGscDomains(props) {

    const [selected,
        setSelected] = useState([]);

    let domains = [
        "example1.com",
        "example2.com",
        "example3.com",
        "example4.com",
        "example5.com",
        "example6.com",
        "example7.com",
        "example8.com",
        "example9.com",
        "example10.com",
        "example11.com",
        "example12.com",
        "example13.com",
        "example14.com",
        "example15.com",
        "example16.com"
    ];

    function handleChange(event) {

        console.log(event.target.name);
        console.log(event.target.value);
        console.log(event.target.checked);

        if (event.target.checked) {
            setSelected((prev) => [
                ...prev,
                event.target.name
            ]);
        } else {
            setSelected((prev) => prev.filter((name) => name !== event.target.name));
        }

    }

    const remaining = 3 - selected.length;

    const buttonStyle = selected.length > 0
        ? "inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 f" +
            "ont-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline" +
                "-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 t" +
                "ransition ease-in-out duration-150"
        : "cursor-not-allowed  inline-flex items-center px-4 py-2 border border-transparent" +
            " text-sm leading-5 font-medium rounded-md text-white bg-gray-300 focus:outline-n" +
                "one focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 tra" +
                "nsition ease-in-out duration-150";

    return (
        <div className="">
            <SubHead text={remaining + " domains remaining"} extraClasses="mb-4"/>
            <div
                className="p-4 border border-gray-300 max-h-300 scroll-y overflow-hidden overflow-y-auto">

                {domains.map((domain, i) => {
                    const checked = selected.indexOf("checkbox_" + domain) > -1;
                    return (
                        <div key={i} className="odd:bg-gray-200  p-2">
                            <CheckBox
                                checked={checked}
                                disabled={!checked && remaining === 0}
                                label={domain}
                                name={"checkbox_" + domain}
                                value={domain}
                                onChange={handleChange}/>
                        </div>
                    )
                })}
            </div>
            <p className="italic mt-3">Domain limit can be increased for $7 per domain</p>
            <div className="text-center mt-6">
                <button onClick={props.moveNext} className={buttonStyle}>
                    Add Domains
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
    )
}