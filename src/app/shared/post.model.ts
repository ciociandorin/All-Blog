export class Post {
    _id: string = '';
    title: string = '';
    description: string = '';
    comment: Array<Comment> = [];
    
}

export class Comment{
    comment: string = "";
}

// var Post = mongoose.model('Post', {
//     title: { type: String },
//     description: { type: String },
//     post_by: { type: String },
//     url: { type: Number },
//     create_on: {type: Date, default: Date.now},
//     comment: [{
//         comment: { type: String },
//         post_by: { type: String },
//         create_on: {type: Date, default: Date.now}
//       }]
// });