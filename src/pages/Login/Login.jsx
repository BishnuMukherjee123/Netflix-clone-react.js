import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { login, signup } from "../../firebase";
import netFlix_spinner from '../../assets/netflix_spinner.gif';

function Login() {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const user_auth = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (signState === "Sign In") {
      await login(email, password);
    } else {
      await signup(name, email, password);
    }
    setLoading(false);
  };

  return loading ? (
    <div className="w-full h-screen flex items-center justify-center">
      <img className="w-16 max-[320px]:w-12" src={netFlix_spinner} alt="" />
    </div>
  ) : (
    <div className="min-h-screen bg-[linear-gradient(#0000007e,#0000007e),url('/background_banner.jpg')] bg-cover bg-center px-6 py-8 max-[320px]:px-4 max-[320px]:py-4">
      <img src={logo} alt="" className="w-36 md:w-40 lg:w-52 max-[320px]:w-24 mx-auto md:mx-0" />
      <div className="w-full max-w-md bg-[rgba(0,0,0,0.75)] rounded-md p-8 md:p-14 mx-auto mt-8 max-[320px]:max-w-xs max-[320px]:p-4">
        <h1 className="text-2xl md:text-3xl font-medium mb-7 max-[320px]:text-lg">
          {signState}
        </h1>
        <form>
          {signState === "Sign Up" && (
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Your name"
              className="w-full placeholder:text-base h-12 my-3 border-0 outline-0 bg-[#333] text-white rounded-md text-base py-4 px-5 font-medium max-[320px]:text-sm max-[320px]:py-3"
            />
          )}

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full placeholder:text-base h-12 my-3 border-0 outline-0 bg-[#333] text-white rounded-md text-base py-4 px-5 font-medium max-[320px]:text-sm max-[320px]:py-3"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full placeholder:text-base h-12 my-3 border-0 outline-0 bg-[#333] text-white rounded-md text-base py-4 px-5 font-medium max-[320px]:text-sm max-[320px]:py-3"
          />
          <button
            onClick={user_auth}
            type="submit"
            className="w-full border-0 outline-0 py-4 bg-[#e50914] text-white rounded-md text-base font-medium mt-5 cursor-pointer transition-colors duration-300 hover:bg-[#f6121d] max-[320px]:py-3 max-[320px]:text-sm"
          >
            {signState}
          </button>
          <div className="flex flex-col sm:flex-row items-center justify-between text-[#b3b3b3] text-xs mt-6 gap-4 max-[320px]:text-[10px]">
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4 max-[320px]:w-3 max-[320px]:h-3" />
              <label>Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="mt-10 text-[#737373] max-[320px]:text-xs text-center">
          {signState === "Sign In" ? (
            <p>
              New to Netflix?{" "}
              <span
                onClick={() => setSignState("Sign Up")}
                className="ml-2 font-medium cursor-pointer text-white"
              >
                Sign Up Now
              </span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span
                onClick={() => setSignState("Sign In")}
                className="ml-2 font-medium cursor-pointer text-white"
              >
                Sign in Now
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
