import {
  $7613b1592d41b092$export$6cd28814d92fa9c9,
  $7af3f5b51489e0b5$export$253fe78d46329472,
  $880e95eb8b93ba9a$export$ecf600387e221c37,
  $ae20dd8cbca75726$export$d6daf82dcd84e87c,
  $c1d7fb2ec91bae71$export$6d08773d2e66f8f2,
  $d496c0a20b6e58ec$export$6c8a5aaad13c9852
} from "/build/_shared/chunk-RR5CIDIT.js";
import {
  z
} from "/build/_shared/chunk-CRRESCNE.js";
import {
  $18f2051aff69b9bf$export$43bb16f9c6d9e3f7,
  $313b98861ee5dd6c$export$d6875122194c7b44,
  $3ef42575df84b30b$export$9d1611c77c2fe928,
  $458b0a5536c1a7cf$export$40bfa8c7b0832715,
  $6179b936705e76d3$export$ae780daf29e6d456,
  $65484d02dcb7eb3e$export$457c3d6518dd4c6f,
  $83013635b024ae3d$export$eac1895992b9f3d6,
  $bdb11010cef70236$export$f680877a34711e37,
  $f7dceffc5ad7768b$export$4e328f61c538687f,
  $ff5963eb1fccf552$export$e08e3b67e392101e,
  LayoutGroup,
  clsx,
  dataAttr,
  filterDOMProps,
  forwardRef,
  mapPropsVariants,
  motion,
  tabs,
  useDOMRef
} from "/build/_shared/chunk-XEG4DGED.js";
import {
  require_jsx_runtime
} from "/build/_shared/chunk-NMZL6IDN.js";
import {
  createHotContext
} from "/build/_shared/chunk-U53SBQSA.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/@react-aria/tabs/dist/import.mjs
var import_react = __toESM(require_react(), 1);
var $99b62ae3ff97ec45$export$c5f62239608282b6 = /* @__PURE__ */ new WeakMap();
function $99b62ae3ff97ec45$export$567fc7097e064344(state, key, role) {
  if (typeof key === "string")
    key = key.replace(/\s+/g, "");
  let baseId = $99b62ae3ff97ec45$export$c5f62239608282b6.get(state);
  return `${baseId}-${role}-${key}`;
}
function $0175d55c2a017ebc$export$fdf4756d5b8ef90a(props, state, ref) {
  var _item_props;
  let { key, isDisabled: propsDisabled, shouldSelectOnPressUp } = props;
  let { selectionManager: manager, selectedKey } = state;
  let isSelected = key === selectedKey;
  let isDisabled = propsDisabled || state.isDisabled || state.disabledKeys.has(key);
  let { itemProps, isPressed } = (0, $880e95eb8b93ba9a$export$ecf600387e221c37)({
    selectionManager: manager,
    key,
    ref,
    isDisabled,
    shouldSelectOnPressUp,
    linkBehavior: "selection"
  });
  let tabId = (0, $99b62ae3ff97ec45$export$567fc7097e064344)(state, key, "tab");
  let tabPanelId = (0, $99b62ae3ff97ec45$export$567fc7097e064344)(state, key, "tabpanel");
  let { tabIndex } = itemProps;
  let item = state.collection.getItem(key);
  let domProps = (0, $65484d02dcb7eb3e$export$457c3d6518dd4c6f)(item === null || item === void 0 ? void 0 : item.props, {
    isLink: !!(item === null || item === void 0 ? void 0 : (_item_props = item.props) === null || _item_props === void 0 ? void 0 : _item_props.href)
  });
  delete domProps.id;
  return {
    tabProps: (0, $3ef42575df84b30b$export$9d1611c77c2fe928)(domProps, itemProps, {
      id: tabId,
      "aria-selected": isSelected,
      "aria-disabled": isDisabled || void 0,
      "aria-controls": isSelected ? tabPanelId : void 0,
      tabIndex: isDisabled ? void 0 : tabIndex,
      role: "tab"
    }),
    isSelected,
    isDisabled,
    isPressed
  };
}
function $34bce698202e07cb$export$fae0121b5afe572d(props, state, ref) {
  let tabIndex = (0, $83013635b024ae3d$export$eac1895992b9f3d6)(ref) ? void 0 : 0;
  var _props_id;
  const id = (0, $99b62ae3ff97ec45$export$567fc7097e064344)(state, (_props_id = props.id) !== null && _props_id !== void 0 ? _props_id : state === null || state === void 0 ? void 0 : state.selectedKey, "tabpanel");
  const tabPanelProps = (0, $313b98861ee5dd6c$export$d6875122194c7b44)({
    ...props,
    id,
    "aria-labelledby": (0, $99b62ae3ff97ec45$export$567fc7097e064344)(state, state === null || state === void 0 ? void 0 : state.selectedKey, "tab")
  });
  return {
    tabPanelProps: (0, $3ef42575df84b30b$export$9d1611c77c2fe928)(tabPanelProps, {
      tabIndex,
      role: "tabpanel",
      "aria-describedby": props["aria-describedby"],
      "aria-details": props["aria-details"]
    })
  };
}
var $bfc6f2d60b8a4c40$export$15010ca3c1abe90b = class {
  getKeyLeftOf(key) {
    if (this.flipDirection)
      return this.getNextKey(key);
    return this.getPreviousKey(key);
  }
  getKeyRightOf(key) {
    if (this.flipDirection)
      return this.getPreviousKey(key);
    return this.getNextKey(key);
  }
  getKeyAbove(key) {
    return this.getPreviousKey(key);
  }
  getKeyBelow(key) {
    return this.getNextKey(key);
  }
  getFirstKey() {
    let key = this.collection.getFirstKey();
    if (this.disabledKeys.has(key))
      key = this.getNextKey(key);
    return key;
  }
  getLastKey() {
    let key = this.collection.getLastKey();
    if (this.disabledKeys.has(key))
      key = this.getPreviousKey(key);
    return key;
  }
  getNextKey(key) {
    do {
      key = this.collection.getKeyAfter(key);
      if (key == null)
        key = this.collection.getFirstKey();
    } while (this.disabledKeys.has(key));
    return key;
  }
  getPreviousKey(key) {
    do {
      key = this.collection.getKeyBefore(key);
      if (key == null)
        key = this.collection.getLastKey();
    } while (this.disabledKeys.has(key));
    return key;
  }
  constructor(collection, direction, orientation, disabledKeys = /* @__PURE__ */ new Set()) {
    this.collection = collection;
    this.flipDirection = direction === "rtl" && orientation === "horizontal";
    this.disabledKeys = disabledKeys;
  }
};
function $58d314389b21fa3f$export$773e389e644c5874(props, state, ref) {
  let { orientation = "horizontal", keyboardActivation = "automatic" } = props;
  let { collection, selectionManager: manager, disabledKeys } = state;
  let { direction } = (0, $18f2051aff69b9bf$export$43bb16f9c6d9e3f7)();
  let delegate = (0, import_react.useMemo)(() => new (0, $bfc6f2d60b8a4c40$export$15010ca3c1abe90b)(collection, direction, orientation, disabledKeys), [
    collection,
    disabledKeys,
    orientation,
    direction
  ]);
  let { collectionProps } = (0, $ae20dd8cbca75726$export$d6daf82dcd84e87c)({
    ref,
    selectionManager: manager,
    keyboardDelegate: delegate,
    selectOnFocus: keyboardActivation === "automatic",
    disallowEmptySelection: true,
    scrollRef: ref,
    linkBehavior: "selection"
  });
  let tabsId = (0, $bdb11010cef70236$export$f680877a34711e37)();
  (0, $99b62ae3ff97ec45$export$c5f62239608282b6).set(state, tabsId);
  let tabListLabelProps = (0, $313b98861ee5dd6c$export$d6875122194c7b44)({
    ...props,
    id: tabsId
  });
  return {
    tabListProps: {
      ...(0, $3ef42575df84b30b$export$9d1611c77c2fe928)(collectionProps, tabListLabelProps),
      role: "tablist",
      "aria-orientation": orientation,
      tabIndex: void 0
    }
  };
}

