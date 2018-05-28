import React, {Component} from 'react'
import StripeCheckout from 'react-stripe-checkout'
import * as actions from '../action'
import {connect} from 'react-redux'
class Payments extends Component{
    render(){
        return (
            <StripeCheckout
            name="Emaily"
            description="Get 5 credits now with just 5$!"
            amount={500}
            token={token => this.props.handleToken(token)}
            stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
            <li className="right hide-on-med-and-down">
            <a>Add credit</a>
            </li>
            </StripeCheckout>
        )
    }
}

export default connect(null,actions)(Payments)