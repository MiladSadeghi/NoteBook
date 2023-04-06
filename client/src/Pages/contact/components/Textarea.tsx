import React from "react";

type TTextarea = {
  placeholder: string;
};

function Textarea({ placeholder }: TTextarea) {
  return (
    <textarea
      placeholder={placeholder}
      rows={6}
      style={{
        border: "1.5px solid rgba(148, 215, 211, 1)",
        outline: "none",
        borderRadius: "5px",
        resize: "none",
        width: "100%",
        fontFamily: "Noto Sans",
        fontSize: 15,
        padding: 15,
      }}
    />
  );
}

export default Textarea;
