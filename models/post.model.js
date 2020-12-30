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
    comment: [{
        comment: { type: String },
        post_by: { type: String },
        create_on: {type: Date, default: Date.now}
      }]
});
module.exports = { Post };