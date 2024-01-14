import {
  $313b98861ee5dd6c$export$d6875122194c7b44,
  $3ef42575df84b30b$export$9d1611c77c2fe928,
  $507fabe10e71c6fb$export$8397ddfc504fdb9a,
  $8ae05eaa5c114e9c$export$7f54fc3180508a52,
  $bdb11010cef70236$export$b4cc09c592e8fdb8,
  $bdb11010cef70236$export$f680877a34711e37,
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c
} from "/build/_shared/chunk-XEG4DGED.js";
import {
  require_jsx_runtime
} from "/build/_shared/chunk-NMZL6IDN.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/@nextui-org/shared-icons/dist/chunk-MQHFHAHG.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var LinkIcon = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    "aria-hidden": "true",
    fill: "none",
    focusable: "false",
    height: "1em",
    shapeRendering: "geometricPrecision",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    viewBox: "0 0 24 24",
    width: "1em",
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M15 3h6v6" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10 14L21 3" })
    ]
  }
);

// node_modules/@nextui-org/shared-icons/dist/chunk-M3MASYO7.mjs
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var CloseFilledIcon = (props) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
  "svg",
  {
    "aria-hidden": "true",
    focusable: "false",
    height: "1em",
    role: "presentation",
    viewBox: "0 0 24 24",
    width: "1em",
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "path",
      {
        d: "M12 2a10 10 0 1010 10A10.016 10.016 0 0012 2zm3.36 12.3a.754.754 0 010 1.06.748.748 0 01-1.06 0l-2.3-2.3-2.3 2.3a.748.748 0 01-1.06 0 .754.754 0 010-1.06l2.3-2.3-2.3-2.3A.75.75 0 019.7 8.64l2.3 2.3 2.3-2.3a.75.75 0 011.06 1.06l-2.3 2.3z",
        fill: "currentColor"
      }
    )
  }
);

// node_modules/@nextui-org/shared-icons/dist/chunk-HV2L33LJ.mjs
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
var CloseIcon = (props) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
  "svg",
  {
    "aria-hidden": "true",
    fill: "none",
    focusable: "false",
    height: "1em",
    role: "presentation",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    viewBox: "0 0 24 24",
    width: "1em",
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M18 6L6 18M6 6l12 12" })
  }
);

// node_modules/@nextui-org/shared-icons/dist/chunk-7F3ZLNJ6.mjs
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
var ChevronDownIcon = ({ strokeWidth = 1.5, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
  "svg",
  {
    "aria-hidden": "true",
    fill: "none",
    focusable: "false",
    height: "1em",
    role: "presentation",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth,
    viewBox: "0 0 24 24",
    width: "1em",
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "m6 9 6 6 6-6" })
  }
);

// node_modules/@react-aria/form/dist/import.mjs
var import_react = __toESM(require_react(), 1);
function $e93e671b31057976$export$b8473d3665f3a75a(props, state, ref) {
  let { validationBehavior, focus } = props;
  (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(() => {
    if (validationBehavior === "native" && (ref === null || ref === void 0 ? void 0 : ref.current)) {
      let errorMessage = state.realtimeValidation.isInvalid ? state.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
      ref.current.setCustomValidity(errorMessage);
      if (!ref.current.hasAttribute("title"))
        ref.current.title = "";
      if (!state.realtimeValidation.isInvalid)
        state.updateValidation($e93e671b31057976$var$getNativeValidity(ref.current));
    }
  });
  let onReset = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)(() => {
    state.resetValidation();
  });
  let onInvalid = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)((e) => {
    var _ref_current;
    if (!state.displayValidation.isInvalid)
      state.commitValidation();
    let form = ref === null || ref === void 0 ? void 0 : (_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : _ref_current.form;
    if (!e.defaultPrevented && ref && form && $e93e671b31057976$var$getFirstInvalidInput(form) === ref.current) {
      var _ref_current1;
      if (focus)
        focus();
      else
        (_ref_current1 = ref.current) === null || _ref_current1 === void 0 ? void 0 : _ref_current1.focus();
      (0, $507fabe10e71c6fb$export$8397ddfc504fdb9a)("keyboard");
    }
    e.preventDefault();
  });
  let onChange = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)(() => {
    state.commitValidation();
  });
  (0, import_react.useEffect)(() => {
    let input = ref === null || ref === void 0 ? void 0 : ref.current;
    if (!input)
      return;
    let form = input.form;
    input.addEventListener("invalid", onInvalid);
    input.addEventListener("change", onChange);
    form === null || form === void 0 ? void 0 : form.addEventListener("reset", onReset);
    return () => {
      input.removeEventListener("invalid", onInvalid);
      input.removeEventListener("change", onChange);
      form === null || form === void 0 ? void 0 : form.removeEventListener("reset", onReset);
    };
  }, [
    ref,
    onInvalid,
    onChange,
    onReset,
    validationBehavior
  ]);
}
function $e93e671b31057976$var$getValidity(input) {
  let validity = input.validity;
  return {
    badInput: validity.badInput,
    customError: validity.customError,
    patternMismatch: validity.patternMismatch,
    rangeOverflow: validity.rangeOverflow,
    rangeUnderflow: validity.rangeUnderflow,
    stepMismatch: validity.stepMismatch,
    tooLong: validity.tooLong,
    tooShort: validity.tooShort,
    typeMismatch: validity.typeMismatch,
    valueMissing: validity.valueMissing,
    valid: validity.valid
  };
}
function $e93e671b31057976$var$getNativeValidity(input) {
  return {
    isInvalid: !input.validity.valid,
    validationDetails: $e93e671b31057976$var$getValidity(input),
    validationErrors: input.validationMessage ? [
      input.validationMessage
    ] : []
  };
}
function $e93e671b31057976$var$getFirstInvalidInput(form) {
  for (let i = 0; i < form.elements.length; i++) {
    let element = form.elements[i];
    if (!element.validity.valid)
      return element;
  }
  return null;
}

