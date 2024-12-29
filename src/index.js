// import dotenv from "dotenv"
// import { app } from "./app.js"
// import {connectDB} from "./db/index.js"


// dotenv.config()

// // Database connection
// connectDB()
//     .then(() => {
//         // Start the server
//         app.listen(process.env.PORT || 8000, () => {
//             console.log(`server is running at port : ${process.env.PORT}`);
//         })
//     })
//     .catch((err) => {
//         console.log("Mongo DB connection failed !!!", err);
//     })

// app.get("/", (req, res) => {
//     res.json({
//         message: "deepak"
//     })
// })



import dotenv from "dotenv";
import { app } from "./app.js";
import { connectDB } from "./db/index.js";

dotenv.config();

// Database connection
connectDB()
    .then(() => {
        // Start the server
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running at port : ${process.env.PORT}`);
        });
    })
    .catch((err) => {
        console.log("MongoDB connection failed !!!", err);
        process.exit(1);
    });

app.get("/", (req, res) => {
    res.json({
        message: "deepak"
    });
});
