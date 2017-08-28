import React,{Component} from 'react';
import './index.less';
export default class Sigin extends Component{
    constructor(){
        super();
        this.state={username:'',password:''};
    }
    btn(){
        let my={username:this.state.username,password:this.state.password}

    }
    render(){
        return (
            <div className="sigins">
                <div className="sigin">
                    <li>
                        <i className="iconfont icon-password"> </i>
                    <input
                        placeholder="请输入你的用户名"
                        className="iphone"
                        type="text"
                        id="iphone"
                        value={this.state.username}
                        onChange={event=>this.setState({username:event.target.value})}/></li>
                    <li>
                        <i className="iconfont icon-password"> </i>

                    <input
                        placeholder="请输入你的密码"
                        type="password"
                        id="password"
                        value={this.state.password}
                        onChange={event=>this.setState({password:event.target.value})} />
                    </li>
                    <li><button onClick={this.btn}>登录</button></li>
                </div>

            </div>
        )
    }
}

