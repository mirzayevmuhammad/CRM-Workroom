import Button from "../components/ui/Button";
import Icon from "../components/ui/Icon";
import "../index.css";

const ProjectsPage = () => {
  return (
    <div className="ml-[240px] pt-[50px] pb-[30px]">
      <div className="flex justify-between  items-center mt-[10px]">
        <h1 className="text-[35px] font-bold ">Projects</h1>
        <Button
          variant="small"
          className="flex items-center gap-x-2 text-[15px] bg-[#E6EDF5] p-[12px_15px]  rounded-[14px]"
        >
          <Icon.PlusW />
          Add Project
        </Button>
      </div>
      <div className="flex ">
        <div className="  w-[335px] h-[1065px] shadow bg-white rounded-[24px] mt-[28px] pt-[26px]">
          <div>
            <h1 className="px-[24px] flex items-center gap-x-2 text-[16px] font-bold text-[#0A1629]  ">
              Current Projects
              <Icon.bottomIcon />
            </h1>
            <hr className="mt-[20px] text-[#dbe2ea] border-[1px]" />
          </div>
        </div>

        <div className="w-full h-[470px] mt-[38px] pl-[30px]">
          <div className="flex justify-between pl-[10px] items-center">
            <h1 className="text-[22px] font-bold ">Tasks</h1>
            <div className="flex gap-x-4">
              <button className="flex items-center justify-center border-2 border-white w-[48px] h-[48px] focus:border-[#3F8CFF]  bg-white rounded-[14px] ">
                <Icon.HamburgerMenu />
              </button>
              <button className="flex items-center justify-center border-2 border-white w-[48px] h-[48px] focus:border-[#3F8CFF] bg-white rounded-[14px] ">
                <Icon.Board />
              </button>
              <button className="flex items-center justify-center border-2 border-white w-[48px] h-[48px]  focus:border-[#3F8CFF] bg-white rounded-[14px] ">
                <Icon.TimeLine />
              </button>
            </div>
            <button className="flex items-center justify-center  w-[48px] h-[48px] bg-white border-2 focus:text-[#3F8CFF] border-white   rounded-[14px]  focus:border-[#3F8CFF]">
              <Icon.Filter />
            </button>
          </div>

          <div className="bg-[#E6EDF5] py-[11px] flex justify-center rounded-[14px] mt-[24px] text-[16px] font-bold">
            Active Tasks
          </div>
          <div className="flex flex-col gap-y-4 mt-[20px]">
            <div className="w-full h-[91px] rounded-[24px] bg-white shadow"></div>
            <div className="w-full h-[91px] rounded-[24px] bg-white shadow"></div>
            <div className="w-full h-[91px] rounded-[24px] bg-white shadow"></div>
            <div className="w-full h-[91px] rounded-[24px] bg-white shadow"></div>
            <div className="w-full h-[91px] rounded-[24px] bg-white shadow"></div>
            <div className="w-full h-[91px] rounded-[24px] bg-white shadow"></div>
          </div>
          <div className="bg-[#E6EDF5] py-[11px] flex justify-center rounded-[14px] mt-[24px] text-[16px] font-bold">
            Backlog
          </div>
          <div className="flex flex-col gap-y-4 mt-[20px]">
            <div className="w-full h-[91px] rounded-[24px] bg-white shadow"></div>
            <div className="w-full h-[91px] rounded-[24px] bg-white shadow"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
