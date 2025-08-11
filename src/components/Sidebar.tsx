import "../assets/styles/sidebar.css";
import Support from "../assets/icons/Support.svg";
import Icon from "./ui/Icon";
const Sidebar = () => {
  return (
    <aside className=" w-[200px] bg-white rounded-[24px] shadow pt-[33px] fixed top-5 left-10 z-40">
      <div className="pb-[31px] pl-[24px]">
        <Icon.companyLogow />
      </div>
      <div className="pl-[15px] flex flex-col gap-y-1 ">
        <div className="p-[8px_10px] rounded-[10px] w-[165px] text-[#7D8592] text-[15px] font-semibold flex gap-x-[15px] ">
          <Icon.Dashboard /> Dashboard
        </div>
        <div className="p-[8px_10px] rounded-[10px] w-[165px] text-[#7D8592] text-[15px] font-semibold flex gap-x-[15px] ">
          <Icon.Projects /> Projects
        </div>
        <div className="p-[8px_10px] rounded-[10px] w-[165px] text-[#7D8592] text-[15px] font-semibold flex gap-x-[15px] ">
          <Icon.Calendar />
          Calendar
        </div>
        <div className="p-[8px_10px] rounded-[10px] w-[165px] text-[#7D8592] text-[15px] font-semibold flex gap-x-[15px] ">
          <Icon.Vacations />
          Vacations
        </div>
        <div className="p-[8px_10px] rounded-[10px] w-[165px] text-[#7D8592] text-[15px] font-semibold flex gap-x-[15px] ">
          <Icon.Employees />
          Employees
        </div>
        <div className="p-[8px_10px] rounded-[10px] w-[165px] text-[#7D8592] text-[15px] font-semibold flex gap-x-[15px] ">
          <Icon.Messenger />
          Messenger
        </div>
        <div className="p-[8px_10px]  rounded-[10px] w-[165px] text-[#7D8592] text-[15px] font-semibold flex gap-x-[15px] ">
          <Icon.InfoPortal />
          Info Portal
        </div>
      </div>
      <img
        width={150}
        src={Support}
        className="mt-[80px] pl-[15px] ml-[5px] mb-[25px]"
        alt="Support"
      />
      <div className="flex gap-x-[16px] text-[#7D8592] text-[15px] pl-[24px] mb-4">
        <Icon.Logout /> Logout
      </div>
    </aside>
  );
};

export default Sidebar;
