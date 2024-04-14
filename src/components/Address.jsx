import React from "react";

const Address = () => {
  return (
    <>
    <div className="d-flex flex-row justify-content-start ">
        <div style={{"@media (min-width: 768px)" : {display: "flex"}, "@media (max-width: 768px)" : {display: "none"} , flexDirection:"column" ,marginLeft:"2rem"}}>
        <p className="open-sans-font custom-span-contact position-relative">
          <i className="fa fa-instagram position-absolute"></i>
          <span className="d-block">instagram</span>
          <a href="https://instagram.com/erfan_nasseri">@erfan_nasseri</a>
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
