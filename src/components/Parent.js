import React, { useState } from "react";
import Login from "./Login";
import Home from "./Home";

function Parent() {
  const [loginVisbile, setLoginVisbile] = useState(true);
  const [homeVisbile, setHomeVisbile] = useState(false);

  return (
    <div className="parentContainer w-full">
      {loginVisbile && (
        <Login
          setHomeVisbile={setHomeVisbile}
          setLoginVisbile={setLoginVisbile}
        />
      )}
      {homeVisbile && (
        <Home
          setHomeVisbile={setHomeVisbile}
          setLoginVisbile={setLoginVisbile}
        />
      )}
    </div>
  );
}

export default Parent;
