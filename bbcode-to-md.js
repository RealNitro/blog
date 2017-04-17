var fs = require( 'fs' );
var path = require( 'path' );
var bbconvert = require('bbcode-to-markdown');

var posts = "_posts";

function convert(data) {
    var splitter = '---';
    var parts = data.split(splitter);
    var index = 2;
    var post = parts[index];
    var new_post = bbconvert(post);
    parts[index] = "\n\n" + new_post;
    return parts.join(splitter)
}

// Loop through all the files in the temp directory
fs.readdir( posts, function( err, files ) {
        if( err ) {
            console.error( "Could not list the directory.", err );
            process.exit( 1 );
        }

        files.forEach( function( file, index ) {
                // Make one pass and make the file complete
                var fromPath = path.join( posts, file );

                fs.stat( fromPath, function( error, stat ) {
                    if( error ) {
                        console.error( "Error stating file.", error );
                        return;
                    }

                    if( stat.isFile() ) {
                        console.log( "'%s' is a file.", fromPath );
                    } else if( stat.isDirectory() ) {
                        console.log( "'%s' is a directory.", fromPath );
                        return;
                    } else {
                        console.log("Unknown...");
                        return;
                    }

                    fs.readFile(fromPath, 'utf8', function (err, data) {
                        if(err) {
                            console.error("error reading", error);
                            return;
                        }

                        data = convert(data);

                        fs.writeFile(fromPath, data, function(err) {
                            if(err) {
                                console.error("error writing", error);
                                return;
                            }
                        });
                    });
                } );
        } );
} );
