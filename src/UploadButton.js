import React from "react";

const UploadButton = function (props) {
  const inputFileId = (Math.random() + 1).toString(35).substring(2, 100);
  const selectFile = () => document.getElementById(inputFileId).click();
  const fileSelected = () => props.onFileSelected(document.getElementById(inputFileId).files);

  const buttonProps = Object.assign({}, props, { type: "button", onClick: selectFile, onFileSelected: undefined });
  const button = React.createElement("button", buttonProps);

  return (
    <span>
      <input type="file" style={{visibility: "hidden"}} id={inputFileId} onChange={fileSelected}/>
      {button}
    </span>
  );
};

export default UploadButton;
