var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ItemSchema = new Schema({

    owner : {
        type: Schema.ObjectId,
        ref : 'User'
    },
    itemName : { 
        type:String
    },
    gotten : {
        type:Boolean, 
        default:false 
    }
});

mongoose.model('Item', ItemSchema);