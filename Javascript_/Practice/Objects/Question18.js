// Check DOM Element
// Write a JavaScript function to check whether a given value is a DOM element.

// O/P :
// true


{/* <html>
  <head>
  <meta charset="utf-8">
  <title>JavaScript function to check whether a specified value is a DOM element</title>
  <script
  src="https://code.jquery.com/jquery-3.3.1.min.js"
  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
  crossorigin="anonymous"></script>
  </head>
  <body>
  </body>
  </html> */}


function is_dom_element(obj) {
    return !!(obj && obj.nodeType === 1);
  }
console.log(is_dom_element(jQuery('body')[0]));