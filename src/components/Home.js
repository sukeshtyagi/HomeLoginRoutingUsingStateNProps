import React from "react";

function Home({ setHomeVisbile, setLoginVisbile }) {
  return (
    <div className="homeContainer box-border w-3/5 mx-auto my-6 py-[1px] rounded-xl bg-red-500">
      <div className="navbar box-border my-1 p-1 w-2/3 mx-auto text-xl text-white rounded-xl bg-purple-500 flex justify-evenly items-center">
        <p
          className="home box-border my-1 px-4 border border-gray-50 rounded cursor-pointer hover:outline hover:outline-offset-4 hover:outline-2 hover:outline-emerald-900"
          
        >
          Home
        </p>
        <p
          className="home box-border my-1 px-4 border border-gray-50 rounded cursor-pointer hover:outline hover:outline-offset-4 hover:outline-2 hover:outline-emerald-900"
          onClick={() => {
            setHomeVisbile(false);
            setLoginVisbile(true);
          }}
        >
          Sign Out
        </p>
      </div>
    </div>
  );
}

export default Home;
