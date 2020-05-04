import React from 'react';
import './App.css';

const Components = [
  {value: 'react.element', id: 'Basic'},
  {value: 'react.(context&provider)', id: 'Context'},
  {value: 'react.forward_ref', id: 'ForwardRef'},
  {value: 'react.fragment', id: 'Fragment'},
  {value: 'react.memo', id: 'Memo'},
  {value: 'react.portal', id: 'Portal'},
  {value: 'react.profiler', id: 'Profiler'},
  {value: 'react.strict_model', id: 'StrictModel'},
  {value: 'react.(suspense&lazy)', id: 'Suspense'}
]

function App() {
  const [renderer, setRenderer] = React.useState('react.element')
  const [valueT, setValueT] = React.useState('{"$$typeof":"0xeac7","key":null,"type":"span","props":{"children":"Hi"},"ref":null}')
  const selected = Components.find(item => item.value === renderer)
  const Component = React.lazy(() => import(`./element-types/${selected.id}`))
  const options = Components.map((item, i) => {
    return(
      <option value={item.value} key={i}>{item.value}</option>
    )
  })

  const handleChange = e => setRenderer(e.target.value)

  const handleValueChannge = e => {
    setValueT(e.target.value)
  }

  const tValue = JSON.parse(valueT)
  // tValue.$$typeof = Symbol.for('react.element')
  return (
    <div className="App" id='app'>
      <select value={renderer} onChange={handleChange}>
        {options}
      </select>
      <React.Suspense fallback={<div>loading...</div>}>
        <Component />
      </React.Suspense>
      {/* <p></p>
      <textarea value={valueT} style={{width: 240, height: 60}} onChange={handleValueChannge}/>
      <p></p>
      {tValue} */}
    </div>
  );
}

export default App;
