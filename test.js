const myArr = ['','hello','world']

const myNewArr = myArr.map((item, idx) => {
    return [item, idx]
})

console.log(myNewArr);