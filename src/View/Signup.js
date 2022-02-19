import React,{useState} from 'react'

const Signup = () => {

    const [userCreds, setUserCreds] = useState({ firstname: '', lastname: '', email: '', password: ''});

    function validateForm() {
        return userCreds.email.length > 0 && userCreds.password.length > 0 && userCreds.firstname.length > 0 && userCreds.lastname.length> 0;
      }
    
      function handleSubmit(event) {
        event.preventDefault();
      }

  return (
    <form onSubmit={handleSubmit}>
    <h3>Sign Up</h3>
    <div className="form-group">
        <label>First name</label>
        <input type="text" className="form-control" placeholder="First name" value ={userCreds.firstname} onChange={(e)=>setUserCreds({...userCreds, firstname: e.target.value})} />
    </div>
    <div className="form-group">
        <label>Last name</label>
        <input type="text" className="form-control" placeholder="Last name" value ={userCreds.lastname} onChange={(e)=>setUserCreds({...userCreds, lastname: e.target.value})}/>
    </div>
    <div className="form-group">
        <label>Email address</label>
        <input type="email" className="form-control" placeholder="Enter email" value ={userCreds.email} onChange={(e)=>setUserCreds({...userCreds, email: e.target.value})}/>
    </div>
    <div className="form-group">
        <label>Password</label>
        <input type="password" className="form-control" placeholder="Enter password" value ={userCreds.password} onChange={(e)=>setUserCreds({...userCreds, password: e.target.value})}/>
    </div>
    <button type="submit" className="btn btn-primary btn-block" disabled={!validateForm()}>Sign Up</button>
    <p className="forgot-password text-right">
        Already registered <a href="#">sign in?</a>
    </p>
</form>
  )
}

export default Signup