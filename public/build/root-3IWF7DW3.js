import {
  $40df3f8667284809$export$d55e7ee900f34e93,
  $fc909762b330b746$export$61c6a8c84e605fb6,
  RemoveScrollBar,
  TRANSITION_VARIANTS,
  __assign,
  __rest,
  __spreadArray,
  createSidecarMedium,
  divider_default,
  exportSidecar,
  fullWidthClassName,
  init_tslib_es6,
  styleSingleton,
  useMergeRefs,
  useSafeLayoutEffect,
  zeroRightClassName
} from "/build/_shared/chunk-LJ55JIBM.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  ariaHideOutside,
  getArrowPlacement,
  getShouldUseAxisPlacement,
  getTransformOrigins,
  toReactAriaPlacement
} from "/build/_shared/chunk-VMRQGUXU.js";
import {
  $453cc9f0df89c0a5$export$77d5aafae4e095b2,
  $7613b1592d41b092$export$6cd28814d92fa9c9,
  $7af3f5b51489e0b5$export$253fe78d46329472,
  $880e95eb8b93ba9a$export$ecf600387e221c37,
  $982254629710d113$export$b95089534ab7c1fd,
  $c1d7fb2ec91bae71$export$6d08773d2e66f8f2,
  $d496c0a20b6e58ec$export$6c8a5aaad13c9852
} from "/build/_shared/chunk-RR5CIDIT.js";
import {
  require_auth
} from "/build/_shared/chunk-JSCKBFOW.js";
import {
  $18f2051aff69b9bf$export$43bb16f9c6d9e3f7,
  $2a41e45df1593e64$export$d39e1813b3bdd0e1,
  $337b884510726a0d$export$c6fdb837b070b4ff,
  $3ef42575df84b30b$export$9d1611c77c2fe928,
  $458b0a5536c1a7cf$export$40bfa8c7b0832715,
  $46d819fcbaf35654$export$8f71654801c2f7cd,
  $507fabe10e71c6fb$export$b9b3dfddab17db27,
  $5dc95899b306f630$export$c9058316764c140e,
  $5e3802645cc19319$export$1c3ebcada18427bf,
  $6179b936705e76d3$export$ae780daf29e6d456,
  $628037886ba31236$export$f9d5c8beee7d008d,
  $65484d02dcb7eb3e$export$457c3d6518dd4c6f,
  $6a99195332edec8b$export$80f3e147d781571c,
  $86ea4cb521eb2e37$export$2317d149ed6f78c4,
  $8a26561d2877236e$export$c24ed0104d07eab9,
  $8ae05eaa5c114e9c$export$7f54fc3180508a52,
  $9bf71ea28793e738$export$20e40289641fbbb6,
  $a11501f3d1d39e6c$export$ea8f71083e90600f,
  $b5e257d569688ac6$export$535bd6ca7f90a273,
  $bdb11010cef70236$export$b4cc09c592e8fdb8,
  $bdb11010cef70236$export$f680877a34711e37,
  $ea8dcbcb9ea1b556$export$9a302a45f65d0572,
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c,
  $f6c31cce2adf654f$export$45712eceda6fad21,
  $f7dceffc5ad7768b$export$4e328f61c538687f,
  $fca6afa0e843324b$export$f12b703ca79dfbb1,
  $ff5963eb1fccf552$export$e08e3b67e392101e,
  AnimatePresence,
  NextUIProvider,
  avatar,
  button_default,
  clsx,
  createContext2,
  dataAttr,
  dropdown,
  filterDOMProps,
  forwardRef,
  image,
  mapPropsVariants,
  menu,
  menuItem,
  menuSection,
  mergeRefs,
  motion,
  pickChildren,
  popover,
  removeEvents,
  safeText,
  useAriaButton,
  useDOMRef,
  usePress,
  user
} from "/build/_shared/chunk-XEG4DGED.js";
import {
  require_jsx_runtime
} from "/build/_shared/chunk-NMZL6IDN.js";
import {
  Form,
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useNavigate
} from "/build/_shared/chunk-B47IEXX4.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-U53SBQSA.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// empty-module:./utils/prisma.server
var require_prisma = __commonJS({
  "empty-module:./utils/prisma.server"(exports, module) {
    module.exports = {};
  }
});

// empty-module:~/utils/openai.server
var require_openai = __commonJS({
  "empty-module:~/utils/openai.server"(exports, module) {
    module.exports = {};
  }
});

// app/root.tsx
var import_node = __toESM(require_node(), 1);

// app/global.css
var global_default = "/build/_assets/global-S6JEC6YO.css";

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-SJF7CM32.css";

// app/root.tsx
var import_prisma = __toESM(require_prisma(), 1);

// node_modules/@react-stately/tree/dist/import.mjs
var import_react = __toESM(require_react(), 1);
var $05ca4cd7c4a5a999$export$863faf230ee2118a = class {
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
  constructor(nodes, { expandedKeys } = {}) {
    this.keyMap = /* @__PURE__ */ new Map();
    this.iterable = nodes;
    expandedKeys = expandedKeys || /* @__PURE__ */ new Set();
    let visit = (node) => {
      this.keyMap.set(node.key, node);
      if (node.childNodes && (node.type === "section" || expandedKeys.has(node.key)))
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
function $875d6693e12af071$export$728d6ba534403756(props) {
  let [expandedKeys, setExpandedKeys] = (0, $458b0a5536c1a7cf$export$40bfa8c7b0832715)(props.expandedKeys ? new Set(props.expandedKeys) : void 0, props.defaultExpandedKeys ? new Set(props.defaultExpandedKeys) : /* @__PURE__ */ new Set(), props.onExpandedChange);
  let selectionState = (0, $7af3f5b51489e0b5$export$253fe78d46329472)(props);
  let disabledKeys = (0, import_react.useMemo)(() => props.disabledKeys ? new Set(props.disabledKeys) : /* @__PURE__ */ new Set(), [
    props.disabledKeys
  ]);
  let tree = (0, $7613b1592d41b092$export$6cd28814d92fa9c9)(props, (0, import_react.useCallback)((nodes) => new (0, $05ca4cd7c4a5a999$export$863faf230ee2118a)(nodes, {
    expandedKeys
  }), [
    expandedKeys
  ]), null);
  (0, import_react.useEffect)(() => {
    if (selectionState.focusedKey != null && !tree.getItem(selectionState.focusedKey))
      selectionState.setFocusedKey(null);
  }, [
    tree,
    selectionState.focusedKey
  ]);
  let onToggle = (key) => {
    setExpandedKeys($875d6693e12af071$var$toggleKey(expandedKeys, key));
  };
  return {
    collection: tree,
    expandedKeys,
    disabledKeys,
    toggleKey: onToggle,
    setExpandedKeys,
    selectionManager: new (0, $d496c0a20b6e58ec$export$6c8a5aaad13c9852)(tree, selectionState)
  };
}
function $875d6693e12af071$var$toggleKey(set, key) {
  let res = new Set(set);
  if (res.has(key))
    res.delete(key);
  else
    res.add(key);
  return res;
}

// node_modules/@nextui-org/avatar/dist/chunk-25E6VDTZ.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
"use client";
var AvatarIcon = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    "aria-hidden": "true",
    fill: "none",
    height: "80%",
    role: "presentation",
    viewBox: "0 0 24 24",
    width: "80%",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "path",
        {
          d: "M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "path",
        {
          d: "M17.0809 14.1489C14.2909 12.2889 9.74094 12.2889 6.93094 14.1489C5.66094 14.9989 4.96094 16.1489 4.96094 17.3789C4.96094 18.6089 5.66094 19.7489 6.92094 20.5889C8.32094 21.5289 10.1609 21.9989 12.0009 21.9989C13.8409 21.9989 15.6809 21.5289 17.0809 20.5889C18.3409 19.7389 19.0409 18.5989 19.0409 17.3589C19.0309 16.1289 18.3409 14.9889 17.0809 14.1489Z",
          fill: "currentColor"
        }
      )
    ]
  }
);

// node_modules/@nextui-org/avatar/dist/chunk-PM5WBSHT.mjs
"use client";
var [AvatarGroupProvider, useAvatarGroupContext] = createContext2({
  name: "AvatarGroupContext",
  strict: false
});

// node_modules/@nextui-org/avatar/dist/chunk-KTES4AK4.mjs
var import_react3 = __toESM(require_react(), 1);

// node_modules/@nextui-org/use-image/dist/index.mjs
var import_react2 = __toESM(require_react(), 1);
function useImage(props = {}) {
  const { loading, src, srcSet, onLoad, onError, crossOrigin, sizes, ignoreFallback } = props;
  const [status, setStatus] = (0, import_react2.useState)("pending");
  (0, import_react2.useEffect)(() => {
    setStatus(src ? "loading" : "pending");
  }, [src]);
  const imageRef = (0, import_react2.useRef)();
  const load = (0, import_react2.useCallback)(() => {
    if (!src)
      return;
    flush();
    const img = new Image();
    img.src = src;
    if (crossOrigin)
      img.crossOrigin = crossOrigin;
    if (srcSet)
      img.srcset = srcSet;
    if (sizes)
      img.sizes = sizes;
    if (loading)
      img.loading = loading;
    img.onload = (event) => {
      flush();
      setStatus("loaded");
      onLoad == null ? void 0 : onLoad(event);
    };
    img.onerror = (error) => {
      flush();
      setStatus("failed");
      onError == null ? void 0 : onError(error);
    };
    imageRef.current = img;
  }, [src, crossOrigin, srcSet, sizes, onLoad, onError, loading]);
  const flush = () => {
    if (imageRef.current) {
      imageRef.current.onload = null;
      imageRef.current.onerror = null;
      imageRef.current = null;
    }
  };
  useSafeLayoutEffect(() => {
    if (ignoreFallback)
      return void 0;
    if (status === "loading") {
      load();
    }
    return () => {
      flush();
    };
  }, [status, load, ignoreFallback]);
  return ignoreFallback ? "loaded" : status;
}

// node_modules/@nextui-org/avatar/dist/chunk-KTES4AK4.mjs
"use client";
function useAvatar(props = {}) {
  var _a, _b, _c4, _d, _e;
  const groupContext = useAvatarGroupContext();
  const isInGroup = !!groupContext;
  const {
    as,
    ref,
    src,
    name,
    icon,
    classNames,
    fallback,
    alt = name || "avatar",
    imgRef: imgRefProp,
    color = (_a = groupContext == null ? void 0 : groupContext.color) != null ? _a : "default",
    radius = (_b = groupContext == null ? void 0 : groupContext.radius) != null ? _b : "full",
    size = (_c4 = groupContext == null ? void 0 : groupContext.size) != null ? _c4 : "md",
    isBordered = (_d = groupContext == null ? void 0 : groupContext.isBordered) != null ? _d : false,
    isDisabled = (_e = groupContext == null ? void 0 : groupContext.isDisabled) != null ? _e : false,
    isFocusable = false,
    getInitials = safeText,
    ignoreFallback = false,
    showFallback: showFallbackProp = false,
    ImgComponent = "img",
    imgProps,
    className,
    onError,
    ...otherProps
  } = props;
  const Component = as || "span";
  const domRef = useDOMRef(ref);
  const imgRef = useDOMRef(imgRefProp);
  const { isFocusVisible, isFocused, focusProps } = $f7dceffc5ad7768b$export$4e328f61c538687f();
  const { isHovered, hoverProps } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled });
  const imageStatus = useImage({ src, onError, ignoreFallback });
  const isImgLoaded = imageStatus === "loaded";
  const showFallback = (!src || !isImgLoaded) && showFallbackProp;
  const slots = (0, import_react3.useMemo)(
    () => {
      var _a2;
      return avatar({
        color,
        radius,
        size,
        isBordered,
        isDisabled,
        isInGroup,
        isInGridGroup: (_a2 = groupContext == null ? void 0 : groupContext.isGrid) != null ? _a2 : false
      });
    },
    [color, radius, size, isBordered, isDisabled, isInGroup, groupContext == null ? void 0 : groupContext.isGrid]
  );
  const baseStyles = clsx(classNames == null ? void 0 : classNames.base, className);
  const canBeFocused = (0, import_react3.useMemo)(() => {
    return isFocusable || as === "button";
  }, [isFocusable, as]);
  const getAvatarProps = (0, import_react3.useCallback)(
    (props2 = {}) => ({
      ref: domRef,
      tabIndex: canBeFocused ? 0 : -1,
      "data-hover": dataAttr(isHovered),
      "data-focus": dataAttr(isFocused),
      "data-focus-visible": dataAttr(isFocusVisible),
      className: slots.base({
        class: clsx(baseStyles, props2 == null ? void 0 : props2.className)
      }),
      ...$3ef42575df84b30b$export$9d1611c77c2fe928(otherProps, hoverProps, canBeFocused ? focusProps : {})
    }),
    [canBeFocused, slots, baseStyles, focusProps, otherProps]
  );
  const getImageProps = (0, import_react3.useCallback)(
    (props2 = {}) => ({
      ref: imgRef,
      src,
      "data-loaded": dataAttr(isImgLoaded),
      className: slots.img({ class: classNames == null ? void 0 : classNames.img }),
      ...$3ef42575df84b30b$export$9d1611c77c2fe928(imgProps, props2)
    }),
    [slots, isImgLoaded, imgProps, src, imgRef]
  );
  return {
    Component,
    ImgComponent,
    src,
    alt,
    icon,
    name,
    imgRef,
    slots,
    classNames,
    fallback,
    isImgLoaded,
    showFallback,
    ignoreFallback,
    getInitials,
    getAvatarProps,
    getImageProps
  };
}

