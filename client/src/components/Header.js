import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Payments from './payment'
class Header extends Component{

    renderContent(){
        switch(this.props.auth){
            case null:
                return <li>Connecting ....</li>
            case false:
                return(
                    <li><a href="/auth/google">Login with Google</a></li>
                )
            default:
                return(
                    <div>
                    <li key="1"><Payments/></li>
                    <li key="2" style={{margin: '0 10px'}}>Credits:{this.props.auth.credits}</li>
                    <li key="3"><a href="/api/logout">Log out</a></li>
                    </div>
                )
        }
    }
    render(){ 
        return(
                 <nav>
    <div className="nav-wrapper">
      <Link to= {this.props.auth ? '/surveys' : '/'} className="brand-logo">Emaily</Link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        {this.renderContent()}
      </ul>
    </div>
  </nav>
        )
    }
}

function mapStateToProps(state){
    return{
        auth:state.auth
    }
}

export default connect(mapStateToProps)(Header)