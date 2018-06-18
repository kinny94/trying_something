var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

app.get( '/users', ( req, res ) => {
	res.send({
		"name": "Arjun"
	});
});

app.get( '*', ( req, res ) => {
	res.red( path.resolve( __dirname, 'client', 'build', 'index.html' ));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};
	
	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

if( process.env.NODE_ENV === 'production' ){
    //Express will serve up production  assets like out main,js file
    app.use( express.static( 'client/build' ));

    //Express will serve the index.html file if diesnot recognize the route
    const path = require( 'path' );
    app.get( '*', ( req, res ) => {
        res.sendFile( path.resolve( __dirname, 'client', 'build', 'index.html' ));
    });
}

const PORT = process.env.PORT || 5000;
app.listen( PORT );
