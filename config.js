var mongo = require("mongoose");
var db = 
/*mongo.connect("mongodb://127.0.0.1:27017/reactcrud", function(err, response){*/
mongo.connect("mongodb://xpote:74GNRFLGOnEhSqH3@cluster0-shard-00-00-xcgtt.mongodb.net:27017,cluster0-shard-00-01-xcgtt.mongodb.net:27017,cluster0-shard-00-02-xcgtt.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin", function(err, response){
   if(err){ console.log('Failed to connect to ' + db); }
   else{ console.log('Connected  ');}// + db, ' + ', response); }
});


module.exports =db;

// reactcrud is database name
// 192.168.1.71:27017 is your mongo server name