// node_modules/@nextui-org/tabs/dist/chunk-FUVFJH5A.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
"use client";
var TabPanel = forwardRef((props, ref) => {
  var _a, _b, _c;
  const { as, state, className, slots, classNames, ...otherProps } = props;
  const Component = as || "div";
  const domRef = useDOMRef(ref);
  const { tabPanelProps } = $34bce698202e07cb$export$fae0121b5afe572d(props, state, domRef);
  const { focusProps, isFocused, isFocusVisible } = $f7dceffc5ad7768b$export$4e328f61c538687f();
  const selectedItem = state.selectedItem;
  const content = (_a = selectedItem == null ? void 0 : selectedItem.props) == null ? void 0 : _a.children;
  const tabPanelStyles = clsx(classNames == null ? void 0 : classNames.panel, className, (_b = selectedItem == null ? void 0 : selectedItem.props) == null ? void 0 : _b.className);
  if (!content) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    Component,
    {
      ref: domRef,
      "data-focus": isFocused,
      "data-focus-visible": isFocusVisible,
      ...$3ef42575df84b30b$export$9d1611c77c2fe928(tabPanelProps, focusProps, otherProps),
      className: (_c = slots.panel) == null ? void 0 : _c.call(slots, { class: tabPanelStyles }),
      "data-slot": "panel",
      children: content
    }
  );
});
TabPanel.displayName = "NextUI.TabPanel";
var tab_panel_default = TabPanel;