// node_modules/@nextui-org/avatar/dist/chunk-XBMXQVV7.mjs
var import_react4 = __toESM(require_react(), 1);
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
"use client";
var Avatar = forwardRef((props, ref) => {
  const {
    Component,
    ImgComponent,
    src,
    icon = /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(AvatarIcon, {}),
    alt,
    classNames,
    slots,
    name,
    showFallback,
    fallback: fallbackComponent,
    getInitials,
    getAvatarProps,
    getImageProps
  } = useAvatar({
    ...props,
    ref
  });
  const fallback = (0, import_react4.useMemo)(() => {
    if (!showFallback && src)
      return null;
    if (fallbackComponent) {
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { "aria-label": alt, className: slots.fallback({ class: classNames == null ? void 0 : classNames.fallback }), role: "img", children: fallbackComponent });
    }
    return name ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { "aria-label": alt, className: slots.name({ class: classNames == null ? void 0 : classNames.name }), role: "img", children: getInitials(name) }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { "aria-label": alt, className: slots.icon({ class: classNames == null ? void 0 : classNames.icon }), role: "img", children: icon });
  }, [showFallback, src, fallbackComponent, name, classNames]);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(Component, { ...getAvatarProps(), children: [
    src && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ImgComponent, { ...getImageProps(), alt }),
    fallback
  ] });
});
Avatar.displayName = "NextUI.Avatar";
var avatar_default = Avatar;

// node_modules/@nextui-org/avatar/dist/index.mjs
"use client";

// node_modules/@nextui-org/user/dist/chunk-WWHWU6GY.mjs
var import_react5 = __toESM(require_react(), 1);
"use client";
function useUser(props) {
  const {
    as,
    ref,
    name,
    description,
    className,
    classNames,
    isFocusable = false,
    avatarProps: userAvatarProps = {},
    ...otherProps
  } = props;
  const avatarProps = {
    isFocusable: false,
    name: typeof name === "string" ? name : void 0,
    ...userAvatarProps
  };
  const Component = as || "div";
  const shouldFilterDOMProps = typeof Component === "string";
  const domRef = useDOMRef(ref);
  const { isFocusVisible, isFocused, focusProps } = $f7dceffc5ad7768b$export$4e328f61c538687f({});
  const canBeFocused = (0, import_react5.useMemo)(() => {
    return isFocusable || as === "button";
  }, [isFocusable, as]);
  const slots = (0, import_react5.useMemo)(() => user(), []);
  const baseStyles = clsx(classNames == null ? void 0 : classNames.base, className);
  const getUserProps = (0, import_react5.useCallback)(
    () => ({
      ref: domRef,
      tabIndex: canBeFocused ? 0 : -1,
      "data-focus-visible": dataAttr(isFocusVisible),
      "data-focus": dataAttr(isFocused),
      className: slots.base({
        class: baseStyles
      }),
      ...$3ef42575df84b30b$export$9d1611c77c2fe928(
        filterDOMProps(otherProps, {
          enabled: shouldFilterDOMProps
        }),
        canBeFocused ? focusProps : {}
      )
    }),
    [canBeFocused, slots, baseStyles, focusProps, otherProps]
  );
  return {
    Component,
    className,
    slots,
    name,
    description,
    classNames,
    baseStyles,
    avatarProps,
    getUserProps
  };
}

// node_modules/@nextui-org/user/dist/chunk-RE3ZDKCF.mjs
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
"use client";
var User = forwardRef((props, ref) => {
  const { Component, name, slots, classNames, description, avatarProps, getUserProps } = useUser({
    ...props,
    ref
  });
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(Component, { ...getUserProps(), children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(avatar_default, { ...avatarProps }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: slots.wrapper({ class: classNames == null ? void 0 : classNames.wrapper }), children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: slots.name({ class: classNames == null ? void 0 : classNames.name }), children: name }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: slots.description({ class: classNames == null ? void 0 : classNames.description }), children: description })
    ] })
  ] });
});
User.displayName = "NextUI.User";
var user_default = User;

// node_modules/@nextui-org/user/dist/index.mjs
"use client";

// node_modules/@nextui-org/popover/dist/chunk-JGMU3RCI.mjs
var import_react6 = __toESM(require_react(), 1);
"use client";
function useReactAriaPopover(props, state) {
  const {
    triggerRef,
    popoverRef,
    showArrow,
    offset = 7,
    crossOffset = 0,
    scrollRef,
    shouldFlip,
    boundaryElement,
    shouldCloseOnBlur = true,
    placement: placementProp = "top",
    containerPadding,
    shouldCloseOnInteractOutside,
    isNonModal: isNonModalProp,
    isKeyboardDismissDisabled,
    ...otherProps
  } = props;
  const isNonModal = isNonModalProp || true;
  const { overlayProps, underlayProps } = $a11501f3d1d39e6c$export$ea8f71083e90600f(
    {
      isOpen: state.isOpen,
      onClose: state.close,
      shouldCloseOnBlur,
      isDismissable: true,
      isKeyboardDismissDisabled,
      shouldCloseOnInteractOutside: shouldCloseOnInteractOutside ? shouldCloseOnInteractOutside : (element) => {
        let trigger = triggerRef == null ? void 0 : triggerRef.current;
        return !trigger || !trigger.contains(element);
      }
    },
    popoverRef
  );
  const {
    overlayProps: positionProps,
    arrowProps,
    placement
  } = $2a41e45df1593e64$export$d39e1813b3bdd0e1({
    ...otherProps,
    shouldFlip,
    crossOffset,
    targetRef: triggerRef,
    overlayRef: popoverRef,
    isOpen: state.isOpen,
    scrollRef,
    boundaryElement,
    containerPadding,
    placement: toReactAriaPlacement(placementProp),
    offset: showArrow ? offset + 3 : offset,
    onClose: () => {
    }
  });
  (0, import_react6.useEffect)(() => {
    if (state.isOpen && !isNonModal && popoverRef.current) {
      return ariaHideOutside([popoverRef.current]);
    }
  }, [isNonModal, state.isOpen, popoverRef]);
  return {
    popoverProps: $3ef42575df84b30b$export$9d1611c77c2fe928(overlayProps, positionProps),
    arrowProps,
    underlayProps,
    placement
  };
}

// node_modules/@nextui-org/popover/dist/chunk-3YBC73XM.mjs
var import_react7 = __toESM(require_react(), 1);
var import_react8 = __toESM(require_react(), 1);
"use client";
function usePopover(originalProps) {
  var _a, _b;
  const [props, variantProps] = mapPropsVariants(originalProps, popover.variantKeys);
  const {
    as,
    children,
    ref,
    state: stateProp,
    triggerRef: triggerRefProp,
    scrollRef,
    defaultOpen,
    onOpenChange,
    isOpen: isOpenProp,
    isNonModal = true,
    shouldFlip = true,
    containerPadding = 12,
    shouldBlockScroll = false,
    shouldCloseOnBlur,
    portalContainer,
    placement: placementProp = "top",
    triggerType = "dialog",
    showArrow = false,
    offset = 7,
    crossOffset = 0,
    boundaryElement,
    isKeyboardDismissDisabled,
    shouldCloseOnInteractOutside,
    motionProps,
    className,
    classNames,
    onClose,
    ...otherProps
  } = props;
  const Component = as || "div";
  const domRef = useDOMRef(ref);
  const domTriggerRef = (0, import_react8.useRef)(null);
  const wasTriggerPressedRef = (0, import_react8.useRef)(false);
  const triggerRef = triggerRefProp || domTriggerRef;
  const disableAnimation = (_a = originalProps.disableAnimation) != null ? _a : false;
  const innerState = $fc909762b330b746$export$61c6a8c84e605fb6({
    isOpen: isOpenProp,
    defaultOpen,
    onOpenChange: (isOpen) => {
      onOpenChange == null ? void 0 : onOpenChange(isOpen);
      if (!isOpen) {
        onClose == null ? void 0 : onClose();
      }
    }
  });
  const state = stateProp || innerState;
  const {
    popoverProps,
    underlayProps,
    placement: ariaPlacement
  } = useReactAriaPopover(
    {
      triggerRef,
      isNonModal,
      popoverRef: domRef,
      placement: placementProp,
      offset,
      scrollRef,
      shouldCloseOnBlur,
      boundaryElement,
      crossOffset,
      shouldFlip,
      containerPadding,
      isKeyboardDismissDisabled,
      shouldCloseOnInteractOutside
    },
    state
  );
  const { triggerProps } = $628037886ba31236$export$f9d5c8beee7d008d({ type: triggerType }, state, triggerRef);
  const { isFocusVisible, isFocused, focusProps } = $f7dceffc5ad7768b$export$4e328f61c538687f();
  const slots = (0, import_react8.useMemo)(
    () => popover({
      ...variantProps
    }),
    [...Object.values(variantProps)]
  );
  const baseStyles = clsx(classNames == null ? void 0 : classNames.base, className);
  const getPopoverProps = (props2 = {}) => ({
    ref: domRef,
    ...$3ef42575df84b30b$export$9d1611c77c2fe928(popoverProps, otherProps, props2),
    style: $3ef42575df84b30b$export$9d1611c77c2fe928(popoverProps.style, otherProps.style, props2.style)
  });
  const getDialogProps = (props2 = {}) => ({
    "data-slot": "base",
    "data-open": dataAttr(state.isOpen),
    "data-focus": dataAttr(isFocused),
    "data-arrow": dataAttr(showArrow),
    "data-focus-visible": dataAttr(isFocusVisible),
    "data-placement": getArrowPlacement(ariaPlacement, placementProp),
    ...$3ef42575df84b30b$export$9d1611c77c2fe928(focusProps, props2),
    className: slots.base({ class: clsx(baseStyles) }),
    style: {
      outline: "none"
    }
  });
  const getContentProps = (0, import_react8.useCallback)(
    (props2 = {}) => ({
      "data-slot": "content",
      "data-open": dataAttr(state.isOpen),
      "data-arrow": dataAttr(showArrow),
      "data-placement": getArrowPlacement(ariaPlacement, placementProp),
      className: slots.content({ class: clsx(classNames == null ? void 0 : classNames.content, props2.className) })
    }),
    [slots, state.isOpen, showArrow, ariaPlacement, placementProp, classNames]
  );
  const placement = (0, import_react8.useMemo)(
    () => getShouldUseAxisPlacement(ariaPlacement, placementProp) ? ariaPlacement : placementProp,
    [ariaPlacement, placementProp]
  );
  const onPress = (0, import_react8.useCallback)(
    (e) => {
      var _a2;
      let pressTimer;
      if (e.pointerType === "touch" && ((originalProps == null ? void 0 : originalProps.backdrop) === "blur" || (originalProps == null ? void 0 : originalProps.backdrop) === "opaque")) {
        pressTimer = setTimeout(() => {
          wasTriggerPressedRef.current = true;
        }, 100);
      } else {
        wasTriggerPressedRef.current = true;
      }
      (_a2 = triggerProps.onPress) == null ? void 0 : _a2.call(triggerProps, e);
      return () => {
        clearTimeout(pressTimer);
      };
    },
    [triggerProps == null ? void 0 : triggerProps.onPress]
  );
  const getTriggerProps = (0, import_react8.useCallback)(
    (props2 = {}, _ref = null) => {
      return {
        "data-slot": "trigger",
        "aria-haspopup": "dialog",
        ...$3ef42575df84b30b$export$9d1611c77c2fe928(triggerProps, props2),
        onPress,
        className: slots.trigger({ class: clsx(classNames == null ? void 0 : classNames.trigger, props2.className) }),
        ref: $5dc95899b306f630$export$c9058316764c140e(_ref, triggerRef)
      };
    },
    [state, triggerProps, onPress, triggerRef]
  );
  const getBackdropProps = (0, import_react8.useCallback)(
    (props2 = {}) => ({
      "data-slot": "backdrop",
      className: slots.backdrop({ class: classNames == null ? void 0 : classNames.backdrop }),
      onClick: (e) => {
        if (!wasTriggerPressedRef.current) {
          e.preventDefault();
          return;
        }
        state.close();
        wasTriggerPressedRef.current = false;
      },
      ...underlayProps,
      ...props2
    }),
    [slots, state.isOpen, classNames, underlayProps]
  );
  (0, import_react7.useEffect)(() => {
    if (state.isOpen && (domRef == null ? void 0 : domRef.current)) {
      return $5e3802645cc19319$export$1c3ebcada18427bf([domRef == null ? void 0 : domRef.current]);
    }
  }, [state.isOpen, domRef]);
  return {
    state,
    Component,
    children,
    classNames,
    showArrow,
    triggerRef,
    placement,
    isNonModal,
    popoverRef: domRef,
    portalContainer,
    isOpen: state.isOpen,
    onClose: state.close,
    disableAnimation,
    shouldBlockScroll,
    backdrop: (_b = originalProps.backdrop) != null ? _b : "transparent",
    motionProps,
    getBackdropProps,
    getPopoverProps,
    getTriggerProps,
    getDialogProps,
    getContentProps
  };
}

