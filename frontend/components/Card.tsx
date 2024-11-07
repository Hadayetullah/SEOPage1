import React from "react";
import Image from "next/image";

const Card = () => {
  return (
    <div className="w-full bg-white flex flex-col gap-y-1 px-[6px]">
      <div className="w-full h-[40px] flex justify-between items-center text-[#606060] text-sm">
        <div className="w-full h-full flex items-center">
          <Image
            width={25}
            height={25}
            src={"/icons/user.png"}
            // fill
            alt="photo"
            className="rounded-[50%] mr-[4px]"
          />

          <h4 className="font-semibold">Client Name</h4>
        </div>

        <div className="w-full h-full flex items-center">
          <Image
            width={25}
            height={25}
            src={"/images/Hadayetullah.jpg"}
            // fill
            alt="photo"
            className="rounded-[50%] ml-auto mr-[4px]"
          />

          <h4 className="font-semibold">Hadayetullah</h4>
        </div>
      </div>

      <div className="w-full flex flex-row items-center text-[#6F6F6F] text-sm">
        <Image
          width={16}
          height={16}
          src={"/icons/layer.png"}
          alt="layer icon"
          className="mr-[6px]"
        />

        <p>Lorem ipsum dolor sit amet, cons...</p>

        <div className="flex flex-row items-center gap-x-2 justify-between ml-auto bg-[#EEEEEE] px-0.5 py-1 rounded-md font-semibold">
          <Image
            width={16}
            height={16}
            src={"/icons/secure.png"}
            alt="layer icon"
            className="ml-auto"
          />

          <h4>1/2</h4>
        </div>
      </div>

      <div className="w-full h-[40px] flex items-center mb-2 justify-between">
        <Image
          width={25}
          height={25}
          src={"/icons/user.png"}
          alt="photo"
          className="rounded-[50%]"
        />

        <Image
          width={25}
          height={25}
          src={"/icons/user.png"}
          alt="photo"
          className="rounded-[50%]"
        />

        <div className="w-[30px] h-[30px] rounded-[50%] bg-[#EEEEEE] flex items-center justify-center text-[#575757] text-sm text-center">
          <p>12+</p>
        </div>

        <div className="flex flex-row items-center gap-x-1.5 text-[#707070] text-sm font-medium">
          <Image
            width={17}
            height={17}
            src={"/icons/bubble-chat.png"}
            alt="bubble-chat icon"
            className=""
          />

          <h4>15</h4>
        </div>

        <div className="flex flex-row items-center gap-x-1.5 text-[#707070] text-sm font-medium">
          <Image
            width={16}
            height={16}
            src={"/icons/attachment.png"}
            alt="attachment icon"
            className=""
          />

          <h4>0</h4>
        </div>

        <div className="flex flex-row items-center gap-x-1.5 text-[#707070] text-sm font-medium">
          <Image
            width={14}
            height={14}
            src={"/icons/calendar.png"}
            alt="calendar icon"
            className=""
          />

          <h4>08-11-24</h4>
        </div>
      </div>
    </div>
  );
};

export default Card;
