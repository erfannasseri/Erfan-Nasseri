import React from "react";

const Address = () => {
  return (
    <>
    <div className="d-flex flex-row justify-content-start ">
      <div style={{display:"flex",flexDirection:"column"}}>
        <p className="open-sans-font custom-span-contact position-relative">
          <i className="fa fa-map position-absolute"></i>
          <span className="d-block">Address</span>Iran , Kermanshah.
        </p>
        {/* End .custom-span-contact */}

        <p className="open-sans-font custom-span-contact position-relative">
          <i className="fa fa-envelope-open position-absolute"></i>
          <span className="d-block">mail me</span>{" "}
          <a href="mailto:erfannasserei@yahoo.com">erfannasserei@yahoo.com</a>
        </p>
        {/* End .custom-span-contact */}

        <p className="open-sans-font custom-span-contact position-relative">
          <i className="fa fa-phone-square position-absolute"></i>
          <span className="d-block">call me</span>{" "}
          <a href="Tel: +989189974707">+98 918 997 4707</a>
        </p>
        {/* End .custom-span-contact */}
        </div>

        <div style={{"@media (min-width: 768px)" : {display: "flex"}, "@media (max-width: 768px)" : {display: "none"} , flexDirection:"column" ,marginLeft:"2rem"}}>
        <p className="open-sans-font custom-span-contact position-relative">
          <i className="fa fa-instagram position-absolute"></i>
          <span className="d-block">instagram</span>@erfan_nasseri
        </p>
        {/* End .custom-span-contact */}

        <p className="open-sans-font custom-span-contact position-relative">
          <i className="fa fa-whatsapp position-absolute"></i>
          <span className="d-block">whatsapp</span>{" "}
          <a href="https://wa.me/+989189974707">+989189974707</a>
        </p>
        {/* End .custom-span-contact */}

        <p className="open-sans-font custom-span-contact position-relative">
          <i className="fa fa-telegram position-absolute"></i>
          <span className="d-block">telegram</span>{" "}
          <a href="https://t.me/erfan_nasseri">@erfan_nasseri</a>
        </p>
        {/* End .custom-span-contact */}
        </div>
    </div>

    </>
  );
};

export default Address;
