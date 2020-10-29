import React, {useState} from 'react';

export default function CheckBox({disabled, key, label, selected, name, value, onChange: parentChange}) {

    const [selectedState, setSelectedState] = useState(selected ?? false);

    function handleChange(event){
        setSelectedState(!selectedState);
        parentChange(key,event);
    }

    return <label key={key}  className="inline-flex items-center mt-3">
        <input id={name} name={name} value={value} onChange={handleChange} type="checkbox" className="form-checkbox h-5 w-5 text-gray-600"
        disabled={disabled} checked={selected} />
        <span className={"ml-2 " + (selectedState ? "font-semibold " : "") + (disabled ? "text-gray-400" : "text-gray-700")}>{label}</span>
    </label>

}