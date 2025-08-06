import { IMaskInput } from "react-imask";
import Button from "./Button";
import Icon from "./Icon";

interface Props {
  label: string;
}

const InputMask = ({ label }: Props) => {
  return (
    <div className="flex flex-col gap-y-2">
      <label className="input-label">{label}</label>
      <div className="flex gap-x-2">
        <IMaskInput
          label="Mobile Number"
          placeholder="+998"
          className="input w-full placeholder-[#7D8592]"
          mask="+{998} (00) 000 00 00"
          unmask="+998000000000"
          inputMode="tel"
          minLength={17}
        />
        <Button variant="small" className="flex items-center !py-[5px] ">
          Send
        </Button>
      </div>
    </div>
  );
};

export default InputMask;