// node_modules/@nextui-org/popover/dist/chunk-SQ3I4X62.mjs
"use client";
var [PopoverProvider, usePopoverContext] = createContext2({
  name: "PopoverContext",
  errorMessage: "usePopoverContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Popover />`"
});

// node_modules/@nextui-org/popover/dist/chunk-ARECNDSB.mjs
var import_react9 = __toESM(require_react(), 1);

// node_modules/@nextui-org/popover/node_modules/react-remove-scroll/dist/es2015/Combination.js
init_tslib_es6();
var React3 = __toESM(require_react());

// node_modules/@nextui-org/popover/node_modules/react-remove-scroll/dist/es2015/UI.js
init_tslib_es6();
var React = __toESM(require_react());

// node_modules/@nextui-org/popover/node_modules/react-remove-scroll/dist/es2015/medium.js
var effectCar = createSidecarMedium();

// node_modules/@nextui-org/popover/node_modules/react-remove-scroll/dist/es2015/UI.js
var nothing = function() {
  return;
};
var RemoveScroll = React.forwardRef(function(props, parentRef) {
  var ref = React.useRef(null);
  var _a = React.useState({
    onScrollCapture: nothing,
    onWheelCapture: nothing,
    onTouchMoveCapture: nothing
  }), callbacks = _a[0], setCallbacks = _a[1];
  var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? "div" : _b, gapMode = props.gapMode, rest = __rest(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]);
  var SideCar = sideCar;
  var containerRef = useMergeRefs([ref, parentRef]);
  var containerProps = __assign(__assign({}, rest), callbacks);
  return React.createElement(
    React.Fragment,
    null,
    enabled && React.createElement(SideCar, { sideCar: effectCar, removeScrollBar, shards, noIsolation, inert, setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref, gapMode }),
    forwardProps ? React.cloneElement(React.Children.only(children), __assign(__assign({}, containerProps), { ref: containerRef })) : React.createElement(Container, __assign({}, containerProps, { className, ref: containerRef }), children)
  );
});
RemoveScroll.defaultProps = {
  enabled: true,
  removeScrollBar: true,
  inert: false
};
RemoveScroll.classNames = {
  fullWidth: fullWidthClassName,
  zeroRight: zeroRightClassName
};

// node_modules/@nextui-org/popover/node_modules/react-remove-scroll/dist/es2015/SideEffect.js
init_tslib_es6();
var React2 = __toESM(require_react());

// node_modules/@nextui-org/popover/node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js
var passiveSupported = false;
if (typeof window !== "undefined") {
  try {
    options = Object.defineProperty({}, "passive", {
      get: function() {
        passiveSupported = true;
        return true;
      }
    });
    window.addEventListener("test", options, options);
    window.removeEventListener("test", options, options);
  } catch (err) {
    passiveSupported = false;
  }
}
var options;
var nonPassive = passiveSupported ? { passive: false } : false;

// node_modules/@nextui-org/popover/node_modules/react-remove-scroll/dist/es2015/handleScroll.js
var alwaysContainsScroll = function(node) {
  return node.tagName === "TEXTAREA";
};
var elementCanBeScrolled = function(node, overflow) {
  var styles = window.getComputedStyle(node);
  return (
    // not-not-scrollable
    styles[overflow] !== "hidden" && // contains scroll inside self
    !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === "visible")
  );
};
var elementCouldBeVScrolled = function(node) {
  return elementCanBeScrolled(node, "overflowY");
};
var elementCouldBeHScrolled = function(node) {
  return elementCanBeScrolled(node, "overflowX");
};
var locationCouldBeScrolled = function(axis, node) {
  var ownerDocument = node.ownerDocument;
  var current = node;
  do {
    if (typeof ShadowRoot !== "undefined" && current instanceof ShadowRoot) {
      current = current.host;
    }
    var isScrollable = elementCouldBeScrolled(axis, current);
    if (isScrollable) {
      var _a = getScrollVariables(axis, current), s = _a[1], d = _a[2];
      if (s > d) {
        return true;
      }
    }
    current = current.parentNode;
  } while (current && current !== ownerDocument.body);
  return false;
};
var getVScrollVariables = function(_a) {
  var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
  return [
    scrollTop,
    scrollHeight,
    clientHeight
  ];
};
var getHScrollVariables = function(_a) {
  var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
  return [
    scrollLeft,
    scrollWidth,
    clientWidth
  ];
};
var elementCouldBeScrolled = function(axis, node) {
  return axis === "v" ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function(axis, node) {
  return axis === "v" ? getVScrollVariables(node) : getHScrollVariables(node);
};
var getDirectionFactor = function(axis, direction) {
  return axis === "h" && direction === "rtl" ? -1 : 1;
};
var handleScroll = function(axis, endTarget, event, sourceDelta, noOverscroll) {
  var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
  var delta = directionFactor * sourceDelta;
  var target = event.target;
  var targetInLock = endTarget.contains(target);
  var shouldCancelScroll = false;
  var isDeltaPositive = delta > 0;
  var availableScroll = 0;
  var availableScrollTop = 0;
  do {
    var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
    var elementScroll = scroll_1 - capacity - directionFactor * position;
    if (position || elementScroll) {
      if (elementCouldBeScrolled(axis, target)) {
        availableScroll += elementScroll;
        availableScrollTop += position;
      }
    }
    if (target instanceof ShadowRoot) {
      target = target.host;
    } else {
      target = target.parentNode;
    }
  } while (
    // portaled content
    !targetInLock && target !== document.body || // self content
    targetInLock && (endTarget.contains(target) || endTarget === target)
  );
  if (isDeltaPositive && (noOverscroll && Math.abs(availableScroll) < 1 || !noOverscroll && delta > availableScroll)) {
    shouldCancelScroll = true;
  } else if (!isDeltaPositive && (noOverscroll && Math.abs(availableScrollTop) < 1 || !noOverscroll && -delta > availableScrollTop)) {
    shouldCancelScroll = true;
  }
  return shouldCancelScroll;
};

// node_modules/@nextui-org/popover/node_modules/react-remove-scroll/dist/es2015/SideEffect.js
var getTouchXY = function(event) {
  return "changedTouches" in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
};
var getDeltaXY = function(event) {
  return [event.deltaX, event.deltaY];
};
var extractRef = function(ref) {
  return ref && "current" in ref ? ref.current : ref;
};
var deltaCompare = function(x, y) {
  return x[0] === y[0] && x[1] === y[1];
};
var generateStyle = function(id) {
  return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n");
};
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
  var shouldPreventQueue = React2.useRef([]);
  var touchStartRef = React2.useRef([0, 0]);
  var activeAxis = React2.useRef();
  var id = React2.useState(idCounter++)[0];
  var Style = React2.useState(styleSingleton)[0];
  var lastProps = React2.useRef(props);
  React2.useEffect(function() {
    lastProps.current = props;
  }, [props]);
  React2.useEffect(function() {
    if (props.inert) {
      document.body.classList.add("block-interactivity-".concat(id));
      var allow_1 = __spreadArray([props.lockRef.current], (props.shards || []).map(extractRef), true).filter(Boolean);
      allow_1.forEach(function(el) {
        return el.classList.add("allow-interactivity-".concat(id));
      });
      return function() {
        document.body.classList.remove("block-interactivity-".concat(id));
        allow_1.forEach(function(el) {
          return el.classList.remove("allow-interactivity-".concat(id));
        });
      };
    }
    return;
  }, [props.inert, props.lockRef.current, props.shards]);
  var shouldCancelEvent = React2.useCallback(function(event, parent) {
    if ("touches" in event && event.touches.length === 2) {
      return !lastProps.current.allowPinchZoom;
    }
    var touch = getTouchXY(event);
    var touchStart = touchStartRef.current;
    var deltaX = "deltaX" in event ? event.deltaX : touchStart[0] - touch[0];
    var deltaY = "deltaY" in event ? event.deltaY : touchStart[1] - touch[1];
    var currentAxis;
    var target = event.target;
    var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? "h" : "v";
    if ("touches" in event && moveDirection === "h" && target.type === "range") {
      return false;
    }
    var canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    if (!canBeScrolledInMainDirection) {
      return true;
    }
    if (canBeScrolledInMainDirection) {
      currentAxis = moveDirection;
    } else {
      currentAxis = moveDirection === "v" ? "h" : "v";
      canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    }
    if (!canBeScrolledInMainDirection) {
      return false;
    }
    if (!activeAxis.current && "changedTouches" in event && (deltaX || deltaY)) {
      activeAxis.current = currentAxis;
    }
    if (!currentAxis) {
      return true;
    }
    var cancelingAxis = activeAxis.current || currentAxis;
    return handleScroll(cancelingAxis, parent, event, cancelingAxis === "h" ? deltaX : deltaY, true);
  }, []);
  var shouldPrevent = React2.useCallback(function(_event) {
    var event = _event;
    if (!lockStack.length || lockStack[lockStack.length - 1] !== Style) {
      return;
    }
    var delta = "deltaY" in event ? getDeltaXY(event) : getTouchXY(event);
    var sourceEvent = shouldPreventQueue.current.filter(function(e) {
      return e.name === event.type && (e.target === event.target || event.target === e.shadowParent) && deltaCompare(e.delta, delta);
    })[0];
    if (sourceEvent && sourceEvent.should) {
      if (event.cancelable) {
        event.preventDefault();
      }
      return;
    }
    if (!sourceEvent) {
      var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter(function(node) {
        return node.contains(event.target);
      });
      var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
      if (shouldStop) {
        if (event.cancelable) {
          event.preventDefault();
        }
      }
    }
  }, []);
  var shouldCancel = React2.useCallback(function(name, delta, target, should) {
    var event = { name, delta, target, should, shadowParent: getOutermostShadowParent(target) };
    shouldPreventQueue.current.push(event);
    setTimeout(function() {
      shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e) {
        return e !== event;
      });
    }, 1);
  }, []);
  var scrollTouchStart = React2.useCallback(function(event) {
    touchStartRef.current = getTouchXY(event);
    activeAxis.current = void 0;
  }, []);
  var scrollWheel = React2.useCallback(function(event) {
    shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  var scrollTouchMove = React2.useCallback(function(event) {
    shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  React2.useEffect(function() {
    lockStack.push(Style);
    props.setCallbacks({
      onScrollCapture: scrollWheel,
      onWheelCapture: scrollWheel,
      onTouchMoveCapture: scrollTouchMove
    });
    document.addEventListener("wheel", shouldPrevent, nonPassive);
    document.addEventListener("touchmove", shouldPrevent, nonPassive);
    document.addEventListener("touchstart", scrollTouchStart, nonPassive);
    return function() {
      lockStack = lockStack.filter(function(inst) {
        return inst !== Style;
      });
      document.removeEventListener("wheel", shouldPrevent, nonPassive);
      document.removeEventListener("touchmove", shouldPrevent, nonPassive);
      document.removeEventListener("touchstart", scrollTouchStart, nonPassive);
    };
  }, []);
  var removeScrollBar = props.removeScrollBar, inert = props.inert;
  return React2.createElement(
    React2.Fragment,
    null,
    inert ? React2.createElement(Style, { styles: generateStyle(id) }) : null,
    removeScrollBar ? React2.createElement(RemoveScrollBar, { gapMode: props.gapMode }) : null
  );
}
function getOutermostShadowParent(node) {
  var shadowParent = null;
  while (node !== null) {
    if (node instanceof ShadowRoot) {
      shadowParent = node.host;
      node = node.host;
    }
    node = node.parentNode;
  }
  return shadowParent;
}

// node_modules/@nextui-org/popover/node_modules/react-remove-scroll/dist/es2015/sidecar.js
var sidecar_default = exportSidecar(effectCar, RemoveScrollSideCar);

// node_modules/@nextui-org/popover/node_modules/react-remove-scroll/dist/es2015/Combination.js
var ReactRemoveScroll = React3.forwardRef(function(props, ref) {
  return React3.createElement(RemoveScroll, __assign({}, props, { ref, sideCar: sidecar_default }));
});
ReactRemoveScroll.classNames = RemoveScroll.classNames;
var Combination_default = ReactRemoveScroll;

// node_modules/@nextui-org/popover/dist/chunk-ARECNDSB.mjs
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
"use client";
var PopoverContent = forwardRef((props, _) => {
  const { as, children, className, ...otherProps } = props;
  const {
    Component: OverlayComponent,
    isOpen,
    placement,
    motionProps,
    backdrop,
    disableAnimation,
    shouldBlockScroll,
    getPopoverProps,
    getDialogProps,
    getBackdropProps,
    getContentProps,
    isNonModal,
    onClose
  } = usePopoverContext();
  const Component = as || OverlayComponent || "div";
  const dialogRef = (0, import_react9.useRef)(null);
  const { dialogProps, titleProps } = $40df3f8667284809$export$d55e7ee900f34e93({}, dialogRef);
  delete dialogProps.role;
  const content = /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
    !isNonModal && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)($86ea4cb521eb2e37$export$2317d149ed6f78c4, { onDismiss: onClose }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Component, { ...getDialogProps($3ef42575df84b30b$export$9d1611c77c2fe928(dialogProps, otherProps)), ref: dialogRef, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { ...getContentProps({ className }), children: typeof children === "function" ? children(titleProps) : children }) }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)($86ea4cb521eb2e37$export$2317d149ed6f78c4, { onDismiss: onClose })
  ] });
  const backdropContent = (0, import_react9.useMemo)(() => {
    if (backdrop === "transparent") {
      return null;
    }
    if (disableAnimation) {
      return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { ...getBackdropProps() });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      motion.div,
      {
        animate: "enter",
        exit: "exit",
        initial: "exit",
        variants: TRANSITION_VARIANTS.fade,
        ...getBackdropProps()
      }
    );
  }, [backdrop, disableAnimation, getBackdropProps]);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { ...getPopoverProps(), children: [
    backdropContent,
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Combination_default, { forwardProps: true, enabled: shouldBlockScroll && isOpen, removeScrollBar: false, children: disableAnimation ? content : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      motion.div,
      {
        animate: "enter",
        exit: "exit",
        initial: "initial",
        style: {
          ...getTransformOrigins(placement === "center" ? "top" : placement)
        },
        variants: TRANSITION_VARIANTS.scaleSpringOpacity,
        ...motionProps,
        children: content
      }
    ) })
  ] });
});
PopoverContent.displayName = "NextUI.PopoverContent";
var popover_content_default = PopoverContent;

