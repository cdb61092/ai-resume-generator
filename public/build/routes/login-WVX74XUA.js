import {
  card_body_default,
  card_default
} from "/build/_shared/chunk-ESAISFTX.js";
import {
  AuthSchema,
  tab_item_base_default,
  tabs_default
} from "/build/_shared/chunk-25U62PYY.js";
import "/build/_shared/chunk-VMRQGUXU.js";
import "/build/_shared/chunk-RR5CIDIT.js";
import {
  helpers_exports,
  input_default,
  parse,
  useForm
} from "/build/_shared/chunk-CRRESCNE.js";
import {
  LinkIcon
} from "/build/_shared/chunk-P2DSO4RZ.js";
import {
  require_auth
} from "/build/_shared/chunk-JSCKBFOW.js";
import {
  $3ef42575df84b30b$export$9d1611c77c2fe928,
  $65484d02dcb7eb3e$export$457c3d6518dd4c6f,
  $e6afbd83fe6ebbd2$export$4c014de7c8940b4c,
  $ea8dcbcb9ea1b556$export$9a302a45f65d0572,
  $ea8dcbcb9ea1b556$export$efa8c9099e530235,
  $f7dceffc5ad7768b$export$4e328f61c538687f,
  button_default,
  dataAttr,
  forwardRef,
  link,
  linkAnchorClasses,
  mapPropsVariants,
  useDOMRef,
  usePress
} from "/build/_shared/chunk-XEG4DGED.js";
import {
  require_jsx_runtime
} from "/build/_shared/chunk-NMZL6IDN.js";
import {
  useActionData
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
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/login.tsx
var import_auth = __toESM(require_auth(), 1);

// node_modules/@nextui-org/use-aria-link/dist/index.mjs
function useAriaLink(props, ref) {
  let {
    elementType = "a",
    onPress,
    onPressStart,
    onPressEnd,
    onClick: deprecatedOnClick,
    isDisabled,
    ...otherProps
  } = props;
  let linkProps = {};
  if (elementType !== "a") {
    linkProps = {
      role: "link",
      tabIndex: !isDisabled ? 0 : void 0
    };
  }
  let { focusableProps } = $e6afbd83fe6ebbd2$export$4c014de7c8940b4c(props, ref);
  let { pressProps, isPressed } = usePress({ onPress, onPressStart, onPressEnd, isDisabled, ref });
  let domProps = $65484d02dcb7eb3e$export$457c3d6518dd4c6f(otherProps, { labelable: true, isLink: elementType === "a" });
  let interactionHandlers = $3ef42575df84b30b$export$9d1611c77c2fe928(focusableProps, pressProps);
  let router = $ea8dcbcb9ea1b556$export$9a302a45f65d0572();
  return {
    isPressed,
    linkProps: $3ef42575df84b30b$export$9d1611c77c2fe928(domProps, {
      ...interactionHandlers,
      ...linkProps,
      "aria-disabled": isDisabled || void 0,
      "aria-current": props["aria-current"],
      onClick: (e) => {
        var _a;
        (_a = pressProps.onClick) == null ? void 0 : _a.call(pressProps, e);
        if (deprecatedOnClick) {
          deprecatedOnClick(e);
        }
        if (!router.isNative && e.currentTarget instanceof HTMLAnchorElement && e.currentTarget.href && !e.isDefaultPrevented() && $ea8dcbcb9ea1b556$export$efa8c9099e530235(e.currentTarget, e)) {
          e.preventDefault();
          router.open(e.currentTarget, e);
        }
      }
    })
  };
}

// node_modules/@nextui-org/link/dist/chunk-PQAE7L75.mjs
var import_react = __toESM(require_react(), 1);
"use client";
function useLink(originalProps) {
  var _a, _b;
  const [props, variantProps] = mapPropsVariants(originalProps, link.variantKeys);
  const {
    ref,
    as,
    children,
    anchorIcon,
    isExternal = false,
    showAnchorIcon = false,
    autoFocus = false,
    className,
    onPress,
    onPressStart,
    onPressEnd,
    onClick,
    ...otherProps
  } = props;
  const Component = as || "a";
  const domRef = useDOMRef(ref);
  const { linkProps } = useAriaLink(
    {
      ...otherProps,
      onPress,
      onPressStart,
      onPressEnd,
      onClick,
      isDisabled: originalProps.isDisabled,
      elementType: `${as}`
    },
    domRef
  );
  const { isFocused, isFocusVisible, focusProps } = $f7dceffc5ad7768b$export$4e328f61c538687f({
    autoFocus
  });
  if (isExternal) {
    otherProps.rel = (_a = otherProps.rel) != null ? _a : "noopener noreferrer";
    otherProps.target = (_b = otherProps.target) != null ? _b : "_blank";
  }
  const classNames = (0, import_react.useMemo)(
    () => link({
      ...variantProps,
      className
    }),
    [...Object.values(variantProps), className]
  );
  const getLinkProps = (0, import_react.useCallback)(() => {
    return {
      ref: domRef,
      className: classNames,
      "data-focus": dataAttr(isFocused),
      "data-disabled": dataAttr(originalProps.isDisabled),
      "data-focus-visible": dataAttr(isFocusVisible),
      ...$3ef42575df84b30b$export$9d1611c77c2fe928(focusProps, linkProps, otherProps)
    };
  }, [classNames, isFocused, isFocusVisible, focusProps, linkProps, otherProps]);
  return { Component, children, anchorIcon, showAnchorIcon, getLinkProps };
}

// node_modules/@nextui-org/link/dist/chunk-MPX6TMFQ.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
"use client";
var Link = forwardRef((props, ref) => {
  const {
    Component,
    children,
    showAnchorIcon,
    anchorIcon = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkIcon, { className: linkAnchorClasses }),
    getLinkProps
  } = useLink({
    ref,
    ...props
  });
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, { ...getLinkProps(), children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    children,
    showAnchorIcon && anchorIcon
  ] }) });
});
Link.displayName = "NextUI.Link";
var link_default = Link;

