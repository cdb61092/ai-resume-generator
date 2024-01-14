import {
  $18f2051aff69b9bf$export$43bb16f9c6d9e3f7,
  $2f04cbc44ee30ce0$export$53a0910f038337bd,
  $2f04cbc44ee30ce0$export$c826860796309d1b,
  $325a3faab7a68acd$export$a16aca283550c30d,
  $3ef42575df84b30b$export$9d1611c77c2fe928,
  $458b0a5536c1a7cf$export$40bfa8c7b0832715,
  $507fabe10e71c6fb$export$630ff653c5ada6a9,
  $62d8ded9296f3872$export$2bb74740c4e19def,
  $6a99195332edec8b$export$80f3e147d781571c,
  $7215afc6de606d6b$export$de79e2c695e052f3,
  $8a26561d2877236e$export$c24ed0104d07eab9,
  $9bf71ea28793e738$export$2d6ec8fc375ceafa,
  $c87311424ea30a05$export$9ac100e40613ea10,
  $c87311424ea30a05$export$e1865c3bedcd822b,
  $e9faafb641e167db$export$90fc3a17d93f704c,
  $ea8dcbcb9ea1b556$export$95185d699e05d4d7,
  $ea8dcbcb9ea1b556$export$9a302a45f65d0572,
  $f6c31cce2adf654f$export$45712eceda6fad21
} from "/build/_shared/chunk-XEG4DGED.js";
import {
  require_react_dom
} from "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/@react-stately/collections/dist/import.mjs
var import_react = __toESM(require_react(), 1);
function $c1d7fb2ec91bae71$var$Item(props) {
  return null;
}
$c1d7fb2ec91bae71$var$Item.getCollectionNode = function* getCollectionNode(props, context) {
  let { childItems, title, children } = props;
  let rendered = props.title || props.children;
  let textValue = props.textValue || (typeof rendered === "string" ? rendered : "") || props["aria-label"] || "";
  if (!textValue && !(context === null || context === void 0 ? void 0 : context.suppressTextValueWarning))
    console.warn("<Item> with non-plain text contents is unsupported by type to select for accessibility. Please add a `textValue` prop.");
  yield {
    type: "item",
    props,
    rendered,
    textValue,
    "aria-label": props["aria-label"],
    hasChildNodes: $c1d7fb2ec91bae71$var$hasChildItems(props),
    *childNodes() {
      if (childItems)
        for (let child of childItems)
          yield {
            type: "item",
            value: child
          };
      else if (title) {
        let items = [];
        (0, import_react.default).Children.forEach(children, (child) => {
          items.push({
            type: "item",
            element: child
          });
        });
        yield* items;
      }
    }
  };
};
function $c1d7fb2ec91bae71$var$hasChildItems(props) {
  if (props.hasChildItems != null)
    return props.hasChildItems;
  if (props.childItems)
    return true;
  if (props.title && (0, import_react.default).Children.count(props.children) > 0)
    return true;
  return false;
}
var $c1d7fb2ec91bae71$export$6d08773d2e66f8f2 = $c1d7fb2ec91bae71$var$Item;
function $9fc4852771d079eb$var$Section(props) {
  return null;
}
$9fc4852771d079eb$var$Section.getCollectionNode = function* getCollectionNode2(props) {
  let { children, title, items } = props;
  yield {
    type: "section",
    props,
    hasChildNodes: true,
    rendered: title,
    "aria-label": props["aria-label"],
    *childNodes() {
      if (typeof children === "function") {
        if (!items)
          throw new Error("props.children was a function but props.items is missing");
        for (let item of items)
          yield {
            type: "item",
            value: item,
            renderer: children
          };
      } else {
        let items2 = [];
        (0, import_react.default).Children.forEach(children, (child) => {
          items2.push({
            type: "item",
            element: child
          });
        });
        yield* items2;
      }
    }
  };
};
var $eb2240fc39a57fa5$export$bf788dd355e3a401 = class {
  build(props, context) {
    this.context = context;
    return $eb2240fc39a57fa5$var$iterable(() => this.iterateCollection(props));
  }
  *iterateCollection(props) {
    let { children, items } = props;
    if (typeof children === "function") {
      if (!items)
        throw new Error("props.children was a function but props.items is missing");
      for (let item of props.items)
        yield* this.getFullNode({
          value: item
        }, {
          renderer: children
        });
    } else {
      let items2 = [];
      (0, import_react.default).Children.forEach(children, (child) => {
        items2.push(child);
      });
      let index = 0;
      for (let item of items2) {
        let nodes = this.getFullNode({
          element: item,
          index
        }, {});
        for (let node of nodes) {
          index++;
          yield node;
        }
      }
    }
  }
  getKey(item, partialNode, state, parentKey) {
    if (item.key != null)
      return item.key;
    if (partialNode.type === "cell" && partialNode.key != null)
      return `${parentKey}${partialNode.key}`;
    let v = partialNode.value;
    if (v != null) {
      var _v_key;
      let key = (_v_key = v.key) !== null && _v_key !== void 0 ? _v_key : v.id;
      if (key == null)
        throw new Error("No key found for item");
      return key;
    }
    return parentKey ? `${parentKey}.${partialNode.index}` : `$.${partialNode.index}`;
  }
  getChildState(state, partialNode) {
    return {
      renderer: partialNode.renderer || state.renderer
    };
  }
  *getFullNode(partialNode, state, parentKey, parentNode) {
    let element = partialNode.element;
    if (!element && partialNode.value && state && state.renderer) {
      let cached = this.cache.get(partialNode.value);
      if (cached && (!cached.shouldInvalidate || !cached.shouldInvalidate(this.context))) {
        cached.index = partialNode.index;
        cached.parentKey = parentNode ? parentNode.key : null;
        yield cached;
        return;
      }
      element = state.renderer(partialNode.value);
    }
    if ((0, import_react.default).isValidElement(element)) {
      let type = element.type;
      if (typeof type !== "function" && typeof type.getCollectionNode !== "function") {
        let name = typeof element.type === "function" ? element.type.name : element.type;
        throw new Error(`Unknown element <${name}> in collection.`);
      }
      let childNodes = type.getCollectionNode(element.props, this.context);
      let index = partialNode.index;
      let result = childNodes.next();
      while (!result.done && result.value) {
        let childNode = result.value;
        partialNode.index = index;
        let nodeKey = childNode.key;
        if (!nodeKey)
          nodeKey = childNode.element ? null : this.getKey(element, partialNode, state, parentKey);
        let nodes = this.getFullNode({
          ...childNode,
          key: nodeKey,
          index,
          wrapper: $eb2240fc39a57fa5$var$compose(partialNode.wrapper, childNode.wrapper)
        }, this.getChildState(state, childNode), parentKey ? `${parentKey}${element.key}` : element.key, parentNode);
        let children = [
          ...nodes
        ];
        for (let node2 of children) {
          node2.value = childNode.value || partialNode.value;
          if (node2.value)
            this.cache.set(node2.value, node2);
          if (partialNode.type && node2.type !== partialNode.type)
            throw new Error(`Unsupported type <${$eb2240fc39a57fa5$var$capitalize(node2.type)}> in <${$eb2240fc39a57fa5$var$capitalize(parentNode.type)}>. Only <${$eb2240fc39a57fa5$var$capitalize(partialNode.type)}> is supported.`);
          index++;
          yield node2;
        }
        result = childNodes.next(children);
      }
      return;
    }
    if (partialNode.key == null)
      return;
    let builder = this;
    let node = {
      type: partialNode.type,
      props: partialNode.props,
      key: partialNode.key,
      parentKey: parentNode ? parentNode.key : null,
      value: partialNode.value,
      level: parentNode ? parentNode.level + 1 : 0,
      index: partialNode.index,
      rendered: partialNode.rendered,
      textValue: partialNode.textValue,
      "aria-label": partialNode["aria-label"],
      wrapper: partialNode.wrapper,
      shouldInvalidate: partialNode.shouldInvalidate,
      hasChildNodes: partialNode.hasChildNodes,
      childNodes: $eb2240fc39a57fa5$var$iterable(function* () {
        if (!partialNode.hasChildNodes)
          return;
        let index = 0;
        for (let child of partialNode.childNodes()) {
          if (child.key != null)
            child.key = `${node.key}${child.key}`;
          child.index = index;
          let nodes = builder.getFullNode(child, builder.getChildState(state, child), node.key, node);
          for (let node2 of nodes) {
            index++;
            yield node2;
          }
        }
      })
    };
    yield node;
  }
  constructor() {
    this.cache = /* @__PURE__ */ new WeakMap();
  }
};
function $eb2240fc39a57fa5$var$iterable(iterator) {
  let cache = [];
  let iterable = null;
  return {
    *[Symbol.iterator]() {
      for (let item of cache)
        yield item;
      if (!iterable)
        iterable = iterator();
      for (let item of iterable) {
        cache.push(item);
        yield item;
      }
    }
  };
}
function $eb2240fc39a57fa5$var$compose(outer, inner) {
  if (outer && inner)
    return (element) => outer(inner(element));
  if (outer)
    return outer;
  if (inner)
    return inner;
}
function $eb2240fc39a57fa5$var$capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}
function $7613b1592d41b092$export$6cd28814d92fa9c9(props, factory, context) {
  let builder = (0, import_react.useMemo)(() => new (0, $eb2240fc39a57fa5$export$bf788dd355e3a401)(), []);
  let { children, items, collection } = props;
  let result = (0, import_react.useMemo)(() => {
    if (collection)
      return collection;
    let nodes = builder.build({
      children,
      items
    }, context);
    return factory(nodes);
  }, [
    builder,
    children,
    items,
    collection,
    context,
    factory
  ]);
  return result;
}
function $c5a24bc478652b5f$export$1005530eda016c13(node, collection) {
  if (typeof collection.getChildren === "function")
    return collection.getChildren(node.key);
  return node.childNodes;
}
function $c5a24bc478652b5f$export$fbdeaa6a76694f71(iterable) {
  return $c5a24bc478652b5f$export$5f3398f8733f90e2(iterable, 0);
}
function $c5a24bc478652b5f$export$5f3398f8733f90e2(iterable, index) {
  if (index < 0)
    return void 0;
  let i = 0;
  for (let item of iterable) {
    if (i === index)
      return item;
    i++;
  }
}
function $c5a24bc478652b5f$export$7475b2c64539e4cf(iterable) {
  let lastItem = void 0;
  for (let value of iterable)
    lastItem = value;
  return lastItem;
}
function $c5a24bc478652b5f$export$8c434b3a7a4dad6(collection, a, b) {
  if (a.parentKey === b.parentKey)
    return a.index - b.index;
  let aAncestors = [
    ...$c5a24bc478652b5f$var$getAncestors(collection, a),
    a
  ];
  let bAncestors = [
    ...$c5a24bc478652b5f$var$getAncestors(collection, b),
    b
  ];
  let firstNonMatchingAncestor = aAncestors.slice(0, bAncestors.length).findIndex((a2, i) => a2 !== bAncestors[i]);
  if (firstNonMatchingAncestor !== -1) {
    a = aAncestors[firstNonMatchingAncestor];
    b = bAncestors[firstNonMatchingAncestor];
    return a.index - b.index;
  }
  if (aAncestors.findIndex((node) => node === b) >= 0)
    return 1;
  else if (bAncestors.findIndex((node) => node === a) >= 0)
    return -1;
  return -1;
}
function $c5a24bc478652b5f$var$getAncestors(collection, node) {
  let parents = [];
  while ((node === null || node === void 0 ? void 0 : node.parentKey) != null) {
    node = collection.getItem(node.parentKey);
    parents.unshift(node);
  }
  return parents;
}
var $453cc9f0df89c0a5$var$cache = /* @__PURE__ */ new WeakMap();
function $453cc9f0df89c0a5$export$77d5aafae4e095b2(collection) {
  let count = $453cc9f0df89c0a5$var$cache.get(collection);
  if (count != null)
    return count;
  count = 0;
  let countItems = (items) => {
    for (let item of items)
      if (item.type === "section")
        countItems((0, $c5a24bc478652b5f$export$1005530eda016c13)(item, collection));
      else
        count++;
  };
  countItems(collection);
  $453cc9f0df89c0a5$var$cache.set(collection, count);
  return count;
}

