import React, {useState, useRef} from 'react';

export default function useInProp(movePrev, moveNext) {

    //animation logic
    const [inProp, setInProp] = useState(true);
    const [moveDirection, setMoveDirection] = useState(null);
    const [moveValue, setMoveValue] = useState(null);



    function move() {
        if (moveDirection === "prev") 
            movePrev();
        if (moveDirection === "next") 
            moveNext(moveValue);
        }
    
    function startMoveback() {
        setMoveDirection("prev");
        setInProp(false);
    }

    function startMoveNext(val = null) {
        setMoveValue(val);
        setMoveDirection("next");
        setInProp(false);
    }

    return {inProp, startMoveback, startMoveNext, move, moveDirection, moveValue}
}