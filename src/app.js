import React,{Component} from 'react'
import {Route,Switch,Link} from 'react-router-dom'
import About from './about'
import Infos from './infos'
import Home from './home'

class App extends Component{
    render(){
        return(
            <div>
                <ul>
                    <li><Link to = '/'>主页</Link></li>
                    <li><Link to = '/infos'>公告</Link></li>
                    <li><Link to = '/about'>关于我们</Link></li>
                </ul>
                <Switch>
                    <Route exact path = '/' component = {Home} />
                    <Route path = '/infos' component = {Infos} />
                    <Route path = '/about' component = {About} />
                </Switch>
            </div>
        )
    }
}
export default App