## react的元素类型检测

#### 基本属性

https://github.com/facebook/react/releases/tag/v16.12.0 里修复了元素类型(memo, lazy)的问题。

`react-is`里的类型判断：

https://github.com/facebook/react/blob/master/packages/react-is/src/ReactIs.js#L27-L60

```js
export function typeOf(object: any) {
  if (typeof object === 'object' && object !== null) {
    const $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        const type = object.type;

        switch (type) {
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
```

这些常量标识有做判断：

https://github.com/facebook/react/blob/master/packages/shared/ReactSymbols.js#L16-L61

```js
export let REACT_ELEMENT_TYPE = 0xeac7;
export let REACT_PORTAL_TYPE = 0xeaca;
export let REACT_FRAGMENT_TYPE = 0xeacb;
export let REACT_STRICT_MODE_TYPE = 0xeacc;
export let REACT_PROFILER_TYPE = 0xead2;
export let REACT_PROVIDER_TYPE = 0xeacd;
export let REACT_CONTEXT_TYPE = 0xeace;
export let REACT_FORWARD_REF_TYPE = 0xead0;
export let REACT_SUSPENSE_TYPE = 0xead1;
export let REACT_SUSPENSE_LIST_TYPE = 0xead8;
export let REACT_MEMO_TYPE = 0xead3;
export let REACT_LAZY_TYPE = 0xead4;
export let REACT_BLOCK_TYPE = 0xead9;
export let REACT_SERVER_BLOCK_TYPE = 0xeada;
export let REACT_FUNDAMENTAL_TYPE = 0xead5;
export let REACT_RESPONDER_TYPE = 0xead6;
export let REACT_SCOPE_TYPE = 0xead7;
export let REACT_OPAQUE_ID_TYPE = 0xeae0;
export let REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
export let REACT_OFFSCREEN_TYPE = 0xeae2;
export let REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  const symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_RESPONDER_TYPE = symbolFor('react.responder');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}
```

会优先使用symbol。

这两个结合在一起做类型检测，element作为一个对象，在jsx的时候就做了处理。

https://github.com/facebook/react/blob/master/packages/react/src/ReactElement.js#L146

这里在和解的时候会统一对element进行一个处理

```jsx
const ReactElement = function(type, key, ref, self, source, owner, props) {
   const element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,

    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,

    // Record the component responsible for creating this element.
    _owner: owner,
  };
  return element 
}

export function isValidElement(object) {
  return (
    typeof object === 'object' &&
    object !== null &&
    object.$$typeof === REACT_ELEMENT_TYPE
  );
}
```

`createFactory`, `createElement`, `jsx`这些都会调用ReactElement。

#### 没有这个属性会怎么样

`throwOnInvalidObjectType`有个报错。

https://reactjs.org/blog/2015/10/07/react-v0.14.html#notable-enhancements react0.14版本加入校验。



#### 最终起到的作用

还是为了安全考虑



































看个例子：

```jsx
const [value, setValue] = useState(null)
const handleClick = () => {
  const spanEle = <span>Hi,span</span>
  const spanObj = JSON.parse(JSON.stringify(spanEle))
  console.log('span is', spanEle, spanObj)
  setValue(spanEle) // 可以
  setTimeout(() => {
    setValue(spanObj) // 不行
  }, 100)
  setTimeout(() => {
    spanObj.$$typeof = '0xeac7'
    setValue(spanObj) // 不行
  }, 200)
  setTimeout(() => {
    spanObj.$$typeof = Symbol.for('react.element')
    setValue(spanObj) // 可以
  }, 300)
  
}
return(
 <>
 	{value}
  <button onClick={handleClick}>点击</button>
 </>
)
```

