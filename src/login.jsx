import { Link } from 'react-router-dom';
import './login.css'
const Login = () =>{
    return (
        <>
        <div className="card">
            <h1>LOGIN</h1>
            <br/>
            <form>
            <input type="email" placeholder="Enter Email Here" id='input'></input><br/>
            <input type="password" placeholder="*********" id='password'></input><br/>   
            <Link to="/home">
            <button type="submit" id='submit'>SUBMIT</button>
            </Link> <br/>
            <Link to="/register">
            <button id='new-user'>
                New User?
            </button>
            </Link>
            </form>
        </div>
        </>
    )

}
export default Login;