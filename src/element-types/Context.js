import React, { Component } from 'react';
import { UserInfo } from './deps/UserInfo'
export const ContextExample = React.createContext({name: 'xiaohesong'});

class ContextDemo extends Component {
  render() {
    return(
      <ContextExample.Provider value='youzan'>
        <UserInfo />
      </ContextExample.Provider>
    )
  }
}

const contextDemo1 = <ContextDemo />
const contextDemo2 = <ContextExample.Provider value='youzan'>
  <UserInfo />
</ContextExample.Provider>
const contextDemo3 = <ContextExample.Consumer>
  {
    value => <span>value is {value}</span>
  }
</ContextExample.Consumer>

console.log(
  // 'contextDemo1 is(normal)',
  // contextDemo1,
  '\ncontext(provider): ',
  contextDemo2,
  // $$typeof: Symbol(react.element)
  // type: {$$typeof: Symbol(react.provider), _context: {…}}
  // key: null
  // ref: null
  // props: {value: "youzan", children: {…}}
  // _owner: null
  // _store: {validated: false}
  // _self: null
  // _source: {fileName: "/Users/xiaohesong/workspace/react/example/react-element-type/src/element-types/Context.js", lineNumber: 15}
  // __proto__: Object
  '\ncontext(context): ',
  contextDemo3
  // $$typeof: Symbol(react.element)
  // type: {$$typeof: Symbol(react.context), _context: {…}, _calculateChangedBits: null, …}
  // key: null
  // ref: null
  // props: {children: ƒ}
  // _owner: null
  // _store: {validated: false}
  // _self: null
  // _source: {fileName: "/Users/xiaohesong/workspace/react/example/react-element-type/src/element-types/Context.js", lineNumber: 19}
  // __proto__: Object

);


export default ContextDemo