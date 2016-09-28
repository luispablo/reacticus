# Reacticus

Components and helpers to use with React

## Upload input, simpler & prettier

Usually you do:

```html
<form ...>
  ...
  <input type="file" ... />
  ...
  <input type="submit" value="Do submit"/>
</form>
```

and you get a pop-up, an ugly input field in your pretty form, and the file uploads with the form submittion.

If you only want to upload a file, without the standar form funcionality, just a button that when the file is selected it automatically uploads and lets you do your JS magic with Reacticus you can do:

```javascript
import { UploadButton } from "reacticus";

...

<UploadButton className="btn btn-sm" onFileSelected={fileList => ...}>
  <span className="glyphicon glyphicon-search" aria-hidden="true"></span> Upload a file!
</UploadButton>
```

In this example we're using some Bootstrap (http://getbootstrap.com/) helpers to give some style to our component, but it's totally optional. The **UploadButton** component receives any property that the standard HTML5 **button** component can use, and in its body you can do anything you'd do in the **button** body. The only thing you have to know is that when a user clicks the button it will pop the file selection window (so you cannot override the _onClick_ property) and when the user accepts the selection it will trigger the ```onFileSelected``` giving you a **FileList** (https://developer.mozilla.org/en-US/docs/Web/API/FileList) object as param, and you can do whatever you want with it.

## Credits

[@luispablo](https://twitter.com/luispablo)
