import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;
    console.log(name, email, password, accepted);

    if (password.length < 6) {
      setRegisterError("Password should be at least 6 characters or longer");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError(
        "Your password should have at least one upercase characters."
      );
      return;
    } else if (!accepted) {
      setRegisterError("Please accept our terms and condition!");
      return;
    }

    //reset error and success
    setRegisterError("");
    setSuccess("");

    //create user
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("user created successfully.");

        //update profile
        updateProfile(result.user, {
          displayName: name,
          photoURL: "https://example.com/jane-q-user/profile.jpg",
        })
          .then(() => console.log("profile updatetd"))
          .catch();

        // send verification email
        sendEmailVerification(result, user).then(() => {
          alert("Please check your email and verify your account");
        });
      })
      .catch((error) => {
        console.error(error);
        setRegisterError(error.message);
      });
  };

  return (
    <div className="border bg-base-300 min-h-screen">
      <div className="mx-auto md:w-1/2">
        <h3 className="text-3xl mb-8">Please Register</h3>
        <form onSubmit={handleRegister}>
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            className="mb-4 w-full rounded-lg bg-gray-300 py-2 px-4"
            type="text"
            name="name"
            placeholder="Your Name"
            id=""
            required
          />

          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            className="mb-4 w-full rounded-lg bg-gray-300 py-2 px-4"
            type="email"
            name="email"
            placeholder="Email Address"
            id=""
            required
          />

          <br />
          <div className="relative mb-4 border">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              className="w-full bg-gray-300 rounded-lg py-2 px-4"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              id=""
              required
            />
            <span
              className="absolute top-3 right-2"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </span>
          </div>
          <br />
          <div className="mb-2">
            <input type="checkbox" name="terms" id="terms" />
            <label className="ml-2" htmlFor="terms">
              Accept our <a href="">Terms and Conditions</a>
            </label>
          </div>
          <br />
          <input
            className="mb-4 w-full btn btn-secondary"
            type="submit"
            value="Register"
          />
        </form>
        {registerError && <p className="text-red-600">{registerError}</p>}
        {success && <p className="text-green-500">{success}</p>}

        <p>
          Already have an account? Please{" "}
          <Link className="text-green-400 font-bold" to={"/login"}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
