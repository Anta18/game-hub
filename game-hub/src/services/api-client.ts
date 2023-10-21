import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '59f9c5bff0c549b89326a57264decc98'
    }
}

)