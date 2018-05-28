import React , {Component} from 'react'
import {connect} from 'react-redux'
import {Router,Route,Switch} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory' 
import Header from './Header'
import Landing from './Landing'
import * as actions from '../action'


const Dashboard = ()=> <h2>Dashboard</h2>
const SurveyNew = ()=> <h2>Survey New</h2>
export const history = createHistory()
class App extends Component{
    componentDidMount(){
        this.props.fetchUser()
    }

    render(){
        return <Router history={history}>
            <div className="container">
                <Header/>
                <Switch>
                    <Route exact path="/" component={Landing}></Route>
                    <Route path="/surveys" component={Dashboard}></Route>
                    <Route exact path="/surveys/new" component={SurveyNew}></Route>
                </Switch>
            </div>
            </Router>
    }
}

export default connect(null,actions)(App)

