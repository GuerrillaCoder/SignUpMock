import React, { useState } from "react";
import ReactCSSTransitionGroup from "react-transition-group";
import "./styles.css";
import SelectType from "./steps/SelectType";
import EnterDomaiun from "./steps/EnterDomain";
import Error from "./steps/Error";
import CreateAccount from "./steps/CreateAccount";
import GscVerify from './steps/GscVerify';
import SelectGscDomains from "./steps/SelectGscDomains";
import SetupComplete from "./steps/SetupComplete";
import TrackBacklinks from "./steps/TrackBacklinks";


export default function App() {
  const [details, setDetails] = useState({
    title: "Create Account",
    name: null,
    accountType: null,
    // domains: ["example1.com", "examfffffffffffsssssssssssssssssssssssssssssssssssffffffffple2.com", "example3.com"],
    domains: [],
    links: {},
    email: null,
    password: null,
    gscToken: null
  });

  const [currentSlide, setCurrentSlide] = useState("SelectType");
  const [lastValue, setLastValue] = useState(null);
  const [formState, setFormState] = useState({name: ""});
  const [slideHistory, setSlideHistory] = useState([])
  const [entryDirection, setEntryDirection] = useState("next");

  let getCurrentComponentString = () => {
    return slideHistory[slideHistory.length - 1];
  };

  const slideConnections = {
    SelectType : {
      title: "Get Started",
      component: <SelectType prev={false} next={true} movePrev={movePrev} moveNext={moveNext} state={details} setState={setDetails} entryDirection={entryDirection} />,
      free: "CreateAccount",
      pro: "EnterDomain",
      height:{
        0: "600px"
      }
    },
    EnterDomain: {
      title: "Get Started",
      next: "TrackBacklinksPro",
      component: <EnterDomaiun prev={true} next={false} movePrev={movePrev} moveNext={moveNext} state={details} setState={setDetails} entryDirection={entryDirection} />,
      height:{
        0: "370px"
      }
      //todo
    },
    CreateAccount: {
      title: "Create Account",
      component: <CreateAccount prev={true} next={false} movePrev={movePrev} moveNext={moveNext} state={details} setState={setDetails} entryDirection={entryDirection} />,
      next: "GscVerify",
      height:{
        0: "640px"
      }
    },
    GscVerify: {
      title: "Import Domains",
      component: <GscVerify prev={false} next={false} movePrev={movePrev} moveNext={moveNext} state={details} setState={setDetails} entryDirection={entryDirection} />,
      next: "SelectGscDomains",
      height:{
        0: "310px"
      }
    },
    SelectGscDomains : {
      title: "Select Domains",
      component: <SelectGscDomains prev={false} showPrev={false} next={false} movePrev={movePrev} moveNext={moveNext} state={details} setState={setDetails} entryDirection={entryDirection} />,
      next: "TrackBacklinksFree",
      height:{
        0: "540px"
      }
    },
    SetupComplete: {
      title: "Setup Complete",
      component: <SetupComplete state={details} />,
      height:{
        0: "580px"
      }
    },
    TrackBacklinksFree: {
      title: "Add URLs",
      component: <TrackBacklinks movePrev={movePrev} moveNext={moveNext} state={details} setState={setDetails} entryDirection={entryDirection} />,
      next: "SetupComplete",
      height:{
        0: "615px"
      }
    },
    TrackBacklinksPro: {
      title: "Add URLs",
      component: <TrackBacklinks showSelect={false} movePrev={movePrev} moveNext={moveNext} state={details} setState={setDetails} entryDirection={entryDirection} />,
      next: "SetupComplete",
      height:{
        0: "600px"
      }
    }
  }

  function getSlide(){

    console.log("Current slide: " + currentSlide);
    return slideConnections[currentSlide].component;

  }

  function moveNext(val = null){

    setSlideHistory(prev => [...prev, currentSlide]);

    if(val === null){
      setCurrentSlide(prev => slideConnections[prev].next)
    }
    else{
      setCurrentSlide(prev => slideConnections[prev][val])
    }
    
    setLastValue(val);
  }

  function movePrev(){

    setSlideHistory((prev) => {
      const newSH = [...prev]
      newSH.pop()
      return newSH
    })

    setCurrentSlide(slideHistory[slideHistory.length - 1]);
  }

  function getHeight(height) {
    let h = "";

    for (const w in height) {
      if (w < window.innerWidth) h = height[w];
    }

    return h;
  }

  const wizardStyle = {
    height: getHeight(slideConnections[currentSlide].height)
  }

  // let currentComponent = getComponent(getCurrentComponentString());

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
      <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/v1/workflow-mark-on-white.svg" alt="Workflow" />
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          {slideConnections[currentSlide].title}
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div style={wizardStyle} className="transition-all duration-500 ease-in-out  overflow-hidden bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {getSlide()}
          {console.log("render")}
        </div>
      </div>
    </div>
  );
}
