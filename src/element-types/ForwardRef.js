import React from 'react';
import {Memo2} from './Memo'

const Ff = React.forwardRef((props, ref) => {
  return (
    Memo2
  )
})

const f = <Ff />

export {
  Ff
}

console.log(f)
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

console.log(f.type.$$typeof)
// Symbol(react.forward_ref)