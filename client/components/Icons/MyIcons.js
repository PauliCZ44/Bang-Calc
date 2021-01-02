import React from 'react'

const IconAddPerson = ({ width, height, color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width || 16} height={height || 16} fill={color || 'currentColor'} className="bi bi-person-plus-fill" viewBox="0 0 16 16">
    <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
    <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
  </svg>
)
// width={width || 16} height={height || 16} fill={color || 'currentColor'}
const IconRemovePerson = ({ width, height, color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width || 16} height={height || 16} fill={color || 'currentColor'} className="bi bi-person-dash-fill" viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M11 7.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z" />
    <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
  </svg>
)

const IconPlus = ({ width, height, color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width || 16} height={height || 16} fill={color || 'currentColor'} className="bi bi-plus-circle" viewBox="0 0 16 16">
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
  </svg>
)

const IconMinus = ({ width, height, color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width || 16} height={height || 16} fill={color || 'currentColor'} className="bi bi-dash-circle" viewBox="0 0 16 16">
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
  </svg>
)


export {
  IconRemovePerson, IconAddPerson, IconMinus, IconPlus,
}
