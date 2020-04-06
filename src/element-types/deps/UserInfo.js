import React from 'react';
import { ContextExample } from "../Context";

class UserInfo extends React.Component {
  render() {
    return(
      <ContextExample.Consumer>
        {
          value => {
            console.log('user info value is', value)
            return <span>Hi, my name is {value}</span>
          }
        }
      </ContextExample.Consumer>
    )
  }
}

const userInfo1 = <UserInfo />

console.log(
  'Consumer userInfo1 is',
  userInfo1,
  // $$typeof: Symbol(react.element)
  // type: class UserInfo
  // key: null
  // ref: null
  // props: {}
  // _owner: null
  // _store: {validated: false}
  // _self: null
  // _source: {fileName: "/Users/xiaohesong/workspace/react/example/react-element-type/src/element-types/deps/UserInfo.js", lineNumber: 19}
  // __proto__: Objectz
)


// 没有对应provider的consumer类型, 其实就是context

export {
  UserInfo
}