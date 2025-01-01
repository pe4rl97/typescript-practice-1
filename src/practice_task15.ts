// use of generics
function createPairs<S, T>(key: S, value: T) : [S, T] {
    return [key, value];
}

console.log(createPairs<string, number>("Bob", 30000));
console.log(createPairs<string, boolean>("isFalse", false));