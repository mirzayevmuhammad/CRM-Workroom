import { NavLink } from "react-router-dom";
import Button from "../components/ui/Button";
import Events from "../components/ui/Events";
import Icon from "../components/ui/Icon";
import Input from "../components/ui/Input";
import Select from "../components/ui/Select";

import "../index.css";
import React, { useState } from "react";
import { Modal, Switch } from "antd";

const NearestEventsPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };
  return (
    <div className="ml-[240px] pt-[50px] pb-[30px]">
      <NavLink
        to={"/"}
        className="flex gap-x-1.5 text-[#3F8CFF] text-[16px] font-semibold"
      >
        <Icon.leftArrowIcon /> Back to Dashboard
      </NavLink>

      <div className=" flex justify-between  items-center mt-[10px]">
        <h1 className="text-[35px] font-bold ">Nearest Events</h1>
        <button
          onClick={showModal}
          className="flex btn small items-center gap-x-2 text-[15px] bg-[#E6EDF5] p-[12px_15px]  rounded-[14px]"
        >
          <Icon.PlusW />
          Add Events
        </button>

        <Modal
          title={
            <p className="text-[22px] font-bold text-[#0A1629] ">Add Event</p>
          }
          closable={{ "aria-label": "Custom Close Button" }}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={
            <Button type="button" variant="small">
              Save Events
            </Button>
          }
        >
          <div className="mt-[39px]">
            <Input
              inputClassName="w-full "
              label="Event Name"
              placeholder="Katy’s Birthday"
              type="add"
            />
          </div>

          <div className="flex items-center  gap-x-4">
            <div className="mt-[15px] w-[230px]">
              <Input
                inputClassName="w-[100%] "
                label="Date"
                placeholder="Select Date"
                type="add"
                calIcon={true}
              />
            </div>
            <div className="mt-[15px] w-[230px]">
              <Input
                inputClassName="w-[100%] "
                label="Time"
                placeholder="Select Time"
                type="add"
                watchIcon={true}
              />
            </div>
          </div>
          <div className="mt-[15px] ">
            <Input
              inputClassName="w-[100%] "
              label="Description"
              placeholder="Add some description of the event"
              type="add"
            />
          </div>
          <div className="bg-[#F4F9FD] rounded-[14px] p-[27px_20px] mt-[17px] flex justify-between">
            <h1 className="font-bold text-[#0A1629] text-[17px] ">
              Repeat Event
            </h1>
            <Switch defaultChecked onChange={onChange} />
          </div>
        </Modal>
      </div>
      <div className="flex gap-x-[30px] w-full">
        <div className="flex flex-col w-full">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Events
              clock="4h"
              data="Today | 6:00 PM"
              job="Presentation of the new department"
              icon=""
            />
          ))}
        </div>
        <div className="flex flex-col w-full">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Events
              clock="4h"
              data="Today | 6:00 PM"
              job="Presentation of the new department"
              icon=""
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NearestEventsPage;
