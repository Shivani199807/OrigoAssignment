import React from "react";

const Button = ({ text, backgroundColor, className, color }) => {
  return (
    <div>
      <button
        className={className}
        style={{
          backgroundColor: backgroundColor,
          borderRadius: "50px",
          color: color,
        }}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
