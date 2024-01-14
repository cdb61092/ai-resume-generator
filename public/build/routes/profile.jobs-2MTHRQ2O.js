import {
  tab_item_base_default,
  tabs_default
} from "/build/_shared/chunk-25U62PYY.js";
import "/build/_shared/chunk-VMRQGUXU.js";
import "/build/_shared/chunk-RR5CIDIT.js";
import "/build/_shared/chunk-AUYLHJJM.js";
import {
  require_prisma
} from "/build/_shared/chunk-IWXJHFRL.js";
import {
  helpers_exports,
  input_default,
  textarea_default,
  useForm
} from "/build/_shared/chunk-CRRESCNE.js";
import "/build/_shared/chunk-P2DSO4RZ.js";
import {
  require_auth
} from "/build/_shared/chunk-JSCKBFOW.js";
import {
  button_default
} from "/build/_shared/chunk-XEG4DGED.js";
import "/build/_shared/chunk-NMZL6IDN.js";
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
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/profile.jobs.tsx
var import_auth = __toESM(require_auth(), 1);
var import_prisma = __toESM(require_prisma(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\profile.jobs.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\profile.jobs.tsx"
  );
  import.meta.hot.lastModified = "1705179168377.8164";
}
function Experience() {
  _s();
  const {
    jobs
  } = useLoaderData();
  const job = jobs[0];
  console.log(jobs);
  const [form, {
    company,
    title,
    location,
    startDate,
    endDate,
    achievements,
    responsibilities,
    id
  }] = useForm({
    // onValidate({formData}) {
    //     return parse(formData, {schema: UpdateJobSchema});
    // },
    // shouldValidate: 'onBlur',
    // onSubmit(event, { submission }) {
    //     // invariant(submission.payload, 'Invalid payload')
    //
    //     const { intent } = submission.payload
    //
    //     if ('update' === intent) {
    //         // return parse(submission.formData, { schema: UpdateJobSchema })
    //     } else if ('delete' === intent) {
    //         return {
    //             id: submission.formData.get('id'),
    //         }
    //     }
    // },
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(tabs_default, { fullWidth: true, children: jobs.map((job2) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(tab_item_base_default, { title: job2.title, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { ...form.props, method: "post", navigate: false, className: "flex flex-col gap-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", ...helpers_exports.input(id), value: job2.id }, void 0, false, {
      fileName: "app/routes/profile.jobs.tsx",
      lineNumber: 133,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(input_default, { type: "text", label: "Company", ...helpers_exports.input(company), className: "border-none bg-[#f5f5f5] rounded-xl p-2", defaultValue: job2.company }, void 0, false, {
      fileName: "app/routes/profile.jobs.tsx",
      lineNumber: 134,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(input_default, { type: "text", label: "Title", ...helpers_exports.input(title), className: "border-none bg-[#f5f5f5] rounded-xl p-2", defaultValue: job2.title }, void 0, false, {
      fileName: "app/routes/profile.jobs.tsx",
      lineNumber: 135,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(input_default, { type: "text", label: "Location", ...helpers_exports.input(location), className: "border-none bg-[#f5f5f5] rounded-xl p-2", defaultValue: job2.location }, void 0, false, {
      fileName: "app/routes/profile.jobs.tsx",
      lineNumber: 136,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(input_default, { type: "text", label: "Start Date", ...helpers_exports.input(startDate), className: "border-none bg-[#f5f5f5] rounded-xl p-2", defaultValue: job2.startDate }, void 0, false, {
      fileName: "app/routes/profile.jobs.tsx",
      lineNumber: 137,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(input_default, { type: "text", label: "End Date", ...helpers_exports.input(endDate), className: "border-none bg-[#f5f5f5] rounded-xl p-2", defaultValue: job2.endDate }, void 0, false, {
      fileName: "app/routes/profile.jobs.tsx",
      lineNumber: 138,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(textarea_default, { label: "Responsibilities", ...helpers_exports.input(responsibilities), className: "border-none bg-[#f5f5f5] rounded-xl p-2", defaultValue: job2.responsibilities }, void 0, false, {
      fileName: "app/routes/profile.jobs.tsx",
      lineNumber: 139,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(button_default, { color: "success", type: "submit", className: "border-none text-[#1f2937] rounded-xl p-2", children: "Save" }, void 0, false, {
      fileName: "app/routes/profile.jobs.tsx",
      lineNumber: 140,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(button_default, { color: "danger", type: "submit", name: "intent", value: "delete", className: "border-none text-[#1f2937] rounded-xl p-2", children: "Delete" }, void 0, false, {
      fileName: "app/routes/profile.jobs.tsx",
      lineNumber: 143,
      columnNumber: 25
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/profile.jobs.tsx",
    lineNumber: 132,
    columnNumber: 21
  }, this) }, job2.id, false, {
    fileName: "app/routes/profile.jobs.tsx",
    lineNumber: 131,
    columnNumber: 30
  }, this)) }, void 0, false, {
    fileName: "app/routes/profile.jobs.tsx",
    lineNumber: 130,
    columnNumber: 10
  }, this);
}
_s(Experience, "XrLEdEI3JE4SgO4qnRm6JqVxDzY=", false, function() {
  return [useLoaderData, useForm];
});
_c = Experience;
var _c;
$RefreshReg$(_c, "Experience");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Experience as default
};
//# sourceMappingURL=/build/routes/profile.jobs-2MTHRQ2O.js.map
