// import { useState, useEffect } from "react";

import "./App.css";
import UserContext from "./context/User";
import { GetUser } from "./hooks/Twitter";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import * as ROUTES from "./constants/routes"

const Main = lazy(() => import("./Main"));
// const Login = lazy(() => import("./login"));
const CreateNFT = lazy(() => import("./CreateNFT"));
// const notfound = lazy(() => import("./pages/not-found"));

function App() {

  const user = GetUser(); 
  

  return (
    <UserContext.Provider value={user}>
      <div className="">
        <Router>
          <Suspense fallback={<p>Loading...</p>}>
            <Routes>
              
              <Route path={ROUTES.LOGIN} element={<div>Login</div>} />
              <Route path={ROUTES.HOME} element={<Main />} />
              <Route path='/nft/:id' element={<CreateNFT />} />
          
            </Routes>
          </Suspense>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
