import React, { useState } from "react";
import Buttons from "./components/Buttons";
import SubHead from "./components/SubHead";

export default function CreateAccount(props) {
  function nextEnable() {
    return false;
  }

  return (
    <div>
      <SubHead text="Create Account" />
      <Buttons
        back={true}
        next={nextEnable}
        movePrev={props.movePrev}
        moveNext={props.moveNext}
      />
    </div>
  );
}
