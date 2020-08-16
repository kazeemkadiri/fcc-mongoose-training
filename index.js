var mongoose = require("mongoose");
     
mongoose.connect("mongodb://127.0.0.1/my_database:27107" || process.env.MONGO_URI,{useNewUrlParser: true, useUnifiedTopology:true});
                 
console.log(process.env.MONGO_URI);
