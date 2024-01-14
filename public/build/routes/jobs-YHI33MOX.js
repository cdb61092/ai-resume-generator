import {
  excerpt
} from "/build/_shared/chunk-MGB6ZWPH.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  $7613b1592d41b092$export$6cd28814d92fa9c9,
  $7af3f5b51489e0b5$export$253fe78d46329472,
  $880e95eb8b93ba9a$export$ecf600387e221c37,
  $ae20dd8cbca75726$export$d6daf82dcd84e87c,
  $c5a24bc478652b5f$export$1005530eda016c13,
  $c5a24bc478652b5f$export$5f3398f8733f90e2,
  $c5a24bc478652b5f$export$7475b2c64539e4cf,
  $c5a24bc478652b5f$export$fbdeaa6a76694f71,
  $d496c0a20b6e58ec$export$6c8a5aaad13c9852
} from "/build/_shared/chunk-RR5CIDIT.js";
import {
  require_prisma
} from "/build/_shared/chunk-IWXJHFRL.js";
import {
  $e5be200c675c3b3a$export$a763b9476acd3eb,
  $e5be200c675c3b3a$export$dad6ae84456c676a,
  $e5be200c675c3b3a$export$fc1a364ae1f3ff10,
  $e93e671b31057976$export$b8473d3665f3a75a,
  ChevronDownIcon
} from "/build/_shared/chunk-P2DSO4RZ.js";
import {
  $18f2051aff69b9bf$export$43bb16f9c6d9e3f7,
  $2f04cbc44ee30ce0$export$c826860796309d1b,
  $325a3faab7a68acd$export$a16aca283550c30d,
  $3ef42575df84b30b$export$9d1611c77c2fe928,
  $458b0a5536c1a7cf$export$40bfa8c7b0832715,
  $4f58c5f72bcf79f7$export$496315a1608d9602,
  $507fabe10e71c6fb$export$98e20ec92f614cfe,
  $507fabe10e71c6fb$export$b9b3dfddab17db27,
  $5c3e21d68f1c4674$export$439d29a4e110a164,
  $6179b936705e76d3$export$ae780daf29e6d456,
  $62d8ded9296f3872$export$cfa2225e87938781,
  $65484d02dcb7eb3e$export$457c3d6518dd4c6f,
  $6a99195332edec8b$export$80f3e147d781571c,
  $83013635b024ae3d$export$eac1895992b9f3d6,
  $99facab73266f662$export$5add1d006293d136,
  $9bf71ea28793e738$export$2d6ec8fc375ceafa,
  $bdb11010cef70236$export$f680877a34711e37,
  $c87311424ea30a05$export$a11b0059900ceec8,
  $e6afbd83fe6ebbd2$export$4c014de7c8940b4c,
  $ea8dcbcb9ea1b556$export$51437d503373d223,
  $ef06256079686ba0$export$f8aeda7b10753fa1,
  $f6c31cce2adf654f$export$45712eceda6fad21,
  $f7dceffc5ad7768b$export$4e328f61c538687f,
  $fca6afa0e843324b$export$f12b703ca79dfbb1,
  $ff5963eb1fccf552$export$e08e3b67e392101e,
  __DEV__,
  button_default,
  checkbox,
  clsx,
  createContext2,
  dataAttr,
  filterDOMProps,
  forwardRef,
  mapPropsVariants,
  safeAriaLabel,
  spacer,
  table,
  useDOMRef,
  useFocusableRef,
  usePress,
  warn
} from "/build/_shared/chunk-XEG4DGED.js";
import {
  require_jsx_runtime
} from "/build/_shared/chunk-NMZL6IDN.js";
import {
  Form,
  useLoaderData
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

// empty-module:~/utils/resume/resume.docx.server
var require_resume_docx = __commonJS({
  "empty-module:~/utils/resume/resume.docx.server"(exports, module) {
    module.exports = {};
  }
});

// node_modules/@react-aria/checkbox/dist/import.mjs
var import_react = __toESM(require_react(), 1);

// node_modules/@react-aria/toggle/dist/import.mjs
function $d2c8e2b0480f3f34$export$cbe85ee05b554577(props, state, ref) {
  let { isDisabled = false, isReadOnly = false, value, name, children, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, validationState = "valid", isInvalid } = props;
  let onChange = (e) => {
    e.stopPropagation();
    state.setSelected(e.target.checked);
  };
  let hasChildren = children != null;
  let hasAriaLabel = ariaLabel != null || ariaLabelledby != null;
  if (!hasChildren && !hasAriaLabel)
    console.warn("If you do not provide children, you must specify an aria-label for accessibility");
  let { pressProps, isPressed } = (0, $f6c31cce2adf654f$export$45712eceda6fad21)({
    isDisabled
  });
  let { focusableProps } = (0, $e6afbd83fe6ebbd2$export$4c014de7c8940b4c)(props, ref);
  let interactions = (0, $3ef42575df84b30b$export$9d1611c77c2fe928)(pressProps, focusableProps);
  let domProps = (0, $65484d02dcb7eb3e$export$457c3d6518dd4c6f)(props, {
    labelable: true
  });
  (0, $99facab73266f662$export$5add1d006293d136)(ref, state.isSelected, state.setSelected);
  return {
    inputProps: (0, $3ef42575df84b30b$export$9d1611c77c2fe928)(domProps, {
      "aria-invalid": isInvalid || validationState === "invalid" || void 0,
      "aria-errormessage": props["aria-errormessage"],
      "aria-controls": props["aria-controls"],
      "aria-readonly": isReadOnly || void 0,
      onChange,
      disabled: isDisabled,
      ...value == null ? {} : {
        value
      },
      name,
      type: "checkbox",
      ...interactions
    }),
    isSelected: state.isSelected,
    isPressed,
    isDisabled,
    isReadOnly,
    isInvalid: isInvalid || validationState === "invalid"
  };
}

// node_modules/@react-stately/toggle/dist/import.mjs
function $3017fa7ffdddec74$export$8042c6c013fd5226(props = {}) {
  let { isReadOnly } = props;
  let [isSelected, setSelected] = (0, $458b0a5536c1a7cf$export$40bfa8c7b0832715)(props.isSelected, props.defaultSelected || false, props.onChange);
  function updateSelected(value) {
    if (!isReadOnly)
      setSelected(value);
  }
  function toggleState() {
    if (!isReadOnly)
      setSelected(!isSelected);
  }
  return {
    isSelected,
    setSelected: updateSelected,
    toggle: toggleState
  };
}

// node_modules/@react-aria/checkbox/dist/import.mjs
function $406796ff087fe49b$export$e375f10ce42261c5(props, state, inputRef) {
  let validationState = (0, $e5be200c675c3b3a$export$fc1a364ae1f3ff10)({
    ...props,
    value: state.isSelected
  });
  let { isInvalid, validationErrors, validationDetails } = validationState.displayValidation;
  let { inputProps, isSelected, isPressed, isDisabled, isReadOnly } = (0, $d2c8e2b0480f3f34$export$cbe85ee05b554577)({
    ...props,
    isInvalid
  }, state, inputRef);
  (0, $e93e671b31057976$export$b8473d3665f3a75a)(props, validationState, inputRef);
  let { isIndeterminate, isRequired, validationBehavior = "aria" } = props;
  (0, import_react.useEffect)(() => {
    if (inputRef.current)
      inputRef.current.indeterminate = isIndeterminate;
  });
  return {
    inputProps: {
      ...inputProps,
      checked: isSelected,
      "aria-required": isRequired && validationBehavior === "aria" || void 0,
      required: isRequired && validationBehavior === "native"
    },
    isSelected,
    isPressed,
    isDisabled,
    isReadOnly,
    isInvalid,
    validationErrors,
    validationDetails
  };
}
var $1ae600c947479353$export$ec98120685d4f57d = /* @__PURE__ */ new WeakMap();
function $fba3e38d5ca8983f$export$353b32fc6898d37d(props, state, inputRef) {
  const toggleState = (0, $3017fa7ffdddec74$export$8042c6c013fd5226)({
    isReadOnly: props.isReadOnly || state.isReadOnly,
    isSelected: state.isSelected(props.value),
    onChange(isSelected) {
      if (isSelected)
        state.addValue(props.value);
      else
        state.removeValue(props.value);
      if (props.onChange)
        props.onChange(isSelected);
    }
  });
  let { name, descriptionId, errorMessageId, validationBehavior } = (0, $1ae600c947479353$export$ec98120685d4f57d).get(state);
  var _props_validationBehavior;
  validationBehavior = (_props_validationBehavior = props.validationBehavior) !== null && _props_validationBehavior !== void 0 ? _props_validationBehavior : validationBehavior;
  let { realtimeValidation } = (0, $e5be200c675c3b3a$export$fc1a364ae1f3ff10)({
    ...props,
    value: toggleState.isSelected,
    // Server validation is handled at the group level.
    name: void 0,
    validationBehavior: "aria"
  });
  let nativeValidation = (0, import_react.useRef)((0, $e5be200c675c3b3a$export$dad6ae84456c676a));
  let updateValidation = () => {
    state.setInvalid(props.value, realtimeValidation.isInvalid ? realtimeValidation : nativeValidation.current);
  };
  (0, import_react.useEffect)(updateValidation);
  let combinedRealtimeValidation = state.realtimeValidation.isInvalid ? state.realtimeValidation : realtimeValidation;
  let displayValidation = validationBehavior === "native" ? state.displayValidation : combinedRealtimeValidation;
  var _props_isRequired;
  let res = (0, $406796ff087fe49b$export$e375f10ce42261c5)({
    ...props,
    isReadOnly: props.isReadOnly || state.isReadOnly,
    isDisabled: props.isDisabled || state.isDisabled,
    name: props.name || name,
    isRequired: (_props_isRequired = props.isRequired) !== null && _props_isRequired !== void 0 ? _props_isRequired : state.isRequired,
    validationBehavior,
    [(0, $e5be200c675c3b3a$export$a763b9476acd3eb)]: {
      realtimeValidation: combinedRealtimeValidation,
      displayValidation,
      resetValidation: state.resetValidation,
      commitValidation: state.commitValidation,
      updateValidation(v) {
        nativeValidation.current = v;
        updateValidation();
      }
    }
  }, toggleState, inputRef);
  return {
    ...res,
    inputProps: {
      ...res.inputProps,
      "aria-describedby": [
        props["aria-describedby"],
        state.isInvalid ? errorMessageId : null,
        descriptionId
      ].filter(Boolean).join(" ") || void 0
    }
  };
}

// node_modules/@nextui-org/checkbox/dist/chunk-ACAJT7GC.mjs
"use client";
var [CheckboxGroupProvider, useCheckboxGroupContext] = createContext2({
  name: "CheckboxGroupContext",
  strict: false
});

// node_modules/@nextui-org/checkbox/dist/chunk-5E6Z6LLK.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
"use client";
function CheckIcon(props) {
  const { isSelected, disableAnimation, ...otherProps } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { "aria-hidden": "true", role: "presentation", viewBox: "0 0 17 18", ...otherProps, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "polyline",
    {
      fill: "none",
      points: "1 9 7 14 15 4",
      stroke: "currentColor",
      strokeDasharray: 22,
      strokeDashoffset: isSelected ? 44 : 66,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      style: !disableAnimation && isSelected ? {
        transition: "stroke-dashoffset 250ms linear 0.2s"
      } : {}
    }
  ) });
}
function IndeterminateIcon(props) {
  const { isSelected, disableAnimation, ...otherProps } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { stroke: "currentColor", strokeWidth: 3, viewBox: "0 0 24 24", ...otherProps, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: "21", x2: "3", y1: "12", y2: "12" }) });
}
function CheckboxIcon(props) {
  const { isIndeterminate, ...otherProps } = props;
  const BaseIcon = isIndeterminate ? IndeterminateIcon : CheckIcon;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BaseIcon, { ...otherProps });
}

// node_modules/@nextui-org/checkbox/dist/chunk-QOTGRXUM.mjs
var import_react2 = __toESM(require_react(), 1);
var import_react3 = __toESM(require_react(), 1);
"use client";
function useCheckbox(props = {}) {
  var _a, _b, _c4, _d, _e, _f;
  const groupContext = useCheckboxGroupContext();
  const isInGroup = !!groupContext;
  const {
    as,
    ref,
    value = "",
    children,
    icon,
    name,
    isRequired = false,
    isReadOnly: isReadOnlyProp = false,
    autoFocus = false,
    isSelected: isSelectedProp,
    validationState,
    size = (_a = groupContext == null ? void 0 : groupContext.size) != null ? _a : "md",
    color = (_b = groupContext == null ? void 0 : groupContext.color) != null ? _b : "primary",
    radius = groupContext == null ? void 0 : groupContext.radius,
    lineThrough = (_c4 = groupContext == null ? void 0 : groupContext.lineThrough) != null ? _c4 : false,
    isDisabled: isDisabledProp = (_d = groupContext == null ? void 0 : groupContext.isDisabled) != null ? _d : false,
    disableAnimation = (_e = groupContext == null ? void 0 : groupContext.disableAnimation) != null ? _e : false,
    isInvalid = validationState ? validationState === "invalid" : (_f = groupContext == null ? void 0 : groupContext.isInvalid) != null ? _f : false,
    isIndeterminate = false,
    defaultSelected,
    classNames,
    onChange,
    className,
    onValueChange,
    ...otherProps
  } = props;
  if (groupContext && __DEV__) {
    if (isSelectedProp) {
      warn(
        "The Checkbox.Group is being used, `isSelected` will be ignored. Use the `value` of the Checkbox.Group instead.",
        "Checkbox"
      );
    }
    if (defaultSelected) {
      warn(
        "The Checkbox.Group is being used, `defaultSelected` will be ignored. Use the `defaultValue` of the Checkbox.Group instead.",
        "Checkbox"
      );
    }
  }
  const Component = as || "label";
  const inputRef = (0, import_react3.useRef)(null);
  const domRef = useFocusableRef(ref, inputRef);
  const labelId = (0, import_react2.useId)();
  const ariaCheckboxProps = (0, import_react3.useMemo)(() => {
    return {
      name,
      value,
      children,
      autoFocus,
      defaultSelected,
      isIndeterminate,
      isRequired,
      isInvalid,
      isSelected: isSelectedProp,
      isDisabled: isDisabledProp,
      isReadOnly: isReadOnlyProp,
      "aria-label": safeAriaLabel(otherProps["aria-label"], children),
      "aria-labelledby": otherProps["aria-labelledby"] || labelId,
      onChange: onValueChange
    };
  }, [
    value,
    name,
    labelId,
    children,
    autoFocus,
    isInvalid,
    isIndeterminate,
    isDisabledProp,
    isReadOnlyProp,
    isSelectedProp,
    defaultSelected,
    otherProps["aria-label"],
    otherProps["aria-labelledby"],
    onValueChange
  ]);
  const {
    inputProps,
    isSelected,
    isDisabled,
    isReadOnly,
    isPressed: isPressedKeyboard
  } = isInGroup ? $fba3e38d5ca8983f$export$353b32fc6898d37d(
    {
      ...ariaCheckboxProps,
      isInvalid
    },
    groupContext.groupState,
    inputRef
  ) : $406796ff087fe49b$export$e375f10ce42261c5(ariaCheckboxProps, $3017fa7ffdddec74$export$8042c6c013fd5226(ariaCheckboxProps), inputRef);
  const isInteractionDisabled = isDisabled || isReadOnly;
  const [isPressed, setPressed] = (0, import_react2.useState)(false);
  const { pressProps } = usePress({
    isDisabled: isInteractionDisabled,
    onPressStart(e) {
      if (e.pointerType !== "keyboard") {
        setPressed(true);
      }
    },
    onPressEnd(e) {
      if (e.pointerType !== "keyboard") {
        setPressed(false);
      }
    }
  });
  const pressed = isInteractionDisabled ? false : isPressed || isPressedKeyboard;
  if (isRequired) {
    inputProps.required = true;
  }
  const { hoverProps, isHovered } = $6179b936705e76d3$export$ae780daf29e6d456({
    isDisabled: inputProps.disabled
  });
  const { focusProps, isFocused, isFocusVisible } = $f7dceffc5ad7768b$export$4e328f61c538687f({
    autoFocus: inputProps.autoFocus
  });
  const slots = (0, import_react3.useMemo)(
    () => checkbox({
      color,
      size,
      radius,
      isInvalid,
      lineThrough,
      isDisabled,
      disableAnimation
    }),
    [color, size, radius, isInvalid, lineThrough, isDisabled, disableAnimation]
  );
  const baseStyles = clsx(classNames == null ? void 0 : classNames.base, className);
  const getBaseProps = (0, import_react2.useCallback)(() => {
    return {
      ref: domRef,
      className: slots.base({ class: baseStyles }),
      "data-disabled": dataAttr(isDisabled),
      "data-selected": dataAttr(isSelected || isIndeterminate),
      "data-invalid": dataAttr(isInvalid),
      "data-hover": dataAttr(isHovered),
      "data-focus": dataAttr(isFocused),
      "data-pressed": dataAttr(pressed),
      "data-readonly": dataAttr(inputProps.readOnly),
      "data-focus-visible": dataAttr(isFocusVisible),
      "data-indeterminate": dataAttr(isIndeterminate),
      ...$3ef42575df84b30b$export$9d1611c77c2fe928(hoverProps, pressProps, otherProps)
    };
  }, [
    slots,
    baseStyles,
    isDisabled,
    isSelected,
    isIndeterminate,
    isInvalid,
    isHovered,
    isFocused,
    pressed,
    inputProps.readOnly,
    isFocusVisible,
    hoverProps,
    pressProps,
    otherProps
  ]);
  const getWrapperProps = (0, import_react2.useCallback)(
    (props2 = {}) => {
      return {
        ...props2,
        "aria-hidden": true,
        className: clsx(slots.wrapper({ class: clsx(classNames == null ? void 0 : classNames.wrapper, props2 == null ? void 0 : props2.className) }))
      };
    },
    [slots, classNames == null ? void 0 : classNames.wrapper]
  );
  const getInputProps = (0, import_react2.useCallback)(() => {
    return {
      ref: inputRef,
      ...$3ef42575df84b30b$export$9d1611c77c2fe928(inputProps, focusProps),
      onChange: $ff5963eb1fccf552$export$e08e3b67e392101e(inputProps.onChange, onChange)
    };
  }, [inputProps, focusProps, onChange]);
  const getLabelProps = (0, import_react2.useCallback)(
    () => ({
      id: labelId,
      className: slots.label({ class: classNames == null ? void 0 : classNames.label })
    }),
    [slots, classNames == null ? void 0 : classNames.label, isDisabled, isSelected, isInvalid]
  );
  const getIconProps = (0, import_react2.useCallback)(
    () => ({
      isSelected,
      isIndeterminate: !!isIndeterminate,
      disableAnimation: !!disableAnimation,
      className: slots.icon({ class: classNames == null ? void 0 : classNames.icon })
    }),
    [slots, classNames == null ? void 0 : classNames.icon, isSelected, isIndeterminate, disableAnimation]
  );
  return {
    Component,
    icon,
    children,
    isSelected,
    isDisabled,
    isInvalid,
    isFocused,
    isHovered,
    isFocusVisible,
    getBaseProps,
    getWrapperProps,
    getInputProps,
    getLabelProps,
    getIconProps
  };
}

// node_modules/@nextui-org/checkbox/dist/chunk-AMSULWPV.mjs
var import_react4 = __toESM(require_react(), 1);
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
"use client";
var Checkbox = forwardRef((props, ref) => {
  const {
    Component,
    children,
    icon = /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(CheckboxIcon, {}),
    getBaseProps,
    getWrapperProps,
    getInputProps,
    getIconProps,
    getLabelProps
  } = useCheckbox({
    ...props,
    ref
  });
  const clonedIcon = typeof icon === "function" ? icon(getIconProps()) : (0, import_react4.cloneElement)(icon, getIconProps());
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(Component, { ...getBaseProps(), children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)($5c3e21d68f1c4674$export$439d29a4e110a164, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("input", { ...getInputProps() }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { ...getWrapperProps(), children: clonedIcon }),
    children && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { ...getLabelProps(), children })
  ] });
});
Checkbox.displayName = "NextUI.Checkbox";
var checkbox_default = Checkbox;

// node_modules/@nextui-org/checkbox/dist/index.mjs
"use client";

// node_modules/@react-stately/virtualizer/dist/import.mjs
var import_react5 = __toESM(require_react(), 1);
var $3041db3296945e6e$export$baf26146a414f24a = class {
  /**
  * Returns a copy of this point.
  */
  copy() {
    return new $3041db3296945e6e$export$baf26146a414f24a(this.x, this.y);
  }
  /**
  * Checks if two points are equal.
  */
  equals(point) {
    return this.x === point.x && this.y === point.y;
  }
  /**
  * Returns true if this point is the origin.
  */
  isOrigin() {
    return this.x === 0 && this.y === 0;
  }
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
};
var $60423f92c7f9ad87$export$c79fc6492f3af13d = class {
  /**
  * The maximum x-coordinate in the rectangle.
  */
  get maxX() {
    return this.x + this.width;
  }
  /**
  * The maximum y-coordinate in the rectangle.
  */
  get maxY() {
    return this.y + this.height;
  }
  /**
  * The area of the rectangle.
  */
  get area() {
    return this.width * this.height;
  }
  /**
  * The top left corner of the rectangle.
  */
  get topLeft() {
    return new (0, $3041db3296945e6e$export$baf26146a414f24a)(this.x, this.y);
  }
  /**
  * The top right corner of the rectangle.
  */
  get topRight() {
    return new (0, $3041db3296945e6e$export$baf26146a414f24a)(this.maxX, this.y);
  }
  /**
  * The bottom left corner of the rectangle.
  */
  get bottomLeft() {
    return new (0, $3041db3296945e6e$export$baf26146a414f24a)(this.x, this.maxY);
  }
  /**
  * The bottom right corner of the rectangle.
  */
  get bottomRight() {
    return new (0, $3041db3296945e6e$export$baf26146a414f24a)(this.maxX, this.maxY);
  }
  /**
  * Returns whether this rectangle intersects another rectangle.
  * @param rect - The rectangle to check.
  */
  intersects(rect) {
    return this.x <= rect.x + rect.width && rect.x <= this.x + this.width && this.y <= rect.y + rect.height && rect.y <= this.y + this.height;
  }
  /**
  * Returns whether this rectangle fully contains another rectangle.
  * @param rect - The rectangle to check.
  */
  containsRect(rect) {
    return this.x <= rect.x && this.y <= rect.y && this.maxX >= rect.maxX && this.maxY >= rect.maxY;
  }
  /**
  * Returns whether the rectangle contains the given point.
  * @param point - The point to check.
  */
  containsPoint(point) {
    return this.x <= point.x && this.y <= point.y && this.maxX >= point.x && this.maxY >= point.y;
  }
  /**
  * Returns the first corner of this rectangle (from top to bottom, left to right)
  * that is contained in the given rectangle, or null of the rectangles do not intersect.
  * @param rect - The rectangle to check.
  */
  getCornerInRect(rect) {
    for (let key of [
      "topLeft",
      "topRight",
      "bottomLeft",
      "bottomRight"
    ]) {
      if (rect.containsPoint(this[key]))
        return key;
    }
    return null;
  }
  equals(rect) {
    return rect.x === this.x && rect.y === this.y && rect.width === this.width && rect.height === this.height;
  }
  pointEquals(point) {
    return this.x === point.x && this.y === point.y;
  }
  sizeEquals(size) {
    return this.width === size.width && this.height === size.height;
  }
  /**
  * Returns the union of this Rect and another.
  */
  union(other) {
    let x = Math.min(this.x, other.x);
    let y = Math.min(this.y, other.y);
    let width = Math.max(this.maxX, other.maxX) - x;
    let height = Math.max(this.maxY, other.maxY) - y;
    return new $60423f92c7f9ad87$export$c79fc6492f3af13d(x, y, width, height);
  }
  /**
  * Returns the intersection of this Rect with another.
  * If the rectangles do not intersect, an all zero Rect is returned.
  */
  intersection(other) {
    if (!this.intersects(other))
      return new $60423f92c7f9ad87$export$c79fc6492f3af13d(0, 0, 0, 0);
    let x = Math.max(this.x, other.x);
    let y = Math.max(this.y, other.y);
    return new $60423f92c7f9ad87$export$c79fc6492f3af13d(x, y, Math.min(this.maxX, other.maxX) - x, Math.min(this.maxY, other.maxY) - y);
  }
  /**
  * Returns a copy of this rectangle.
  */
  copy() {
    return new $60423f92c7f9ad87$export$c79fc6492f3af13d(this.x, this.y, this.width, this.height);
  }
  constructor(x = 0, y = 0, width = 0, height = 0) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
};
var $3eb131dcf37ad5f8$var$perf = typeof window !== "undefined" ? window.performance : null;
var $3eb131dcf37ad5f8$var$perfNow = $3eb131dcf37ad5f8$var$perf && ($3eb131dcf37ad5f8$var$perf.now || $3eb131dcf37ad5f8$var$perf.webkitNow || $3eb131dcf37ad5f8$var$perf.msNow || $3eb131dcf37ad5f8$var$perf.mozNow);
var $3eb131dcf37ad5f8$var$getTime = $3eb131dcf37ad5f8$var$perfNow ? $3eb131dcf37ad5f8$var$perfNow.bind($3eb131dcf37ad5f8$var$perf) : function() {
  return Date.now ? Date.now() : (/* @__PURE__ */ new Date()).getTime();
};

