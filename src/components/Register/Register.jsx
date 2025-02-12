const Register = () => {
  return (
    <div className="border">
      <div className="mx-auto md:w-1/2">
        <h3 className="text-3xl mb-8">Please Register</h3>
        <form>
          <input className="mb-4 w-3/4 rounded-lg bg-gray-300 py-2 px-4" type="email" name="email" id="" />
          <br />
          <input className="mb-4 w-3/4 bg-gray-300 rounded-lg py-2 px-4" type="password" name="password" id="" />
          <br />
          <input className="mb-4 w-3/4 btn btn-secondary" type="submit" value="Register" />
        </form>
      </div>
    </div>
  );
};

export default Register;
