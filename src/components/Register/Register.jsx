import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";

const Register = () => {

const [registerError, setRegisterError]=useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    //create user
    createUserWithEmailAndPassword(auth, email, password)
    .then(result => {
      console.log(result.user)
    })
    .catch(error =>{
      console.error(error)
    })
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
            id=""
          />
          <br />
          <input
            className="mb-4 w-3/4 bg-gray-300 rounded-lg py-2 px-4"
            type="password"
            name="password"
            placeholder="Password"
            id=""
          />
          <br />
          <input
            className="mb-4 w-3/4 btn btn-secondary"
            type="submit"
            value="Register"
          />
        </form>
      </div>
    </div>
  );
};

export default Register;