// node_modules/@react-aria/selection/dist/import.mjs
var import_react_dom = __toESM(require_react_dom(), 1);
var import_react2 = __toESM(require_react(), 1);
function $feb5ffebff200149$export$d3e3bd3e26688c04(e) {
  return (0, $c87311424ea30a05$export$e1865c3bedcd822b)() ? e.altKey : e.ctrlKey;
}
function $feb5ffebff200149$export$16792effe837dba3(e) {
  if ((0, $c87311424ea30a05$export$9ac100e40613ea10)())
    return e.metaKey;
  return e.ctrlKey;
}
var $fb3050f43d946246$var$TYPEAHEAD_DEBOUNCE_WAIT_MS = 1e3;
function $fb3050f43d946246$export$e32c88dfddc6e1d8(options) {
  let { keyboardDelegate, selectionManager, onTypeSelect } = options;
  let state = (0, import_react2.useRef)({
    search: "",
    timeout: null
  }).current;
  let onKeyDown = (e) => {
    let character = $fb3050f43d946246$var$getStringForKey(e.key);
    if (!character || e.ctrlKey || e.metaKey || !e.currentTarget.contains(e.target))
      return;
    if (character === " " && state.search.trim().length > 0) {
      e.preventDefault();
      if (!("continuePropagation" in e))
        e.stopPropagation();
    }
    state.search += character;
    let key = keyboardDelegate.getKeyForSearch(state.search, selectionManager.focusedKey);
    if (key == null)
      key = keyboardDelegate.getKeyForSearch(state.search);
    if (key != null) {
      selectionManager.setFocusedKey(key);
      if (onTypeSelect)
        onTypeSelect(key);
    }
    clearTimeout(state.timeout);
    state.timeout = setTimeout(() => {
      state.search = "";
    }, $fb3050f43d946246$var$TYPEAHEAD_DEBOUNCE_WAIT_MS);
  };
  return {
    typeSelectProps: {
      // Using a capturing listener to catch the keydown event before
      // other hooks in order to handle the Spacebar event.
      onKeyDownCapture: keyboardDelegate.getKeyForSearch ? onKeyDown : null
    }
  };
}
function $fb3050f43d946246$var$getStringForKey(key) {
  if (key.length === 1 || !/^[A-Z]/i.test(key))
    return key;
  return "";
}
function $ae20dd8cbca75726$export$d6daf82dcd84e87c(options) {
  let { selectionManager: manager, keyboardDelegate: delegate, ref, autoFocus = false, shouldFocusWrap = false, disallowEmptySelection = false, disallowSelectAll = false, selectOnFocus = manager.selectionBehavior === "replace", disallowTypeAhead = false, shouldUseVirtualFocus, allowsTabNavigation = false, isVirtualized, scrollRef = ref, linkBehavior = "action" } = options;
  let { direction } = (0, $18f2051aff69b9bf$export$43bb16f9c6d9e3f7)();
  let router = (0, $ea8dcbcb9ea1b556$export$9a302a45f65d0572)();
  let onKeyDown = (e) => {
    if (e.altKey && e.key === "Tab")
      e.preventDefault();
    if (!ref.current.contains(e.target))
      return;
    const navigateToKey = (key, childFocus) => {
      if (key != null) {
        if (manager.isLink(key) && linkBehavior === "selection" && selectOnFocus && !(0, $feb5ffebff200149$export$d3e3bd3e26688c04)(e)) {
          (0, import_react_dom.flushSync)(() => {
            manager.setFocusedKey(key, childFocus);
          });
          let item = scrollRef.current.querySelector(`[data-key="${key}"]`);
          router.open(item, e);
          return;
        }
        manager.setFocusedKey(key, childFocus);
        if (manager.isLink(key) && linkBehavior === "override")
          return;
        if (e.shiftKey && manager.selectionMode === "multiple")
          manager.extendSelection(key);
        else if (selectOnFocus && !(0, $feb5ffebff200149$export$d3e3bd3e26688c04)(e))
          manager.replaceSelection(key);
      }
    };
    switch (e.key) {
      case "ArrowDown":
        if (delegate.getKeyBelow) {
          var _delegate_getFirstKey, _delegate_getFirstKey1;
          e.preventDefault();
          let nextKey = manager.focusedKey != null ? delegate.getKeyBelow(manager.focusedKey) : (_delegate_getFirstKey = delegate.getFirstKey) === null || _delegate_getFirstKey === void 0 ? void 0 : _delegate_getFirstKey.call(delegate);
          if (nextKey == null && shouldFocusWrap)
            nextKey = (_delegate_getFirstKey1 = delegate.getFirstKey) === null || _delegate_getFirstKey1 === void 0 ? void 0 : _delegate_getFirstKey1.call(delegate, manager.focusedKey);
          navigateToKey(nextKey);
        }
        break;
      case "ArrowUp":
        if (delegate.getKeyAbove) {
          var _delegate_getLastKey, _delegate_getLastKey1;
          e.preventDefault();
          let nextKey = manager.focusedKey != null ? delegate.getKeyAbove(manager.focusedKey) : (_delegate_getLastKey = delegate.getLastKey) === null || _delegate_getLastKey === void 0 ? void 0 : _delegate_getLastKey.call(delegate);
          if (nextKey == null && shouldFocusWrap)
            nextKey = (_delegate_getLastKey1 = delegate.getLastKey) === null || _delegate_getLastKey1 === void 0 ? void 0 : _delegate_getLastKey1.call(delegate, manager.focusedKey);
          navigateToKey(nextKey);
        }
        break;
      case "ArrowLeft":
        if (delegate.getKeyLeftOf) {
          var _delegate_getFirstKey2, _delegate_getLastKey2;
          e.preventDefault();
          let nextKey = delegate.getKeyLeftOf(manager.focusedKey);
          if (nextKey == null && shouldFocusWrap)
            nextKey = direction === "rtl" ? (_delegate_getFirstKey2 = delegate.getFirstKey) === null || _delegate_getFirstKey2 === void 0 ? void 0 : _delegate_getFirstKey2.call(delegate, manager.focusedKey) : (_delegate_getLastKey2 = delegate.getLastKey) === null || _delegate_getLastKey2 === void 0 ? void 0 : _delegate_getLastKey2.call(delegate, manager.focusedKey);
          navigateToKey(nextKey, direction === "rtl" ? "first" : "last");
        }
        break;
      case "ArrowRight":
        if (delegate.getKeyRightOf) {
          var _delegate_getLastKey3, _delegate_getFirstKey3;
          e.preventDefault();
          let nextKey = delegate.getKeyRightOf(manager.focusedKey);
          if (nextKey == null && shouldFocusWrap)
            nextKey = direction === "rtl" ? (_delegate_getLastKey3 = delegate.getLastKey) === null || _delegate_getLastKey3 === void 0 ? void 0 : _delegate_getLastKey3.call(delegate, manager.focusedKey) : (_delegate_getFirstKey3 = delegate.getFirstKey) === null || _delegate_getFirstKey3 === void 0 ? void 0 : _delegate_getFirstKey3.call(delegate, manager.focusedKey);
          navigateToKey(nextKey, direction === "rtl" ? "last" : "first");
        }
        break;
      case "Home":
        if (delegate.getFirstKey) {
          e.preventDefault();
          let firstKey = delegate.getFirstKey(manager.focusedKey, (0, $feb5ffebff200149$export$16792effe837dba3)(e));
          manager.setFocusedKey(firstKey);
          if ((0, $feb5ffebff200149$export$16792effe837dba3)(e) && e.shiftKey && manager.selectionMode === "multiple")
            manager.extendSelection(firstKey);
          else if (selectOnFocus)
            manager.replaceSelection(firstKey);
        }
        break;
      case "End":
        if (delegate.getLastKey) {
          e.preventDefault();
          let lastKey = delegate.getLastKey(manager.focusedKey, (0, $feb5ffebff200149$export$16792effe837dba3)(e));
          manager.setFocusedKey(lastKey);
          if ((0, $feb5ffebff200149$export$16792effe837dba3)(e) && e.shiftKey && manager.selectionMode === "multiple")
            manager.extendSelection(lastKey);
          else if (selectOnFocus)
            manager.replaceSelection(lastKey);
        }
        break;
      case "PageDown":
        if (delegate.getKeyPageBelow) {
          e.preventDefault();
          let nextKey = delegate.getKeyPageBelow(manager.focusedKey);
          navigateToKey(nextKey);
        }
        break;
      case "PageUp":
        if (delegate.getKeyPageAbove) {
          e.preventDefault();
          let nextKey = delegate.getKeyPageAbove(manager.focusedKey);
          navigateToKey(nextKey);
        }
        break;
      case "a":
        if ((0, $feb5ffebff200149$export$16792effe837dba3)(e) && manager.selectionMode === "multiple" && disallowSelectAll !== true) {
          e.preventDefault();
          manager.selectAll();
        }
        break;
      case "Escape":
        e.preventDefault();
        if (!disallowEmptySelection)
          manager.clearSelection();
        break;
      case "Tab":
        if (!allowsTabNavigation) {
          if (e.shiftKey)
            ref.current.focus();
          else {
            let walker = (0, $9bf71ea28793e738$export$2d6ec8fc375ceafa)(ref.current, {
              tabbable: true
            });
            let next;
            let last;
            do {
              last = walker.lastChild();
              if (last)
                next = last;
            } while (last);
            if (next && !next.contains(document.activeElement))
              (0, $7215afc6de606d6b$export$de79e2c695e052f3)(next);
          }
          break;
        }
    }
  };
  let scrollPos = (0, import_react2.useRef)({
    top: 0,
    left: 0
  });
  (0, $e9faafb641e167db$export$90fc3a17d93f704c)(scrollRef, "scroll", isVirtualized ? null : () => {
    scrollPos.current = {
      top: scrollRef.current.scrollTop,
      left: scrollRef.current.scrollLeft
    };
  });
  let onFocus = (e) => {
    if (manager.isFocused) {
      if (!e.currentTarget.contains(e.target))
        manager.setFocused(false);
      return;
    }
    if (!e.currentTarget.contains(e.target))
      return;
    manager.setFocused(true);
    if (manager.focusedKey == null) {
      let navigateToFirstKey = (key) => {
        if (key != null) {
          manager.setFocusedKey(key);
          if (selectOnFocus)
            manager.replaceSelection(key);
        }
      };
      let relatedTarget = e.relatedTarget;
      var _manager_lastSelectedKey, _manager_firstSelectedKey;
      if (relatedTarget && e.currentTarget.compareDocumentPosition(relatedTarget) & Node.DOCUMENT_POSITION_FOLLOWING)
        navigateToFirstKey((_manager_lastSelectedKey = manager.lastSelectedKey) !== null && _manager_lastSelectedKey !== void 0 ? _manager_lastSelectedKey : delegate.getLastKey());
      else
        navigateToFirstKey((_manager_firstSelectedKey = manager.firstSelectedKey) !== null && _manager_firstSelectedKey !== void 0 ? _manager_firstSelectedKey : delegate.getFirstKey());
    } else if (!isVirtualized) {
      scrollRef.current.scrollTop = scrollPos.current.top;
      scrollRef.current.scrollLeft = scrollPos.current.left;
    }
    if (!isVirtualized && manager.focusedKey != null) {
      let element = scrollRef.current.querySelector(`[data-key="${manager.focusedKey}"]`);
      if (element) {
        if (!element.contains(document.activeElement))
          (0, $7215afc6de606d6b$export$de79e2c695e052f3)(element);
        let modality = (0, $507fabe10e71c6fb$export$630ff653c5ada6a9)();
        if (modality === "keyboard")
          (0, $2f04cbc44ee30ce0$export$c826860796309d1b)(element, {
            containingElement: ref.current
          });
      }
    }
  };
  let onBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget))
      manager.setFocused(false);
  };
  const autoFocusRef = (0, import_react2.useRef)(autoFocus);
  (0, import_react2.useEffect)(() => {
    if (autoFocusRef.current) {
      let focusedKey = null;
      if (autoFocus === "first")
        focusedKey = delegate.getFirstKey();
      if (autoFocus === "last")
        focusedKey = delegate.getLastKey();
      let selectedKeys = manager.selectedKeys;
      if (selectedKeys.size)
        focusedKey = selectedKeys.values().next().value;
      manager.setFocused(true);
      manager.setFocusedKey(focusedKey);
      if (focusedKey == null && !shouldUseVirtualFocus)
        (0, $6a99195332edec8b$export$80f3e147d781571c)(ref.current);
    }
    autoFocusRef.current = false;
  }, []);
  let lastFocusedKey = (0, import_react2.useRef)(manager.focusedKey);
  (0, import_react2.useEffect)(() => {
    let modality = (0, $507fabe10e71c6fb$export$630ff653c5ada6a9)();
    if (manager.isFocused && manager.focusedKey != null && (scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current)) {
      let element = scrollRef.current.querySelector(`[data-key="${manager.focusedKey}"]`);
      if (element && modality === "keyboard") {
        if (!isVirtualized)
          (0, $2f04cbc44ee30ce0$export$53a0910f038337bd)(scrollRef.current, element);
        (0, $2f04cbc44ee30ce0$export$c826860796309d1b)(element, {
          containingElement: ref.current
        });
      }
    }
    if (manager.isFocused && manager.focusedKey == null && lastFocusedKey.current != null)
      (0, $6a99195332edec8b$export$80f3e147d781571c)(ref.current);
    lastFocusedKey.current = manager.focusedKey;
  }, [
    isVirtualized,
    scrollRef,
    manager.focusedKey,
    manager.isFocused,
    ref
  ]);
  let handlers = {
    onKeyDown,
    onFocus,
    onBlur,
    onMouseDown(e) {
      if (scrollRef.current === e.target)
        e.preventDefault();
    }
  };
  let { typeSelectProps } = (0, $fb3050f43d946246$export$e32c88dfddc6e1d8)({
    keyboardDelegate: delegate,
    selectionManager: manager
  });
  if (!disallowTypeAhead)
    handlers = (0, $3ef42575df84b30b$export$9d1611c77c2fe928)(typeSelectProps, handlers);
  let tabIndex;
  if (!shouldUseVirtualFocus)
    tabIndex = manager.focusedKey == null ? 0 : -1;
  return {
    collectionProps: {
      ...handlers,
      tabIndex
    }
  };
}
function $880e95eb8b93ba9a$export$ecf600387e221c37(options) {
  let { selectionManager: manager, key, ref, shouldSelectOnPressUp, shouldUseVirtualFocus, focus, isDisabled, onAction, allowsDifferentPressOrigin, linkBehavior = "action" } = options;
  let router = (0, $ea8dcbcb9ea1b556$export$9a302a45f65d0572)();
  let onSelect = (e) => {
    if (e.pointerType === "keyboard" && (0, $feb5ffebff200149$export$d3e3bd3e26688c04)(e))
      manager.toggleSelection(key);
    else {
      if (manager.selectionMode === "none")
        return;
      if (manager.isLink(key)) {
        if (linkBehavior === "selection") {
          router.open(ref.current, e);
          manager.setSelectedKeys(manager.selectedKeys);
          return;
        } else if (linkBehavior === "override" || linkBehavior === "none")
          return;
      }
      if (manager.selectionMode === "single") {
        if (manager.isSelected(key) && !manager.disallowEmptySelection)
          manager.toggleSelection(key);
        else
          manager.replaceSelection(key);
      } else if (e && e.shiftKey)
        manager.extendSelection(key);
      else if (manager.selectionBehavior === "toggle" || e && ((0, $feb5ffebff200149$export$16792effe837dba3)(e) || e.pointerType === "touch" || e.pointerType === "virtual"))
        manager.toggleSelection(key);
      else
        manager.replaceSelection(key);
    }
  };
  (0, import_react2.useEffect)(() => {
    let isFocused = key === manager.focusedKey;
    if (isFocused && manager.isFocused && !shouldUseVirtualFocus) {
      if (focus)
        focus();
      else if (document.activeElement !== ref.current)
        (0, $6a99195332edec8b$export$80f3e147d781571c)(ref.current);
    }
  }, [
    ref,
    key,
    manager.focusedKey,
    manager.childFocusStrategy,
    manager.isFocused,
    shouldUseVirtualFocus
  ]);
  isDisabled = isDisabled || manager.isDisabled(key);
  let itemProps = {};
  if (!shouldUseVirtualFocus && !isDisabled)
    itemProps = {
      tabIndex: key === manager.focusedKey ? 0 : -1,
      onFocus(e) {
        if (e.target === ref.current)
          manager.setFocusedKey(key);
      }
    };
  else if (isDisabled)
    itemProps.onMouseDown = (e) => {
      e.preventDefault();
    };
  let isLinkOverride = manager.isLink(key) && linkBehavior === "override";
  let hasLinkAction = manager.isLink(key) && linkBehavior !== "selection" && linkBehavior !== "none";
  let allowsSelection = !isDisabled && manager.canSelectItem(key) && !isLinkOverride;
  let allowsActions = (onAction || hasLinkAction) && !isDisabled;
  let hasPrimaryAction = allowsActions && (manager.selectionBehavior === "replace" ? !allowsSelection : !allowsSelection || manager.isEmpty);
  let hasSecondaryAction = allowsActions && allowsSelection && manager.selectionBehavior === "replace";
  let hasAction = hasPrimaryAction || hasSecondaryAction;
  let modality = (0, import_react2.useRef)(null);
  let longPressEnabled = hasAction && allowsSelection;
  let longPressEnabledOnPressStart = (0, import_react2.useRef)(false);
  let hadPrimaryActionOnPressStart = (0, import_react2.useRef)(false);
  let performAction = (e) => {
    if (onAction)
      onAction();
    if (hasLinkAction)
      router.open(ref.current, e);
  };
  let itemPressProps = {};
  if (shouldSelectOnPressUp) {
    itemPressProps.onPressStart = (e) => {
      modality.current = e.pointerType;
      longPressEnabledOnPressStart.current = longPressEnabled;
      if (e.pointerType === "keyboard" && (!hasAction || $880e95eb8b93ba9a$var$isSelectionKey()))
        onSelect(e);
    };
    if (!allowsDifferentPressOrigin)
      itemPressProps.onPress = (e) => {
        if (hasPrimaryAction || hasSecondaryAction && e.pointerType !== "mouse") {
          if (e.pointerType === "keyboard" && !$880e95eb8b93ba9a$var$isActionKey())
            return;
          performAction(e);
        } else if (e.pointerType !== "keyboard" && allowsSelection)
          onSelect(e);
      };
    else {
      itemPressProps.onPressUp = hasPrimaryAction ? null : (e) => {
        if (e.pointerType !== "keyboard" && allowsSelection)
          onSelect(e);
      };
      itemPressProps.onPress = hasPrimaryAction ? performAction : null;
    }
  } else {
    itemPressProps.onPressStart = (e) => {
      modality.current = e.pointerType;
      longPressEnabledOnPressStart.current = longPressEnabled;
      hadPrimaryActionOnPressStart.current = hasPrimaryAction;
      if (allowsSelection && (e.pointerType === "mouse" && !hasPrimaryAction || e.pointerType === "keyboard" && (!allowsActions || $880e95eb8b93ba9a$var$isSelectionKey())))
        onSelect(e);
    };
    itemPressProps.onPress = (e) => {
      if (e.pointerType === "touch" || e.pointerType === "pen" || e.pointerType === "virtual" || e.pointerType === "keyboard" && hasAction && $880e95eb8b93ba9a$var$isActionKey() || e.pointerType === "mouse" && hadPrimaryActionOnPressStart.current) {
        if (hasAction)
          performAction(e);
        else if (allowsSelection)
          onSelect(e);
      }
    };
  }
  itemProps["data-key"] = key;
  itemPressProps.preventFocusOnPress = shouldUseVirtualFocus;
  let { pressProps, isPressed } = (0, $f6c31cce2adf654f$export$45712eceda6fad21)(itemPressProps);
  let onDoubleClick = hasSecondaryAction ? (e) => {
    if (modality.current === "mouse") {
      e.stopPropagation();
      e.preventDefault();
      performAction(e);
    }
  } : void 0;
  let { longPressProps } = (0, $8a26561d2877236e$export$c24ed0104d07eab9)({
    isDisabled: !longPressEnabled,
    onLongPress(e) {
      if (e.pointerType === "touch") {
        onSelect(e);
        manager.setSelectionBehavior("toggle");
      }
    }
  });
  let onDragStartCapture = (e) => {
    if (modality.current === "touch" && longPressEnabledOnPressStart.current)
      e.preventDefault();
  };
  let onClick = manager.isLink(key) ? (e) => {
    if (!(0, $ea8dcbcb9ea1b556$export$95185d699e05d4d7).isOpening)
      e.preventDefault();
  } : void 0;
  return {
    itemProps: (0, $3ef42575df84b30b$export$9d1611c77c2fe928)(itemProps, allowsSelection || hasPrimaryAction ? pressProps : {}, longPressEnabled ? longPressProps : {}, {
      onDoubleClick,
      onDragStartCapture,
      onClick
    }),
    isPressed,
    isSelected: manager.isSelected(key),
    isFocused: manager.isFocused && manager.focusedKey === key,
    isDisabled,
    allowsSelection,
    hasAction
  };
}
function $880e95eb8b93ba9a$var$isActionKey() {
  let event = window.event;
  return (event === null || event === void 0 ? void 0 : event.key) === "Enter";
}
function $880e95eb8b93ba9a$var$isSelectionKey() {
  let event = window.event;
  return (event === null || event === void 0 ? void 0 : event.key) === " " || (event === null || event === void 0 ? void 0 : event.code) === "Space";
}
var $2a25aae57d74318e$export$a05409b8bb224a5a = class {
  getNextKey(key) {
    key = this.collection.getKeyAfter(key);
    while (key != null) {
      let item = this.collection.getItem(key);
      if (item.type === "item" && !this.disabledKeys.has(key))
        return key;
      key = this.collection.getKeyAfter(key);
    }
    return null;
  }
  getPreviousKey(key) {
    key = this.collection.getKeyBefore(key);
    while (key != null) {
      let item = this.collection.getItem(key);
      if (item.type === "item" && !this.disabledKeys.has(key))
        return key;
      key = this.collection.getKeyBefore(key);
    }
    return null;
  }
  findKey(key, nextKey, shouldSkip) {
    let item = this.getItem(key);
    if (!item)
      return null;
    let prevRect = item.getBoundingClientRect();
    do {
      key = nextKey(key);
      item = this.getItem(key);
    } while (item && shouldSkip(prevRect, item.getBoundingClientRect()));
    return key;
  }
  isSameRow(prevRect, itemRect) {
    return prevRect.top === itemRect.top || prevRect.left !== itemRect.left;
  }
  isSameColumn(prevRect, itemRect) {
    return prevRect.left === itemRect.left || prevRect.top !== itemRect.top;
  }
  getKeyBelow(key) {
    if (this.layout === "grid" && this.orientation === "vertical")
      return this.findKey(key, (key2) => this.getNextKey(key2), this.isSameRow);
    else
      return this.getNextKey(key);
  }
  getKeyAbove(key) {
    if (this.layout === "grid" && this.orientation === "vertical")
      return this.findKey(key, (key2) => this.getPreviousKey(key2), this.isSameRow);
    else
      return this.getPreviousKey(key);
  }
  getNextColumn(key, right) {
    return right ? this.getPreviousKey(key) : this.getNextKey(key);
  }
  getKeyRightOf(key) {
    if (this.layout === "grid") {
      if (this.orientation === "vertical")
        return this.getNextColumn(key, this.direction === "rtl");
      else
        return this.findKey(key, (key2) => this.getNextColumn(key2, this.direction === "rtl"), this.isSameColumn);
    } else if (this.orientation === "horizontal")
      return this.getNextColumn(key, this.direction === "rtl");
    return null;
  }
  getKeyLeftOf(key) {
    if (this.layout === "grid") {
      if (this.orientation === "vertical")
        return this.getNextColumn(key, this.direction === "ltr");
      else
        return this.findKey(key, (key2) => this.getNextColumn(key2, this.direction === "ltr"), this.isSameColumn);
    } else if (this.orientation === "horizontal")
      return this.getNextColumn(key, this.direction === "ltr");
    return null;
  }
  getFirstKey() {
    let key = this.collection.getFirstKey();
    while (key != null) {
      let item = this.collection.getItem(key);
      if (item.type === "item" && !this.disabledKeys.has(key))
        return key;
      key = this.collection.getKeyAfter(key);
    }
    return null;
  }
  getLastKey() {
    let key = this.collection.getLastKey();
    while (key != null) {
      let item = this.collection.getItem(key);
      if (item.type === "item" && !this.disabledKeys.has(key))
        return key;
      key = this.collection.getKeyBefore(key);
    }
    return null;
  }
  getItem(key) {
    return this.ref.current.querySelector(`[data-key="${key}"]`);
  }
  getKeyPageAbove(key) {
    let menu = this.ref.current;
    let item = this.getItem(key);
    if (!item)
      return null;
    if (!(0, $62d8ded9296f3872$export$2bb74740c4e19def)(menu))
      return this.getFirstKey();
    let containerRect = menu.getBoundingClientRect();
    let itemRect = item.getBoundingClientRect();
    if (this.orientation === "horizontal") {
      let containerX = containerRect.x - menu.scrollLeft;
      let pageX = Math.max(0, itemRect.x - containerX + itemRect.width - containerRect.width);
      while (item && itemRect.x - containerX > pageX) {
        key = this.getKeyAbove(key);
        item = key == null ? null : this.getItem(key);
        itemRect = item === null || item === void 0 ? void 0 : item.getBoundingClientRect();
      }
    } else {
      let containerY = containerRect.y - menu.scrollTop;
      let pageY = Math.max(0, itemRect.y - containerY + itemRect.height - containerRect.height);
      while (item && itemRect.y - containerY > pageY) {
        key = this.getKeyAbove(key);
        item = key == null ? null : this.getItem(key);
        itemRect = item === null || item === void 0 ? void 0 : item.getBoundingClientRect();
      }
    }
    return key !== null && key !== void 0 ? key : this.getFirstKey();
  }
  getKeyPageBelow(key) {
    let menu = this.ref.current;
    let item = this.getItem(key);
    if (!item)
      return null;
    if (!(0, $62d8ded9296f3872$export$2bb74740c4e19def)(menu))
      return this.getLastKey();
    let containerRect = menu.getBoundingClientRect();
    let itemRect = item.getBoundingClientRect();
    if (this.orientation === "horizontal") {
      let containerX = containerRect.x - menu.scrollLeft;
      let pageX = Math.min(menu.scrollWidth, itemRect.x - containerX - itemRect.width + containerRect.width);
      while (item && itemRect.x - containerX < pageX) {
        key = this.getKeyBelow(key);
        item = key == null ? null : this.getItem(key);
        itemRect = item === null || item === void 0 ? void 0 : item.getBoundingClientRect();
      }
    } else {
      let containerY = containerRect.y - menu.scrollTop;
      let pageY = Math.min(menu.scrollHeight, itemRect.y - containerY - itemRect.height + containerRect.height);
      while (item && itemRect.y - containerY < pageY) {
        key = this.getKeyBelow(key);
        item = key == null ? null : this.getItem(key);
        itemRect = item === null || item === void 0 ? void 0 : item.getBoundingClientRect();
      }
    }
    return key !== null && key !== void 0 ? key : this.getLastKey();
  }
  getKeyForSearch(search, fromKey) {
    if (!this.collator)
      return null;
    let collection = this.collection;
    let key = fromKey || this.getFirstKey();
    while (key != null) {
      let item = collection.getItem(key);
      let substring = item.textValue.slice(0, search.length);
      if (item.textValue && this.collator.compare(substring, search) === 0)
        return key;
      key = this.getKeyBelow(key);
    }
    return null;
  }
  constructor(...args) {
    if (args.length === 1) {
      let opts = args[0];
      this.collection = opts.collection;
      this.ref = opts.ref;
      this.collator = opts.collator;
      this.disabledKeys = opts.disabledKeys || /* @__PURE__ */ new Set();
      this.orientation = opts.orientation;
      this.direction = opts.direction;
      this.layout = opts.layout || "stack";
    } else {
      this.collection = args[0];
      this.disabledKeys = args[1];
      this.ref = args[2];
      this.collator = args[3];
      this.layout = "stack";
      this.orientation = "vertical";
    }
    if (this.layout === "stack" && this.orientation === "vertical") {
      this.getKeyLeftOf = void 0;
      this.getKeyRightOf = void 0;
    }
  }
};
function $982254629710d113$export$b95089534ab7c1fd(props) {
  let { selectionManager, collection, disabledKeys, ref, keyboardDelegate } = props;
  let collator = (0, $325a3faab7a68acd$export$a16aca283550c30d)({
    usage: "search",
    sensitivity: "base"
  });
  let disabledBehavior = selectionManager.disabledBehavior;
  let delegate = (0, import_react2.useMemo)(() => keyboardDelegate || new (0, $2a25aae57d74318e$export$a05409b8bb224a5a)(collection, disabledBehavior === "selection" ? /* @__PURE__ */ new Set() : disabledKeys, ref, collator), [
    keyboardDelegate,
    collection,
    disabledKeys,
    ref,
    collator,
    disabledBehavior
  ]);
  let { collectionProps } = (0, $ae20dd8cbca75726$export$d6daf82dcd84e87c)({
    ...props,
    ref,
    selectionManager,
    keyboardDelegate: delegate
  });
  return {
    listProps: collectionProps
  };
}

