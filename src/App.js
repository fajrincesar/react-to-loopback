import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state={nama:'',age:'',stud:[]};
  }
  click=()=>{ 
    this.setState({
      nama:this.refs.nama.value, 
      age:this.refs.age.value,
    });
  }
   searching=()=>{
     axios.get('http://localhost:3000/api/students')
     .then((ambildata)=>{
       console.log(ambildata.data);
        this.setState({
          stud:ambildata.data,
        })
     })
   };
  //  muat(){ 
  //  axios({
  //   method: 'post',
  //   url: 'http://localhost:3000/api/students',
  //   data: {
  //     "name": "this.state.name",
  //     "age": this.state.age
  //   }
  // }).then(function() {
  //   console.log("done");
  // });
  // }
  
   muat=()=>{
    axios.post('http://localhost:3000/api/students',
    {
      nama: this.state.nama,
      age: this.state.age,
    })
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
  }
  render() {
     const data=this.state.stud.map((item, index)=>{
       var nm =[item.nama]
       var reg=[item.age] 
       return <tr key={index}><td>{nm}</td><td>{reg}</td></tr>
     });
    return (
      <div>
        <div className="container">
           <center>
              <h1>REACT TO LOOPBACK</h1>
                  <div className="row">
                      <div className="col-lg-4">
                          <input className="form-control" ref="nama" type="text" placeholder="name" style={{width:'250px'}} onInput={()=>{this.click();}}/><br></br>
                          <input className="form-control" ref="age" type="number" placeholder="age" style={{width:'250px'}} onInput={()=>{this.click();}}/><br></br>
                          <button type="submit" className="btn btn-success btn-block" style={{width:'100px'}} onClick={()=>{this.searching();}}>get</button>
                          <button type="submit" className="btn btn-success btn-block" style={{width:'100px'}} onClick={()=>{this.muat();}}>post</button>
                          {/* <textarea ref="nama" type="text" rows="10" cols="30" onInput={()=>{this.click();}}/> */}
                      </div><br></br>
                      <div className="col-md-2">
                          
                      </div>
                  </div>
            </center>
              <br/>
              <center>
                  <table>
                    <tr>
                      <td>Name</td>
                      <td>Age</td>
                    </tr>
                      {data}
                  </table>
              </center> 
        </div>
      </div>
    );
  }
}

export default App;