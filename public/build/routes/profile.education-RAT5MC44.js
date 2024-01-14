import {
  capitalize
} from "/build/_shared/chunk-MGB6ZWPH.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import "/build/_shared/chunk-AUYLHJJM.js";
import {
  require_prisma
} from "/build/_shared/chunk-IWXJHFRL.js";
import {
  helpers_exports,
  input_default,
  list,
  parse,
  useFieldList,
  useFieldset,
  useForm,
  z
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
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/profile.education.tsx
var import_react3 = __toESM(require_react(), 1);
var import_auth = __toESM(require_auth(), 1);
var import_prisma = __toESM(require_prisma(), 1);
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\profile.education.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\profile.education.tsx"
  );
  import.meta.hot.lastModified = "1704512273656.8708";
}
var schoolSchema = z.object({
  id: z.number().optional(),
  school: z.string(),
  degree: z.string().optional(),
  graduationDate: z.string().optional()
});
var educationSchema = z.object({
  schools: z.array(schoolSchema).nonempty()
});
function EducationForm() {
  _s();
  const education = useLoaderData();
  const [form, {
    schools
  }] = useForm({
    onValidate({
      formData
    }) {
      return parse(formData, {
        schema: educationSchema
      });
    },
    shouldValidate: "onBlur",
    defaultValue: {
      schools: education
    }
  });
  const schoolList = useFieldList(form.ref, schools);
  console.log(education);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", ...form.props, children: [
    schoolList.map((school, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SchoolFieldSet, { ...school, index, listName: schools.name }, void 0, false, {
      fileName: "app/routes/profile.education.tsx",
      lineNumber: 130,
      columnNumber: 48
    }, this)),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { ...list.insert(schools.name), className: "w-full mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(button_default, { color: "primary", fullWidth: true, children: "Add school" }, void 0, false, {
      fileName: "app/routes/profile.education.tsx",
      lineNumber: 132,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/profile.education.tsx",
      lineNumber: 131,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(button_default, { fullWidth: true, color: "success", type: "submit", children: "Save" }, void 0, false, {
      fileName: "app/routes/profile.education.tsx",
      lineNumber: 136,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/profile.education.tsx",
    lineNumber: 129,
    columnNumber: 10
  }, this);
}
_s(EducationForm, "G/WGIYmm+JzmBsPT2tM6nKu/X4M=", false, function() {
  return [useLoaderData, useForm, useFieldList];
});
_c = EducationForm;
function SchoolFieldSet({
  listName,
  index,
  ...config
}) {
  _s2();
  const ref = (0, import_react3.useRef)(null);
  const {
    school,
    degree,
    graduationDate,
    id
  } = useFieldset(ref, config);
  const [title, setTitle] = import_react3.default.useState(school.defaultValue);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { ref, className: "flex flex-col gap-4 mb-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pl-3 flex justify-between items-baseline", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("legend", { children: title ? capitalize(title) : "New School" }, void 0, false, {
        fileName: "app/routes/profile.education.tsx",
        lineNumber: 161,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { ...list.remove(listName, {
        index
      }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(button_default, { color: "danger", children: "Delete" }, void 0, false, {
        fileName: "app/routes/profile.education.tsx",
        lineNumber: 165,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/profile.education.tsx",
        lineNumber: 162,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/profile.education.tsx",
      lineNumber: 160,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", ...helpers_exports.input(id) }, void 0, false, {
      fileName: "app/routes/profile.education.tsx",
      lineNumber: 168,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(input_default, { type: "text", ...helpers_exports.input(school), onValueChange: (value) => setTitle(value), className: "border-none bg-[#f5f5f5] rounded-xl p-2", label: "School", placeholder: "School" }, void 0, false, {
      fileName: "app/routes/profile.education.tsx",
      lineNumber: 169,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(input_default, { type: "text", ...helpers_exports.input(degree), className: "border-none bg-[#f5f5f5] rounded-xl p-2", label: "Degree", placeholder: "Degree" }, void 0, false, {
      fileName: "app/routes/profile.education.tsx",
      lineNumber: 170,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(input_default, { type: "text", ...helpers_exports.input(graduationDate), className: "border-none bg-[#f5f5f5] rounded-xl p-2", label: "Graduation Date", placeholder: "Graduation Date" }, void 0, false, {
      fileName: "app/routes/profile.education.tsx",
      lineNumber: 171,
      columnNumber: 13
    }, this)
  ] }, config.key, true, {
    fileName: "app/routes/profile.education.tsx",
    lineNumber: 159,
    columnNumber: 10
  }, this);
}
_s2(SchoolFieldSet, "A88zL/F9MDaPUR6EnYccMUddo2c=", false, function() {
  return [useFieldset];
});
_c2 = SchoolFieldSet;
var _c;
var _c2;
$RefreshReg$(_c, "EducationForm");
$RefreshReg$(_c2, "SchoolFieldSet");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  EducationForm as default
};
//# sourceMappingURL=/build/routes/profile.education-RAT5MC44.js.map
