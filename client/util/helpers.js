// https://masteringjs.io/tutorials/fundamentals/compare-arrays
const arrayEquals = (a, b) => Array.isArray(a)
    && Array.isArray(b)
    && a.length === b.length
    && a.every((val, index) => val === b[index])

export default arrayEquals