// node_modules/compute-scroll-into-view/dist/index.js
var t = (t3) => "object" == typeof t3 && null != t3 && 1 === t3.nodeType;
var e = (t3, e2) => (!e2 || "hidden" !== t3) && ("visible" !== t3 && "clip" !== t3);
var n = (t3, n2) => {
  if (t3.clientHeight < t3.scrollHeight || t3.clientWidth < t3.scrollWidth) {
    const o3 = getComputedStyle(t3, null);
    return e(o3.overflowY, n2) || e(o3.overflowX, n2) || ((t4) => {
      const e2 = ((t5) => {
        if (!t5.ownerDocument || !t5.ownerDocument.defaultView)
          return null;
        try {
          return t5.ownerDocument.defaultView.frameElement;
        } catch (t6) {
          return null;
        }
      })(t4);
      return !!e2 && (e2.clientHeight < t4.scrollHeight || e2.clientWidth < t4.scrollWidth);
    })(t3);
  }
  return false;
};
var o = (t3, e2, n2, o3, l2, r2, i, s) => r2 < t3 && i > e2 || r2 > t3 && i < e2 ? 0 : r2 <= t3 && s <= n2 || i >= e2 && s >= n2 ? r2 - t3 - o3 : i > e2 && s < n2 || r2 < t3 && s > n2 ? i - e2 + l2 : 0;
var l = (t3) => {
  const e2 = t3.parentElement;
  return null == e2 ? t3.getRootNode().host || null : e2;
};
var r = (e2, r2) => {
  var i, s, d, h;
  if ("undefined" == typeof document)
    return [];
  const { scrollMode: c, block: f, inline: u, boundary: a, skipOverflowHiddenElements: g } = r2, p = "function" == typeof a ? a : (t3) => t3 !== a;
  if (!t(e2))
    throw new TypeError("Invalid target");
  const m = document.scrollingElement || document.documentElement, w = [];
  let W = e2;
  for (; t(W) && p(W); ) {
    if (W = l(W), W === m) {
      w.push(W);
      break;
    }
    null != W && W === document.body && n(W) && !n(document.documentElement) || null != W && n(W, g) && w.push(W);
  }
  const b = null != (s = null == (i = window.visualViewport) ? void 0 : i.width) ? s : innerWidth, H = null != (h = null == (d = window.visualViewport) ? void 0 : d.height) ? h : innerHeight, { scrollX: y, scrollY: M } = window, { height: v, width: E, top: x, right: C, bottom: I, left: R } = e2.getBoundingClientRect(), { top: T, right: B, bottom: F, left: V } = ((t3) => {
    const e3 = window.getComputedStyle(t3);
    return { top: parseFloat(e3.scrollMarginTop) || 0, right: parseFloat(e3.scrollMarginRight) || 0, bottom: parseFloat(e3.scrollMarginBottom) || 0, left: parseFloat(e3.scrollMarginLeft) || 0 };
  })(e2);
  let k = "start" === f || "nearest" === f ? x - T : "end" === f ? I + F : x + v / 2 - T + F, D = "center" === u ? R + E / 2 - V + B : "end" === u ? C + B : R - V;
  const L = [];
  for (let t3 = 0; t3 < w.length; t3++) {
    const e3 = w[t3], { height: n2, width: l2, top: r3, right: i2, bottom: s2, left: d2 } = e3.getBoundingClientRect();
    if ("if-needed" === c && x >= 0 && R >= 0 && I <= H && C <= b && x >= r3 && I <= s2 && R >= d2 && C <= i2)
      return L;
    const h2 = getComputedStyle(e3), a2 = parseInt(h2.borderLeftWidth, 10), g2 = parseInt(h2.borderTopWidth, 10), p2 = parseInt(h2.borderRightWidth, 10), W2 = parseInt(h2.borderBottomWidth, 10);
    let T2 = 0, B2 = 0;
    const F2 = "offsetWidth" in e3 ? e3.offsetWidth - e3.clientWidth - a2 - p2 : 0, V2 = "offsetHeight" in e3 ? e3.offsetHeight - e3.clientHeight - g2 - W2 : 0, S = "offsetWidth" in e3 ? 0 === e3.offsetWidth ? 0 : l2 / e3.offsetWidth : 0, X = "offsetHeight" in e3 ? 0 === e3.offsetHeight ? 0 : n2 / e3.offsetHeight : 0;
    if (m === e3)
      T2 = "start" === f ? k : "end" === f ? k - H : "nearest" === f ? o(M, M + H, H, g2, W2, M + k, M + k + v, v) : k - H / 2, B2 = "start" === u ? D : "center" === u ? D - b / 2 : "end" === u ? D - b : o(y, y + b, b, a2, p2, y + D, y + D + E, E), T2 = Math.max(0, T2 + M), B2 = Math.max(0, B2 + y);
    else {
      T2 = "start" === f ? k - r3 - g2 : "end" === f ? k - s2 + W2 + V2 : "nearest" === f ? o(r3, s2, n2, g2, W2 + V2, k, k + v, v) : k - (r3 + n2 / 2) + V2 / 2, B2 = "start" === u ? D - d2 - a2 : "center" === u ? D - (d2 + l2 / 2) + F2 / 2 : "end" === u ? D - i2 + p2 + F2 : o(d2, i2, l2, a2, p2 + F2, D, D + E, E);
      const { scrollLeft: t4, scrollTop: h3 } = e3;
      T2 = 0 === X ? 0 : Math.max(0, Math.min(h3 + T2 / X, e3.scrollHeight - n2 / X + V2)), B2 = 0 === S ? 0 : Math.max(0, Math.min(t4 + B2 / S, e3.scrollWidth - l2 / S + F2)), k += h3 - T2, D += t4 - B2;
    }
    L.push({ el: e3, top: T2, left: B2 });
  }
  return L;
};

