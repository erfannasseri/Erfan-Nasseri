import React from "react";

const skillsContent = [
  { skillClass: "p90", skillPercent: "90", skillName: "HTML & CSS" },
  { skillClass: "p85", skillPercent: "85", skillName: "JAVASCRIPT" },
  { skillClass: "p80", skillPercent: "80", skillName: "REACT JS" },
  { skillClass: "p70", skillPercent: "70", skillName: "PYTHON" },
  { skillClass: "p40", skillPercent: "40", skillName: "MACHINE LEARNING" },
  { skillClass: "p90", skillPercent: "90", skillName: "WORDPRESS" },
  { skillClass: "p50", skillPercent: "50", skillName: "GIT" },
  { skillClass: "p100", skillPercent: "100", skillName: "ADOBE PHOTOSHOP" },
  { skillClass: "p70", skillPercent: "70", skillName: "ADOBE ILLUSTARTOR" },
  { skillClass: "p70", skillPercent: "70", skillName: "ADOBE PREMIERE PRO" },
  { skillClass: "p70", skillPercent: "70", skillName: "ADOBE AFTER EFFECTS" },
  { skillClass: "p35", skillPercent: "35", skillName: "CINEMA 4D" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
