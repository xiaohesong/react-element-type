import React from 'react';
import ReactDOM from 'react-dom'

const div = document.createElement('div');
const PortalElement = () => <span>Hi，i'm portaled</span>

class Portal extends React.Component {
  render() {
    return (
      ReactDOM.createPortal(
        <PortalElement />,
        div
      )
    )
  }
}

const portal1 = <Portal />
const portal2 = ReactDOM.createPortal(
  <PortalElement />,
  div
)

console.log(
  'portal1 is(normal)',
  portal1,
  '\nportal2 is(portal)',
  portal2
  // $$typeof: Symbol(react.portal)
  // key: null
  // children: {$$typeof: Symbol(react.element), key: null, ref: null, props: {…}, type: ƒ, …}
  // containerInfo: div
  // implementation: null
  // __proto__: Object
);


export default Portal