const nums = [1,2,3]
const initialState = 0

function reducer (state, value) {
    return state + value
}

const total = nums.reduce(reducer, initialState)

console.log(total);