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

class slide {}

export default function App() {
  const [details, setDetails] = useState({
    title: "Create Account",
    step: 1,
    // branchHistory: ["Start"],
    // slideHistory: ["SelectType"],
    name: null,
    accountType: null,
    domain: null,
    links: null,
    username: null,
    password: null,
    gscToken: null
  });

  // const [slideHistory, setSlideHistory] = useState(["SelectType", "CreateAccount", "GscVerify", "SelectGscDomains"])
  // const [branchHistory, setBranchHistory] = useState(["Start", "Free", "Free", "Free"])
  const [slideHistory, setSlideHistory] = useState(["SelectType"])
  const [branchHistory, setBranchHistory] = useState(["Start"])

  let getCurrentComponentString = () => {
    return slideHistory[slideHistory.length - 1];
  };

  let getCurrentBranch = () => {
    return branchHistory[branchHistory.length - 1];
  };

  function getComponent(componentName) {
    console.log("name: " + componentName);
    switch (componentName) {
      case "SelectType":
        return <SelectType moveNext={moveNext} />;
      case "EnterDomain":
        return (
          <EnterDomaiun
            moveNext={moveNext}
            movePrev={movePrev}
            next={false}
            prev={true}
          />
        );
      case "CreateAccount":
        return (
          <CreateAccount
            moveNext={moveNext}
            movePrev={movePrev}
            next={false}
            prev={true}
          />
        );
        case "GscVerify":
        return (
          <GscVerify
            moveNext={moveNext}
            movePrev={movePrev}
            next={true}
            prev={false}
          />
        );
        case "SelectGscDomains":
          return (
            <SelectGscDomains
              moveNext={moveNext}
              movePrev={movePrev}
              next={false}
              prev={true}
            />
          );
          case "SetupComplete":
          return (
            <SetupComplete

            />
          );

      default:
        return <Error startAgain="SelectType" />;
    }
  }

  let moveNext = (option) => {
    console.log("moving next: " + getCurrentComponentString());
    console.log(details);
    switch (getCurrentComponentString()) {
      case "SelectType":
        let nextSlide = option === "free" ? "CreateAccount" : "EnterDomain";
        setSlideHistory((prev) => [...prev, nextSlide])
        setBranchHistory((prev) => [...prev, option])
        setDetails((details) => ({
          ...details,
          title: option === "free" ? "Create Account" : "Get Started"
        }));
        console.log(details);
        break;
      case "CreateAccount":
        setSlideHistory((prev) => [...prev, "GscVerify"]);
        setBranchHistory((prev) => [...prev, getCurrentBranch()]);
        setDetails((details) => ({
          ...details,
          title: "Import Domains"
        }));
        break;
        case "GscVerify":
          setSlideHistory((prev) => [...prev, "SelectGscDomains"]);
          setBranchHistory((prev) => [...prev, getCurrentBranch()]);
          setDetails((details) => ({
            ...details,
            title: "Select Domains"
          }));
          break;
          case "SelectGscDomains":
          setSlideHistory((prev) => [...prev, "SetupComplete"]);
          setBranchHistory((prev) => [...prev, getCurrentBranch()]);
          setDetails((details) => ({
            ...details,
            title: "Setup Complete"
          }));
          break;
      default:
        setSlideHistory((prev) => [...prev, "Error"])
    }
  };

  let movePrev = () => {
    console.log("moving back");

    setSlideHistory((prev) => {
      const newSH = [...prev]
      newSH.pop()
      return newSH
    })

    setBranchHistory((prev) => {
      const newBH = [...prev]
      newBH.pop()
      return newBH
    })
  };

  // let currentComponent = getComponent(getCurrentComponentString());

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
          alt="Workflow"
        />
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          {details.title}
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="transition-all overflow-hidden bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {getComponent(getCurrentComponentString())}
          {console.log("render")}
        </div>
      </div>
    </div>
  );
}
