import React,{Component} from 'react';
import axios from 'axios';
import { Route, Router,hashHistory,Link,IndexRoute } from 'react-router';

class App2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            persons:[]
        }
    }

    componentDidMount(){
        //Get method
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
            const persons=res.data
            this.setState({persons})
            console.log('=====',this.state.persons)
            console.log(persons)
        }).catch(err=>{
            console.log(err)
        });

        
    }
    render () {
      return (
        <Router history={hashHistory}>
          <Route path='/' component={Container}>
            <IndexRoute component={Home} />
            {/* <Route path='/address' component={Address} /> */}
            <Route path='/address' component={Address}>
                <IndexRoute component={PerAddress}/>
                <Route path='tempadd' component={TempAdderss} />
            </Route>
            <Route path='/users(/:name)' component={() => <Users data={this.state} />}></Route>
            <Route path='*' component={NotFound} />
          </Route>
        </Router>
      )
    }
  }
  
// const Users=(props)=><div>
//     <h1>Users Component</h1>
//   {props.data}
    
//     {/* <div>
//                 <h2>Records</h2>
//             <ul>
//                 {this.state.persons.map((person,i)=><li key={i}>{person.name}</li>)}
//            </ul>


//         </div> */}
// </div>
const Users = ({ data }) => {
  return (
    <div>
                <h2>All Users</h2>
            <ul>
                {data.persons.map((person,i)=>
                <li><Link key={i} activeStyle={{color:'#3097f1'}} to={`/users/${person.id}`}>{person.name}</Link></li>
                )}
           </ul>


        </div>
  );
};

const PerAddress=()=>(<div>Pune wakad</div>)
const TempAdderss=()=><div>Mumbai Bandra</div>

const Nav = () => (
    <div>
      <Link onlyActiveOnIndex activeStyle={{color:'#3097f1'}} to='/'>Home</Link>&nbsp;
      <Link activeStyle={{color:'#3097f1'}} to='/address'>Address</Link>
      <Link activeStyle={{color:'#3097f1'}} to='/users'>Users</Link>
    </div>
  )

const Container = (props) => <div>

  <Nav />
  {props.children}
</div>

const Home=()=> <h1>Home Component</h1>
// const Address=()=> <h1>Address Component</h1>

const Address=(props)=><div>
    <br/>
    <Link onlyActiveOnIndex activeStyle={{color:'#3097f1'}} to='/address'>Permanent Address </Link> &nbsp; &nbsp;
    <Link activeStyle={{color:'#3097f1'}} to='/address/tempadd'>Temporary Address</Link>
    {props.children}
</div>

const NotFound=()=> <h1>404 Not Found</h1>
export default App2;