const mongoose = require('mongoose'); //mongodb
const passport = require('passport'); //passport
const _ = require('lodash');          // lodash
const User = mongoose.model("User");  // user model

// REGISTER
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
                if(err.code == 11000)
                    {res.status(422).send(['Duplicate email adress found.']);
                    console.log('Duplicate email adress found.');}
                else
                    return next(err);
            }
    });
}

// AUTHENTICATE and GET JWT
module.exports.authenticate = (req, res, next) => {
    // call for passport authentication
    passport.authenticate('local', (err, user, info) => {       
        // error from passport middleware
        if (err) return res.status(400).json(err);
        // registered user
        else if (user) return res.status(200).json({ "token": user.generateJwt() });
        // unknown user or wrong password
        else return res.status(404).json(info);
    })(req, res);
}

// GET user data
module.exports.userProfile = (req, res, next) =>{
    User.findOne({ _id: req._id },
        (err, user) => {
            if (!user)
                return res.status(404).json({ status: false, message: 'User record not found.' });
            else
                return res.status(200).json({ status: true, user : _.pick(user,['username','email']) }); // add 'sublist', _id
        }
    );
}