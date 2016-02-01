// How Hash tables Work

var obj = {}

obj['x'] = 10 // Setting a key/value pair is amortized constant
obj['x']      //=> 10; Looking up the value for a key is constant


// Hash functions
//  - Always output the same value for a specific key
//  - Ideally uniformly distributed output
//  - (Sometimes) output for a specific key is unique across all keys
