//flattens nested array in to a single- level array(depth can be specified)

const nested = [1,[2,[3]]];

const flat1 = nested.flat();//level 1
console.log(flat1);

const flat2 = nested.flat(2);
console.log(flat2);


// const nested = [1,2,[3,4,[5,6,[7]]]]


// const flat3 = nested.flat(3);
// console.log(flat3);
