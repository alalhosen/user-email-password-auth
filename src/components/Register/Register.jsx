import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import {FaEye, FaEyeSlash} from "react-icons/fa";

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    if (password.length <6){
      setRegisterError('Password should be at least 6 characters or longer')
      return;
    }

      else if(!/[A-Z]/.test(password)){
        setRegisterError('Your password should have at least one upercase characters.')
        return;
      }


    //reset error
    setRegisterError("");
    setSuccess("");

    //create user
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("user created successfully.");
      })
      .catch((error) => {
        console.error(error);
        setRegisterError(error.message);
      });
  };

  return (
    <div className="border">
      <div className="mx-auto md:w-1/2">
        <h3 className="text-3xl mb-8">Please Register</h3>
        <form onSubmit={handleRegister}>
          <input
            className="mb-4 w-3/4 rounded-lg bg-gray-300 py-2 px-4"
            type="email"
            name="email"
            placeholder="Email Address"
            id="" required
          />
          <br />
          <input
            className="mb-4 w-3/4 bg-gray-300 rounded-lg py-2 px-4"
            type={showPassword ?  "text" : "password"}
            name="password"
            placeholder="Password"
            id="" required
          />
        <span onClick={ () =>setShowPassword(!showPassword)}>
          {
            showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
          }
          </span>
          <br />
          <input
            className="mb-4 w-3/4 btn btn-secondary"
            type="submit"
            value="Register"
          />
        </form>
        {registerError && <p className="text-red-600">{registerError}</p>}
        {success && <p className="text-green-500">{success}</p>}
      </div>
    </div>
  );
};

export default Register;
