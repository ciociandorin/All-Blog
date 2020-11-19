const mongoose = require('mongoose');

const User = mongoose.model("User");

module.exports.register = (req, res, next) => {
    console.log( 'Inside register fn.' );
    var user = new User();
    user.username = req.body.username;
    user.email = req.body.email;
    user.password = req.body.password;
    user.save((err, doc) => {
        if(!err)
            res.send(doc);
        else
            {
                if(err.code == 1100)
                    res.status(422).send(['Duplicate email adress found.']);
                else
                    return next(err);
            }
    });
}