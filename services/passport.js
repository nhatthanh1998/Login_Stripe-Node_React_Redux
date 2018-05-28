const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys')
const {User} = require('./../sources/models/user')




passport.serializeUser((user,done)=>{
    done(null,user.id)
})
passport.deserializeUser((id,done)=>{
    User.findById(id).then(user=>{
        done(null,user)
    })
})
passport.use(new GoogleStrategy({
    clientID:keys.googleClientID,
    clientSecret:keys.googleClientSecret,
    callbackURL:'/auth/google/callback',
    proxy:true
},
async (accessToken,refreshToken,profile,done)=>{
    const ExistUser = await User.findOne({
        googleID:profile.id
    })
    if(ExistUser){
        return done(null,ExistUser)
    }
        const newUser = new User({
            googleID:profile.id
        })
        const user = await newUser.save()
        done(null,user)
}))