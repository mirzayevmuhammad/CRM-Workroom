import Button from "../components/ui/Button";
import Icon from "../components/ui/Icon";
import "../index.css";

const EmployeesPage = () => {
  return (
    <div className="ml-[240px] pt-[50px] pb-[30px] ">
      <div className="flex justify-between  items-center mt-[10px]">
        <h1 className="text-[35px] font-bold ">Employees (17)</h1>

        <div className="flex  bg-[#E6EDF5] items-center text-[16px] font-semibold rounded-[24px] p-[4px_5px] ">
          <div className="p-[9px_18px] rounded-full w-[194px] justify-center flex bg-[#3F8CFF] text-white">
            List
          </div>
          <div className="p-[9px_18px] rounded-full w-[194px] flex justify-center">
            Activity
          </div>
        </div>
        <div className="flex gap-x-5">
          <button className="w-[48px] h-[48px] bg-white border-2 focus:text-[#3F8CFF] border-white   rounded-[14px]  focus:border-[#3F8CFF]"></button>

          <Button
            variant="small"
            className="flex items-center gap-x-2 text-[15px] bg-[#E6EDF5] p-[12px_15px]  rounded-[14px]"
          >
            <Icon.PlusW />
            Add Employees
          </Button>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="w-full h-[91px] shadow bg-white rounded-[24px] mt-[28px] pt-[26px]"></div>
        <div className="w-full h-[91px] shadow bg-white rounded-[24px] mt-[28px] pt-[26px]"></div>
        <div className="w-full h-[91px] shadow bg-white rounded-[24px] mt-[28px] pt-[26px]"></div>
        <div className="w-full h-[91px] shadow bg-white rounded-[24px] mt-[28px] pt-[26px]"></div>
        <div className="w-full h-[91px] shadow bg-white rounded-[24px] mt-[28px] pt-[26px]"></div>
        <div className="w-full h-[91px] shadow bg-white rounded-[24px] mt-[28px] pt-[26px]"></div>
        <div className="w-full h-[91px] shadow bg-white rounded-[24px] mt-[28px] pt-[26px]"></div>
        <div className="w-full h-[91px] shadow bg-white rounded-[24px] mt-[28px] pt-[26px]"></div>
      </div>
    </div>
  );
};

export default EmployeesPage;
