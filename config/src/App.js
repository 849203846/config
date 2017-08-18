import React,{Component} from 'react'
import './css/index.less'
import Home from "./conponent/Home";
import List from "./conponent/List";
import { HashRouter as Router, Route,Link} from 'react-router-dom'
export default class App extends Component{
    render(){
        return(
            <Router>
            <div className="ceshi">


                <Route
                path="/home"
                render={()=><Home/>}
                />

                <Route
                    path="/list"
                    render={()=><List/>}
                />
                <ul>
                    <button><Link to="/home">主页</Link></button>
                    <button><Link to="/list">列表</Link></button>
                </ul>
            </div>
            </Router>
        )
    }
}