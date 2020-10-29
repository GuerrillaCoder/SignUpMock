import React, {useState} from 'react';

export default function CheckBox({
    checked,
    disabled,
    key,
    label,
    selected,
    name,
    value,
    onChange: parentChange
}) {

    return <label key={key} className="">
        <input id={name} name={name} value={value} 
            onChange={(e) => {
                e.persist();
                parentChange(e);
            }}

            type="checkbox" className="form-checkbox ml-2 h-5 w-5 text-gray-600" disabled={disabled} checked={selected}/>
        <span
            className={"ml-2 " + (checked
            ? "font-semibold "
            : "") + (disabled
            ? "text-gray-400"
            : "text-gray-700")}>{label}</span>
    </label>

}