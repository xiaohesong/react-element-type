import React from 'react';

class StrictModel1 extends React.Component  {
  rende() {
    return(
      <div>
        Hi, I'a a strict render model
      </div>
    )
  }
}

const StrictModel2 = () => {
  const [state] = React.useState('啊')
  return <span>无情{state}</span>
}

const strictModel1 = <React.StrictMode><StrictModel1/></React.StrictMode>
const strictModel2 = <React.StrictModel><StrictModel2/></React.StrictModel>

console.log(
  'strict model1 is(strict model)',
  strictModel1,
  // $$typeof: Symbol(react.element)
  // type: Symbol(react.strict_mode)
  // key: null
  // ref: null
  // props: {children: {…}}
  // _owner: null
  // _store: {validated: false}
  // _self: null
  // _source: {fileName: "/Users/xiaohesong/workspace/react/example/react-element-type/src/element-types/StrictModel.js", lineNumber: 18}
  // __proto__: Object

  '\nstrict model2 is(normal)',
  strictModel2
  // $$typeof: Symbol(react.element)
  // type: undefined
  // key: null
  // ref: null
  // props: {children: {…}}
  // _owner: null
  // _store: {validated: false}
  // _self: null
  // _source: {fileName: "/Users/xiaohesong/workspace/react/example/react-element-type/src/element-types/StrictModel.js", lineNumber: 19}
  // __proto__: Object
)

// 注意：这个只针对class component进行strict model处理，其他的(函数及hooks，元素)都不行
// 不确定是否是一个bug

export {
  StrictModel1
}