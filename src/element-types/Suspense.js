import React, { Component, Suspense, lazy } from 'react';



const Splited = lazy(() => import('./deps/SplittingDemo'))


class SuspenseDemo extends Component {
  render() {
    return(
      <Suspense fallback={<div>loading...</div>}>
        <Splited />
      </Suspense>
    )
  }
}

const suspense1 = <Suspense><SuspenseDemo /></Suspense>
const suspense2 = <Splited />

console.log(
  'suspense1 demo is（suspense）', 
  suspense1,
  // $$typeof: Symbol(react.element)
  // type: Symbol(react.suspense)
  // key: null
  // ref: null
  // props: {children: {…}}
  // _owner: null
  // _store: {validated: false}
  // _self: null
  // _source: {fileName: "/Users/xiaohesong/workspace/react/example/react-element-type/src/element-types/Suspense.js", lineNumber: 18}
  // __proto__: Object

  '\nsuspense2 demo is（lazy）',
  suspense2
  // $$typeof: Symbol(react.element)
  // type: {$$typeof: Symbol(react.lazy), _status: -1, _result: null, _ctor: ƒ, …}
  // key: null
  // ref: null
  // props: {}
  // _owner: null
  // _store: {validated: false}
  // _self: null
  // _source: {fileName: "/Users/xiaohesong/workspace/react/example/react-element-type/src/element-types/Suspense.js", lineNumber: 19}
  // __proto__: Object
)

export default SuspenseDemo