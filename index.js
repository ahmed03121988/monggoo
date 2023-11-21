
const connectDatabase = require("./dbConnect");
const person = require('./person')
connectDatabase()

//person.insertMany([{
//First_name:"Fares",
//age : 26,
     //favoriteFoods :['chiken']
// },
 //{
  //  First_name:"saif",
  //  age : 15,
  //  favoriteFoods :['pizza']},
 //{
 //   First_name:"sarra",
  //   age :40 ,
 //    favoriteFoods :['chiken']
 //}])



// person.find({}).then((doc)=>{
 //console.log(doc);
 //}).catch((err)=>{
// console.log(err);
 //})


// person.findOne({favoriteFoods:"pizza"})
 //.then((doc)=>{
 //console.log(doc);
 //})
 //.catch((err)=>{
 //    console.log(err);
 //})



 //person.findById({_id:"655b78e82f38462845169fa4"})
 //.then((doc)=>{
 //console.log(doc);
 //})
 //.catch((err)=>{
  //   console.log(err);
 //})



 //person.findByIdAndDelete({_id : "655b78e82f38462845169fa5"})

 //.then(()=>{
//console.log("document removed");
//// })
 //.catch((err)=>{
  //  console.log(err);
 //})

// person.deleteMany({age:{$eq:40}})
 //.then(()=>{
//     console.log('documents removed with sucess');
// })
// .catch((err)=>{
 //    console.log(err);
 //})





//person.find({favoriteFoods : 'pizza'}).sort({name:-1})
 //.then((document)=>{
  //  console.log(document);
 //})
 //.catch((error)=>{
  //   console.log(error);
 //}) 