// node_modules/@nextui-org/popover/dist/chunk-K4VREUER.mjs
var import_react10 = __toESM(require_react(), 1);
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
"use client";
var PopoverTrigger = forwardRef((props, _) => {
  const { triggerRef, getTriggerProps } = usePopoverContext();
  const { children, ...otherProps } = props;
  const child = (0, import_react10.useMemo)(() => {
    if (typeof children === "string")
      return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { children });
    return import_react10.Children.only(children);
  }, [children]);
  const { onPress, ...rest } = (0, import_react10.useMemo)(() => {
    return getTriggerProps($3ef42575df84b30b$export$9d1611c77c2fe928(child.props, otherProps), child.ref);
  }, [getTriggerProps, child.props, otherProps, child.ref]);
  const [, triggerChildren] = pickChildren(children, button_default);
  const { buttonProps } = useAriaButton({ onPress }, triggerRef);
  const hasNextUIButton = (0, import_react10.useMemo)(() => {
    return (triggerChildren == null ? void 0 : triggerChildren[0]) !== void 0;
  }, [triggerChildren]);
  return (0, import_react10.cloneElement)(child, $3ef42575df84b30b$export$9d1611c77c2fe928(rest, hasNextUIButton ? { onPress } : buttonProps));
});
PopoverTrigger.displayName = "NextUI.PopoverTrigger";
var popover_trigger_default = PopoverTrigger;

// node_modules/@nextui-org/popover/dist/chunk-LSZJW3GU.mjs
var import_react11 = __toESM(require_react(), 1);
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
"use client";
var Popover = forwardRef((props, ref) => {
  const { children, ...otherProps } = props;
  const context = usePopover({ ...otherProps, ref });
  const [trigger, content] = import_react11.Children.toArray(children);
  const overlay = /* @__PURE__ */ (0, import_jsx_runtime6.jsx)($337b884510726a0d$export$c6fdb837b070b4ff, { portalContainer: context.portalContainer, children: content });
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(PopoverProvider, { value: context, children: [
    trigger,
    context.disableAnimation && context.isOpen ? overlay : /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(AnimatePresence, { children: context.isOpen ? overlay : null })
  ] });
});
Popover.displayName = "NextUI.Popover";
var popover_default = Popover;

// node_modules/@nextui-org/popover/dist/index.mjs
"use client";

// node_modules/@nextui-org/dropdown/dist/chunk-WRRPXIUB.mjs
"use client";
var [DropdownProvider, useDropdownContext] = createContext2({
  name: "DropdownContext",
  errorMessage: "useDropdownContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Dropdown />`"
});

// node_modules/@nextui-org/menu/dist/chunk-7C7K3AST.mjs
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
"use client";
function MenuSelectedIcon(props) {
  const { isSelected, disableAnimation, ...otherProps } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    "svg",
    {
      "aria-hidden": "true",
      "data-selected": isSelected,
      role: "presentation",
      viewBox: "0 0 17 18",
      ...otherProps,
      children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        "polyline",
        {
          fill: "none",
          points: "1 9 7 14 15 4",
          stroke: "currentColor",
          strokeDasharray: 22,
          strokeDashoffset: isSelected ? 44 : 66,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          style: !disableAnimation ? {
            transition: "stroke-dashoffset 200ms ease"
          } : {}
        }
      )
    }
  );
}

// node_modules/@nextui-org/menu/dist/chunk-MPFLNJCG.mjs
var import_react13 = __toESM(require_react(), 1);

