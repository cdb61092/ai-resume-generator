import {
  $2baaea4c71418dea$export$294aa081a6c6f55d,
  $e5be200c675c3b3a$export$fc1a364ae1f3ff10,
  $e93e671b31057976$export$b8473d3665f3a75a,
  CloseFilledIcon
} from "/build/_shared/chunk-P2DSO4RZ.js";
import {
  $3ef42575df84b30b$export$9d1611c77c2fe928,
  $431fbd86ca7dc216$export$f21a1ffae260145a,
  $458b0a5536c1a7cf$export$40bfa8c7b0832715,
  $6179b936705e76d3$export$ae780daf29e6d456,
  $65484d02dcb7eb3e$export$457c3d6518dd4c6f,
  $99facab73266f662$export$5add1d006293d136,
  $9ab94262bd0047c7$export$420e68273165f4ec,
  $e6afbd83fe6ebbd2$export$4c014de7c8940b4c,
  $f6c31cce2adf654f$export$45712eceda6fad21,
  $f7dceffc5ad7768b$export$4e328f61c538687f,
  $ff5963eb1fccf552$export$e08e3b67e392101e,
  clsx,
  dataAttr,
  filterDOMProps,
  forwardRef,
  input,
  mapPropsVariants,
  safeAriaLabel,
  useDOMRef
} from "/build/_shared/chunk-XEG4DGED.js";
import {
  require_jsx_runtime
} from "/build/_shared/chunk-NMZL6IDN.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __export,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/@nextui-org/input/dist/chunk-LY2CD73K.mjs
var import_react2 = __toESM(require_react(), 1);

// node_modules/@react-aria/textfield/dist/import.mjs
var import_react = __toESM(require_react(), 1);
function $2d73ec29415bd339$export$712718f7aec83d5(props, ref) {
  let { inputElementType = "input", isDisabled = false, isRequired = false, isReadOnly = false, type = "text", validationBehavior = "aria" } = props;
  let [value, setValue2] = (0, $458b0a5536c1a7cf$export$40bfa8c7b0832715)(props.value, props.defaultValue || "", props.onChange);
  let { focusableProps } = (0, $e6afbd83fe6ebbd2$export$4c014de7c8940b4c)(props, ref);
  let validationState = (0, $e5be200c675c3b3a$export$fc1a364ae1f3ff10)({
    ...props,
    value
  });
  let { isInvalid, validationErrors, validationDetails } = validationState.displayValidation;
  let { labelProps, fieldProps, descriptionProps, errorMessageProps } = (0, $2baaea4c71418dea$export$294aa081a6c6f55d)({
    ...props,
    isInvalid,
    errorMessage: props.errorMessage || validationErrors
  });
  let domProps = (0, $65484d02dcb7eb3e$export$457c3d6518dd4c6f)(props, {
    labelable: true
  });
  const inputOnlyProps = {
    type,
    pattern: props.pattern
  };
  (0, $99facab73266f662$export$5add1d006293d136)(ref, value, setValue2);
  (0, $e93e671b31057976$export$b8473d3665f3a75a)(props, validationState, ref);
  (0, import_react.useEffect)(() => {
    if (ref.current instanceof (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(ref.current).HTMLTextAreaElement) {
      let input3 = ref.current;
      Object.defineProperty(input3, "defaultValue", {
        get: () => input3.value,
        set: () => {
        },
        configurable: true
      });
    }
  }, [
    ref
  ]);
  return {
    labelProps,
    inputProps: (0, $3ef42575df84b30b$export$9d1611c77c2fe928)(domProps, inputElementType === "input" && inputOnlyProps, {
      disabled: isDisabled,
      readOnly: isReadOnly,
      required: isRequired && validationBehavior === "native",
      "aria-required": isRequired && validationBehavior === "aria" || void 0,
      "aria-invalid": isInvalid || void 0,
      "aria-errormessage": props["aria-errormessage"],
      "aria-activedescendant": props["aria-activedescendant"],
      "aria-autocomplete": props["aria-autocomplete"],
      "aria-haspopup": props["aria-haspopup"],
      value,
      onChange: (e) => setValue2(e.target.value),
      autoComplete: props.autoComplete,
      maxLength: props.maxLength,
      minLength: props.minLength,
      name: props.name,
      placeholder: props.placeholder,
      inputMode: props.inputMode,
      // Clipboard events
      onCopy: props.onCopy,
      onCut: props.onCut,
      onPaste: props.onPaste,
      // Composition events
      onCompositionEnd: props.onCompositionEnd,
      onCompositionStart: props.onCompositionStart,
      onCompositionUpdate: props.onCompositionUpdate,
      // Selection events
      onSelect: props.onSelect,
      // Input events
      onBeforeInput: props.onBeforeInput,
      onInput: props.onInput,
      ...focusableProps,
      ...fieldProps
    }),
    descriptionProps,
    errorMessageProps,
    isInvalid,
    validationErrors,
    validationDetails
  };
}

// node_modules/@nextui-org/input/dist/chunk-LY2CD73K.mjs
"use client";
function useInput(originalProps) {
  const [props, variantProps] = mapPropsVariants(originalProps, input.variantKeys);
  const {
    ref,
    as,
    label,
    baseRef,
    wrapperRef,
    description,
    errorMessage,
    className,
    classNames,
    autoFocus,
    startContent,
    endContent,
    onClear,
    onChange,
    validationState,
    innerWrapperRef: innerWrapperRefProp,
    onValueChange = () => {
    },
    ...otherProps
  } = props;
  const handleValueChange = (0, import_react2.useCallback)(
    (value) => {
      onValueChange(value != null ? value : "");
    },
    [onValueChange]
  );
  const [inputValue, setInputValue] = $458b0a5536c1a7cf$export$40bfa8c7b0832715(
    props.value,
    props.defaultValue,
    handleValueChange
  );
  const [isFocusWithin, setFocusWithin] = (0, import_react2.useState)(false);
  const Component = as || "div";
  const isFilled = !!inputValue;
  const isFilledWithin = isFilled || isFocusWithin;
  const baseStyles = clsx(classNames == null ? void 0 : classNames.base, className, isFilled ? "is-filled" : "");
  const isMultiline = originalProps.isMultiline;
  const domRef = useDOMRef(ref);
  const baseDomRef = useDOMRef(baseRef);
  const inputWrapperRef = useDOMRef(wrapperRef);
  const innerWrapperRef = useDOMRef(innerWrapperRefProp);
  const handleClear = (0, import_react2.useCallback)(() => {
    setInputValue("");
    if (domRef.current) {
      domRef.current.value = "";
      domRef.current.focus();
    }
    onClear == null ? void 0 : onClear();
  }, [domRef, setInputValue, onClear]);
  const { labelProps, inputProps, descriptionProps, errorMessageProps } = $2d73ec29415bd339$export$712718f7aec83d5(
    {
      ...originalProps,
      "aria-label": safeAriaLabel(
        originalProps == null ? void 0 : originalProps["aria-label"],
        originalProps == null ? void 0 : originalProps.label,
        originalProps == null ? void 0 : originalProps.placeholder
      ),
      inputElementType: isMultiline ? "textarea" : "input",
      onChange: setInputValue
    },
    domRef
  );
  const { isFocusVisible, isFocused, focusProps } = $f7dceffc5ad7768b$export$4e328f61c538687f({
    autoFocus,
    isTextInput: true
  });
  const { isHovered, hoverProps } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: !!(originalProps == null ? void 0 : originalProps.isDisabled) });
  const { focusProps: clearFocusProps, isFocusVisible: isClearButtonFocusVisible } = $f7dceffc5ad7768b$export$4e328f61c538687f();
  const { focusWithinProps } = $9ab94262bd0047c7$export$420e68273165f4ec({
    onFocusWithinChange: setFocusWithin
  });
  const { pressProps: clearPressProps } = $f6c31cce2adf654f$export$45712eceda6fad21({
    isDisabled: !!(originalProps == null ? void 0 : originalProps.isDisabled),
    onPress: handleClear
  });
  const isInvalid = validationState === "invalid" || originalProps.isInvalid;
  const labelPlacement = (0, import_react2.useMemo)(() => {
    var _a;
    if ((!originalProps.labelPlacement || originalProps.labelPlacement === "inside") && !label) {
      return "outside";
    }
    return (_a = originalProps.labelPlacement) != null ? _a : "inside";
  }, [originalProps.labelPlacement, label]);
  const isClearable = !!onClear || originalProps.isClearable;
  const hasElements = !!label || !!description || !!errorMessage;
  const hasPlaceholder = !!props.placeholder;
  const hasLabel = !!label;
  const hasHelper = !!description || !!errorMessage;
  const shouldLabelBeOutside = labelPlacement === "outside" || labelPlacement === "outside-left";
  const shouldLabelBeInside = labelPlacement === "inside";
  const isPlaceholderShown = domRef.current ? (!domRef.current.value || domRef.current.value === "" || !inputValue || inputValue === "") && hasPlaceholder : false;
  const isOutsideLeft = labelPlacement === "outside-left";
  const hasStartContent = !!startContent;
  const isLabelOutside = shouldLabelBeOutside ? labelPlacement === "outside-left" || hasPlaceholder || labelPlacement === "outside" && hasStartContent : false;
  const isLabelOutsideAsPlaceholder = labelPlacement === "outside" && !hasPlaceholder && !hasStartContent;
  const slots = (0, import_react2.useMemo)(
    () => input({
      ...variantProps,
      isInvalid,
      isClearable
    }),
    [...Object.values(variantProps), isInvalid, isClearable, hasStartContent]
  );
  const getBaseProps = (0, import_react2.useCallback)(
    (props2 = {}) => {
      return {
        ref: baseDomRef,
        className: slots.base({ class: baseStyles }),
        "data-slot": "base",
        "data-filled": dataAttr(
          isFilled || hasPlaceholder || hasStartContent || isPlaceholderShown
        ),
        "data-filled-within": dataAttr(
          isFilledWithin || hasPlaceholder || hasStartContent || isPlaceholderShown
        ),
        "data-focus-within": dataAttr(isFocusWithin),
        "data-focus-visible": dataAttr(isFocusVisible),
        "data-readonly": dataAttr(originalProps.isReadOnly),
        "data-focus": dataAttr(isFocused),
        "data-hover": dataAttr(isHovered),
        "data-required": dataAttr(originalProps.isRequired),
        "data-invalid": dataAttr(isInvalid),
        "data-disabled": dataAttr(originalProps.isDisabled),
        "data-has-elements": dataAttr(hasElements),
        "data-has-helper": dataAttr(hasHelper),
        "data-has-label": dataAttr(hasLabel),
        "data-has-value": dataAttr(!isPlaceholderShown),
        ...focusWithinProps,
        ...props2
      };
    },
    [
      slots,
      baseStyles,
      isFilled,
      isFocused,
      isHovered,
      isInvalid,
      hasHelper,
      hasLabel,
      hasElements,
      isPlaceholderShown,
      hasStartContent,
      isFocusWithin,
      isFocusVisible,
      isFilledWithin,
      hasPlaceholder,
      focusWithinProps,
      originalProps.isReadOnly,
      originalProps.isRequired,
      originalProps.isDisabled
    ]
  );
  const getLabelProps = (0, import_react2.useCallback)(
    (props2 = {}) => {
      return {
        "data-slot": "label",
        className: slots.label({ class: classNames == null ? void 0 : classNames.label }),
        ...labelProps,
        ...props2
      };
    },
    [slots, labelProps, classNames == null ? void 0 : classNames.label]
  );
  const getInputProps = (0, import_react2.useCallback)(
    (props2 = {}) => {
      return {
        ref: domRef,
        "data-slot": "input",
        "data-filled": dataAttr(isFilled),
        "data-filled-within": dataAttr(isFilledWithin),
        "data-has-start-content": dataAttr(hasStartContent),
        "data-has-end-content": dataAttr(!!endContent),
        className: slots.input({ class: clsx(classNames == null ? void 0 : classNames.input, !!inputValue ? "is-filled" : "") }),
        ...$3ef42575df84b30b$export$9d1611c77c2fe928(
          focusProps,
          inputProps,
          filterDOMProps(otherProps, {
            enabled: true,
            labelable: true,
            omitEventNames: new Set(Object.keys(inputProps))
          }),
          props2
        ),
        required: originalProps.isRequired,
        "aria-readonly": dataAttr(originalProps.isReadOnly),
        "aria-required": dataAttr(originalProps.isRequired),
        onChange: $ff5963eb1fccf552$export$e08e3b67e392101e(inputProps.onChange, onChange)
      };
    },
    [
      slots,
      inputValue,
      focusProps,
      inputProps,
      otherProps,
      isFilled,
      isFilledWithin,
      hasStartContent,
      endContent,
      classNames == null ? void 0 : classNames.input,
      originalProps.isReadOnly,
      originalProps.isRequired,
      onChange
    ]
  );
  const getInputWrapperProps = (0, import_react2.useCallback)(
    (props2 = {}) => {
      return {
        ref: inputWrapperRef,
        "data-slot": "input-wrapper",
        "data-hover": dataAttr(isHovered),
        "data-focus-visible": dataAttr(isFocusVisible),
        "data-focus": dataAttr(isFocused),
        className: slots.inputWrapper({
          class: clsx(classNames == null ? void 0 : classNames.inputWrapper, !!inputValue ? "is-filled" : "")
        }),
        ...$3ef42575df84b30b$export$9d1611c77c2fe928(props2, hoverProps),
        onClick: (e) => {
          if (domRef.current && e.currentTarget === e.target) {
            domRef.current.focus();
          }
        },
        style: {
          cursor: "text",
          ...props2.style
        }
      };
    },
    [slots, isHovered, isFocusVisible, isFocused, inputValue, classNames == null ? void 0 : classNames.inputWrapper]
  );
  const getInnerWrapperProps = (0, import_react2.useCallback)(
    (props2 = {}) => {
      return {
        ...props2,
        ref: innerWrapperRef,
        "data-slot": "inner-wrapper",
        onClick: (e) => {
          if (domRef.current && e.currentTarget === e.target) {
            domRef.current.focus();
          }
        },
        className: slots.innerWrapper({
          class: clsx(classNames == null ? void 0 : classNames.innerWrapper, props2 == null ? void 0 : props2.className)
        })
      };
    },
    [slots, classNames == null ? void 0 : classNames.innerWrapper]
  );
  const getMainWrapperProps = (0, import_react2.useCallback)(
    (props2 = {}) => {
      return {
        ...props2,
        "data-slot": "main-wrapper",
        className: slots.mainWrapper({
          class: clsx(classNames == null ? void 0 : classNames.mainWrapper, props2 == null ? void 0 : props2.className)
        })
      };
    },
    [slots, classNames == null ? void 0 : classNames.mainWrapper]
  );
  const getHelperWrapperProps = (0, import_react2.useCallback)(
    (props2 = {}) => {
      return {
        ...props2,
        "data-slot": "helper-wrapper",
        className: slots.helperWrapper({
          class: clsx(classNames == null ? void 0 : classNames.helperWrapper, props2 == null ? void 0 : props2.className)
        })
      };
    },
    [slots, classNames == null ? void 0 : classNames.helperWrapper]
  );
  const getDescriptionProps = (0, import_react2.useCallback)(
    (props2 = {}) => {
      return {
        ...props2,
        ...descriptionProps,
        "data-slot": "description",
        className: slots.description({ class: clsx(classNames == null ? void 0 : classNames.description, props2 == null ? void 0 : props2.className) })
      };
    },
    [slots, classNames == null ? void 0 : classNames.description]
  );
  const getErrorMessageProps = (0, import_react2.useCallback)(
    (props2 = {}) => {
      return {
        ...props2,
        ...errorMessageProps,
        "data-slot": "error-message",
        className: slots.errorMessage({ class: clsx(classNames == null ? void 0 : classNames.errorMessage, props2 == null ? void 0 : props2.className) })
      };
    },
    [slots, errorMessageProps, classNames == null ? void 0 : classNames.errorMessage]
  );
  const getClearButtonProps = (0, import_react2.useCallback)(
    (props2 = {}) => {
      return {
        ...props2,
        role: "button",
        tabIndex: 0,
        "data-slot": "clear-button",
        "data-focus-visible": dataAttr(isClearButtonFocusVisible),
        className: slots.clearButton({ class: clsx(classNames == null ? void 0 : classNames.clearButton, props2 == null ? void 0 : props2.className) }),
        ...$3ef42575df84b30b$export$9d1611c77c2fe928(clearPressProps, clearFocusProps)
      };
    },
    [slots, isClearButtonFocusVisible, clearPressProps, clearFocusProps, classNames == null ? void 0 : classNames.clearButton]
  );
  return {
    Component,
    classNames,
    domRef,
    label,
    description,
    startContent,
    endContent,
    labelPlacement,
    isClearable,
    isInvalid,
    hasHelper,
    hasStartContent,
    isLabelOutside,
    isOutsideLeft,
    isLabelOutsideAsPlaceholder,
    shouldLabelBeOutside,
    shouldLabelBeInside,
    hasPlaceholder,
    errorMessage,
    getBaseProps,
    getLabelProps,
    getInputProps,
    getMainWrapperProps,
    getInputWrapperProps,
    getInnerWrapperProps,
    getHelperWrapperProps,
    getDescriptionProps,
    getErrorMessageProps,
    getClearButtonProps
  };
}

