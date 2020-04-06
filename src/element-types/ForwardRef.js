import React from 'react';
import {Memo1} from './Memo'

const Ff = React.forwardRef((props, ref) => {
  return (
    Memo1
  )
})

const f = <Ff />

export {
  Ff
}

console.log('f is', f)
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