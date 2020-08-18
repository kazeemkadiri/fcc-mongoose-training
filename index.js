var mongoose = require("mongoose");

var person = require("./models/person_schema");
   
mongoose.connect("mongodb://127.0.0.1/my_database:27017" 
|| process.env.MONGO_URI,{useNewUrlParser: true, useUnifiedTopology:true});
                                                                       
//console.log(process.env.MONGO_URI);
const model = mongoose.model("Person",person);
//create a new document                           
const document = new model({name:"kk", age:23, favoriteFoods:["rice"]})

//Save the document
document.save(function(err, data){
  console.log(data);
});

//An array of people 
const arrayOfPeople =
 [{name:"wale",age:"22"},
  {name:"qasim", age:"18"}];

//Insert array of people into database
model.create(arrayOfPeople, function(err, people){
  if(err){ console.log(err); }
  console.log(people);
});