// node_modules/@react-stately/form/dist/import.mjs
var import_react2 = __toESM(require_react(), 1);
var $e5be200c675c3b3a$export$aca958c65c314e6c = {
  badInput: false,
  customError: false,
  patternMismatch: false,
  rangeOverflow: false,
  rangeUnderflow: false,
  stepMismatch: false,
  tooLong: false,
  tooShort: false,
  typeMismatch: false,
  valueMissing: false,
  valid: true
};
var $e5be200c675c3b3a$var$CUSTOM_VALIDITY_STATE = {
  ...$e5be200c675c3b3a$export$aca958c65c314e6c,
  customError: true,
  valid: false
};
var $e5be200c675c3b3a$export$dad6ae84456c676a = {
  isInvalid: false,
  validationDetails: $e5be200c675c3b3a$export$aca958c65c314e6c,
  validationErrors: []
};
var $e5be200c675c3b3a$export$571b5131b7e65c11 = (0, import_react2.createContext)({});
var $e5be200c675c3b3a$export$a763b9476acd3eb = "__formValidationState" + Date.now();
function $e5be200c675c3b3a$export$fc1a364ae1f3ff10(props) {
  if (props[$e5be200c675c3b3a$export$a763b9476acd3eb]) {
    let { realtimeValidation, displayValidation, updateValidation, resetValidation, commitValidation } = props[$e5be200c675c3b3a$export$a763b9476acd3eb];
    return {
      realtimeValidation,
      displayValidation,
      updateValidation,
      resetValidation,
      commitValidation
    };
  }
  return $e5be200c675c3b3a$var$useFormValidationStateImpl(props);
}
function $e5be200c675c3b3a$var$useFormValidationStateImpl(props) {
  let { isInvalid, validationState, name, value, builtinValidation, validate, validationBehavior = "aria" } = props;
  if (validationState)
    isInvalid || (isInvalid = validationState === "invalid");
  let controlledError = isInvalid ? {
    isInvalid: true,
    validationErrors: [],
    validationDetails: $e5be200c675c3b3a$var$CUSTOM_VALIDITY_STATE
  } : null;
  let clientError = (0, import_react2.useMemo)(() => $e5be200c675c3b3a$var$getValidationResult($e5be200c675c3b3a$var$runValidate(validate, value)), [
    validate,
    value
  ]);
  if (builtinValidation === null || builtinValidation === void 0 ? void 0 : builtinValidation.validationDetails.valid)
    builtinValidation = null;
  let serverErrors = (0, import_react2.useContext)($e5be200c675c3b3a$export$571b5131b7e65c11);
  let serverErrorMessages = (0, import_react2.useMemo)(() => {
    if (name)
      return Array.isArray(name) ? name.flatMap((name2) => $e5be200c675c3b3a$var$asArray(serverErrors[name2])) : $e5be200c675c3b3a$var$asArray(serverErrors[name]);
    return [];
  }, [
    serverErrors,
    name
  ]);
  let [lastServerErrors, setLastServerErrors] = (0, import_react2.useState)(serverErrors);
  let [isServerErrorCleared, setServerErrorCleared] = (0, import_react2.useState)(false);
  if (serverErrors !== lastServerErrors) {
    setLastServerErrors(serverErrors);
    setServerErrorCleared(false);
  }
  let serverError = (0, import_react2.useMemo)(() => $e5be200c675c3b3a$var$getValidationResult(isServerErrorCleared ? [] : serverErrorMessages), [
    isServerErrorCleared,
    serverErrorMessages
  ]);
  let nextValidation = (0, import_react2.useRef)($e5be200c675c3b3a$export$dad6ae84456c676a);
  let [currentValidity, setCurrentValidity] = (0, import_react2.useState)($e5be200c675c3b3a$export$dad6ae84456c676a);
  let lastError = (0, import_react2.useRef)($e5be200c675c3b3a$export$dad6ae84456c676a);
  let commitValidation = () => {
    if (!commitQueued)
      return;
    setCommitQueued(false);
    let error = clientError || builtinValidation || nextValidation.current;
    if (!$e5be200c675c3b3a$var$isEqualValidation(error, lastError.current)) {
      lastError.current = error;
      setCurrentValidity(error);
    }
  };
  let [commitQueued, setCommitQueued] = (0, import_react2.useState)(false);
  (0, import_react2.useEffect)(commitValidation);
  let realtimeValidation = controlledError || serverError || clientError || builtinValidation || $e5be200c675c3b3a$export$dad6ae84456c676a;
  let displayValidation = validationBehavior === "native" ? controlledError || serverError || currentValidity : controlledError || serverError || clientError || builtinValidation || currentValidity;
  return {
    realtimeValidation,
    displayValidation,
    updateValidation(value2) {
      if (validationBehavior === "aria" && !$e5be200c675c3b3a$var$isEqualValidation(currentValidity, value2))
        setCurrentValidity(value2);
      else
        nextValidation.current = value2;
    },
    resetValidation() {
      let error = $e5be200c675c3b3a$export$dad6ae84456c676a;
      if (!$e5be200c675c3b3a$var$isEqualValidation(error, lastError.current)) {
        lastError.current = error;
        setCurrentValidity(error);
      }
      if (validationBehavior === "native")
        setCommitQueued(false);
      setServerErrorCleared(true);
    },
    commitValidation() {
      if (validationBehavior === "native")
        setCommitQueued(true);
      setServerErrorCleared(true);
    }
  };
}
function $e5be200c675c3b3a$var$asArray(v) {
  if (!v)
    return [];
  return Array.isArray(v) ? v : [
    v
  ];
}
function $e5be200c675c3b3a$var$runValidate(validate, value) {
  if (typeof validate === "function") {
    let e = validate(value);
    if (e && typeof e !== "boolean")
      return $e5be200c675c3b3a$var$asArray(e);
  }
  return [];
}
function $e5be200c675c3b3a$var$getValidationResult(errors) {
  return errors.length ? {
    isInvalid: true,
    validationErrors: errors,
    validationDetails: $e5be200c675c3b3a$var$CUSTOM_VALIDITY_STATE
  } : null;
}
function $e5be200c675c3b3a$var$isEqualValidation(a, b) {
  if (a === b)
    return true;
  return a && b && a.isInvalid === b.isInvalid && a.validationErrors.length === b.validationErrors.length && a.validationErrors.every((a2, i) => a2 === b.validationErrors[i]) && Object.entries(a.validationDetails).every(([k, v]) => b.validationDetails[k] === v);
}