// node_modules/@react-aria/menu/dist/import.mjs
var import_react12 = __toESM(require_react(), 1);
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $2cbb7ca666678a14$exports = {};
var $c0398ad35c3639b7$exports = {};
$c0398ad35c3639b7$exports = {
  "longPressMessage": `\u0627\u0636\u063A\u0637 \u0645\u0637\u0648\u0644\u0627\u064B \u0623\u0648 \u0627\u0636\u063A\u0637 \u0639\u0644\u0649 Alt + \u0627\u0644\u0633\u0647\u0645 \u0644\u0623\u0633\u0641\u0644 \u0644\u0641\u062A\u062D \u0627\u0644\u0642\u0627\u0626\u0645\u0629`
};
var $7af657c4165927c3$exports = {};
$7af657c4165927c3$exports = {
  "longPressMessage": `\u041D\u0430\u0442\u0438\u0441\u043D\u0435\u0442\u0435 \u043F\u0440\u043E\u0434\u044A\u043B\u0436\u0438\u0442\u0435\u043B\u043D\u043E \u0438\u043B\u0438 \u043D\u0430\u0442\u0438\u0441\u043D\u0435\u0442\u0435 Alt+ \u0441\u0442\u0440\u0435\u043B\u043A\u0430 \u043D\u0430\u0434\u043E\u043B\u0443, \u0437\u0430 \u0434\u0430 \u043E\u0442\u0432\u043E\u0440\u0438\u0442\u0435 \u043C\u0435\u043D\u044E\u0442\u043E`
};
var $d95d4da6d531ab81$exports = {};
$d95d4da6d531ab81$exports = {
  "longPressMessage": `Dlouh\xFDm stiskem nebo stisknut\xEDm kl\xE1ves Alt + \u0161ipka dol\u016F otev\u0159ete nab\xEDdku`
};
var $24ebda9c775dca17$exports = {};
$24ebda9c775dca17$exports = {
  "longPressMessage": `Langt tryk eller tryk p\xE5 Alt + pil ned for at \xE5bne menuen`
};
var $743e0dfca6cab1e9$exports = {};
$743e0dfca6cab1e9$exports = {
  "longPressMessage": `Dr\xFCcken Sie lange oder dr\xFCcken Sie Alt + Nach-unten, um das Men\xFC zu \xF6ffnen`
};
var $a2f41026e05f1c84$exports = {};
$a2f41026e05f1c84$exports = {
  "longPressMessage": `\u03A0\u03B9\u03AD\u03C3\u03C4\u03B5 \u03C0\u03B1\u03C1\u03B1\u03C4\u03B5\u03C4\u03B1\u03BC\u03AD\u03BD\u03B1 \u03AE \u03C0\u03B1\u03C4\u03AE\u03C3\u03C4\u03B5 Alt + \u03BA\u03AC\u03C4\u03C9 \u03B2\u03AD\u03BB\u03BF\u03C2 \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03B1\u03BD\u03BF\u03AF\u03BE\u03B5\u03C4\u03B5 \u03C4\u03BF \u03BC\u03B5\u03BD\u03BF\u03CD`
};
var $43b800e97c901737$exports = {};
$43b800e97c901737$exports = {
  "longPressMessage": `Long press or press Alt + ArrowDown to open menu`
};
var $442f5f6ac211e29f$exports = {};
$442f5f6ac211e29f$exports = {
  "longPressMessage": `Mantenga pulsado o pulse Alt + flecha abajo para abrir el men\xFA`
};
var $dff280acfeb2d8ac$exports = {};
$dff280acfeb2d8ac$exports = {
  "longPressMessage": `Men\xFC\xFC avamiseks vajutage pikalt v\xF5i vajutage klahve Alt + allanool`
};
var $51608325613944d7$exports = {};
$51608325613944d7$exports = {
  "longPressMessage": `Avaa valikko painamalla pohjassa tai n\xE4pp\xE4inyhdistelm\xE4ll\xE4 Alt + Alanuoli`
};
var $c4a1b1eabeaa87be$exports = {};
$c4a1b1eabeaa87be$exports = {
  "longPressMessage": `Appuyez de mani\xE8re prolong\xE9e ou appuyez sur Alt\xA0+\xA0Fl\xE8che vers le bas pour ouvrir le menu.`
};
var $8c74815cdee18d1b$exports = {};
$8c74815cdee18d1b$exports = {
  "longPressMessage": `\u05DC\u05D7\u05E5 \u05DC\u05D7\u05D9\u05E6\u05D4 \u05D0\u05E8\u05D5\u05DB\u05D4 \u05D0\u05D5 \u05D4\u05E7\u05E9 Alt + ArrowDown \u05DB\u05D3\u05D9 \u05DC\u05E4\u05EA\u05D5\u05D7 \u05D0\u05EA \u05D4\u05EA\u05E4\u05E8\u05D9\u05D8`
};
var $fd0e9ef6a7fe0ec9$exports = {};
$fd0e9ef6a7fe0ec9$exports = {
  "longPressMessage": `Dugo pritisnite ili pritisnite Alt + strelicu prema dolje za otvaranje izbornika`
};
var $a89a74a39eba465a$exports = {};
$a89a74a39eba465a$exports = {
  "longPressMessage": `Nyomja meg hosszan, vagy nyomja meg az Alt + lefele ny\xEDl gombot a men\xFC megnyit\xE1s\xE1hoz`
};
var $edc7c66594a0ae8a$exports = {};
$edc7c66594a0ae8a$exports = {
  "longPressMessage": `Premere a lungo o premere Alt + Freccia gi\xF9 per aprire il menu`
};
var $f1ab51510712db52$exports = {};
$f1ab51510712db52$exports = {
  "longPressMessage": `\u9577\u62BC\u3057\u307E\u305F\u306F Alt+\u4E0B\u77E2\u5370\u30AD\u30FC\u3067\u30E1\u30CB\u30E5\u30FC\u3092\u958B\u304F`
};
var $f9b672d9b82fa3d6$exports = {};
$f9b672d9b82fa3d6$exports = {
  "longPressMessage": `\uAE38\uAC8C \uB204\uB974\uAC70\uB098 Alt + \uC544\uB798\uCABD \uD654\uC0B4\uD45C\uB97C \uB20C\uB7EC \uBA54\uB274 \uC5F4\uAE30`
};
var $a385f3910feda499$exports = {};
$a385f3910feda499$exports = {
  "longPressMessage": `Nor\u0117dami atidaryti meniu, nuspaud\u0119 palaikykite arba paspauskite \u201EAlt + ArrowDown\u201C.`
};
var $4f1bde932c441789$exports = {};
$4f1bde932c441789$exports = {
  "longPressMessage": `Lai atv\u0113rtu izv\u0113lni, turiet nospiestu vai nospiediet tausti\u0146u kombin\u0101ciju Alt + lejupv\u0113rst\u0101 bulti\u0146a`
};
var $914a51a8a594d5be$exports = {};
$914a51a8a594d5be$exports = {
  "longPressMessage": `Langt trykk eller trykk Alt + PilNed for \xE5 \xE5pne menyen`
};
var $89aaf803103bb500$exports = {};
$89aaf803103bb500$exports = {
  "longPressMessage": `Druk lang op Alt + pijl-omlaag of druk op Alt om het menu te openen`
};
var $c685891476dbaaca$exports = {};
$c685891476dbaaca$exports = {
  "longPressMessage": `Naci\u015Bnij i przytrzymaj lub naci\u015Bnij klawisze Alt + Strza\u0142ka w d\xF3\u0142, aby otworzy\u0107 menu`
};
var $885879b9b10c2959$exports = {};
$885879b9b10c2959$exports = {
  "longPressMessage": `Pressione e segure ou pressione Alt + Seta para baixo para abrir o menu`
};
var $6b39616688a51692$exports = {};
$6b39616688a51692$exports = {
  "longPressMessage": `Prima continuamente ou prima Alt + Seta Para Baixo para abrir o menu`
};
var $f26362aed63f47e2$exports = {};
$f26362aed63f47e2$exports = {
  "longPressMessage": `Ap\u0103sa\u021Bi lung sau ap\u0103sa\u021Bi pe Alt + s\u0103geat\u0103 \xEEn jos pentru a deschide meniul`
};
var $06cbade644558bf0$exports = {};
$06cbade644558bf0$exports = {
  "longPressMessage": `\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u0438 \u0443\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0439\u0442\u0435 \u0438\u043B\u0438 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 Alt + \u0421\u0442\u0440\u0435\u043B\u043A\u0430 \u0432\u043D\u0438\u0437, \u0447\u0442\u043E\u0431\u044B \u043E\u0442\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E`
};
var $0a391ff68f9d59b1$exports = {};
$0a391ff68f9d59b1$exports = {
  "longPressMessage": `Ponuku otvor\xEDte dlh\xFDm stla\u010Den\xEDm alebo stla\u010Den\xEDm kl\xE1vesu Alt + kl\xE1vesu so \u0161\xEDpkou nadol`
};
var $8193cf0e649c7928$exports = {};
$8193cf0e649c7928$exports = {
  "longPressMessage": `Za odprtje menija pritisnite in dr\u017Eite gumb ali pritisnite Alt+pu\u0161\u010Dica navzdol`
};
var $f398debcce5a5c55$exports = {};
$f398debcce5a5c55$exports = {
  "longPressMessage": `Dugo pritisnite ili pritisnite Alt + strelicu prema dole da otvorite meni`
};
var $9e9fef000aa4c013$exports = {};
$9e9fef000aa4c013$exports = {
  "longPressMessage": `H\xE5ll nedtryckt eller tryck p\xE5 Alt + pil ned\xE5t f\xF6r att \xF6ppna menyn`
};
var $c016c8183bbe3d68$exports = {};
$c016c8183bbe3d68$exports = {
  "longPressMessage": `Men\xFCy\xFC a\xE7mak i\xE7in uzun bas\u0131n veya Alt + A\u015Fa\u011F\u0131 Ok tu\u015Funa bas\u0131n`
};
var $ca4f6c8462244e62$exports = {};
$ca4f6c8462244e62$exports = {
  "longPressMessage": `\u0414\u043E\u0432\u0433\u043E \u0430\u0431\u043E \u0437\u0432\u0438\u0447\u0430\u0439\u043D\u043E \u043D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C \u043A\u043E\u043C\u0431\u0456\u043D\u0430\u0446\u0456\u044E \u043A\u043B\u0430\u0432\u0456\u0448 Alt \u0456 \u0441\u0442\u0440\u0456\u043B\u043A\u0430 \u0432\u043D\u0438\u0437, \u0449\u043E\u0431 \u0432\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u043C\u0435\u043D\u044E`
};
var $2d9960c02ccac927$exports = {};
$2d9960c02ccac927$exports = {
  "longPressMessage": `\u957F\u6309\u6216\u6309 Alt + \u5411\u4E0B\u65B9\u5411\u952E\u4EE5\u6253\u5F00\u83DC\u5355`
};
var $f1b682a4c8c5631c$exports = {};
$f1b682a4c8c5631c$exports = {
  "longPressMessage": `\u9577\u6309\u6216\u6309 Alt+\u5411\u4E0B\u9375\u4EE5\u958B\u555F\u529F\u80FD\u8868`
};
$2cbb7ca666678a14$exports = {
  "ar-AE": $c0398ad35c3639b7$exports,
  "bg-BG": $7af657c4165927c3$exports,
  "cs-CZ": $d95d4da6d531ab81$exports,
  "da-DK": $24ebda9c775dca17$exports,
  "de-DE": $743e0dfca6cab1e9$exports,
  "el-GR": $a2f41026e05f1c84$exports,
  "en-US": $43b800e97c901737$exports,
  "es-ES": $442f5f6ac211e29f$exports,
  "et-EE": $dff280acfeb2d8ac$exports,
  "fi-FI": $51608325613944d7$exports,
  "fr-FR": $c4a1b1eabeaa87be$exports,
  "he-IL": $8c74815cdee18d1b$exports,
  "hr-HR": $fd0e9ef6a7fe0ec9$exports,
  "hu-HU": $a89a74a39eba465a$exports,
  "it-IT": $edc7c66594a0ae8a$exports,
  "ja-JP": $f1ab51510712db52$exports,
  "ko-KR": $f9b672d9b82fa3d6$exports,
  "lt-LT": $a385f3910feda499$exports,
  "lv-LV": $4f1bde932c441789$exports,
  "nb-NO": $914a51a8a594d5be$exports,
  "nl-NL": $89aaf803103bb500$exports,
  "pl-PL": $c685891476dbaaca$exports,
  "pt-BR": $885879b9b10c2959$exports,
  "pt-PT": $6b39616688a51692$exports,
  "ro-RO": $f26362aed63f47e2$exports,
  "ru-RU": $06cbade644558bf0$exports,
  "sk-SK": $0a391ff68f9d59b1$exports,
  "sl-SI": $8193cf0e649c7928$exports,
  "sr-SP": $f398debcce5a5c55$exports,
  "sv-SE": $9e9fef000aa4c013$exports,
  "tr-TR": $c016c8183bbe3d68$exports,
  "uk-UA": $ca4f6c8462244e62$exports,
  "zh-CN": $2d9960c02ccac927$exports,
  "zh-TW": $f1b682a4c8c5631c$exports
};
function $168583247155ddda$export$dc9c12ed27dd1b49(props, state, ref) {
  let { type = "menu", isDisabled, trigger = "press" } = props;
  let menuTriggerId = (0, $bdb11010cef70236$export$f680877a34711e37)();
  let { triggerProps, overlayProps } = (0, $628037886ba31236$export$f9d5c8beee7d008d)({
    type
  }, state, ref);
  let onKeyDown = (e) => {
    if (isDisabled)
      return;
    if (trigger === "longPress" && !e.altKey)
      return;
    if (ref && ref.current)
      switch (e.key) {
        case "Enter":
        case " ":
          if (trigger === "longPress")
            return;
        case "ArrowDown":
          if (!("continuePropagation" in e))
            e.stopPropagation();
          e.preventDefault();
          state.toggle("first");
          break;
        case "ArrowUp":
          if (!("continuePropagation" in e))
            e.stopPropagation();
          e.preventDefault();
          state.toggle("last");
          break;
        default:
          if ("continuePropagation" in e)
            e.continuePropagation();
      }
  };
  let stringFormatter = (0, $fca6afa0e843324b$export$f12b703ca79dfbb1)((0, /* @__PURE__ */ $parcel$interopDefault($2cbb7ca666678a14$exports)));
  let { longPressProps } = (0, $8a26561d2877236e$export$c24ed0104d07eab9)({
    isDisabled: isDisabled || trigger !== "longPress",
    accessibilityDescription: stringFormatter.format("longPressMessage"),
    onLongPressStart() {
      state.close();
    },
    onLongPress() {
      state.open("first");
    }
  });
  let pressProps = {
    onPressStart(e) {
      if (e.pointerType !== "touch" && e.pointerType !== "keyboard" && !isDisabled)
        state.toggle(e.pointerType === "virtual" ? "first" : null);
    },
    onPress(e) {
      if (e.pointerType === "touch" && !isDisabled)
        state.toggle();
    }
  };
  delete triggerProps.onPress;
  return {
    menuTriggerProps: {
      ...triggerProps,
      ...trigger === "press" ? pressProps : longPressProps,
      id: menuTriggerId,
      onKeyDown
    },
    menuProps: {
      ...overlayProps,
      "aria-labelledby": menuTriggerId,
      autoFocus: state.focusStrategy || true,
      onClose: state.close
    }
  };
}
var $d5336fe17ce95402$export$6f49b4016bfc8d56 = /* @__PURE__ */ new WeakMap();
function $d5336fe17ce95402$export$38eaa17faae8f579(props, state, ref) {
  let { shouldFocusWrap = true, ...otherProps } = props;
  if (!props["aria-label"] && !props["aria-labelledby"])
    console.warn("An aria-label or aria-labelledby prop is required for accessibility.");
  let domProps = (0, $65484d02dcb7eb3e$export$457c3d6518dd4c6f)(props, {
    labelable: true
  });
  let { listProps } = (0, $982254629710d113$export$b95089534ab7c1fd)({
    ...otherProps,
    ref,
    selectionManager: state.selectionManager,
    collection: state.collection,
    disabledKeys: state.disabledKeys,
    shouldFocusWrap,
    linkBehavior: "override"
  });
  $d5336fe17ce95402$export$6f49b4016bfc8d56.set(state, {
    onClose: props.onClose,
    onAction: props.onAction
  });
  return {
    menuProps: (0, $3ef42575df84b30b$export$9d1611c77c2fe928)(domProps, {
      role: "menu",
      // this forces AT to move their cursors into any open sub dialogs, the sub dialogs contain hidden close buttons in order to come back to this level of the menu
      "aria-hidden": state.expandedKeys.size > 0 ? true : void 0,
      ...listProps,
      onKeyDown: (e) => {
        if (e.key !== "Escape")
          listProps.onKeyDown(e);
      }
    })
  };
}
function $a2e5df62f93c7633$export$9d32628fc2aea7da(props, state, ref) {
  var _item_props;
  let { key, closeOnSelect, isVirtualized, "aria-haspopup": hasPopup } = props;
  let { direction } = (0, $18f2051aff69b9bf$export$43bb16f9c6d9e3f7)();
  let isTrigger = !!hasPopup;
  let isOpen = state.expandedKeys.has(key);
  var _props_isDisabled;
  let isDisabled = (_props_isDisabled = props.isDisabled) !== null && _props_isDisabled !== void 0 ? _props_isDisabled : state.disabledKeys.has(key);
  var _props_isSelected;
  let isSelected = (_props_isSelected = props.isSelected) !== null && _props_isSelected !== void 0 ? _props_isSelected : state.selectionManager.isSelected(key);
  let openTimeout = (0, import_react12.useRef)();
  let cancelOpenTimeout = (0, import_react12.useCallback)(() => {
    if (openTimeout.current) {
      clearTimeout(openTimeout.current);
      openTimeout.current = void 0;
    }
  }, [
    openTimeout
  ]);
  let onSubmenuOpen = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)(() => {
    cancelOpenTimeout();
    state.setExpandedKeys(/* @__PURE__ */ new Set([
      key
    ]));
  });
  (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(() => {
    return () => cancelOpenTimeout();
  }, [
    cancelOpenTimeout
  ]);
  let data = (0, $d5336fe17ce95402$export$6f49b4016bfc8d56).get(state);
  let onClose = props.onClose || data.onClose;
  let onActionMenuDialogTrigger = (0, import_react12.useCallback)(() => {
    onSubmenuOpen();
  }, []);
  let onAction = isTrigger ? onActionMenuDialogTrigger : props.onAction || data.onAction;
  let router = (0, $ea8dcbcb9ea1b556$export$9a302a45f65d0572)();
  let performAction = (e) => {
    if (onAction)
      onAction(key);
    if (e.target instanceof HTMLAnchorElement)
      router.open(e.target, e);
  };
  let role = "menuitem";
  if (state.selectionManager.selectionMode === "single")
    role = "menuitemradio";
  else if (state.selectionManager.selectionMode === "multiple")
    role = "menuitemcheckbox";
  let labelId = (0, $bdb11010cef70236$export$b4cc09c592e8fdb8)();
  let descriptionId = (0, $bdb11010cef70236$export$b4cc09c592e8fdb8)();
  let keyboardId = (0, $bdb11010cef70236$export$b4cc09c592e8fdb8)();
  let ariaProps = {
    "aria-disabled": isDisabled || void 0,
    role,
    "aria-label": props["aria-label"],
    "aria-labelledby": labelId,
    "aria-describedby": [
      descriptionId,
      keyboardId
    ].filter(Boolean).join(" ") || void 0
  };
  if (state.selectionManager.selectionMode !== "none")
    ariaProps["aria-checked"] = isSelected;
  let item = state.collection.getItem(key);
  if (isVirtualized) {
    ariaProps["aria-posinset"] = item === null || item === void 0 ? void 0 : item.index;
    ariaProps["aria-setsize"] = (0, $453cc9f0df89c0a5$export$77d5aafae4e095b2)(state.collection);
  }
  if (hasPopup != null) {
    ariaProps["aria-haspopup"] = hasPopup;
    ariaProps["aria-expanded"] = isOpen ? "true" : "false";
  }
  let onPressStart = (e) => {
    if (e.pointerType === "keyboard")
      performAction(e);
  };
  let onPressUp = (e) => {
    if (e.pointerType !== "keyboard") {
      performAction(e);
      if (!isTrigger && onClose && (closeOnSelect !== null && closeOnSelect !== void 0 ? closeOnSelect : state.selectionManager.selectionMode !== "multiple" || state.selectionManager.isLink(key)))
        onClose();
    }
  };
  let { itemProps, isFocused } = (0, $880e95eb8b93ba9a$export$ecf600387e221c37)({
    selectionManager: state.selectionManager,
    key,
    ref,
    shouldSelectOnPressUp: true,
    allowsDifferentPressOrigin: true,
    // Disable all handling of links in useSelectable item
    // because we handle it ourselves. The behavior of menus
    // is slightly different from other collections because
    // actions are performed on key down rather than key up.
    linkBehavior: "none"
  });
  let { pressProps, isPressed } = (0, $f6c31cce2adf654f$export$45712eceda6fad21)({
    onPressStart,
    onPressUp,
    isDisabled: isDisabled || isTrigger && state.expandedKeys.has(key)
  });
  let { hoverProps } = (0, $6179b936705e76d3$export$ae780daf29e6d456)({
    isDisabled,
    onHoverStart() {
      if (!(0, $507fabe10e71c6fb$export$b9b3dfddab17db27)() && !(isTrigger && state.expandedKeys.has(key))) {
        state.selectionManager.setFocused(true);
        state.selectionManager.setFocusedKey(key);
        let isFocused2 = key === state.selectionManager.focusedKey;
        if (isFocused2 && state.selectionManager.isFocused && document.activeElement !== ref.current)
          (0, $6a99195332edec8b$export$80f3e147d781571c)(ref.current);
      }
    },
    onHoverChange: (isHovered) => {
      if (isHovered && isTrigger && !state.expandedKeys.has(key)) {
        if (!openTimeout.current)
          openTimeout.current = setTimeout(() => {
            onSubmenuOpen();
          }, 200);
      } else if (!isHovered)
        cancelOpenTimeout();
    }
  });
  let { keyboardProps } = (0, $46d819fcbaf35654$export$8f71654801c2f7cd)({
    onKeyDown: (e) => {
      if (e.repeat) {
        e.continuePropagation();
        return;
      }
      switch (e.key) {
        case " ":
          if (!isDisabled && state.selectionManager.selectionMode === "none" && !isTrigger && closeOnSelect !== false && onClose)
            onClose();
          break;
        case "Enter":
          if (!isDisabled && closeOnSelect !== false && !isTrigger && onClose)
            onClose();
          break;
        case "ArrowRight":
          if (isTrigger && direction === "ltr")
            onSubmenuOpen();
          else
            e.continuePropagation();
          break;
        case "ArrowLeft":
          if (isTrigger && direction === "rtl")
            onSubmenuOpen();
          else
            e.continuePropagation();
          break;
        default:
          e.continuePropagation();
          break;
      }
    }
  });
  let domProps = (0, $65484d02dcb7eb3e$export$457c3d6518dd4c6f)(item.props, {
    isLink: !!(item === null || item === void 0 ? void 0 : (_item_props = item.props) === null || _item_props === void 0 ? void 0 : _item_props.href)
  });
  delete domProps.id;
  return {
    menuItemProps: {
      ...ariaProps,
      ...(0, $3ef42575df84b30b$export$9d1611c77c2fe928)(domProps, itemProps, pressProps, hoverProps, keyboardProps)
    },
    labelProps: {
      id: labelId
    },
    descriptionProps: {
      id: descriptionId
    },
    keyboardShortcutProps: {
      id: keyboardId
    },
    isFocused,
    isSelected,
    isPressed,
    isDisabled
  };
}
function $3e5eb2498db5b506$export$73f7a44322579622(props) {
  let { heading, "aria-label": ariaLabel } = props;
  let headingId = (0, $bdb11010cef70236$export$f680877a34711e37)();
  return {
    itemProps: {
      role: "presentation"
    },
    headingProps: heading ? {
      // Techincally, menus cannot contain headings according to ARIA.
      // We hide the heading from assistive technology, using role="presentation",
      // and only use it as a label for the nested group.
      id: headingId,
      role: "presentation"
    } : {},
    groupProps: {
      role: "group",
      "aria-label": ariaLabel,
      "aria-labelledby": heading ? headingId : void 0
    }
  };
}

