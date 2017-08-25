import React,{Component} from 'react';
import {Link,NavLink} from 'react-router-dom';
import './index.less';
export default class Nav extends Component{
    render(){
        return (
            <div className="nav-list">
               <NavLink to="/home">主页</NavLink>
               <NavLink to="/list">列表</NavLink>
               <NavLink to="/news">消息</NavLink>
               <NavLink to="/my">我的</NavLink>

            </div>
        )
    }
}
