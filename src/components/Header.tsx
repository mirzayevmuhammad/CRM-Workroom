import Avatar from "../assets/icons/photo.svg";
import Icon from "./ui/Icon";

const Header = () => {
  return (
    <header className="w-[1450px]  h-[47px] pl-[250px] flex justify-between ">
      <div className="relative w-[412px]">
        <input
          type="text"
          className="w-full h-[48px] py-[11px] pl-[42px] pr-[10px] outline-0  rounded-[14px] bg-white"
          placeholder="Search"
        />
        <div className="absolute left-3 top-1/2 -translate-y-1/2">
          <Icon.Search />
        </div>
      </div>

      <div className="flex gap-x-[24px]">
        <div className="p-[12px] bg-white rounded-[12px]">
          <Icon.Notifications />
        </div>
        <div className="flex gap-x-4 bg-white items-center  px-[14px] rounded-[14px]">
          <img src={Avatar} alt="Avatar" />
          <span>Evan Yetas</span>
          <Icon.bottomIcon />
        </div>
      </div>
    </header>
  );
};

export default Header;
