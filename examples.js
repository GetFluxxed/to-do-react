// primitive types
'hello'
1
2
3
true
// two strings are made

const stringOne = 'hello'
const stringTwo = stringOne + '' + 'world'

// references do not have copies 
{ }
[]
// .map()

const arrayOne = [1, 2, 3, 4]
const arrayTwo = [...arrayOne]
arrayTwo.push('banana, taco')
console.log('arrayOne', arrayOne)
console.log('arrayTwo', arrayTwo)