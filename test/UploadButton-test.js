import test from "tape";
import UploadButton from "../src/UploadButton";
import { shallow } from "enzyme";
import React from "react";

test("UploadButton - renders", function (assert) {
  const uploadButton = shallow(<UploadButton />);

  const inputFile = uploadButton.find("input[type='file']").at(0);
  assert.deepEqual(inputFile.prop("style"), { visibility: "hidden" });

  const button = uploadButton.childAt(1);
  assert.equal(button.type(), "button");
  assert.equal(button.prop("type"), "button");
  assert.equal(button.prop("onClick").toString(), "function selectFile() {\n    return document.getElementById(inputFileId).click();\n  }");

  assert.end();
});

test("UploadButton - passthrough properties", function (assert) {
  const className = "btn btn-sm";
  const uploadButton = shallow(<UploadButton className={className} />);
  const button = uploadButton.find("button").at(0);
  assert.equal(button.prop("className"), className);
  assert.end();
});

test("UploadButton - onFileSelected", function (assert) {
  const onFileSelected = () => null;
  const uploadButton = shallow(<UploadButton onFileSelected={onFileSelected} />);
  const inputFile = uploadButton.find("input[type='file']").at(0);
  assert.equal(inputFile.prop("onChange").toString(), "function fileSelected() {\n    return props.onFileSelected(document.getElementById(inputFileId).files);\n  }");
  assert.end();
});

test("UploadButton - render body", function (assert) {
  const uploadButton = shallow(<UploadButton><span>child text</span></UploadButton>);
  const button = uploadButton.childAt(1);
  assert.equal(button.children().length, 1);
  assert.equal(button.childAt(0).type(), "span");
  assert.equal(button.text(), "child text")
  assert.end();
});
