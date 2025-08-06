import { useState } from "react";
import OtpInput from "react-otp-input";

interface Props {
  label: string;
}

const Otpinput = ({ label }: Props) => {
  const [otp, setOtp] = useState("");

  return (
    <div className="flex flex-col gap-y-2">
      <label className="input-label">{label}</label>
      <OtpInput
        value={otp}
        containerStyle={" gap-x-[16px] "}
        inputStyle={
          "!w-[58px] !h-[50px] rounded-xl border border-[#D8E0F0] outline-none focus:border shadow focus:border-sky-400  focus shadow-md shadow-[#B8C8E039]"
        }
        onChange={setOtp}
        numInputs={4}
        renderInput={(props) => <input {...props} />}
      />
    </div>
  );
};

export default Otpinput;