// node_modules/scroll-into-view-if-needed/dist/index.js
var o2 = (e2) => false === e2 ? { block: "end", inline: "nearest" } : ((e3) => e3 === Object(e3) && 0 !== Object.keys(e3).length)(e2) ? e2 : { block: "start", inline: "nearest" };
function t2(t3, n2) {
  if (!t3.isConnected || !((e2) => {
    let o3 = e2;
    for (; o3 && o3.parentNode; ) {
      if (o3.parentNode === document)
        return true;
      o3 = o3.parentNode instanceof ShadowRoot ? o3.parentNode.host : o3.parentNode;
    }
    return false;
  })(t3))
    return;
  if (((e2) => "object" == typeof e2 && "function" == typeof e2.behavior)(n2))
    return n2.behavior(r(t3, n2));
  const r2 = "boolean" == typeof n2 || null == n2 ? void 0 : n2.behavior;
  for (const { el: i, top: a, left: l2 } of r(t3, o2(n2)))
    i.scroll({ top: a, left: l2, behavior: r2 });
}

// node_modules/@nextui-org/use-is-mounted/dist/index.mjs
var import_react2 = __toESM(require_react(), 1);
function useIsMounted(props = {}) {
  const { rerender = false, delay = 0 } = props;
  const isMountedRef = (0, import_react2.useRef)(false);
  const [isMounted, setIsMounted] = (0, import_react2.useState)(false);
  (0, import_react2.useEffect)(() => {
    isMountedRef.current = true;
    let timer = null;
    if (rerender) {
      if (delay > 0) {
        timer = setTimeout(() => {
          setIsMounted(true);
        }, delay);
      } else {
        setIsMounted(true);
      }
    }
    return () => {
      isMountedRef.current = false;
      if (rerender) {
        setIsMounted(false);
      }
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [rerender]);
  return [(0, import_react2.useCallback)(() => isMountedRef.current, []), isMounted];
}

// node_modules/@nextui-org/tabs/dist/chunk-YDKAT3XX.mjs
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
"use client";
var Tab = forwardRef((props, ref) => {
  var _a;
  const {
    className,
    as,
    item,
    state,
    classNames,
    isDisabled: isDisabledProp,
    listRef,
    slots,
    motionProps,
    disableAnimation,
    disableCursorAnimation,
    shouldSelectOnPressUp,
    onClick,
    ...otherProps
  } = props;
  const { key } = item;
  const domRef = useDOMRef(ref);
  const Component = as || (props.href ? "a" : "button");
  const shouldFilterDOMProps = typeof Component === "string";
  const {
    tabProps,
    isSelected,
    isDisabled: isDisabledItem,
    isPressed
  } = $0175d55c2a017ebc$export$fdf4756d5b8ef90a({ key, isDisabled: isDisabledProp, shouldSelectOnPressUp }, state, domRef);
  const isDisabled = isDisabledProp || isDisabledItem;
  const { focusProps, isFocused, isFocusVisible } = $f7dceffc5ad7768b$export$4e328f61c538687f();
  const { hoverProps, isHovered } = $6179b936705e76d3$export$ae780daf29e6d456({
    isDisabled
  });
  const tabStyles = clsx(classNames == null ? void 0 : classNames.tab, className);
  const [, isMounted] = useIsMounted({
    rerender: true
  });
  const handleClick = () => {
    $ff5963eb1fccf552$export$e08e3b67e392101e(onClick, tabProps.onClick);
    if (!(domRef == null ? void 0 : domRef.current) || !(listRef == null ? void 0 : listRef.current))
      return;
    t2(domRef.current, {
      scrollMode: "if-needed",
      behavior: "smooth",
      block: "end",
      inline: "end",
      boundary: listRef == null ? void 0 : listRef.current
    });
  };
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    Component,
    {
      ref: domRef,
      "data-disabled": dataAttr(isDisabledItem),
      "data-focus": dataAttr(isFocused),
      "data-focus-visible": dataAttr(isFocusVisible),
      "data-hover": dataAttr(isHovered),
      "data-hover-unselected": dataAttr((isHovered || isPressed) && !isSelected),
      "data-pressed": dataAttr(isPressed),
      "data-selected": dataAttr(isSelected),
      "data-slot": "tab",
      ...$3ef42575df84b30b$export$9d1611c77c2fe928(
        tabProps,
        !isDisabled ? {
          ...focusProps,
          ...hoverProps
        } : {},
        filterDOMProps(otherProps, {
          enabled: shouldFilterDOMProps,
          omitPropNames: /* @__PURE__ */ new Set(["title"])
        })
      ),
      className: (_a = slots.tab) == null ? void 0 : _a.call(slots, { class: tabStyles }),
      title: otherProps == null ? void 0 : otherProps.titleValue,
      type: Component === "button" ? "button" : void 0,
      onClick: handleClick,
      children: [
        isSelected && !disableAnimation && !disableCursorAnimation && isMounted ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          motion.span,
          {
            className: slots.cursor({ class: classNames == null ? void 0 : classNames.cursor }),
            "data-slot": "cursor",
            layoutDependency: false,
            layoutId: "cursor",
            transition: {
              type: "spring",
              bounce: 0.15,
              duration: 0.5
            },
            ...motionProps
          }
        ) : null,
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "div",
          {
            className: slots.tabContent({
              class: classNames == null ? void 0 : classNames.tabContent
            }),
            "data-slot": "tabContent",
            children: item.rendered
          }
        )
      ]
    }
  );
});
Tab.displayName = "NextUI.Tab";
var tab_default = Tab;