// node_modules/@nextui-org/input/dist/chunk-TC4QW7OA.mjs
var import_react3 = __toESM(require_react(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
"use client";
var Input = forwardRef((props, ref) => {
  const {
    Component,
    label,
    description,
    isClearable,
    startContent,
    endContent,
    labelPlacement,
    hasHelper,
    isOutsideLeft,
    shouldLabelBeOutside,
    errorMessage,
    getBaseProps,
    getLabelProps,
    getInputProps,
    getInnerWrapperProps,
    getInputWrapperProps,
    getMainWrapperProps,
    getHelperWrapperProps,
    getDescriptionProps,
    getErrorMessageProps,
    getClearButtonProps
  } = useInput({ ...props, ref });
  const labelContent = label ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", { ...getLabelProps(), children: label }) : null;
  const end = (0, import_react3.useMemo)(() => {
    if (isClearable) {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { ...getClearButtonProps(), children: endContent || /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloseFilledIcon, {}) });
    }
    return endContent;
  }, [isClearable, getClearButtonProps]);
  const helperWrapper = (0, import_react3.useMemo)(() => {
    if (!hasHelper)
      return null;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ...getHelperWrapperProps(), children: errorMessage ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ...getErrorMessageProps(), children: errorMessage }) : description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ...getDescriptionProps(), children: description }) : null });
  }, [
    hasHelper,
    errorMessage,
    description,
    getHelperWrapperProps,
    getErrorMessageProps,
    getDescriptionProps
  ]);
  const innerWrapper = (0, import_react3.useMemo)(() => {
    if (startContent || end) {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { ...getInnerWrapperProps(), children: [
        startContent,
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { ...getInputProps() }),
        end
      ] });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ...getInnerWrapperProps(), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { ...getInputProps() }) });
  }, [startContent, end, getInputProps, getInnerWrapperProps]);
  const mainWrapper = (0, import_react3.useMemo)(() => {
    if (shouldLabelBeOutside) {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { ...getMainWrapperProps(), children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { ...getInputWrapperProps(), children: [
          !isOutsideLeft ? labelContent : null,
          innerWrapper
        ] }),
        helperWrapper
      ] });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { ...getInputWrapperProps(), children: [
        labelContent,
        innerWrapper
      ] }),
      helperWrapper
    ] });
  }, [
    labelPlacement,
    helperWrapper,
    shouldLabelBeOutside,
    labelContent,
    innerWrapper,
    errorMessage,
    description,
    getMainWrapperProps,
    getInputWrapperProps,
    getErrorMessageProps,
    getDescriptionProps
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Component, { ...getBaseProps(), children: [
    isOutsideLeft ? labelContent : null,
    mainWrapper
  ] });
});
Input.displayName = "NextUI.Input";
var input_default = Input;

// node_modules/@nextui-org/input/dist/chunk-K3TANQWH.mjs
var import_react6 = __toESM(require_react(), 1);

// node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

// node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}

// node_modules/react-textarea-autosize/dist/react-textarea-autosize.browser.esm.js
var React2 = __toESM(require_react());

// node_modules/use-latest/dist/use-latest.esm.js
var React = __toESM(require_react());

// node_modules/use-isomorphic-layout-effect/dist/use-isomorphic-layout-effect.browser.esm.js
var import_react4 = __toESM(require_react());
var index = import_react4.useLayoutEffect;
var use_isomorphic_layout_effect_browser_esm_default = index;

// node_modules/use-latest/dist/use-latest.esm.js
var useLatest = function useLatest2(value) {
  var ref = React.useRef(value);
  use_isomorphic_layout_effect_browser_esm_default(function() {
    ref.current = value;
  });
  return ref;
};

// node_modules/use-composed-ref/dist/use-composed-ref.esm.js
var import_react5 = __toESM(require_react());
var updateRef = function updateRef2(ref, value) {
  if (typeof ref === "function") {
    ref(value);
    return;
  }
  ref.current = value;
};
var useComposedRef = function useComposedRef2(libRef, userRef) {
  var prevUserRef = (0, import_react5.useRef)();
  return (0, import_react5.useCallback)(function(instance) {
    libRef.current = instance;
    if (prevUserRef.current) {
      updateRef(prevUserRef.current, null);
    }
    prevUserRef.current = userRef;
    if (!userRef) {
      return;
    }
    updateRef(userRef, instance);
  }, [userRef]);
};
var use_composed_ref_esm_default = useComposedRef;

// node_modules/react-textarea-autosize/dist/react-textarea-autosize.browser.esm.js
var HIDDEN_TEXTAREA_STYLE = {
  "min-height": "0",
  "max-height": "none",
  height: "0",
  visibility: "hidden",
  overflow: "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0"
};
var forceHiddenStyles = function forceHiddenStyles2(node) {
  Object.keys(HIDDEN_TEXTAREA_STYLE).forEach(function(key) {
    node.style.setProperty(key, HIDDEN_TEXTAREA_STYLE[key], "important");
  });
};
var forceHiddenStyles$1 = forceHiddenStyles;
var hiddenTextarea = null;
var getHeight = function getHeight2(node, sizingData) {
  var height = node.scrollHeight;
  if (sizingData.sizingStyle.boxSizing === "border-box") {
    return height + sizingData.borderSize;
  }
  return height - sizingData.paddingSize;
};
function calculateNodeHeight(sizingData, value, minRows, maxRows) {
  if (minRows === void 0) {
    minRows = 1;
  }
  if (maxRows === void 0) {
    maxRows = Infinity;
  }
  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement("textarea");
    hiddenTextarea.setAttribute("tabindex", "-1");
    hiddenTextarea.setAttribute("aria-hidden", "true");
    forceHiddenStyles$1(hiddenTextarea);
  }
  if (hiddenTextarea.parentNode === null) {
    document.body.appendChild(hiddenTextarea);
  }
  var paddingSize = sizingData.paddingSize, borderSize = sizingData.borderSize, sizingStyle = sizingData.sizingStyle;
  var boxSizing = sizingStyle.boxSizing;
  Object.keys(sizingStyle).forEach(function(_key) {
    var key = _key;
    hiddenTextarea.style[key] = sizingStyle[key];
  });
  forceHiddenStyles$1(hiddenTextarea);
  hiddenTextarea.value = value;
  var height = getHeight(hiddenTextarea, sizingData);
  hiddenTextarea.value = value;
  height = getHeight(hiddenTextarea, sizingData);
  hiddenTextarea.value = "x";
  var rowHeight = hiddenTextarea.scrollHeight - paddingSize;
  var minHeight = rowHeight * minRows;
  if (boxSizing === "border-box") {
    minHeight = minHeight + paddingSize + borderSize;
  }
  height = Math.max(minHeight, height);
  var maxHeight = rowHeight * maxRows;
  if (boxSizing === "border-box") {
    maxHeight = maxHeight + paddingSize + borderSize;
  }
  height = Math.min(maxHeight, height);
  return [height, rowHeight];
}
var noop = function noop2() {
};
var pick = function pick2(props, obj) {
  return props.reduce(function(acc, prop) {
    acc[prop] = obj[prop];
    return acc;
  }, {});
};
var SIZING_STYLE = [
  "borderBottomWidth",
  "borderLeftWidth",
  "borderRightWidth",
  "borderTopWidth",
  "boxSizing",
  "fontFamily",
  "fontSize",
  "fontStyle",
  "fontWeight",
  "letterSpacing",
  "lineHeight",
  "paddingBottom",
  "paddingLeft",
  "paddingRight",
  "paddingTop",
  // non-standard
  "tabSize",
  "textIndent",
  // non-standard
  "textRendering",
  "textTransform",
  "width",
  "wordBreak"
];
var isIE = !!document.documentElement.currentStyle;
var getSizingData = function getSizingData2(node) {
  var style = window.getComputedStyle(node);
  if (style === null) {
    return null;
  }
  var sizingStyle = pick(SIZING_STYLE, style);
  var boxSizing = sizingStyle.boxSizing;
  if (boxSizing === "") {
    return null;
  }
  if (isIE && boxSizing === "border-box") {
    sizingStyle.width = parseFloat(sizingStyle.width) + parseFloat(sizingStyle.borderRightWidth) + parseFloat(sizingStyle.borderLeftWidth) + parseFloat(sizingStyle.paddingRight) + parseFloat(sizingStyle.paddingLeft) + "px";
  }
  var paddingSize = parseFloat(sizingStyle.paddingBottom) + parseFloat(sizingStyle.paddingTop);
  var borderSize = parseFloat(sizingStyle.borderBottomWidth) + parseFloat(sizingStyle.borderTopWidth);
  return {
    sizingStyle,
    paddingSize,
    borderSize
  };
};
var getSizingData$1 = getSizingData;
function useListener(target, type, listener) {
  var latestListener = useLatest(listener);
  React2.useLayoutEffect(function() {
    var handler = function handler2(ev) {
      return latestListener.current(ev);
    };
    if (!target) {
      return;
    }
    target.addEventListener(type, handler);
    return function() {
      return target.removeEventListener(type, handler);
    };
  }, []);
}
var useWindowResizeListener = function useWindowResizeListener2(listener) {
  useListener(window, "resize", listener);
};
var useFontsLoadedListener = function useFontsLoadedListener2(listener) {
  useListener(document.fonts, "loadingdone", listener);
};
var _excluded = ["cacheMeasurements", "maxRows", "minRows", "onChange", "onHeightChange"];
var TextareaAutosize = function TextareaAutosize2(_ref, userRef) {
  var cacheMeasurements = _ref.cacheMeasurements, maxRows = _ref.maxRows, minRows = _ref.minRows, _ref$onChange = _ref.onChange, onChange = _ref$onChange === void 0 ? noop : _ref$onChange, _ref$onHeightChange = _ref.onHeightChange, onHeightChange = _ref$onHeightChange === void 0 ? noop : _ref$onHeightChange, props = _objectWithoutPropertiesLoose(_ref, _excluded);
  var isControlled = props.value !== void 0;
  var libRef = React2.useRef(null);
  var ref = use_composed_ref_esm_default(libRef, userRef);
  var heightRef = React2.useRef(0);
  var measurementsCacheRef = React2.useRef();
  var resizeTextarea = function resizeTextarea2() {
    var node = libRef.current;
    var nodeSizingData = cacheMeasurements && measurementsCacheRef.current ? measurementsCacheRef.current : getSizingData$1(node);
    if (!nodeSizingData) {
      return;
    }
    measurementsCacheRef.current = nodeSizingData;
    var _calculateNodeHeight = calculateNodeHeight(nodeSizingData, node.value || node.placeholder || "x", minRows, maxRows), height = _calculateNodeHeight[0], rowHeight = _calculateNodeHeight[1];
    if (heightRef.current !== height) {
      heightRef.current = height;
      node.style.setProperty("height", height + "px", "important");
      onHeightChange(height, {
        rowHeight
      });
    }
  };
  var handleChange = function handleChange2(event) {
    if (!isControlled) {
      resizeTextarea();
    }
    onChange(event);
  };
  {
    React2.useLayoutEffect(resizeTextarea);
    useWindowResizeListener(resizeTextarea);
    useFontsLoadedListener(resizeTextarea);
    return /* @__PURE__ */ React2.createElement("textarea", _extends({}, props, {
      onChange: handleChange,
      ref
    }));
  }
};
var index2 = /* @__PURE__ */ React2.forwardRef(TextareaAutosize);

// node_modules/@nextui-org/input/dist/chunk-K3TANQWH.mjs
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
"use client";
var Textarea = forwardRef(
  ({
    style,
    minRows = 3,
    maxRows = 8,
    cacheMeasurements = false,
    disableAutosize = false,
    onHeightChange,
    ...otherProps
  }, ref) => {
    const {
      Component,
      label,
      description,
      startContent,
      endContent,
      hasHelper,
      shouldLabelBeOutside,
      shouldLabelBeInside,
      errorMessage,
      getBaseProps,
      getLabelProps,
      getInputProps,
      getInnerWrapperProps,
      getInputWrapperProps,
      getHelperWrapperProps,
      getDescriptionProps,
      getErrorMessageProps
    } = useInput({ ...otherProps, ref, isMultiline: true });
    const [hasMultipleRows, setIsHasMultipleRows] = (0, import_react6.useState)(minRows > 1);
    const [isLimitReached, setIsLimitReached] = (0, import_react6.useState)(false);
    const labelContent = label ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("label", { ...getLabelProps(), children: label }) : null;
    const inputProps = getInputProps();
    const handleHeightChange = (height, meta) => {
      if (minRows === 1) {
        setIsHasMultipleRows(height >= meta.rowHeight * 2);
      }
      if (maxRows > minRows) {
        const limitReached = height >= maxRows * meta.rowHeight;
        setIsLimitReached(limitReached);
      }
      onHeightChange == null ? void 0 : onHeightChange(height, meta);
    };
    const content = disableAutosize ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("textarea", { ...inputProps, style: $3ef42575df84b30b$export$9d1611c77c2fe928(inputProps.style, style != null ? style : {}) }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      index2,
      {
        ...inputProps,
        cacheMeasurements,
        "data-hide-scroll": dataAttr(!isLimitReached),
        maxRows,
        minRows,
        style: $3ef42575df84b30b$export$9d1611c77c2fe928(inputProps.style, style != null ? style : {}),
        onHeightChange: handleHeightChange
      }
    );
    const innerWrapper = (0, import_react6.useMemo)(() => {
      if (startContent || endContent) {
        return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { ...getInnerWrapperProps(), children: [
          startContent,
          content,
          endContent
        ] });
      }
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { ...getInnerWrapperProps(), children: content });
    }, [startContent, inputProps, endContent, getInnerWrapperProps]);
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(Component, { ...getBaseProps(), children: [
      shouldLabelBeOutside ? labelContent : null,
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { ...getInputWrapperProps(), "data-has-multiple-rows": dataAttr(hasMultipleRows), children: [
        shouldLabelBeInside ? labelContent : null,
        innerWrapper
      ] }),
      hasHelper ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { ...getHelperWrapperProps(), children: errorMessage ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { ...getErrorMessageProps(), children: errorMessage }) : description ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { ...getDescriptionProps(), children: description }) : null }) : null
    ] });
  }
);
Textarea.displayName = "NextUI.Textarea";
var textarea_default = Textarea;

// node_modules/@nextui-org/input/dist/index.mjs
"use client";

