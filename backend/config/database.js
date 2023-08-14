const mongoose = require('mongoose')
const connectDatabase = () => {
    const connection_string1 = process.env.DB_URI
    mongoose.connect(connection_string1,{useNewUrlParser:true,
            useUnifiedTopology:true
    }).then((data)=> {
        console.log(`Mongodb connected with server: ${data.connection.host}`);
    }).catch((err)=>{
        console.log("err occurs",err)
    })
}

module.exports = connectDatabase