// node_modules/@nextui-org/link/dist/index.mjs
"use client";

// app/routes/login.tsx
var import_react5 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\login.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\login.tsx"
  );
  import.meta.hot.lastModified = "1702000028208.6562";
}
function Login() {
  _s();
  const data = useActionData();
  console.log(`data: ${data}`);
  const [selected, setSelected] = import_react5.default.useState("Login");
  console.log(selected);
  const [form, {
    email,
    password
  }] = useForm({
    onValidate({
      formData
    }) {
      return parse(formData, {
        schema: AuthSchema
      });
    }
  });
  const handleSelectionChange = (key) => {
    setSelected(key.toString());
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(card_default, { className: "max-w-full w-[340px] mt-[100px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(card_body_default, { className: "overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(tabs_default, { fullWidth: true, size: "md", "aria-label": "Tabs form", selectedKey: selected, onSelectionChange: handleSelectionChange, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(tab_item_base_default, { title: "Login", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { ...form.props, method: "post", action: "/login", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(input_default, { isRequired: true, label: "Email", placeholder: "Enter your email", type: "email", className: "mb-3", ...helpers_exports.input(email) }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 64,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(input_default, { isRequired: true, label: "Password", placeholder: "Enter your password", type: "password", ...helpers_exports.input(password), className: "mb-3" }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 65,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-center text-small", children: [
        "Need to create an account?",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(link_default, { size: "sm", onPress: () => setSelected("Register"), className: "cursor-pointer mb-2", children: "Sign up" }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 68,
          columnNumber: 37
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/login.tsx",
        lineNumber: 66,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(button_default, { fullWidth: true, color: "primary", type: "submit", children: "Login" }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 72,
        columnNumber: 33
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/login.tsx",
      lineNumber: 63,
      columnNumber: 29
    }, this) }, "Login", false, {
      fileName: "app/routes/login.tsx",
      lineNumber: 62,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(tab_item_base_default, { title: "Register", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { ...form.props, method: "post", action: "/register", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(input_default, { isRequired: true, label: "Email", placeholder: "Enter your email", type: "email", className: "mb-3", ...helpers_exports.input(email) }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 79,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(input_default, { isRequired: true, label: "Password", placeholder: "Enter your password", type: "password", className: "mb-3", ...helpers_exports.input(password) }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 80,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-center text-small", children: [
        "Already have an account?",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(link_default, { size: "sm", onPress: () => setSelected("Login"), className: "cursor-pointer mb-2", children: "Login" }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 83,
          columnNumber: 37
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/login.tsx",
        lineNumber: 81,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(button_default, { fullWidth: true, color: "primary", type: "submit", children: "Register" }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 87,
        columnNumber: 33
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/login.tsx",
      lineNumber: 78,
      columnNumber: 29
    }, this) }, "Register", false, {
      fileName: "app/routes/login.tsx",
      lineNumber: 77,
      columnNumber: 25
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/login.tsx",
    lineNumber: 61,
    columnNumber: 21
  }, this) }, void 0, false, {
    fileName: "app/routes/login.tsx",
    lineNumber: 60,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "app/routes/login.tsx",
    lineNumber: 59,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/login.tsx",
    lineNumber: 58,
    columnNumber: 10
  }, this);
}
_s(Login, "Q0QmExmoK4b6S16u6WKLCXQiojQ=", false, function() {
  return [useActionData, useForm];
});
_c = Login;
var _c;
$RefreshReg$(_c, "Login");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Login as default
};
//# sourceMappingURL=/build/routes/login-WVX74XUA.js.map
