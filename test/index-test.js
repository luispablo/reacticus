import test from "tape";
import UploadButtonOriginal from "../src/UploadButton"
import { UploadButton } from "../src/index";

test("index - exports", function (assert) {
  assert.equal(UploadButton, UploadButtonOriginal);
  assert.end();
});
