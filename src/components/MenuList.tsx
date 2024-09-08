import React, { useState } from "react";

interface MenuListProps {
  menu: string; // The currently selected menu item
  name: string; // The name of the current menu item in the list
}

interface HoverObj {
  text: string;
  buttonBorder: string;
  buttonBg: string;
}

const MenuList = ({ menu, name }: MenuListProps) => {
  const [hovering, setHovering] = useState(false);

  const isActive = menu.toLowerCase() === name.toLowerCase();

  // Update hover state
  const setHoverState = (hovering: boolean) => {
    setHovering(hovering);
  };

  return (
    <div
      onMouseEnter={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}
      className="relative flex gap-2 items-center justify-start cursor-pointer transition-transform duration-300 ease-in-out"
    >
      {/* Circle button */}
      <div
        className={`flex h-[18px] md:h-[24px] w-[18px] md:w-[24px] items-center justify-center rounded-full border transition-all duration-300 ${
          isActive ? "border-[#ff6b6b] scale-110" : hovering ? "border-[#ff6b6b]" : "border-[#DBDDE0]"
        }`}
      >
        <div
          className={`h-[12px] w-[12px] md:h-[15.43px] md:w-[15.43px] rounded-full transition-all duration-300 ${
            isActive ? "bg-[#ff6b6b] scale-110" : hovering ? "bg-[#ff6b6b]" : "bg-[#0056B8]"
          }`}
        ></div>
      </div>
      {/* Menu text */}
      <div
        className={`text-xs md:text-lg transition-all duration-300 ${
          isActive ? "font-bold text-[#ff6b6b] scale-105" : hovering ? "font-bold text-[#ff6b6b]" : "font-medium"
        }`}
      >
        <span>{name}</span>
      </div>
    </div>
  );
};

export default MenuList;
