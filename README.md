https://github.com/facebook/react/blob/master/packages/react/src/ReactElement.js#L146

这里在和解的时候会统一对element进行一个封装返回 

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

`createFactory`, `createElement`, `jsx`这些都会调用。

为啥会优先使用sybmol？

上面就可以验证了，等等，如果我手动在对象里插入一个字符串($$typeof: 0xeac7)，react如何辨别？

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

报错在`throwOnInvalidObjectType`这个方法抛出来。
