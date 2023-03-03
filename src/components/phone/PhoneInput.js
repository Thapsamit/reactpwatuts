import React, { useRef, useEffect } from "react";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";

const PhoneInput = () => {
  return (
    <IntlTelInput
      containerClassName="intl-tel-input"
      inputClassName="form-control"
    />
  );
};

export default PhoneInput;
