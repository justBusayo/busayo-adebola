import React, { useRef, useEffect, useState } from "react";
import NavArea from "../components/NavArea";
import MenuDetail from "../components/MenuDetail";
import MenuList from "../components/MenuList";

const OnlineCv: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [selectedMenu, setSelectedMenu] = useState<string>("EDUCATION");

  const handleMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    setCursorPosition({ x: clientX, y: clientY });
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <div className="relative w-[100vw] h-[100vh] bg-[#1c2541] overflow-auto md:overflow-hidden" ref={containerRef}>

      <div className="w-full h-full flex flex-col sm:flex-row relative z-10">
        {/* Left-side component to display selected menu details */}

        {/* NavArea */}
        <div className="w-full sm:w-2/4 h-full flex justify-center items-center py-10 px-5 bg-[white] bg-opacity-5">
          <NavArea selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
        </div>
        
        <div className="relative w-full sm:w-2/4 md:h-full flex justify-center items-center ">
          <MenuDetail selectedMenu={selectedMenu}  setSelectedMenu={setSelectedMenu} />
        </div>
      </div>

      {/* Custom cursor */}
      <div
        className="cursor-highlight"
        style={{
          top: `${cursorPosition.y}px`,
          left: `${cursorPosition.x}px`,
        }}
      ></div>
    </div>
  );
};

export default OnlineCv;
