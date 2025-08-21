import "../assets/styles/button.css";
import "../assets/styles/sign-in.css";
import Icon from "../components/ui/Icon";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

import Select from "../components/ui/Select";
import img from "../assets/icons/Image.svg";
import { NavLink } from "react-router-dom";
export const AddProject = () => {
  return (
    <section className=" h-screen p-[20px__145px_20px_145px] bg-[#f4f9fd] flex flex-col items-center">
      <div className=" rounded-[24px] overflow-hidden h-full bg-white p-[50px_158px_58px_158px] ">
        <div className="flex justify-between ">
          <h1 className="font-bold text-[#0A1629] text-[35px]">Add Project</h1>
          <NavLink
            to={"/projects"}
            className="rounded-[37%] w-[44px] h-[44px] bg-[#F4F9FD] p-[10px]"
          >
            <Icon.Close />{" "}
          </NavLink>
        </div>
        <div className="flex mt-[50px]">
          <div className="mr-[50px] flex flex-col gap-y-[23px]">
            <Input
              inputClassName="w-full"
              label="Project Name"
              placeholder="Project Name"
              type="add"
            />
            <div className="flex gap-x-3">
              <Input
                inputClassName="w-full"
                label="Stars"
                placeholder="Select Date"
                type="search"
                calIcon={true}
              />
              <Input
                inputClassName="w-full"
                label="Dead Line"
                placeholder="Select Date"
                type="search"
                calIcon={true}
              />
            </div>
            <Select
              selectClassName="w-full"
              label="Priority"
              placeholder="Medium"
            />
            <Input
              inputClassName="w-full "
              label="Description"
              placeholder="Add some description of the project"
              type="add"
            />
          </div>
          <div className="flex flex-col">
            <div className="rounded-[24px] max-w-[320px] bg-white p-[28px] border-[#CED5E0] border gap-y-[24px] flex-col flex">
              <div>
                <h1 className="text-[#0A1629] text-[17px] font-bold">
                  Select Image
                </h1>{" "}
                <span className="font-light tect-[#0A1629] text-[16px] text-[#0A1629] opacity-[0.7]">
                  Select or upload an avatar for the project (available formats:
                  jpg, png)
                </span>
              </div>
              <div className="flex flex-col gap-y-[16px]">
                <div className="flex gap-x-[24px] ">
                  <img src={img} alt="" />
                  <img src={img} alt="" />
                  <img src={img} alt="" />
                  <img src={img} alt="" />
                </div>
                <div className="flex gap-x-[24px]">
                  <img src={img} alt="" />
                  <img src={img} alt="" />
                  <img src={img} alt="" />
                  <img src={img} alt="" />
                </div>
                <div className="flex gap-x-[24px]">
                  <img src={img} alt="" />
                  <img src={img} alt="" />
                  <img src={img} alt="" />
                  <img src={img} alt="" />
                </div>
              </div>
            </div>
            <div className="mt-[24px] flex gap-x-3">
              <button className="bg-[#6D5DD319] p-[10px] rounded-[35%]">
                <Icon.Board />{" "}
              </button>
              <button className="bg-[#6D5DD319] p-[10px] rounded-[35%]">
                <Icon.Board />{" "}
              </button>
            </div>
          </div>
        </div>
        <Button variant="small" className="ml-auto flex mt-[70px]">
          Save Project
        </Button>
      </div>
    </section>
  );
};
