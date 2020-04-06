import React from 'react';

const Basic = () => {
  return (
    <div>基础的组件-func</div>
  )
}

class Basic2 extends React.Component {
  render() {
    return (
      <div>基础的组件-class</div>
    )
  }
}

class Basic3 extends React.PureComponent {
  render() {
    return (
      <div>基础的组件-class-pure</div>
    )
  }
}

const basic1 = <Basic />
const basic2 = <Basic2 />
const basic3 = <Basic3 />

// 下面三个输出结果都是 Symbol(react.element)
console.log(
  'basic1 is', 
  basic1, 
  '\nbasic2 is', 
  basic2, 
  '\nbasic3 is', 
  basic3)

// export {
//   Basic
// }

export default Basic