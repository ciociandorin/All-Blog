// post class
export class Post {
    _id: string = '';
    title: string = '';
    description: string = '';
    post_by: string = '';
    create_on: string = '';
    comment: Array<Comment> = [];
    
}

export class Comment{
    comment: string = "";
    post_by: string = '';
    create_on: string = '';
}