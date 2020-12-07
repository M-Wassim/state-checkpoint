
import './App.css';
import React from 'react'
import photo from './profilephoto.png'

class App extends React.Component{
   
  state={
    
    person :{
      fullName: 'ali',
      bio:'ali bio',
      imgSrc :{photo},
      profession:'ali profession',
     },
    show : false
  };

  changeShow=()=>{
    this.state.show ? this.setState({show:false}) : this.setState({show:true})

  }
  componentDidMount(){
    this.timeMount =(new Date().toLocaleTimeString())

  }
 
  
render(){
 
return(
<div className="App">

    
<button onClick={this.changeShow}>Show/Hide</button>

     {this.state.show ? 
        <div style={{backgroundColor:'Grey',width:'250px',margin:'auto'}}>  
        <img src={photo} alt='imagefortest' width="200px" style={{borderRadius:'200px'}}></img> 
        <h2 style={{fontFamily:'monospace'}}>Name :  {this.state.person.fullName} </h2>
        <h2 style={{fontFamily:'monospace'}}> Bio :{this.state.person.bio}</h2>
        <h2 style={{fontFamily:'monospace'}}>Profession : {this.state.person.profession}</h2>
        </div>  : <h1>Nothing to show</h1>}
        
        {this.timeMount ? `Component has mounted at ${this.timeMount}` :"Component didn't mount yet"}
     
    
    </div>
    );

}


}

export default App;
