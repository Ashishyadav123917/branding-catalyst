const path= require('path')
const mongoose = require('mongoose');

const teamSchema= new mongoose.Schema({
    name:{
        type: String,
    },
    Link:{
        type: String,
    },
    Image:{
        type: String,
    }

});

module.exports= mongoose.model('team',teamSchema);
