import React from 'react';

class FragmentDemo1 extends React.Component {
  render() {
    return(
      <React.Fragment>
        sss
      </React.Fragment>
    )
  }
}

const fragmentDemo1 = <FragmentDemo1 />
const fragmentDemo2 = <React.Fragment>qwe</React.Fragment>

console.log(
  'fragmentDemo1 is', 
  fragmentDemo1, 
  // $$typeof: Symbol(react.element)
  // type: class FragmentDemo1
  // key: null
  // ref: null
  // props: {}
  // _owner: null
  // _store: {validated: false}
  // _self: null
  // _source: {fileName: "/Users/xiaohesong/workspace/react/example/react-element-type/src/element-types/Fragment.js", lineNumber: 13}
  // __proto__: Object
  'fragmentDemo1.type',
  FragmentDemo1.type, 
  // undefined
  'fragmentDemo2 is',
  fragmentDemo2
  // $$typeof: Symbol(react.element)
  // type: Symbol(react.fragment)
  // key: null
  // ref: null
  // props: {children: "qwe"}
  // _owner: null
  // _store: {validated: false}
  // _self: null
  // _source: {fileName: "/Users/xiaohesong/workspace/react/example/react-element-type/src/element-types/Fragment.js", lineNumber: 14}
  // __proto__: Object
)

export {
  FragmentDemo1
}