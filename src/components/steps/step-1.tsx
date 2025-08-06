import { useState } from "react";
import "../../assets/styles/input.css";
import Input from "../ui/Input";
import InputMask from "../ui/input-mask";
import Otpinput from "../ui/otp-input";
const Step1 = () => {
  const [otp, setOtp] = useState("");
  return (
    <div className="w-full">
      <form className="w-full flex flex-col gap-y-[31px] mt-[30px]">
        <InputMask label="Mobile Number" />

        <Otpinput label="Code from SMS" />
        <Input
          inputClassName="w-full"
          type="email"
          label="Email Address"
          placeholder="youremail@gmail.com"
        />
        <Input
          inputClassName="w-full"
          label="Create Password"
          type={"password"}
          placeholder="••••••••"
          eyeIcon={true}
        />
      </form>
    </div>
  );
};

export default Step1;
