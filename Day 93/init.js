const mongoose = require("mongoose");
const chat = require("./models/chats.js");

const allChats = [
  {
    from: "neha",
    to: "sneha",
    msg: "Send me chats",
    created_at: new Date(),
  },
  {
    from: "Ankita",
    to: "Anuar",
    msg: "lorem",
    created_at: new Date(),
  },
  {
    from: "Rupsa",
    to: "srijita",
    msg: "Sister",
    created_at: new Date(),
  },
  {
    from: "Color",
    to: "Black-White",
    msg: "coloring the one",
    created_at: new Date(),
  },
  {
    from: "naruto",
    to: "kakasi",
    msg: "Hokage",
    created_at: new Date(),
  },
  {
    from: "Luffy",
    to: "ZORO",
    msg: "Gum Gum Zoro",
    created_at: new Date(),
  },
];

async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");

    console.log("Connection Successful");

    const result = await chat.insertMany(allChats);
    console.log(`Inserted ${result.length} chat documents`);
  } catch (err) {
    console.error("Error connecting or inserting chats:", err);
  } finally {
    await mongoose.disconnect();
  }
}

main();

