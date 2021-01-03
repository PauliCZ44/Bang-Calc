import React from 'react'


// https://masteringjs.io/tutorials/fundamentals/compare-arrays
const arrayEquals = (a, b) => Array.isArray(a)
    && Array.isArray(b)
    && a.length === b.length
    && a.every((val, index) => val === b[index])


// https://www.joshwcomeau.com/react/persisting-react-state-in-localstorage/
function useStickyState(defaultValue, key) {
  const [value, setValue] = React.useState(() => {
    const stickyValue = window.localStorage.getItem(key)
    return stickyValue !== null
      ? JSON.parse(stickyValue)
      : defaultValue
  })
  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])
  return [value, setValue]
}

export {
  arrayEquals,
  useStickyState,
}
