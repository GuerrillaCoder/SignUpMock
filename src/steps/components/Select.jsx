import React, {useState, useEffect} from 'react';

export default function Select({values, labelCharacters, onSelect}) {

    const [showOptions,
        setShowOptions] = useState(false);
    const [valueStates,
        setValueStates] = useState(values);
    // const [currentSelection, setCurrentSelection] = useState(() => {     let obj
    // = values.find((obj) => obj.selected === true);     onSelect(obj);     return
    // obj; });
    const [currentSelection,
        setCurrentSelection] = useState(values.find((obj) => obj.selected === true));
    const [maxLabelCharacter,
        setmaxLabelCharacter] = useState(labelCharacters ?? 45);

    useEffect(() => {
        console.log("in select")
        console.log(currentSelection);
        onSelect(currentSelection);
        // if(currentSelection === {})
        // {
        //     onSelect(values.find((obj) => obj.selected === true))
        // }
        // else{
        //     onSelect(currentSelection);
        // }
        
    }, [currentSelection]);

    function chopString(string) {
        if (string.length > maxLabelCharacter) {
            return string.slice(0, maxLabelCharacter) + "...";
        }

        return string;

    }

    function handleSelection(event) {
        let selected = event.target.dataset.value;

        let selectedObj = {};

        setValueStates(prev => {
            return prev.map(value => {

                if (value.value == currentSelection.value) 
                    value.selected = false;
                if (value.value === selected) {
                    value.selected = true;
                    setCurrentSelection(value);
                }

                return value;

            })
        })

        // onSelect(currentSelection);
    }

    return (
        <div
            className="mt-4 relative inline-block text-left"
            className="relative inline-block text-left">
            <div>
                <span className="rounded-md shadow-sm">
                    <button
                        onFocus={() => setShowOptions(true)}
                        onBlur={() => setShowOptions(false)}
                        type="button"
                        className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150"
                        id="options-menu"
                        aria-haspopup="true"
                        aria-expanded="true">
                        {chopString(currentSelection.value)}
                        <svg
                            className="-mr-1 ml-2 h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor">
                            <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"/>
                        </svg>
                    </button>
                </span>
            </div>

            <div
                className={(showOptions
                ? "visible"
                : "invisible") + " origin-top-right absolute left-0 mt-2 min-w-56 rounded-md shadow-lg"}>
                <div className="rounded-md bg-white shadow-xs">
                    <div
                        className="py-1"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu">

                        {valueStates.map((value, index) => <a
                            onMouseDown={handleSelection}
                            key={index}
                            data-label={value.label}
                            data-value={value.value}
                            href="#"
                            className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                            role="menuitem">
                            {chopString(value.label)}
                            {value.selected && <svg
                                className="w-4 h-4 float-right"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"></path>
                            </svg>
}
                        </a>)
}
                    </div>
                </div>
            </div>
        </div>
    )
}