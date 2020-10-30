import React, { useState } from "react";

export default function useInProp(movePrev, moveNext)
{
    const [inProp, setInProp] = useState(true);
    const [val, setVal] = useState(null);
    const [moveDirection, setMoveDirection] = useState(null);
    function handleMoveNext(val)
    {
        moveNext(val);
    }

    if(moveDirection === "next")
    {
        moveNext(val);
    }
    else if(moveDirection === "prev")
    {
        movePrev(val);
    }


    function setValue(val)
    {
        setInProp(false);
        setVal(val);
        setMoveDirection("next");
    }

    function exit(){
        setInProp(false);
        setMoveDirection("prev");
    }

    // function exitComponent()
    // {
    //     setInProp(false);
    // }



    return [inProp, val, setValue, exit]
}