// node_modules/@nextui-org/use-is-mobile/dist/index.mjs
var MOBILE_SCREEN_WIDTH = 700;
function useIsMobile() {
  let isSSR = $b5e257d569688ac6$export$535bd6ca7f90a273();
  if (isSSR || typeof window === "undefined") {
    return false;
  }
  return window.screen.width <= MOBILE_SCREEN_WIDTH;
}

// node_modules/@nextui-org/menu/dist/chunk-MPFLNJCG.mjs
"use client";
function useMenuItem(originalProps) {
  const [props, variantProps] = mapPropsVariants(originalProps, menuItem.variantKeys);
  const {
    as,
    item,
    state,
    shortcut,
    description,
    startContent,
    endContent,
    isVirtualized,
    selectedIcon,
    className,
    classNames,
    onAction,
    autoFocus,
    onPress,
    onClick,
    hideSelectedIcon = false,
    isReadOnly = false,
    closeOnSelect,
    onClose,
    ...otherProps
  } = props;
  const disableAnimation = originalProps.disableAnimation;
  const domRef = (0, import_react13.useRef)(null);
  const Component = as || ((otherProps == null ? void 0 : otherProps.href) ? "a" : "li");
  const shouldFilterDOMProps = typeof Component === "string";
  const { rendered, key } = item;
  const isDisabled = state.disabledKeys.has(key) || originalProps.isDisabled;
  const isSelectable = state.selectionManager.selectionMode !== "none";
  const isMobile = useIsMobile();
  const { pressProps, isPressed } = usePress({
    ref: domRef,
    isDisabled,
    onPress
  });
  const { isHovered, hoverProps } = $6179b936705e76d3$export$ae780daf29e6d456({
    isDisabled
  });
  const { isFocusVisible, focusProps } = $f7dceffc5ad7768b$export$4e328f61c538687f({
    autoFocus
  });
  const {
    isFocused,
    isSelected,
    menuItemProps,
    labelProps,
    descriptionProps,
    keyboardShortcutProps
  } = $a2e5df62f93c7633$export$9d32628fc2aea7da(
    {
      key,
      onClose,
      isDisabled,
      "aria-label": props["aria-label"],
      closeOnSelect,
      isVirtualized,
      onAction
    },
    state,
    domRef
  );
  let itemProps = menuItemProps;
  const slots = (0, import_react13.useMemo)(
    () => menuItem({
      ...variantProps,
      isDisabled,
      disableAnimation
    }),
    [...Object.values(variantProps), isDisabled, disableAnimation]
  );
  const baseStyles = clsx(classNames == null ? void 0 : classNames.base, className);
  if (isReadOnly) {
    itemProps = removeEvents(itemProps);
  }
  const getItemProps = (props2 = {}) => ({
    ref: domRef,
    ...$3ef42575df84b30b$export$9d1611c77c2fe928(
      itemProps,
      isReadOnly ? {} : $3ef42575df84b30b$export$9d1611c77c2fe928(focusProps, pressProps),
      hoverProps,
      filterDOMProps(otherProps, {
        enabled: shouldFilterDOMProps
      }),
      props2
    ),
    "data-focus": dataAttr(isFocused),
    "data-selectable": dataAttr(isSelectable),
    "data-hover": dataAttr(isMobile ? isHovered || isPressed : isHovered),
    "data-disabled": dataAttr(isDisabled),
    "data-selected": dataAttr(isSelected),
    "data-pressed": dataAttr(isPressed),
    "data-focus-visible": dataAttr(isFocusVisible),
    className: slots.base({ class: clsx(baseStyles, props2.className) }),
    onClick: $ff5963eb1fccf552$export$e08e3b67e392101e(pressProps.onClick, onClick)
  });
  const getLabelProps = (props2 = {}) => ({
    ...$3ef42575df84b30b$export$9d1611c77c2fe928(labelProps, props2),
    className: slots.title({ class: classNames == null ? void 0 : classNames.title })
  });
  const getDescriptionProps = (props2 = {}) => ({
    ...$3ef42575df84b30b$export$9d1611c77c2fe928(descriptionProps, props2),
    className: slots.description({ class: classNames == null ? void 0 : classNames.description })
  });
  const getKeyboardShortcutProps = (props2 = {}) => ({
    ...$3ef42575df84b30b$export$9d1611c77c2fe928(keyboardShortcutProps, props2),
    className: slots.shortcut({ class: classNames == null ? void 0 : classNames.shortcut })
  });
  const getSelectedIconProps = (0, import_react13.useCallback)(
    (props2 = {}) => {
      return {
        "aria-hidden": dataAttr(true),
        "data-disabled": dataAttr(isDisabled),
        className: slots.selectedIcon({ class: classNames == null ? void 0 : classNames.selectedIcon }),
        ...props2
      };
    },
    [isDisabled, slots, classNames]
  );
  return {
    Component,
    domRef,
    slots,
    classNames,
    isSelectable,
    isSelected,
    isDisabled,
    rendered,
    shortcut,
    description,
    startContent,
    endContent,
    selectedIcon,
    disableAnimation,
    getItemProps,
    getLabelProps,
    hideSelectedIcon,
    getDescriptionProps,
    getKeyboardShortcutProps,
    getSelectedIconProps
  };
}

