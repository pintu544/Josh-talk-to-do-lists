const mongoose = require('mongoose');
const DB = process.env.DATABASE;
require('dotenv').config()

mongoose.connect(DB)
    .then(() => {
        console.log("Connection with db successful");
    }).catch((err) => console.log(err));
    mongoose.connect(config.DB,{ useNewUrlParser: true });
// const mongoose = require('mongoose')


//     const url = process.env.MONGO_URL
// mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
// .then(() => app.listen(PORT, () => console.log("Server up and running!")
// .catch((error) => console.log(error.message) 
 // mongoose.set('useFindAndModify',false)