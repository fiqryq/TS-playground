const findLast = <T>(arrays: T[]): T => {
    return arrays[arrays.length - 1]
}
const last = findLast([1, 2, 3]) // 3
const last2 = findLast<string>(['one', 'two', 'three']) // three


const makeArrays = <X, Y>(x: X, y: Y): [X, Y] => {
    return [x, y]
}
const arrayOne = makeArrays(1, 2) // [1,2]
const arrayTwo = makeArrays('one', 'two') // ['one','two']
const arrayThree = makeArrays<string, number>('one', 2) // ['one',2]


