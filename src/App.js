import './App.css';
import { Component } from 'react';
// Create a React app with create-react app tool, this app will contain one Component than the App,
// in side this component you should render this array of
//     [{name: 'Ahmad', age: 30},
//     {name: 'Yousef', age: 12},
//     {name: 'Shatha', age: 14},
//     {name: 'Rana', age: 22},
//     {name: 'Osama', age: 22}
//     {name: 'Ahmad', age: 38} ]
// Which will be passed to this Component as Prop, you should render 2 lists beside each other, a list of Names with title Names, and a list of Ages with title ages,
// you should make sure that names and ages inside lists will be unique (no duplication allowed),
// no need for Styling
// then added a button that will delete all entries from 2 lists one by one 
// (every click the last age and the name will be deleted)

class App extends Component {
  deleteValue() {
    if(this.state.age){
      this.state.age.pop();
    }
    if(this.state.name){
      this.state.name.pop();
    }
    
    this.setState({"":""})
  }
  constructor(props){
    let arr=[{name: 'Ahmad', age: 30},
  {name: 'Yousef', age: 12},
  {name: 'Shatha', age: 14},
  {name: 'Rana', age: 22},
  {name: 'Osama', age: 22},
  {name: 'Ahmad', age: 38} 
  ];
  let age={},name={};
  arr.forEach(element=>{age[element.age]=1;name[element.name]=1});
  age=Object.keys(age);
  name=Object.keys(name); 
  let x=0;
    super(props)
    this.state={
      "age":age,
      "name":name
    }
  }
  

  render() {
    return(
      <div>
      <List name={"NAME LIST"} list_item={this.state.name}/>
      <List name={"AGE LIST"} list_item={this.state.age}/>
      <button onClick={this.deleteValue.bind(this)}>DELETE</button>
      </div>
  )}
}
function List(props){
  const arr=props.list_item;
  return(
    <div>
      <div>
      <h1>{props.name}</h1>
        <ul>
          {arr.map((element,index) => <li key={index}>{element}</li>)}
        </ul>
      </div>
    </div>
  );
}
export default App;
