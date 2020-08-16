var mongoose = require("mongoose");

var person = require("./models/person_schema");
   
mongoose.connect("mongodb://127.0.0.1/my_database:27107" || process.env.MONGO_URI,{useNewUrlParser: true, useUnifiedTopology:true});
                 
//console.log(process.env.MONGO_URI);
const model = mongoose.model("Person",person);
                           
const document = new model({name:"kk", age:23, favoriteFoods:["rice"]})

document.save(function(err, data){
  console.log(data);
});
