const express = require("express");
const app = express();
const connectDB = require("./config/db");
const cors = require("cors");
connectDB();

const studentRouters = require("./routers/studentRouters.js");

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

app.use(studentRouters);
app.use((err, req, res, next) => {
    console.error("Error:", err.message);

    res.status(500).json({
        message: "Internal Server Error"
    });
});
/*app.listen(3000, () => {
    console.log("server is running in a port 3000 successfully");});*/
    app.listen(3000, () => {
    console.log("Server is running on port 3000");
}).on("error", (err) => {
    console.log("Server error:", err);
});

   