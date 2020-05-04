import React from 'react';

const Memo = React.memo(() => {
  return(
    <div>memo2 for func style</div>
  )
})

const memo1 = <Memo />

console.log('memo: ', memo1)
// $$typeof: Symbol(react.element)
// type: {$$typeof: Symbol(react.memo), compare: null, type: ƒ}
// key: null
// ref: null
// props: {}
// _owner: null
// _store: {validated: false}
// _self: null
// _source: {fileName: "/Users/xiaohesong/workspace/react/example/react-element-type/src/element-types/Memo.js", lineNumber: 9}
// __proto__: Object
console.log(
  // 'memo1 type is', 
  // memo1.type, 
  // $$typeof: Symbol(react.memo)
  // type: () => {…}
  // compare: null
  // __proto__: Object
  // 'memo1 $$typeof is', 
  // memo1.type.$$typeof
  // $$typeof: Symbol(react.memo)
)

export default Memo