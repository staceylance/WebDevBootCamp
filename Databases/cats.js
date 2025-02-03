var mongoose = require("mongoose");
mongoose.connect("mongodb://Kainelance:bigduk-fetmys-2zohKy@webdevbootcamp.c3ayysq2sokw.us-east-2.docdb.amazonaws.com:27017/?tls=true&tlsCAFile=global-bundle.pem&retryWrites=false")

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperment: String
    
});

var Cat = mongoose.model("Cat", catSchema)

//add new cat to DB
var george = new Cat({
    name: "George",
    age: 11,
    temperment: "Grouchy"
});

george.save(function(err, cat){
    if(err){
        console.log("Something went wrong!")
    } else {
        console.log("We just saved a cat to the database:");
        console.log(cat);
    }
})



//retrieve all cats from DB
