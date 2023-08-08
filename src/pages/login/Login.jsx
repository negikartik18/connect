import "./login.css";

function Login() {
  return (
    <div className="login">
      <div className="login-wrapper">
        <div className="login-left">
          <h3 className="login-logo">Connect</h3>
          <span className="login-desc">Let's Connect!</span>
        </div>
        <div className="login-right">
          <div className="login-box">
            <input placeholder="Email" className="login-input" />
            <input placeholder="Password" className="login-input" />
            <button className="login-btn">Log In!</button>
            <span className="login-forgot">Forgot Password?</span>
            <div className="or-option">OR</div>
            <button className="login-register-btn">Create new Account!</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