// node_modules/@nextui-org/tabs/dist/chunk-J56CC6A2.mjs
var import_react5 = __toESM(require_react(), 1);

// node_modules/@react-stately/list/dist/import.mjs
var import_react3 = __toESM(require_react(), 1);
var $a02d57049d202695$export$d085fb9e920b5ca7 = class {
  *[Symbol.iterator]() {
    yield* this.iterable;
  }
  get size() {
    return this.keyMap.size;
  }
  getKeys() {
    return this.keyMap.keys();
  }
  getKeyBefore(key) {
    let node = this.keyMap.get(key);
    return node ? node.prevKey : null;
  }
  getKeyAfter(key) {
    let node = this.keyMap.get(key);
    return node ? node.nextKey : null;
  }
  getFirstKey() {
    return this.firstKey;
  }
  getLastKey() {
    return this.lastKey;
  }
  getItem(key) {
    return this.keyMap.get(key);
  }
  at(idx) {
    const keys = [
      ...this.getKeys()
    ];
    return this.getItem(keys[idx]);
  }
  getChildren(key) {
    let node = this.keyMap.get(key);
    return (node === null || node === void 0 ? void 0 : node.childNodes) || [];
  }
  constructor(nodes) {
    this.keyMap = /* @__PURE__ */ new Map();
    this.iterable = nodes;
    let visit = (node) => {
      this.keyMap.set(node.key, node);
      if (node.childNodes && node.type === "section")
        for (let child of node.childNodes)
          visit(child);
    };
    for (let node of nodes)
      visit(node);
    let last;
    let index = 0;
    for (let [key, node] of this.keyMap) {
      if (last) {
        last.nextKey = key;
        node.prevKey = last.key;
      } else {
        this.firstKey = key;
        node.prevKey = void 0;
      }
      if (node.type === "item")
        node.index = index++;
      last = node;
      last.nextKey = void 0;
    }
    this.lastKey = last === null || last === void 0 ? void 0 : last.key;
  }
};
function $e72dd72e1c76a225$export$2f645645f7bca764(props) {
  let { filter } = props;
  let selectionState = (0, $7af3f5b51489e0b5$export$253fe78d46329472)(props);
  let disabledKeys = (0, import_react3.useMemo)(() => props.disabledKeys ? new Set(props.disabledKeys) : /* @__PURE__ */ new Set(), [
    props.disabledKeys
  ]);
  let factory = (0, import_react3.useCallback)((nodes) => filter ? new (0, $a02d57049d202695$export$d085fb9e920b5ca7)(filter(nodes)) : new (0, $a02d57049d202695$export$d085fb9e920b5ca7)(nodes), [
    filter
  ]);
  let context = (0, import_react3.useMemo)(() => ({
    suppressTextValueWarning: props.suppressTextValueWarning
  }), [
    props.suppressTextValueWarning
  ]);
  let collection = (0, $7613b1592d41b092$export$6cd28814d92fa9c9)(props, factory, context);
  let selectionManager = (0, import_react3.useMemo)(() => new (0, $d496c0a20b6e58ec$export$6c8a5aaad13c9852)(collection, selectionState), [
    collection,
    selectionState
  ]);
  const cachedCollection = (0, import_react3.useRef)(null);
  (0, import_react3.useEffect)(() => {
    if (selectionState.focusedKey != null && !collection.getItem(selectionState.focusedKey)) {
      const startItem = cachedCollection.current.getItem(selectionState.focusedKey);
      const cachedItemNodes = [
        ...cachedCollection.current.getKeys()
      ].map((key) => {
        const itemNode = cachedCollection.current.getItem(key);
        return itemNode.type === "item" ? itemNode : null;
      }).filter((node) => node !== null);
      const itemNodes = [
        ...collection.getKeys()
      ].map((key) => {
        const itemNode = collection.getItem(key);
        return itemNode.type === "item" ? itemNode : null;
      }).filter((node) => node !== null);
      const diff = cachedItemNodes.length - itemNodes.length;
      let index = Math.min(diff > 1 ? Math.max(startItem.index - diff + 1, 0) : startItem.index, itemNodes.length - 1);
      let newNode;
      while (index >= 0) {
        if (!selectionManager.isDisabled(itemNodes[index].key)) {
          newNode = itemNodes[index];
          break;
        }
        if (index < itemNodes.length - 1)
          index++;
        else {
          if (index > startItem.index)
            index = startItem.index;
          index--;
        }
      }
      selectionState.setFocusedKey(newNode ? newNode.key : null);
    }
    cachedCollection.current = collection;
  }, [
    collection,
    selectionManager,
    selectionState,
    selectionState.focusedKey
  ]);
  return {
    collection,
    disabledKeys,
    selectionManager
  };
}
function $a0d645289fe9b86b$export$e7f05e985daf4b5f(props) {
  var _props_defaultSelectedKey;
  let [selectedKey, setSelectedKey] = (0, $458b0a5536c1a7cf$export$40bfa8c7b0832715)(props.selectedKey, (_props_defaultSelectedKey = props.defaultSelectedKey) !== null && _props_defaultSelectedKey !== void 0 ? _props_defaultSelectedKey : null, props.onSelectionChange);
  let selectedKeys = (0, import_react3.useMemo)(() => selectedKey != null ? [
    selectedKey
  ] : [], [
    selectedKey
  ]);
  let { collection, disabledKeys, selectionManager } = (0, $e72dd72e1c76a225$export$2f645645f7bca764)({
    ...props,
    selectionMode: "single",
    disallowEmptySelection: true,
    allowDuplicateSelectionEvents: true,
    selectedKeys,
    onSelectionChange: (keys) => {
      var _keys_values_next_value;
      let key = (_keys_values_next_value = keys.values().next().value) !== null && _keys_values_next_value !== void 0 ? _keys_values_next_value : null;
      if (key === selectedKey && props.onSelectionChange)
        props.onSelectionChange(key);
      setSelectedKey(key);
    }
  });
  let selectedItem = selectedKey != null ? collection.getItem(selectedKey) : null;
  return {
    collection,
    disabledKeys,
    selectionManager,
    selectedKey,
    setSelectedKey,
    selectedItem
  };
}

