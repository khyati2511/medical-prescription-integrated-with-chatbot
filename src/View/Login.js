import React,{useState} from 'react'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
            <form onSubmit={handleSubmit}>
                <h3>Sign In</h3>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" value={email} onChange ={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" value={password} onChange ={(e)=>setPassword(e.target.value)} />
                </div>
                
                <button type="submit" className="btn btn-primary btn-block" disabled={!validateForm()}>Submit</button>
                
            </form>
  )
}

export default Login