// node_modules/@react-aria/grid/dist/import.mjs
var import_react6 = __toESM(require_react(), 1);

// node_modules/@react-aria/live-announcer/dist/import.mjs
var $319e236875307eab$var$LIVEREGION_TIMEOUT_DELAY = 7e3;
var $319e236875307eab$var$liveAnnouncer = null;
function $319e236875307eab$export$a9b970dcc4ae71a9(message, assertiveness = "assertive", timeout = $319e236875307eab$var$LIVEREGION_TIMEOUT_DELAY) {
  if (!$319e236875307eab$var$liveAnnouncer)
    $319e236875307eab$var$liveAnnouncer = new $319e236875307eab$var$LiveAnnouncer();
  $319e236875307eab$var$liveAnnouncer.announce(message, assertiveness, timeout);
}
var $319e236875307eab$var$LiveAnnouncer = class {
  createLog(ariaLive) {
    let node = document.createElement("div");
    node.setAttribute("role", "log");
    node.setAttribute("aria-live", ariaLive);
    node.setAttribute("aria-relevant", "additions");
    return node;
  }
  destroy() {
    if (!this.node)
      return;
    document.body.removeChild(this.node);
    this.node = null;
  }
  announce(message, assertiveness = "assertive", timeout = $319e236875307eab$var$LIVEREGION_TIMEOUT_DELAY) {
    if (!this.node)
      return;
    let node = document.createElement("div");
    node.textContent = message;
    if (assertiveness === "assertive")
      this.assertiveLog.appendChild(node);
    else
      this.politeLog.appendChild(node);
    if (message !== "")
      setTimeout(() => {
        node.remove();
      }, timeout);
  }
  clear(assertiveness) {
    if (!this.node)
      return;
    if (!assertiveness || assertiveness === "assertive")
      this.assertiveLog.innerHTML = "";
    if (!assertiveness || assertiveness === "polite")
      this.politeLog.innerHTML = "";
  }
  constructor() {
    this.node = document.createElement("div");
    this.node.dataset.liveAnnouncer = "true";
    Object.assign(this.node.style, {
      border: 0,
      clip: "rect(0 0 0 0)",
      clipPath: "inset(50%)",
      height: "1px",
      margin: "-1px",
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      width: "1px",
      whiteSpace: "nowrap"
    });
    this.assertiveLog = this.createLog("assertive");
    this.node.appendChild(this.assertiveLog);
    this.politeLog = this.createLog("polite");
    this.node.appendChild(this.politeLog);
    document.body.prepend(this.node);
  }
};