// node_modules/@react-stately/tabs/dist/import.mjs
var import_react4 = __toESM(require_react(), 1);
function $76f919a04c5a7d14$export$4ba071daf4e486(props) {
  var _props_defaultSelectedKey;
  let state = (0, $a0d645289fe9b86b$export$e7f05e985daf4b5f)({
    ...props,
    suppressTextValueWarning: true,
    defaultSelectedKey: (_props_defaultSelectedKey = props.defaultSelectedKey) !== null && _props_defaultSelectedKey !== void 0 ? _props_defaultSelectedKey : $76f919a04c5a7d14$var$findDefaultSelectedKey(props.collection, props.disabledKeys ? new Set(props.disabledKeys) : /* @__PURE__ */ new Set())
  });
  let { selectionManager, collection, selectedKey: currentSelectedKey } = state;
  let lastSelectedKey = (0, import_react4.useRef)(currentSelectedKey);
  (0, import_react4.useEffect)(() => {
    let selectedKey = currentSelectedKey;
    if (selectionManager.isEmpty || !collection.getItem(selectedKey)) {
      selectedKey = $76f919a04c5a7d14$var$findDefaultSelectedKey(collection, state.disabledKeys);
      if (selectedKey != null)
        selectionManager.setSelectedKeys([
          selectedKey
        ]);
    }
    if (selectedKey != null && selectionManager.focusedKey == null || !selectionManager.isFocused && selectedKey !== lastSelectedKey.current)
      selectionManager.setFocusedKey(selectedKey);
    lastSelectedKey.current = selectedKey;
  });
  return {
    ...state,
    isDisabled: props.isDisabled || false
  };
}
function $76f919a04c5a7d14$var$findDefaultSelectedKey(collection, disabledKeys) {
  let selectedKey = null;
  if (collection) {
    selectedKey = collection.getFirstKey();
    while (disabledKeys.has(selectedKey) && selectedKey !== collection.getLastKey())
      selectedKey = collection.getKeyAfter(selectedKey);
    if (disabledKeys.has(selectedKey) && selectedKey === collection.getLastKey())
      selectedKey = collection.getFirstKey();
  }
  return selectedKey;
}

