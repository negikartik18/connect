import "./register.css";

function Register() {
  return (
    <div className="register">
      <div className="register-wrapper">
        <div className="register-left">
          <h3 className="register-logo">Connect</h3>
          <span className="register-desc">Let's Connect!</span>
        </div>
        <div className="register-right">
          <div className="register-box">
            <input placeholder="Username" className="register-input" />
            <input placeholder="Email" className="register-input" />
            <input placeholder="Password" className="register-input" />
            <input placeholder="Confirm Password" className="register-input" />
            <button className="register-btn">Sign Up!</button>
            <span className="or-option">OR</span>
            <button className="login-register-btn">Log Into Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
