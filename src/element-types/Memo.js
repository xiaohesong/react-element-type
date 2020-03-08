import React from 'react';

const Memo1 = () => {
  return(
    <div>memo1 for func style</div>
  )
}

const Memo2 = React.memo(() => {
  return(
    <div>memo2 for func style</div>
  )
})

const memo1 = <Memo1 />
const memo2 = <Memo2 />

console.log('memo1 is', memo1, 'memo2 is', memo2)
console.log('memo1 $$typeof is', memo1.type.$$typeof, 'memo2 $$typeof is', memo2.type.$$typeof)

export {
  Memo1,
  Memo2
}