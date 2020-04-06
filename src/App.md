`react-is`源码里有下面一段代码：

```js
export function typeOf(object: any) {
  if (typeof object === 'object' && object !== null) {
    const $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        const type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE: // done
          case REACT_PROFILER_TYPE: // done
          case REACT_STRICT_MODE_TYPE: // done
          case REACT_SUSPENSE_TYPE: // done
            return type;
          default:
            const $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE: // done
              case REACT_FORWARD_REF_TYPE: // done
              case REACT_LAZY_TYPE: // done
              case REACT_MEMO_TYPE: // done
              case REACT_PROVIDER_TYPE: // done
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_PORTAL_TYPE: // done
        return $$typeof;
    }
  }

  return undefined;
}
```

发现目前为止的最新版是把`async model`和`concurrent`这两个类型给去除了。

[react-is/src/ReactIs](https://github.com/facebook/react/blob/master/packages/react-is/src/ReactIs.js#L34)

其实我本地看的这个版本的react仓库里，对于这些symbol也有意要取消：

```js
// TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?
```