// node_modules/@conform-to/dom/_virtual/_rollupPluginBabelHelpers.mjs
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPrimitive(input3, hint) {
  if (typeof input3 !== "object" || input3 === null)
    return input3;
  var prim = input3[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input3, hint || "default");
    if (typeof res !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input3);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

// node_modules/@conform-to/dom/dom.mjs
function isFormControl(element) {
  return element instanceof Element && (element.tagName === "INPUT" || element.tagName === "SELECT" || element.tagName === "TEXTAREA" || element.tagName === "BUTTON");
}
function isFocusableFormControl(element) {
  return isFormControl(element) && element.willValidate && element.type !== "submit";
}
function getFormAction(event) {
  var _ref, _submitter$getAttribu;
  var form = event.target;
  var submitter = event.submitter;
  return (_ref = (_submitter$getAttribu = submitter === null || submitter === void 0 ? void 0 : submitter.getAttribute("formaction")) !== null && _submitter$getAttribu !== void 0 ? _submitter$getAttribu : form.getAttribute("action")) !== null && _ref !== void 0 ? _ref : "".concat(location.pathname).concat(location.search);
}
function getFormEncType(event) {
  var _submitter$getAttribu2;
  var form = event.target;
  var submitter = event.submitter;
  var encType = (_submitter$getAttribu2 = submitter === null || submitter === void 0 ? void 0 : submitter.getAttribute("formenctype")) !== null && _submitter$getAttribu2 !== void 0 ? _submitter$getAttribu2 : form.enctype;
  if (encType === "multipart/form-data") {
    return encType;
  }
  return "application/x-www-form-urlencoded";
}
function getFormMethod(event) {
  var _submitter$getAttribu3;
  var form = event.target;
  var submitter = event.submitter;
  var method = (_submitter$getAttribu3 = submitter === null || submitter === void 0 ? void 0 : submitter.getAttribute("formmethod")) !== null && _submitter$getAttribu3 !== void 0 ? _submitter$getAttribu3 : form.getAttribute("method");
  switch (method) {
    case "post":
    case "put":
    case "patch":
    case "delete":
      return method;
  }
  return "get";
}
function getFormElement(element) {
  var _element$form;
  return element instanceof HTMLFormElement ? element : (_element$form = element === null || element === void 0 ? void 0 : element.form) !== null && _element$form !== void 0 ? _element$form : null;
}
function getFormControls(form) {
  return Array.from(form.elements).filter(isFormControl);
}
function createSubmitter(config) {
  var button = document.createElement("button");
  button.name = config.name;
  button.value = config.value;
  if (config.hidden) {
    button.hidden = true;
  }
  if (config.formAction) {
    button.formAction = config.formAction;
  }
  if (config.formEnctype) {
    button.formEnctype = config.formEnctype;
  }
  if (config.formMethod) {
    button.formMethod = config.formMethod;
  }
  if (config.formNoValidate) {
    button.formNoValidate = true;
  }
  return button;
}
function requestSubmit(form, submitter) {
  var shouldRemoveSubmitter = false;
  if (submitter && !submitter.isConnected) {
    shouldRemoveSubmitter = true;
    form.appendChild(submitter);
  }
  if (typeof form.requestSubmit === "function") {
    form.requestSubmit(submitter);
  } else {
    var event = new SubmitEvent("submit", {
      bubbles: true,
      cancelable: true,
      submitter
    });
    form.dispatchEvent(event);
  }
  if (submitter && shouldRemoveSubmitter) {
    form.removeChild(submitter);
  }
}
function focusFirstInvalidControl(form) {
  for (var element of form.elements) {
    if (isFocusableFormControl(element) && !element.validity.valid) {
      element.focus();
      break;
    }
  }
}

// node_modules/@conform-to/dom/intent.mjs
var list = new Proxy({}, {
  get(_target, operation) {
    return function(name) {
      var payload = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return {
        name: INTENT,
        value: "list/".concat(JSON.stringify(_objectSpread2({
          name,
          operation
        }, payload))),
        formNoValidate: true
      };
    };
  }
});
var INTENT = "__intent__";
function getIntent(payload) {
  if (!payload.has(INTENT)) {
    return "submit";
  }
  var [intent, secondIntent, ...rest] = payload.getAll(INTENT);
  if (typeof intent !== "string" || secondIntent && intent !== secondIntent || rest.length > 0) {
    throw new Error("The intent could only be set on a button");
  }
  return intent;
}
function validate(field) {
  return {
    name: INTENT,
    value: "validate/".concat(field),
    formNoValidate: true
  };
}
function requestIntent(form, buttonProps) {
  if (!form) {
    console.warn("No form element is provided");
    return;
  }
  var submitter = createSubmitter({
    name: INTENT,
    value: buttonProps.value,
    hidden: true,
    formNoValidate: buttonProps.formNoValidate
  });
  requestSubmit(form, submitter);
}
function parseIntent(intent) {
  var seperatorIndex = intent.indexOf("/");
  if (seperatorIndex > -1) {
    var type = intent.slice(0, seperatorIndex);
    var _payload = intent.slice(seperatorIndex + 1);
    if (typeof _payload !== "undefined") {
      try {
        switch (type) {
          case "validate":
            return {
              type,
              payload: _payload
            };
          case "list":
            return {
              type,
              payload: JSON.parse(_payload)
            };
        }
      } catch (error) {
        throw new Error("Failed parsing intent: ".concat(intent), {
          cause: error
        });
      }
    }
  }
  return null;
}
function updateList(list2, payload) {
  var _payload$index;
  switch (payload.operation) {
    case "prepend":
      list2.unshift(payload.defaultValue);
      break;
    case "append":
      list2.push(payload.defaultValue);
      break;
    case "insert":
      list2.splice((_payload$index = payload.index) !== null && _payload$index !== void 0 ? _payload$index : list2.length, 0, payload.defaultValue);
      break;
    case "replace":
      list2.splice(payload.index, 1, payload.defaultValue);
      break;
    case "remove":
      list2.splice(payload.index, 1);
      break;
    case "reorder":
      list2.splice(payload.to, 0, ...list2.splice(payload.from, 1));
      break;
    default:
      throw new Error("Unknown list intent received");
  }
  return list2;
}

// node_modules/@conform-to/dom/formdata.mjs
function getFormData(form, submitter) {
  var payload = new FormData(form);
  if (submitter && submitter.type === "submit" && submitter.name !== "") {
    payload.append(submitter.name, submitter.value);
  }
  return payload;
}
function getPaths(name) {
  if (!name) {
    return [];
  }
  return name.split(/\.|(\[\d*\])/).reduce((result, segment) => {
    if (typeof segment !== "undefined" && segment !== "") {
      if (segment.startsWith("[") && segment.endsWith("]")) {
        var index3 = segment.slice(1, -1);
        result.push(Number(index3));
      } else {
        result.push(segment);
      }
    }
    return result;
  }, []);
}
function formatPaths(paths) {
  return paths.reduce((name, path) => {
    if (typeof path === "number") {
      return "".concat(name, "[").concat(path, "]");
    }
    if (name === "" || path === "") {
      return [name, path].join("");
    }
    return [name, path].join(".");
  }, "");
}
function setValue(target, name, valueFn) {
  var paths = getPaths(name);
  var length = paths.length;
  var lastIndex = length - 1;
  var index3 = -1;
  var pointer = target;
  while (pointer != null && ++index3 < length) {
    var _pointer$key;
    var key = paths[index3];
    var nextKey = paths[index3 + 1];
    var newValue = index3 != lastIndex ? (_pointer$key = pointer[key]) !== null && _pointer$key !== void 0 ? _pointer$key : typeof nextKey === "number" ? [] : {} : valueFn(pointer[key]);
    pointer[key] = newValue;
    pointer = pointer[key];
  }
}
function resolve(payload) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var data = {};
  var _loop = function _loop2(value2) {
    var _options$ignoreKeys;
    if ((_options$ignoreKeys = options.ignoreKeys) !== null && _options$ignoreKeys !== void 0 && _options$ignoreKeys.includes(key)) {
      return "continue";
    }
    setValue(data, key, (prev) => {
      if (!prev) {
        return value2;
      } else if (Array.isArray(prev)) {
        return prev.concat(value2);
      } else {
        return [prev, value2];
      }
    });
  };
  for (var [key, value] of payload.entries()) {
    var _ret = _loop(value);
    if (_ret === "continue")
      continue;
  }
  return data;
}
function getValidationMessage(errors) {
  var _errors$join;
  return (_errors$join = errors === null || errors === void 0 ? void 0 : errors.join(String.fromCharCode(31))) !== null && _errors$join !== void 0 ? _errors$join : "";
}
function getErrors(validationMessage) {
  if (!validationMessage) {
    return [];
  }
  return validationMessage.split(String.fromCharCode(31));
}

// node_modules/@conform-to/dom/parse.mjs
var VALIDATION_UNDEFINED = "__undefined__";
var VALIDATION_SKIPPED = "__skipped__";
function parse(payload, options) {
  var submission = {
    intent: getIntent(payload),
    payload: resolve(payload, {
      ignoreKeys: [INTENT]
    }),
    error: {}
  };
  var intent = parseIntent(submission.intent);
  if (intent && intent.type === "list") {
    setValue(submission.payload, intent.payload.name, (list2) => {
      if (typeof list2 !== "undefined" && !Array.isArray(list2)) {
        throw new Error("The list intent can only be applied to a list");
      }
      return updateList(list2 !== null && list2 !== void 0 ? list2 : [], intent.payload);
    });
  }
  if (typeof (options === null || options === void 0 ? void 0 : options.resolve) === "undefined") {
    return submission;
  }
  var result = options.resolve(submission.payload, submission.intent);
  var mergeResolveResult = (resolved) => {
    return _objectSpread2(_objectSpread2({}, submission), resolved);
  };
  if (result instanceof Promise) {
    return result.then(mergeResolveResult);
  }
  return mergeResolveResult(result);
}

