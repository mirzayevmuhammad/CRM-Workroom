import Button from "../components/ui/Button";
import Icon from "../components/ui/Icon";
import "../index.css";

const CalendarPage = () => {
  return (
    <div className="ml-[240px] pt-[50px] pb-[30px]">
      <div className="flex justify-between  items-center mt-[10px]">
        <h1 className="text-[35px] font-bold ">Calendar</h1>
        <Button
          variant="small"
          className="flex items-center gap-x-2 text-[15px] bg-[#E6EDF5] p-[12px_15px]  rounded-[14px]"
        >
          <Icon.PlusW />
          Add Events
        </Button>
      </div>
      <div className="w-full h-[715px] shadow bg-white rounded-[24px] mt-[28px] pt-[26px]"></div>
    </div>
  );
};

export default CalendarPage;
