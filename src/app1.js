import React,{Component} from "react";
import axios from 'axios';
class App extends Component{
    state = {
        data:[]
    }
componentDidMount(){
    axios.get('./app.json').then(res=>{
       this.setState({data:res.data})
     })
}
    render(){
       const datageter = this.state.data;
         const list = datageter.map((items)=>{
            return(
                <div key={items.id}>
                        <div>
                            <img src={items.img} alt=""/>
                        </div>
                    <h1>{items.username}</h1>
                    <p>{items.id}</p>
                </div>
            )
      })
        return(
          <div>
          {list}
            </div>
        )
    }
}
export default App;