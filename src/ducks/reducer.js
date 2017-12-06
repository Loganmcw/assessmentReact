import axios from 'axios';
import chimp from '../Photos/chimp.jpg'
import piggy from '../Photos/piggy.jpg'
import shiba from '../Photos/shiba.jpeg'

const initialState = {
    currentAnimalList: [{ name: "monkey", image: chimp, details: "Hairy Chimpanzee", stock: 1 }, { name: "piggy", image: piggy, details: "Piggy With Boots", stock: 2 }, { name: "shiba", image: shiba, details: "Cute BeBe Shiba", stock: 3 }]
}

const
    ADD_ANIMAL = "ADD_ANIMAL";

export function addAnimal(animalObj) {
    return {
        type: ADD_ANIMAL,
        payload: animalObj
    }
}


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ANIMAL:
            return Object.assign({}, state, { currentAnimalList: this.state.currentAnimalList.push(action.payload) })
        default:
            return state;
    }
}