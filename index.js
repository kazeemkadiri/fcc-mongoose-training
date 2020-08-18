var mongoose = require("mongoose");

var person = require("./models/person_schema");
   
mongoose.connect("mongodb://127.0.0.1/my_database:27017" 
|| process.env.MONGO_URI,{useNewUrlParser: true, useUnifiedTopology:true});
                                                                       
//console.log(process.env.MONGO_URI);
const model = mongoose.model("Person",person);
//create a new document                           
//const document = new model({name:"kk", age:23, favoriteFoods:["rice"]})

//Save the document
/*document.save(function(err, data){
  console.log(data);
});*/

//An array of people 
/*const arrayOfPeople =
 [{name:"wale",age:"22"},
  {name:"qasim", age:"18"}];
*/
//Insert array of people into database
/*model.create(arrayOfPeople, function(err, people){
  if(err){ console.log(err); }
  console.log(people);
});
*/

//Search for a document by passing in an argument into the find method
/*const personName = {name: "qasim"};
model.find(personName, function(err, document){
  if(err) console.log(err);
  console.log(document);
});*/

//Search for one person with a particular favorite food
/**const food = {favoriteFoods: ["rice"]};
model.findOne(food, function(err, person){
  if(err) console.log(err);
  console.log(person);
});*/

//Search for a person with an id
/**const personId = {_id: "5f3b930eceecc93d9cadf840"};
/**model.findById(personId, function(err, person){
  console.log(person);
});*/

//Search for a person, edit returned result and save
/**const personId = {_id: "5f3b930eceecc93d9cadf842"};
model.findById(personId, function(err, person){
  console.log(person);
  person.favoriteFoods.push("burrito");
  person.save(function(err, modPerson){
    console.log(modPerson);
  });
});*/

//Use findOneAndUpdate to update a document
/**const personName = {name:'qasim'};
model.findOneAndUpdate(personName, {age:20}, {returnOriginal: false, useFindAndModify: true});


model.findOne(personName, function(err, data){
  console.log(data);
});*/

//Delete a document using findByIdAndRemove
/**const personId = {_id: "5f3b930eceecc93d9cadf840"}
model.findByIdAndRemove(personId, function(err, doc){
  console.log(doc);
});*/

//Chain query methods
model.find({favoriteFoods: ["burrito"]}).sort("name").limit(2).select("name favoriteFoods").exec(function(err, docs){
  console.log(docs);
});
