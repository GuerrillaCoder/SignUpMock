import React, {useState, useRef} from "react";
import Buttons from "./components/Buttons";
import {CSSTransition} from "react-transition-group";
import SubHead from "./components/SubHead";
import CheckBox from "./components/CheckBox";

export default function SelectGscDomains(props) {

    const [enableSelection,
        setEnableSelection] = useState(true);
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

    function handleChange(index, event) {
        console.log(event.target.value);
        console.log(event.target.name);
        console.log(event.target.checked);
    }

    return (
        <div className="">
            <div className="">
                <SubHead text="3 domains remaining"/>
                {domains.map((domain, i) => (
                    <div key={i} className="odd:bg-gray-200">
                        <CheckBox 
                            disabled={false} 
                            label={domain}
                            name={"checkbox_" + i}
                            onChange={(index, e) => handleChange(i, e)}
                        />
                    </div>

                ))
}
            </div>
        </div>
    )
}