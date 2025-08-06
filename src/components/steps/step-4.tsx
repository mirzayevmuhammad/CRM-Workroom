import { useState } from "react";
import "../../assets/styles/input.css";
import Input from "../ui/Input";
import InputMask from "../ui/input-mask";
import Otpinput from "../ui/otp-input";
import Icon from "../ui/Icon";
const Step4 = () => {
  const [otp, setOtp] = useState("");
  return (
    <div className="w-full">
      <form className="w-full flex flex-col gap-y-[31px] mt-[30px]">
        <Input
          inputClassName="w-full"
          type="email"
          label="Member’s Email"
          placeholder="memberemail@gmail.com"
        />
        <span className="flex mt-[-10px] mb-[270px] font-semibold text-[16px] text-[#3F8CFF]">
          <Icon.plusIcon/> Add another Member
        </span>
      </form>
    </div>
  );
};

export default Step4;