// node_modules/@nextui-org/menu/dist/chunk-VYK6R63U.mjs
var import_react14 = __toESM(require_react(), 1);
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
"use client";
var MenuItem = forwardRef((props, _) => {
  const {
    Component,
    slots,
    classNames,
    rendered,
    shortcut,
    description,
    isSelectable,
    isSelected,
    isDisabled,
    selectedIcon,
    startContent,
    endContent,
    disableAnimation,
    hideSelectedIcon,
    getItemProps,
    getLabelProps,
    getDescriptionProps,
    getKeyboardShortcutProps,
    getSelectedIconProps
  } = useMenuItem(props);
  const selectedContent = (0, import_react14.useMemo)(() => {
    const defaultIcon = /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(MenuSelectedIcon, { disableAnimation, isSelected });
    if (typeof selectedIcon === "function") {
      return selectedIcon({ icon: defaultIcon, isSelected, isDisabled });
    }
    if (selectedIcon)
      return selectedIcon;
    return defaultIcon;
  }, [selectedIcon, isSelected, isDisabled, disableAnimation]);
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(Component, { ...getItemProps(), children: [
    startContent,
    description ? /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: slots.wrapper({ class: classNames == null ? void 0 : classNames.wrapper }), children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { ...getLabelProps(), children: rendered }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { ...getDescriptionProps(), children: description })
    ] }) : /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { ...getLabelProps(), children: rendered }),
    shortcut && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("kbd", { ...getKeyboardShortcutProps(), children: shortcut }),
    isSelectable && !hideSelectedIcon && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { ...getSelectedIconProps(), children: selectedContent }),
    endContent
  ] });
});
MenuItem.displayName = "NextUI.MenuItem";
var menu_item_default = MenuItem;

// node_modules/@nextui-org/menu/dist/chunk-4N6PLPNY.mjs
var import_react15 = __toESM(require_react(), 1);
var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
"use client";
var MenuSection = forwardRef(
  ({
    item,
    state,
    as,
    variant,
    color,
    disableAnimation,
    onAction,
    closeOnSelect,
    className,
    classNames,
    showDivider = false,
    hideSelectedIcon,
    dividerProps = {},
    itemClasses,
    title,
    ...otherProps
  }, _) => {
    const Component = as || "li";
    const slots = (0, import_react15.useMemo)(() => menuSection(), []);
    const baseStyles = clsx(classNames == null ? void 0 : classNames.base, className);
    const dividerStyles = clsx(classNames == null ? void 0 : classNames.divider, dividerProps == null ? void 0 : dividerProps.className);
    const { itemProps, headingProps, groupProps } = $3e5eb2498db5b506$export$73f7a44322579622({
      heading: item.rendered,
      "aria-label": item["aria-label"]
    });
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
      Component,
      {
        "data-slot": "base",
        ...$3ef42575df84b30b$export$9d1611c77c2fe928(itemProps, otherProps),
        className: slots.base({ class: baseStyles }),
        children: [
          item.rendered && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
            "span",
            {
              ...headingProps,
              className: slots.heading({ class: classNames == null ? void 0 : classNames.heading }),
              "data-slot": "heading",
              children: item.rendered
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
            "ul",
            {
              ...groupProps,
              className: slots.group({ class: classNames == null ? void 0 : classNames.group }),
              "data-has-title": !!item.rendered,
              "data-slot": "group",
              children: [
                [...item.childNodes].map((node) => {
                  const { key: nodeKey, props: nodeProps } = node;
                  let menuItem2 = /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                    menu_item_default,
                    {
                      classNames: itemClasses,
                      closeOnSelect,
                      color,
                      disableAnimation,
                      hideSelectedIcon,
                      item: node,
                      state,
                      variant,
                      onAction,
                      ...nodeProps
                    },
                    nodeKey
                  );
                  if (node.wrapper) {
                    menuItem2 = node.wrapper(menuItem2);
                  }
                  return menuItem2;
                }),
                showDivider && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                  divider_default,
                  {
                    as: "li",
                    className: slots.divider({
                      class: dividerStyles
                    }),
                    ...dividerProps
                  }
                )
              ]
            }
          )
        ]
      }
    );
  }
);
MenuSection.displayName = "NextUI.MenuSection";
var menu_section_default = MenuSection;

// node_modules/@nextui-org/menu/dist/chunk-R4ZQ5Y3Q.mjs
var import_react16 = __toESM(require_react(), 1);
"use client";
function useMenu(props) {
  const {
    as,
    ref,
    variant,
    color,
    children,
    disableAnimation,
    onAction,
    closeOnSelect,
    itemClasses,
    className,
    state: propState,
    topContent,
    bottomContent,
    hideEmptyContent = false,
    hideSelectedIcon = false,
    emptyContent = "No items.",
    menuProps: userMenuProps,
    onClose,
    classNames,
    ...otherProps
  } = props;
  const Component = as || "ul";
  const domRef = useDOMRef(ref);
  const shouldFilterDOMProps = typeof Component === "string";
  const innerState = $875d6693e12af071$export$728d6ba534403756({ ...otherProps, children });
  const state = propState || innerState;
  const { menuProps } = $d5336fe17ce95402$export$38eaa17faae8f579(otherProps, state, domRef);
  const slots = (0, import_react16.useMemo)(() => menu({ className }), [className]);
  const baseStyles = clsx(classNames == null ? void 0 : classNames.base, className);
  const getBaseProps = (props2 = {}) => {
    return {
      ref: domRef,
      "data-slot": "base",
      className: slots.base({ class: baseStyles }),
      ...filterDOMProps(otherProps, {
        enabled: shouldFilterDOMProps
      }),
      ...props2
    };
  };
  const getListProps = (props2 = {}) => {
    return {
      "data-slot": "list",
      className: slots.list({ class: classNames == null ? void 0 : classNames.list }),
      ...userMenuProps,
      ...menuProps,
      ...props2
    };
  };
  const getEmptyContentProps = (props2 = {}) => {
    return {
      children: emptyContent,
      className: slots.emptyContent({ class: classNames == null ? void 0 : classNames.emptyContent }),
      ...props2
    };
  };
  return {
    Component,
    state,
    variant,
    color,
    disableAnimation,
    onAction,
    onClose,
    topContent,
    bottomContent,
    closeOnSelect,
    className,
    itemClasses,
    getBaseProps,
    getListProps,
    hideEmptyContent,
    hideSelectedIcon,
    getEmptyContentProps
  };
}

// node_modules/@nextui-org/menu/dist/chunk-B24OILC2.mjs
var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);
"use client";
function Menu(props, ref) {
  const {
    Component,
    state,
    closeOnSelect,
    color,
    disableAnimation,
    hideSelectedIcon,
    hideEmptyContent,
    variant,
    onClose,
    onAction,
    topContent,
    bottomContent,
    itemClasses,
    getBaseProps,
    getListProps,
    getEmptyContentProps
  } = useMenu({ ...props, ref });
  const content = /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(Component, { ...getListProps(), children: [
    !state.collection.size && !hideEmptyContent && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { ...getEmptyContentProps() }) }),
    [...state.collection].map((item) => {
      const itemProps = {
        closeOnSelect,
        color,
        disableAnimation,
        item,
        state,
        variant,
        onClose,
        onAction,
        hideSelectedIcon,
        ...item.props
      };
      if (item.type === "section") {
        return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(menu_section_default, { ...itemProps, itemClasses }, item.key);
      }
      let menuItem2 = /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(menu_item_default, { ...itemProps, classNames: itemClasses }, item.key);
      if (item.wrapper) {
        menuItem2 = item.wrapper(menuItem2);
      }
      return menuItem2;
    })
  ] });
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { ...getBaseProps(), children: [
    topContent,
    content,
    bottomContent
  ] });
}
var menu_default = forwardRef(Menu);
Menu.displayName = "NextUI.Menu";

// node_modules/@nextui-org/menu/dist/chunk-LRDIO3JU.mjs
"use client";
var MenuItemBase = $c1d7fb2ec91bae71$export$6d08773d2e66f8f2;
var menu_item_base_default = MenuItemBase;

// node_modules/@nextui-org/menu/dist/index.mjs
"use client";

// node_modules/@nextui-org/dropdown/dist/chunk-SXHEBZUY.mjs
var import_jsx_runtime11 = __toESM(require_jsx_runtime(), 1);
"use client";
function DropdownMenu(props, ref) {
  const { getMenuProps } = useDropdownContext();
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(popover_content_default, { children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)($9bf71ea28793e738$export$20e40289641fbbb6, { contain: true, restoreFocus: true, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(menu_default, { ...getMenuProps(props, ref) }) }) });
}
var dropdown_menu_default = forwardRef(DropdownMenu);
DropdownMenu.displayName = "NextUI.DropdownMenu";

// node_modules/@nextui-org/dropdown/dist/chunk-63RZRIL7.mjs
var import_jsx_runtime12 = __toESM(require_jsx_runtime(), 1);
"use client";
var DropdownTrigger = forwardRef((props, _) => {
  const { getMenuTriggerProps } = useDropdownContext();
  const { children, ...otherProps } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(popover_trigger_default, { ...getMenuTriggerProps(otherProps), children });
});
DropdownTrigger.displayName = "NextUI.DropdownTrigger";
var dropdown_trigger_default = DropdownTrigger;

// node_modules/@react-stately/menu/dist/import.mjs
var import_react17 = __toESM(require_react(), 1);
function $a28c903ee9ad8dc5$export$79fefeb1c2091ac3(props) {
  let overlayTriggerState = (0, $fc909762b330b746$export$61c6a8c84e605fb6)(props);
  let [focusStrategy, setFocusStrategy] = (0, import_react17.useState)(null);
  return {
    focusStrategy,
    ...overlayTriggerState,
    open(focusStrategy2 = null) {
      setFocusStrategy(focusStrategy2);
      overlayTriggerState.open();
    },
    toggle(focusStrategy2 = null) {
      setFocusStrategy(focusStrategy2);
      overlayTriggerState.toggle();
    }
  };
}

