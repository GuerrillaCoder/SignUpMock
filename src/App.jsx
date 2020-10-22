import React, { useState } from "react";
import ReactCSSTransitionGroup from "react-transition-group";
import "./styles.css";
import SelectType from "./steps/SelectType";
import EnterDomaiun from "./steps/EnterDomain";
import Error from "./steps/Error";
import CreateAccount from "./steps/CreateAccount";

class slide {}

export default function App() {
  const [details, setDetails] = useState({
    title: "Create Account",
    step: 1,
    branchHistory: ["Start"],
    slideHistory: ["SelectType"],
    name: null,
    accountType: null,
    domain: null,
    links: null,
    username: null,
    password: null,
    gscToken: null
  });

  let getCurrentComponentString = () => {
    return details.slideHistory[details.slideHistory.length - 1];
  };

  let getCurrentBranch = () => {
    return details.branchHistory[details.branchHistory.length - 1];
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
        setDetails((details) => ({
          ...details,
          slideHistory: details.slideHistory.concat(nextSlide),
          branchHistory: details.branchHistory.concat(option),
          title: option === "free" ? "Create Account" : "Get Started"
        }));
        console.log(details);
        break;
      default:
        setDetails((details) => {
          details.slideHistory.push("Error");
          return details;
        });
    }
  };

  let movePrev = () => {
    console.log("moving back");
    setDetails((details) => ({
      ...details,
      slideHistory: details.slideHistory.splice(
        details.slideHistory.length - 1,
        1
      ),
      branchHistory: details.branchHistory.splice(
        details.branchHistory.length - 1,
        1
      )
    }));
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
        </div>
      </div>
    </div>
  );
}