// node_modules/@conform-to/react/_virtual/_rollupPluginBabelHelpers.mjs
function ownKeys2(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread22(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys2(Object(source), true).forEach(function(key) {
      _defineProperty2(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys2(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty2(obj, key, value) {
  key = _toPropertyKey2(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPrimitive2(input3, hint) {
  if (typeof input3 !== "object" || input3 === null)
    return input3;
  var prim = input3[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input3, hint || "default");
    if (typeof res !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input3);
}
function _toPropertyKey2(arg) {
  var key = _toPrimitive2(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

// node_modules/@conform-to/react/hooks.mjs
var import_react7 = __toESM(require_react(), 1);
function useNoValidate(defaultNoValidate, validateBeforeHydrate) {
  var [noValidate, setNoValidate] = (0, import_react7.useState)(defaultNoValidate || !validateBeforeHydrate);
  (0, import_react7.useEffect)(() => {
    setNoValidate(true);
  }, []);
  return noValidate;
}
function useFormRef(userProvidedRef) {
  var formRef = (0, import_react7.useRef)(null);
  return userProvidedRef !== null && userProvidedRef !== void 0 ? userProvidedRef : formRef;
}
function useConfigRef(config) {
  var ref = (0, import_react7.useRef)(config);
  useSafeLayoutEffect(() => {
    ref.current = config;
  });
  return ref;
}
function useFormReporter(ref, lastSubmission) {
  var [submission, setSubmission] = (0, import_react7.useState)(lastSubmission);
  var report = (0, import_react7.useCallback)((form, submission2) => {
    var event = new CustomEvent("conform", {
      detail: submission2.intent
    });
    form.dispatchEvent(event);
    setSubmission(submission2);
  }, []);
  (0, import_react7.useEffect)(() => {
    var form = ref.current;
    if (!form || !lastSubmission) {
      return;
    }
    if (!lastSubmission.payload) {
      form.reset();
      return;
    }
    report(form, lastSubmission);
  }, [ref, lastSubmission, report]);
  (0, import_react7.useEffect)(() => {
    var form = ref.current;
    if (!form || !submission) {
      return;
    }
    reportSubmission(form, submission);
  }, [ref, submission]);
  return report;
}
function useFormError(ref, config) {
  var [error, setError] = (0, import_react7.useState)(() => {
    if (!config.initialError) {
      return {};
    }
    var result = {};
    for (var [name, message] of Object.entries(config.initialError)) {
      var [path, ...restPaths] = getPaths(name);
      if (typeof path !== "undefined" && restPaths.length === 0) {
        result[path] = message;
      }
    }
    return result;
  });
  (0, import_react7.useEffect)(() => {
    var handleInvalid = (event) => {
      var _config$name;
      var form = getFormElement(ref.current);
      var element = event.target;
      var prefix = (_config$name = config.name) !== null && _config$name !== void 0 ? _config$name : "";
      if (!isFormControl(element) || element.form !== form || !element.name.startsWith(prefix) || !element.dataset.conformTouched) {
        return;
      }
      var name = element.name.slice(prefix.length);
      var [path, ...restPaths] = getPaths(name);
      if (typeof path === "undefined" || restPaths.length > 0) {
        return;
      }
      setError((prev) => {
        if (element.validationMessage === getValidationMessage(prev[path])) {
          return prev;
        }
        return _objectSpread22(_objectSpread22({}, prev), {}, {
          [path]: getErrors(element.validationMessage)
        });
      });
      event.preventDefault();
    };
    var handleReset = (event) => {
      var form = getFormElement(ref.current);
      if (form && event.target === form) {
        setError({});
      }
    };
    document.addEventListener("reset", handleReset);
    document.addEventListener("invalid", handleInvalid, true);
    return () => {
      document.removeEventListener("reset", handleReset);
      document.removeEventListener("invalid", handleInvalid, true);
    };
  }, [ref, config.name]);
  return [error, setError];
}
function useForm() {
  var _config$lastSubmissio3, _config$lastSubmissio4;
  var config = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var configRef = useConfigRef(config);
  var ref = useFormRef(config.ref);
  var noValidate = useNoValidate(config.noValidate, config.fallbackNative);
  var report = useFormReporter(ref, config.lastSubmission);
  var [errors, setErrors] = (0, import_react7.useState)(() => {
    var _config$lastSubmissio, _config$lastSubmissio2;
    return (_config$lastSubmissio = (_config$lastSubmissio2 = config.lastSubmission) === null || _config$lastSubmissio2 === void 0 ? void 0 : _config$lastSubmissio2.error[""]) !== null && _config$lastSubmissio !== void 0 ? _config$lastSubmissio : [];
  });
  var initialError = (0, import_react7.useMemo)(() => {
    var _submission$error$sco;
    var submission = config.lastSubmission;
    if (!submission) {
      return {};
    }
    var intent = parseIntent(submission.intent);
    var scope = getScope(intent);
    if (typeof scope !== "string") {
      return submission.error;
    }
    return {
      [scope]: (_submission$error$sco = submission.error[scope]) !== null && _submission$error$sco !== void 0 ? _submission$error$sco : []
    };
  }, [config.lastSubmission]);
  var [defaultValueFromLastSubmission, setDefaultValueFromLastSubmission] = (0, import_react7.useState)(
    // @ts-expect-error defaultValue is not in Submission type
    (_config$lastSubmissio3 = (_config$lastSubmissio4 = config.lastSubmission) === null || _config$lastSubmissio4 === void 0 ? void 0 : _config$lastSubmissio4.payload) !== null && _config$lastSubmissio3 !== void 0 ? _config$lastSubmissio3 : null
  );
  var fieldset2 = useFieldset(ref, {
    defaultValue: defaultValueFromLastSubmission !== null && defaultValueFromLastSubmission !== void 0 ? defaultValueFromLastSubmission : config.defaultValue,
    initialError,
    constraint: config.constraint,
    form: config.id
  });
  (0, import_react7.useEffect)(() => {
    var createValidateHandler = (type) => (event) => {
      var field = event.target;
      var form2 = ref.current;
      var {
        shouldValidate = "onSubmit",
        shouldRevalidate = shouldValidate
      } = configRef.current;
      if (!form2 || !isFocusableFormControl(field) || field.form !== form2 || !field.name) {
        return;
      }
      if (field.dataset.conformTouched ? shouldRevalidate === type : shouldValidate === type) {
        requestIntent(form2, validate(field.name));
      }
    };
    var handleInvalid = (event) => {
      var form2 = ref.current;
      var field = event.target;
      if (!form2 || !isFormControl(field) || field.form !== form2 || field.name !== FORM_ERROR_ELEMENT_NAME) {
        return;
      }
      event.preventDefault();
      if (field.dataset.conformTouched) {
        setErrors(getErrors(field.validationMessage));
      }
    };
    var handleReset = (event) => {
      var form2 = ref.current;
      if (!form2 || event.target !== form2) {
        return;
      }
      for (var _element of getFormControls(form2)) {
        delete _element.dataset.conformTouched;
        _element.setCustomValidity("");
      }
      setErrors([]);
      setDefaultValueFromLastSubmission(null);
    };
    var handleInput = createValidateHandler("onInput");
    var handleBlur = createValidateHandler("onBlur");
    document.addEventListener("input", handleInput, true);
    document.addEventListener("blur", handleBlur, true);
    document.addEventListener("invalid", handleInvalid, true);
    document.addEventListener("reset", handleReset);
    return () => {
      document.removeEventListener("input", handleInput, true);
      document.removeEventListener("blur", handleBlur, true);
      document.removeEventListener("invalid", handleInvalid, true);
      document.removeEventListener("reset", handleReset);
    };
  }, [ref, configRef]);
  var form = {
    ref,
    error: errors[0],
    errors,
    props: {
      ref,
      noValidate,
      onSubmit(event) {
        var form2 = event.currentTarget;
        var nativeEvent = event.nativeEvent;
        var submitter = nativeEvent.submitter;
        if (event.defaultPrevented) {
          return;
        }
        try {
          var _config$onValidate, _config$onValidate2;
          var formData = getFormData(form2, submitter);
          var submission = (_config$onValidate = (_config$onValidate2 = config.onValidate) === null || _config$onValidate2 === void 0 ? void 0 : _config$onValidate2.call(config, {
            form: form2,
            formData
          })) !== null && _config$onValidate !== void 0 ? _config$onValidate : parse(formData);
          var {
            errors: _errors,
            shouldServerValidate
          } = Object.entries(submission.error).reduce((result, _ref) => {
            var [, error] = _ref;
            for (var message of error) {
              if (message === VALIDATION_UNDEFINED) {
                result.shouldServerValidate = true;
              } else if (message !== VALIDATION_SKIPPED) {
                result.errors.push(message);
              }
            }
            return result;
          }, {
            errors: [],
            shouldServerValidate: false
          });
          if (
            // has client validation
            typeof config.onValidate !== "undefined" && // not necessary to validate on the server
            !shouldServerValidate && // client validation failed or non submit intent
            (!config.noValidate && !(submitter !== null && submitter !== void 0 && submitter.formNoValidate) && _errors.length > 0 || parseIntent(submission.intent) !== null)
          ) {
            report(form2, submission);
            event.preventDefault();
          } else {
            var _config$onSubmit;
            (_config$onSubmit = config.onSubmit) === null || _config$onSubmit === void 0 ? void 0 : _config$onSubmit.call(config, event, {
              formData,
              submission,
              action: getFormAction(nativeEvent),
              encType: getFormEncType(nativeEvent),
              method: getFormMethod(nativeEvent)
            });
          }
        } catch (error) {
          console.warn("Client validation failed", error);
        }
      }
    }
  };
  if (config.id) {
    form.id = config.id;
    form.errorId = "".concat(config.id, "-error");
    form.props.id = form.id;
  }
  if (form.errorId && form.errors.length > 0) {
    form.props["aria-invalid"] = "true";
    form.props["aria-describedby"] = form.errorId;
  }
  return [form, fieldset2];
}
function useFieldset(ref, config) {
  var [error] = useFormError(ref, {
    initialError: config.initialError,
    name: config.name
  });
  return new Proxy({}, {
    get(_target, key) {
      var _fieldsetConfig$const, _fieldsetConfig$initi, _fieldsetConfig$defau;
      if (typeof key !== "string") {
        return;
      }
      var fieldsetConfig = config;
      var constraint = (_fieldsetConfig$const = fieldsetConfig.constraint) === null || _fieldsetConfig$const === void 0 ? void 0 : _fieldsetConfig$const[key];
      var errors = error === null || error === void 0 ? void 0 : error[key];
      var initialError = Object.entries((_fieldsetConfig$initi = fieldsetConfig.initialError) !== null && _fieldsetConfig$initi !== void 0 ? _fieldsetConfig$initi : {}).reduce((result, _ref2) => {
        var [name, message] = _ref2;
        var [field2, ...paths] = getPaths(name);
        if (field2 === key) {
          result[formatPaths(paths)] = message;
        }
        return result;
      }, {});
      var field = _objectSpread22(_objectSpread22({}, constraint), {}, {
        name: fieldsetConfig.name ? "".concat(fieldsetConfig.name, ".").concat(key) : key,
        // @ts-expect-error The FieldValue type might need a rework
        defaultValue: (_fieldsetConfig$defau = fieldsetConfig.defaultValue) === null || _fieldsetConfig$defau === void 0 ? void 0 : _fieldsetConfig$defau[key],
        initialError,
        error: errors === null || errors === void 0 ? void 0 : errors[0],
        errors
      });
      if (fieldsetConfig.form) {
        field.form = fieldsetConfig.form;
        field.id = "".concat(fieldsetConfig.form, "-").concat(field.name);
        field.errorId = "".concat(field.id, "-error");
        field.descriptionId = "".concat(field.id, "-description");
      }
      return field;
    }
  });
}
function useFieldList(ref, config) {
  var configRef = useConfigRef(config);
  var [error, setError] = useFormError(ref, {
    initialError: config.initialError,
    name: config.name
  });
  var [entries, setEntries] = (0, import_react7.useState)(() => {
    var _config$defaultValue;
    return Object.entries((_config$defaultValue = config.defaultValue) !== null && _config$defaultValue !== void 0 ? _config$defaultValue : []);
  });
  (0, import_react7.useEffect)(() => {
    var conformHandler = (event) => {
      var form = getFormElement(ref.current);
      if (!form || event.target !== form) {
        return;
      }
      var intent = parseIntent(event.detail);
      if ((intent === null || intent === void 0 ? void 0 : intent.type) !== "list" || (intent === null || intent === void 0 ? void 0 : intent.payload.name) !== configRef.current.name) {
        return;
      }
      setEntries((entries2) => {
        var list2 = [...entries2];
        switch (intent.payload.operation) {
          case "append":
          case "prepend":
          case "insert":
          case "replace":
            return updateList(list2, _objectSpread22(_objectSpread22({}, intent.payload), {}, {
              defaultValue: [
                // Generate a random key to avoid conflicts
                getUniqueKey(),
                intent.payload.defaultValue
              ]
            }));
          default:
            return updateList(list2, intent.payload);
        }
      });
      setError((error2) => {
        var errorList = [];
        for (var [key, messages] of Object.entries(error2)) {
          if (typeof key === "number") {
            errorList[key] = messages;
          }
        }
        switch (intent.payload.operation) {
          case "append":
          case "prepend":
          case "insert":
          case "replace":
            errorList = updateList(errorList, _objectSpread22(_objectSpread22({}, intent.payload), {}, {
              defaultValue: void 0
            }));
            break;
          default:
            errorList = updateList(errorList, intent.payload);
            break;
        }
        return Object.assign({}, errorList);
      });
    };
    var resetHandler = (event) => {
      var _configRef$current$de;
      var form = getFormElement(ref.current);
      if (!form || event.target !== form) {
        return;
      }
      setEntries(Object.entries((_configRef$current$de = configRef.current.defaultValue) !== null && _configRef$current$de !== void 0 ? _configRef$current$de : []));
    };
    document.addEventListener("conform", conformHandler, true);
    document.addEventListener("reset", resetHandler);
    return () => {
      document.removeEventListener("conform", conformHandler, true);
      document.removeEventListener("reset", resetHandler);
    };
  }, [ref, configRef, setError]);
  return entries.map((_ref3, index3) => {
    var _config$initialError;
    var [key, defaultValue] = _ref3;
    var errors = error[index3];
    var initialError = Object.entries((_config$initialError = config.initialError) !== null && _config$initialError !== void 0 ? _config$initialError : {}).reduce((result, _ref4) => {
      var [name, message] = _ref4;
      var [field, ...paths] = getPaths(name);
      if (field === index3) {
        result[formatPaths(paths)] = message;
      }
      return result;
    }, {});
    var fieldConfig = {
      name: "".concat(config.name, "[").concat(index3, "]"),
      defaultValue,
      initialError,
      error: errors === null || errors === void 0 ? void 0 : errors[0],
      errors
    };
    if (config.form) {
      fieldConfig.form = config.form;
      fieldConfig.id = "".concat(config.form, "-").concat(config.name, "-").concat(index3);
      fieldConfig.errorId = "".concat(fieldConfig.id, "-error");
      fieldConfig.descriptionId = "".concat(fieldConfig.id, "-description");
    }
    return _objectSpread22({
      key
    }, fieldConfig);
  });
}
var useSafeLayoutEffect = typeof document === "undefined" ? import_react7.useEffect : import_react7.useLayoutEffect;
var FORM_ERROR_ELEMENT_NAME = "__form__";
function getUniqueKey() {
  var [value] = crypto.getRandomValues(new Uint32Array(1));
  if (!value) {
    throw new Error("Fail to generate an unique key");
  }
  return value.toString(36);
}
function reportSubmission(form, submission) {
  for (var [name, message] of Object.entries(submission.error)) {
    if (message.length === 0) {
      continue;
    }
    var elementName = name ? name : FORM_ERROR_ELEMENT_NAME;
    var item = form.elements.namedItem(elementName);
    if (item === null) {
      var button = document.createElement("button");
      button.name = elementName;
      button.hidden = true;
      button.dataset.conformTouched = "true";
      form.appendChild(button);
    }
  }
  var intent = parseIntent(submission.intent);
  var scope = getScope(intent);
  for (var _element4 of getFormControls(form)) {
    var _submission$error$_el;
    var _elementName = _element4.name !== FORM_ERROR_ELEMENT_NAME ? _element4.name : "";
    var messages = (_submission$error$_el = submission.error[_elementName]) !== null && _submission$error$_el !== void 0 ? _submission$error$_el : [];
    if (scope === null || scope === _elementName) {
      _element4.dataset.conformTouched = "true";
    }
    if (!messages.includes(VALIDATION_SKIPPED) && !messages.includes(VALIDATION_UNDEFINED)) {
      var invalidEvent = new Event("invalid", {
        cancelable: true
      });
      _element4.setCustomValidity(getValidationMessage(messages));
      _element4.dispatchEvent(invalidEvent);
    }
  }
  if (!intent) {
    focusFirstInvalidControl(form);
  }
}
function getScope(intent) {
  switch (intent === null || intent === void 0 ? void 0 : intent.type) {
    case "validate":
      return intent.payload;
    case "list":
      return intent.payload.name;
  }
  return null;
}

// node_modules/@conform-to/react/helpers.mjs
var helpers_exports = {};
__export(helpers_exports, {
  INTENT: () => INTENT,
  VALIDATION_SKIPPED: () => VALIDATION_SKIPPED,
  VALIDATION_UNDEFINED: () => VALIDATION_UNDEFINED,
  collection: () => collection,
  fieldset: () => fieldset,
  hiddenProps: () => hiddenProps,
  input: () => input2,
  select: () => select,
  textarea: () => textarea
});
function cleanup(props) {
  for (var key in props) {
    if (props[key] === void 0) {
      delete props[key];
    }
  }
  return props;
}
function getFormElementProps(config) {
  var _options$ariaAttribut, _config$error, _config$error2;
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var hasAriaAttributes = (_options$ariaAttribut = options.ariaAttributes) !== null && _options$ariaAttribut !== void 0 ? _options$ariaAttribut : true;
  return cleanup({
    id: config.id,
    name: config.name,
    form: config.form,
    "aria-invalid": hasAriaAttributes && config.errorId && (_config$error = config.error) !== null && _config$error !== void 0 && _config$error.length ? true : void 0,
    "aria-describedby": hasAriaAttributes ? [config.errorId && (_config$error2 = config.error) !== null && _config$error2 !== void 0 && _config$error2.length ? config.errorId : void 0, config.descriptionId && options.ariaAttributes !== false && options.description ? config.descriptionId : void 0].reduce((result, id) => {
      if (!result) {
        return id;
      }
      if (!id) {
        return result;
      }
      return "".concat(result, " ").concat(id);
    }) : void 0
  });
}
function getFormControlProps(config, options) {
  return cleanup(_objectSpread22(_objectSpread22({}, getFormElementProps(config, options)), {}, {
    required: config.required,
    autoFocus: config.initialError && Object.entries(config.initialError).length > 0 ? true : void 0
  }, options !== null && options !== void 0 && options.hidden ? hiddenProps : void 0));
}
var hiddenProps = {
  /**
   * Style to make the input element visually hidden
   * Based on the `sr-only` class from tailwindcss
   */
  style: {
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: 0,
    margin: "-1px",
    overflow: "hidden",
    clip: "rect(0,0,0,0)",
    whiteSpace: "nowrap",
    border: 0
  },
  tabIndex: -1,
  "aria-hidden": true
};
function input2(config) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var props = _objectSpread22(_objectSpread22({}, getFormControlProps(config, options)), {}, {
    type: options.type,
    minLength: config.minLength,
    maxLength: config.maxLength,
    min: config.min,
    max: config.max,
    step: config.step,
    pattern: config.pattern,
    multiple: config.multiple
  });
  if (options.type === "checkbox" || options.type === "radio") {
    var _options$value;
    props.value = (_options$value = options.value) !== null && _options$value !== void 0 ? _options$value : "on";
    props.defaultChecked = config.defaultValue === props.value;
  } else if (options.type !== "file") {
    props.defaultValue = config.defaultValue;
  }
  return cleanup(props);
}
function select(config, options) {
  return cleanup(_objectSpread22(_objectSpread22({}, getFormControlProps(config, options)), {}, {
    defaultValue: config.defaultValue,
    multiple: config.multiple
  }));
}
function textarea(config, options) {
  return cleanup(_objectSpread22(_objectSpread22({}, getFormControlProps(config, options)), {}, {
    defaultValue: config.defaultValue,
    minLength: config.minLength,
    maxLength: config.maxLength
  }));
}
function fieldset(config, options) {
  return getFormElementProps(config, options);
}
function collection(config, options) {
  return options.options.map((value) => cleanup(_objectSpread22(_objectSpread22({}, getFormControlProps(config, options)), {}, {
    id: config.id ? "".concat(config.id, "-").concat(value) : void 0,
    type: options.type,
    value,
    defaultChecked: options.type === "checkbox" && Array.isArray(config.defaultValue) ? config.defaultValue.includes(value) : config.defaultValue === value,
    // The required attribute doesn't make sense for checkbox group
    // As it would require all checkboxes to be checked instead of at least one
    // overriden with `undefiend` so it gets cleaned up
    required: options.type === "checkbox" ? void 0 : config.required
  })));
}

// node_modules/zod/lib/index.mjs
var util;
(function(util2) {
  util2.assertEqual = (val) => val;
  function assertIs(_arg) {
  }
  util2.assertIs = assertIs;
  function assertNever(_x) {
    throw new Error();
  }
  util2.assertNever = assertNever;
  util2.arrayToEnum = (items) => {
    const obj = {};
    for (const item of items) {
      obj[item] = item;
    }
    return obj;
  };
  util2.getValidEnumValues = (obj) => {
    const validKeys = util2.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
    const filtered = {};
    for (const k of validKeys) {
      filtered[k] = obj[k];
    }
    return util2.objectValues(filtered);
  };
  util2.objectValues = (obj) => {
    return util2.objectKeys(obj).map(function(e) {
      return obj[e];
    });
  };
  util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
    const keys = [];
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        keys.push(key);
      }
    }
    return keys;
  };
  util2.find = (arr, checker) => {
    for (const item of arr) {
      if (checker(item))
        return item;
    }
    return void 0;
  };
  util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && isFinite(val) && Math.floor(val) === val;
  function joinValues(array, separator = " | ") {
    return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
  }
  util2.joinValues = joinValues;
  util2.jsonStringifyReplacer = (_, value) => {
    if (typeof value === "bigint") {
      return value.toString();
    }
    return value;
  };
})(util || (util = {}));
var objectUtil;
(function(objectUtil2) {
  objectUtil2.mergeShapes = (first, second) => {
    return {
      ...first,
      ...second
      // second overwrites first
    };
  };
})(objectUtil || (objectUtil = {}));
var ZodParsedType = util.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]);
var getParsedType = (data) => {
  const t = typeof data;
  switch (t) {
    case "undefined":
      return ZodParsedType.undefined;
    case "string":
      return ZodParsedType.string;
    case "number":
      return isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
    case "boolean":
      return ZodParsedType.boolean;
    case "function":
      return ZodParsedType.function;
    case "bigint":
      return ZodParsedType.bigint;
    case "symbol":
      return ZodParsedType.symbol;
    case "object":
      if (Array.isArray(data)) {
        return ZodParsedType.array;
      }
      if (data === null) {
        return ZodParsedType.null;
      }
      if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
        return ZodParsedType.promise;
      }
      if (typeof Map !== "undefined" && data instanceof Map) {
        return ZodParsedType.map;
      }
      if (typeof Set !== "undefined" && data instanceof Set) {
        return ZodParsedType.set;
      }
      if (typeof Date !== "undefined" && data instanceof Date) {
        return ZodParsedType.date;
      }
      return ZodParsedType.object;
    default:
      return ZodParsedType.unknown;
  }
};
var ZodIssueCode = util.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
var quotelessJson = (obj) => {
  const json = JSON.stringify(obj, null, 2);
  return json.replace(/"([^"]+)":/g, "$1:");
};
var ZodError = class extends Error {
  constructor(issues) {
    super();
    this.issues = [];
    this.addIssue = (sub) => {
      this.issues = [...this.issues, sub];
    };
    this.addIssues = (subs = []) => {
      this.issues = [...this.issues, ...subs];
    };
    const actualProto = new.target.prototype;
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(this, actualProto);
    } else {
      this.__proto__ = actualProto;
    }
    this.name = "ZodError";
    this.issues = issues;
  }
  get errors() {
    return this.issues;
  }
  format(_mapper) {
    const mapper = _mapper || function(issue) {
      return issue.message;
    };
    const fieldErrors = { _errors: [] };
    const processError = (error) => {
      for (const issue of error.issues) {
        if (issue.code === "invalid_union") {
          issue.unionErrors.map(processError);
        } else if (issue.code === "invalid_return_type") {
          processError(issue.returnTypeError);
        } else if (issue.code === "invalid_arguments") {
          processError(issue.argumentsError);
        } else if (issue.path.length === 0) {
          fieldErrors._errors.push(mapper(issue));
        } else {
          let curr = fieldErrors;
          let i = 0;
          while (i < issue.path.length) {
            const el = issue.path[i];
            const terminal = i === issue.path.length - 1;
            if (!terminal) {
              curr[el] = curr[el] || { _errors: [] };
            } else {
              curr[el] = curr[el] || { _errors: [] };
              curr[el]._errors.push(mapper(issue));
            }
            curr = curr[el];
            i++;
          }
        }
      }
    };
    processError(this);
    return fieldErrors;
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(mapper = (issue) => issue.message) {
    const fieldErrors = {};
    const formErrors = [];
    for (const sub of this.issues) {
      if (sub.path.length > 0) {
        fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
        fieldErrors[sub.path[0]].push(mapper(sub));
      } else {
        formErrors.push(mapper(sub));
      }
    }
    return { formErrors, fieldErrors };
  }
  get formErrors() {
    return this.flatten();
  }
};
ZodError.create = (issues) => {
  const error = new ZodError(issues);
  return error;
};
var errorMap = (issue, _ctx) => {
  let message;
  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      if (issue.received === ZodParsedType.undefined) {
        message = "Required";
      } else {
        message = `Expected ${issue.expected}, received ${issue.received}`;
      }
      break;
    case ZodIssueCode.invalid_literal:
      message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
      break;
    case ZodIssueCode.unrecognized_keys:
      message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
      break;
    case ZodIssueCode.invalid_union:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_union_discriminator:
      message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
      break;
    case ZodIssueCode.invalid_enum_value:
      message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
      break;
    case ZodIssueCode.invalid_arguments:
      message = `Invalid function arguments`;
      break;
    case ZodIssueCode.invalid_return_type:
      message = `Invalid function return type`;
      break;
    case ZodIssueCode.invalid_date:
      message = `Invalid date`;
      break;
    case ZodIssueCode.invalid_string:
      if (typeof issue.validation === "object") {
        if ("includes" in issue.validation) {
          message = `Invalid input: must include "${issue.validation.includes}"`;
          if (typeof issue.validation.position === "number") {
            message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
          }
        } else if ("startsWith" in issue.validation) {
          message = `Invalid input: must start with "${issue.validation.startsWith}"`;
        } else if ("endsWith" in issue.validation) {
          message = `Invalid input: must end with "${issue.validation.endsWith}"`;
        } else {
          util.assertNever(issue.validation);
        }
      } else if (issue.validation !== "regex") {
        message = `Invalid ${issue.validation}`;
      } else {
        message = "Invalid";
      }
      break;
    case ZodIssueCode.too_small:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.too_big:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "bigint")
        message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.custom:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_intersection_types:
      message = `Intersection results could not be merged`;
      break;
    case ZodIssueCode.not_multiple_of:
      message = `Number must be a multiple of ${issue.multipleOf}`;
      break;
    case ZodIssueCode.not_finite:
      message = "Number must be finite";
      break;
    default:
      message = _ctx.defaultError;
      util.assertNever(issue);
  }
  return { message };
};
var overrideErrorMap = errorMap;
function setErrorMap(map) {
  overrideErrorMap = map;
}
function getErrorMap() {
  return overrideErrorMap;
}
var makeIssue = (params) => {
  const { data, path, errorMaps, issueData } = params;
  const fullPath = [...path, ...issueData.path || []];
  const fullIssue = {
    ...issueData,
    path: fullPath
  };
  let errorMessage = "";
  const maps = errorMaps.filter((m) => !!m).slice().reverse();
  for (const map of maps) {
    errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
  }
  return {
    ...issueData,
    path: fullPath,
    message: issueData.message || errorMessage
  };
};
var EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
  const issue = makeIssue({
    issueData,
    data: ctx.data,
    path: ctx.path,
    errorMaps: [
      ctx.common.contextualErrorMap,
      ctx.schemaErrorMap,
      getErrorMap(),
      errorMap
      // then global default map
    ].filter((x) => !!x)
  });
  ctx.common.issues.push(issue);
}
var ParseStatus = class {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    if (this.value === "valid")
      this.value = "dirty";
  }
  abort() {
    if (this.value !== "aborted")
      this.value = "aborted";
  }
  static mergeArray(status, results) {
    const arrayValue = [];
    for (const s of results) {
      if (s.status === "aborted")
        return INVALID;
      if (s.status === "dirty")
        status.dirty();
      arrayValue.push(s.value);
    }
    return { status: status.value, value: arrayValue };
  }
  static async mergeObjectAsync(status, pairs) {
    const syncPairs = [];
    for (const pair of pairs) {
      syncPairs.push({
        key: await pair.key,
        value: await pair.value
      });
    }
    return ParseStatus.mergeObjectSync(status, syncPairs);
  }
  static mergeObjectSync(status, pairs) {
    const finalObject = {};
    for (const pair of pairs) {
      const { key, value } = pair;
      if (key.status === "aborted")
        return INVALID;
      if (value.status === "aborted")
        return INVALID;
      if (key.status === "dirty")
        status.dirty();
      if (value.status === "dirty")
        status.dirty();
      if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
        finalObject[key.value] = value.value;
      }
    }
    return { status: status.value, value: finalObject };
  }
};
var INVALID = Object.freeze({
  status: "aborted"
});
var DIRTY = (value) => ({ status: "dirty", value });
var OK = (value) => ({ status: "valid", value });
var isAborted = (x) => x.status === "aborted";
var isDirty = (x) => x.status === "dirty";
var isValid = (x) => x.status === "valid";
var isAsync = (x) => typeof Promise !== "undefined" && x instanceof Promise;
var errorUtil;
(function(errorUtil2) {
  errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
  errorUtil2.toString = (message) => typeof message === "string" ? message : message === null || message === void 0 ? void 0 : message.message;
})(errorUtil || (errorUtil = {}));
var ParseInputLazyPath = class {
  constructor(parent, value, path, key) {
    this._cachedPath = [];
    this.parent = parent;
    this.data = value;
    this._path = path;
    this._key = key;
  }
  get path() {
    if (!this._cachedPath.length) {
      if (this._key instanceof Array) {
        this._cachedPath.push(...this._path, ...this._key);
      } else {
        this._cachedPath.push(...this._path, this._key);
      }
    }
    return this._cachedPath;
  }
};
var handleResult = (ctx, result) => {
  if (isValid(result)) {
    return { success: true, data: result.value };
  } else {
    if (!ctx.common.issues.length) {
      throw new Error("Validation failed but no issues detected.");
    }
    return {
      success: false,
      get error() {
        if (this._error)
          return this._error;
        const error = new ZodError(ctx.common.issues);
        this._error = error;
        return this._error;
      }
    };
  }
};
function processCreateParams(params) {
  if (!params)
    return {};
  const { errorMap: errorMap2, invalid_type_error, required_error, description } = params;
  if (errorMap2 && (invalid_type_error || required_error)) {
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  }
  if (errorMap2)
    return { errorMap: errorMap2, description };
  const customMap = (iss, ctx) => {
    if (iss.code !== "invalid_type")
      return { message: ctx.defaultError };
    if (typeof ctx.data === "undefined") {
      return { message: required_error !== null && required_error !== void 0 ? required_error : ctx.defaultError };
    }
    return { message: invalid_type_error !== null && invalid_type_error !== void 0 ? invalid_type_error : ctx.defaultError };
  };
  return { errorMap: customMap, description };
}
var ZodType = class {
  constructor(def) {
    this.spa = this.safeParseAsync;
    this._def = def;
    this.parse = this.parse.bind(this);
    this.safeParse = this.safeParse.bind(this);
    this.parseAsync = this.parseAsync.bind(this);
    this.safeParseAsync = this.safeParseAsync.bind(this);
    this.spa = this.spa.bind(this);
    this.refine = this.refine.bind(this);
    this.refinement = this.refinement.bind(this);
    this.superRefine = this.superRefine.bind(this);
    this.optional = this.optional.bind(this);
    this.nullable = this.nullable.bind(this);
    this.nullish = this.nullish.bind(this);
    this.array = this.array.bind(this);
    this.promise = this.promise.bind(this);
    this.or = this.or.bind(this);
    this.and = this.and.bind(this);
    this.transform = this.transform.bind(this);
    this.brand = this.brand.bind(this);
    this.default = this.default.bind(this);
    this.catch = this.catch.bind(this);
    this.describe = this.describe.bind(this);
    this.pipe = this.pipe.bind(this);
    this.readonly = this.readonly.bind(this);
    this.isNullable = this.isNullable.bind(this);
    this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(input3) {
    return getParsedType(input3.data);
  }
  _getOrReturnCtx(input3, ctx) {
    return ctx || {
      common: input3.parent.common,
      data: input3.data,
      parsedType: getParsedType(input3.data),
      schemaErrorMap: this._def.errorMap,
      path: input3.path,
      parent: input3.parent
    };
  }
  _processInputParams(input3) {
    return {
      status: new ParseStatus(),
      ctx: {
        common: input3.parent.common,
        data: input3.data,
        parsedType: getParsedType(input3.data),
        schemaErrorMap: this._def.errorMap,
        path: input3.path,
        parent: input3.parent
      }
    };
  }
  _parseSync(input3) {
    const result = this._parse(input3);
    if (isAsync(result)) {
      throw new Error("Synchronous parse encountered promise.");
    }
    return result;
  }
  _parseAsync(input3) {
    const result = this._parse(input3);
    return Promise.resolve(result);
  }
  parse(data, params) {
    const result = this.safeParse(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  safeParse(data, params) {
    var _a;
    const ctx = {
      common: {
        issues: [],
        async: (_a = params === null || params === void 0 ? void 0 : params.async) !== null && _a !== void 0 ? _a : false,
        contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap
      },
      path: (params === null || params === void 0 ? void 0 : params.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const result = this._parseSync({ data, path: ctx.path, parent: ctx });
    return handleResult(ctx, result);
  }
  async parseAsync(data, params) {
    const result = await this.safeParseAsync(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  async safeParseAsync(data, params) {
    const ctx = {
      common: {
        issues: [],
        contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap,
        async: true
      },
      path: (params === null || params === void 0 ? void 0 : params.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
    const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
    return handleResult(ctx, result);
  }
  refine(check, message) {
    const getIssueProperties = (val) => {
      if (typeof message === "string" || typeof message === "undefined") {
        return { message };
      } else if (typeof message === "function") {
        return message(val);
      } else {
        return message;
      }
    };
    return this._refinement((val, ctx) => {
      const result = check(val);
      const setError = () => ctx.addIssue({
        code: ZodIssueCode.custom,
        ...getIssueProperties(val)
      });
      if (typeof Promise !== "undefined" && result instanceof Promise) {
        return result.then((data) => {
          if (!data) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
      if (!result) {
        setError();
        return false;
      } else {
        return true;
      }
    });
  }
  refinement(check, refinementData) {
    return this._refinement((val, ctx) => {
      if (!check(val)) {
        ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
        return false;
      } else {
        return true;
      }
    });
  }
  _refinement(refinement) {
    return new ZodEffects({
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "refinement", refinement }
    });
  }
  superRefine(refinement) {
    return this._refinement(refinement);
  }
  optional() {
    return ZodOptional.create(this, this._def);
  }
  nullable() {
    return ZodNullable.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ZodArray.create(this, this._def);
  }
  promise() {
    return ZodPromise.create(this, this._def);
  }
  or(option) {
    return ZodUnion.create([this, option], this._def);
  }
  and(incoming) {
    return ZodIntersection.create(this, incoming, this._def);
  }
  transform(transform) {
    return new ZodEffects({
      ...processCreateParams(this._def),
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "transform", transform }
    });
  }
  default(def) {
    const defaultValueFunc = typeof def === "function" ? def : () => def;
    return new ZodDefault({
      ...processCreateParams(this._def),
      innerType: this,
      defaultValue: defaultValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodDefault
    });
  }
  brand() {
    return new ZodBranded({
      typeName: ZodFirstPartyTypeKind.ZodBranded,
      type: this,
      ...processCreateParams(this._def)
    });
  }
  catch(def) {
    const catchValueFunc = typeof def === "function" ? def : () => def;
    return new ZodCatch({
      ...processCreateParams(this._def),
      innerType: this,
      catchValue: catchValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodCatch
    });
  }
  describe(description) {
    const This = this.constructor;
    return new This({
      ...this._def,
      description
    });
  }
  pipe(target) {
    return ZodPipeline.create(this, target);
  }
  readonly() {
    return ZodReadonly.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
};
var cuidRegex = /^c[^\s-]{8,}$/i;
var cuid2Regex = /^[a-z][a-z0-9]*$/;
var ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/;
var uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
var emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
var _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
var emojiRegex;
var ipv4Regex = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/;
var ipv6Regex = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
var datetimeRegex = (args) => {
  if (args.precision) {
    if (args.offset) {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${args.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`);
    } else {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${args.precision}}Z$`);
    }
  } else if (args.precision === 0) {
    if (args.offset) {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$`);
    } else {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$`);
    }
  } else {
    if (args.offset) {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$`);
    } else {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$`);
    }
  }
};
function isValidIP(ip, version) {
  if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
    return true;
  }
  return false;
}
var ZodString = class extends ZodType {
  _parse(input3) {
    if (this._def.coerce) {
      input3.data = String(input3.data);
    }
    const parsedType = this._getType(input3);
    if (parsedType !== ZodParsedType.string) {
      const ctx2 = this._getOrReturnCtx(input3);
      addIssueToContext(
        ctx2,
        {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.string,
          received: ctx2.parsedType
        }
        //
      );
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input3.data.length < check.value) {
          ctx = this._getOrReturnCtx(input3, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input3.data.length > check.value) {
          ctx = this._getOrReturnCtx(input3, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "length") {
        const tooBig = input3.data.length > check.value;
        const tooSmall = input3.data.length < check.value;
        if (tooBig || tooSmall) {
          ctx = this._getOrReturnCtx(input3, ctx);
          if (tooBig) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          } else if (tooSmall) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          }
          status.dirty();
        }
      } else if (check.kind === "email") {
        if (!emailRegex.test(input3.data)) {
          ctx = this._getOrReturnCtx(input3, ctx);
          addIssueToContext(ctx, {
            validation: "email",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "emoji") {
        if (!emojiRegex) {
          emojiRegex = new RegExp(_emojiRegex, "u");
        }
        if (!emojiRegex.test(input3.data)) {
          ctx = this._getOrReturnCtx(input3, ctx);
          addIssueToContext(ctx, {
            validation: "emoji",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "uuid") {
        if (!uuidRegex.test(input3.data)) {
          ctx = this._getOrReturnCtx(input3, ctx);
          addIssueToContext(ctx, {
            validation: "uuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid") {
        if (!cuidRegex.test(input3.data)) {
          ctx = this._getOrReturnCtx(input3, ctx);
          addIssueToContext(ctx, {
            validation: "cuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid2") {
        if (!cuid2Regex.test(input3.data)) {
          ctx = this._getOrReturnCtx(input3, ctx);
          addIssueToContext(ctx, {
            validation: "cuid2",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ulid") {
        if (!ulidRegex.test(input3.data)) {
          ctx = this._getOrReturnCtx(input3, ctx);
          addIssueToContext(ctx, {
            validation: "ulid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "url") {
        try {
          new URL(input3.data);
        } catch (_a) {
          ctx = this._getOrReturnCtx(input3, ctx);
          addIssueToContext(ctx, {
            validation: "url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "regex") {
        check.regex.lastIndex = 0;
        const testResult = check.regex.test(input3.data);
        if (!testResult) {
          ctx = this._getOrReturnCtx(input3, ctx);
          addIssueToContext(ctx, {
            validation: "regex",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "trim") {
        input3.data = input3.data.trim();
      } else if (check.kind === "includes") {
        if (!input3.data.includes(check.value, check.position)) {
          ctx = this._getOrReturnCtx(input3, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { includes: check.value, position: check.position },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "toLowerCase") {
        input3.data = input3.data.toLowerCase();
      } else if (check.kind === "toUpperCase") {
        input3.data = input3.data.toUpperCase();
      } else if (check.kind === "startsWith") {
        if (!input3.data.startsWith(check.value)) {
          ctx = this._getOrReturnCtx(input3, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { startsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "endsWith") {
        if (!input3.data.endsWith(check.value)) {
          ctx = this._getOrReturnCtx(input3, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { endsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "datetime") {
        const regex = datetimeRegex(check);
        if (!regex.test(input3.data)) {
          ctx = this._getOrReturnCtx(input3, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "datetime",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ip") {
        if (!isValidIP(input3.data, check.version)) {
          ctx = this._getOrReturnCtx(input3, ctx);
          addIssueToContext(ctx, {
            validation: "ip",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input3.data };
  }
  _regex(regex, validation, message) {
    return this.refinement((data) => regex.test(data), {
      validation,
      code: ZodIssueCode.invalid_string,
      ...errorUtil.errToObj(message)
    });
  }
  _addCheck(check) {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  email(message) {
    return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
  }
  url(message) {
    return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
  }
  emoji(message) {
    return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
  }
  uuid(message) {
    return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
  }
  cuid(message) {
    return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
  }
  cuid2(message) {
    return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
  }
  ulid(message) {
    return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
  }
  ip(options) {
    return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
  }
  datetime(options) {
    var _a;
    if (typeof options === "string") {
      return this._addCheck({
        kind: "datetime",
        precision: null,
        offset: false,
        message: options
      });
    }
    return this._addCheck({
      kind: "datetime",
      precision: typeof (options === null || options === void 0 ? void 0 : options.precision) === "undefined" ? null : options === null || options === void 0 ? void 0 : options.precision,
      offset: (_a = options === null || options === void 0 ? void 0 : options.offset) !== null && _a !== void 0 ? _a : false,
      ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)
    });
  }
  regex(regex, message) {
    return this._addCheck({
      kind: "regex",
      regex,
      ...errorUtil.errToObj(message)
    });
  }
  includes(value, options) {
    return this._addCheck({
      kind: "includes",
      value,
      position: options === null || options === void 0 ? void 0 : options.position,
      ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)
    });
  }
  startsWith(value, message) {
    return this._addCheck({
      kind: "startsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  endsWith(value, message) {
    return this._addCheck({
      kind: "endsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  min(minLength, message) {
    return this._addCheck({
      kind: "min",
      value: minLength,
      ...errorUtil.errToObj(message)
    });
  }
  max(maxLength, message) {
    return this._addCheck({
      kind: "max",
      value: maxLength,
      ...errorUtil.errToObj(message)
    });
  }
  length(len, message) {
    return this._addCheck({
      kind: "length",
      value: len,
      ...errorUtil.errToObj(message)
    });
  }
  /**
   * @deprecated Use z.string().min(1) instead.
   * @see {@link ZodString.min}
   */
  nonempty(message) {
    return this.min(1, errorUtil.errToObj(message));
  }
  trim() {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((ch) => ch.kind === "datetime");
  }
  get isEmail() {
    return !!this._def.checks.find((ch) => ch.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((ch) => ch.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((ch) => ch.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((ch) => ch.kind === "uuid");
  }
  get isCUID() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((ch) => ch.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((ch) => ch.kind === "ip");
  }
  get minLength() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxLength() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodString.create = (params) => {
  var _a;
  return new ZodString({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodString,
    coerce: (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false,
    ...processCreateParams(params)
  });
};
function floatSafeRemainder(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepDecCount = (step.toString().split(".")[1] || "").length;
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / Math.pow(10, decCount);
}
var ZodNumber = class extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
    this.step = this.multipleOf;
  }
  _parse(input3) {
    if (this._def.coerce) {
      input3.data = Number(input3.data);
    }
    const parsedType = this._getType(input3);
    if (parsedType !== ZodParsedType.number) {
      const ctx2 = this._getOrReturnCtx(input3);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.number,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "int") {
        if (!util.isInteger(input3.data)) {
          ctx = this._getOrReturnCtx(input3, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: "integer",
            received: "float",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "min") {
        const tooSmall = check.inclusive ? input3.data < check.value : input3.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input3, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input3.data > check.value : input3.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input3, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (floatSafeRemainder(input3.data, check.value) !== 0) {
          ctx = this._getOrReturnCtx(input3, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "finite") {
        if (!Number.isFinite(input3.data)) {
          ctx = this._getOrReturnCtx(input3, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_finite,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input3.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new ZodNumber({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new ZodNumber({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  int(message) {
    return this._addCheck({
      kind: "int",
      message: errorUtil.toString(message)
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  finite(message) {
    return this._addCheck({
      kind: "finite",
      message: errorUtil.toString(message)
    });
  }
  safe(message) {
    return this._addCheck({
      kind: "min",
      inclusive: true,
      value: Number.MIN_SAFE_INTEGER,
      message: errorUtil.toString(message)
    })._addCheck({
      kind: "max",
      inclusive: true,
      value: Number.MAX_SAFE_INTEGER,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
  get isInt() {
    return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
  }
  get isFinite() {
    let max = null, min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
        return true;
      } else if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      } else if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return Number.isFinite(min) && Number.isFinite(max);
  }
};
ZodNumber.create = (params) => {
  return new ZodNumber({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodNumber,
    coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
    ...processCreateParams(params)
  });
};
var ZodBigInt = class extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
  }
  _parse(input3) {
    if (this._def.coerce) {
      input3.data = BigInt(input3.data);
    }
    const parsedType = this._getType(input3);
    if (parsedType !== ZodParsedType.bigint) {
      const ctx2 = this._getOrReturnCtx(input3);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.bigint,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        const tooSmall = check.inclusive ? input3.data < check.value : input3.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input3, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            type: "bigint",
            minimum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input3.data > check.value : input3.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input3, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            type: "bigint",
            maximum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (input3.data % check.value !== BigInt(0)) {
          ctx = this._getOrReturnCtx(input3, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input3.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new ZodBigInt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new ZodBigInt({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodBigInt.create = (params) => {
  var _a;
  return new ZodBigInt({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodBigInt,
    coerce: (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false,
    ...processCreateParams(params)
  });
};
var ZodBoolean = class extends ZodType {
  _parse(input3) {
    if (this._def.coerce) {
      input3.data = Boolean(input3.data);
    }
    const parsedType = this._getType(input3);
    if (parsedType !== ZodParsedType.boolean) {
      const ctx = this._getOrReturnCtx(input3);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.boolean,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input3.data);
  }
};
ZodBoolean.create = (params) => {
  return new ZodBoolean({
    typeName: ZodFirstPartyTypeKind.ZodBoolean,
    coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
    ...processCreateParams(params)
  });
};
var ZodDate = class extends ZodType {
  _parse(input3) {
    if (this._def.coerce) {
      input3.data = new Date(input3.data);
    }
    const parsedType = this._getType(input3);
    if (parsedType !== ZodParsedType.date) {
      const ctx2 = this._getOrReturnCtx(input3);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.date,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    if (isNaN(input3.data.getTime())) {
      const ctx2 = this._getOrReturnCtx(input3);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_date
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input3.data.getTime() < check.value) {
          ctx = this._getOrReturnCtx(input3, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            message: check.message,
            inclusive: true,
            exact: false,
            minimum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input3.data.getTime() > check.value) {
          ctx = this._getOrReturnCtx(input3, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            message: check.message,
            inclusive: true,
            exact: false,
            maximum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return {
      status: status.value,
      value: new Date(input3.data.getTime())
    };
  }
  _addCheck(check) {
    return new ZodDate({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  min(minDate, message) {
    return this._addCheck({
      kind: "min",
      value: minDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  max(maxDate, message) {
    return this._addCheck({
      kind: "max",
      value: maxDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  get minDate() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min != null ? new Date(min) : null;
  }
  get maxDate() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max != null ? new Date(max) : null;
  }
};
ZodDate.create = (params) => {
  return new ZodDate({
    checks: [],
    coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
    typeName: ZodFirstPartyTypeKind.ZodDate,
    ...processCreateParams(params)
  });
};
var ZodSymbol = class extends ZodType {
  _parse(input3) {
    const parsedType = this._getType(input3);
    if (parsedType !== ZodParsedType.symbol) {
      const ctx = this._getOrReturnCtx(input3);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.symbol,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input3.data);
  }
};
ZodSymbol.create = (params) => {
  return new ZodSymbol({
    typeName: ZodFirstPartyTypeKind.ZodSymbol,
    ...processCreateParams(params)
  });
};
var ZodUndefined = class extends ZodType {
  _parse(input3) {
    const parsedType = this._getType(input3);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input3);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.undefined,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input3.data);
  }
};
ZodUndefined.create = (params) => {
  return new ZodUndefined({
    typeName: ZodFirstPartyTypeKind.ZodUndefined,
    ...processCreateParams(params)
  });
};
var ZodNull = class extends ZodType {
  _parse(input3) {
    const parsedType = this._getType(input3);
    if (parsedType !== ZodParsedType.null) {
      const ctx = this._getOrReturnCtx(input3);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.null,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input3.data);
  }
};
ZodNull.create = (params) => {
  return new ZodNull({
    typeName: ZodFirstPartyTypeKind.ZodNull,
    ...processCreateParams(params)
  });
};
var ZodAny = class extends ZodType {
  constructor() {
    super(...arguments);
    this._any = true;
  }
  _parse(input3) {
    return OK(input3.data);
  }
};
ZodAny.create = (params) => {
  return new ZodAny({
    typeName: ZodFirstPartyTypeKind.ZodAny,
    ...processCreateParams(params)
  });
};
var ZodUnknown = class extends ZodType {
  constructor() {
    super(...arguments);
    this._unknown = true;
  }
  _parse(input3) {
    return OK(input3.data);
  }
};
ZodUnknown.create = (params) => {
  return new ZodUnknown({
    typeName: ZodFirstPartyTypeKind.ZodUnknown,
    ...processCreateParams(params)
  });
};
var ZodNever = class extends ZodType {
  _parse(input3) {
    const ctx = this._getOrReturnCtx(input3);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.never,
      received: ctx.parsedType
    });
    return INVALID;
  }
};
ZodNever.create = (params) => {
  return new ZodNever({
    typeName: ZodFirstPartyTypeKind.ZodNever,
    ...processCreateParams(params)
  });
};
var ZodVoid = class extends ZodType {
  _parse(input3) {
    const parsedType = this._getType(input3);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input3);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.void,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input3.data);
  }
};
ZodVoid.create = (params) => {
  return new ZodVoid({
    typeName: ZodFirstPartyTypeKind.ZodVoid,
    ...processCreateParams(params)
  });
};
var ZodArray = class extends ZodType {
  _parse(input3) {
    const { ctx, status } = this._processInputParams(input3);
    const def = this._def;
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (def.exactLength !== null) {
      const tooBig = ctx.data.length > def.exactLength.value;
      const tooSmall = ctx.data.length < def.exactLength.value;
      if (tooBig || tooSmall) {
        addIssueToContext(ctx, {
          code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
          minimum: tooSmall ? def.exactLength.value : void 0,
          maximum: tooBig ? def.exactLength.value : void 0,
          type: "array",
          inclusive: true,
          exact: true,
          message: def.exactLength.message
        });
        status.dirty();
      }
    }
    if (def.minLength !== null) {
      if (ctx.data.length < def.minLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.minLength.message
        });
        status.dirty();
      }
    }
    if (def.maxLength !== null) {
      if (ctx.data.length > def.maxLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.maxLength.message
        });
        status.dirty();
      }
    }
    if (ctx.common.async) {
      return Promise.all([...ctx.data].map((item, i) => {
        return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
      })).then((result2) => {
        return ParseStatus.mergeArray(status, result2);
      });
    }
    const result = [...ctx.data].map((item, i) => {
      return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
    });
    return ParseStatus.mergeArray(status, result);
  }
  get element() {
    return this._def.type;
  }
  min(minLength, message) {
    return new ZodArray({
      ...this._def,
      minLength: { value: minLength, message: errorUtil.toString(message) }
    });
  }
  max(maxLength, message) {
    return new ZodArray({
      ...this._def,
      maxLength: { value: maxLength, message: errorUtil.toString(message) }
    });
  }
  length(len, message) {
    return new ZodArray({
      ...this._def,
      exactLength: { value: len, message: errorUtil.toString(message) }
    });
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodArray.create = (schema, params) => {
  return new ZodArray({
    type: schema,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: ZodFirstPartyTypeKind.ZodArray,
    ...processCreateParams(params)
  });
};
function deepPartialify(schema) {
  if (schema instanceof ZodObject) {
    const newShape = {};
    for (const key in schema.shape) {
      const fieldSchema = schema.shape[key];
      newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
    }
    return new ZodObject({
      ...schema._def,
      shape: () => newShape
    });
  } else if (schema instanceof ZodArray) {
    return new ZodArray({
      ...schema._def,
      type: deepPartialify(schema.element)
    });
  } else if (schema instanceof ZodOptional) {
    return ZodOptional.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodNullable) {
    return ZodNullable.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodTuple) {
    return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
  } else {
    return schema;
  }
}
var ZodObject = class extends ZodType {
  constructor() {
    super(...arguments);
    this._cached = null;
    this.nonstrict = this.passthrough;
    this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const shape = this._def.shape();
    const keys = util.objectKeys(shape);
    return this._cached = { shape, keys };
  }
  _parse(input3) {
    const parsedType = this._getType(input3);
    if (parsedType !== ZodParsedType.object) {
      const ctx2 = this._getOrReturnCtx(input3);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const { status, ctx } = this._processInputParams(input3);
    const { shape, keys: shapeKeys } = this._getCached();
    const extraKeys = [];
    if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
      for (const key in ctx.data) {
        if (!shapeKeys.includes(key)) {
          extraKeys.push(key);
        }
      }
    }
    const pairs = [];
    for (const key of shapeKeys) {
      const keyValidator = shape[key];
      const value = ctx.data[key];
      pairs.push({
        key: { status: "valid", value: key },
        value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (this._def.catchall instanceof ZodNever) {
      const unknownKeys = this._def.unknownKeys;
      if (unknownKeys === "passthrough") {
        for (const key of extraKeys) {
          pairs.push({
            key: { status: "valid", value: key },
            value: { status: "valid", value: ctx.data[key] }
          });
        }
      } else if (unknownKeys === "strict") {
        if (extraKeys.length > 0) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.unrecognized_keys,
            keys: extraKeys
          });
          status.dirty();
        }
      } else if (unknownKeys === "strip")
        ;
      else {
        throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
      }
    } else {
      const catchall = this._def.catchall;
      for (const key of extraKeys) {
        const value = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: catchall._parse(
            new ParseInputLazyPath(ctx, value, ctx.path, key)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: key in ctx.data
        });
      }
    }
    if (ctx.common.async) {
      return Promise.resolve().then(async () => {
        const syncPairs = [];
        for (const pair of pairs) {
          const key = await pair.key;
          syncPairs.push({
            key,
            value: await pair.value,
            alwaysSet: pair.alwaysSet
          });
        }
        return syncPairs;
      }).then((syncPairs) => {
        return ParseStatus.mergeObjectSync(status, syncPairs);
      });
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get shape() {
    return this._def.shape();
  }
  strict(message) {
    errorUtil.errToObj;
    return new ZodObject({
      ...this._def,
      unknownKeys: "strict",
      ...message !== void 0 ? {
        errorMap: (issue, ctx) => {
          var _a, _b, _c, _d;
          const defaultError = (_c = (_b = (_a = this._def).errorMap) === null || _b === void 0 ? void 0 : _b.call(_a, issue, ctx).message) !== null && _c !== void 0 ? _c : ctx.defaultError;
          if (issue.code === "unrecognized_keys")
            return {
              message: (_d = errorUtil.errToObj(message).message) !== null && _d !== void 0 ? _d : defaultError
            };
          return {
            message: defaultError
          };
        }
      } : {}
    });
  }
  strip() {
    return new ZodObject({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new ZodObject({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(augmentation) {
    return new ZodObject({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...augmentation
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(merging) {
    const merged = new ZodObject({
      unknownKeys: merging._def.unknownKeys,
      catchall: merging._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...merging._def.shape()
      }),
      typeName: ZodFirstPartyTypeKind.ZodObject
    });
    return merged;
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(key, schema) {
    return this.augment({ [key]: schema });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(index3) {
    return new ZodObject({
      ...this._def,
      catchall: index3
    });
  }
  pick(mask) {
    const shape = {};
    util.objectKeys(mask).forEach((key) => {
      if (mask[key] && this.shape[key]) {
        shape[key] = this.shape[key];
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  omit(mask) {
    const shape = {};
    util.objectKeys(this.shape).forEach((key) => {
      if (!mask[key]) {
        shape[key] = this.shape[key];
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return deepPartialify(this);
  }
  partial(mask) {
    const newShape = {};
    util.objectKeys(this.shape).forEach((key) => {
      const fieldSchema = this.shape[key];
      if (mask && !mask[key]) {
        newShape[key] = fieldSchema;
      } else {
        newShape[key] = fieldSchema.optional();
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  required(mask) {
    const newShape = {};
    util.objectKeys(this.shape).forEach((key) => {
      if (mask && !mask[key]) {
        newShape[key] = this.shape[key];
      } else {
        const fieldSchema = this.shape[key];
        let newField = fieldSchema;
        while (newField instanceof ZodOptional) {
          newField = newField._def.innerType;
        }
        newShape[key] = newField;
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  keyof() {
    return createZodEnum(util.objectKeys(this.shape));
  }
};
ZodObject.create = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.strictCreate = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strict",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.lazycreate = (shape, params) => {
  return new ZodObject({
    shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
var ZodUnion = class extends ZodType {
  _parse(input3) {
    const { ctx } = this._processInputParams(input3);
    const options = this._def.options;
    function handleResults(results) {
      for (const result of results) {
        if (result.result.status === "valid") {
          return result.result;
        }
      }
      for (const result of results) {
        if (result.result.status === "dirty") {
          ctx.common.issues.push(...result.ctx.common.issues);
          return result.result;
        }
      }
      const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return Promise.all(options.map(async (option) => {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          }),
          ctx: childCtx
        };
      })).then(handleResults);
    } else {
      let dirty = void 0;
      const issues = [];
      for (const option of options) {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        const result = option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: childCtx
        });
        if (result.status === "valid") {
          return result;
        } else if (result.status === "dirty" && !dirty) {
          dirty = { result, ctx: childCtx };
        }
        if (childCtx.common.issues.length) {
          issues.push(childCtx.common.issues);
        }
      }
      if (dirty) {
        ctx.common.issues.push(...dirty.ctx.common.issues);
        return dirty.result;
      }
      const unionErrors = issues.map((issues2) => new ZodError(issues2));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
  }
  get options() {
    return this._def.options;
  }
};
ZodUnion.create = (types, params) => {
  return new ZodUnion({
    options: types,
    typeName: ZodFirstPartyTypeKind.ZodUnion,
    ...processCreateParams(params)
  });
};
var getDiscriminator = (type) => {
  if (type instanceof ZodLazy) {
    return getDiscriminator(type.schema);
  } else if (type instanceof ZodEffects) {
    return getDiscriminator(type.innerType());
  } else if (type instanceof ZodLiteral) {
    return [type.value];
  } else if (type instanceof ZodEnum) {
    return type.options;
  } else if (type instanceof ZodNativeEnum) {
    return Object.keys(type.enum);
  } else if (type instanceof ZodDefault) {
    return getDiscriminator(type._def.innerType);
  } else if (type instanceof ZodUndefined) {
    return [void 0];
  } else if (type instanceof ZodNull) {
    return [null];
  } else {
    return null;
  }
};
var ZodDiscriminatedUnion = class extends ZodType {
  _parse(input3) {
    const { ctx } = this._processInputParams(input3);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const discriminator = this.discriminator;
    const discriminatorValue = ctx.data[discriminator];
    const option = this.optionsMap.get(discriminatorValue);
    if (!option) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union_discriminator,
        options: Array.from(this.optionsMap.keys()),
        path: [discriminator]
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return option._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    } else {
      return option._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    }
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(discriminator, options, params) {
    const optionsMap = /* @__PURE__ */ new Map();
    for (const type of options) {
      const discriminatorValues = getDiscriminator(type.shape[discriminator]);
      if (!discriminatorValues) {
        throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
      }
      for (const value of discriminatorValues) {
        if (optionsMap.has(value)) {
          throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
        }
        optionsMap.set(value, type);
      }
    }
    return new ZodDiscriminatedUnion({
      typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
      discriminator,
      options,
      optionsMap,
      ...processCreateParams(params)
    });
  }
};
function mergeValues(a, b) {
  const aType = getParsedType(a);
  const bType = getParsedType(b);
  if (a === b) {
    return { valid: true, data: a };
  } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    const bKeys = util.objectKeys(b);
    const sharedKeys = util.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a, ...b };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a[key], b[key]);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a.length !== b.length) {
      return { valid: false };
    }
    const newArray = [];
    for (let index3 = 0; index3 < a.length; index3++) {
      const itemA = a[index3];
      const itemB = b[index3];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b) {
    return { valid: true, data: a };
  } else {
    return { valid: false };
  }
}
var ZodIntersection = class extends ZodType {
  _parse(input3) {
    const { status, ctx } = this._processInputParams(input3);
    const handleParsed = (parsedLeft, parsedRight) => {
      if (isAborted(parsedLeft) || isAborted(parsedRight)) {
        return INVALID;
      }
      const merged = mergeValues(parsedLeft.value, parsedRight.value);
      if (!merged.valid) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_intersection_types
        });
        return INVALID;
      }
      if (isDirty(parsedLeft) || isDirty(parsedRight)) {
        status.dirty();
      }
      return { status: status.value, value: merged.data };
    };
    if (ctx.common.async) {
      return Promise.all([
        this._def.left._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }),
        this._def.right._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        })
      ]).then(([left, right]) => handleParsed(left, right));
    } else {
      return handleParsed(this._def.left._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }), this._def.right._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }));
    }
  }
};
ZodIntersection.create = (left, right, params) => {
  return new ZodIntersection({
    left,
    right,
    typeName: ZodFirstPartyTypeKind.ZodIntersection,
    ...processCreateParams(params)
  });
};
var ZodTuple = class extends ZodType {
  _parse(input3) {
    const { status, ctx } = this._processInputParams(input3);
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (ctx.data.length < this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      return INVALID;
    }
    const rest = this._def.rest;
    if (!rest && ctx.data.length > this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        maximum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      status.dirty();
    }
    const items = [...ctx.data].map((item, itemIndex) => {
      const schema = this._def.items[itemIndex] || this._def.rest;
      if (!schema)
        return null;
      return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
    }).filter((x) => !!x);
    if (ctx.common.async) {
      return Promise.all(items).then((results) => {
        return ParseStatus.mergeArray(status, results);
      });
    } else {
      return ParseStatus.mergeArray(status, items);
    }
  }
  get items() {
    return this._def.items;
  }
  rest(rest) {
    return new ZodTuple({
      ...this._def,
      rest
    });
  }
};
ZodTuple.create = (schemas, params) => {
  if (!Array.isArray(schemas)) {
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  }
  return new ZodTuple({
    items: schemas,
    typeName: ZodFirstPartyTypeKind.ZodTuple,
    rest: null,
    ...processCreateParams(params)
  });
};
var ZodRecord = class extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input3) {
    const { status, ctx } = this._processInputParams(input3);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const pairs = [];
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    for (const key in ctx.data) {
      pairs.push({
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
        value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key))
      });
    }
    if (ctx.common.async) {
      return ParseStatus.mergeObjectAsync(status, pairs);
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get element() {
    return this._def.valueType;
  }
  static create(first, second, third) {
    if (second instanceof ZodType) {
      return new ZodRecord({
        keyType: first,
        valueType: second,
        typeName: ZodFirstPartyTypeKind.ZodRecord,
        ...processCreateParams(third)
      });
    }
    return new ZodRecord({
      keyType: ZodString.create(),
      valueType: first,
      typeName: ZodFirstPartyTypeKind.ZodRecord,
      ...processCreateParams(second)
    });
  }
};
var ZodMap = class extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input3) {
    const { status, ctx } = this._processInputParams(input3);
    if (ctx.parsedType !== ZodParsedType.map) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.map,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    const pairs = [...ctx.data.entries()].map(([key, value], index3) => {
      return {
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index3, "key"])),
        value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index3, "value"]))
      };
    });
    if (ctx.common.async) {
      const finalMap = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          if (key.status === "aborted" || value.status === "aborted") {
            return INVALID;
          }
          if (key.status === "dirty" || value.status === "dirty") {
            status.dirty();
          }
          finalMap.set(key.value, value.value);
        }
        return { status: status.value, value: finalMap };
      });
    } else {
      const finalMap = /* @__PURE__ */ new Map();
      for (const pair of pairs) {
        const key = pair.key;
        const value = pair.value;
        if (key.status === "aborted" || value.status === "aborted") {
          return INVALID;
        }
        if (key.status === "dirty" || value.status === "dirty") {
          status.dirty();
        }
        finalMap.set(key.value, value.value);
      }
      return { status: status.value, value: finalMap };
    }
  }
};
ZodMap.create = (keyType, valueType, params) => {
  return new ZodMap({
    valueType,
    keyType,
    typeName: ZodFirstPartyTypeKind.ZodMap,
    ...processCreateParams(params)
  });
};
var ZodSet = class extends ZodType {
  _parse(input3) {
    const { status, ctx } = this._processInputParams(input3);
    if (ctx.parsedType !== ZodParsedType.set) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.set,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const def = this._def;
    if (def.minSize !== null) {
      if (ctx.data.size < def.minSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.minSize.message
        });
        status.dirty();
      }
    }
    if (def.maxSize !== null) {
      if (ctx.data.size > def.maxSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.maxSize.message
        });
        status.dirty();
      }
    }
    const valueType = this._def.valueType;
    function finalizeSet(elements2) {
      const parsedSet = /* @__PURE__ */ new Set();
      for (const element of elements2) {
        if (element.status === "aborted")
          return INVALID;
        if (element.status === "dirty")
          status.dirty();
        parsedSet.add(element.value);
      }
      return { status: status.value, value: parsedSet };
    }
    const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
    if (ctx.common.async) {
      return Promise.all(elements).then((elements2) => finalizeSet(elements2));
    } else {
      return finalizeSet(elements);
    }
  }
  min(minSize, message) {
    return new ZodSet({
      ...this._def,
      minSize: { value: minSize, message: errorUtil.toString(message) }
    });
  }
  max(maxSize, message) {
    return new ZodSet({
      ...this._def,
      maxSize: { value: maxSize, message: errorUtil.toString(message) }
    });
  }
  size(size, message) {
    return this.min(size, message).max(size, message);
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodSet.create = (valueType, params) => {
  return new ZodSet({
    valueType,
    minSize: null,
    maxSize: null,
    typeName: ZodFirstPartyTypeKind.ZodSet,
    ...processCreateParams(params)
  });
};
var ZodFunction = class extends ZodType {
  constructor() {
    super(...arguments);
    this.validate = this.implement;
  }
  _parse(input3) {
    const { ctx } = this._processInputParams(input3);
    if (ctx.parsedType !== ZodParsedType.function) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.function,
        received: ctx.parsedType
      });
      return INVALID;
    }
    function makeArgsIssue(args, error) {
      return makeIssue({
        data: args,
        path: ctx.path,
        errorMaps: [
          ctx.common.contextualErrorMap,
          ctx.schemaErrorMap,
          getErrorMap(),
          errorMap
        ].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_arguments,
          argumentsError: error
        }
      });
    }
    function makeReturnsIssue(returns, error) {
      return makeIssue({
        data: returns,
        path: ctx.path,
        errorMaps: [
          ctx.common.contextualErrorMap,
          ctx.schemaErrorMap,
          getErrorMap(),
          errorMap
        ].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_return_type,
          returnTypeError: error
        }
      });
    }
    const params = { errorMap: ctx.common.contextualErrorMap };
    const fn = ctx.data;
    if (this._def.returns instanceof ZodPromise) {
      const me = this;
      return OK(async function(...args) {
        const error = new ZodError([]);
        const parsedArgs = await me._def.args.parseAsync(args, params).catch((e) => {
          error.addIssue(makeArgsIssue(args, e));
          throw error;
        });
        const result = await Reflect.apply(fn, this, parsedArgs);
        const parsedReturns = await me._def.returns._def.type.parseAsync(result, params).catch((e) => {
          error.addIssue(makeReturnsIssue(result, e));
          throw error;
        });
        return parsedReturns;
      });
    } else {
      const me = this;
      return OK(function(...args) {
        const parsedArgs = me._def.args.safeParse(args, params);
        if (!parsedArgs.success) {
          throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
        }
        const result = Reflect.apply(fn, this, parsedArgs.data);
        const parsedReturns = me._def.returns.safeParse(result, params);
        if (!parsedReturns.success) {
          throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
        }
        return parsedReturns.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...items) {
    return new ZodFunction({
      ...this._def,
      args: ZodTuple.create(items).rest(ZodUnknown.create())
    });
  }
  returns(returnType) {
    return new ZodFunction({
      ...this._def,
      returns: returnType
    });
  }
  implement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  strictImplement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  static create(args, returns, params) {
    return new ZodFunction({
      args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
      returns: returns || ZodUnknown.create(),
      typeName: ZodFirstPartyTypeKind.ZodFunction,
      ...processCreateParams(params)
    });
  }
};
var ZodLazy = class extends ZodType {
  get schema() {
    return this._def.getter();
  }
  _parse(input3) {
    const { ctx } = this._processInputParams(input3);
    const lazySchema = this._def.getter();
    return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
  }
};
ZodLazy.create = (getter, params) => {
  return new ZodLazy({
    getter,
    typeName: ZodFirstPartyTypeKind.ZodLazy,
    ...processCreateParams(params)
  });
};
var ZodLiteral = class extends ZodType {
  _parse(input3) {
    if (input3.data !== this._def.value) {
      const ctx = this._getOrReturnCtx(input3);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_literal,
        expected: this._def.value
      });
      return INVALID;
    }
    return { status: "valid", value: input3.data };
  }
  get value() {
    return this._def.value;
  }
};
ZodLiteral.create = (value, params) => {
  return new ZodLiteral({
    value,
    typeName: ZodFirstPartyTypeKind.ZodLiteral,
    ...processCreateParams(params)
  });
};
function createZodEnum(values, params) {
  return new ZodEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodEnum,
    ...processCreateParams(params)
  });
}
var ZodEnum = class extends ZodType {
  _parse(input3) {
    if (typeof input3.data !== "string") {
      const ctx = this._getOrReturnCtx(input3);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (this._def.values.indexOf(input3.data) === -1) {
      const ctx = this._getOrReturnCtx(input3);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input3.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Values() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  extract(values) {
    return ZodEnum.create(values);
  }
  exclude(values) {
    return ZodEnum.create(this.options.filter((opt) => !values.includes(opt)));
  }
};
ZodEnum.create = createZodEnum;
var ZodNativeEnum = class extends ZodType {
  _parse(input3) {
    const nativeEnumValues = util.getValidEnumValues(this._def.values);
    const ctx = this._getOrReturnCtx(input3);
    if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (nativeEnumValues.indexOf(input3.data) === -1) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input3.data);
  }
  get enum() {
    return this._def.values;
  }
};
ZodNativeEnum.create = (values, params) => {
  return new ZodNativeEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
    ...processCreateParams(params)
  });
};
var ZodPromise = class extends ZodType {
  unwrap() {
    return this._def.type;
  }
  _parse(input3) {
    const { ctx } = this._processInputParams(input3);
    if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.promise,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
    return OK(promisified.then((data) => {
      return this._def.type.parseAsync(data, {
        path: ctx.path,
        errorMap: ctx.common.contextualErrorMap
      });
    }));
  }
};
ZodPromise.create = (schema, params) => {
  return new ZodPromise({
    type: schema,
    typeName: ZodFirstPartyTypeKind.ZodPromise,
    ...processCreateParams(params)
  });
};
var ZodEffects = class extends ZodType {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(input3) {
    const { status, ctx } = this._processInputParams(input3);
    const effect = this._def.effect || null;
    const checkCtx = {
      addIssue: (arg) => {
        addIssueToContext(ctx, arg);
        if (arg.fatal) {
          status.abort();
        } else {
          status.dirty();
        }
      },
      get path() {
        return ctx.path;
      }
    };
    checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
    if (effect.type === "preprocess") {
      const processed = effect.transform(ctx.data, checkCtx);
      if (ctx.common.issues.length) {
        return {
          status: "dirty",
          value: ctx.data
        };
      }
      if (ctx.common.async) {
        return Promise.resolve(processed).then((processed2) => {
          return this._def.schema._parseAsync({
            data: processed2,
            path: ctx.path,
            parent: ctx
          });
        });
      } else {
        return this._def.schema._parseSync({
          data: processed,
          path: ctx.path,
          parent: ctx
        });
      }
    }
    if (effect.type === "refinement") {
      const executeRefinement = (acc) => {
        const result = effect.refinement(acc, checkCtx);
        if (ctx.common.async) {
          return Promise.resolve(result);
        }
        if (result instanceof Promise) {
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        }
        return acc;
      };
      if (ctx.common.async === false) {
        const inner = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inner.status === "aborted")
          return INVALID;
        if (inner.status === "dirty")
          status.dirty();
        executeRefinement(inner.value);
        return { status: status.value, value: inner.value };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
          if (inner.status === "aborted")
            return INVALID;
          if (inner.status === "dirty")
            status.dirty();
          return executeRefinement(inner.value).then(() => {
            return { status: status.value, value: inner.value };
          });
        });
      }
    }
    if (effect.type === "transform") {
      if (ctx.common.async === false) {
        const base = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (!isValid(base))
          return base;
        const result = effect.transform(base.value, checkCtx);
        if (result instanceof Promise) {
          throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
        }
        return { status: status.value, value: result };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
          if (!isValid(base))
            return base;
          return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({ status: status.value, value: result }));
        });
      }
    }
    util.assertNever(effect);
  }
};
ZodEffects.create = (schema, effect, params) => {
  return new ZodEffects({
    schema,
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    effect,
    ...processCreateParams(params)
  });
};
ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
  return new ZodEffects({
    schema,
    effect: { type: "preprocess", transform: preprocess },
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    ...processCreateParams(params)
  });
};
var ZodOptional = class extends ZodType {
  _parse(input3) {
    const parsedType = this._getType(input3);
    if (parsedType === ZodParsedType.undefined) {
      return OK(void 0);
    }
    return this._def.innerType._parse(input3);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodOptional.create = (type, params) => {
  return new ZodOptional({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodOptional,
    ...processCreateParams(params)
  });
};
var ZodNullable = class extends ZodType {
  _parse(input3) {
    const parsedType = this._getType(input3);
    if (parsedType === ZodParsedType.null) {
      return OK(null);
    }
    return this._def.innerType._parse(input3);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodNullable.create = (type, params) => {
  return new ZodNullable({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodNullable,
    ...processCreateParams(params)
  });
};
var ZodDefault = class extends ZodType {
  _parse(input3) {
    const { ctx } = this._processInputParams(input3);
    let data = ctx.data;
    if (ctx.parsedType === ZodParsedType.undefined) {
      data = this._def.defaultValue();
    }
    return this._def.innerType._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
};
ZodDefault.create = (type, params) => {
  return new ZodDefault({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodDefault,
    defaultValue: typeof params.default === "function" ? params.default : () => params.default,
    ...processCreateParams(params)
  });
};
var ZodCatch = class extends ZodType {
  _parse(input3) {
    const { ctx } = this._processInputParams(input3);
    const newCtx = {
      ...ctx,
      common: {
        ...ctx.common,
        issues: []
      }
    };
    const result = this._def.innerType._parse({
      data: newCtx.data,
      path: newCtx.path,
      parent: {
        ...newCtx
      }
    });
    if (isAsync(result)) {
      return result.then((result2) => {
        return {
          status: "valid",
          value: result2.status === "valid" ? result2.value : this._def.catchValue({
            get error() {
              return new ZodError(newCtx.common.issues);
            },
            input: newCtx.data
          })
        };
      });
    } else {
      return {
        status: "valid",
        value: result.status === "valid" ? result.value : this._def.catchValue({
          get error() {
            return new ZodError(newCtx.common.issues);
          },
          input: newCtx.data
        })
      };
    }
  }
  removeCatch() {
    return this._def.innerType;
  }
};
ZodCatch.create = (type, params) => {
  return new ZodCatch({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodCatch,
    catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
    ...processCreateParams(params)
  });
};
var ZodNaN = class extends ZodType {
  _parse(input3) {
    const parsedType = this._getType(input3);
    if (parsedType !== ZodParsedType.nan) {
      const ctx = this._getOrReturnCtx(input3);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.nan,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return { status: "valid", value: input3.data };
  }
};
ZodNaN.create = (params) => {
  return new ZodNaN({
    typeName: ZodFirstPartyTypeKind.ZodNaN,
    ...processCreateParams(params)
  });
};
var BRAND = Symbol("zod_brand");
var ZodBranded = class extends ZodType {
  _parse(input3) {
    const { ctx } = this._processInputParams(input3);
    const data = ctx.data;
    return this._def.type._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  unwrap() {
    return this._def.type;
  }
};
var ZodPipeline = class extends ZodType {
  _parse(input3) {
    const { status, ctx } = this._processInputParams(input3);
    if (ctx.common.async) {
      const handleAsync = async () => {
        const inResult = await this._def.in._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inResult.status === "aborted")
          return INVALID;
        if (inResult.status === "dirty") {
          status.dirty();
          return DIRTY(inResult.value);
        } else {
          return this._def.out._parseAsync({
            data: inResult.value,
            path: ctx.path,
            parent: ctx
          });
        }
      };
      return handleAsync();
    } else {
      const inResult = this._def.in._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
      if (inResult.status === "aborted")
        return INVALID;
      if (inResult.status === "dirty") {
        status.dirty();
        return {
          status: "dirty",
          value: inResult.value
        };
      } else {
        return this._def.out._parseSync({
          data: inResult.value,
          path: ctx.path,
          parent: ctx
        });
      }
    }
  }
  static create(a, b) {
    return new ZodPipeline({
      in: a,
      out: b,
      typeName: ZodFirstPartyTypeKind.ZodPipeline
    });
  }
};
var ZodReadonly = class extends ZodType {
  _parse(input3) {
    const result = this._def.innerType._parse(input3);
    if (isValid(result)) {
      result.value = Object.freeze(result.value);
    }
    return result;
  }
};
ZodReadonly.create = (type, params) => {
  return new ZodReadonly({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodReadonly,
    ...processCreateParams(params)
  });
};
var custom = (check, params = {}, fatal) => {
  if (check)
    return ZodAny.create().superRefine((data, ctx) => {
      var _a, _b;
      if (!check(data)) {
        const p = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;
        const _fatal = (_b = (_a = p.fatal) !== null && _a !== void 0 ? _a : fatal) !== null && _b !== void 0 ? _b : true;
        const p2 = typeof p === "string" ? { message: p } : p;
        ctx.addIssue({ code: "custom", ...p2, fatal: _fatal });
      }
    });
  return ZodAny.create();
};
var late = {
  object: ZodObject.lazycreate
};
var ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind2) {
  ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
  ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
  ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
  ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
  ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
  ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
  ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
  ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
  ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
  ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
  ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
  ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
  ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
  ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
  ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
  ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
  ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
  ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
  ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
  ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
  ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
  ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
  ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
  ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
  ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
  ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
  ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
  ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
  ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
  ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
  ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
  ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
  ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
  ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
  ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
  ZodFirstPartyTypeKind2["ZodReadonly"] = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
var instanceOfType = (cls, params = {
  message: `Input not instance of ${cls.name}`
}) => custom((data) => data instanceof cls, params);
var stringType = ZodString.create;
var numberType = ZodNumber.create;
var nanType = ZodNaN.create;
var bigIntType = ZodBigInt.create;
var booleanType = ZodBoolean.create;
var dateType = ZodDate.create;
var symbolType = ZodSymbol.create;
var undefinedType = ZodUndefined.create;
var nullType = ZodNull.create;
var anyType = ZodAny.create;
var unknownType = ZodUnknown.create;
var neverType = ZodNever.create;
var voidType = ZodVoid.create;
var arrayType = ZodArray.create;
var objectType = ZodObject.create;
var strictObjectType = ZodObject.strictCreate;
var unionType = ZodUnion.create;
var discriminatedUnionType = ZodDiscriminatedUnion.create;
var intersectionType = ZodIntersection.create;
var tupleType = ZodTuple.create;
var recordType = ZodRecord.create;
var mapType = ZodMap.create;
var setType = ZodSet.create;
var functionType = ZodFunction.create;
var lazyType = ZodLazy.create;
var literalType = ZodLiteral.create;
var enumType = ZodEnum.create;
var nativeEnumType = ZodNativeEnum.create;
var promiseType = ZodPromise.create;
var effectsType = ZodEffects.create;
var optionalType = ZodOptional.create;
var nullableType = ZodNullable.create;
var preprocessType = ZodEffects.createWithPreprocess;
var pipelineType = ZodPipeline.create;
var ostring = () => stringType().optional();
var onumber = () => numberType().optional();
var oboolean = () => booleanType().optional();
var coerce = {
  string: (arg) => ZodString.create({ ...arg, coerce: true }),
  number: (arg) => ZodNumber.create({ ...arg, coerce: true }),
  boolean: (arg) => ZodBoolean.create({
    ...arg,
    coerce: true
  }),
  bigint: (arg) => ZodBigInt.create({ ...arg, coerce: true }),
  date: (arg) => ZodDate.create({ ...arg, coerce: true })
};
var NEVER = INVALID;
var z = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: errorMap,
  setErrorMap,
  getErrorMap,
  makeIssue,
  EMPTY_PATH,
  addIssueToContext,
  ParseStatus,
  INVALID,
  DIRTY,
  OK,
  isAborted,
  isDirty,
  isValid,
  isAsync,
  get util() {
    return util;
  },
  get objectUtil() {
    return objectUtil;
  },
  ZodParsedType,
  getParsedType,
  ZodType,
  ZodString,
  ZodNumber,
  ZodBigInt,
  ZodBoolean,
  ZodDate,
  ZodSymbol,
  ZodUndefined,
  ZodNull,
  ZodAny,
  ZodUnknown,
  ZodNever,
  ZodVoid,
  ZodArray,
  ZodObject,
  ZodUnion,
  ZodDiscriminatedUnion,
  ZodIntersection,
  ZodTuple,
  ZodRecord,
  ZodMap,
  ZodSet,
  ZodFunction,
  ZodLazy,
  ZodLiteral,
  ZodEnum,
  ZodNativeEnum,
  ZodPromise,
  ZodEffects,
  ZodTransformer: ZodEffects,
  ZodOptional,
  ZodNullable,
  ZodDefault,
  ZodCatch,
  ZodNaN,
  BRAND,
  ZodBranded,
  ZodPipeline,
  ZodReadonly,
  custom,
  Schema: ZodType,
  ZodSchema: ZodType,
  late,
  get ZodFirstPartyTypeKind() {
    return ZodFirstPartyTypeKind;
  },
  coerce,
  any: anyType,
  array: arrayType,
  bigint: bigIntType,
  boolean: booleanType,
  date: dateType,
  discriminatedUnion: discriminatedUnionType,
  effect: effectsType,
  "enum": enumType,
  "function": functionType,
  "instanceof": instanceOfType,
  intersection: intersectionType,
  lazy: lazyType,
  literal: literalType,
  map: mapType,
  nan: nanType,
  nativeEnum: nativeEnumType,
  never: neverType,
  "null": nullType,
  nullable: nullableType,
  number: numberType,
  object: objectType,
  oboolean,
  onumber,
  optional: optionalType,
  ostring,
  pipeline: pipelineType,
  preprocess: preprocessType,
  promise: promiseType,
  record: recordType,
  set: setType,
  strictObject: strictObjectType,
  string: stringType,
  symbol: symbolType,
  transformer: effectsType,
  tuple: tupleType,
  "undefined": undefinedType,
  union: unionType,
  unknown: unknownType,
  "void": voidType,
  NEVER,
  ZodIssueCode,
  quotelessJson,
  ZodError
});

// node_modules/@conform-to/zod/_virtual/_rollupPluginBabelHelpers.mjs
function ownKeys3(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread23(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys3(Object(source), true).forEach(function(key) {
      _defineProperty3(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys3(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty3(obj, key, value) {
  key = _toPropertyKey3(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPrimitive3(input3, hint) {
  if (typeof input3 !== "object" || input3 === null)
    return input3;
  var prim = input3[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input3, hint || "default");
    if (typeof res !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input3);
}
function _toPropertyKey3(arg) {
  var key = _toPrimitive3(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

// node_modules/@conform-to/zod/coercion.mjs
function coerceString(value, transform) {
  if (typeof value !== "string") {
    return value;
  }
  if (value === "") {
    return void 0;
  }
  if (typeof transform !== "function") {
    return value;
  }
  return transform(value);
}
function coerceFile(file) {
  if (typeof File !== "undefined" && file instanceof File && file.name === "" && file.size === 0) {
    return void 0;
  }
  return file;
}
function isFileSchema(schema) {
  if (typeof File === "undefined") {
    return false;
  }
  return schema._def.effect.type === "refinement" && schema.innerType() instanceof ZodAny && schema.safeParse(new File([], "")).success && !schema.safeParse("").success;
}
function enableTypeCoercion(type) {
  var cache = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : /* @__PURE__ */ new Map();
  var result = cache.get(type);
  if (result) {
    return result;
  }
  var schema = type;
  if (type instanceof ZodString || type instanceof ZodLiteral || type instanceof ZodEnum || type instanceof ZodNativeEnum) {
    schema = anyType().transform((value) => coerceString(value)).pipe(type);
  } else if (type instanceof ZodNumber) {
    schema = anyType().transform((value) => coerceString(value, Number)).pipe(type);
  } else if (type instanceof ZodBoolean) {
    schema = anyType().transform((value) => coerceString(value, (text) => text === "on" ? true : text)).pipe(type);
  } else if (type instanceof ZodDate) {
    schema = anyType().transform((value) => coerceString(value, (timestamp) => {
      var date = new Date(timestamp);
      if (isNaN(date.getTime())) {
        return timestamp;
      }
      return date;
    })).pipe(type);
  } else if (type instanceof ZodBigInt) {
    schema = anyType().transform((value) => coerceString(value, BigInt)).pipe(type);
  } else if (type instanceof ZodArray) {
    schema = anyType().transform((value) => {
      if (Array.isArray(value)) {
        return value;
      }
      if (typeof value === "undefined" || typeof coerceFile(value) === "undefined") {
        return [];
      }
      return [value];
    }).pipe(new ZodArray(_objectSpread23(_objectSpread23({}, type._def), {}, {
      type: enableTypeCoercion(type.element, cache)
    })));
  } else if (type instanceof ZodObject) {
    var _shape = Object.fromEntries(Object.entries(type.shape).map((_ref) => {
      var [key, def] = _ref;
      return [
        key,
        // @ts-expect-error see message above
        enableTypeCoercion(def, cache)
      ];
    }));
    schema = new ZodObject(_objectSpread23(_objectSpread23({}, type._def), {}, {
      shape: () => _shape
    }));
  } else if (type instanceof ZodEffects) {
    if (isFileSchema(type)) {
      schema = anyType().transform((value) => coerceFile(value)).pipe(type);
    } else {
      schema = new ZodEffects(_objectSpread23(_objectSpread23({}, type._def), {}, {
        schema: enableTypeCoercion(type.innerType(), cache)
      }));
    }
  } else if (type instanceof ZodOptional) {
    schema = anyType().transform((value) => coerceFile(coerceString(value))).pipe(new ZodOptional(_objectSpread23(_objectSpread23({}, type._def), {}, {
      innerType: enableTypeCoercion(type.unwrap(), cache)
    })));
  } else if (type instanceof ZodDefault) {
    schema = anyType().transform((value) => coerceFile(coerceString(value))).pipe(new ZodDefault(_objectSpread23(_objectSpread23({}, type._def), {}, {
      innerType: enableTypeCoercion(type.removeDefault(), cache)
    })));
  } else if (type instanceof ZodIntersection) {
    schema = new ZodIntersection(_objectSpread23(_objectSpread23({}, type._def), {}, {
      left: enableTypeCoercion(type._def.left, cache),
      right: enableTypeCoercion(type._def.right, cache)
    }));
  } else if (type instanceof ZodUnion) {
    schema = new ZodUnion(_objectSpread23(_objectSpread23({}, type._def), {}, {
      options: type.options.map((option) => enableTypeCoercion(option, cache))
    }));
  } else if (type instanceof ZodDiscriminatedUnion) {
    schema = new ZodDiscriminatedUnion(_objectSpread23(_objectSpread23({}, type._def), {}, {
      options: type.options.map((option) => enableTypeCoercion(option, cache))
    }));
  } else if (type instanceof ZodTuple) {
    schema = new ZodTuple(_objectSpread23(_objectSpread23({}, type._def), {}, {
      items: type.items.map((item) => enableTypeCoercion(item, cache))
    }));
  } else if (type instanceof ZodNullable) {
    schema = new ZodNullable(_objectSpread23(_objectSpread23({}, type._def), {}, {
      innerType: enableTypeCoercion(type.unwrap(), cache)
    }));
  } else if (type instanceof ZodPipeline) {
    schema = new ZodPipeline(_objectSpread23(_objectSpread23({}, type._def), {}, {
      in: enableTypeCoercion(type._def.in, cache),
      out: enableTypeCoercion(type._def.out, cache)
    }));
  } else if (type instanceof ZodLazy) {
    schema = lazyType(() => enableTypeCoercion(type.schema, cache));
  }
  if (type !== schema) {
    cache.set(type, schema);
  }
  return schema;
}

// node_modules/@conform-to/zod/parse.mjs
function parse2(payload, config) {
  return parse(payload, {
    resolve(payload2, intent) {
      var schema = enableTypeCoercion(typeof config.schema === "function" ? config.schema(intent) : config.schema);
      var resolveResult = (result) => {
        if (result.success) {
          return {
            value: result.data
          };
        }
        return {
          error: result.error.errors.reduce((result2, e) => {
            var _result$name;
            var name = formatPaths(e.path);
            result2[name] = [...(_result$name = result2[name]) !== null && _result$name !== void 0 ? _result$name : [], e.message];
            return result2;
          }, {})
        };
      };
      return config.async ? schema.safeParseAsync(payload2, {
        errorMap: config.errorMap
      }).then(resolveResult) : resolveResult(schema.safeParse(payload2, {
        errorMap: config.errorMap
      }));
    }
  });
}

export {
  input_default,
  textarea_default,
  list,
  useForm,
  useFieldset,
  useFieldList,
  helpers_exports,
  z,
  parse2 as parse
};
//# sourceMappingURL=/build/_shared/chunk-CRRESCNE.js.map
