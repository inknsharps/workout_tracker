const path = require("path");
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));
app.use(require("./routes"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", { useNewUrlParser: true });

app.listen(PORT, () => {
    console.log(`Now listening on PORT ${PORT}!`)
});