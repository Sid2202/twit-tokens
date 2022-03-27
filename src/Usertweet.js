import React, { createRef, useContext, useEffect, useState } from "react";
import axios from "axios";
import UserContext from "./context/User";
import CreateNFT from "./CreateNFT";
import { Link } from "react-router-dom";


function Usertweet() {
  const [tweets, setTweets] = useState([]);
  const user = useContext(UserContext);
  const ref = createRef(null)
  
  

  useEffect(() => {
    async function getTweets() {
      await axios.get("/tweets").then((response) => {
        console.log(response.data);
        setTweets(response.data);
      });
    }
    getTweets();
  }, []);

  console.log(user);
  return (
    <div className="flex" ref={ref}>
      <div className="flex flex-col p-10">
        <p className="text-2xl font-thin mb-2 p-2">Your tweets:</p>
        <div className="p-4 m-4 grid grid-cols-3 gap-6">
          {tweets.map((tweet) => (
            // <Router>

            <Link to={`/nft/${tweet.id}`}
              key={tweet.id}
              className="p-3 bg-white text-gray-900 hover:shadow-sm hover:bg-blue-100"
            >
              <div className="flex">
                <img
                  src={user.profile_image_url}
                  alt="profile"
                  className="m-3 w-10 h-10 rounded-full object-cover"
                />
                <div className="p-2 flex flex-col">
                  <span className="font-semibold text-left">{user.name}</span>
                  <span className="font-sm text-gray-400">
                    @{user.username}
                    {/* @username */}
                  </span>
                </div>
              </div>
              <span className="m-2 flex-1 text-center text-md">
                {tweet.text}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Usertweet;
