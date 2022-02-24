/*const express = require("express");
const app = express();
const titleController = require("./controllers/titleController.js");
const homeController = require("./controllers/homeController.js");
 
// определяем Router
const titleRouter = express.Router();
const homeRouter = express.Router();
  
// определяем маршруты и их обработчики внутри роутера titleRouter
titleRouter.use("/create", titleController.addUser);
titleRouter.use("/", titleController.getUsers);
app.use("/titles", titleRouter);
 
// определяем маршруты и их обработчики внутри роутера homeRouter
homeRouter.get("/about", homeController.about);
homeRouter.get("/", homeController.index);
app.use("/", homeRouter);
 
app.use(function (req, res, next) {
    res.status(404).send("Not Found")
});
 
app.listen(3000);*/



const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const objectId = require("mongodb").ObjectId;


const titleController = require("./controllers/titleController.js");
const homeController = require("./controllers/homeController.js");
     
const app = express();
 
app.set("view engine", "hbs");
app.use(express.urlencoded({ extended: false }));
 
app.use("/titles", titleRouter);;
app.use("/", homeRouter);
 
app.use(function (req, res, next) {
    res.status(404).send("Not Found")
});
 
mongoose.connect("mongodb://localhost:27017/titlesdb", { useUnifiedTopology: true }, function(err){
    if(err) return console.log(err);
    app.listen(4200, function(){
        console.log("Сервер ожидает подключения...");
    });
});


/*
const app = express();
const jsonParser = express.json();
   
const mongoClient = new MongoClient("mongodb://localhost:27017/");
   
let dbClient;
   
// настройка CORS
app.use(function(express.static(__dirname + "/public"));
   
mongoClient.connect(function(err, client){
    if(err) return console.log(err);
    dbClient = client;
    app.locals.collection = client.db("titledb").collection("titles");
    app.listen(4200, function(){
        console.log("Сервер ожидает подключения...");
    });
});
   
app.get("/api/titles", function(req, res){
          
    const collection = req.app.locals.collection;
    collection.find({}).toArray(function(err, title){
           
        if(err) return console.log(err);
        res.send(titles)
    });
       
});
app.get("/api/titles/:id", function(req, res){
          
    const id = new objectId(req.params.id);
    const collection = req.app.locals.collection;
    collection.findOne({_id: id}, function(err, title){
                 
        if(err) return console.log(err);
        res.send(title);
    });
});
     
app.post("/api/titles", jsonParser, function (req, res) {
         
    if(!req.body) return res.sendStatus(400);
         
    const titleName = req.body.title;
    const titleAge = req.body.text;
    const title = {title: titleName, text: titleAge};
         
    const collection = req.app.locals.collection;
    collection.insertOne(title, function(err, result){
                 
        if(err) return console.log(err);
        res.send(title);
    });
});
 
     
app.put("/api/titles", jsonParser, function(req, res){
          
    if(!req.body) return res.sendStatus(400);
    const id = new objectId(req.body._id);
    const titleName = req.body.title;
    const titleAge = req.body.text;
         
    const collection = req.app.locals.collection;
    collection.findOneAndUpdate({_id: id}, { $set: {text: titleAge, title: titleName}},
         {returnOriginal: false },function(err, result){
                 
        if(err) return console.log(err);     
        const title = result.value;
        res.send(title);
    });
});
   
// прослушиваем прерывание работы программы (ctrl-c)
process.on("SIGINT", () => {
    dbClient.close();
    process.exit();
});*/