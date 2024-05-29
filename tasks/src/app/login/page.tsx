import Link from "next/link";
import "../css/login.css";
import InputField from "app/components/inputField ";

export default function Login() {
  return (
    <div className="container">
      <div className="title">
        <p>Sign in to TaskMaster</p>
      </div>
      <div className="login-box">
        <InputField label="UserName" type="text" placeholder="" />
        <br />  
        <InputField label="Password" type="text" placeholder="" />

        <div className="forgot-password">
          <a href="#">Forgot password?</a>
        </div>

        <button>Sign in</button>

        <div className="sign">
          <p>You don't have an account?</p>
          <Link href="/register">Sign up</Link>
        </div>
      </div>
    </div>
  );
}
