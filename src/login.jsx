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
            <button type="submit">SUBMIT</button>
            <p>New User?</p>
            </form>
        </div>
        </>
    )

}
export default Login;