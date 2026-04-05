const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const chat = require("./models/chats.js");
const methodOverride = require("method-override");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public"
)));
app.use(express.urlencoded({extended: true }));
app.use(methodOverride("_method"));

main()
    .then(() => {
        console.log("connection Successful");
    })
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}

// let chat1 = new chat({
//     from: "neha",
//     to: "sneha",
//     msg : "Send me chats",
//     created_at: new Date() //UTC format
// }) ;

// chat1.save().then((res) => { 
//     console.log(res);
// });
  

// Index Route
app.get("/chats", async (req,res) => {
   let chats = await chat.find();
//    console.log(chats);
//    res.send("Working");
res.render("index.ejs", {chats});
});

// New Route
app.get("/chats/new", (req,res) => {
    res.render("new.ejs");
})

// create route
app.post("/chats", (req,res) => {
    let {from, to, msg} = req.body;
    let newChat = new chat({
        from: from,
        to: to,
        msg: msg,
        created_at: Date()
});
   newChat.save()
   .then(res => {
        console.log("chat was saved");
   })
   .catch(err => {
        console.log(err);
   })
   res.redirect("/chats");
})

// Edit Route
app.get("/chats/:id/edit", async (req, res) => {
    let {id} = req.params;
    let chatDoc = await chat.findById(id);
    if (!chatDoc) {
        return res.status(404).send("Chat not found");
    }
    res.render("edit.ejs", {chat: chatDoc});
});

// Update Route
app.post("/chats/:id", async (req, res) => {
    let {id} = req.params;
    let {msg} = req.body;
    await chat.findByIdAndUpdate(id, {msg: msg, updated_at: new Date()}, {runValidators: true, new: true});
    res.redirect("/chats");
});

// Destroy Route
app.delete("/chats/:id",async (req, res) => {
    let {id} = req.params;
    let deletedChat = await chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
});


app.get("/", (req, res) => {
    res.send("Root is Working");
})

app.listen(8080, () => {
    console.log("Server is listenging on port 8080 ");
});

