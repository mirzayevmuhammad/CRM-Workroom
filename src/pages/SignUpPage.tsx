import { useEffect, useState } from "react";
import Button from "../components/ui/Button";
import Icon from "../components/ui/Icon";
import Input from "../components/ui/Input";
import ProgressStepAuth from "../components/ui/progress-step-auth";
import useStepProgressAuth from "../hooks/useStepProgressAuth";
import Step1 from "../components/steps/step-1";

const SignUpPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);
  const totalStep = 4;
  const { progressData, setProgressData } = useStepProgressAuth();
  const handleSavePreviusStep = () => {
    const findStep = progressData.find((step) => step.step === currentStep - 1);
    findStep.isSuccess = true;
    setProgressData([...progressData]);
  };
  const incrementCurrentStep = () => {
    if (currentStep <= 4) {
      setCurrentStep((prevState) => prevState + 1);
    }
  };
  useEffect(() => {
    if (currentStep !== 1) {
      handleSavePreviusStep();
    }
  }, [currentStep]);
  return (
    <section className="h-screen p-[20px_35px_30px_35px] bg-[#F4F9FD]">
      <div className="flex h-full gap-x-8">
        <div className="bg-[#3F8CFF] w-[100%] pt-[60px] rounded-[24px] max-w-[25%] pl-[40px]">
          <div className="flex flex-col gap-y-14 h-full items-start">
            <div className="mt-4 text-white gap-x-8">
              <Icon.companyLogo />
            </div>
            <p className="description text-white text-[40px] max-w-[400px]">
              Get started
            </p>
            <ProgressStepAuth steps={progressData} currentStep={currentStep} />
          </div>
        </div>
        <div className="w-[100%] max-w-[70%]  rounded-[24px]  bg-white shadow-[0px_6px_rgba(196_203_214_0.5)]">
          <div className="flex flex-col max-w-[403px]  mx-auto items-center pt-[97px]">
            <span className="text-[#3F8CFF] font-bold text-[14px]">
              Step {currentStep} / {totalStep}
            </span>
            <h2 className="signin-title">
              {progressData[currentStep - 1].title}
            </h2>
            <Step1 />
          </div>
          <div
            onClick={() => incrementCurrentStep()}
            className="border-t-2 mt-[65px] border-[#E4E6E8] pt-[13px] pb-[13px]"
          >
            <Button
              disabled={isSuccess}
              variant="small"
              className={`flex  ml-auto  mr-11  items-center gap-x-3 ${
                !isSuccess && "disabled"
              }`}
            >
              Next Step <Icon.rightArrowIcon />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
