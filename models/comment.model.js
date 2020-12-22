var Post = mongoose.model('Post', {
    post_id: { type: String },
    description: { type: String },
    post_by: { type: String },
    create_on: {type: Date, default: Date.now},
});
module.exports = { Post };