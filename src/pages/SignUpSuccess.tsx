import { NavLink } from "react-router-dom";
import Illustration from "../assets/icons/Illustration.svg";
import "../assets/styles/sign-in.css";
import Icon from "../components/ui/Icon";
import "../assets/styles/button.css";
export const SIgnUpSuccess = () => {
  return (
    <section className=" h-screen p-[20px__35px_30px_35px] bg-[#f4f9fd] ">
      <div className="flex rounded-[24px] overflow-hidden h-full">
        <div className="w-[100%] bg-white shadow-[0px_6px_rgba(196_203_214_0.5)]">
          <div className="flex flex-col max-w-[503px] mx-auto items-center pt-[120px] ">
            <img src={Illustration} alt="" className="mb-[60px]" />
            <h2 className="signUp-tittle mb-[24px]">
              You are successfully registered!
            </h2>
            <NavLink
              to={"/"}
              className="btn medium flex gap-x-2 mt-[-6px] items-center"
            >
              Let's Start <Icon.rightArrowIcon />{" "}
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};
