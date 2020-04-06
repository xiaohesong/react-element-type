import React from 'react';

class Profiler extends React.Component {
  render() {
    return(
      <React.Profiler>
        Hi, I'm a Profiler
      </React.Profiler>
    )
  }
}

const profiler1 = <Profiler />
const profiler2 = <React.Profiler>Hi, I'm a profiler</React.Profiler>

console.log(
  'profiler1 is(normal)', 
  profiler1,
  '\nprofiler2 is(profiler)',
  profiler2
);


export {
  Profiler
}