// node_modules/@nextui-org/tabs/dist/chunk-J56CC6A2.mjs
"use client";
function useTabs(originalProps) {
  const [props, variantProps] = mapPropsVariants(originalProps, tabs.variantKeys);
  const {
    ref,
    as,
    className,
    classNames,
    children,
    disableCursorAnimation,
    shouldSelectOnPressUp = true,
    motionProps,
    ...otherProps
  } = props;
  const Component = as || "div";
  const shouldFilterDOMProps = typeof Component === "string";
  const domRef = useDOMRef(ref);
  const state = $76f919a04c5a7d14$export$4ba071daf4e486({
    children,
    ...otherProps
  });
  const { tabListProps } = $58d314389b21fa3f$export$773e389e644c5874(otherProps, state, domRef);
  const slots = (0, import_react5.useMemo)(
    () => tabs({
      ...variantProps,
      className
    }),
    [...Object.values(variantProps), className]
  );
  const baseStyles = clsx(classNames == null ? void 0 : classNames.base, className);
  const values = (0, import_react5.useMemo)(
    () => ({
      state,
      slots,
      classNames,
      motionProps,
      listRef: domRef,
      shouldSelectOnPressUp,
      disableCursorAnimation,
      isDisabled: originalProps == null ? void 0 : originalProps.isDisabled,
      disableAnimation: originalProps == null ? void 0 : originalProps.disableAnimation
    }),
    [
      state,
      slots,
      domRef,
      motionProps,
      disableCursorAnimation,
      shouldSelectOnPressUp,
      originalProps == null ? void 0 : originalProps.disableAnimation,
      originalProps == null ? void 0 : originalProps.isDisabled,
      classNames
    ]
  );
  const getBaseProps = (0, import_react5.useCallback)(
    (props2) => ({
      "data-slot": "base",
      className: slots.base({ class: clsx(baseStyles, props2 == null ? void 0 : props2.className) }),
      ...$3ef42575df84b30b$export$9d1611c77c2fe928(
        filterDOMProps(otherProps, {
          enabled: shouldFilterDOMProps
        }),
        props2
      )
    }),
    [baseStyles, otherProps, slots]
  );
  const getTabListProps = (0, import_react5.useCallback)(
    (props2) => ({
      ref: domRef,
      "data-slot": "tabList",
      className: slots.tabList({ class: clsx(classNames == null ? void 0 : classNames.tabList, props2 == null ? void 0 : props2.className) }),
      ...$3ef42575df84b30b$export$9d1611c77c2fe928(tabListProps, props2)
    }),
    [domRef, tabListProps, classNames, slots]
  );
  return {
    Component,
    domRef,
    state,
    values,
    getBaseProps,
    getTabListProps
  };
}

