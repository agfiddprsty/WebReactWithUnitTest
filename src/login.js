import React from 'react'; 
import Navbar from './navbar';
import pic from './tanggal.png';
import Batch from './batch';

class Login extends React.Component {
  constructor(){
    super();
    this.state = {
      email: '',
      password: '',
      news: []
    }
  }

handleInputChange = (event) => {
  this.setState({
   [event.target.name]: event.target.value
  })
 }

render() {  
  return (
    <div>
      <Navbar />
   <form className='login'>
     <label>Username</label>
     <input id='email' onChange={this.handleInputChange} name='email' type='text' />
     <label>Password</label>
     <input id='password' onChange={this.handleInputChange} name='password' type='password' />
     <a href="https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=81r9no2nn600wi&redirect_uri=http://localhost:3000/News&state=aRandomString"><button className="btn-success">Login With LinkedIn</button></a>
     <button onClick={()=>{this.props.history.push("/News")}}>Submit</button>
     <p></p>  
   </form>
   <div class="media border p-3">
      {/* <img src={pic} alt="John Doe" class="mr-3 mt-3 img-thumbnail"/> */}
      <div class="media-body">
        <h4>John Doe <small><i>Posted on February 19, 2016</i></small></h4>
        <p>Lorem ipsum...</p>
      </div>
   </div>
   <Batch/>
   </div>
  )
 }
}

export default Login