// node_modules/@react-aria/grid/dist/import.mjs
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $d1c300d9c497e402$export$de9feff04fda126e = class {
  isCell(node) {
    return node.type === "cell";
  }
  isRow(node) {
    return node.type === "row" || node.type === "item";
  }
  findPreviousKey(fromKey, pred) {
    let key = fromKey != null ? this.collection.getKeyBefore(fromKey) : this.collection.getLastKey();
    while (key != null) {
      let item = this.collection.getItem(key);
      if (!this.disabledKeys.has(key) && (!pred || pred(item)))
        return key;
      key = this.collection.getKeyBefore(key);
    }
  }
  findNextKey(fromKey, pred) {
    let key = fromKey != null ? this.collection.getKeyAfter(fromKey) : this.collection.getFirstKey();
    while (key != null) {
      let item = this.collection.getItem(key);
      if (!this.disabledKeys.has(key) && (!pred || pred(item)))
        return key;
      key = this.collection.getKeyAfter(key);
    }
  }
  getKeyBelow(key) {
    let startItem = this.collection.getItem(key);
    if (!startItem)
      return;
    if (this.isCell(startItem))
      key = startItem.parentKey;
    key = this.findNextKey(key);
    if (key != null) {
      if (this.isCell(startItem)) {
        let item = this.collection.getItem(key);
        return (0, $c5a24bc478652b5f$export$5f3398f8733f90e2)((0, $c5a24bc478652b5f$export$1005530eda016c13)(item, this.collection), startItem.index).key;
      }
      if (this.focusMode === "row")
        return key;
    }
  }
  getKeyAbove(key) {
    let startItem = this.collection.getItem(key);
    if (!startItem)
      return;
    if (this.isCell(startItem))
      key = startItem.parentKey;
    key = this.findPreviousKey(key);
    if (key != null) {
      if (this.isCell(startItem)) {
        let item = this.collection.getItem(key);
        return (0, $c5a24bc478652b5f$export$5f3398f8733f90e2)((0, $c5a24bc478652b5f$export$1005530eda016c13)(item, this.collection), startItem.index).key;
      }
      if (this.focusMode === "row")
        return key;
    }
  }
  getKeyRightOf(key) {
    let item = this.collection.getItem(key);
    if (!item)
      return;
    if (this.isRow(item)) {
      let children = (0, $c5a24bc478652b5f$export$1005530eda016c13)(item, this.collection);
      return this.direction === "rtl" ? (0, $c5a24bc478652b5f$export$7475b2c64539e4cf)(children).key : (0, $c5a24bc478652b5f$export$fbdeaa6a76694f71)(children).key;
    }
    if (this.isCell(item)) {
      let parent = this.collection.getItem(item.parentKey);
      let children = (0, $c5a24bc478652b5f$export$1005530eda016c13)(parent, this.collection);
      let next = this.direction === "rtl" ? (0, $c5a24bc478652b5f$export$5f3398f8733f90e2)(children, item.index - 1) : (0, $c5a24bc478652b5f$export$5f3398f8733f90e2)(children, item.index + 1);
      if (next)
        return next.key;
      if (this.focusMode === "row")
        return item.parentKey;
      return this.direction === "rtl" ? this.getFirstKey(key) : this.getLastKey(key);
    }
  }
  getKeyLeftOf(key) {
    let item = this.collection.getItem(key);
    if (!item)
      return;
    if (this.isRow(item)) {
      let children = (0, $c5a24bc478652b5f$export$1005530eda016c13)(item, this.collection);
      return this.direction === "rtl" ? (0, $c5a24bc478652b5f$export$fbdeaa6a76694f71)(children).key : (0, $c5a24bc478652b5f$export$7475b2c64539e4cf)(children).key;
    }
    if (this.isCell(item)) {
      let parent = this.collection.getItem(item.parentKey);
      let children = (0, $c5a24bc478652b5f$export$1005530eda016c13)(parent, this.collection);
      let prev = this.direction === "rtl" ? (0, $c5a24bc478652b5f$export$5f3398f8733f90e2)(children, item.index + 1) : (0, $c5a24bc478652b5f$export$5f3398f8733f90e2)(children, item.index - 1);
      if (prev)
        return prev.key;
      if (this.focusMode === "row")
        return item.parentKey;
      return this.direction === "rtl" ? this.getLastKey(key) : this.getFirstKey(key);
    }
  }
  getFirstKey(key, global) {
    let item;
    if (key != null) {
      item = this.collection.getItem(key);
      if (!item)
        return;
      if (this.isCell(item) && !global) {
        let parent = this.collection.getItem(item.parentKey);
        return (0, $c5a24bc478652b5f$export$fbdeaa6a76694f71)((0, $c5a24bc478652b5f$export$1005530eda016c13)(parent, this.collection)).key;
      }
    }
    key = this.findNextKey();
    if (key != null && item && this.isCell(item) && global || this.focusMode === "cell") {
      let item2 = this.collection.getItem(key);
      key = (0, $c5a24bc478652b5f$export$fbdeaa6a76694f71)((0, $c5a24bc478652b5f$export$1005530eda016c13)(item2, this.collection)).key;
    }
    return key;
  }
  getLastKey(key, global) {
    let item;
    if (key != null) {
      item = this.collection.getItem(key);
      if (!item)
        return;
      if (this.isCell(item) && !global) {
        let parent = this.collection.getItem(item.parentKey);
        let children = (0, $c5a24bc478652b5f$export$1005530eda016c13)(parent, this.collection);
        return (0, $c5a24bc478652b5f$export$7475b2c64539e4cf)(children).key;
      }
    }
    key = this.findPreviousKey();
    if (key != null && item && this.isCell(item) && global || this.focusMode === "cell") {
      let item2 = this.collection.getItem(key);
      let children = (0, $c5a24bc478652b5f$export$1005530eda016c13)(item2, this.collection);
      key = (0, $c5a24bc478652b5f$export$7475b2c64539e4cf)(children).key;
    }
    return key;
  }
  getItem(key) {
    return this.ref.current.querySelector(`[data-key="${key}"]`);
  }
  getItemRect(key) {
    var _this_layout_getLayoutInfo;
    if (this.layout)
      return (_this_layout_getLayoutInfo = this.layout.getLayoutInfo(key)) === null || _this_layout_getLayoutInfo === void 0 ? void 0 : _this_layout_getLayoutInfo.rect;
    let item = this.getItem(key);
    if (item)
      return new (0, $60423f92c7f9ad87$export$c79fc6492f3af13d)(item.offsetLeft, item.offsetTop, item.offsetWidth, item.offsetHeight);
  }
  getPageHeight() {
    var _this_layout_virtualizer, _this_ref_current, _this_ref;
    if (this.layout)
      return (_this_layout_virtualizer = this.layout.virtualizer) === null || _this_layout_virtualizer === void 0 ? void 0 : _this_layout_virtualizer.visibleRect.height;
    return (_this_ref = this.ref) === null || _this_ref === void 0 ? void 0 : (_this_ref_current = _this_ref.current) === null || _this_ref_current === void 0 ? void 0 : _this_ref_current.offsetHeight;
  }
  getContentHeight() {
    var _this_ref_current, _this_ref;
    if (this.layout)
      return this.layout.getContentSize().height;
    return (_this_ref = this.ref) === null || _this_ref === void 0 ? void 0 : (_this_ref_current = _this_ref.current) === null || _this_ref_current === void 0 ? void 0 : _this_ref_current.scrollHeight;
  }
  getKeyPageAbove(key) {
    let itemRect = this.getItemRect(key);
    if (!itemRect)
      return null;
    let pageY = Math.max(0, itemRect.maxY - this.getPageHeight());
    while (itemRect && itemRect.y > pageY) {
      key = this.getKeyAbove(key);
      itemRect = this.getItemRect(key);
    }
    return key;
  }
  getKeyPageBelow(key) {
    let itemRect = this.getItemRect(key);
    if (!itemRect)
      return null;
    let pageHeight = this.getPageHeight();
    let pageY = Math.min(this.getContentHeight(), itemRect.y + pageHeight);
    while (itemRect && itemRect.maxY < pageY) {
      let nextKey = this.getKeyBelow(key);
      itemRect = this.getItemRect(nextKey);
      if (nextKey != null)
        key = nextKey;
    }
    return key;
  }
  getKeyForSearch(search, fromKey) {
    if (!this.collator)
      return null;
    let collection = this.collection;
    let key = fromKey !== null && fromKey !== void 0 ? fromKey : this.getFirstKey();
    let startItem = collection.getItem(key);
    if (startItem.type === "cell")
      key = startItem.parentKey;
    let hasWrapped = false;
    while (key != null) {
      let item = collection.getItem(key);
      if (item.textValue) {
        let substring = item.textValue.slice(0, search.length);
        if (this.collator.compare(substring, search) === 0) {
          if (this.isRow(item) && this.focusMode === "cell")
            return (0, $c5a24bc478652b5f$export$fbdeaa6a76694f71)((0, $c5a24bc478652b5f$export$1005530eda016c13)(item, this.collection)).key;
          return item.key;
        }
      }
      key = this.findNextKey(key);
      if (key == null && !hasWrapped) {
        key = this.getFirstKey();
        hasWrapped = true;
      }
    }
    return null;
  }
  constructor(options) {
    this.collection = options.collection;
    this.disabledKeys = options.disabledKeys;
    this.ref = options.ref;
    this.direction = options.direction;
    this.collator = options.collator;
    this.layout = options.layout;
    this.focusMode = options.focusMode || "row";
  }
};
var $1af922eb41e03c8f$export$e6235c0d09b995d0 = /* @__PURE__ */ new WeakMap();
var $835c96616a7cb4f9$exports = {};
var $682989befd4f478d$exports = {};
$682989befd4f478d$exports = {
  "deselectedItem": (args) => `${args.item} \u063A\u064A\u0631 \u0627\u0644\u0645\u062D\u062F\u062F`,
  "longPressToSelect": `\u0627\u0636\u063A\u0637 \u0645\u0637\u0648\u0644\u064B\u0627 \u0644\u0644\u062F\u062E\u0648\u0644 \u0625\u0644\u0649 \u0648\u0636\u0639 \u0627\u0644\u062A\u062D\u062F\u064A\u062F.`,
  "select": `\u062A\u062D\u062F\u064A\u062F`,
  "selectedAll": `\u062C\u0645\u064A\u0639 \u0627\u0644\u0639\u0646\u0627\u0635\u0631 \u0627\u0644\u0645\u062D\u062F\u062F\u0629.`,
  "selectedCount": (args, formatter) => `${formatter.plural(args.count, {
    "=0": `\u0644\u0645 \u064A\u062A\u0645 \u062A\u062D\u062F\u064A\u062F \u0639\u0646\u0627\u0635\u0631`,
    one: () => `${formatter.number(args.count)} \u0639\u0646\u0635\u0631 \u0645\u062D\u062F\u062F`,
    other: () => `${formatter.number(args.count)} \u0639\u0646\u0635\u0631 \u0645\u062D\u062F\u062F`
  })}.`,
  "selectedItem": (args) => `${args.item} \u0627\u0644\u0645\u062D\u062F\u062F`
};
var $f7fca02019afd941$exports = {};
$f7fca02019afd941$exports = {
  "deselectedItem": (args) => `${args.item} \u043D\u0435 \u0435 \u0438\u0437\u0431\u0440\u0430\u043D.`,
  "longPressToSelect": `\u041D\u0430\u0442\u0438\u0441\u043D\u0435\u0442\u0435 \u0438 \u0437\u0430\u0434\u0440\u044A\u0436\u0442\u0435 \u0437\u0430 \u0434\u0430 \u0432\u043B\u0435\u0437\u0435\u0442\u0435 \u0432 \u0438\u0437\u0431\u0438\u0440\u0430\u0442\u0435\u043B\u0435\u043D \u0440\u0435\u0436\u0438\u043C.`,
  "select": `\u0418\u0437\u0431\u0435\u0440\u0435\u0442\u0435`,
  "selectedAll": `\u0412\u0441\u0438\u0447\u043A\u0438 \u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0438 \u0441\u0430 \u0438\u0437\u0431\u0440\u0430\u043D\u0438.`,
  "selectedCount": (args, formatter) => `${formatter.plural(args.count, {
    "=0": `\u041D\u044F\u043C\u0430 \u0438\u0437\u0431\u0440\u0430\u043D\u0438 \u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0438`,
    one: () => `${formatter.number(args.count)} \u0438\u0437\u0431\u0440\u0430\u043D \u0435\u043B\u0435\u043C\u0435\u043D\u0442`,
    other: () => `${formatter.number(args.count)} \u0438\u0437\u0431\u0440\u0430\u043D\u0438 \u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0438`
  })}.`,
  "selectedItem": (args) => `${args.item} \u0438\u0437\u0431\u0440\u0430\u043D.`
};
var $8f86f40be75387f1$exports = {};
$8f86f40be75387f1$exports = {
  "deselectedItem": (args) => `Polo\u017Eka ${args.item} nen\xED vybr\xE1na.`,
  "longPressToSelect": `Dlouh\xFDm stisknut\xEDm p\u0159ejdete do re\u017Eimu v\xFDb\u011Bru.`,
  "select": `Vybrat`,
  "selectedAll": `Vybr\xE1ny v\u0161echny polo\u017Eky.`,
  "selectedCount": (args, formatter) => `${formatter.plural(args.count, {
    "=0": `Nevybr\xE1ny \u017E\xE1dn\xE9 polo\u017Eky`,
    one: () => `Vybr\xE1na ${formatter.number(args.count)} polo\u017Eka`,
    other: () => `Vybr\xE1no ${formatter.number(args.count)} polo\u017Eek`
  })}.`,
  "selectedItem": (args) => `Vybr\xE1na polo\u017Eka ${args.item}.`
};
var $db24ba43c8d652ee$exports = {};
$db24ba43c8d652ee$exports = {
  "deselectedItem": (args) => `${args.item} ikke valgt.`,
  "longPressToSelect": `Lav et langt tryk for at aktivere valgtilstand.`,
  "select": `V\xE6lg`,
  "selectedAll": `Alle elementer valgt.`,
  "selectedCount": (args, formatter) => `${formatter.plural(args.count, {
    "=0": `Ingen elementer valgt`,
    one: () => `${formatter.number(args.count)} element valgt`,
    other: () => `${formatter.number(args.count)} elementer valgt`
  })}.`,
  "selectedItem": (args) => `${args.item} valgt.`
};
var $f8f1e72c8b5447d6$exports = {};
$f8f1e72c8b5447d6$exports = {
  "deselectedItem": (args) => `${args.item} nicht ausgew\xE4hlt.`,
  "longPressToSelect": `Gedr\xFCckt halten, um Auswahlmodus zu \xF6ffnen.`,
  "select": `Ausw\xE4hlen`,
  "selectedAll": `Alle Elemente ausgew\xE4hlt.`,
  "selectedCount": (args, formatter) => `${formatter.plural(args.count, {
    "=0": `Keine Elemente ausgew\xE4hlt`,
    one: () => `${formatter.number(args.count)} Element ausgew\xE4hlt`,
    other: () => `${formatter.number(args.count)} Elemente ausgew\xE4hlt`
  })}.`,
  "selectedItem": (args) => `${args.item} ausgew\xE4hlt.`
};
var $9a73ed2983c3ab0b$exports = {};
$9a73ed2983c3ab0b$exports = {
  "deselectedItem": (args) => `\u0394\u03B5\u03BD \u03B5\u03C0\u03B9\u03BB\u03AD\u03C7\u03B8\u03B7\u03BA\u03B5 \u03C4\u03BF \u03C3\u03C4\u03BF\u03B9\u03C7\u03B5\u03AF\u03BF ${args.item}.`,
  "longPressToSelect": `\u03A0\u03B1\u03C4\u03AE\u03C3\u03C4\u03B5 \u03C0\u03B1\u03C1\u03B1\u03C4\u03B5\u03C4\u03B1\u03BC\u03AD\u03BD\u03B1 \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03BC\u03C0\u03B5\u03AF\u03C4\u03B5 \u03C3\u03B5 \u03BB\u03B5\u03B9\u03C4\u03BF\u03C5\u03C1\u03B3\u03AF\u03B1 \u03B5\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE\u03C2.`,
  "select": `\u0395\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE`,
  "selectedAll": `\u0395\u03C0\u03B9\u03BB\u03AD\u03C7\u03B8\u03B7\u03BA\u03B1\u03BD \u03CC\u03BB\u03B1 \u03C4\u03B1 \u03C3\u03C4\u03BF\u03B9\u03C7\u03B5\u03AF\u03B1.`,
  "selectedCount": (args, formatter) => `${formatter.plural(args.count, {
    "=0": `\u0394\u03B5\u03BD \u03B5\u03C0\u03B9\u03BB\u03AD\u03C7\u03B8\u03B7\u03BA\u03B1\u03BD \u03C3\u03C4\u03BF\u03B9\u03C7\u03B5\u03AF\u03B1`,
    one: () => `\u0395\u03C0\u03B9\u03BB\u03AD\u03C7\u03B8\u03B7\u03BA\u03B5 ${formatter.number(args.count)} \u03C3\u03C4\u03BF\u03B9\u03C7\u03B5\u03AF\u03BF`,
    other: () => `\u0395\u03C0\u03B9\u03BB\u03AD\u03C7\u03B8\u03B7\u03BA\u03B1\u03BD ${formatter.number(args.count)} \u03C3\u03C4\u03BF\u03B9\u03C7\u03B5\u03AF\u03B1`
  })}.`,
  "selectedItem": (args) => `\u0395\u03C0\u03B9\u03BB\u03AD\u03C7\u03B8\u03B7\u03BA\u03B5 \u03C4\u03BF \u03C3\u03C4\u03BF\u03B9\u03C7\u03B5\u03AF\u03BF ${args.item}.`
};
var $583de0b3587601b9$exports = {};
$583de0b3587601b9$exports = {
  "deselectedItem": (args) => `${args.item} not selected.`,
  "select": `Select`,
  "selectedCount": (args, formatter) => `${formatter.plural(args.count, {
    "=0": `No items selected`,
    one: () => `${formatter.number(args.count)} item selected`,
    other: () => `${formatter.number(args.count)} items selected`
  })}.`,
  "selectedAll": `All items selected.`,
  "selectedItem": (args) => `${args.item} selected.`,
  "longPressToSelect": `Long press to enter selection mode.`
};
var $147159c978043442$exports = {};
$147159c978043442$exports = {
  "deselectedItem": (args) => `${args.item} no seleccionado.`,
  "longPressToSelect": `Mantenga pulsado para abrir el modo de selecci\xF3n.`,
  "select": `Seleccionar`,
  "selectedAll": `Todos los elementos seleccionados.`,
  "selectedCount": (args, formatter) => `${formatter.plural(args.count, {
    "=0": `Ning\xFAn elemento seleccionado`,
    one: () => `${formatter.number(args.count)} elemento seleccionado`,
    other: () => `${formatter.number(args.count)} elementos seleccionados`
  })}.`,
  "selectedItem": (args) => `${args.item} seleccionado.`
};
var $5cbb62c8a19173ac$exports = {};
$5cbb62c8a19173ac$exports = {
  "deselectedItem": (args) => `${args.item} pole valitud.`,
  "longPressToSelect": `Valikure\u017Eiimi sisenemiseks vajutage pikalt.`,
  "select": `Vali`,
  "selectedAll": `K\xF5ik \xFCksused valitud.`,
  "selectedCount": (args, formatter) => `${formatter.plural(args.count, {
    "=0": `\xDCksusi pole valitud`,
    one: () => `${formatter.number(args.count)} \xFCksus valitud`,
    other: () => `${formatter.number(args.count)} \xFCksust valitud`
  })}.`,
  "selectedItem": (args) => `${args.item} valitud.`
};
var $a33d71dc804cc59e$exports = {};
$a33d71dc804cc59e$exports = {
  "deselectedItem": (args) => `Kohdetta ${args.item} ei valittu.`,
  "longPressToSelect": `Siirry valintatilaan painamalla pitk\xE4\xE4n.`,
  "select": `Valitse`,
  "selectedAll": `Kaikki kohteet valittu.`,
  "selectedCount": (args, formatter) => `${formatter.plural(args.count, {
    "=0": `Ei yht\xE4\xE4n kohdetta valittu`,
    one: () => `${formatter.number(args.count)} kohde valittu`,
    other: () => `${formatter.number(args.count)} kohdetta valittu`
  })}.`,
  "selectedItem": (args) => `${args.item} valittu.`
};
var $92d800447793d084$exports = {};
$92d800447793d084$exports = {
  "deselectedItem": (args) => `${args.item} non s\xE9lectionn\xE9.`,
  "longPressToSelect": `Appuyez de mani\xE8re prolong\xE9e pour passer en mode de s\xE9lection.`,
  "select": `S\xE9lectionner`,
  "selectedAll": `Tous les \xE9l\xE9ments s\xE9lectionn\xE9s.`,
  "selectedCount": (args, formatter) => `${formatter.plural(args.count, {
    "=0": `Aucun \xE9l\xE9ment s\xE9lectionn\xE9`,
    one: () => `${formatter.number(args.count)} \xE9l\xE9ment s\xE9lectionn\xE9`,
    other: () => `${formatter.number(args.count)} \xE9l\xE9ments s\xE9lectionn\xE9s`
  })}.`,
  "selectedItem": (args) => `${args.item} s\xE9lectionn\xE9.`
};
var $fe732cdb32124ea8$exports = {};
$fe732cdb32124ea8$exports = {
  "deselectedItem": (args) => `${args.item} \u05DC\u05D0 \u05E0\u05D1\u05D7\u05E8.`,
  "longPressToSelect": `\u05D4\u05E7\u05E9\u05D4 \u05D0\u05E8\u05D5\u05DB\u05D4 \u05DC\u05DB\u05E0\u05D9\u05E1\u05D4 \u05DC\u05DE\u05E6\u05D1 \u05D1\u05D7\u05D9\u05E8\u05D4.`,
  "select": `\u05D1\u05D7\u05E8`,
  "selectedAll": `\u05DB\u05DC \u05D4\u05E4\u05E8\u05D9\u05D8\u05D9\u05DD \u05E0\u05D1\u05D7\u05E8\u05D5.`,
  "selectedCount": (args, formatter) => `${formatter.plural(args.count, {
    "=0": `\u05DC\u05D0 \u05E0\u05D1\u05D7\u05E8\u05D5 \u05E4\u05E8\u05D9\u05D8\u05D9\u05DD`,
    one: () => `\u05E4\u05E8\u05D9\u05D8 ${formatter.number(args.count)} \u05E0\u05D1\u05D7\u05E8`,
    other: () => `${formatter.number(args.count)} \u05E4\u05E8\u05D9\u05D8\u05D9\u05DD \u05E0\u05D1\u05D7\u05E8\u05D5`
  })}.`,
  "selectedItem": (args) => `${args.item} \u05E0\u05D1\u05D7\u05E8.`
};
var $e41234e934efb4f5$exports = {};
$e41234e934efb4f5$exports = {
  "deselectedItem": (args) => `Stavka ${args.item} nije odabrana.`,
  "longPressToSelect": `Dugo pritisnite za ulazak u na\u010Din odabira.`,
  "select": `Odaberite`,
  "selectedAll": `Odabrane su sve stavke.`,
  "selectedCount": (args, formatter) => `${formatter.plural(args.count, {
    "=0": `Nije odabrana nijedna stavka`,
    one: () => `Odabrana je ${formatter.number(args.count)} stavka`,
    other: () => `Odabrano je ${formatter.number(args.count)} stavki`
  })}.`,
  "selectedItem": (args) => `Stavka ${args.item} je odabrana.`
};
var $1b0393182473bf9e$exports = {};
$1b0393182473bf9e$exports = {
  "deselectedItem": (args) => `${args.item} nincs kijel\xF6lve.`,
  "longPressToSelect": `Nyomja hosszan a kijel\xF6l\xE9shez.`,
  "select": `Kijel\xF6l\xE9s`,
  "selectedAll": `Az \xF6sszes elem kijel\xF6lve.`,
  "selectedCount": (args, formatter) => `${formatter.plural(args.count, {
    "=0": `Egy elem sincs kijel\xF6lve`,
    one: () => `${formatter.number(args.count)} elem kijel\xF6lve`,
    other: () => `${formatter.number(args.count)} elem kijel\xF6lve`
  })}.`,
  "selectedItem": (args) => `${args.item} kijel\xF6lve.`
};
var $2eed782c1c110ce7$exports = {};
$2eed782c1c110ce7$exports = {
  "deselectedItem": (args) => `${args.item} non selezionato.`,
  "longPressToSelect": `Premi a lungo per passare alla modalit\xE0 di selezione.`,
  "select": `Seleziona`,
  "selectedAll": `Tutti gli elementi selezionati.`,
  "selectedCount": (args, formatter) => `${formatter.plural(args.count, {
    "=0": `Nessun elemento selezionato`,
    one: () => `${formatter.number(args.count)} elemento selezionato`,
    other: () => `${formatter.number(args.count)} elementi selezionati`
  })}.`,
  "selectedItem": (args) => `${args.item} selezionato.`
};
var $8b5d459f86e9b23c$exports = {};
$8b5d459f86e9b23c$exports = {
  "deselectedItem": (args) => `${args.item} \u304C\u9078\u629E\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002`,
  "longPressToSelect": `\u9577\u62BC\u3057\u3057\u3066\u9078\u629E\u30E2\u30FC\u30C9\u3092\u958B\u304D\u307E\u3059\u3002`,
  "select": `\u9078\u629E`,
  "selectedAll": `\u3059\u3079\u3066\u306E\u9805\u76EE\u3092\u9078\u629E\u3057\u307E\u3057\u305F\u3002`,
  "selectedCount": (args, formatter) => `${formatter.plural(args.count, {
    "=0": `\u9805\u76EE\u304C\u9078\u629E\u3055\u308C\u3066\u3044\u307E\u305B\u3093`,
    one: () => `${formatter.number(args.count)} \u9805\u76EE\u3092\u9078\u629E\u3057\u307E\u3057\u305F`,
    other: () => `${formatter.number(args.count)} \u9805\u76EE\u3092\u9078\u629E\u3057\u307E\u3057\u305F`
  })}\u3002`,
  "selectedItem": (args) => `${args.item} \u3092\u9078\u629E\u3057\u307E\u3057\u305F\u3002`
};
var $1949c3ad17295fd4$exports = {};
$1949c3ad17295fd4$exports = {
  "deselectedItem": (args) => `${args.item}\uC774(\uAC00) \uC120\uD0DD\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.`,
  "longPressToSelect": `\uC120\uD0DD \uBAA8\uB4DC\uB85C \uB4E4\uC5B4\uAC00\uB824\uBA74 \uAE38\uAC8C \uB204\uB974\uC2ED\uC2DC\uC624.`,
  "select": `\uC120\uD0DD`,
  "selectedAll": `\uBAA8\uB4E0 \uD56D\uBAA9\uC774 \uC120\uD0DD\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`,
  "selectedCount": (args, formatter) => `${formatter.plural(args.count, {
    "=0": `\uC120\uD0DD\uB41C \uD56D\uBAA9\uC774 \uC5C6\uC2B5\uB2C8\uB2E4`,
    one: () => `${formatter.number(args.count)}\uAC1C \uD56D\uBAA9\uC774 \uC120\uD0DD\uB418\uC5C8\uC2B5\uB2C8\uB2E4`,
    other: () => `${formatter.number(args.count)}\uAC1C \uD56D\uBAA9\uC774 \uC120\uD0DD\uB418\uC5C8\uC2B5\uB2C8\uB2E4`
  })}.`,
  "selectedItem": (args) => `${args.item}\uC774(\uAC00) \uC120\uD0DD\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`
};
var $f5e3df4dc8aa7b54$exports = {};
$f5e3df4dc8aa7b54$exports = {
  "deselectedItem": (args) => `${args.item} nepasirinkta.`,
  "longPressToSelect": `Nor\u0117dami \u012Fjungti pasirinkimo re\u017Eim\u0105, paspauskite ir palaikykite.`,
  "select": `Pasirinkti`,
  "selectedAll": `Pasirinkti visi elementai.`,
  "selectedCount": (args, formatter) => `${formatter.plural(args.count, {
    "=0": `Nepasirinktas n\u0117 vienas elementas`,
    one: () => `Pasirinktas ${formatter.number(args.count)} elementas`,
    other: () => `Pasirinkta element\u0173: ${formatter.number(args.count)}`
  })}.`,
  "selectedItem": (args) => `Pasirinkta: ${args.item}.`
};
var $9dd86690a5c2b2c5$exports = {};
$9dd86690a5c2b2c5$exports = {
  "deselectedItem": (args) => `Vienums ${args.item} nav atlas\u012Bts.`,
  "longPressToSelect": `Ilgi turiet nospiestu. lai iesl\u0113gtu atlases re\u017E\u012Bmu.`,
  "select": `Atlas\u012Bt`,
  "selectedAll": `Atlas\u012Bti visi vienumi.`,
  "selectedCount": (args, formatter) => `${formatter.plural(args.count, {
    "=0": `Nav atlas\u012Bts neviens vienums`,
    one: () => `Atlas\u012Bto vienumu skaits: ${formatter.number(args.count)}`,
    other: () => `Atlas\u012Bto vienumu skaits: ${formatter.number(args.count)}`
  })}.`,
  "selectedItem": (args) => `Atlas\u012Bts vienums ${args.item}.`
};
var $843964c3bf9a7d24$exports = {};
$843964c3bf9a7d24$exports = {
  "deselectedItem": (args) => `${args.item} er ikke valgt.`,
  "longPressToSelect": `Bruk et langt trykk for \xE5 g\xE5 inn i valgmodus.`,
  "select": `Velg`,
  "selectedAll": `Alle elementer er valgt.`,
  "selectedCount": (args, formatter) => `${formatter.plural(args.count, {
    "=0": `Ingen elementer er valgt`,
    one: () => `${formatter.number(args.count)} element er valgt`,
    other: () => `${formatter.number(args.count)} elementer er valgt`
  })}.`,
  "selectedItem": (args) => `${args.item} er valgt.`
};
var $73f50e845f9ef3b4$exports = {};
$73f50e845f9ef3b4$exports = {
  "deselectedItem": (args) => `${args.item} niet geselecteerd.`,
  "longPressToSelect": `Druk lang om de selectiemodus te openen.`,
  "select": `Selecteren`,
  "selectedAll": `Alle items geselecteerd.`,
  "selectedCount": (args, formatter) => `${formatter.plural(args.count, {
    "=0": `Geen items geselecteerd`,
    one: () => `${formatter.number(args.count)} item geselecteerd`,
    other: () => `${formatter.number(args.count)} items geselecteerd`
  })}.`,
  "selectedItem": (args) => `${args.item} geselecteerd.`
};
var $87f92a7e077514b2$exports = {};
$87f92a7e077514b2$exports = {
  "deselectedItem": (args) => `Nie zaznaczono ${args.item}.`,
  "longPressToSelect": `Naci\u015Bnij i przytrzymaj, aby wej\u015B\u0107 do trybu wyboru.`,
  "select": `Zaznacz`,
  "selectedAll": `Wszystkie zaznaczone elementy.`,
  "selectedCount": (args, formatter) => `${formatter.plural(args.count, {
    "=0": `Nie zaznaczono \u017Cadnych element\xF3w`,
    one: () => `${formatter.number(args.count)} zaznaczony element`,
    other: () => `${formatter.number(args.count)} zaznaczonych element\xF3w`
  })}.`,
  "selectedItem": (args) => `Zaznaczono ${args.item}.`
};
var $c28c98d58ee9ff6f$exports = {};
$c28c98d58ee9ff6f$exports = {
  "deselectedItem": (args) => `${args.item} n\xE3o selecionado.`,
  "longPressToSelect": `Mantenha pressionado para entrar no modo de sele\xE7\xE3o.`,
  "select": `Selecionar`,
  "selectedAll": `Todos os itens selecionados.`,
  "selectedCount": (args, formatter) => `${formatter.plural(args.count, {
    "=0": `Nenhum item selecionado`,
    one: () => `${formatter.number(args.count)} item selecionado`,
    other: () => `${formatter.number(args.count)} itens selecionados`
  })}.`,
  "selectedItem": (args) => `${args.item} selecionado.`
};
var $b6b1503b17b2254d$exports = {};
$b6b1503b17b2254d$exports = {
  "deselectedItem": (args) => `${args.item} n\xE3o selecionado.`,
  "longPressToSelect": `Prima continuamente para entrar no modo de sele\xE7\xE3o.`,
  "select": `Selecionar`,
  "selectedAll": `Todos os itens selecionados.`,
  "selectedCount": (args, formatter) => `${formatter.plural(args.count, {
    "=0": `Nenhum item selecionado`,
    one: () => `${formatter.number(args.count)} item selecionado`,
    other: () => `${formatter.number(args.count)} itens selecionados`
  })}.`,
  "selectedItem": (args) => `${args.item} selecionado.`
};
var $8bdaeb71e50c3e1a$exports = {};
$8bdaeb71e50c3e1a$exports = {
  "deselectedItem": (args) => `${args.item} neselectat.`,
  "longPressToSelect": `Ap\u0103sa\u021Bi lung pentru a intra \xEEn modul de selectare.`,
  "select": `Selectare`,
  "selectedAll": `Toate elementele selectate.`,
  "selectedCount": (args, formatter) => `${formatter.plural(args.count, {
    "=0": `Niciun element selectat`,
    one: () => `${formatter.number(args.count)} element selectat`,
    other: () => `${formatter.number(args.count)} elemente selectate`
  })}.`,
  "selectedItem": (args) => `${args.item} selectat.`
};
var $ec2b852dd7c3d1f2$exports = {};
$ec2b852dd7c3d1f2$exports = {
  "deselectedItem": (args) => `${args.item} \u043D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043E.`,
  "longPressToSelect": `\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u0438 \u0443\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0439\u0442\u0435 \u0434\u043B\u044F \u0432\u0445\u043E\u0434\u0430 \u0432 \u0440\u0435\u0436\u0438\u043C \u0432\u044B\u0431\u043E\u0440\u0430.`,
  "select": `\u0412\u044B\u0431\u0440\u0430\u0442\u044C`,
  "selectedAll": `\u0412\u044B\u0431\u0440\u0430\u043D\u044B \u0432\u0441\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B.`,
  "selectedCount": (args, formatter) => `${formatter.plural(args.count, {
    "=0": `\u041D\u0435\u0442 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0445 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432`,
    one: () => `${formatter.number(args.count)} \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0432\u044B\u0431\u0440\u0430\u043D`,
    other: () => `${formatter.number(args.count)} \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u0432\u044B\u0431\u0440\u0430\u043D\u043E`
  })}.`,
  "selectedItem": (args) => `${args.item} \u0432\u044B\u0431\u0440\u0430\u043D\u043E.`
};
var $79e6d900d6a4f82d$exports = {};
$79e6d900d6a4f82d$exports = {
  "deselectedItem": (args) => `Nevybrat\xE9 polo\u017Eky: ${args.item}.`,
  "longPressToSelect": `Dlh\u0161\xEDm stla\u010Den\xEDm prejdite do re\u017Eimu v\xFDberu.`,
  "select": `Vybra\u0165`,
  "selectedAll": `V\u0161etky vybrat\xE9 polo\u017Eky.`,
  "selectedCount": (args, formatter) => `${formatter.plural(args.count, {
    "=0": `\u017Diadne vybrat\xE9 polo\u017Eky`,
    one: () => `${formatter.number(args.count)} vybrat\xE1 polo\u017Eka`,
    other: () => `Po\u010Det vybrat\xFDch polo\u017Eiek:${formatter.number(args.count)}`
  })}.`,
  "selectedItem": (args) => `Vybrat\xE9 polo\u017Eky: ${args.item}.`
};
var $f4c1f0d5d4d03d80$exports = {};
$f4c1f0d5d4d03d80$exports = {
  "deselectedItem": (args) => `Element ${args.item} ni izbran.`,
  "longPressToSelect": `Za izbirni na\u010Din pritisnite in dlje \u010Dasa dr\u017Eite.`,
  "select": `Izberite`,
  "selectedAll": `Vsi elementi so izbrani.`,
  "selectedCount": (args, formatter) => `${formatter.plural(args.count, {
    "=0": `Noben element ni izbran`,
    one: () => `${formatter.number(args.count)} element je izbran`,
    other: () => `${formatter.number(args.count)} elementov je izbranih`
  })}.`,
  "selectedItem": (args) => `Element ${args.item} je izbran.`
};
var $46252cd87269b10b$exports = {};
$46252cd87269b10b$exports = {
  "deselectedItem": (args) => `${args.item} nije izabrano.`,
  "longPressToSelect": `Dugo pritisnite za ulazak u re\u017Eim biranja.`,
  "select": `Izaberite`,
  "selectedAll": `Izabrane su sve stavke.`,
  "selectedCount": (args, formatter) => `${formatter.plural(args.count, {
    "=0": `Nije izabrana nijedna stavka`,
    one: () => `Izabrana je ${formatter.number(args.count)} stavka`,
    other: () => `Izabrano je ${formatter.number(args.count)} stavki`
  })}.`,
  "selectedItem": (args) => `${args.item} je izabrano.`
};
var $d4d5d8dab362555c$exports = {};
$d4d5d8dab362555c$exports = {
  "deselectedItem": (args) => `${args.item} ej markerat.`,
  "longPressToSelect": `Tryck l\xE4nge n\xE4r du vill \xF6ppna v\xE4ljarl\xE4ge.`,
  "select": `Markera`,
  "selectedAll": `Alla markerade objekt.`,
  "selectedCount": (args, formatter) => `${formatter.plural(args.count, {
    "=0": `Inga markerade objekt`,
    one: () => `${formatter.number(args.count)} markerat objekt`,
    other: () => `${formatter.number(args.count)} markerade objekt`
  })}.`,
  "selectedItem": (args) => `${args.item} markerat.`
};
var $3d55d1f97c377e83$exports = {};
$3d55d1f97c377e83$exports = {
  "deselectedItem": (args) => `${args.item} se\xE7ilmedi.`,
  "longPressToSelect": `Se\xE7im moduna girmek i\xE7in uzun bas\u0131n.`,
  "select": `Se\xE7`,
  "selectedAll": `T\xFCm \xF6geler se\xE7ildi.`,
  "selectedCount": (args, formatter) => `${formatter.plural(args.count, {
    "=0": `Hi\xE7bir \xF6ge se\xE7ilmedi`,
    one: () => `${formatter.number(args.count)} \xF6ge se\xE7ildi`,
    other: () => `${formatter.number(args.count)} \xF6ge se\xE7ildi`
  })}.`,
  "selectedItem": (args) => `${args.item} se\xE7ildi.`
};
var $5368512f1c703a3f$exports = {};
$5368512f1c703a3f$exports = {
  "deselectedItem": (args) => `${args.item} \u043D\u0435 \u0432\u0438\u0431\u0440\u0430\u043D\u043E.`,
  "longPressToSelect": `\u0412\u0438\u043A\u043E\u043D\u0430\u0439\u0442\u0435 \u0434\u043E\u0432\u0433\u0435 \u043D\u0430\u0442\u0438\u0441\u043D\u0435\u043D\u043D\u044F, \u0449\u043E\u0431 \u043F\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u0440\u0435\u0436\u0438\u043C \u0432\u0438\u0431\u043E\u0440\u0443.`,
  "select": `\u0412\u0438\u0431\u0440\u0430\u0442\u0438`,
  "selectedAll": `\u0423\u0441\u0456 \u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0438 \u0432\u0438\u0431\u0440\u0430\u043D\u043E.`,
  "selectedCount": (args, formatter) => `${formatter.plural(args.count, {
    "=0": `\u0416\u043E\u0434\u043D\u0438\u0445 \u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432 \u043D\u0435 \u0432\u0438\u0431\u0440\u0430\u043D\u043E`,
    one: () => `${formatter.number(args.count)} \u0435\u043B\u0435\u043C\u0435\u043D\u0442 \u0432\u0438\u0431\u0440\u0430\u043D\u043E`,
    other: () => `\u0412\u0438\u0431\u0440\u0430\u043D\u043E \u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432: ${formatter.number(args.count)}`
  })}.`,
  "selectedItem": (args) => `${args.item} \u0432\u0438\u0431\u0440\u0430\u043D\u043E.`
};
var $f1316b1074463583$exports = {};
$f1316b1074463583$exports = {
  "deselectedItem": (args) => `\u672A\u9009\u62E9 ${args.item}\u3002`,
  "longPressToSelect": `\u957F\u6309\u4EE5\u8FDB\u5165\u9009\u62E9\u6A21\u5F0F\u3002`,
  "select": `\u9009\u62E9`,
  "selectedAll": `\u5DF2\u9009\u62E9\u6240\u6709\u9879\u76EE\u3002`,
  "selectedCount": (args, formatter) => `${formatter.plural(args.count, {
    "=0": `\u672A\u9009\u62E9\u9879\u76EE`,
    one: () => `\u5DF2\u9009\u62E9 ${formatter.number(args.count)} \u4E2A\u9879\u76EE`,
    other: () => `\u5DF2\u9009\u62E9 ${formatter.number(args.count)} \u4E2A\u9879\u76EE`
  })}\u3002`,
  "selectedItem": (args) => `\u5DF2\u9009\u62E9 ${args.item}\u3002`
};
var $7e60654723031b6f$exports = {};
$7e60654723031b6f$exports = {
  "deselectedItem": (args) => `\u672A\u9078\u53D6\u300C${args.item}\u300D\u3002`,
  "longPressToSelect": `\u9577\u6309\u4EE5\u9032\u5165\u9078\u64C7\u6A21\u5F0F\u3002`,
  "select": `\u9078\u53D6`,
  "selectedAll": `\u5DF2\u9078\u53D6\u6240\u6709\u9805\u76EE\u3002`,
  "selectedCount": (args, formatter) => `${formatter.plural(args.count, {
    "=0": `\u672A\u9078\u53D6\u4EFB\u4F55\u9805\u76EE`,
    one: () => `\u5DF2\u9078\u53D6 ${formatter.number(args.count)} \u500B\u9805\u76EE`,
    other: () => `\u5DF2\u9078\u53D6 ${formatter.number(args.count)} \u500B\u9805\u76EE`
  })}\u3002`,
  "selectedItem": (args) => `\u5DF2\u9078\u53D6\u300C${args.item}\u300D\u3002`
};
$835c96616a7cb4f9$exports = {
  "ar-AE": $682989befd4f478d$exports,
  "bg-BG": $f7fca02019afd941$exports,
  "cs-CZ": $8f86f40be75387f1$exports,
  "da-DK": $db24ba43c8d652ee$exports,
  "de-DE": $f8f1e72c8b5447d6$exports,
  "el-GR": $9a73ed2983c3ab0b$exports,
  "en-US": $583de0b3587601b9$exports,
  "es-ES": $147159c978043442$exports,
  "et-EE": $5cbb62c8a19173ac$exports,
  "fi-FI": $a33d71dc804cc59e$exports,
  "fr-FR": $92d800447793d084$exports,
  "he-IL": $fe732cdb32124ea8$exports,
  "hr-HR": $e41234e934efb4f5$exports,
  "hu-HU": $1b0393182473bf9e$exports,
  "it-IT": $2eed782c1c110ce7$exports,
  "ja-JP": $8b5d459f86e9b23c$exports,
  "ko-KR": $1949c3ad17295fd4$exports,
  "lt-LT": $f5e3df4dc8aa7b54$exports,
  "lv-LV": $9dd86690a5c2b2c5$exports,
  "nb-NO": $843964c3bf9a7d24$exports,
  "nl-NL": $73f50e845f9ef3b4$exports,
  "pl-PL": $87f92a7e077514b2$exports,
  "pt-BR": $c28c98d58ee9ff6f$exports,
  "pt-PT": $b6b1503b17b2254d$exports,
  "ro-RO": $8bdaeb71e50c3e1a$exports,
  "ru-RU": $ec2b852dd7c3d1f2$exports,
  "sk-SK": $79e6d900d6a4f82d$exports,
  "sl-SI": $f4c1f0d5d4d03d80$exports,
  "sr-SP": $46252cd87269b10b$exports,
  "sv-SE": $d4d5d8dab362555c$exports,
  "tr-TR": $3d55d1f97c377e83$exports,
  "uk-UA": $5368512f1c703a3f$exports,
  "zh-CN": $f1316b1074463583$exports,
  "zh-TW": $7e60654723031b6f$exports
};
function $92599c3fd427b763$export$137e594ef3218a10(props, state) {
  let { getRowText = (key) => {
    var _state_collection_getTextValue, _state_collection, _state_collection_getItem;
    var _state_collection_getTextValue1;
    return (_state_collection_getTextValue1 = (_state_collection_getTextValue = (_state_collection = state.collection).getTextValue) === null || _state_collection_getTextValue === void 0 ? void 0 : _state_collection_getTextValue.call(_state_collection, key)) !== null && _state_collection_getTextValue1 !== void 0 ? _state_collection_getTextValue1 : (_state_collection_getItem = state.collection.getItem(key)) === null || _state_collection_getItem === void 0 ? void 0 : _state_collection_getItem.textValue;
  } } = props;
  let stringFormatter = (0, $fca6afa0e843324b$export$f12b703ca79dfbb1)((0, /* @__PURE__ */ $parcel$interopDefault($835c96616a7cb4f9$exports)));
  let selection = state.selectionManager.rawSelection;
  let lastSelection = (0, import_react6.useRef)(selection);
  (0, $4f58c5f72bcf79f7$export$496315a1608d9602)(() => {
    var _lastSelection_current;
    if (!state.selectionManager.isFocused) {
      lastSelection.current = selection;
      return;
    }
    let addedKeys = $92599c3fd427b763$var$diffSelection(selection, lastSelection.current);
    let removedKeys = $92599c3fd427b763$var$diffSelection(lastSelection.current, selection);
    let isReplace = state.selectionManager.selectionBehavior === "replace";
    let messages = [];
    if (state.selectionManager.selectedKeys.size === 1 && isReplace) {
      if (state.collection.getItem(state.selectionManager.selectedKeys.keys().next().value)) {
        let currentSelectionText = getRowText(state.selectionManager.selectedKeys.keys().next().value);
        if (currentSelectionText)
          messages.push(stringFormatter.format("selectedItem", {
            item: currentSelectionText
          }));
      }
    } else if (addedKeys.size === 1 && removedKeys.size === 0) {
      let addedText = getRowText(addedKeys.keys().next().value);
      if (addedText)
        messages.push(stringFormatter.format("selectedItem", {
          item: addedText
        }));
    } else if (removedKeys.size === 1 && addedKeys.size === 0) {
      if (state.collection.getItem(removedKeys.keys().next().value)) {
        let removedText = getRowText(removedKeys.keys().next().value);
        if (removedText)
          messages.push(stringFormatter.format("deselectedItem", {
            item: removedText
          }));
      }
    }
    if (state.selectionManager.selectionMode === "multiple") {
      if (messages.length === 0 || selection === "all" || selection.size > 1 || lastSelection.current === "all" || ((_lastSelection_current = lastSelection.current) === null || _lastSelection_current === void 0 ? void 0 : _lastSelection_current.size) > 1)
        messages.push(selection === "all" ? stringFormatter.format("selectedAll") : stringFormatter.format("selectedCount", {
          count: selection.size
        }));
    }
    if (messages.length > 0)
      (0, $319e236875307eab$export$a9b970dcc4ae71a9)(messages.join(" "));
    lastSelection.current = selection;
  }, [
    selection
  ]);
}
function $92599c3fd427b763$var$diffSelection(a, b) {
  let res = /* @__PURE__ */ new Set();
  if (a === "all" || b === "all")
    return res;
  for (let key of a.keys())
    if (!b.has(key))
      res.add(key);
  return res;
}
function $5b9b5b5723db6ae1$export$be42ebdab07ae4c2(props) {
  let stringFormatter = (0, $fca6afa0e843324b$export$f12b703ca79dfbb1)((0, /* @__PURE__ */ $parcel$interopDefault($835c96616a7cb4f9$exports)));
  let modality = (0, $507fabe10e71c6fb$export$98e20ec92f614cfe)();
  let shouldLongPress = (modality === "pointer" || modality === "virtual" || modality == null) && typeof window !== "undefined" && "ontouchstart" in window;
  let interactionDescription = (0, import_react6.useMemo)(() => {
    let selectionMode = props.selectionManager.selectionMode;
    let selectionBehavior = props.selectionManager.selectionBehavior;
    let message = void 0;
    if (shouldLongPress)
      message = stringFormatter.format("longPressToSelect");
    return selectionBehavior === "replace" && selectionMode !== "none" && props.hasItemActions ? message : void 0;
  }, [
    props.selectionManager.selectionMode,
    props.selectionManager.selectionBehavior,
    props.hasItemActions,
    stringFormatter,
    shouldLongPress
  ]);
  let descriptionProps = (0, $ef06256079686ba0$export$f8aeda7b10753fa1)(interactionDescription);
  return descriptionProps;
}
function $83c6e2eafa584c67$export$f6b86a04e5d66d90(props, state, ref) {
  let { isVirtualized, keyboardDelegate, focusMode, scrollRef, getRowText, onRowAction, onCellAction } = props;
  let { selectionManager: manager } = state;
  if (!props["aria-label"] && !props["aria-labelledby"])
    console.warn("An aria-label or aria-labelledby prop is required for accessibility.");
  let collator = (0, $325a3faab7a68acd$export$a16aca283550c30d)({
    usage: "search",
    sensitivity: "base"
  });
  let { direction } = (0, $18f2051aff69b9bf$export$43bb16f9c6d9e3f7)();
  let disabledBehavior = state.selectionManager.disabledBehavior;
  let delegate = (0, import_react6.useMemo)(() => keyboardDelegate || new (0, $d1c300d9c497e402$export$de9feff04fda126e)({
    collection: state.collection,
    disabledKeys: disabledBehavior === "selection" ? /* @__PURE__ */ new Set() : state.disabledKeys,
    ref,
    direction,
    collator,
    focusMode
  }), [
    keyboardDelegate,
    state.collection,
    state.disabledKeys,
    disabledBehavior,
    ref,
    direction,
    collator,
    focusMode
  ]);
  let { collectionProps } = (0, $ae20dd8cbca75726$export$d6daf82dcd84e87c)({
    ref,
    selectionManager: manager,
    keyboardDelegate: delegate,
    isVirtualized,
    scrollRef
  });
  let id = (0, $bdb11010cef70236$export$f680877a34711e37)(props.id);
  (0, $1af922eb41e03c8f$export$e6235c0d09b995d0).set(state, {
    keyboardDelegate: delegate,
    actions: {
      onRowAction,
      onCellAction
    }
  });
  let descriptionProps = (0, $5b9b5b5723db6ae1$export$be42ebdab07ae4c2)({
    selectionManager: manager,
    hasItemActions: !!(onRowAction || onCellAction)
  });
  let domProps = (0, $65484d02dcb7eb3e$export$457c3d6518dd4c6f)(props, {
    labelable: true
  });
  let onFocus = (0, import_react6.useCallback)((e) => {
    if (manager.isFocused) {
      if (!e.currentTarget.contains(e.target))
        manager.setFocused(false);
      return;
    }
    if (!e.currentTarget.contains(e.target))
      return;
    manager.setFocused(true);
  }, [
    manager
  ]);
  let navDisabledHandlers = (0, import_react6.useMemo)(() => ({
    onBlur: collectionProps.onBlur,
    onFocus
  }), [
    onFocus,
    collectionProps.onBlur
  ]);
  let hasTabbableChild = (0, $83013635b024ae3d$export$eac1895992b9f3d6)(ref, {
    isDisabled: state.collection.size !== 0
  });
  let gridProps = (0, $3ef42575df84b30b$export$9d1611c77c2fe928)(
    domProps,
    {
      role: "grid",
      id,
      "aria-multiselectable": manager.selectionMode === "multiple" ? "true" : void 0
    },
    state.isKeyboardNavigationDisabled ? navDisabledHandlers : collectionProps,
    // If collection is empty, make sure the grid is tabbable unless there is a child tabbable element.
    state.collection.size === 0 && {
      tabIndex: hasTabbableChild ? -1 : 0
    },
    descriptionProps
  );
  if (isVirtualized) {
    gridProps["aria-rowcount"] = state.collection.size;
    gridProps["aria-colcount"] = state.collection.columnCount;
  }
  (0, $92599c3fd427b763$export$137e594ef3218a10)({
    getRowText
  }, state);
  return {
    gridProps
  };
}
function $e45487f8ba1cbdbf$export$d3037f5d3f3e51bf() {
  return {
    rowGroupProps: {
      role: "rowgroup"
    }
  };
}
function $4159a7a9cbb0cc18$export$96357d5a73f686fa(props, state, ref) {
  let { node, isVirtualized, shouldSelectOnPressUp, onAction } = props;
  let { actions: { onRowAction } } = (0, $1af922eb41e03c8f$export$e6235c0d09b995d0).get(state);
  let { itemProps, ...states } = (0, $880e95eb8b93ba9a$export$ecf600387e221c37)({
    selectionManager: state.selectionManager,
    key: node.key,
    ref,
    isVirtualized,
    shouldSelectOnPressUp,
    onAction: onRowAction ? () => onRowAction(node.key) : onAction,
    isDisabled: state.collection.size === 0
  });
  let isSelected = state.selectionManager.isSelected(node.key);
  let rowProps = {
    role: "row",
    "aria-selected": state.selectionManager.selectionMode !== "none" ? isSelected : void 0,
    "aria-disabled": states.isDisabled || void 0,
    ...itemProps
  };
  if (isVirtualized)
    rowProps["aria-rowindex"] = node.index + 1;
  return {
    rowProps,
    ...states
  };
}
function $ab90dcbc1b5466d0$export$c7e10bfc0c59f67c(props, state, ref) {
  let { node, isVirtualized, focusMode = "child", shouldSelectOnPressUp, onAction } = props;
  let { direction } = (0, $18f2051aff69b9bf$export$43bb16f9c6d9e3f7)();
  let { keyboardDelegate, actions: { onCellAction } } = (0, $1af922eb41e03c8f$export$e6235c0d09b995d0).get(state);
  let keyWhenFocused = (0, import_react6.useRef)(null);
  let focus = () => {
    let treeWalker = (0, $9bf71ea28793e738$export$2d6ec8fc375ceafa)(ref.current);
    if (focusMode === "child") {
      if (ref.current.contains(document.activeElement) && ref.current !== document.activeElement)
        return;
      let focusable = state.selectionManager.childFocusStrategy === "last" ? $ab90dcbc1b5466d0$var$last(treeWalker) : treeWalker.firstChild();
      if (focusable) {
        (0, $6a99195332edec8b$export$80f3e147d781571c)(focusable);
        return;
      }
    }
    if (keyWhenFocused.current != null && node.key !== keyWhenFocused.current || !ref.current.contains(document.activeElement))
      (0, $6a99195332edec8b$export$80f3e147d781571c)(ref.current);
  };
  let { itemProps, isPressed } = (0, $880e95eb8b93ba9a$export$ecf600387e221c37)({
    selectionManager: state.selectionManager,
    key: node.key,
    ref,
    isVirtualized,
    focus,
    shouldSelectOnPressUp,
    onAction: onCellAction ? () => onCellAction(node.key) : onAction,
    isDisabled: state.collection.size === 0
  });
  let onKeyDownCapture = (e) => {
    if (!e.currentTarget.contains(e.target) || state.isKeyboardNavigationDisabled)
      return;
    let walker = (0, $9bf71ea28793e738$export$2d6ec8fc375ceafa)(ref.current);
    walker.currentNode = document.activeElement;
    switch (e.key) {
      case "ArrowLeft": {
        let focusable = direction === "rtl" ? walker.nextNode() : walker.previousNode();
        if (focusMode === "child" && focusable === ref.current)
          focusable = null;
        if (focusable) {
          e.preventDefault();
          e.stopPropagation();
          (0, $6a99195332edec8b$export$80f3e147d781571c)(focusable);
          (0, $2f04cbc44ee30ce0$export$c826860796309d1b)(focusable, {
            containingElement: (0, $62d8ded9296f3872$export$cfa2225e87938781)(ref.current)
          });
        } else {
          let prev = keyboardDelegate.getKeyLeftOf(node.key);
          if (prev !== node.key)
            break;
          e.preventDefault();
          e.stopPropagation();
          if (focusMode === "cell" && direction === "rtl") {
            (0, $6a99195332edec8b$export$80f3e147d781571c)(ref.current);
            (0, $2f04cbc44ee30ce0$export$c826860796309d1b)(ref.current, {
              containingElement: (0, $62d8ded9296f3872$export$cfa2225e87938781)(ref.current)
            });
          } else {
            walker.currentNode = ref.current;
            focusable = direction === "rtl" ? walker.firstChild() : $ab90dcbc1b5466d0$var$last(walker);
            if (focusable) {
              (0, $6a99195332edec8b$export$80f3e147d781571c)(focusable);
              (0, $2f04cbc44ee30ce0$export$c826860796309d1b)(focusable, {
                containingElement: (0, $62d8ded9296f3872$export$cfa2225e87938781)(ref.current)
              });
            }
          }
        }
        break;
      }
      case "ArrowRight": {
        let focusable = direction === "rtl" ? walker.previousNode() : walker.nextNode();
        if (focusMode === "child" && focusable === ref.current)
          focusable = null;
        if (focusable) {
          e.preventDefault();
          e.stopPropagation();
          (0, $6a99195332edec8b$export$80f3e147d781571c)(focusable);
          (0, $2f04cbc44ee30ce0$export$c826860796309d1b)(focusable, {
            containingElement: (0, $62d8ded9296f3872$export$cfa2225e87938781)(ref.current)
          });
        } else {
          let next = keyboardDelegate.getKeyRightOf(node.key);
          if (next !== node.key)
            break;
          e.preventDefault();
          e.stopPropagation();
          if (focusMode === "cell" && direction === "ltr") {
            (0, $6a99195332edec8b$export$80f3e147d781571c)(ref.current);
            (0, $2f04cbc44ee30ce0$export$c826860796309d1b)(ref.current, {
              containingElement: (0, $62d8ded9296f3872$export$cfa2225e87938781)(ref.current)
            });
          } else {
            walker.currentNode = ref.current;
            focusable = direction === "rtl" ? $ab90dcbc1b5466d0$var$last(walker) : walker.firstChild();
            if (focusable) {
              (0, $6a99195332edec8b$export$80f3e147d781571c)(focusable);
              (0, $2f04cbc44ee30ce0$export$c826860796309d1b)(focusable, {
                containingElement: (0, $62d8ded9296f3872$export$cfa2225e87938781)(ref.current)
              });
            }
          }
        }
        break;
      }
      case "ArrowUp":
      case "ArrowDown":
        if (!e.altKey && ref.current.contains(e.target)) {
          e.stopPropagation();
          e.preventDefault();
          ref.current.parentElement.dispatchEvent(new KeyboardEvent(e.nativeEvent.type, e.nativeEvent));
        }
        break;
    }
  };
  let onFocus = (e) => {
    keyWhenFocused.current = node.key;
    if (e.target !== ref.current) {
      if (!(0, $507fabe10e71c6fb$export$b9b3dfddab17db27)())
        state.selectionManager.setFocusedKey(node.key);
      return;
    }
    requestAnimationFrame(() => {
      if (focusMode === "child" && document.activeElement === ref.current)
        focus();
    });
  };
  let gridCellProps = (0, $3ef42575df84b30b$export$9d1611c77c2fe928)(itemProps, {
    role: "gridcell",
    onKeyDownCapture,
    onFocus
  });
  var _node_colIndex;
  if (isVirtualized)
    gridCellProps["aria-colindex"] = ((_node_colIndex = node.colIndex) !== null && _node_colIndex !== void 0 ? _node_colIndex : node.index) + 1;
  if (shouldSelectOnPressUp && gridCellProps.tabIndex != null && gridCellProps.onPointerDown == null)
    gridCellProps.onPointerDown = (e) => {
      let el = e.currentTarget;
      let tabindex = el.getAttribute("tabindex");
      el.removeAttribute("tabindex");
      requestAnimationFrame(() => {
        el.setAttribute("tabindex", tabindex);
      });
    };
  return {
    gridCellProps,
    isPressed
  };
}
function $ab90dcbc1b5466d0$var$last(walker) {
  let next;
  let last;
  do {
    last = walker.lastChild();
    if (last)
      next = last;
  } while (last);
  return next;
}
function $7cb39d07f245a780$export$70e2eed1a92976ad(props, state) {
  let { key } = props;
  let manager = state.selectionManager;
  let checkboxId = (0, $bdb11010cef70236$export$f680877a34711e37)();
  let isDisabled = !state.selectionManager.canSelectItem(key);
  let isSelected = state.selectionManager.isSelected(key);
  let onChange = () => manager.select(key);
  const stringFormatter = (0, $fca6afa0e843324b$export$f12b703ca79dfbb1)((0, /* @__PURE__ */ $parcel$interopDefault($835c96616a7cb4f9$exports)));
  return {
    checkboxProps: {
      id: checkboxId,
      "aria-label": stringFormatter.format("select"),
      isSelected,
      isDisabled,
      onChange
    }
  };
}

