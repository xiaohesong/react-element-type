import React from 'react';
import Memo from './Memo'

const ForwardRef = React.forwardRef((props, ref) => {
  return (
    <Memo />
  )
})

const forwardRef = <ForwardRef />

export default ForwardRef

console.log('forwardRef is', forwardRef)
// $$typeof: Symbol(react.element)
// type:
//  $$typeof: Symbol(react.forward_ref)
//  render: (props, ref) => {…}
// arguments: (...)
// caller: (...)
// length: 2
// name: ""
// __proto__: ƒ ()
// [[FunctionLocation]]: ForwardRef.js:3
// [[Scopes]]: Scopes[2]
// __proto__: Object
// key: null
// ref: null
// props: {}

// console.log(forwardRef.type.$$typeof)
// Symbol(react.forward_ref)