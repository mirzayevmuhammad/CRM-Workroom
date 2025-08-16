import { useState } from "react";
import Button from "../components/ui/Button";
import Icon from "../components/ui/Icon";
import "../index.css";
import { NavLink } from "react-router-dom";
import VacationsEmployees from "../components/VacationsEmployees";
import CalendarPage from "./CalendarPage";
import VacationsCalendar from "../components/VacationsCalendar";

const VacationsPage = () => {
  const [currenTab, setCurrenTab] = useState("employees-vacation");

  return (
    <div className="ml-[240px] pt-[50px] pb-[30px] ">
      <div className="flex justify-between  items-center mt-[10px]">
        <h1 className="text-[35px] font-bold ">Vacations</h1>

        <div className="flex  bg-[#E6EDF5] items-center text-[16px] font-semibold rounded-[24px] p-[4px_5px] ">
          <button
            onClick={() => setCurrenTab("employees-vacation")}
            className={`p-[9px_18px] w-[194px] flex justify-center cursor-pointer rounded-full text-black ${
              currenTab === "employees-vacation"
                ? "bg-[#3F8CFF] text-white font-semibold transition-all"
                : ""
            }`}
          >
            Employees’ vacations
          </button>

          <button
            onClick={(event) => setCurrenTab("calendar")}
            className={`p-[9px_18px] rounded-full w-[194px] flex justify-center cursor-pointer ${
              currenTab === "calendar"
                ? "bg-[#3F8CFF] text-white font-semibold transition-all"
                : ""
            } `}
          >
            Calendar
          </button>
        </div>

        <Button
          variant="small"
          className="flex items-center gap-x-2 text-[15px] bg-[#E6EDF5] p-[12px_15px]  rounded-[14px]"
        >
          <Icon.PlusW />
          Add Request
        </Button>
      </div>
      {currenTab === "employees-vacation" ? (
        <VacationsEmployees />
      ) : (
        <VacationsCalendar />
      )}
    </div>
  );
};

export default VacationsPage;
