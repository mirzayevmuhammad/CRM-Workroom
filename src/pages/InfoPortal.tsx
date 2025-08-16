import Button from "../components/ui/Button";
import Icon from "../components/ui/Icon";
import "../index.css";

const InfoPortalPage = () => {
  return (
    <div className="ml-[240px] pt-[50px] pb-[30px] ">
      <div className="flex justify-between  items-center mt-[10px] mb-[28px]">
        <h1 className="text-[35px] font-bold ">Info Portal</h1>
        <Button
          variant="small"
          className="flex items-center gap-x-2 text-[15px] bg-[#E6EDF5] p-[12px_15px]  rounded-[14px]"
        >
          <Icon.PlusW />
          Add Folder
        </Button>
      </div>
      <div className="flex flex-col gap-y-[30px]">
        <div className="flex items-center gap-x-[30px]">
          <div className="w-[900px] h-[191px] shadow bg-white rounded-[24px] "></div>
          <div className="w-[300px] h-[191px] shadow bg-white rounded-[24px] "></div>
        </div>
        <div className="flex gap-[30px] pb-[95px]">
          <div className="w-[285px] h-[191px] shadow bg-white rounded-[24px] "></div>
          <div className="w-[285px] h-[191px] shadow bg-white rounded-[24px] "></div>
          <div className="w-[285px] h-[191px] shadow bg-white rounded-[24px] "></div>
          <div className="w-[285px] h-[191px] shadow bg-white rounded-[24px] "></div>
        </div>
      </div>
    </div>
  );
};

export default InfoPortalPage;
