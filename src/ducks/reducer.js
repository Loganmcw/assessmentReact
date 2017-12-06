import axios from 'axios';
import chimp from '../Photos/chimp.jpg'
import piggy from '../Photos/piggy.jpg'
import shiba from '../Photos/shiba.jpeg'

const initialState = {
    currentAnimalList: [{ name: "monkey", image: chimp, details: "Hairy Chimpanzee", stock: 1 }, { name: "piggy", image: piggy, details: "Piggy With Boots", stock: 2 }, { name: "shiba", image: shiba, details: "Cute BeBe Shiba", stock: 3 }],
    currentAnimalDisplay: []
}

const
    ADD_ANIMAL = "ADD_ANIMAL",
    CURRENT_ANIMAL = "CURRENT_ANIMAL";

export function addAnimal(animalObj) {
    console.log("Hit Redux animals", initialState.currentAnimalList)
    return {
        type: ADD_ANIMAL,
        payload: animalObj
    }
}

export function currentAnimal(animalObj) {
    console.log("obj", animalObj)
    console.log("Hit Redux animal", initialState.currentAnimalDisplay)
    return {
        type: CURRENT_ANIMAL,
        payload: animalObj
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ANIMAL:
            return Object.assign({}, state, { currentAnimalList: action.payload })
        case CURRENT_ANIMAL:
            console.log("Hit Case", action.payload)
            return Object.assign({}, state, { currentAnimalDisplay: action.payload })
        default:
            return state;
    }
}