// node_modules/@react-aria/table/dist/import.mjs
var import_react7 = __toESM(require_react(), 1);

// node_modules/@react-stately/flags/dist/import.mjs
var $f4e2df6bd15f8569$var$_tableNestedRows = false;
function $f4e2df6bd15f8569$export$1b00cb14a96194e6() {
  return $f4e2df6bd15f8569$var$_tableNestedRows;
}

// node_modules/@react-aria/table/dist/import.mjs
function $parcel$interopDefault2(a) {
  return a && a.__esModule ? a.default : a;
}
var $2140fb2337097f2d$export$552312adfd451dab = /* @__PURE__ */ new WeakMap();
function $2140fb2337097f2d$var$normalizeKey(key) {
  if (typeof key === "string")
    return key.replace(/\s*/g, "");
  return "" + key;
}
function $2140fb2337097f2d$export$37cd4213f2ad742e(state, columnKey) {
  let gridId = $2140fb2337097f2d$export$552312adfd451dab.get(state);
  if (!gridId)
    throw new Error("Unknown grid");
  return `${gridId}-${$2140fb2337097f2d$var$normalizeKey(columnKey)}`;
}
function $2140fb2337097f2d$export$19baff3266315d44(state, rowKey, columnKey) {
  let gridId = $2140fb2337097f2d$export$552312adfd451dab.get(state);
  if (!gridId)
    throw new Error("Unknown grid");
  return `${gridId}-${$2140fb2337097f2d$var$normalizeKey(rowKey)}-${$2140fb2337097f2d$var$normalizeKey(columnKey)}`;
}
function $2140fb2337097f2d$export$85069b70317f543(state, rowKey) {
  return [
    ...state.collection.rowHeaderColumnKeys
  ].map((columnKey) => $2140fb2337097f2d$export$19baff3266315d44(state, rowKey, columnKey)).join(" ");
}
var $7476b46781682bf5$exports = {};
var $ce3de3ff2fd66848$exports = {};
$ce3de3ff2fd66848$exports = {
  "ascending": `\u062A\u0635\u0627\u0639\u062F\u064A`,
  "ascendingSort": (args) => `\u062A\u0631\u062A\u064A\u0628 \u062D\u0633\u0628 \u0627\u0644\u0639\u0645\u0648\u062F ${args.columnName} \u0628\u062A\u0631\u062A\u064A\u0628 \u062A\u0635\u0627\u0639\u062F\u064A`,
  "columnSize": (args) => `${args.value} \u0628\u0627\u0644\u0628\u0643\u0633\u0644`,
  "descending": `\u062A\u0646\u0627\u0632\u0644\u064A`,
  "descendingSort": (args) => `\u062A\u0631\u062A\u064A\u0628 \u062D\u0633\u0628 \u0627\u0644\u0639\u0645\u0648\u062F ${args.columnName} \u0628\u062A\u0631\u062A\u064A\u0628 \u062A\u0646\u0627\u0632\u0644\u064A`,
  "resizerDescription": `\u0627\u0636\u063A\u0637 \u0639\u0644\u0649 \u0645\u0641\u062A\u0627\u062D Enter \u0644\u0628\u062F\u0621 \u062A\u063A\u064A\u064A\u0631 \u0627\u0644\u062D\u062C\u0645`,
  "select": `\u062A\u062D\u062F\u064A\u062F`,
  "selectAll": `\u062A\u062D\u062F\u064A\u062F \u0627\u0644\u0643\u0644`,
  "sortable": `\u0639\u0645\u0648\u062F \u0642\u0627\u0628\u0644 \u0644\u0644\u062A\u0631\u062A\u064A\u0628`
};
var $cb80dcce530985b9$exports = {};
$cb80dcce530985b9$exports = {
  "ascending": `\u0432\u044A\u0437\u0445\u043E\u0434\u044F\u0449`,
  "ascendingSort": (args) => `\u0441\u043E\u0440\u0442\u0438\u0440\u0430\u043D\u043E \u043F\u043E \u043A\u043E\u043B\u043E\u043D\u0430 ${args.columnName} \u0432\u044A\u0432 \u0432\u044A\u0437\u0445\u043E\u0434\u044F\u0449 \u0440\u0435\u0434`,
  "columnSize": (args) => `${args.value} \u043F\u0438\u043A\u0441\u0435\u043B\u0430`,
  "descending": `\u043D\u0438\u0437\u0445\u043E\u0434\u044F\u0449`,
  "descendingSort": (args) => `\u0441\u043E\u0440\u0442\u0438\u0440\u0430\u043D\u043E \u043F\u043E \u043A\u043E\u043B\u043E\u043D\u0430 ${args.columnName} \u0432 \u043D\u0438\u0437\u0445\u043E\u0434\u044F\u0449 \u0440\u0435\u0434`,
  "resizerDescription": `\u041D\u0430\u0442\u0438\u0441\u043D\u0435\u0442\u0435 \u201EEnter\u201C, \u0437\u0430 \u0434\u0430 \u0437\u0430\u043F\u043E\u0447\u043D\u0435\u0442\u0435 \u0434\u0430 \u043F\u0440\u0435\u043E\u0440\u0430\u0437\u043C\u0435\u0440\u044F\u0432\u0430\u0442\u0435`,
  "select": `\u0418\u0437\u0431\u0435\u0440\u0435\u0442\u0435`,
  "selectAll": `\u0418\u0437\u0431\u0435\u0440\u0435\u0442\u0435 \u0432\u0441\u0438\u0447\u043A\u043E`,
  "sortable": `\u0441\u043E\u0440\u0442\u0438\u0440\u0430\u0449\u0430 \u043A\u043E\u043B\u043E\u043D\u0430`
};
var $68ac86749db4c0fb$exports = {};
$68ac86749db4c0fb$exports = {
  "ascending": `vzestupn\u011B`,
  "ascendingSort": (args) => `\u0159azeno vzestupn\u011B podle sloupce ${args.columnName}`,
  "columnSize": (args) => `${args.value} pixel\u016F`,
  "descending": `sestupn\u011B`,
  "descendingSort": (args) => `\u0159azeno sestupn\u011B podle sloupce ${args.columnName}`,
  "resizerDescription": `Stisknut\xEDm kl\xE1vesy Enter za\u010Dnete m\u011Bnit velikost`,
  "select": `Vybrat`,
  "selectAll": `Vybrat v\u0161e`,
  "sortable": `sloupec s mo\u017Enost\xED \u0159azen\xED`
};
var $9a6cbac08487e661$exports = {};
$9a6cbac08487e661$exports = {
  "ascending": `stigende`,
  "ascendingSort": (args) => `sorteret efter kolonne ${args.columnName} i stigende r\xE6kkef\xF8lge`,
  "columnSize": (args) => `${args.value} pixels`,
  "descending": `faldende`,
  "descendingSort": (args) => `sorteret efter kolonne ${args.columnName} i faldende r\xE6kkef\xF8lge`,
  "resizerDescription": `Tryk p\xE5 Enter for at \xE6ndre st\xF8rrelse`,
  "select": `V\xE6lg`,
  "selectAll": `V\xE6lg alle`,
  "sortable": `sorterbar kolonne`
};
var $c963661d89486e72$exports = {};
$c963661d89486e72$exports = {
  "ascending": `aufsteigend`,
  "ascendingSort": (args) => `sortiert nach Spalte ${args.columnName} in aufsteigender Reihenfolge`,
  "columnSize": (args) => `${args.value} Pixel`,
  "descending": `absteigend`,
  "descendingSort": (args) => `sortiert nach Spalte ${args.columnName} in absteigender Reihenfolge`,
  "resizerDescription": `Eingabetaste zum Starten der Gr\xF6\xDFen\xE4nderung dr\xFCcken`,
  "select": `Ausw\xE4hlen`,
  "selectAll": `Alles ausw\xE4hlen`,
  "sortable": `sortierbare Spalte`
};
var $ac03861c6e8605f4$exports = {};
$ac03861c6e8605f4$exports = {
  "ascending": `\u03B1\u03CD\u03BE\u03BF\u03C5\u03C3\u03B1`,
  "ascendingSort": (args) => `\u03B4\u03B9\u03B1\u03BB\u03BF\u03B3\u03AE \u03B1\u03BD\u03AC \u03C3\u03C4\u03AE\u03BB\u03B7 ${args.columnName} \u03C3\u03B5 \u03B1\u03CD\u03BE\u03BF\u03C5\u03C3\u03B1 \u03C3\u03B5\u03B9\u03C1\u03AC`,
  "columnSize": (args) => `${args.value} pixel`,
  "descending": `\u03C6\u03B8\u03AF\u03BD\u03BF\u03C5\u03C3\u03B1`,
  "descendingSort": (args) => `\u03B4\u03B9\u03B1\u03BB\u03BF\u03B3\u03AE \u03B1\u03BD\u03AC \u03C3\u03C4\u03AE\u03BB\u03B7 ${args.columnName} \u03C3\u03B5 \u03C6\u03B8\u03AF\u03BD\u03BF\u03C5\u03C3\u03B1 \u03C3\u03B5\u03B9\u03C1\u03AC`,
  "resizerDescription": `\u03A0\u03B1\u03C4\u03AE\u03C3\u03C4\u03B5 Enter \u03B3\u03B9\u03B1 \u03AD\u03BD\u03B1\u03C1\u03BE\u03B7 \u03C4\u03B7\u03C2 \u03B1\u03BB\u03BB\u03B1\u03B3\u03AE\u03C2 \u03BC\u03B5\u03B3\u03AD\u03B8\u03BF\u03C5\u03C2`,
  "select": `\u0395\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE`,
  "selectAll": `\u0395\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE \u03CC\u03BB\u03C9\u03BD`,
  "sortable": `\u03A3\u03C4\u03AE\u03BB\u03B7 \u03B4\u03B9\u03B1\u03BB\u03BF\u03B3\u03AE\u03C2`
};
var $09e6b82e0d6e466a$exports = {};
$09e6b82e0d6e466a$exports = {
  "select": `Select`,
  "selectAll": `Select All`,
  "sortable": `sortable column`,
  "ascending": `ascending`,
  "descending": `descending`,
  "ascendingSort": (args) => `sorted by column ${args.columnName} in ascending order`,
  "descendingSort": (args) => `sorted by column ${args.columnName} in descending order`,
  "columnSize": (args) => `${args.value} pixels`,
  "resizerDescription": `Press Enter to start resizing`
};
var $8cc39eb66c2bf220$exports = {};
$8cc39eb66c2bf220$exports = {
  "ascending": `de subida`,
  "ascendingSort": (args) => `ordenado por columna ${args.columnName} en orden de subida`,
  "columnSize": (args) => `${args.value} p\xEDxeles`,
  "descending": `de bajada`,
  "descendingSort": (args) => `ordenado por columna ${args.columnName} en orden de bajada`,
  "resizerDescription": `Pulse Intro para empezar a redimensionar`,
  "select": `Seleccionar`,
  "selectAll": `Seleccionar todos`,
  "sortable": `columna ordenable`
};
var $4e11db3c25a38112$exports = {};
$4e11db3c25a38112$exports = {
  "ascending": `t\xF5usev j\xE4rjestus`,
  "ascendingSort": (args) => `sorditud veeru j\xE4rgi ${args.columnName} t\xF5usvas j\xE4rjestuses`,
  "columnSize": (args) => `${args.value} pikslit`,
  "descending": `laskuv j\xE4rjestus`,
  "descendingSort": (args) => `sorditud veeru j\xE4rgi ${args.columnName} laskuvas j\xE4rjestuses`,
  "resizerDescription": `Suuruse muutmise alustamiseks vajutage klahvi Enter`,
  "select": `Vali`,
  "selectAll": `Vali k\xF5ik`,
  "sortable": `sorditav veerg`
};
var $da1e751a92575e02$exports = {};
$da1e751a92575e02$exports = {
  "ascending": `nouseva`,
  "ascendingSort": (args) => `lajiteltu sarakkeen ${args.columnName} mukaan nousevassa j\xE4rjestyksess\xE4`,
  "columnSize": (args) => `${args.value} pikseli\xE4`,
  "descending": `laskeva`,
  "descendingSort": (args) => `lajiteltu sarakkeen ${args.columnName} mukaan laskevassa j\xE4rjestyksess\xE4`,
  "resizerDescription": `Aloita koon muutos painamalla Enter-n\xE4pp\xE4int\xE4`,
  "select": `Valitse`,
  "selectAll": `Valitse kaikki`,
  "sortable": `lajiteltava sarake`
};
var $1b5d6c6c47d55106$exports = {};
$1b5d6c6c47d55106$exports = {
  "ascending": `croissant`,
  "ascendingSort": (args) => `tri\xE9 en fonction de la colonne\xA0${args.columnName} par ordre croissant`,
  "columnSize": (args) => `${args.value}\xA0pixels`,
  "descending": `d\xE9croissant`,
  "descendingSort": (args) => `tri\xE9 en fonction de la colonne\xA0${args.columnName} par ordre d\xE9croissant`,
  "resizerDescription": `Appuyez sur Entr\xE9e pour commencer le redimensionnement.`,
  "select": `S\xE9lectionner`,
  "selectAll": `S\xE9lectionner tout`,
  "sortable": `colonne triable`
};
var $7c18ba27b86d3308$exports = {};
$7c18ba27b86d3308$exports = {
  "ascending": `\u05E2\u05D5\u05DC\u05D4`,
  "ascendingSort": (args) => `\u05DE\u05D5\u05D9\u05DF \u05DC\u05E4\u05D9 \u05E2\u05DE\u05D5\u05D3\u05D4 ${args.columnName} \u05D1\u05E1\u05D3\u05E8 \u05E2\u05D5\u05DC\u05D4`,
  "columnSize": (args) => `${args.value} \u05E4\u05D9\u05E7\u05E1\u05DC\u05D9\u05DD`,
  "descending": `\u05D9\u05D5\u05E8\u05D3`,
  "descendingSort": (args) => `\u05DE\u05D5\u05D9\u05DF \u05DC\u05E4\u05D9 \u05E2\u05DE\u05D5\u05D3\u05D4 ${args.columnName} \u05D1\u05E1\u05D3\u05E8 \u05D9\u05D5\u05E8\u05D3`,
  "resizerDescription": `\u05D4\u05E7\u05E9 Enter \u05DB\u05D3\u05D9 \u05DC\u05E9\u05E0\u05D5\u05EA \u05D0\u05EA \u05D4\u05D2\u05D5\u05D3\u05DC`,
  "select": `\u05D1\u05D7\u05E8`,
  "selectAll": `\u05D1\u05D7\u05E8 \u05D4\u05DB\u05D5\u05DC`,
  "sortable": `\u05E2\u05DE\u05D5\u05D3\u05D4 \u05E9\u05E0\u05D9\u05EA\u05DF \u05DC\u05DE\u05D9\u05D9\u05DF`
};
var $2cb40998e20e8a46$exports = {};
$2cb40998e20e8a46$exports = {
  "ascending": `rastu\u0107i`,
  "ascendingSort": (args) => `razvrstano po stupcima ${args.columnName} rastu\u0107em redoslijedom`,
  "columnSize": (args) => `${args.value} piksela`,
  "descending": `padaju\u0107i`,
  "descendingSort": (args) => `razvrstano po stupcima ${args.columnName} padaju\u0107im redoslijedom`,
  "resizerDescription": `Pritisnite Enter da biste zapo\u010Deli promenu veli\u010Dine`,
  "select": `Odaberite`,
  "selectAll": `Odaberite sve`,
  "sortable": `stupac koji se mo\u017Ee razvrstati`
};
var $189e23eec1d6aa3a$exports = {};
$189e23eec1d6aa3a$exports = {
  "ascending": `n\xF6vekv\u0151`,
  "ascendingSort": (args) => `rendezve a(z) ${args.columnName} oszlop szerint, n\xF6vekv\u0151 sorrendben`,
  "columnSize": (args) => `${args.value} k\xE9ppont`,
  "descending": `cs\xF6kken\u0151`,
  "descendingSort": (args) => `rendezve a(z) ${args.columnName} oszlop szerint, cs\xF6kken\u0151 sorrendben`,
  "resizerDescription": `Nyomja le az Enter billenty\u0171t az \xE1tm\xE9retez\xE9s megkezd\xE9s\xE9hez`,
  "select": `Kijel\xF6l\xE9s`,
  "selectAll": `\xD6sszes kijel\xF6l\xE9se`,
  "sortable": `rendezend\u0151 oszlop`
};
var $3c5ec8e4f015dfd0$exports = {};
$3c5ec8e4f015dfd0$exports = {
  "ascending": `crescente`,
  "ascendingSort": (args) => `in ordine crescente in base alla colonna ${args.columnName}`,
  "columnSize": (args) => `${args.value} pixel`,
  "descending": `decrescente`,
  "descendingSort": (args) => `in ordine decrescente in base alla colonna ${args.columnName}`,
  "resizerDescription": `Premi Invio per iniziare a ridimensionare`,
  "select": `Seleziona`,
  "selectAll": `Seleziona tutto`,
  "sortable": `colonna ordinabile`
};
var $d021d50e6b315ebb$exports = {};
$d021d50e6b315ebb$exports = {
  "ascending": `\u6607\u9806`,
  "ascendingSort": (args) => `\u5217 ${args.columnName} \u3092\u6607\u9806\u3067\u4E26\u3079\u66FF\u3048`,
  "columnSize": (args) => `${args.value} \u30D4\u30AF\u30BB\u30EB`,
  "descending": `\u964D\u9806`,
  "descendingSort": (args) => `\u5217 ${args.columnName} \u3092\u964D\u9806\u3067\u4E26\u3079\u66FF\u3048`,
  "resizerDescription": `Enter \u30AD\u30FC\u3092\u62BC\u3057\u3066\u30B5\u30A4\u30BA\u5909\u66F4\u3092\u958B\u59CB`,
  "select": `\u9078\u629E`,
  "selectAll": `\u3059\u3079\u3066\u9078\u629E`,
  "sortable": `\u4E26\u3079\u66FF\u3048\u53EF\u80FD\u306A\u5217`
};
var $52535c35c24ec937$exports = {};
$52535c35c24ec937$exports = {
  "ascending": `\uC624\uB984\uCC28\uC21C`,
  "ascendingSort": (args) => `${args.columnName} \uC5F4\uC744 \uAE30\uC900\uC73C\uB85C \uC624\uB984\uCC28\uC21C\uC73C\uB85C \uC815\uB82C\uB428`,
  "columnSize": (args) => `${args.value} \uD53D\uC140`,
  "descending": `\uB0B4\uB9BC\uCC28\uC21C`,
  "descendingSort": (args) => `${args.columnName} \uC5F4\uC744 \uAE30\uC900\uC73C\uB85C \uB0B4\uB9BC\uCC28\uC21C\uC73C\uB85C \uC815\uB82C\uB428`,
  "resizerDescription": `\uD06C\uAE30 \uC870\uC815\uC744 \uC2DC\uC791\uD558\uB824\uBA74 Enter\uB97C \uB204\uB974\uC138\uC694.`,
  "select": `\uC120\uD0DD`,
  "selectAll": `\uBAA8\uB450 \uC120\uD0DD`,
  "sortable": `\uC815\uB82C \uAC00\uB2A5\uD55C \uC5F4`
};
var $b37ee03672edfd1d$exports = {};
$b37ee03672edfd1d$exports = {
  "ascending": `did\u0117jan\u010Dia tvarka`,
  "ascendingSort": (args) => `surikiuota pagal stulpel\u012F ${args.columnName} did\u0117jan\u010Dia tvarka`,
  "columnSize": (args) => `${args.value} piks.`,
  "descending": `ma\u017E\u0117jan\u010Dia tvarka`,
  "descendingSort": (args) => `surikiuota pagal stulpel\u012F ${args.columnName} ma\u017E\u0117jan\u010Dia tvarka`,
  "resizerDescription": `Paspauskite \u201EEnter\u201C, kad prad\u0117tum\u0117te keisti dyd\u012F`,
  "select": `Pasirinkti`,
  "selectAll": `Pasirinkti visk\u0105`,
  "sortable": `rikiuojamas stulpelis`
};
var $c7df6686b4189d56$exports = {};
$c7df6686b4189d56$exports = {
  "ascending": `augo\u0161\u0101 sec\u012Bb\u0101`,
  "ascendingSort": (args) => `k\u0101rtots p\u0113c kolonnas ${args.columnName} augo\u0161\u0101 sec\u012Bb\u0101`,
  "columnSize": (args) => `${args.value} pikse\u013Ci`,
  "descending": `dilsto\u0161\u0101 sec\u012Bb\u0101`,
  "descendingSort": (args) => `k\u0101rtots p\u0113c kolonnas ${args.columnName} dilsto\u0161\u0101 sec\u012Bb\u0101`,
  "resizerDescription": `Nospiediet Enter, lai s\u0101ktu izm\u0113ru main\u012B\u0161anu`,
  "select": `Atlas\u012Bt`,
  "selectAll": `Atlas\u012Bt visu`,
  "sortable": `k\u0101rtojam\u0101 kolonna`
};
var $da07fe8ec87e6b68$exports = {};
$da07fe8ec87e6b68$exports = {
  "ascending": `stigende`,
  "ascendingSort": (args) => `sortert etter kolonne ${args.columnName} i stigende rekkef\xF8lge`,
  "columnSize": (args) => `${args.value} piksler`,
  "descending": `synkende`,
  "descendingSort": (args) => `sortert etter kolonne ${args.columnName} i synkende rekkef\xF8lge`,
  "resizerDescription": `Trykk p\xE5 Enter for \xE5 starte st\xF8rrelsesendring`,
  "select": `Velg`,
  "selectAll": `Velg alle`,
  "sortable": `kolonne som kan sorteres`
};
var $64b7e390f5791490$exports = {};
$64b7e390f5791490$exports = {
  "ascending": `oplopend`,
  "ascendingSort": (args) => `gesorteerd in oplopende volgorde in kolom ${args.columnName}`,
  "columnSize": (args) => `${args.value} pixels`,
  "descending": `aflopend`,
  "descendingSort": (args) => `gesorteerd in aflopende volgorde in kolom ${args.columnName}`,
  "resizerDescription": `Druk op Enter om het formaat te wijzigen`,
  "select": `Selecteren`,
  "selectAll": `Alles selecteren`,
  "sortable": `sorteerbare kolom`
};
var $2a03621e773f1678$exports = {};
$2a03621e773f1678$exports = {
  "ascending": `rosn\u0105co`,
  "ascendingSort": (args) => `posortowano wed\u0142ug kolumny ${args.columnName} w porz\u0105dku rosn\u0105cym`,
  "columnSize": (args) => `Liczba pikseli: ${args.value}`,
  "descending": `malej\u0105co`,
  "descendingSort": (args) => `posortowano wed\u0142ug kolumny ${args.columnName} w porz\u0105dku malej\u0105cym`,
  "resizerDescription": `Naci\u015Bnij Enter, aby rozpocz\u0105\u0107 zmienianie rozmiaru`,
  "select": `Zaznacz`,
  "selectAll": `Zaznacz wszystko`,
  "sortable": `kolumna z mo\u017Cliwo\u015Bci\u0105 sortowania`
};
var $0a79c0aba9e5ecc6$exports = {};
$0a79c0aba9e5ecc6$exports = {
  "ascending": `crescente`,
  "ascendingSort": (args) => `classificado pela coluna ${args.columnName} em ordem crescente`,
  "columnSize": (args) => `${args.value} pixels`,
  "descending": `decrescente`,
  "descendingSort": (args) => `classificado pela coluna ${args.columnName} em ordem decrescente`,
  "resizerDescription": `Pressione Enter para come\xE7ar a redimensionar`,
  "select": `Selecionar`,
  "selectAll": `Selecionar tudo`,
  "sortable": `coluna classific\xE1vel`
};
var $de7b4d0f7dc86fc8$exports = {};
$de7b4d0f7dc86fc8$exports = {
  "ascending": `ascendente`,
  "ascendingSort": (args) => `Ordenar por coluna ${args.columnName} em ordem ascendente`,
  "columnSize": (args) => `${args.value} pixels`,
  "descending": `descendente`,
  "descendingSort": (args) => `Ordenar por coluna ${args.columnName} em ordem descendente`,
  "resizerDescription": `Prima Enter para iniciar o redimensionamento`,
  "select": `Selecionar`,
  "selectAll": `Selecionar tudo`,
  "sortable": `Coluna orden\xE1vel`
};
var $28ea7e849d77bd1c$exports = {};
$28ea7e849d77bd1c$exports = {
  "ascending": `cresc\u0103toare`,
  "ascendingSort": (args) => `sortate dup\u0103 coloana ${args.columnName} \xEEn ordine cresc\u0103toare`,
  "columnSize": (args) => `${args.value} pixeli`,
  "descending": `descresc\u0103toare`,
  "descendingSort": (args) => `sortate dup\u0103 coloana ${args.columnName} \xEEn ordine descresc\u0103toare`,
  "resizerDescription": `Ap\u0103sa\u021Bi pe Enter pentru a \xEEncepe redimensionarea`,
  "select": `Selectare`,
  "selectAll": `Selectare total\u0103`,
  "sortable": `coloan\u0103 sortabil\u0103`
};
var $9a09321cf046b187$exports = {};
$9a09321cf046b187$exports = {
  "ascending": `\u0432\u043E\u0437\u0440\u0430\u0441\u0442\u0430\u043D\u0438\u0435`,
  "ascendingSort": (args) => `\u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0442\u043E\u043B\u0431\u0435\u0446 ${args.columnName} \u0432 \u043F\u043E\u0440\u044F\u0434\u043A\u0435 \u0432\u043E\u0437\u0440\u0430\u0441\u0442\u0430\u043D\u0438\u044F`,
  "columnSize": (args) => `${args.value} \u043F\u0438\u043A\u0441.`,
  "descending": `\u0443\u0431\u044B\u0432\u0430\u043D\u0438\u0435`,
  "descendingSort": (args) => `\u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0442\u043E\u043B\u0431\u0435\u0446 ${args.columnName} \u0432 \u043F\u043E\u0440\u044F\u0434\u043A\u0435 \u0443\u0431\u044B\u0432\u0430\u043D\u0438\u044F`,
  "resizerDescription": `\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043A\u043B\u0430\u0432\u0438\u0448\u0443 Enter \u0434\u043B\u044F \u043D\u0430\u0447\u0430\u043B\u0430 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0440\u0430\u0437\u043C\u0435\u0440\u043E\u0432`,
  "select": `\u0412\u044B\u0431\u0440\u0430\u0442\u044C`,
  "selectAll": `\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0432\u0441\u0435`,
  "sortable": `\u0441\u043E\u0440\u0442\u0438\u0440\u0443\u0435\u043C\u044B\u0439 \u0441\u0442\u043E\u043B\u0431\u0435\u0446`
};
var $5afe469a63fcac7b$exports = {};
$5afe469a63fcac7b$exports = {
  "ascending": `vzostupne`,
  "ascendingSort": (args) => `zoraden\xE9 zostupne pod\u013Ea st\u013Apca ${args.columnName}`,
  "columnSize": (args) => `Po\u010Det pixelov: ${args.value}`,
  "descending": `zostupne`,
  "descendingSort": (args) => `zoraden\xE9 zostupne pod\u013Ea st\u013Apca ${args.columnName}`,
  "resizerDescription": `Stla\u010Den\xEDm kl\xE1vesu Enter za\u010Dnete zmenu ve\u013Ekosti`,
  "select": `Vybra\u0165`,
  "selectAll": `Vybra\u0165 v\u0161etko`,
  "sortable": `zoradite\u013En\xFD st\u013Apec`
};
var $2956757ac31a7ce2$exports = {};
$2956757ac31a7ce2$exports = {
  "ascending": `nara\u0161\u010Dajo\u010De`,
  "ascendingSort": (args) => `razvr\u0161\u010Deno po stolpcu ${args.columnName} v nara\u0161\u010Dajo\u010Dem vrstnem redu`,
  "columnSize": (args) => `${args.value} slikovnih pik`,
  "descending": `padajo\u010De`,
  "descendingSort": (args) => `razvr\u0161\u010Deno po stolpcu ${args.columnName} v padajo\u010Dem vrstnem redu`,
  "resizerDescription": `Pritisnite tipko Enter da za\u010Dnete spreminjati velikost`,
  "select": `Izberite`,
  "selectAll": `Izberite vse`,
  "sortable": `razvrstljivi stolpec`
};
var $cedee0e66b175529$exports = {};
$cedee0e66b175529$exports = {
  "ascending": `rastu\u0107i`,
  "ascendingSort": (args) => `sortirano po kolonama ${args.columnName} rastu\u0107im redosledom`,
  "columnSize": (args) => `${args.value} piksela`,
  "descending": `padaju\u0107i`,
  "descendingSort": (args) => `sortirano po kolonama ${args.columnName} padaju\u0107im redosledom`,
  "resizerDescription": `Pritisnite Enter da biste zapo\u010Deli promenu veli\u010Dine`,
  "select": `Izaberite`,
  "selectAll": `Izaberite sve`,
  "sortable": `kolona koja se mo\u017Ee sortirati`
};
var $6db19998ba4427da$exports = {};
$6db19998ba4427da$exports = {
  "ascending": `stigande`,
  "ascendingSort": (args) => `sorterat p\xE5 kolumn ${args.columnName} i stigande ordning`,
  "columnSize": (args) => `${args.value} pixlar`,
  "descending": `fallande`,
  "descendingSort": (args) => `sorterat p\xE5 kolumn ${args.columnName} i fallande ordning`,
  "resizerDescription": `Tryck p\xE5 Retur f\xF6r att b\xF6rja \xE4ndra storlek`,
  "select": `Markera`,
  "selectAll": `Markera allt`,
  "sortable": `sorterbar kolumn`
};
var $166b7c9cc1adb1a1$exports = {};
$166b7c9cc1adb1a1$exports = {
  "ascending": `artan s\u0131rada`,
  "ascendingSort": (args) => `${args.columnName} s\xFCtuna g\xF6re artan d\xFCzende s\u0131rala`,
  "columnSize": (args) => `${args.value} piksel`,
  "descending": `azalan s\u0131rada`,
  "descendingSort": (args) => `${args.columnName} s\xFCtuna g\xF6re azalan d\xFCzende s\u0131rala`,
  "resizerDescription": `Yeniden boyutland\u0131rmak i\xE7in Enter'a bas\u0131n`,
  "select": `Se\xE7`,
  "selectAll": `T\xFCm\xFCn\xFC Se\xE7`,
  "sortable": `S\u0131ralanabilir s\xFCtun`
};
var $c7ab180b401e49ff$exports = {};
$c7ab180b401e49ff$exports = {
  "ascending": `\u0432\u0438\u0441\u0445\u0456\u0434\u043D\u0438\u0439`,
  "ascendingSort": (args) => `\u0432\u0456\u0434\u0441\u043E\u0440\u0442\u043E\u0432\u0430\u043D\u043E \u0437\u0430 \u0441\u0442\u043E\u0432\u043F\u0446\u0435\u043C ${args.columnName} \u0443 \u0432\u0438\u0441\u0445\u0456\u0434\u043D\u043E\u043C\u0443 \u043F\u043E\u0440\u044F\u0434\u043A\u0443`,
  "columnSize": (args) => `${args.value} \u043F\u0456\u043A\u0441.`,
  "descending": `\u043D\u0438\u0437\u0445\u0456\u0434\u043D\u0438\u0439`,
  "descendingSort": (args) => `\u0432\u0456\u0434\u0441\u043E\u0440\u0442\u043E\u0432\u0430\u043D\u043E \u0437\u0430 \u0441\u0442\u043E\u0432\u043F\u0446\u0435\u043C ${args.columnName} \u0443 \u043D\u0438\u0437\u0445\u0456\u0434\u043D\u043E\u043C\u0443 \u043F\u043E\u0440\u044F\u0434\u043A\u0443`,
  "resizerDescription": `\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C Enter, \u0449\u043E\u0431 \u043F\u043E\u0447\u0430\u0442\u0438 \u0437\u043C\u0456\u043D\u0443 \u0440\u043E\u0437\u043C\u0456\u0440\u0443`,
  "select": `\u0412\u0438\u0431\u0440\u0430\u0442\u0438`,
  "selectAll": `\u0412\u0438\u0431\u0440\u0430\u0442\u0438 \u0432\u0441\u0435`,
  "sortable": `\u0441\u043E\u0440\u0442\u0443\u0432\u0430\u043B\u044C\u043D\u0438\u0439 \u0441\u0442\u043E\u0432\u043F\u0435\u0446\u044C`
};
var $1648ec00941567f3$exports = {};
$1648ec00941567f3$exports = {
  "ascending": `\u5347\u5E8F`,
  "ascendingSort": (args) => `\u6309\u5217 ${args.columnName} \u5347\u5E8F\u6392\u5E8F`,
  "columnSize": (args) => `${args.value} \u50CF\u7D20`,
  "descending": `\u964D\u5E8F`,
  "descendingSort": (args) => `\u6309\u5217 ${args.columnName} \u964D\u5E8F\u6392\u5E8F`,
  "resizerDescription": `\u6309\u201C\u8F93\u5165\u201D\u952E\u5F00\u59CB\u8C03\u6574\u5927\u5C0F\u3002`,
  "select": `\u9009\u62E9`,
  "selectAll": `\u5168\u9009`,
  "sortable": `\u53EF\u6392\u5E8F\u7684\u5217`
};
var $b26f22384b3c1526$exports = {};
$b26f22384b3c1526$exports = {
  "ascending": `\u905E\u589E`,
  "ascendingSort": (args) => `\u5DF2\u4F9D\u64DA\u300C${args.columnName}\u300D\u6B04\u905E\u589E\u6392\u5E8F`,
  "columnSize": (args) => `${args.value} \u50CF\u7D20`,
  "descending": `\u905E\u6E1B`,
  "descendingSort": (args) => `\u5DF2\u4F9D\u64DA\u300C${args.columnName}\u300D\u6B04\u905E\u6E1B\u6392\u5E8F`,
  "resizerDescription": `\u6309 Enter \u9375\u4EE5\u958B\u59CB\u8ABF\u6574\u5927\u5C0F`,
  "select": `\u9078\u53D6`,
  "selectAll": `\u5168\u9078`,
  "sortable": `\u53EF\u6392\u5E8F\u7684\u6B04`
};
$7476b46781682bf5$exports = {
  "ar-AE": $ce3de3ff2fd66848$exports,
  "bg-BG": $cb80dcce530985b9$exports,
  "cs-CZ": $68ac86749db4c0fb$exports,
  "da-DK": $9a6cbac08487e661$exports,
  "de-DE": $c963661d89486e72$exports,
  "el-GR": $ac03861c6e8605f4$exports,
  "en-US": $09e6b82e0d6e466a$exports,
  "es-ES": $8cc39eb66c2bf220$exports,
  "et-EE": $4e11db3c25a38112$exports,
  "fi-FI": $da1e751a92575e02$exports,
  "fr-FR": $1b5d6c6c47d55106$exports,
  "he-IL": $7c18ba27b86d3308$exports,
  "hr-HR": $2cb40998e20e8a46$exports,
  "hu-HU": $189e23eec1d6aa3a$exports,
  "it-IT": $3c5ec8e4f015dfd0$exports,
  "ja-JP": $d021d50e6b315ebb$exports,
  "ko-KR": $52535c35c24ec937$exports,
  "lt-LT": $b37ee03672edfd1d$exports,
  "lv-LV": $c7df6686b4189d56$exports,
  "nb-NO": $da07fe8ec87e6b68$exports,
  "nl-NL": $64b7e390f5791490$exports,
  "pl-PL": $2a03621e773f1678$exports,
  "pt-BR": $0a79c0aba9e5ecc6$exports,
  "pt-PT": $de7b4d0f7dc86fc8$exports,
  "ro-RO": $28ea7e849d77bd1c$exports,
  "ru-RU": $9a09321cf046b187$exports,
  "sk-SK": $5afe469a63fcac7b$exports,
  "sl-SI": $2956757ac31a7ce2$exports,
  "sr-SP": $cedee0e66b175529$exports,
  "sv-SE": $6db19998ba4427da$exports,
  "tr-TR": $166b7c9cc1adb1a1$exports,
  "uk-UA": $c7ab180b401e49ff$exports,
  "zh-CN": $1648ec00941567f3$exports,
  "zh-TW": $b26f22384b3c1526$exports
};
var $0ba3c81c7f1caedd$export$da43f8f5cb04028d = class extends (0, $d1c300d9c497e402$export$de9feff04fda126e) {
  isCell(node) {
    return node.type === "cell" || node.type === "rowheader" || node.type === "column";
  }
  getKeyBelow(key) {
    let startItem = this.collection.getItem(key);
    if (!startItem)
      return;
    if (startItem.type === "column") {
      let child = (0, $c5a24bc478652b5f$export$fbdeaa6a76694f71)((0, $c5a24bc478652b5f$export$1005530eda016c13)(startItem, this.collection));
      if (child)
        return child.key;
      let firstKey = this.getFirstKey();
      if (firstKey == null)
        return;
      let firstItem = this.collection.getItem(firstKey);
      return (0, $c5a24bc478652b5f$export$5f3398f8733f90e2)((0, $c5a24bc478652b5f$export$1005530eda016c13)(firstItem, this.collection), startItem.index).key;
    }
    return super.getKeyBelow(key);
  }
  getKeyAbove(key) {
    let startItem = this.collection.getItem(key);
    if (!startItem)
      return;
    if (startItem.type === "column") {
      let parent = this.collection.getItem(startItem.parentKey);
      if (parent && parent.type === "column")
        return parent.key;
      return;
    }
    let superKey = super.getKeyAbove(key);
    if (superKey != null && this.collection.getItem(superKey).type !== "headerrow")
      return superKey;
    if (this.isCell(startItem))
      return this.collection.columns[startItem.index].key;
    return this.collection.columns[0].key;
  }
  findNextColumnKey(column) {
    let key = this.findNextKey(column.key, (item) => item.type === "column");
    if (key != null)
      return key;
    let row = this.collection.headerRows[column.level];
    for (let item of (0, $c5a24bc478652b5f$export$1005530eda016c13)(row, this.collection)) {
      if (item.type === "column")
        return item.key;
    }
  }
  findPreviousColumnKey(column) {
    let key = this.findPreviousKey(column.key, (item) => item.type === "column");
    if (key != null)
      return key;
    let row = this.collection.headerRows[column.level];
    let childNodes = [
      ...(0, $c5a24bc478652b5f$export$1005530eda016c13)(row, this.collection)
    ];
    for (let i = childNodes.length - 1; i >= 0; i--) {
      let item = childNodes[i];
      if (item.type === "column")
        return item.key;
    }
  }
  getKeyRightOf(key) {
    let item = this.collection.getItem(key);
    if (!item)
      return;
    if (item.type === "column")
      return this.direction === "rtl" ? this.findPreviousColumnKey(item) : this.findNextColumnKey(item);
    return super.getKeyRightOf(key);
  }
  getKeyLeftOf(key) {
    let item = this.collection.getItem(key);
    if (!item)
      return;
    if (item.type === "column")
      return this.direction === "rtl" ? this.findNextColumnKey(item) : this.findPreviousColumnKey(item);
    return super.getKeyLeftOf(key);
  }
  getKeyForSearch(search, fromKey) {
    if (!this.collator)
      return null;
    let collection = this.collection;
    let key = fromKey !== null && fromKey !== void 0 ? fromKey : this.getFirstKey();
    if (key == null)
      return null;
    let startItem = collection.getItem(key);
    if (startItem.type === "cell")
      key = startItem.parentKey;
    let hasWrapped = false;
    while (key != null) {
      let item = collection.getItem(key);
      for (let cell of (0, $c5a24bc478652b5f$export$1005530eda016c13)(item, this.collection)) {
        let column = collection.columns[cell.index];
        if (collection.rowHeaderColumnKeys.has(column.key) && cell.textValue) {
          let substring = cell.textValue.slice(0, search.length);
          if (this.collator.compare(substring, search) === 0) {
            let fromItem = fromKey != null ? collection.getItem(fromKey) : startItem;
            return fromItem.type === "cell" ? cell.key : item.key;
          }
        }
      }
      key = this.getKeyBelow(key);
      if (key == null && !hasWrapped) {
        key = this.getFirstKey();
        hasWrapped = true;
      }
    }
    return null;
  }
};
function $6e31608fbba75bab$export$25bceaac3c7e4dc7(props, state, ref) {
  let { keyboardDelegate, isVirtualized, layout } = props;
  let collator = (0, $325a3faab7a68acd$export$a16aca283550c30d)({
    usage: "search",
    sensitivity: "base"
  });
  let { direction } = (0, $18f2051aff69b9bf$export$43bb16f9c6d9e3f7)();
  let disabledBehavior = state.selectionManager.disabledBehavior;
  let delegate = (0, import_react7.useMemo)(() => keyboardDelegate || new (0, $0ba3c81c7f1caedd$export$da43f8f5cb04028d)({
    collection: state.collection,
    disabledKeys: disabledBehavior === "selection" ? /* @__PURE__ */ new Set() : state.disabledKeys,
    ref,
    direction,
    collator,
    layout
  }), [
    keyboardDelegate,
    state.collection,
    state.disabledKeys,
    disabledBehavior,
    ref,
    direction,
    collator,
    layout
  ]);
  let id = (0, $bdb11010cef70236$export$f680877a34711e37)(props.id);
  (0, $2140fb2337097f2d$export$552312adfd451dab).set(state, id);
  let { gridProps } = (0, $83c6e2eafa584c67$export$f6b86a04e5d66d90)({
    ...props,
    id,
    keyboardDelegate: delegate
  }, state, ref);
  if (isVirtualized)
    gridProps["aria-rowcount"] = state.collection.size + state.collection.headerRows.length;
  if ((0, $f4e2df6bd15f8569$export$1b00cb14a96194e6)() && "expandedKeys" in state)
    gridProps.role = "treegrid";
  let { column, direction: sortDirection } = state.sortDescriptor || {};
  let stringFormatter = (0, $fca6afa0e843324b$export$f12b703ca79dfbb1)((0, /* @__PURE__ */ $parcel$interopDefault2($7476b46781682bf5$exports)));
  let sortDescription = (0, import_react7.useMemo)(() => {
    var _state_collection_columns_find;
    let columnName = (_state_collection_columns_find = state.collection.columns.find((c) => c.key === column)) === null || _state_collection_columns_find === void 0 ? void 0 : _state_collection_columns_find.textValue;
    return sortDirection && column ? stringFormatter.format(`${sortDirection}Sort`, {
      columnName
    }) : void 0;
  }, [
    sortDirection,
    column,
    state.collection.columns
  ]);
  let descriptionProps = (0, $ef06256079686ba0$export$f8aeda7b10753fa1)(sortDescription);
  (0, $4f58c5f72bcf79f7$export$496315a1608d9602)(() => {
    (0, $319e236875307eab$export$a9b970dcc4ae71a9)(sortDescription, "assertive", 500);
  }, [
    sortDescription
  ]);
  return {
    gridProps: (0, $3ef42575df84b30b$export$9d1611c77c2fe928)(gridProps, descriptionProps, {
      // merge sort description with long press information
      "aria-describedby": [
        descriptionProps["aria-describedby"],
        gridProps["aria-describedby"]
      ].filter(Boolean).join(" ")
    })
  };
}
function $f329116d8ad0aba0$export$9514819a8c81e960(props, state, ref) {
  var _state_sortDescriptor, _state_sortDescriptor1;
  let { node } = props;
  let allowsSorting = node.props.allowsSorting;
  let { gridCellProps } = (0, $ab90dcbc1b5466d0$export$c7e10bfc0c59f67c)({
    ...props,
    focusMode: "child"
  }, state, ref);
  let isSelectionCellDisabled = node.props.isSelectionCell && state.selectionManager.selectionMode === "single";
  let { pressProps } = (0, $f6c31cce2adf654f$export$45712eceda6fad21)({
    isDisabled: !allowsSorting || isSelectionCellDisabled,
    onPress() {
      state.sort(node.key);
    },
    ref
  });
  let { focusableProps } = (0, $e6afbd83fe6ebbd2$export$4c014de7c8940b4c)({}, ref);
  let ariaSort = null;
  let isSortedColumn = ((_state_sortDescriptor = state.sortDescriptor) === null || _state_sortDescriptor === void 0 ? void 0 : _state_sortDescriptor.column) === node.key;
  let sortDirection = (_state_sortDescriptor1 = state.sortDescriptor) === null || _state_sortDescriptor1 === void 0 ? void 0 : _state_sortDescriptor1.direction;
  if (node.props.allowsSorting && !(0, $c87311424ea30a05$export$a11b0059900ceec8)())
    ariaSort = isSortedColumn ? sortDirection : "none";
  let stringFormatter = (0, $fca6afa0e843324b$export$f12b703ca79dfbb1)((0, /* @__PURE__ */ $parcel$interopDefault2($7476b46781682bf5$exports)));
  let sortDescription;
  if (allowsSorting) {
    sortDescription = `${stringFormatter.format("sortable")}`;
    if (isSortedColumn && sortDirection && (0, $c87311424ea30a05$export$a11b0059900ceec8)())
      sortDescription = `${sortDescription}, ${stringFormatter.format(sortDirection)}`;
  }
  let descriptionProps = (0, $ef06256079686ba0$export$f8aeda7b10753fa1)(sortDescription);
  let shouldDisableFocus = state.collection.size === 0;
  (0, import_react7.useEffect)(() => {
    if (shouldDisableFocus && state.selectionManager.focusedKey === node.key)
      state.selectionManager.setFocusedKey(null);
  }, [
    shouldDisableFocus,
    state.selectionManager,
    node.key
  ]);
  return {
    columnHeaderProps: {
      ...(0, $3ef42575df84b30b$export$9d1611c77c2fe928)(
        gridCellProps,
        pressProps,
        focusableProps,
        descriptionProps,
        // If the table is empty, make all column headers untabbable
        shouldDisableFocus && {
          tabIndex: -1
        }
      ),
      role: "columnheader",
      id: (0, $2140fb2337097f2d$export$37cd4213f2ad742e)(state, node.key),
      "aria-colspan": node.colspan && node.colspan > 1 ? node.colspan : null,
      "aria-sort": ariaSort
    }
  };
}
var $b2db214c022798eb$var$EXPANSION_KEYS = {
  expand: {
    ltr: "ArrowRight",
    rtl: "ArrowLeft"
  },
  "collapse": {
    ltr: "ArrowLeft",
    rtl: "ArrowRight"
  }
};
function $b2db214c022798eb$export$7f2f6ae19e707aa5(props, state, ref) {
  let { node, isVirtualized } = props;
  let { rowProps, ...states } = (0, $4159a7a9cbb0cc18$export$96357d5a73f686fa)(props, state, ref);
  let { direction } = (0, $18f2051aff69b9bf$export$43bb16f9c6d9e3f7)();
  if (isVirtualized && !((0, $f4e2df6bd15f8569$export$1b00cb14a96194e6)() && "expandedKeys" in state))
    rowProps["aria-rowindex"] = node.index + 1 + state.collection.headerRows.length;
  else
    delete rowProps["aria-rowindex"];
  let treeGridRowProps = {};
  if ((0, $f4e2df6bd15f8569$export$1b00cb14a96194e6)() && "expandedKeys" in state) {
    let treeNode = state.keyMap.get(node.key);
    if (treeNode != null) {
      var _treeNode_props, _treeNode_props_children, _treeNode_props1;
      let hasChildRows = ((_treeNode_props = treeNode.props) === null || _treeNode_props === void 0 ? void 0 : _treeNode_props.UNSTABLE_childItems) || ((_treeNode_props1 = treeNode.props) === null || _treeNode_props1 === void 0 ? void 0 : (_treeNode_props_children = _treeNode_props1.children) === null || _treeNode_props_children === void 0 ? void 0 : _treeNode_props_children.length) > state.userColumnCount;
      treeGridRowProps = {
        onKeyDown: (e) => {
          if (e.key === $b2db214c022798eb$var$EXPANSION_KEYS["expand"][direction] && state.selectionManager.focusedKey === treeNode.key && hasChildRows && state.expandedKeys !== "all" && !state.expandedKeys.has(treeNode.key)) {
            state.toggleKey(treeNode.key);
            e.stopPropagation();
          } else if (e.key === $b2db214c022798eb$var$EXPANSION_KEYS["collapse"][direction] && state.selectionManager.focusedKey === treeNode.key && hasChildRows && (state.expandedKeys === "all" || state.expandedKeys.has(treeNode.key))) {
            state.toggleKey(treeNode.key);
            e.stopPropagation();
          }
        },
        "aria-expanded": hasChildRows ? state.expandedKeys === "all" || state.expandedKeys.has(node.key) : void 0,
        "aria-level": treeNode.level,
        "aria-posinset": treeNode.indexOfType + 1,
        "aria-setsize": treeNode.level > 1 ? (0, $c5a24bc478652b5f$export$7475b2c64539e4cf)(state.keyMap.get(treeNode === null || treeNode === void 0 ? void 0 : treeNode.parentKey).childNodes).indexOfType + 1 : (0, $c5a24bc478652b5f$export$7475b2c64539e4cf)(state.keyMap.get(state.collection.body.key).childNodes).indexOfType + 1
      };
    }
  }
  let linkProps = states.hasAction ? (0, $ea8dcbcb9ea1b556$export$51437d503373d223)(node.props) : {};
  return {
    rowProps: {
      ...(0, $3ef42575df84b30b$export$9d1611c77c2fe928)(rowProps, treeGridRowProps, linkProps),
      "aria-labelledby": (0, $2140fb2337097f2d$export$85069b70317f543)(state, node.key)
    },
    ...states
  };
}
function $f917ee10f4c32dab$export$1b95a7d2d517b841(props, state, ref) {
  let { node, isVirtualized } = props;
  let rowProps = {
    role: "row"
  };
  if (isVirtualized && !((0, $f4e2df6bd15f8569$export$1b00cb14a96194e6)() && "expandedKeys" in state))
    rowProps["aria-rowindex"] = node.index + 1;
  return {
    rowProps
  };
}
function $7713593715703b24$export$49571c903d73624c(props, state, ref) {
  let { gridCellProps, isPressed } = (0, $ab90dcbc1b5466d0$export$c7e10bfc0c59f67c)(props, state, ref);
  let columnKey = props.node.column.key;
  if (state.collection.rowHeaderColumnKeys.has(columnKey)) {
    gridCellProps.role = "rowheader";
    gridCellProps.id = (0, $2140fb2337097f2d$export$19baff3266315d44)(state, props.node.parentKey, columnKey);
  }
  return {
    gridCellProps,
    isPressed
  };
}
function $2a795c53a101c542$export$16ea7f650bd7c1bb(props, state) {
  let { key } = props;
  const { checkboxProps } = (0, $7cb39d07f245a780$export$70e2eed1a92976ad)(props, state);
  return {
    checkboxProps: {
      ...checkboxProps,
      "aria-labelledby": `${checkboxProps.id} ${(0, $2140fb2337097f2d$export$85069b70317f543)(state, key)}`
    }
  };
}
function $2a795c53a101c542$export$1003db6a7e384b99(state) {
  let { isEmpty, isSelectAll, selectionMode } = state.selectionManager;
  const stringFormatter = (0, $fca6afa0e843324b$export$f12b703ca79dfbb1)((0, /* @__PURE__ */ $parcel$interopDefault2($7476b46781682bf5$exports)));
  return {
    checkboxProps: {
      "aria-label": stringFormatter.format(selectionMode === "single" ? "select" : "selectAll"),
      isSelected: isSelectAll,
      isDisabled: selectionMode !== "multiple" || state.collection.size === 0,
      isIndeterminate: !isEmpty && !isSelectAll,
      onChange: () => state.selectionManager.toggleSelectAll()
    }
  };
}
function $0047e6c294ea075f$export$6fb1613bd7b28198() {
  return (0, $e45487f8ba1cbdbf$export$d3037f5d3f3e51bf)();
}

