const mongoose = require('mongoose');

// var Post = mongoose.model('Post', {
//     title: { type: String },
//     description: { type: String }   
//     // aici adaugat
// });

// module.exports = { Post };

var Post = mongoose.model('Post', {
    title: { type: String },
    description: { type: String },
    post_by: { type: String },
    url: { type: Number },
    create_on: {type: Date, default: Date.now},
    comments:{
        post_by: { type: String },
        message: { type: String },
        create_on: {type: Date, default: Date.now}
    }
});
module.exports = { Post };