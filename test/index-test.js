const test = require("tape");
const Reacticus = require("../src/index");
const UploadButton = require("../src/UploadButton");

test("index - exports", function (assert) {
  assert.equal(Reacticus.UploadButton, UploadButton);
  assert.end();
});
