import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="px-6 md:px-16 py-3">
      <p className="text-xs text-grey-500 text-center w-full flex flex-col md:flex-row justify-between gap-2">
        <div>© {currentYear}, BlueprintNav. All Rights Reserved.</div>
        <div>
          <span className="hover:text-grey-700 cursor-pointer">Privacy Policy</span>
          {" | "}
          <span className="hover:text-grey-700 cursor-pointer">Terms & Conditions</span>
        </div>
      </p>
    </div>
  );
};

export default Footer;
