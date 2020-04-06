import React from 'react';

import {Basic1, Basic2} from './element-types/Basic'
import {Memo1} from './element-types/Memo'
import {Ff} from './element-types/ForwardRef';
import {FragmentDemo1} from './element-types/Fragment'
import { StrictModel1 } from "./element-types/StrictModel";
import { SuspneseDemo1 } from './element-types/Suspense'
import { ContextExample } from "./element-types/Context";
import { Profiler } from './element-types/Profiler'
import { Portal } from './element-types/Portal'

import './App.css';

function App() {
  return (
    <div className="App" id='app'>
      <pre>
        {
          `
          function typeOf(object: any) {
            if (typeof object === 'object' && object !== null) {
              const $$typeof = object.$$typeof;
              switch ($$typeof) {
                case REACT_ELEMENT_TYPE:
                  const type = object.type;
          
                  switch (type) {
                    case REACT_ASYNC_MODE_TYPE:
                    case REACT_CONCURRENT_MODE_TYPE:
                    case REACT_FRAGMENT_TYPE:
                    case REACT_PROFILER_TYPE:
                    case REACT_STRICT_MODE_TYPE:
                    case REACT_SUSPENSE_TYPE:
                      return type;
                    default:
                      const $$typeofType = type && type.$$typeof;
          
                      switch ($$typeofType) {
                        case REACT_CONTEXT_TYPE:
                        case REACT_FORWARD_REF_TYPE:
                        case REACT_LAZY_TYPE:
                        case REACT_MEMO_TYPE:
                        case REACT_PROVIDER_TYPE:
                          return $$typeofType;
                        default:
                          return $$typeof;
                      }
                  }
                case REACT_PORTAL_TYPE:
                  return $$typeof;
              }
            }
          
            return undefined;
          }
          `
        }
      </pre>
    </div>
  );
}

export default App;
