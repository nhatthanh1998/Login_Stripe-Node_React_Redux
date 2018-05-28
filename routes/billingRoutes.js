const keys = require('../config/keys')
const stripe = require('stripe')(keys.stripeSecret)
module.exports = app =>{
    app.post('/api/stripe',async (req,res)=>{
        const charge = await stripe.charges.create({
            amount:500,
            currency:'usd',
            description:'$5 for 5 credits!',
            source:req.body.id
        })
        req.user.credits+=5
        req.user.save().then(user=>{
            res.status(200).send(user)
        }).catch(e=>{
            res.status(200).send()
        })
    }) 
}