// node_modules/@nextui-org/dropdown/dist/chunk-2FHFYXEQ.mjs
var import_react18 = __toESM(require_react(), 1);
"use client";
function useDropdown(props) {
  const {
    as,
    triggerRef: triggerRefProp,
    isOpen,
    defaultOpen,
    onOpenChange,
    type = "menu",
    trigger = "press",
    placement = "bottom",
    isDisabled = false,
    closeOnSelect = true,
    shouldBlockScroll = true,
    classNames: classNamesProp,
    disableAnimation = false,
    onClose,
    className,
    ...otherProps
  } = props;
  const Component = as || "div";
  const triggerRef = (0, import_react18.useRef)(null);
  const menuTriggerRef = triggerRefProp || triggerRef;
  const menuRef = (0, import_react18.useRef)(null);
  const popoverRef = (0, import_react18.useRef)(null);
  const state = $a28c903ee9ad8dc5$export$79fefeb1c2091ac3({
    trigger,
    isOpen,
    defaultOpen,
    onOpenChange: (isOpen2) => {
      onOpenChange == null ? void 0 : onOpenChange(isOpen2);
      if (!isOpen2) {
        onClose == null ? void 0 : onClose();
      }
    }
  });
  const { menuTriggerProps, menuProps } = $168583247155ddda$export$dc9c12ed27dd1b49(
    { type, trigger, isDisabled },
    state,
    menuTriggerRef
  );
  const classNames = (0, import_react18.useMemo)(
    () => dropdown({
      className
    }),
    [className]
  );
  const onMenuAction = (menuCloseOnSelect) => {
    if (menuCloseOnSelect !== void 0 && !menuCloseOnSelect) {
      return;
    }
    if (closeOnSelect) {
      state.close();
    }
  };
  const getPopoverProps = (props2 = {}) => ({
    state,
    placement,
    ref: popoverRef,
    disableAnimation,
    shouldBlockScroll,
    scrollRef: menuRef,
    triggerRef: menuTriggerRef,
    ...$3ef42575df84b30b$export$9d1611c77c2fe928(otherProps, props2),
    classNames: {
      ...classNamesProp,
      ...props2.classNames,
      content: clsx(classNames, classNamesProp == null ? void 0 : classNamesProp.content, props2.className)
    }
  });
  const getMenuTriggerProps = (props2 = {}, _ref = null) => {
    const { onKeyDown, onPress, onPressStart, ...otherMenuTriggerProps } = menuTriggerProps;
    return {
      ...$3ef42575df84b30b$export$9d1611c77c2fe928(otherMenuTriggerProps, props2),
      ref: mergeRefs(_ref, triggerRef)
    };
  };
  const getMenuProps = (props2, _ref = null) => {
    return {
      ref: mergeRefs(_ref, menuRef),
      menuProps,
      ...$3ef42575df84b30b$export$9d1611c77c2fe928(props2, { onAction: () => onMenuAction(props2 == null ? void 0 : props2.closeOnSelect) })
    };
  };
  return {
    Component,
    menuRef,
    menuProps,
    classNames,
    closeOnSelect,
    onClose: state.close,
    autoFocus: state.focusStrategy || true,
    disableAnimation,
    getPopoverProps,
    getMenuProps,
    getMenuTriggerProps
  };
}

// node_modules/@nextui-org/dropdown/dist/chunk-L6QJ42W6.mjs
var import_react19 = __toESM(require_react(), 1);
var import_jsx_runtime13 = __toESM(require_jsx_runtime(), 1);
"use client";
var Dropdown = (props) => {
  const { children, ...otherProps } = props;
  const context = useDropdown(otherProps);
  const [menuTrigger, menu2] = import_react19.default.Children.toArray(children);
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(DropdownProvider, { value: context, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(popover_default, { ...context.getPopoverProps(), children: [
    menuTrigger,
    menu2
  ] }) });
};
Dropdown.displayName = "NextUI.Dropdown";
var dropdown_default = Dropdown;

// node_modules/@nextui-org/dropdown/dist/index.mjs
"use client";

// node_modules/@nextui-org/image/dist/chunk-DLHLVYAJ.mjs
var import_react20 = __toESM(require_react(), 1);
var import_react21 = __toESM(require_react(), 1);
"use client";
function useImage2(originalProps) {
  const [props, variantProps] = mapPropsVariants(originalProps, image.variantKeys);
  const {
    ref,
    as,
    src,
    className,
    classNames,
    loading,
    isBlurred,
    fallbackSrc,
    isLoading: isLoadingProp,
    disableSkeleton = !!fallbackSrc,
    removeWrapper = false,
    onError,
    onLoad,
    srcSet,
    sizes,
    crossOrigin,
    ...otherProps
  } = props;
  const imageStatus = useImage({
    src,
    loading,
    onError,
    onLoad,
    ignoreFallback: false,
    srcSet,
    sizes,
    crossOrigin
  });
  const isImgLoaded = imageStatus === "loaded" && !isLoadingProp;
  const isLoading = imageStatus === "loading" || isLoadingProp;
  const isZoomed = originalProps.isZoomed;
  const Component = as || "img";
  const domRef = useDOMRef(ref);
  const { w } = (0, import_react21.useMemo)(() => {
    return {
      w: props.width ? typeof props.width === "number" ? `${props.width}px` : props.width : "fit-content"
    };
  }, [props == null ? void 0 : props.width]);
  const showFallback = (!src || !isImgLoaded) && !!fallbackSrc;
  const showSkeleton = isLoading && !disableSkeleton;
  const slots = (0, import_react21.useMemo)(
    () => image({
      ...variantProps,
      showSkeleton
    }),
    [...Object.values(variantProps), showSkeleton]
  );
  const baseStyles = clsx(className, classNames == null ? void 0 : classNames.img);
  const getImgProps = (props2 = {}) => {
    const imgStyles = clsx(baseStyles, props2 == null ? void 0 : props2.className);
    return {
      src,
      ref: domRef,
      "data-loaded": dataAttr(isImgLoaded),
      className: slots.img({ class: imgStyles }),
      loading,
      srcSet,
      sizes,
      crossOrigin,
      ...otherProps
    };
  };
  const getWrapperProps = (0, import_react20.useCallback)(() => {
    const fallbackStyle = showFallback ? {
      backgroundImage: `url(${fallbackSrc})`
    } : {};
    return {
      className: slots.wrapper({ class: classNames == null ? void 0 : classNames.wrapper }),
      style: {
        ...fallbackStyle,
        maxWidth: w
      }
    };
  }, [slots, showFallback, fallbackSrc, classNames == null ? void 0 : classNames.wrapper]);
  const getBlurredImgProps = (0, import_react20.useCallback)(() => {
    return {
      src,
      "aria-hidden": dataAttr(true),
      className: slots.blurredImg({ class: classNames == null ? void 0 : classNames.blurredImg })
    };
  }, [slots, src, classNames == null ? void 0 : classNames.blurredImg]);
  return {
    Component,
    domRef,
    slots,
    classNames,
    isBlurred,
    disableSkeleton,
    fallbackSrc,
    removeWrapper,
    isZoomed,
    isLoading,
    getImgProps,
    getWrapperProps,
    getBlurredImgProps
  };
}

// node_modules/@nextui-org/image/dist/chunk-OFGZKCFR.mjs
var import_react22 = __toESM(require_react(), 1);
var import_jsx_runtime14 = __toESM(require_jsx_runtime(), 1);
"use client";
var Image2 = forwardRef((props, ref) => {
  const {
    Component,
    domRef,
    slots,
    classNames,
    isBlurred,
    isZoomed,
    fallbackSrc,
    removeWrapper,
    disableSkeleton,
    getImgProps,
    getWrapperProps,
    getBlurredImgProps
  } = useImage2({
    ...props,
    ref
  });
  const img = /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Component, { ref: domRef, ...getImgProps() });
  if (removeWrapper) {
    return img;
  }
  const zoomed = /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: slots.zoomedWrapper({ class: classNames == null ? void 0 : classNames.zoomedWrapper }), children: img });
  if (isBlurred) {
    return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { ...getWrapperProps(), children: [
      isZoomed ? zoomed : img,
      (0, import_react22.cloneElement)(img, getBlurredImgProps())
    ] });
  }
  if (isZoomed || !disableSkeleton || fallbackSrc) {
    return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { ...getWrapperProps(), children: [
      " ",
      isZoomed ? zoomed : img
    ] });
  }
  return img;
});
Image2.displayName = "NextUI.Image";
var image_default = Image2;

// node_modules/@nextui-org/image/dist/index.mjs
"use client";

// public/logo.png
var logo_default = "/build/_assets/logo-SIXRPHQC.png";

// app/components/Logo.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\Logo.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\Logo.tsx"
  );
  import.meta.hot.lastModified = "1701659847959.9111";
}
function Logo() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(image_default, { src: logo_default, width: 50, radius: "full" }, void 0, false, {
    fileName: "app/components/Logo.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}
_c = Logo;
var _c;
$RefreshReg$(_c, "Logo");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Navbar.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\Navbar.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\Navbar.tsx"
  );
  import.meta.hot.lastModified = "1703808037375.755";
}
function Header({
  user: user2
}) {
  _s();
  const navigate = useNavigate();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-[200px] flex flex-col p-5", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Logo, {}, void 0, false, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 33,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "ml-3 font-bold", children: "SCRAPY" }, void 0, false, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 34,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 32,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col pt-[50px]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "jobs", prefetch: "render", children: "Jobs" }, void 0, false, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 37,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "profile", prefetch: "render", children: "Profile" }, void 0, false, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 40,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 36,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-auto", children: [
      !user2 && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/login", children: "Login" }, void 0, false, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 45,
        columnNumber: 27
      }, this),
      user2 && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(dropdown_default, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(dropdown_trigger_default, { className: "cursor-pointer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(user_default, { name: "Chase Buchholz", description: "Software Engineer", avatarProps: {
          src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
        } }, void 0, false, {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 48,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 47,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(dropdown_menu_default, { "aria-label": "Static Actions", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(menu_item_base_default, { onClick: () => navigate("/profile"), children: "Profile" }, "profile", false, {
            fileName: "app/components/Navbar.tsx",
            lineNumber: 53,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(menu_item_base_default, { onClick: () => document.getElementById("logout-form").submit(), children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form, { action: "/logout", id: "logout-form", method: "post", children: "Sign Out" }, void 0, false, {
            fileName: "app/components/Navbar.tsx",
            lineNumber: 57,
            columnNumber: 33
          }, this) }, "logout", false, {
            fileName: "app/components/Navbar.tsx",
            lineNumber: 56,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 52,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 46,
        columnNumber: 26
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 44,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Navbar.tsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
}
_s(Header, "CzcTeTziyjMsSrAVmHuCCb6+Bfg=", false, function() {
  return [useNavigate];
});
_c2 = Header;
var _c2;
$RefreshReg$(_c2, "Header");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/root.tsx
var import_auth = __toESM(require_auth(), 1);
var import_openai = __toESM(require_openai(), 1);
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\root.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\root.tsx"
  );
}
var links = () => [{
  rel: "stylesheet",
  href: global_default
}, {
  rel: "stylesheet",
  href: tailwind_default
}];
function App() {
  _s2();
  const {
    user: user2
  } = useLoaderData();
  const navigate = useNavigate();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("title", { children: "Scrapy" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 70,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("link", { rel: "icon", href: "data:image/x-icon;base64,AA" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 71,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 72,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 73,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 69,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { className: "min-h-screen bg-gray-100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NextUIProvider, { navigate, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex min-h-screen", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Header, { user: user2 }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 78,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("main", { className: "bg-gray-400 flex-grow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Outlet, {}, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 80,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 79,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/root.tsx",
        lineNumber: 77,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 84,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 85,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 86,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 76,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 75,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 68,
    columnNumber: 10
  }, this);
}
_s2(App, "6CYTzLFmcz4g2Y6HqP5QtdBugFQ=", false, function() {
  return [useLoaderData, useNavigate];
});
_c3 = App;
var _c3;
$RefreshReg$(_c3, "App");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  App as default,
  links
};
//# sourceMappingURL=/build/root-3IWF7DW3.js.map
