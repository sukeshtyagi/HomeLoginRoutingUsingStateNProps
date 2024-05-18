import React, { useEffect, useState } from "react";

function Login({ setHomeVisbile, setLoginVisbile }) {
  const [details, setDetails] = useState({ name: "", email: "" });
  useEffect(() => {
    return () => {
      console.log(details);
    };
  }, []);
  return (
    <div className="loginContainer box-border w-3/5 mx-auto my-6 p-1 pl-10 text-white rounded-xl bg-red-500 flex flex-col items-start justify-center gap-6">
      <button
        className="btnHome box-border w-fit mt-6 px-4 text-blue-300 hover:text-white font-medium text-2xl hover:outline hover:outline-offset-2 hover:outline-2 cursor-pointer hover:bg-green-900"
        onClick={() => {
          setHomeVisbile(true);
          setLoginVisbile(false);
        }}
      >
        Home
      </button>
      <div className="formContainer box-border w-full px-4 flex flex-col gap-4">
        <div className="formElement box-border w-3/5 mx-auto flex justify-start items-center gap-6">
          <label className="box-border text-2xl p-1">Name</label>

          <input
            type="text"
            className="box-border w-full rounded outline-none text-black py-[1px] pl-4"
            value={details.name}
            onChange={(e) => {
              setDetails((details) => ({
                ...details,
                name: e.target.value,
              }));
            }}
          />
        </div>

        <div className="formElement box-border w-3/5 mx-auto flex justify-start items-center gap-6">
          <label className="box-border text-2xl p-1">Email</label>
          <input
            type="text"
            className="box-border w-full mx-1 rounded outline-none text-black py-[1px] pl-4"
            value={details.name}
            onChange={(e) => {
              setDetails((details) => ({
                ...details,
                email: e.target.value,
              }));
            }}
          />
        </div>
        <button
          className="submitButton box-border w-1/5 mx-auto mb-6 text-2xl font-medium text-blue-300 hover:text-white font-medium text-2xl hover:outline hover:outline-offset-2 hover:outline-2 cursor-pointer hover:bg-green-900"
          onClick={() => {
            setHomeVisbile(true);
            setLoginVisbile(false);
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Login;
