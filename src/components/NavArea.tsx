import React from "react";
import { motion } from "framer-motion";
import MenuList from "./MenuList";
import { Call, Messages3, Location, Music, Global, Book } from "iconsax-react";

interface NavAreaProps {
  setSelectedMenu: (menu: string) => void;
  selectedMenu: string;
}

const NavArea: React.FC<NavAreaProps> = ({ selectedMenu, setSelectedMenu }) => {
  return (
    <div className="relative text-[#E2E8F0] w-full h-full max-w-screen-lg px-5 md:px-8 lg:px-12 pt-16 lg:pt-20">
      <div className="text-center lg:text-left">
        <h1 className="relative text-[26px] md:text-[34px] lg:text-[40px] font-bold mb-2 lg:mb-3">
          <motion.div
            className="absolute top-2 bg-[#ffffff] rounded-2xl"
            initial={{ x: 0, y: 0 }}
            animate={{
              x: [
                "0%",
                "100%",
                "100%",
                "0%",
                "0%",
                "0%",
                "100%",
                "100%",
                "0%",
                "0%",
              ],
              y: [
                "0%",
                "0%",
                "100%",
                "100%",
                "0%",
                "0%",
                "0%",
                "100%",
                "100%",
                "0%",
              ],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
            style={{
              width: "20px",
              height: "20px",
            }}
          />{" "}
          Oluwabusayo Adebola
        </h1>
        <h6 className="text-[18px] md:text-[22px] lg:text-[24px] font-semibold mb-4 lg:mb-5">
          Frontend Engineer
        </h6>
        <p className="text-[14px] md:text-[16px] lg:text-[18px] font-medium leading-relaxed max-w-3xl mx-auto lg:mx-0 mb-6 lg:mb-8">
          As a frontend sorcerer, my enchantment lies in crafting web wonders
          and magical digital experiences. I weave accessibility and inclusivity
          into every pixel, creating delightful spells for all to enjoy.
        </p>
      </div>

      <div className="hidden mt-10 md:mt-5 lg:mt-7 md:flex gap-3 md:flex-col">
        {["EDUCATION", "PROJECTS", "EXPERIENCE", "Skills & Expertise"].map(
          (mnu) => (
            <button
              key={mnu}
              className="cursor-pointer"
              onClick={() => setSelectedMenu(mnu)}
            >
              <MenuList menu={selectedMenu} name={mnu} />
            </button>
          )
        )}
      </div>
      <div className="w-full md:absolute left-0 bottom-5 px-10 py-2 flex flex-col md:flex-row gap-5 md:gap-0 justify-between bg-[#1c2541] rounded-xl shadow-2xl">
      <div className="flex flex-col justify-start gap-2">
  <div className="flex items-center gap-2">
    <Messages3 size="24" color="#ff6b6b" variant="Bulk" />{" "}
    <a
      href="mailto:jonathanadebola@gmail.com"
      className="text-[#E2E8F0] hover:text-[#ff6b6b]"
    >
      jonathanadebola@gmail.com
    </a>
  </div>
  <div className="flex items-center gap-2">
    <Call size="24" color="#ff6b6b" variant="Bulk" />{" "}
    <a
      href="tel:+2348063662311"
      className="text-[#E2E8F0] hover:text-[#ff6b6b]"
    >
      (+234) 8063-662-3-11
    </a>
  </div>
  <div className="flex items-center gap-2">
    <Location size="24" color="#ff6b6b" variant="Bulk" />{" "}
    <span>Nigeria</span>
  </div>
</div>


        {/* Subtle Interests Section */}
        <div className="hidden md:flex flex-col gap-2 text-[#E2E8F0] text-xs md:text-sm ">
          <div className="flex items-center gap-1">
            <Global size="20" color="#ff6b6b" variant="Bulk" />{" "}
            <span>Football</span>
          </div>
          <div className="flex items-center gap-1">
            <Music size="20" color="#ff6b6b" variant="Bulk" />{" "}
            <span>Music</span>
          </div>
          <div className="flex items-center gap-1">
            <Book size="20" color="#ff6b6b" variant="Bulk" />{" "}
            <span>Reading</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavArea;
