import axios from 'axios';
import { TwitterApi } from 'twitter-api-v2';
const CONSUMER_KEY = "qin6xi5hBUqxMJ48f8up6VxTy";
const CONSUMER_SECRET = "7OcrHkuPwsC69Os3SsyxYZ6lzKxopUttSuQvfIvaGR8WdqWimv";
const CALLBACK_URL="https://localhost:3000";

async function login() {

    const log = (e) => {
        
        axios.get('/callback')
    }
    

  return (
    <div>
        <button type='button' onClick={(event) => log}>
            Login
        </button>
    </div>
  )
}

export default login