// node_modules/@nextui-org/table/dist/chunk-IZM76DYO.mjs
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
"use client";
var TableSelectAllCheckbox = forwardRef((props, ref) => {
  var _a, _b;
  const {
    as,
    className,
    node,
    slots,
    state,
    selectionMode,
    color,
    checkboxesProps,
    disableAnimation,
    classNames,
    ...otherProps
  } = props;
  const Component = as || "th";
  const shouldFilterDOMProps = typeof Component === "string";
  const domRef = useDOMRef(ref);
  const { columnHeaderProps } = $f329116d8ad0aba0$export$9514819a8c81e960({ node }, state, domRef);
  const { isFocusVisible, focusProps } = $f7dceffc5ad7768b$export$4e328f61c538687f();
  const { checkboxProps } = $2a795c53a101c542$export$1003db6a7e384b99(state);
  const thStyles = clsx(classNames == null ? void 0 : classNames.th, className, (_a = node.props) == null ? void 0 : _a.className);
  const isSingleSelectionMode = selectionMode === "single";
  const { onChange, ...otherCheckboxProps } = checkboxProps;
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    Component,
    {
      ref: domRef,
      "data-focus-visible": dataAttr(isFocusVisible),
      ...$3ef42575df84b30b$export$9d1611c77c2fe928(
        columnHeaderProps,
        focusProps,
        filterDOMProps(node.props, {
          enabled: shouldFilterDOMProps
        }),
        filterDOMProps(otherProps, {
          enabled: shouldFilterDOMProps
        })
      ),
      className: (_b = slots.th) == null ? void 0 : _b.call(slots, { class: thStyles }),
      children: isSingleSelectionMode ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)($5c3e21d68f1c4674$export$439d29a4e110a164, { children: checkboxProps["aria-label"] }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        checkbox_default,
        {
          color,
          disableAnimation,
          onValueChange: onChange,
          ...$3ef42575df84b30b$export$9d1611c77c2fe928(checkboxesProps, otherCheckboxProps)
        }
      )
    }
  );
});
TableSelectAllCheckbox.displayName = "NextUI.TableSelectAllCheckbox";
var table_select_all_checkbox_default = TableSelectAllCheckbox;

