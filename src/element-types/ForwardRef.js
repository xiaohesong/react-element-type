import React from 'react';

const Memo = React.memo(() => {
  return(
    <div>memo2 for func style</div>
  )
})

const ForwardRef = React.forwardRef((props, ref) => <Memo />)

const forwardRef = <ForwardRef />

export default ForwardRef

console.log('forwardRef: ', forwardRef)
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