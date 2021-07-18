# Essential

To import better
- String
- Number
- Date
- Boolean


copy this at start of your file:<br>
<code>String.prototype =  require("@gp4eessential").estring</code><br>
<code>Number.prototype =  require("@gp4eessential").enumber</code><br>
<code>Date.prototype =  require("@gp4eessential").edate</code><br>
<code>Object.prototype =  require("@gp4eessential").eobject</code><br>
<code>Boolean.prototype =  require("@gp4eessential").eboolean</code><br>

# With Express W.I.P.

<p> You have to go in your index and add this code:</p>
<code>app.get('/gp4e-essential.js', function(req, res) {res.sendFile(__dirname + '/node_modules/@gp4e/essential/html.js')});</code>
 <br> 
  <br> <p>and in your html file:</p> 
<code><script src="/gp4e-essential.js"></script></code>

