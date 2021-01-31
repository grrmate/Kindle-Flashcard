var express = require('express')
var app = express()
const server = require('http').Server(app);
const fileUpload = require('express-fileupload');

app.use(fileUpload({useTempFiles: true}));
app.use(express.static('public'));

const Connect = require("./routes/connect")
const Upload = require("./routes/upload")

// Middlewares
app.use("/", Connect)
app.use("/vocabulary", Upload)


server.listen(process.env.PORT || 8080, () => console.log("app listening on port 8080!"))