// node_modules/@nextui-org/tabs/dist/chunk-Q33IKVZ4.mjs
var import_react6 = __toESM(require_react(), 1);
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
"use client";
function Tabs(props, ref) {
  var _a;
  const { Component, values, state, getBaseProps, getTabListProps } = useTabs({
    ...props,
    ref
  });
  const layoutId = (0, import_react6.useId)();
  const layoutGroupEnabled = !props.disableAnimation && !props.disableCursorAnimation;
  const tabsProps = {
    state,
    listRef: values.listRef,
    slots: values.slots,
    classNames: values.classNames,
    isDisabled: values.isDisabled,
    motionProps: values.motionProps,
    disableAnimation: values.disableAnimation,
    shouldSelectOnPressUp: values.shouldSelectOnPressUp,
    disableCursorAnimation: values.disableCursorAnimation
  };
  const tabs2 = [...state.collection].map((item) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(tab_default, { item, ...tabsProps, ...item.props }, item.key));
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { ...getBaseProps(), children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Component, { ...getTabListProps(), children: layoutGroupEnabled ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(LayoutGroup, { id: layoutId, children: tabs2 }) : tabs2 }) }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      tab_panel_default,
      {
        classNames: values.classNames,
        slots: values.slots,
        state: values.state
      },
      (_a = state.selectedItem) == null ? void 0 : _a.key
    )
  ] });
}
var tabs_default = forwardRef(Tabs);
Tabs.displayName = "NextUI.Tabs";

// node_modules/@nextui-org/tabs/dist/chunk-FXLYF44B.mjs
"use client";
var TabItemBase = $c1d7fb2ec91bae71$export$6d08773d2e66f8f2;
var tab_item_base_default = TabItemBase;

// node_modules/@nextui-org/tabs/dist/index.mjs
"use client";

// app/components/forms/schemas/index.tsx
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\forms\\schemas\\index.tsx"
  );
  import.meta.hot.lastModified = "1703914163461.7917";
}
var UserJobSchema = z.object({
  company: z.string(),
  title: z.string(),
  location: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  responsibilities: z.string(),
  achievements: z.string()
});
var UpdateJobSchema = UserJobSchema.extend({
  id: z.number()
});
var UpdateUserSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  profession: z.string().optional(),
  location: z.string().optional(),
  phoneNumber: z.string().optional(),
  linkedIn: z.string().optional(),
  github: z.string().optional(),
  languages: z.array(z.string()).optional(),
  libraries: z.array(z.string()).optional(),
  frameworks: z.array(z.string()).optional(),
  tools: z.array(z.string()).optional()
});
var AuthSchema = z.object({
  email: z.string().email(),
  password: z.string()
});

export {
  tabs_default,
  tab_item_base_default,
  UserJobSchema,
  AuthSchema
};
//# sourceMappingURL=/build/_shared/chunk-25U62PYY.js.map
