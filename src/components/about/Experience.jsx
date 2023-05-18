import React from "react";

const experienceContent = [
  {
    year: "   2021 - Present",
    position: " Web Developer",
    compnayName: "FREELANCER",
  },
  {
    year: "2020 - Present",
    position: " Graphic Designer",
    compnayName: "FREELANCER",
  },
  {
    year: "2020 - 2021",
    position: "Motion Designer",
    compnayName: "FREELANCER",

  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
