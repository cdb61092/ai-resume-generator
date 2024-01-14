import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-U53SBQSA.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// empty-module:~/utils/resume/resume.pdf.server
var require_resume_pdf = __commonJS({
  "empty-module:~/utils/resume/resume.pdf.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/resume.tsx
var import_resume_pdf = __toESM(require_resume_pdf(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\resume.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\resume.tsx"
  );
  import.meta.hot.lastModified = "1704611710836.9236";
}
async function ResumePage() {
  await (0, import_resume_pdf.createPDFResume)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "hi" }, void 0, false, {
    fileName: "app/routes/resume.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
}
_c = ResumePage;
var _c;
$RefreshReg$(_c, "ResumePage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ResumePage as default
};
//# sourceMappingURL=/build/routes/resume-NYHRQIZS.js.map
