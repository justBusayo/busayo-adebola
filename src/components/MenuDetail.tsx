import React from "react";
import {
  ArchiveBook,
  Book,
  Folder2,
  Icon,
  Link21,
  Nebulas,
  TickCircle,
} from "iconsax-react";
import { Link } from "react-router-dom";
import SkillsSection from "./SkillsSection";
import MenuList from "./MenuList";

interface MenuDetailProps {
  selectedMenu: string;
  setSelectedMenu: (menu: string) => void;
}

const projects = [
  {
    id: 1,
    name: "Playshaka.online",
    description:
      "Listen to radio station, do movie reviews, enjoy music and just be entertained",
    link: "https://playshaka.online/",
  },
  {
    id: 2,
    name: "CIL Website",
    description: "Personal portfolio showcasing projects and skills.",
    link: "https://playshaka.online/",
  },
  {
    id: 3,
    name: "PGRaters",
    description: "Personal portfolio showcasing projects and skills.",
    link: "https://playshaka.online/",
  },
  {
    id: 4,
    name: "CecureCast",
    description: "Personal portfolio showcasing projects and skills.",
    link: "https://playshaka.online/",
  },
  {
    id: 5,
    name: "Etiaba",
    description: "Personal portfolio showcasing projects and skills.",
    link: "https://playshaka.online/",
  },
];
const MenuDetail: React.FC<MenuDetailProps> = ({
  selectedMenu,
  setSelectedMenu,
}) => {
  const renderContent = () => {
    switch (selectedMenu) {
      case "EDUCATION":
        return (
          <div className="text-[#ffffff]">
            <div className="mb-6">
              <h3 className="mb-5 flex items-center text-xl font-bold">
                <ArchiveBook
                  color="#ff6b6b"
                  name="GraduationCap"
                  size="40"
                  className="mr-2"
                  variant="Bulk"
                />
                Education
              </h3>
              <div className="ml-6 bg-gray-800 p-5 rounded-lg shadow-md">
                <div className="mb-4">
                  <p className="flex items-center gap-3 text-lg font-semibold text-white">
                    <Nebulas size="20" color="#FFFFFF" variant="Bulk" />
                    B.Tech Civil Engineering
                  </p>
                  <p className="text-gray-400">
                    Ladoke Akintola University of Technology (LAUTECH), Nigeria
                    <br />
                    2009 - 2015
                  </p>
                </div>

                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-white mb-3">
                    Certifications
                  </h4>
                  <ul className="ml-6 list-disc list-inside text-gray-300 space-y-2">
                    {[
                      "AWS Certified Cloud Practitioner - May 2023",
                      "AWS Certified Entry-Level JavaScript Programmer - August 2022",
                      "Certified Entry-Level Python Programmer - March 2022",
                      "Project Management Essentials - June 2020",
                      "Customer Discovery - July 2020",
                    ].map((lst) => (
                      <li key={lst} className="flex items-center gap-2">
                        <TickCircle
                          color="#ff6b6b"
                          name="Certificate"
                          size="18"
                          variant="Bold"
                          className="mr-2"
                        />
                        {lst}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      case "EXPERIENCE":
        return (
          <p>
            Experience details of projects worked on as a frontend engineer.
          </p>
        );
      case "Skills & Expertise":
        return <SkillsSection />;
      case "PROJECTS":
        return (
          <div className="text-[#ffffff]">
            <h3 className="mb-5 flex items-center text-xl font-bold">
              <Folder2
                color="#ff6b6b"
                name="GraduationCap"
                size="40"
                className="mr-2"
                variant="Bulk"
              />
              Projects & Portfolio
            </h3>
            <ul className="space-y-4 text-white">
              {projects.map((pp) => (
                <li
                  key={pp.id}
                  className="flex items-center justify-between gap-4 bg-gradient-to-r from-gray-800 to-gray-900 p-5 rounded-lg shadow-lg hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-800 hover:scale-105 transition-all duration-300 ease-in-out transform"
                >
                  <span className="flex items-center gap-3">
                    <TickCircle
                      name="Certificate"
                      color="#ED254E"
                      size="20"
                      variant="Bold"
                    />
                    <div>
                      <strong className="text-lg">{pp.name}</strong>
                      <p className="text-gray-400 text-sm">{pp.description}</p>
                    </div>
                  </span>
                  <a
                    href={pp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-500 flex items-center gap-2 transition-colors"
                  >
                    <Link21
                      name="Certificate"
                      size="18"
                      className="text-[#ff6b6b]"
                    />
                    <span className="text-sm font-medium">View Project</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        );

      default:
        return <p>Select a menu to see more details.</p>;
    }
  };

  return (
    <div className="w-full text-white">
      <div className="w-full bg-[#1c2541] sticky top-0 overflow-x-auto md:hidden text-[#ffffff] mb-10 flex gap-3 px-4 py-2 shadow-2xl border border-[#d0cdcd] z-10">
        {["EDUCATION", "PROJECTS", "EXPERIENCE", "Skills & Expertise"].map(
          (mnu) => (
            <button
              key={mnu}
              className="flex-1 text-center py-2 px-4 rounded-lg hover:bg-[#1e2a45] focus:outline-none whitespace-nowrap"
              onClick={() => setSelectedMenu(mnu)}
            >
              <MenuList menu={selectedMenu} name={mnu} />
            </button>
          )
        )}
      </div>

      <div className=" p-5">{renderContent()}</div>
    </div>
  );
};

export default MenuDetail;
