import Container from "../components/Container";
import logo from "../image.png";


const Login = () => {
    return (<Container>



        <img className = 'a' src = {logo}></img>

      <input className="a" name="userName" placeholder="User Name" />
      
       <input className="b" name="password" placeholder="Password" />
     

      <button type="submit">Log In</button>

    </Container>)
}

export default Login;