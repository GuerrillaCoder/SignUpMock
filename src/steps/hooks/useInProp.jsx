import React, {useEffect, useState} from "react";

export default function useInProp(movePrev, moveNext) {
    console.log(movePrev, "<==== my")

    const [inProp,
        setInProp] = useState(true);
    const [val,
        setVal] = useState(null);
    const [moveDirection,
        setMoveDirection] = useState(null);

    // function handleMoveNext(val) {   //  moveNext(val);  return movePrev() }

    useEffect(() => {
        if (moveNext || movePrev) {
            if (moveDirection === "next") {
                moveNext(val);
            } else if (moveDirection === "prev") {
                movePrev(val);
            }
        } else {
            console.log("please wait....")
        }

    }, [moveDirection])

    function move(){
        if (moveNext || movePrev) {
            if (moveDirection === "next") {
                moveNext(val);
            } else if (moveDirection === "prev") {
                movePrev(val);
            }
        } else {
            console.log("please wait....")
        }
    }

    function startMove(direction)
    {
        setInProp(false);
        setMoveDirection(direction);
    }

    function setValue(val) {
        setInProp(false);
        setVal(val);
        setMoveDirection("next");
    }

    function exit() {
        setInProp(false);
        setMoveDirection("prev");
    }

    // function exitComponent() {     setInProp(false); }

    return [inProp, val, startMove, move]
}