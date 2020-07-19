const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((x) =>
    console.log(`Connected to Mongo! Database: ${x.connections[0].name}`)
  );
