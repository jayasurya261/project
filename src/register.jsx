import { Link } from 'react-router-dom';
import './login.css'
const Register = () =>{
    return (
        <>
        <div className="card">
            <h1>REGISTER</h1>
            <br/>
            <form>
                <input type='text' placeholder='Enter Name' id='name'></input><br></br>
            <input type="email" placeholder="Enter Email Here" id='input'></input><br/>
            <input type="password" placeholder="*********" id='password'></input><br/>   
            <Link to="/">
            <button id='submit' type="submit">SUBMIT</button>
            </Link> 
            <br/>
            
            </form>
        </div>
        </>
    )

}
export default Register;