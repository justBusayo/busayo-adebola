import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Layer,
  CodeCircle,
  Settings,
  TickCircle,
  Element4,
} from "iconsax-react";

const SkillsSection: React.FC = () => {
  const skills = {
    "Frontend Languages": ["HTML", "CSS", "JavaScript (ES6+)", "TypeScript"],
    Libraries: [
      "ReactJS",
      "Redux",
      "JQuery",
      "Material-UI",
      "Flowbite",
      "Another Library",
    ],
    Frameworks: [
      "VueJS",
      "Vuex",
      "SASS",
      "Tailwind",
      "Bootstrap",
      "Vuetify",
      "Next.js",
      "React Native",
      "Another Framework",
    ],
    Testing: ["Jest", "React Testing Library", "Playwrite"],
    "Version Control": ["Git", "AWS CodeCommit"],
    Tools: ["Atlassian", "Visual Studio Code", "Postman", "CI/CD"],
  };

  const categoryIcons: any = {
    "Frontend Languages": <Code size="28" color="#ffffff" variant="Bulk" />,
    Libraries: <Layer size="28" color="#ffffff" variant="Bulk" />,
    Frameworks: <Code size="28" color="#ffffff" variant="Bulk" />,
    Testing: <Settings size="28" color="#ffffff" variant="Bulk" />,
    "Version Control": <CodeCircle size="28" color="#ffffff" variant="Bulk" />,
    Tools: <Settings size="28" color="#ffffff" variant="Bulk" />,
  };

  return (
    <div className="text-white p-4 text-[#ffffff]">
      <h3 className="flex items-center gap-2 text-2xl font-bold mb-6 text-center">
        <Element4
          color="#ff6b6b"
          name="GraduationCap"
          size="40"
          className="mr-2"
          variant="Bulk"
        />{" "}
        Skills & Expertise
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(skills).map(([category, skillList]) => {
          const [frontSkills, backSkills] = [
            skillList.slice(0, 5),
            skillList.slice(5),
          ];

          return (
            <motion.div
              key={category}
              className="relative w-full h-auto bg-[#2d3748] p-6 rounded-lg shadow-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.3)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative">
                <div className="mb-4 flex items-center">
                  {categoryIcons[category]}
                  <h4 className="text-base font-semibold ml-3">{category}</h4>
                </div>
                <ul className="list-disc pl-6 space-y-2">
                  {frontSkills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2 text-sm">
                      <TickCircle
                        color="#ff6b6b"
                        name="Certificate"
                        size="18"
                        variant="Bold"
                        className="mr-2"
                      />
                      {skill}
                    </li>
                  ))}
                </ul>
                {backSkills.length > 0 && (
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    {backSkills.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-center gap-2 text-sm"
                      >
                        <TickCircle
                          color="#ff6b6b"
                          name="Certificate"
                          size="18"
                          variant="Bold"
                          className="mr-2"
                        />
                        {skill}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsSection;