// node_modules/@nextui-org/table/dist/chunk-774VMS2G.mjs
var import_react10 = __toESM(require_react(), 1);

// node_modules/@react-stately/table/dist/import.mjs
var import_react9 = __toESM(require_react(), 1);

// node_modules/@react-stately/grid/dist/import.mjs
var import_react8 = __toESM(require_react(), 1);
function $62967d126f3aa823$export$4007ac09ff9c68ed(props) {
  let { collection, focusMode } = props;
  let selectionState = (0, $7af3f5b51489e0b5$export$253fe78d46329472)(props);
  let disabledKeys = (0, import_react8.useMemo)(() => props.disabledKeys ? new Set(props.disabledKeys) : /* @__PURE__ */ new Set(), [
    props.disabledKeys
  ]);
  let setFocusedKey = selectionState.setFocusedKey;
  selectionState.setFocusedKey = (key, child) => {
    if (focusMode === "cell" && key != null) {
      let item = collection.getItem(key);
      if ((item === null || item === void 0 ? void 0 : item.type) === "item") {
        var _getLastItem, _getFirstItem;
        let children = (0, $c5a24bc478652b5f$export$1005530eda016c13)(item, collection);
        if (child === "last")
          key = (_getLastItem = (0, $c5a24bc478652b5f$export$7475b2c64539e4cf)(children)) === null || _getLastItem === void 0 ? void 0 : _getLastItem.key;
        else
          key = (_getFirstItem = (0, $c5a24bc478652b5f$export$fbdeaa6a76694f71)(children)) === null || _getFirstItem === void 0 ? void 0 : _getFirstItem.key;
      }
    }
    setFocusedKey(key, child);
  };
  let selectionManager = (0, import_react8.useMemo)(() => new (0, $d496c0a20b6e58ec$export$6c8a5aaad13c9852)(collection, selectionState), [
    collection,
    selectionState
  ]);
  const cachedCollection = (0, import_react8.useRef)(null);
  (0, import_react8.useEffect)(() => {
    if (selectionState.focusedKey != null && !collection.getItem(selectionState.focusedKey)) {
      const node = cachedCollection.current.getItem(selectionState.focusedKey);
      const parentNode = node.parentKey != null && (node.type === "cell" || node.type === "rowheader" || node.type === "column") ? cachedCollection.current.getItem(node.parentKey) : node;
      const cachedRows = cachedCollection.current.rows;
      const rows = collection.rows;
      const diff = cachedRows.length - rows.length;
      let index = Math.min(diff > 1 ? Math.max(parentNode.index - diff + 1, 0) : parentNode.index, rows.length - 1);
      let newRow;
      while (index >= 0) {
        if (!selectionManager.isDisabled(rows[index].key) && rows[index].type !== "headerrow") {
          newRow = rows[index];
          break;
        }
        if (index < rows.length - 1)
          index++;
        else {
          if (index > parentNode.index)
            index = parentNode.index;
          index--;
        }
      }
      if (newRow) {
        const childNodes = newRow.hasChildNodes ? [
          ...(0, $c5a24bc478652b5f$export$1005530eda016c13)(newRow, collection)
        ] : [];
        const keyToFocus = newRow.hasChildNodes && parentNode !== node && node.index < childNodes.length ? childNodes[node.index].key : newRow.key;
        selectionState.setFocusedKey(keyToFocus);
      } else
        selectionState.setFocusedKey(null);
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
    isKeyboardNavigationDisabled: false,
    selectionManager
  };
}
var $16805b1b18093c5f$export$de3fdf6493c353d = class {
  *[Symbol.iterator]() {
    yield* [
      ...this.rows
    ];
  }
  get size() {
    return [
      ...this.rows
    ].length;
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
    var _;
    return (_ = [
      ...this.rows
    ][0]) === null || _ === void 0 ? void 0 : _.key;
  }
  getLastKey() {
    var _rows_;
    let rows = [
      ...this.rows
    ];
    return (_rows_ = rows[rows.length - 1]) === null || _rows_ === void 0 ? void 0 : _rows_.key;
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
  constructor(opts) {
    this.keyMap = /* @__PURE__ */ new Map();
    this.keyMap = /* @__PURE__ */ new Map();
    this.columnCount = opts === null || opts === void 0 ? void 0 : opts.columnCount;
    this.rows = [];
    let visit = (node) => {
      let prevNode = this.keyMap.get(node.key);
      if (opts.visitNode)
        node = opts.visitNode(node);
      this.keyMap.set(node.key, node);
      let childKeys = /* @__PURE__ */ new Set();
      let last2;
      for (let child of node.childNodes) {
        if (child.type === "cell" && child.parentKey == null)
          child.parentKey = node.key;
        childKeys.add(child.key);
        if (last2) {
          last2.nextKey = child.key;
          child.prevKey = last2.key;
        } else
          child.prevKey = null;
        visit(child);
        last2 = child;
      }
      if (last2)
        last2.nextKey = null;
      if (prevNode) {
        for (let child of prevNode.childNodes)
          if (!childKeys.has(child.key))
            remove(child);
      }
    };
    let remove = (node) => {
      this.keyMap.delete(node.key);
      for (let child of node.childNodes)
        if (this.keyMap.get(child.key) === child)
          remove(child);
    };
    let last;
    opts.items.forEach((node, i) => {
      let rowNode = {
        level: 0,
        key: "row-" + i,
        type: "row",
        value: void 0,
        hasChildNodes: true,
        childNodes: [
          ...node.childNodes
        ],
        rendered: void 0,
        textValue: void 0,
        ...node
      };
      if (last) {
        last.nextKey = rowNode.key;
        rowNode.prevKey = last.key;
      } else
        rowNode.prevKey = null;
      this.rows.push(rowNode);
      visit(rowNode);
      last = rowNode;
    });
    if (last)
      last.nextKey = null;
  }
};

// node_modules/@react-stately/table/dist/import.mjs
var $788781baa30117fa$var$ROW_HEADER_COLUMN_KEY = "row-header-column-" + Math.random().toString(36).slice(2);
var $788781baa30117fa$var$ROW_HEADER_COLUMN_KEY_DRAG = "row-header-column-" + Math.random().toString(36).slice(2);
while ($788781baa30117fa$var$ROW_HEADER_COLUMN_KEY === $788781baa30117fa$var$ROW_HEADER_COLUMN_KEY_DRAG)
  $788781baa30117fa$var$ROW_HEADER_COLUMN_KEY_DRAG = "row-header-column-" + Math.random().toString(36).slice(2);
function $788781baa30117fa$export$7c127db850d4e81e(keyMap, columnNodes) {
  if (columnNodes.length === 0)
    return [];
  let columns = [];
  let seen = /* @__PURE__ */ new Map();
  for (let column of columnNodes) {
    let parentKey = column.parentKey;
    let col = [
      column
    ];
    while (parentKey) {
      let parent = keyMap.get(parentKey);
      if (!parent)
        break;
      if (seen.has(parent)) {
        parent.colspan++;
        let { column: column2, index } = seen.get(parent);
        if (index > col.length)
          break;
        for (let i2 = index; i2 < col.length; i2++)
          column2.splice(i2, 0, null);
        for (let i2 = col.length; i2 < column2.length; i2++)
          if (column2[i2] && seen.has(column2[i2]))
            seen.get(column2[i2]).index = i2;
      } else {
        parent.colspan = 1;
        col.push(parent);
        seen.set(parent, {
          column: col,
          index: col.length - 1
        });
      }
      parentKey = parent.parentKey;
    }
    columns.push(col);
    column.index = columns.length - 1;
  }
  let maxLength = Math.max(...columns.map((c) => c.length));
  let headerRows = Array(maxLength).fill(0).map(() => []);
  let colIndex = 0;
  for (let column of columns) {
    let i2 = maxLength - 1;
    for (let item of column) {
      if (item) {
        let row = headerRows[i2];
        let rowLength = row.reduce((p, c) => p + c.colspan, 0);
        if (rowLength < colIndex) {
          let placeholder = {
            type: "placeholder",
            key: "placeholder-" + item.key,
            colspan: colIndex - rowLength,
            index: rowLength,
            value: null,
            rendered: null,
            level: i2,
            hasChildNodes: false,
            childNodes: [],
            textValue: null
          };
          if (row.length > 0) {
            row[row.length - 1].nextKey = placeholder.key;
            placeholder.prevKey = row[row.length - 1].key;
          }
          row.push(placeholder);
        }
        if (row.length > 0) {
          row[row.length - 1].nextKey = item.key;
          item.prevKey = row[row.length - 1].key;
        }
        item.level = i2;
        item.colIndex = colIndex;
        row.push(item);
      }
      i2--;
    }
    colIndex++;
  }
  let i = 0;
  for (let row of headerRows) {
    let rowLength = row.reduce((p, c) => p + c.colspan, 0);
    if (rowLength < columnNodes.length) {
      let placeholder = {
        type: "placeholder",
        key: "placeholder-" + row[row.length - 1].key,
        colspan: columnNodes.length - rowLength,
        index: rowLength,
        value: null,
        rendered: null,
        level: i,
        hasChildNodes: false,
        childNodes: [],
        textValue: null,
        prevKey: row[row.length - 1].key
      };
      row.push(placeholder);
    }
    i++;
  }
  return headerRows.map((childNodes, index) => {
    let row = {
      type: "headerrow",
      key: "headerrow-" + index,
      index,
      value: null,
      rendered: null,
      level: 0,
      hasChildNodes: true,
      childNodes,
      textValue: null
    };
    return row;
  });
}
var $788781baa30117fa$export$596e1b2e2cf93690 = class extends (0, $16805b1b18093c5f$export$de3fdf6493c353d) {
  *[Symbol.iterator]() {
    yield* this.body.childNodes;
  }
  get size() {
    return this._size;
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
    var _getFirstItem;
    return (_getFirstItem = (0, $c5a24bc478652b5f$export$fbdeaa6a76694f71)(this.body.childNodes)) === null || _getFirstItem === void 0 ? void 0 : _getFirstItem.key;
  }
  getLastKey() {
    var _getLastItem;
    return (_getLastItem = (0, $c5a24bc478652b5f$export$7475b2c64539e4cf)(this.body.childNodes)) === null || _getLastItem === void 0 ? void 0 : _getLastItem.key;
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
  getTextValue(key) {
    let row = this.getItem(key);
    if (!row)
      return "";
    if (row.textValue)
      return row.textValue;
    let rowHeaderColumnKeys = this.rowHeaderColumnKeys;
    if (rowHeaderColumnKeys) {
      let text = [];
      for (let cell of row.childNodes) {
        let column = this.columns[cell.index];
        if (rowHeaderColumnKeys.has(column.key) && cell.textValue)
          text.push(cell.textValue);
        if (text.length === rowHeaderColumnKeys.size)
          break;
      }
      return text.join(" ");
    }
    return "";
  }
  constructor(nodes, prev, opts) {
    let rowHeaderColumnKeys = /* @__PURE__ */ new Set();
    let body;
    let columns = [];
    if (opts === null || opts === void 0 ? void 0 : opts.showSelectionCheckboxes) {
      let rowHeaderColumn = {
        type: "column",
        key: $788781baa30117fa$var$ROW_HEADER_COLUMN_KEY,
        value: null,
        textValue: "",
        level: 0,
        index: (opts === null || opts === void 0 ? void 0 : opts.showDragButtons) ? 1 : 0,
        hasChildNodes: false,
        rendered: null,
        childNodes: [],
        props: {
          isSelectionCell: true
        }
      };
      columns.unshift(rowHeaderColumn);
    }
    if (opts === null || opts === void 0 ? void 0 : opts.showDragButtons) {
      let rowHeaderColumn = {
        type: "column",
        key: $788781baa30117fa$var$ROW_HEADER_COLUMN_KEY_DRAG,
        value: null,
        textValue: "",
        level: 0,
        index: 0,
        hasChildNodes: false,
        rendered: null,
        childNodes: [],
        props: {
          isDragButtonCell: true
        }
      };
      columns.unshift(rowHeaderColumn);
    }
    let rows = [];
    let columnKeyMap = /* @__PURE__ */ new Map();
    let visit = (node) => {
      switch (node.type) {
        case "body":
          body = node;
          break;
        case "column":
          columnKeyMap.set(node.key, node);
          if (!node.hasChildNodes) {
            columns.push(node);
            if (node.props.isRowHeader)
              rowHeaderColumnKeys.add(node.key);
          }
          break;
        case "item":
          rows.push(node);
          return;
      }
      for (let child of node.childNodes)
        visit(child);
    };
    for (let node of nodes)
      visit(node);
    let headerRows = $788781baa30117fa$export$7c127db850d4e81e(columnKeyMap, columns);
    headerRows.forEach((row, i) => rows.splice(i, 0, row));
    super({
      columnCount: columns.length,
      items: rows,
      visitNode: (node) => {
        node.column = columns[node.index];
        return node;
      }
    });
    this._size = 0;
    this.columns = columns;
    this.rowHeaderColumnKeys = rowHeaderColumnKeys;
    this.body = body;
    this.headerRows = headerRows;
    this._size = [
      ...body.childNodes
    ].length;
    if (this.rowHeaderColumnKeys.size === 0) {
      if (opts === null || opts === void 0 ? void 0 : opts.showSelectionCheckboxes) {
        if (opts === null || opts === void 0 ? void 0 : opts.showDragButtons)
          this.rowHeaderColumnKeys.add(this.columns[2].key);
        else
          this.rowHeaderColumnKeys.add(this.columns[1].key);
      } else
        this.rowHeaderColumnKeys.add(this.columns[0].key);
    }
  }
};
var $4a0dd036d492cee4$var$OPPOSITE_SORT_DIRECTION = {
  ascending: "descending",
  descending: "ascending"
};
function $4a0dd036d492cee4$export$907bcc6c48325fd6(props) {
  let [isKeyboardNavigationDisabled, setKeyboardNavigationDisabled] = (0, import_react9.useState)(false);
  let { selectionMode = "none", showSelectionCheckboxes, showDragButtons } = props;
  let context = (0, import_react9.useMemo)(() => ({
    showSelectionCheckboxes: showSelectionCheckboxes && selectionMode !== "none",
    showDragButtons,
    selectionMode,
    columns: []
  }), [
    props.children,
    showSelectionCheckboxes,
    selectionMode,
    showDragButtons
  ]);
  let collection = (0, $7613b1592d41b092$export$6cd28814d92fa9c9)(props, (0, import_react9.useCallback)((nodes) => new (0, $788781baa30117fa$export$596e1b2e2cf93690)(nodes, null, context), [
    context
  ]), context);
  let { disabledKeys, selectionManager } = (0, $62967d126f3aa823$export$4007ac09ff9c68ed)({
    ...props,
    collection,
    disabledBehavior: props.disabledBehavior || "selection"
  });
  return {
    collection,
    disabledKeys,
    selectionManager,
    showSelectionCheckboxes: props.showSelectionCheckboxes || false,
    sortDescriptor: props.sortDescriptor,
    isKeyboardNavigationDisabled: collection.size === 0 || isKeyboardNavigationDisabled,
    setKeyboardNavigationDisabled,
    sort(columnKey, direction) {
      var _props_sortDescriptor;
      props.onSortChange({
        column: columnKey,
        direction: direction !== null && direction !== void 0 ? direction : ((_props_sortDescriptor = props.sortDescriptor) === null || _props_sortDescriptor === void 0 ? void 0 : _props_sortDescriptor.column) === columnKey ? $4a0dd036d492cee4$var$OPPOSITE_SORT_DIRECTION[props.sortDescriptor.direction] : "ascending"
      });
    }
  };
}
function $312ae3b56a94a86e$var$TableHeader(props) {
  return null;
}
$312ae3b56a94a86e$var$TableHeader.getCollectionNode = function* getCollectionNode(props, context) {
  let { children, columns } = props;
  context.columns = [];
  if (typeof children === "function") {
    if (!columns)
      throw new Error("props.children was a function but props.columns is missing");
    for (let column of columns)
      yield {
        type: "column",
        value: column,
        renderer: children
      };
  } else {
    let columns2 = [];
    (0, import_react9.default).Children.forEach(children, (column) => {
      columns2.push({
        type: "column",
        element: column
      });
    });
    yield* columns2;
  }
};
var $312ae3b56a94a86e$export$f850895b287ef28e = $312ae3b56a94a86e$var$TableHeader;
function $4ae5314bf50db1a3$var$TableBody(props) {
  return null;
}
$4ae5314bf50db1a3$var$TableBody.getCollectionNode = function* getCollectionNode2(props) {
  let { children, items } = props;
  yield {
    type: "body",
    hasChildNodes: true,
    props,
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
        (0, import_react9.default).Children.forEach(children, (item) => {
          items2.push({
            type: "item",
            element: item
          });
        });
        yield* items2;
      }
    }
  };
};
var $4ae5314bf50db1a3$export$76ccd210b9029917 = $4ae5314bf50db1a3$var$TableBody;
function $1cd244557c2f97d5$var$Column(props) {
  return null;
}
$1cd244557c2f97d5$var$Column.getCollectionNode = function* getCollectionNode3(props, context) {
  let { title, children, childColumns } = props;
  let rendered = title || children;
  let textValue = props.textValue || (typeof rendered === "string" ? rendered : "") || props["aria-label"];
  let fullNodes = yield {
    type: "column",
    hasChildNodes: !!childColumns || title && (0, import_react9.default).Children.count(children) > 0,
    rendered,
    textValue,
    props,
    *childNodes() {
      if (childColumns)
        for (let child of childColumns)
          yield {
            type: "column",
            value: child
          };
      else if (title) {
        let childColumns2 = [];
        (0, import_react9.default).Children.forEach(children, (child) => {
          childColumns2.push({
            type: "column",
            element: child
          });
        });
        yield* childColumns2;
      }
    },
    shouldInvalidate(newContext) {
      updateContext(newContext);
      return false;
    }
  };
  let updateContext = (context2) => {
    for (let node of fullNodes)
      if (!node.hasChildNodes)
        context2.columns.push(node);
  };
  updateContext(context);
};
var $1cd244557c2f97d5$export$816b5d811295e6bc = $1cd244557c2f97d5$var$Column;
function $70d70eb16ea48428$var$Row(props) {
  return null;
}
$70d70eb16ea48428$var$Row.getCollectionNode = function* getCollectionNode4(props, context) {
  let { children, textValue, UNSTABLE_childItems } = props;
  yield {
    type: "item",
    props,
    textValue,
    "aria-label": props["aria-label"],
    hasChildNodes: true,
    *childNodes() {
      if (context.showDragButtons)
        yield {
          type: "cell",
          key: "header-drag",
          props: {
            isDragButtonCell: true
          }
        };
      if (context.showSelectionCheckboxes && context.selectionMode !== "none")
        yield {
          type: "cell",
          key: "header",
          props: {
            isSelectionCell: true
          }
        };
      if (typeof children === "function") {
        for (let column of context.columns)
          yield {
            type: "cell",
            element: children(column.key),
            key: column.key
            // this is combined with the row key by CollectionBuilder
          };
        if (UNSTABLE_childItems)
          for (let child of UNSTABLE_childItems)
            yield {
              type: "item",
              value: child
            };
      } else {
        let cells = [];
        let childRows = [];
        (0, import_react9.default).Children.forEach(children, (node) => {
          if (node.type === $70d70eb16ea48428$var$Row) {
            if (cells.length < context.columns.length)
              throw new Error("All of a Row's child Cells must be positioned before any child Rows.");
            childRows.push({
              type: "item",
              element: node
            });
          } else
            cells.push({
              type: "cell",
              element: node
            });
        });
        if (cells.length !== context.columns.length)
          throw new Error(`Cell count must match column count. Found ${cells.length} cells and ${context.columns.length} columns.`);
        yield* cells;
        yield* childRows;
      }
    },
    shouldInvalidate(newContext) {
      return newContext.columns.length !== context.columns.length || newContext.columns.some((c, i) => c.key !== context.columns[i].key) || newContext.showSelectionCheckboxes !== context.showSelectionCheckboxes || newContext.showDragButtons !== context.showDragButtons || newContext.selectionMode !== context.selectionMode;
    }
  };
};
var $70d70eb16ea48428$export$b59bdbef9ce70de2 = $70d70eb16ea48428$var$Row;
function $941d1d9a6a28982a$var$Cell(props) {
  return null;
}
$941d1d9a6a28982a$var$Cell.getCollectionNode = function* getCollectionNode5(props) {
  let { children } = props;
  let textValue = props.textValue || (typeof children === "string" ? children : "") || props["aria-label"] || "";
  yield {
    type: "cell",
    props,
    rendered: children,
    textValue,
    "aria-label": props["aria-label"],
    hasChildNodes: false
  };
};
var $941d1d9a6a28982a$export$f6f0c3fe4ec306ea = $941d1d9a6a28982a$var$Cell;

// node_modules/@nextui-org/table/dist/chunk-774VMS2G.mjs
var import_react11 = __toESM(require_react(), 1);
"use client";
function useTable(originalProps) {
  const [props, variantProps] = mapPropsVariants(originalProps, table.variantKeys);
  const {
    ref,
    as,
    baseRef,
    children,
    className,
    classNames,
    layoutNode,
    removeWrapper = false,
    disableAnimation = false,
    selectionMode = "none",
    topContentPlacement = "inside",
    bottomContentPlacement = "inside",
    selectionBehavior = selectionMode === "none" ? null : "toggle",
    disabledBehavior = "selection",
    showSelectionCheckboxes = selectionMode === "multiple" && selectionBehavior !== "replace",
    BaseComponent = "div",
    checkboxesProps,
    topContent,
    bottomContent,
    onRowAction,
    onCellAction,
    ...otherProps
  } = props;
  const Component = as || "table";
  const shouldFilterDOMProps = typeof Component === "string";
  const domRef = useDOMRef(ref);
  const domBaseRef = useDOMRef(baseRef);
  const state = $4a0dd036d492cee4$export$907bcc6c48325fd6({
    ...originalProps,
    children,
    showSelectionCheckboxes
  });
  const { collection } = state;
  const { gridProps } = $6e31608fbba75bab$export$25bceaac3c7e4dc7({ ...originalProps, layout: layoutNode }, state, domRef);
  const isSelectable = selectionMode !== "none";
  const isMultiSelectable = selectionMode === "multiple";
  const slots = (0, import_react11.useMemo)(
    () => table({
      ...variantProps,
      isSelectable,
      isMultiSelectable
    }),
    [...Object.values(variantProps), isSelectable, isMultiSelectable]
  );
  const baseStyles = clsx(classNames == null ? void 0 : classNames.base, className);
  const values = (0, import_react11.useMemo)(
    () => {
      var _a;
      return {
        state,
        slots,
        isSelectable,
        collection,
        classNames,
        color: originalProps == null ? void 0 : originalProps.color,
        disableAnimation,
        checkboxesProps,
        isHeaderSticky: (_a = originalProps == null ? void 0 : originalProps.isHeaderSticky) != null ? _a : false,
        selectionMode,
        selectionBehavior,
        disabledBehavior,
        showSelectionCheckboxes,
        onRowAction,
        onCellAction
      };
    },
    [
      slots,
      state,
      collection,
      isSelectable,
      classNames,
      selectionMode,
      selectionBehavior,
      checkboxesProps,
      disabledBehavior,
      disableAnimation,
      showSelectionCheckboxes,
      originalProps == null ? void 0 : originalProps.color,
      originalProps == null ? void 0 : originalProps.isHeaderSticky,
      onRowAction,
      onCellAction
    ]
  );
  const getBaseProps = (0, import_react10.useCallback)(
    (props2) => ({
      ...props2,
      ref: domBaseRef,
      className: slots.base({ class: clsx(baseStyles, props2 == null ? void 0 : props2.className) })
    }),
    [baseStyles, slots]
  );
  const getWrapperProps = (0, import_react10.useCallback)(
    (props2) => ({
      ...props2,
      ref: domBaseRef,
      className: slots.wrapper({ class: clsx(classNames == null ? void 0 : classNames.wrapper, props2 == null ? void 0 : props2.className) })
    }),
    [classNames == null ? void 0 : classNames.wrapper, slots]
  );
  const getTableProps = (0, import_react10.useCallback)(
    (props2) => ({
      ...$3ef42575df84b30b$export$9d1611c77c2fe928(
        gridProps,
        filterDOMProps(otherProps, {
          enabled: shouldFilterDOMProps
        }),
        props2
      ),
      ref: domRef,
      className: slots.table({ class: clsx(classNames == null ? void 0 : classNames.table, props2 == null ? void 0 : props2.className) })
    }),
    [classNames == null ? void 0 : classNames.table, shouldFilterDOMProps, slots, gridProps, otherProps]
  );
  return {
    BaseComponent,
    Component,
    children,
    state,
    collection,
    values,
    topContent,
    bottomContent,
    removeWrapper,
    topContentPlacement,
    bottomContentPlacement,
    getBaseProps,
    getWrapperProps,
    getTableProps
  };
}

// node_modules/@nextui-org/table/dist/chunk-MWTZZPYB.mjs
var import_react12 = __toESM(require_react(), 1);
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
"use client";
var TableCell = forwardRef((props, ref) => {
  var _a, _b;
  const { as, className, node, rowKey, slots, state, classNames, ...otherProps } = props;
  const Component = as || "td";
  const shouldFilterDOMProps = typeof Component === "string";
  const domRef = useDOMRef(ref);
  const { gridCellProps } = $7713593715703b24$export$49571c903d73624c({ node }, state, domRef);
  const tdStyles = clsx(classNames == null ? void 0 : classNames.td, className, (_a = node.props) == null ? void 0 : _a.className);
  const { isFocusVisible, focusProps } = $f7dceffc5ad7768b$export$4e328f61c538687f();
  const isRowSelected = state.selectionManager.isSelected(rowKey);
  const cell = (0, import_react12.useMemo)(() => {
    const cellType = typeof node.rendered;
    return cellType !== "object" && cellType !== "function" ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: node.rendered }) : node.rendered;
  }, [node.rendered]);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    Component,
    {
      ref: domRef,
      "data-focus-visible": dataAttr(isFocusVisible),
      "data-selected": dataAttr(isRowSelected),
      ...$3ef42575df84b30b$export$9d1611c77c2fe928(
        gridCellProps,
        focusProps,
        filterDOMProps(node.props, {
          enabled: shouldFilterDOMProps
        }),
        otherProps
      ),
      className: (_b = slots.td) == null ? void 0 : _b.call(slots, { class: tdStyles }),
      children: cell
    }
  );
});
TableCell.displayName = "NextUI.TableCell";
var table_cell_default = TableCell;

