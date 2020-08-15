require("regenerator-runtime/runtime");
require("core-js");
let $ = require('jquery')  // jQuery now loaded and assigned to $
let ReactDOM = require('react-dom')
let React = require('react')




ReactDOM.render(<div>fgfgfgf</div>, document.getElementById('some-node-id-here'));

let count = 0
$('#click-counter').text(count.toString())
$('#countbtn').on('click', () => {
   count ++ 
   $('#click-counter').text(count)
}) 