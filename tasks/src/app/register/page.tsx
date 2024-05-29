import Link from "next/link";
import InputField from "app/components/inputField ";

export default function Register() {
  return (
    <div className="container">
      <div className="title">
        <p>Sign up to TaskMaster</p>
      </div>
      <div className="login-box">
        <InputField label="UserName" type="text" placeholder="" />
        <br />
        <InputField label="Phone number" type="text" placeholder="" />
        <br />
        <InputField label="Password" type="text" placeholder="" />

        <button>Sign up</button>

        <div className="sign">
          <p>You have an account?</p>
          <Link href="/login">Sign in</Link>
        </div>
      </div>
    </div>
  );
}
