import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Erfan" },
  { meta: "last name", metaInfo: "Nasseri" },
  { meta: "Age", metaInfo: "24 Years" },
  { meta: "Nationality", metaInfo: "Iranian" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Iran , Kermanshah" },
  { meta: "phone", metaInfo: "+98 918 997 4707" },
  { meta: "Email", metaInfo: "erfannasserei@yahoo.com" },
  
  
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
