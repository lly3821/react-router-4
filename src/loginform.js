import React,{Component} from 'react'

class LoginForm extends Component{
    constructor(props){
        super(props);
        thsi.state = {login:false}
        this.props.handleChange = this.props.handleChange.bind(this)
    }

    handleChange(){
        this.setState({login:!login})
    }
    render(){
        return(
            <div>
                <h1>登录页面</h1>
                <form>
                    <label>
                        账号：
                        <input type="text" name="username" />
                    </label>
                    <br/>
                    <label>
                        密码：
                        <input type="text" name="password" />                        
                    </label>
                    <br/>
                    <input type = "submit" value = "登录" onChange={this.props.handleChange} />
                </form>
            </div>
        )
    }     
}

export default LoginForm