// node_modules/@nextui-org/table/dist/chunk-ZVKU2CIZ.mjs
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
"use client";
var TableCheckboxCell = forwardRef((props, ref) => {
  var _a, _b;
  const {
    as,
    className,
    node,
    rowKey,
    slots,
    state,
    color,
    disableAnimation,
    checkboxesProps,
    selectionMode,
    classNames,
    ...otherProps
  } = props;
  const Component = as || "td";
  const shouldFilterDOMProps = typeof Component === "string";
  const domRef = useDOMRef(ref);
  const { gridCellProps } = $7713593715703b24$export$49571c903d73624c({ node }, state, domRef);
  const { isFocusVisible, focusProps } = $f7dceffc5ad7768b$export$4e328f61c538687f();
  const { checkboxProps } = $2a795c53a101c542$export$16ea7f650bd7c1bb({ key: (node == null ? void 0 : node.parentKey) || node.key }, state);
  const tdStyles = clsx(classNames == null ? void 0 : classNames.td, className, (_a = node.props) == null ? void 0 : _a.className);
  const isSingleSelectionMode = selectionMode === "single";
  const { onChange, ...otherCheckboxProps } = checkboxProps;
  const isRowSelected = state.selectionManager.isSelected(rowKey);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    Component,
    {
      ref: domRef,
      "data-focus-visible": dataAttr(isFocusVisible),
      "data-selected": dataAttr(isRowSelected),
      ...$3ef42575df84b30b$export$9d1611c77c2fe928(
        gridCellProps,
        focusProps,
        filterDOMProps(node.props, {
          enabled: shouldFilterDOMProps
        }),
        otherProps
      ),
      className: (_b = slots.td) == null ? void 0 : _b.call(slots, { class: tdStyles }),
      children: isSingleSelectionMode ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)($5c3e21d68f1c4674$export$439d29a4e110a164, { children: checkboxProps["aria-label"] }) : /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        checkbox_default,
        {
          color,
          disableAnimation,
          onValueChange: onChange,
          ...$3ef42575df84b30b$export$9d1611c77c2fe928(checkboxesProps, otherCheckboxProps)
        }
      )
    }
  );
});
TableCheckboxCell.displayName = "NextUI.TableCheckboxCell";
var table_checkbox_cell_default = TableCheckboxCell;

