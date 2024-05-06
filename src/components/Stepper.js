import React, { useState } from "react";

export const Stepper = ({ list }) => {
    const [currentStep, setCurrentStep] = useState(0)
    const stepCount = list.length;
    const steps = [];

    const onPrevClick = () => {
      if(currentStep !== 0){
        setCurrentStep(currentStep - 1)
      }
    }

    const onNextClick = () => {
      if(currentStep !== stepCount - 1){
        setCurrentStep(currentStep + 1)
      }
    }

    for(let i=0; i < stepCount; i++){
      steps.push(
        <div onClick={() => {
          setCurrentStep(i)
        }} className={`w-12 h-12 rounded-full ${currentStep >= i ? "bg-lime-500" : "bg-gray-400"} transition-all duration-200 ease-in-out flex justify-center items-center cursor-pointer`} key={i}>
          {i + 1}
        </div>
      );
    }

    const progressLineWidth = (100 / (list.length - 1)) * currentStep;

    return (
        <div className="p-10">
            <div className="text-3xl text-center pb-6 font-bold">Multi Stepper</div>
            <div className="border-2 pt-6 pb-6 relative">
              <div className="flex items-center justify-between">{steps}</div>
              <div className="absolute bg-lime-500 h-1 transition-all duration-250 ease-in-out w-0 top-1/2 left-0 z-[-1]" style={{ width: `${progressLineWidth}%` }}></div>
            </div>
            <div>
              {React.cloneElement(list[currentStep], { onPrevClick, onNextClick })}
            </div>
        </div>
    );
};