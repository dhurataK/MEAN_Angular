const express  = require( 'express' );
const    bp       = require('body-parser');
const    path     = require( 'path' );
const    root     = __dirname;
const    port     = process.env.PORT || 8000;
const    app      = express();

app.use( express.static( path.join( root, 'client' )));
app.use( express.static( path.join( root, 'bower_components' )));
app.use(bp.json())
app.listen( port, function() {
  console.log( `server running on port ${ port }` );
});