// node_modules/@react-stately/selection/dist/import.mjs
var import_react3 = __toESM(require_react(), 1);
var $e40ea825a81a3709$export$52baac22726c72bf = class extends Set {
  constructor(keys, anchorKey, currentKey) {
    super(keys);
    if (keys instanceof $e40ea825a81a3709$export$52baac22726c72bf) {
      this.anchorKey = anchorKey || keys.anchorKey;
      this.currentKey = currentKey || keys.currentKey;
    } else {
      this.anchorKey = anchorKey;
      this.currentKey = currentKey;
    }
  }
};
function $7af3f5b51489e0b5$var$equalSets(setA, setB) {
  if (setA.size !== setB.size)
    return false;
  for (let item of setA) {
    if (!setB.has(item))
      return false;
  }
  return true;
}
function $7af3f5b51489e0b5$export$253fe78d46329472(props) {
  let { selectionMode = "none", disallowEmptySelection, allowDuplicateSelectionEvents, selectionBehavior: selectionBehaviorProp = "toggle", disabledBehavior = "all" } = props;
  let isFocusedRef = (0, import_react3.useRef)(false);
  let [, setFocused] = (0, import_react3.useState)(false);
  let focusedKeyRef = (0, import_react3.useRef)(null);
  let childFocusStrategyRef = (0, import_react3.useRef)(null);
  let [, setFocusedKey] = (0, import_react3.useState)(null);
  let selectedKeysProp = (0, import_react3.useMemo)(() => $7af3f5b51489e0b5$var$convertSelection(props.selectedKeys), [
    props.selectedKeys
  ]);
  let defaultSelectedKeys = (0, import_react3.useMemo)(() => $7af3f5b51489e0b5$var$convertSelection(props.defaultSelectedKeys, new (0, $e40ea825a81a3709$export$52baac22726c72bf)()), [
    props.defaultSelectedKeys
  ]);
  let [selectedKeys, setSelectedKeys] = (0, $458b0a5536c1a7cf$export$40bfa8c7b0832715)(selectedKeysProp, defaultSelectedKeys, props.onSelectionChange);
  let disabledKeysProp = (0, import_react3.useMemo)(() => props.disabledKeys ? new Set(props.disabledKeys) : /* @__PURE__ */ new Set(), [
    props.disabledKeys
  ]);
  let [selectionBehavior, setSelectionBehavior] = (0, import_react3.useState)(selectionBehaviorProp);
  if (selectionBehaviorProp === "replace" && selectionBehavior === "toggle" && typeof selectedKeys === "object" && selectedKeys.size === 0)
    setSelectionBehavior("replace");
  let lastSelectionBehavior = (0, import_react3.useRef)(selectionBehaviorProp);
  (0, import_react3.useEffect)(() => {
    if (selectionBehaviorProp !== lastSelectionBehavior.current) {
      setSelectionBehavior(selectionBehaviorProp);
      lastSelectionBehavior.current = selectionBehaviorProp;
    }
  }, [
    selectionBehaviorProp
  ]);
  return {
    selectionMode,
    disallowEmptySelection,
    selectionBehavior,
    setSelectionBehavior,
    get isFocused() {
      return isFocusedRef.current;
    },
    setFocused(f) {
      isFocusedRef.current = f;
      setFocused(f);
    },
    get focusedKey() {
      return focusedKeyRef.current;
    },
    get childFocusStrategy() {
      return childFocusStrategyRef.current;
    },
    setFocusedKey(k, childFocusStrategy = "first") {
      focusedKeyRef.current = k;
      childFocusStrategyRef.current = childFocusStrategy;
      setFocusedKey(k);
    },
    selectedKeys,
    setSelectedKeys(keys) {
      if (allowDuplicateSelectionEvents || !$7af3f5b51489e0b5$var$equalSets(keys, selectedKeys))
        setSelectedKeys(keys);
    },
    disabledKeys: disabledKeysProp,
    disabledBehavior
  };
}
function $7af3f5b51489e0b5$var$convertSelection(selection, defaultValue) {
  if (!selection)
    return defaultValue;
  return selection === "all" ? "all" : new (0, $e40ea825a81a3709$export$52baac22726c72bf)(selection);
}
var $d496c0a20b6e58ec$export$6c8a5aaad13c9852 = class {
  /**
  * The type of selection that is allowed in the collection.
  */
  get selectionMode() {
    return this.state.selectionMode;
  }
  /**
  * Whether the collection allows empty selection.
  */
  get disallowEmptySelection() {
    return this.state.disallowEmptySelection;
  }
  /**
  * The selection behavior for the collection.
  */
  get selectionBehavior() {
    return this.state.selectionBehavior;
  }
  /**
  * Sets the selection behavior for the collection.
  */
  setSelectionBehavior(selectionBehavior) {
    this.state.setSelectionBehavior(selectionBehavior);
  }
  /**
  * Whether the collection is currently focused.
  */
  get isFocused() {
    return this.state.isFocused;
  }
  /**
  * Sets whether the collection is focused.
  */
  setFocused(isFocused) {
    this.state.setFocused(isFocused);
  }
  /**
  * The current focused key in the collection.
  */
  get focusedKey() {
    return this.state.focusedKey;
  }
  /** Whether the first or last child of the focused key should receive focus. */
  get childFocusStrategy() {
    return this.state.childFocusStrategy;
  }
  /**
  * Sets the focused key.
  */
  setFocusedKey(key, childFocusStrategy) {
    if (key == null || this.collection.getItem(key))
      this.state.setFocusedKey(key, childFocusStrategy);
  }
  /**
  * The currently selected keys in the collection.
  */
  get selectedKeys() {
    return this.state.selectedKeys === "all" ? new Set(this.getSelectAllKeys()) : this.state.selectedKeys;
  }
  /**
  * The raw selection value for the collection.
  * Either 'all' for select all, or a set of keys.
  */
  get rawSelection() {
    return this.state.selectedKeys;
  }
  /**
  * Returns whether a key is selected.
  */
  isSelected(key) {
    if (this.state.selectionMode === "none")
      return false;
    key = this.getKey(key);
    return this.state.selectedKeys === "all" ? this.canSelectItem(key) : this.state.selectedKeys.has(key);
  }
  /**
  * Whether the selection is empty.
  */
  get isEmpty() {
    return this.state.selectedKeys !== "all" && this.state.selectedKeys.size === 0;
  }
  /**
  * Whether all items in the collection are selected.
  */
  get isSelectAll() {
    if (this.isEmpty)
      return false;
    if (this.state.selectedKeys === "all")
      return true;
    if (this._isSelectAll != null)
      return this._isSelectAll;
    let allKeys = this.getSelectAllKeys();
    let selectedKeys = this.state.selectedKeys;
    this._isSelectAll = allKeys.every((k) => selectedKeys.has(k));
    return this._isSelectAll;
  }
  get firstSelectedKey() {
    let first = null;
    for (let key of this.state.selectedKeys) {
      let item = this.collection.getItem(key);
      if (!first || item && (0, $c5a24bc478652b5f$export$8c434b3a7a4dad6)(this.collection, item, first) < 0)
        first = item;
    }
    return first === null || first === void 0 ? void 0 : first.key;
  }
  get lastSelectedKey() {
    let last = null;
    for (let key of this.state.selectedKeys) {
      let item = this.collection.getItem(key);
      if (!last || item && (0, $c5a24bc478652b5f$export$8c434b3a7a4dad6)(this.collection, item, last) > 0)
        last = item;
    }
    return last === null || last === void 0 ? void 0 : last.key;
  }
  get disabledKeys() {
    return this.state.disabledKeys;
  }
  get disabledBehavior() {
    return this.state.disabledBehavior;
  }
  /**
  * Extends the selection to the given key.
  */
  extendSelection(toKey) {
    if (this.selectionMode === "none")
      return;
    if (this.selectionMode === "single") {
      this.replaceSelection(toKey);
      return;
    }
    toKey = this.getKey(toKey);
    let selection;
    if (this.state.selectedKeys === "all")
      selection = new (0, $e40ea825a81a3709$export$52baac22726c72bf)([
        toKey
      ], toKey, toKey);
    else {
      let selectedKeys = this.state.selectedKeys;
      let anchorKey = selectedKeys.anchorKey || toKey;
      selection = new (0, $e40ea825a81a3709$export$52baac22726c72bf)(selectedKeys, anchorKey, toKey);
      for (let key of this.getKeyRange(anchorKey, selectedKeys.currentKey || toKey))
        selection.delete(key);
      for (let key of this.getKeyRange(toKey, anchorKey))
        if (this.canSelectItem(key))
          selection.add(key);
    }
    this.state.setSelectedKeys(selection);
  }
  getKeyRange(from, to) {
    let fromItem = this.collection.getItem(from);
    let toItem = this.collection.getItem(to);
    if (fromItem && toItem) {
      if ((0, $c5a24bc478652b5f$export$8c434b3a7a4dad6)(this.collection, fromItem, toItem) <= 0)
        return this.getKeyRangeInternal(from, to);
      return this.getKeyRangeInternal(to, from);
    }
    return [];
  }
  getKeyRangeInternal(from, to) {
    let keys = [];
    let key = from;
    while (key) {
      let item = this.collection.getItem(key);
      if (item && item.type === "item" || item.type === "cell" && this.allowsCellSelection)
        keys.push(key);
      if (key === to)
        return keys;
      key = this.collection.getKeyAfter(key);
    }
    return [];
  }
  getKey(key) {
    let item = this.collection.getItem(key);
    if (!item)
      return key;
    if (item.type === "cell" && this.allowsCellSelection)
      return key;
    while (item.type !== "item" && item.parentKey != null)
      item = this.collection.getItem(item.parentKey);
    if (!item || item.type !== "item")
      return null;
    return item.key;
  }
  /**
  * Toggles whether the given key is selected.
  */
  toggleSelection(key) {
    if (this.selectionMode === "none")
      return;
    if (this.selectionMode === "single" && !this.isSelected(key)) {
      this.replaceSelection(key);
      return;
    }
    key = this.getKey(key);
    if (key == null)
      return;
    let keys = new (0, $e40ea825a81a3709$export$52baac22726c72bf)(this.state.selectedKeys === "all" ? this.getSelectAllKeys() : this.state.selectedKeys);
    if (keys.has(key))
      keys.delete(key);
    else if (this.canSelectItem(key)) {
      keys.add(key);
      keys.anchorKey = key;
      keys.currentKey = key;
    }
    if (this.disallowEmptySelection && keys.size === 0)
      return;
    this.state.setSelectedKeys(keys);
  }
  /**
  * Replaces the selection with only the given key.
  */
  replaceSelection(key) {
    if (this.selectionMode === "none")
      return;
    key = this.getKey(key);
    if (key == null)
      return;
    let selection = this.canSelectItem(key) ? new (0, $e40ea825a81a3709$export$52baac22726c72bf)([
      key
    ], key, key) : new (0, $e40ea825a81a3709$export$52baac22726c72bf)();
    this.state.setSelectedKeys(selection);
  }
  /**
  * Replaces the selection with the given keys.
  */
  setSelectedKeys(keys) {
    if (this.selectionMode === "none")
      return;
    let selection = new (0, $e40ea825a81a3709$export$52baac22726c72bf)();
    for (let key of keys) {
      key = this.getKey(key);
      if (key != null) {
        selection.add(key);
        if (this.selectionMode === "single")
          break;
      }
    }
    this.state.setSelectedKeys(selection);
  }
  getSelectAllKeys() {
    let keys = [];
    let addKeys = (key) => {
      while (key) {
        if (this.canSelectItem(key)) {
          let item = this.collection.getItem(key);
          if (item.type === "item")
            keys.push(key);
          if (item.hasChildNodes && (this.allowsCellSelection || item.type !== "item"))
            addKeys((0, $c5a24bc478652b5f$export$fbdeaa6a76694f71)((0, $c5a24bc478652b5f$export$1005530eda016c13)(item, this.collection)).key);
        }
        key = this.collection.getKeyAfter(key);
      }
    };
    addKeys(this.collection.getFirstKey());
    return keys;
  }
  /**
  * Selects all items in the collection.
  */
  selectAll() {
    if (!this.isSelectAll && this.selectionMode === "multiple")
      this.state.setSelectedKeys("all");
  }
  /**
  * Removes all keys from the selection.
  */
  clearSelection() {
    if (!this.disallowEmptySelection && (this.state.selectedKeys === "all" || this.state.selectedKeys.size > 0))
      this.state.setSelectedKeys(new (0, $e40ea825a81a3709$export$52baac22726c72bf)());
  }
  /**
  * Toggles between select all and an empty selection.
  */
  toggleSelectAll() {
    if (this.isSelectAll)
      this.clearSelection();
    else
      this.selectAll();
  }
  select(key, e) {
    if (this.selectionMode === "none")
      return;
    if (this.selectionMode === "single") {
      if (this.isSelected(key) && !this.disallowEmptySelection)
        this.toggleSelection(key);
      else
        this.replaceSelection(key);
    } else if (this.selectionBehavior === "toggle" || e && (e.pointerType === "touch" || e.pointerType === "virtual"))
      this.toggleSelection(key);
    else
      this.replaceSelection(key);
  }
  /**
  * Returns whether the current selection is equal to the given selection.
  */
  isSelectionEqual(selection) {
    if (selection === this.state.selectedKeys)
      return true;
    let selectedKeys = this.selectedKeys;
    if (selection.size !== selectedKeys.size)
      return false;
    for (let key of selection) {
      if (!selectedKeys.has(key))
        return false;
    }
    for (let key of selectedKeys) {
      if (!selection.has(key))
        return false;
    }
    return true;
  }
  canSelectItem(key) {
    if (this.state.selectionMode === "none" || this.state.disabledKeys.has(key))
      return false;
    let item = this.collection.getItem(key);
    if (!item || item.type === "cell" && !this.allowsCellSelection)
      return false;
    return true;
  }
  isDisabled(key) {
    return this.state.disabledKeys.has(key) && this.state.disabledBehavior === "all";
  }
  isLink(key) {
    var _this_collection_getItem_props, _this_collection_getItem;
    return !!((_this_collection_getItem = this.collection.getItem(key)) === null || _this_collection_getItem === void 0 ? void 0 : (_this_collection_getItem_props = _this_collection_getItem.props) === null || _this_collection_getItem_props === void 0 ? void 0 : _this_collection_getItem_props.href);
  }
  constructor(collection, state, options) {
    this.collection = collection;
    this.state = state;
    var _options_allowsCellSelection;
    this.allowsCellSelection = (_options_allowsCellSelection = options === null || options === void 0 ? void 0 : options.allowsCellSelection) !== null && _options_allowsCellSelection !== void 0 ? _options_allowsCellSelection : false;
    this._isSelectAll = null;
  }
};

export {
  $ae20dd8cbca75726$export$d6daf82dcd84e87c,
  $880e95eb8b93ba9a$export$ecf600387e221c37,
  $982254629710d113$export$b95089534ab7c1fd,
  $c1d7fb2ec91bae71$export$6d08773d2e66f8f2,
  $7613b1592d41b092$export$6cd28814d92fa9c9,
  $c5a24bc478652b5f$export$1005530eda016c13,
  $c5a24bc478652b5f$export$fbdeaa6a76694f71,
  $c5a24bc478652b5f$export$5f3398f8733f90e2,
  $c5a24bc478652b5f$export$7475b2c64539e4cf,
  $453cc9f0df89c0a5$export$77d5aafae4e095b2,
  $7af3f5b51489e0b5$export$253fe78d46329472,
  $d496c0a20b6e58ec$export$6c8a5aaad13c9852
};
//# sourceMappingURL=/build/_shared/chunk-RR5CIDIT.js.map
