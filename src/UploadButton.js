import React from "react";

const UploadButton = function (props) {
  const inputFileId = (Math.random() + 1).toString(35).substring(2, 100);
  const inputFileStyle = {
    visibility: "hidden",
    height: "0px",
    width: "0px"
  };
  const selectFile = () => document.getElementById(inputFileId).click();
  const fileSelected = () => props.onFileSelected(document.getElementById(inputFileId).files);

  const buttonProps = Object.assign({}, props, { type: "button", onClick: selectFile });
  delete buttonProps.onFileSelected;
  const button = React.createElement("button", buttonProps);

  return (
    <span>
      {button}
      <input type="file" style={inputFileStyle} id={inputFileId} onChange={fileSelected}/>
    </span>
  );
};

export default UploadButton;
