import axios from 'axios';
import chimp from '../../Photos/chimp.jpg'
import piggy from '../../Photos/piggy.jpg'
import shiba from '../../Photos/shiba.jpg'

const initialState = {
    user: '',
    currentAnimalList: [{ name: "monkey", image: chimp, details: "Hairy Chimpanzee", stock: 1 }, { name: "piggy", image: piggy, details: "Piggy With Boots", stock: 2 }, { name: "shiba", image: shiba, details: "Cute BeBe Shiba", stock: 3 }]
}

const GET_USER_INFO = "GET_USER_INFO"

export function getUserInfo() {
    const userData = axios.get("/auth/me").then(res => {
        console.log(res);
        return res.data;
    });
    return {
        type: GET_USER_INFO,
        payload: userData
    };
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_INFO + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload })
        default:
            return state;
    }
}