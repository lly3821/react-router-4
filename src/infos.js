import React,{Component} from 'react'
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom'
import Info1 from './info1'
import Info2 from './info2'

class Infos extends Component{

    render(){
        return(
            <div>
                <h1>公告</h1>
                <ul>
                    <li><Link to = "/infos/info1">公告1</Link></li>
                    <li><Link to = "/infos/info2">公告2</Link></li>
                </ul>
                <Switch>
                    <Route path="/infos/info1" component = {Info1}/>
                    <Route path="/infos/info2" component = {Info2}/>   
                </Switch>
            </div>
        )
    }
}
export default Infos