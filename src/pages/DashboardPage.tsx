import Icon from "../components/ui/Icon";

const DashboardPage = () => {
  return (
    <div className="ml-[250px] pt-[50px]">
      <span className="text-[#7D8592] text-[14px]">Welcome Back, Evan!</span>
      <div className="flex justify-between items-center mt-[10px]">
        <h1 className="text-[35px] font-bold ">Dashboard</h1>
        <div className="bg-[#E6EDF5] p-[12px_15px] rounded-[14px]">
          Nov 16, 2020 - Dec 16, 2020
        </div>
      </div>
      <div className="flex justify-between">
        <div className="w-[795px] h-[470px] bg-white rounded-[24px] mt-[28px]">
          <div className="flex justify-between items-center px-[30px]">
            <h1 className="text-[22px] font-bold text-[#0A1629] pt-[28px] ">
              Workload
            </h1>
            <button className="flex gap-x-1 text-[16px] text-[#3F8CFF] pt-[34px]">
              View All <Icon.rightIcon />{" "}
            </button>
          </div>
        </div>
        <div className="w-[365px] h-[470px] bg-white rounded-[24px] mt-[28px]">
          <div className="flex justify-between items-center px-[30px]">
            <h1 className="text-[22px] font-bold text-[#0A1629] pt-[28px] ">
              Workload
            </h1>
            <button className="flex gap-x-1 text-[16px] text-[#3F8CFF] pt-[34px]">
              View All <Icon.rightIcon />{" "}
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <div>
          <div className="w-[795px] flex justify-between items-center px-[30px] mb-[20px]">
            <h1 className="mt-[47px] text-[22px] font-bold text-[#0A1629]  ">
              Projects
            </h1>
            <button className="flex  gap-x-1 text-[16px] text-[#3F8CFF]  mt-[52px]">
              View All <Icon.rightIcon />{" "}
            </button>
          </div>
          <div className="flex flex-col gap-y-5">
            <div className="w-[795px] h-[148px] bg-white rounded-[24px] flex justify-between items-center px-[30px]"></div>
            <div className="w-[795px] h-[148px] bg-white rounded-[24px] flex justify-between items-center px-[30px]"></div>
            <div className="w-[795px] h-[148px] bg-white rounded-[24px] flex justify-between items-center px-[30px]"></div>
          </div>
        </div>

        <div className="w-[365px] h-[560px] bg-white rounded-[24px] mt-[28px]">
          <div className="flex justify-between items-center px-[30px]">
            <h1 className="text-[22px] font-bold text-[#0A1629] pt-[28px] ">
          Activity Stream
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
