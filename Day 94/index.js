const express = require("express");
const app = express();

app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOveride("_method"));

main()
.then(() => {
    console.log("Connection Successful");
})
.catch(err => {
    console.log(err);
});


async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

// Index Route
app.get("/chats", async (req, res) => {
    let chats = await chat.find();
    // console.log(chats);
    // res.send("Working");
    res.render("index.ejs",{chats});
});

// New Route
app.get("/chats/new", (req, res) => {
    res.render("new.ejs");
});

// create route
app.post("/chats", (req, res) => {
    let {from, to, msg} = req.body;
    let newChat = new chat ({
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

// Destroy route
app.delete("/chats/:id", async(req, res) => {
    let {id} = req.params;
    let deletedChat = await chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
});

app.get("/",(req, res)=> {
    res.send("Root is listening");
})

app.listen(8080, ()=> {
    console.log("Server is listening...");
});