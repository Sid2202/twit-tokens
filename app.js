const express = require('express')
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const port = 5000
require('dotenv').config();
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }

  var cors = require('cors');
  app.use(cors());
  
const needle = require('needle');
const { default: axios } = require('axios');


username = "Sidhanti22";

const bearerToken = process.env.BEARER_TOKEN;
const user_url = `https://api.twitter.com/2/users/by/username/${username}?user.fields=profile_image_url`


const options = {
    headers: {
        "User-Agent": "v2UserTweetsJS",
        "authorization": `Bearer ${bearerToken}`
    }
}


const getUser = async() =>{
    const resp = await needle('get', user_url, options);
    app.get('/user', (req, res) => {
        res.send(resp.body.data);
      })
      
    userId =resp.body.data.id;
    const url = `https://api.twitter.com/2/users/${userId}/tweets?max_results=100&exclude=replies,retweets`;

    const resp2 = await needle('get', url, options);
    app.get('/tweets', (req, res) => {
        res.send(resp2.body.data);
      })
}
getUser();



const data = {
  tweetId: "1498571096228261888"
}

const getPic = async()=>{
  await axios
  .post('https://tweetpik.com/api/images', data, {
    headers: {
      "Content-Type": "application/json",
      authorization: "4c92efd5-9451-4f98-a22a-b8a58dbe5a3f"
    },
    options: {
      "themeId": "teal",
      "dimension": "9:16",
      "displayLikes": "true",
      "displayRetweets": "true",
      "displayReplies": "true"
    }
  })
  .then((data)=>{
    // console.log(data)
  });
  // app.get('/imageurl', (req,res)=>{
  //   // console.log(res);
  // })
const url =`https://ik.imagekit.io/tweetpik/327667378021204561/${data.tweetId}.png`;
  app.get('/imageurl', (req,res)=>{
    res.send(url);
    // console.log(res)
    console.log(req.body);
  })


}

getPic();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  
});