// node_modules/@nextui-org/table/dist/chunk-L22PK57S.mjs
var import_react13 = __toESM(require_react(), 1);
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
"use client";
var TableRow = forwardRef((props, ref) => {
  var _a, _b;
  const { as, className, children, node, slots, state, isSelectable, classNames, ...otherProps } = props;
  const Component = as || ((props == null ? void 0 : props.href) ? "a" : "tr");
  const shouldFilterDOMProps = typeof Component === "string";
  const domRef = useDOMRef(ref);
  const { rowProps } = $b2db214c022798eb$export$7f2f6ae19e707aa5({ node }, state, domRef);
  const trStyles = clsx(classNames == null ? void 0 : classNames.tr, className, (_a = node.props) == null ? void 0 : _a.className);
  const { isFocusVisible, focusProps } = $f7dceffc5ad7768b$export$4e328f61c538687f();
  const isDisabled = state.disabledKeys.has(node.key);
  const isSelected = state.selectionManager.isSelected(node.key);
  const { isHovered, hoverProps } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled });
  const { isFirst, isLast, isMiddle, isOdd } = (0, import_react13.useMemo)(() => {
    const isFirst2 = node.key === state.collection.getFirstKey();
    const isLast2 = node.key === state.collection.getLastKey();
    const isMiddle2 = !isFirst2 && !isLast2;
    const isOdd2 = (node == null ? void 0 : node.index) ? (node.index + 1) % 2 === 0 : false;
    return {
      isFirst: isFirst2,
      isLast: isLast2,
      isMiddle: isMiddle2,
      isOdd: isOdd2
    };
  }, [node, state.collection]);
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    Component,
    {
      ref: domRef,
      "data-disabled": dataAttr(isDisabled),
      "data-first": dataAttr(isFirst),
      "data-focus-visible": dataAttr(isFocusVisible),
      "data-hover": dataAttr(isHovered),
      "data-last": dataAttr(isLast),
      "data-middle": dataAttr(isMiddle),
      "data-odd": dataAttr(isOdd),
      "data-selected": dataAttr(isSelected),
      ...$3ef42575df84b30b$export$9d1611c77c2fe928(
        rowProps,
        focusProps,
        isSelectable ? hoverProps : {},
        filterDOMProps(node.props, {
          enabled: shouldFilterDOMProps
        }),
        otherProps
      ),
      className: (_b = slots.tr) == null ? void 0 : _b.call(slots, { class: trStyles }),
      children
    }
  );
});
TableRow.displayName = "NextUI.TableRow";
var table_row_default = TableRow;

// node_modules/@nextui-org/table/dist/chunk-COEJ4FUK.mjs
var import_react14 = __toESM(require_react(), 1);
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
"use client";
var TableBody = forwardRef((props, ref) => {
  var _a;
  const {
    as,
    className,
    slots,
    state,
    collection,
    isSelectable,
    color,
    disableAnimation,
    checkboxesProps,
    selectionMode,
    classNames,
    ...otherProps
  } = props;
  const Component = as || "tbody";
  const shouldFilterDOMProps = typeof Component === "string";
  const domRef = useDOMRef(ref);
  const { rowGroupProps } = $0047e6c294ea075f$export$6fb1613bd7b28198();
  const tbodyStyles = clsx(classNames == null ? void 0 : classNames.tbody, className);
  const bodyProps = collection == null ? void 0 : collection.body.props;
  const isLoading = (bodyProps == null ? void 0 : bodyProps.isLoading) || (bodyProps == null ? void 0 : bodyProps.loadingState) === "loading" || (bodyProps == null ? void 0 : bodyProps.loadingState) === "loadingMore";
  const renderRows = (0, import_react14.useMemo)(() => {
    return [...collection.body.childNodes].map((row) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      table_row_default,
      {
        classNames,
        isSelectable,
        node: row,
        slots,
        state,
        children: [...row.childNodes].map(
          (cell) => cell.props.isSelectionCell ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            table_checkbox_cell_default,
            {
              checkboxesProps,
              classNames,
              color,
              disableAnimation,
              node: cell,
              rowKey: row.key,
              selectionMode,
              slots,
              state
            },
            cell.key
          ) : /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            table_cell_default,
            {
              classNames,
              node: cell,
              rowKey: row.key,
              slots,
              state
            },
            cell.key
          )
        )
      },
      row.key
    ));
  }, [collection.body.childNodes, classNames, isSelectable, slots, state]);
  let emptyContent;
  let loadingContent;
  if (collection.size === 0 && bodyProps.emptyContent) {
    emptyContent = /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("tr", { role: "row", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      "td",
      {
        className: slots == null ? void 0 : slots.emptyWrapper({ class: classNames == null ? void 0 : classNames.emptyWrapper }),
        colSpan: collection.columnCount,
        role: "gridcell",
        children: bodyProps.emptyContent
      }
    ) });
  }
  if (isLoading && bodyProps.loadingContent) {
    loadingContent = /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("tr", { role: "row", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      "td",
      {
        className: slots == null ? void 0 : slots.loadingWrapper({ class: classNames == null ? void 0 : classNames.loadingWrapper }),
        colSpan: collection.columnCount,
        role: "gridcell",
        children: bodyProps.loadingContent
      }
    ) });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
    Component,
    {
      ref: domRef,
      ...$3ef42575df84b30b$export$9d1611c77c2fe928(
        rowGroupProps,
        filterDOMProps(bodyProps, {
          enabled: shouldFilterDOMProps
        }),
        otherProps
      ),
      className: (_a = slots.tbody) == null ? void 0 : _a.call(slots, { class: tbodyStyles }),
      "data-empty": dataAttr(collection.size === 0),
      "data-loading": dataAttr(isLoading),
      children: [
        renderRows,
        loadingContent,
        emptyContent
      ]
    }
  );
});
TableBody.displayName = "NextUI.TableBody";
var table_body_default = TableBody;

// node_modules/@nextui-org/table/dist/chunk-EYOO7AGH.mjs
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
"use client";
var TableColumnHeader = forwardRef((props, ref) => {
  var _a, _b, _c4, _d, _e;
  const { as, className, state, node, slots, classNames, ...otherProps } = props;
  const Component = as || "th";
  const shouldFilterDOMProps = typeof Component === "string";
  const domRef = useDOMRef(ref);
  const { columnHeaderProps } = $f329116d8ad0aba0$export$9514819a8c81e960({ node }, state, domRef);
  const thStyles = clsx(classNames == null ? void 0 : classNames.th, className, (_a = node.props) == null ? void 0 : _a.className);
  const { isFocusVisible, focusProps } = $f7dceffc5ad7768b$export$4e328f61c538687f();
  const { isHovered, hoverProps } = $6179b936705e76d3$export$ae780daf29e6d456({});
  const { hideHeader, ...columnProps } = node.props;
  const allowsSorting = columnProps.allowsSorting;
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
    Component,
    {
      ref: domRef,
      colSpan: node.colspan,
      "data-focus-visible": dataAttr(isFocusVisible),
      "data-hover": dataAttr(isHovered),
      "data-sortable": dataAttr(allowsSorting),
      ...$3ef42575df84b30b$export$9d1611c77c2fe928(
        columnHeaderProps,
        focusProps,
        filterDOMProps(columnProps, {
          enabled: shouldFilterDOMProps
        }),
        allowsSorting ? hoverProps : {},
        otherProps
      ),
      className: (_b = slots.th) == null ? void 0 : _b.call(slots, { class: thStyles }),
      children: [
        hideHeader ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)($5c3e21d68f1c4674$export$439d29a4e110a164, { children: node.rendered }) : node.rendered,
        allowsSorting && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          ChevronDownIcon,
          {
            "aria-hidden": "true",
            className: (_c4 = slots.sortIcon) == null ? void 0 : _c4.call(slots, { class: classNames == null ? void 0 : classNames.sortIcon }),
            "data-direction": (_d = state.sortDescriptor) == null ? void 0 : _d.direction,
            "data-visible": dataAttr(((_e = state.sortDescriptor) == null ? void 0 : _e.column) === node.key),
            strokeWidth: 3
          }
        )
      ]
    }
  );
});
TableColumnHeader.displayName = "NextUI.TableColumnHeader";
var table_column_header_default = TableColumnHeader;

// node_modules/@nextui-org/table/dist/chunk-N2ZOKY36.mjs
var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
"use client";
var TableHeaderRow = forwardRef((props, ref) => {
  var _a, _b;
  const { as, className, children, node, slots, classNames, state, ...otherProps } = props;
  const Component = as || "tr";
  const shouldFilterDOMProps = typeof Component === "string";
  const domRef = useDOMRef(ref);
  const { rowProps } = $f917ee10f4c32dab$export$1b95a7d2d517b841({ node }, state, domRef);
  const trStyles = clsx(classNames == null ? void 0 : classNames.tr, className, (_a = node.props) == null ? void 0 : _a.className);
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    Component,
    {
      ref: domRef,
      ...$3ef42575df84b30b$export$9d1611c77c2fe928(
        rowProps,
        filterDOMProps(node.props, {
          enabled: shouldFilterDOMProps
        }),
        otherProps
      ),
      className: (_b = slots.tr) == null ? void 0 : _b.call(slots, { class: trStyles }),
      children
    }
  );
});
TableHeaderRow.displayName = "NextUI.TableHeaderRow";
var table_header_row_default = TableHeaderRow;

// node_modules/@nextui-org/table/dist/chunk-GZVIASP2.mjs
var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);
"use client";
var TableRowGroup = forwardRef((props, ref) => {
  var _a;
  const { as, className, children, slots, classNames, ...otherProps } = props;
  const Component = as || "thead";
  const domRef = useDOMRef(ref);
  const { rowGroupProps } = $0047e6c294ea075f$export$6fb1613bd7b28198();
  const theadStyles = clsx(classNames == null ? void 0 : classNames.thead, className);
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    Component,
    {
      ref: domRef,
      className: (_a = slots.thead) == null ? void 0 : _a.call(slots, { class: theadStyles }),
      ...$3ef42575df84b30b$export$9d1611c77c2fe928(rowGroupProps, otherProps),
      children
    }
  );
});
TableRowGroup.displayName = "NextUI.TableRowGroup";
var table_row_group_default = TableRowGroup;

// node_modules/@nextui-org/table/dist/chunk-MJZDDVZM.mjs
var import_react16 = __toESM(require_react(), 1);

// node_modules/@nextui-org/spacer/dist/chunk-CH7FQ62Q.mjs
var spacing = {
  px: "1px",
  0: "0px",
  0.5: "0.125rem",
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  2.5: "0.625rem",
  3: "0.75rem",
  3.5: "0.875rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  11: "2.75rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  44: "11rem",
  48: "12rem",
  52: "13rem",
  56: "14rem",
  60: "15rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  96: "24rem"
};

// node_modules/@nextui-org/spacer/dist/chunk-7GMV2WRO.mjs
var import_react15 = __toESM(require_react(), 1);
var getMargin = (value) => {
  var _a;
  return (_a = spacing[value]) != null ? _a : value;
};
function useSpacer(originalProps) {
  const [props, variantProps] = mapPropsVariants(originalProps, spacer.variantKeys);
  const { as, className, x = 1, y = 1, ...otherProps } = props;
  const Component = as || "span";
  const styles = (0, import_react15.useMemo)(
    () => spacer({
      ...variantProps,
      className
    }),
    [...Object.values(variantProps), className]
  );
  const marginLeft = getMargin(x);
  const marginTop = getMargin(y);
  const getSpacerProps = (props2 = {}) => ({
    ...props2,
    ...otherProps,
    "aria-hidden": dataAttr(true),
    className: clsx(styles, props2.className),
    style: {
      ...props2.style,
      ...otherProps.style,
      marginLeft,
      marginTop
    }
  });
  return { Component, getSpacerProps };
}

// node_modules/@nextui-org/spacer/dist/chunk-KRADFROI.mjs
var import_jsx_runtime11 = __toESM(require_jsx_runtime(), 1);
var Spacer = forwardRef((props, ref) => {
  const { Component, getSpacerProps } = useSpacer({ ...props });
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Component, { ref, ...getSpacerProps() });
});
Spacer.displayName = "NextUI.Spacer";
var spacer_default = Spacer;

// node_modules/@nextui-org/table/dist/chunk-MJZDDVZM.mjs
var import_jsx_runtime12 = __toESM(require_jsx_runtime(), 1);
"use client";
var Table = forwardRef((props, ref) => {
  const {
    BaseComponent,
    Component,
    collection,
    values,
    topContent,
    topContentPlacement,
    bottomContentPlacement,
    bottomContent,
    removeWrapper,
    getBaseProps,
    getWrapperProps,
    getTableProps
  } = useTable({
    ...props,
    ref
  });
  const Wrapper = (0, import_react16.useCallback)(
    ({ children }) => {
      if (removeWrapper) {
        return children;
      }
      return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(BaseComponent, { ...getWrapperProps(), children });
    },
    [removeWrapper, getWrapperProps]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { ...getBaseProps(), children: [
    topContentPlacement === "outside" && topContent,
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Wrapper, { children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_jsx_runtime12.Fragment, { children: [
      topContentPlacement === "inside" && topContent,
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(Component, { ...getTableProps(), children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(table_row_group_default, { classNames: values.classNames, slots: values.slots, children: [
          collection.headerRows.map((headerRow) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
            table_header_row_default,
            {
              classNames: values.classNames,
              node: headerRow,
              slots: values.slots,
              state: values.state,
              children: [...headerRow.childNodes].map(
                (column) => {
                  var _a;
                  return ((_a = column == null ? void 0 : column.props) == null ? void 0 : _a.isSelectionCell) ? /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                    table_select_all_checkbox_default,
                    {
                      checkboxesProps: values.checkboxesProps,
                      classNames: values.classNames,
                      color: values.color,
                      disableAnimation: values.disableAnimation,
                      node: column,
                      selectionMode: values.selectionMode,
                      slots: values.slots,
                      state: values.state
                    },
                    column == null ? void 0 : column.key
                  ) : /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                    table_column_header_default,
                    {
                      classNames: values.classNames,
                      node: column,
                      slots: values.slots,
                      state: values.state
                    },
                    column == null ? void 0 : column.key
                  );
                }
              )
            },
            headerRow == null ? void 0 : headerRow.key
          )),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(spacer_default, { as: "tr", tabIndex: -1, y: 1 })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
          table_body_default,
          {
            checkboxesProps: values.checkboxesProps,
            classNames: values.classNames,
            collection: values.collection,
            color: values.color,
            disableAnimation: values.disableAnimation,
            isSelectable: values.isSelectable,
            selectionMode: values.selectionMode,
            slots: values.slots,
            state: values.state
          }
        )
      ] }),
      bottomContentPlacement === "inside" && bottomContent
    ] }) }),
    bottomContentPlacement === "outside" && bottomContent
  ] });
});
Table.displayName = "NextUI.Table";
var table_default = Table;

// node_modules/@nextui-org/table/dist/chunk-CIL4Y7FA.mjs
"use client";
var TableRow2 = $70d70eb16ea48428$export$b59bdbef9ce70de2;
var table_row_default2 = TableRow2;

// node_modules/@nextui-org/table/dist/chunk-FKPXBCGS.mjs
"use client";
var TableBody2 = $4ae5314bf50db1a3$export$76ccd210b9029917;
var table_body_default2 = TableBody2;

// node_modules/@nextui-org/table/dist/chunk-F3UDT23P.mjs
"use client";
var TableCell2 = $941d1d9a6a28982a$export$f6f0c3fe4ec306ea;
var table_cell_default2 = TableCell2;

// node_modules/@nextui-org/table/dist/chunk-TSPNSPCL.mjs
"use client";
var TableColumn = $1cd244557c2f97d5$export$816b5d811295e6bc;
var table_column_default = TableColumn;

// node_modules/@nextui-org/table/dist/chunk-YRZGWF2W.mjs
"use client";
var TableHeader = $312ae3b56a94a86e$export$f850895b287ef28e;
var table_header_default = TableHeader;

// node_modules/@nextui-org/table/dist/index.mjs
"use client";

// app/components/Skills.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\Skills.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\Skills.tsx"
  );
  import.meta.hot.lastModified = "1702247997791.5454";
}
var Skills = ({
  skills,
  skillsFilter,
  setSkillsFilter
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-left text-2xl my-3", children: "Skills" }, void 0, false, {
      fileName: "app/components/Skills.tsx",
      lineNumber: 29,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-2 bg-black rounded-2xl", children: skills.map((skill) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(button_default, { onClick: () => setSkillsFilter(skillsFilter.includes(skill) ? skillsFilter.filter((s) => s !== skill) : [...skillsFilter, skill]), color: skillsFilter.includes(skill) ? "success" : "default", children: skill }, skill, false, {
        fileName: "app/components/Skills.tsx",
        lineNumber: 32,
        columnNumber: 16
      }, this);
    }) }, void 0, false, {
      fileName: "app/components/Skills.tsx",
      lineNumber: 30,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Skills.tsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
};
_c = Skills;
var _c;
$RefreshReg$(_c, "Skills");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/jobs.tsx
var import_node = __toESM(require_node(), 1);
var import_prisma = __toESM(require_prisma(), 1);
var import_react21 = __toESM(require_react(), 1);

// app/components/TableCellContent.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\TableCellContent.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\TableCellContent.tsx"
  );
  import.meta.hot.lastModified = "1703283588930.8533";
}
var TableCellContent = ({
  job,
  columnKey
}) => {
  const cellValue = job[columnKey] || "Gen";
  if (Array.isArray(cellValue)) {
    return cellValue.join(", ");
  }
  switch (columnKey) {
    case "description":
      return excerpt(cellValue);
    case "generateResume":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form, { action: "/jobs", method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "hidden", name: "jobDescription", value: job.description }, void 0, false, {
          fileName: "app/components/TableCellContent.tsx",
          lineNumber: 45,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "submit", value: "Create Resume" }, void 0, false, {
          fileName: "app/components/TableCellContent.tsx",
          lineNumber: 46,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/TableCellContent.tsx",
        lineNumber: 44,
        columnNumber: 14
      }, this);
    default:
      return cellValue;
  }
};
_c2 = TableCellContent;
var _c2;
$RefreshReg$(_c2, "TableCellContent");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/jobs.tsx
var import_resume_docx = __toESM(require_resume_docx(), 1);
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\jobs.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\jobs.tsx"
  );
  import.meta.hot.lastModified = "1703357515513.5435";
}
function Jobs() {
  _s();
  const {
    jobs,
    skills
  } = useLoaderData();
  const [skillsFilter, setSkillsFilter] = import_react21.default.useState(["all"]);
  const filteredItems = import_react21.default.useMemo(() => {
    let filteredJobs = [...jobs];
    if (skillsFilter.length === 1 && skillsFilter.includes("all")) {
      return filteredJobs;
    } else {
      filteredJobs = filteredJobs.filter((job) => {
        return job.keywords.some((keyword) => {
          return skillsFilter.includes(keyword);
        });
      });
    }
    return filteredJobs;
  }, [jobs, skillsFilter]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "max-w-[1200px] mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "Jobs" }, void 0, false, {
      fileName: "app/routes/jobs.tsx",
      lineNumber: 65,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Form, { action: "/jobs", method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "submit", value: "Create Resume" }, void 0, false, {
      fileName: "app/routes/jobs.tsx",
      lineNumber: 67,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/jobs.tsx",
      lineNumber: 66,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Skills, { skills, skillsFilter, setSkillsFilter }, void 0, false, {
      fileName: "app/routes/jobs.tsx",
      lineNumber: 70,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/jobs.tsx",
      lineNumber: 69,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(table_default, { topContent: `${filteredItems.length} jobs`, className: "mt-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(table_header_default, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(table_column_default, { className: "w-[100px]", children: "Title" }, "title", false, {
          fileName: "app/routes/jobs.tsx",
          lineNumber: 75,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(table_column_default, { children: "Description" }, "description", false, {
          fileName: "app/routes/jobs.tsx",
          lineNumber: 78,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(table_column_default, { children: "Salary" }, "salary", false, {
          fileName: "app/routes/jobs.tsx",
          lineNumber: 79,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(table_column_default, { children: "Skills" }, "keywords", false, {
          fileName: "app/routes/jobs.tsx",
          lineNumber: 80,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(table_column_default, { children: "Company" }, "company", false, {
          fileName: "app/routes/jobs.tsx",
          lineNumber: 81,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(table_column_default, { children: "Location" }, "location", false, {
          fileName: "app/routes/jobs.tsx",
          lineNumber: 82,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(table_column_default, { children: "Source" }, "source", false, {
          fileName: "app/routes/jobs.tsx",
          lineNumber: 83,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(table_column_default, { children: "Gen" }, "generateResume", false, {
          fileName: "app/routes/jobs.tsx",
          lineNumber: 84,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/jobs.tsx",
        lineNumber: 74,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(table_body_default2, { items: filteredItems, children: (item) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(table_row_default2, { children: (columnKey) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(table_cell_default2, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableCellContent, { job: item, columnKey }, void 0, false, {
          fileName: "app/routes/jobs.tsx",
          lineNumber: 90,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/routes/jobs.tsx",
          lineNumber: 89,
          columnNumber: 47
        }, this) }, void 0, false, {
          fileName: "app/routes/jobs.tsx",
          lineNumber: 88,
          columnNumber: 18
        }, this);
      } }, void 0, false, {
        fileName: "app/routes/jobs.tsx",
        lineNumber: 86,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/jobs.tsx",
      lineNumber: 73,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/jobs.tsx",
    lineNumber: 64,
    columnNumber: 10
  }, this);
}
_s(Jobs, "fYL6F0ho8GWvnLs2S/gkHILweFc=", false, function() {
  return [useLoaderData];
});
_c3 = Jobs;
var _c3;
$RefreshReg$(_c3, "Jobs");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Jobs as default
};
//# sourceMappingURL=/build/routes/jobs-YHI33MOX.js.map
