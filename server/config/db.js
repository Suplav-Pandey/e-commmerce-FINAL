const mongoose = require("mongoose");
try {
  mongoose.connect("mongodb://127.0.0.1:27017/e-commerse", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log("Database Connected Successfully");
} catch (err) {
  console.log("Database Not Connected");
}