// node_modules/@react-aria/label/dist/import.mjs
function $d191a55c9702f145$export$8467354a121f1b9f(props) {
  let { id, label, "aria-labelledby": ariaLabelledby, "aria-label": ariaLabel, labelElementType = "label" } = props;
  id = (0, $bdb11010cef70236$export$f680877a34711e37)(id);
  let labelId = (0, $bdb11010cef70236$export$f680877a34711e37)();
  let labelProps = {};
  if (label) {
    ariaLabelledby = ariaLabelledby ? `${labelId} ${ariaLabelledby}` : labelId;
    labelProps = {
      id: labelId,
      htmlFor: labelElementType === "label" ? id : void 0
    };
  } else if (!ariaLabelledby && !ariaLabel)
    console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility");
  let fieldProps = (0, $313b98861ee5dd6c$export$d6875122194c7b44)({
    id,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledby
  });
  return {
    labelProps,
    fieldProps
  };
}
function $2baaea4c71418dea$export$294aa081a6c6f55d(props) {
  let { description, errorMessage, isInvalid, validationState } = props;
  let { labelProps, fieldProps } = (0, $d191a55c9702f145$export$8467354a121f1b9f)(props);
  let descriptionId = (0, $bdb11010cef70236$export$b4cc09c592e8fdb8)([
    Boolean(description),
    Boolean(errorMessage),
    isInvalid,
    validationState
  ]);
  let errorMessageId = (0, $bdb11010cef70236$export$b4cc09c592e8fdb8)([
    Boolean(description),
    Boolean(errorMessage),
    isInvalid,
    validationState
  ]);
  fieldProps = (0, $3ef42575df84b30b$export$9d1611c77c2fe928)(fieldProps, {
    "aria-describedby": [
      descriptionId,
      // Use aria-describedby for error message because aria-errormessage is unsupported using VoiceOver or NVDA. See https://github.com/adobe/react-spectrum/issues/1346#issuecomment-740136268
      errorMessageId,
      props["aria-describedby"]
    ].filter(Boolean).join(" ") || void 0
  });
  return {
    labelProps,
    fieldProps,
    descriptionProps: {
      id: descriptionId
    },
    errorMessageProps: {
      id: errorMessageId
    }
  };
}

export {
  LinkIcon,
  CloseFilledIcon,
  CloseIcon,
  ChevronDownIcon,
  $e93e671b31057976$export$b8473d3665f3a75a,
  $e5be200c675c3b3a$export$dad6ae84456c676a,
  $e5be200c675c3b3a$export$a763b9476acd3eb,
  $e5be200c675c3b3a$export$fc1a364ae1f3ff10,
  $2baaea4c71418dea$export$294aa081a6c6f55d
};
//# sourceMappingURL=/build/_shared/chunk-P2DSO4RZ.js.map
