var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import isbot from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 48,
          columnNumber: 9
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 98,
          columnNumber: 9
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  action: () => action,
  default: () => App,
  links: () => links,
  loader: () => loader
});
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useNavigate as useNavigate2
} from "@remix-run/react";
import { json } from "@remix-run/node";

// app/global.css
var global_default = "/build/_assets/global-S6JEC6YO.css";

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-SJF7CM32.css";

// app/utils/prisma.server.ts
import { PrismaClient } from "@prisma/client";
var prisma;
global.__db || (global.__db = new PrismaClient(), global.__db.$connect()), prisma = global.__db;

// app/components/Navbar.tsx
import {
  User,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownTrigger
} from "@nextui-org/react";
import { Link, Form, useNavigate } from "@remix-run/react";

// app/components/Logo.tsx
import { Image } from "@nextui-org/react";

// public/logo.png
var logo_default = "/build/_assets/logo-SIXRPHQC.png";

// app/components/Logo.tsx
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
function Logo() {
  return /* @__PURE__ */ jsxDEV2(Image, { src: logo_default, width: 50, radius: "full" }, void 0, !1, {
    fileName: "app/components/Logo.tsx",
    lineNumber: 4,
    columnNumber: 12
  }, this);
}

// app/components/Navbar.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
function Header({ user }) {
  let navigate = useNavigate();
  return /* @__PURE__ */ jsxDEV3("div", { className: "w-[200px] flex flex-col p-5", children: [
    /* @__PURE__ */ jsxDEV3("div", { className: "flex items-center", children: [
      /* @__PURE__ */ jsxDEV3(Logo, {}, void 0, !1, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 22,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV3("p", { className: "ml-3 font-bold", children: "SCRAPY" }, void 0, !1, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 23,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 21,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV3("div", { className: "flex flex-col pt-[50px]", children: [
      /* @__PURE__ */ jsxDEV3(Link, { to: "jobs", prefetch: "render", children: "Jobs" }, void 0, !1, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 26,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV3(Link, { to: "profile", prefetch: "render", children: "Profile" }, void 0, !1, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 29,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 25,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV3("div", { className: "mt-auto", children: [
      !user && /* @__PURE__ */ jsxDEV3(Link, { to: "/login", children: "Login" }, void 0, !1, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 34,
        columnNumber: 27
      }, this),
      user && /* @__PURE__ */ jsxDEV3(Dropdown, { children: [
        /* @__PURE__ */ jsxDEV3(DropdownTrigger, { className: "cursor-pointer", children: /* @__PURE__ */ jsxDEV3(
          User,
          {
            name: "Chase Buchholz",
            description: "Software Engineer",
            avatarProps: {
              src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
            }
          },
          void 0,
          !1,
          {
            fileName: "app/components/Navbar.tsx",
            lineNumber: 38,
            columnNumber: 29
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 37,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV3(DropdownMenu, { "aria-label": "Static Actions", children: [
          /* @__PURE__ */ jsxDEV3(DropdownItem, { onClick: () => navigate("/profile"), children: "Profile" }, "profile", !1, {
            fileName: "app/components/Navbar.tsx",
            lineNumber: 47,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV3(
            DropdownItem,
            {
              onClick: () => document.getElementById("logout-form").submit(),
              children: /* @__PURE__ */ jsxDEV3(Form, { action: "/logout", id: "logout-form", method: "post", children: "Sign Out" }, void 0, !1, {
                fileName: "app/components/Navbar.tsx",
                lineNumber: 57,
                columnNumber: 33
              }, this)
            },
            "logout",
            !1,
            {
              fileName: "app/components/Navbar.tsx",
              lineNumber: 50,
              columnNumber: 29
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 46,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 36,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 33,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Navbar.tsx",
    lineNumber: 20,
    columnNumber: 9
  }, this);
}

// app/root.tsx
import { NextUIProvider } from "@nextui-org/react";

// app/utils/auth.server.ts
import { Authenticator } from "remix-auth";

// app/utils/session.server.ts
import { createCookieSessionStorage } from "@remix-run/node";
var sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "_session",
    // use any name you want here
    sameSite: "lax",
    // this helps with CSRF
    path: "/",
    // remember to add this so the cookie will work in all routes
    httpOnly: !0,
    // for security reasons, make this cookie http only
    secrets: ["s3cr3t"],
    // replace this with an actual secret
    secure: !1
    // enable this in prod only
  }
}), { getSession, commitSession, destroySession } = sessionStorage;

// app/utils/auth.server.ts
import { FormStrategy } from "remix-auth-form";
import invariant from "tiny-invariant";
import bcrypt from "bcryptjs";
var authenticator = new Authenticator(sessionStorage), hashPassword = async (password) => {
  let salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
}, register = async (email, password) => {
  if (await prisma.user.findUnique({ where: { email } }))
    throw new Error("User already exists");
  let passwordHash = await hashPassword(password);
  return prisma.user.create({ data: { email, passwordHash } });
};
var requireUserId = async (request) => {
  let userId = (await getSession(request.headers.get("Cookie"))).get("user").id;
  return invariant(userId, "No user id in session"), userId;
};
authenticator.use(
  new FormStrategy(async ({ form }) => {
    let email = form.get("email"), password = form.get("password");
    invariant(typeof email == "string", "email must be a string"), invariant(email.length > 0, "email must not be empty"), invariant(typeof password == "string", "password must be a string"), invariant(password.length > 0, "password must not be empty");
    let user = await prisma.user.findUnique({
      where: { email }
    });
    if (!user)
      throw new Error("Invalid credentials");
    if (!await bcrypt.compare(password, user.passwordHash))
      throw new Error("Invalid credentials");
    return user;
  })
);

// app/utils/openai.server.ts
import OpenAI from "openai/index";
import invariant2 from "tiny-invariant";
var openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
}), assistantInstructions = `You are an excellent resume reviewer, who returns just a valid JSON object and ONLY a valid JSON object.
     The JSON object should have ONE key, and that key should be "bullets". The value of that key should be a regular array of strings,
     where each string represents a bullet point for my resume.
     Your job is to read about what i have done at my job, I will tell you projects and skills I have,
     things I have done to help you know me as a software engineer. I will also give you a job description
     from a job board site like LinkedIn. Your job is to generate the bullet points for my resume
     specifically tailored to the job description. Do not generate bullet points that highlight skills I
     do not have or have not mentioned to you, because that would make my resume dishonest.
     Try to format these bullet points with the STAR method`, jsonMode = async function(request) {
  let user = await authenticator.isAuthenticated(request), jobDescription = (await request.formData()).get("jobDescription");
  invariant2(user, "You must be logged in to use this feature");
  let experience = (await prisma.userJob.findMany({
    where: {
      userId: user.id
    }
  }))[0].responsibilities, content = (await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: assistantInstructions
      },
      {
        role: "user",
        content: `Experience: ${experience}. Job Description: ${jobDescription}`
      }
    ],
    model: "gpt-4-1106-preview",
    response_format: { type: "json_object" }
  })).choices[0].message.content;
  return JSON.parse(content?.trim() ?? "")?.bullets;
};

// app/root.tsx
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var links = () => [
  { rel: "stylesheet", href: global_default },
  { rel: "stylesheet", href: tailwind_default }
], loader = async ({ request }) => {
  let jobs = await prisma.job.findMany(), skills = Array.from(new Set(jobs.flatMap((job) => job.keywords))).sort(), user = await authenticator.isAuthenticated(request);
  return json({ jobs, skills, user }, { status: 200 });
};
async function action({ request }) {
  let content = (await jsonMode(request)).choices[0].message.content ?? "";
  return json({ message: "Hello world!" }, { status: 200 });
}
function App() {
  let { user } = useLoaderData(), navigate = useNavigate2();
  return /* @__PURE__ */ jsxDEV4("html", { children: [
    /* @__PURE__ */ jsxDEV4("head", { children: [
      /* @__PURE__ */ jsxDEV4("title", { children: "Scrapy" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 52,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV4("link", { rel: "icon", href: "data:image/x-icon;base64,AA" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 53,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV4(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 54,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV4(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 55,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 51,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV4("body", { className: "min-h-screen bg-gray-100", children: /* @__PURE__ */ jsxDEV4(NextUIProvider, { navigate, children: [
      /* @__PURE__ */ jsxDEV4("div", { className: "flex min-h-screen", children: [
        /* @__PURE__ */ jsxDEV4(Header, { user }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 60,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV4("main", { className: "bg-gray-400 flex-grow", children: /* @__PURE__ */ jsxDEV4(Outlet, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 62,
          columnNumber: 29
        }, this) }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 61,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 59,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV4(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 66,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV4(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 67,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV4(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 68,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 58,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 57,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 50,
    columnNumber: 5
  }, this);
}

// app/routes/profile.education.tsx
var profile_education_exports = {};
__export(profile_education_exports, {
  action: () => action2,
  default: () => EducationForm,
  loader: () => loader2
});
import { useForm, useFieldset, useFieldList, conform, list } from "@conform-to/react";
import { parse } from "@conform-to/zod";
import { Form as Form3, useLoaderData as useLoaderData2 } from "@remix-run/react";
import React, { useRef } from "react";
import { z } from "zod";
import { Button, Input } from "@nextui-org/react";
import invariant3 from "tiny-invariant";
import { json as json2 } from "@remix-run/node";

// app/utils/index.ts
var excerpt = (text, length = 1e3) => text.length < length ? text : `${text.slice(0, length)}...'`;
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// app/routes/profile.education.tsx
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
var schoolSchema = z.object({
  id: z.number().optional(),
  school: z.string(),
  degree: z.string().optional(),
  graduationDate: z.string().optional()
}), educationSchema = z.object({
  schools: z.array(schoolSchema).nonempty()
});
async function loader2({ request }) {
  let authUser = await authenticator.isAuthenticated(request);
  invariant3(authUser, "User is not authenticated");
  let education = await prisma.education.findMany({
    where: {
      userId: authUser.id
    }
  });
  return json2(education);
}
async function action2({ request }) {
  console.log("action");
  let authUser = await authenticator.isAuthenticated(request);
  invariant3(authUser, "User is not authenticated");
  let formData = await request.formData(), submission = parse(formData, {
    schema: educationSchema
  });
  invariant3(submission.value, "Bad form values");
  let { schools } = submission.value;
  console.log(schools);
  let allEducationIds = await prisma.education.findMany({
    where: {
      userId: authUser.id
    },
    select: {
      id: !0
    }
  }).then((results) => results.map((result) => result.id)), upsertPromises = schools.map(
    (school) => prisma.education.upsert({
      where: {
        id: school.id ?? 0
      },
      update: {
        school: school.school,
        degree: school.degree,
        graduationDate: school.graduationDate
      },
      create: {
        userId: authUser.id,
        school: school.school,
        degree: school.degree,
        graduationDate: school.graduationDate
      }
    })
  ), upsertedRecords = await Promise.all(upsertPromises), upsertedIds = upsertedRecords.map((record) => record.id), deletePromises = allEducationIds.filter((id) => !upsertedIds.includes(id)).map((id) => prisma.education.delete({ where: { id } }));
  return await Promise.all(deletePromises), json2({ education: upsertedRecords });
}
function EducationForm() {
  let education = useLoaderData2(), [form, { schools }] = useForm({
    onValidate({ formData }) {
      return parse(formData, { schema: educationSchema });
    },
    shouldValidate: "onBlur",
    defaultValue: {
      schools: education
    }
  }), schoolList = useFieldList(form.ref, schools);
  return console.log(education), /* @__PURE__ */ jsxDEV5(Form3, { method: "post", ...form.props, children: [
    schoolList.map((school, index) => /* @__PURE__ */ jsxDEV5(SchoolFieldSet, { ...school, index, listName: schools.name }, void 0, !1, {
      fileName: "app/routes/profile.education.tsx",
      lineNumber: 114,
      columnNumber: 17
    }, this)),
    /* @__PURE__ */ jsxDEV5("button", { ...list.insert(schools.name), className: "w-full mb-4", children: /* @__PURE__ */ jsxDEV5(Button, { color: "primary", fullWidth: !0, children: "Add school" }, void 0, !1, {
      fileName: "app/routes/profile.education.tsx",
      lineNumber: 117,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/profile.education.tsx",
      lineNumber: 116,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV5(Button, { fullWidth: !0, color: "success", type: "submit", children: "Save" }, void 0, !1, {
      fileName: "app/routes/profile.education.tsx",
      lineNumber: 121,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/profile.education.tsx",
    lineNumber: 112,
    columnNumber: 9
  }, this);
}
function SchoolFieldSet({ listName, index, ...config }) {
  let ref = useRef(null), { school, degree, graduationDate, id } = useFieldset(ref, config), [title, setTitle] = React.useState(school.defaultValue);
  return /* @__PURE__ */ jsxDEV5("fieldset", { ref, className: "flex flex-col gap-4 mb-4", children: [
    /* @__PURE__ */ jsxDEV5("div", { className: "pl-3 flex justify-between items-baseline", children: [
      /* @__PURE__ */ jsxDEV5("legend", { children: title ? capitalize(title) : "New School" }, void 0, !1, {
        fileName: "app/routes/profile.education.tsx",
        lineNumber: 136,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV5("button", { ...list.remove(listName, { index }), children: /* @__PURE__ */ jsxDEV5(Button, { color: "danger", children: "Delete" }, void 0, !1, {
        fileName: "app/routes/profile.education.tsx",
        lineNumber: 138,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/routes/profile.education.tsx",
        lineNumber: 137,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/profile.education.tsx",
      lineNumber: 135,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV5("input", { type: "hidden", ...conform.input(id) }, void 0, !1, {
      fileName: "app/routes/profile.education.tsx",
      lineNumber: 141,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV5(
      Input,
      {
        type: "text",
        ...conform.input(school),
        onValueChange: (value) => setTitle(value),
        className: "border-none bg-[#f5f5f5] rounded-xl p-2",
        label: "School",
        placeholder: "School"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/profile.education.tsx",
        lineNumber: 142,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV5(
      Input,
      {
        type: "text",
        ...conform.input(degree),
        className: "border-none bg-[#f5f5f5] rounded-xl p-2",
        label: "Degree",
        placeholder: "Degree"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/profile.education.tsx",
        lineNumber: 150,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV5(
      Input,
      {
        type: "text",
        ...conform.input(graduationDate),
        className: "border-none bg-[#f5f5f5] rounded-xl p-2",
        label: "Graduation Date",
        placeholder: "Graduation Date"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/profile.education.tsx",
        lineNumber: 157,
        columnNumber: 13
      },
      this
    )
  ] }, config.key, !0, {
    fileName: "app/routes/profile.education.tsx",
    lineNumber: 134,
    columnNumber: 9
  }, this);
}

// app/routes/resources.resume.tsx
var resources_resume_exports = {};
__export(resources_resume_exports, {
  loader: () => loader3
});
import invariant4 from "tiny-invariant";
import { json as json3 } from "@remix-run/node";

// app/utils/resume/resume.docx.server.ts
import {
  AlignmentType,
  BorderStyle,
  Document,
  HeadingLevel,
  Packer,
  Paragraph,
  Table as DocxTable,
  TableCell as DocxTableCell,
  TableRow as DocxTableRow,
  WidthType
} from "docx";
import fs from "fs";
function nameHeader(firstName, lastName) {
  return new Paragraph({
    text: `${firstName} ${lastName}`,
    heading: HeadingLevel.TITLE,
    // You can also use custom styles for more control
    alignment: AlignmentType.CENTER
  });
}
function professionSubheader(profession) {
  return new Paragraph({
    text: profession,
    heading: HeadingLevel.HEADING_5,
    // You can also use custom styles for more control
    alignment: AlignmentType.CENTER
  });
}
function contactInfo(location, email, phone) {
  return new Paragraph({
    text: `${location} \u2022 ${email} \u2022 ${phone}`,
    alignment: AlignmentType.CENTER
  });
}
function splitRow(leftContent, rightContent) {
  return new DocxTableRow({
    children: [
      new DocxTableCell({
        children: [
          new Paragraph({
            text: leftContent,
            alignment: AlignmentType.LEFT
          })
        ],
        width: {
          size: 50,
          type: WidthType.PERCENTAGE
        }
      }),
      new DocxTableCell({
        children: [
          new Paragraph({
            text: rightContent,
            alignment: AlignmentType.RIGHT
          })
        ],
        width: {
          size: 50,
          type: WidthType.PERCENTAGE
        }
      })
    ]
  });
}
function sectionHeader(headerText) {
  return new Paragraph({
    text: headerText,
    heading: HeadingLevel.HEADING_3,
    border: {
      bottom: {
        color: "000000",
        space: 0,
        style: BorderStyle.SINGLE,
        size: 6
      }
    }
  });
}
function professionalExperienceSection(jobs) {
  let header = sectionHeader("PROFESSIONAL EXPERIENCE"), companyAndLocation = splitRow("Go Local Interactive", "Overland Park, KS"), jobTitleAndDate = splitRow("Software Engineer", "Aug 2021 - Present"), table = new DocxTable({
    width: {
      size: 100,
      type: WidthType.PERCENTAGE
    },
    borders: {
      top: { style: BorderStyle.NIL },
      bottom: { style: BorderStyle.NIL },
      left: { style: BorderStyle.NIL },
      right: { style: BorderStyle.NIL },
      insideVertical: { style: BorderStyle.NIL },
      insideHorizontal: { style: BorderStyle.NIL }
    },
    alignment: AlignmentType.CENTER,
    rows: [companyAndLocation, jobTitleAndDate]
  });
  return [header, table];
}
async function createDocxResume(user) {
  let {
    firstName,
    lastName,
    phoneNumber,
    location,
    profession,
    email,
    github,
    linkedIn,
    frameworks,
    languages,
    libraries,
    tools,
    userJob,
    education,
    projects
  } = user;
  console.log(user);
  let doc = new Document({
    sections: [
      {
        children: [
          nameHeader(firstName, lastName),
          professionSubheader(profession),
          contactInfo(location, email, phoneNumber),
          ...professionalExperienceSection(userJob)
        ]
      }
    ]
  });
  Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("app/generatedResumes/resume1.docx", buffer);
  });
}

// app/routes/resources.resume.tsx
async function loader3({ request }) {
  console.log("in test loader");
  let userId = await requireUserId(request);
  console.log("userId", userId), invariant4(userId, "You must be logged in to use this feature");
  let user = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      education: !0,
      userJob: !0,
      projects: !0
    }
  });
  return await createDocxResume(user), json3(user);
}

// app/routes/updateEducation.tsx
var updateEducation_exports = {};
__export(updateEducation_exports, {
  action: () => action3
});
import { redirect as redirect2 } from "@remix-run/node";
import { parse as parse2 } from "@conform-to/zod";
import { z as z2 } from "zod";
import invariant5 from "tiny-invariant";
var schoolSchema2 = z2.object({
  id: z2.number().optional(),
  school: z2.string(),
  degree: z2.string().optional(),
  graduationDate: z2.string().optional()
}), educationSchema2 = z2.object({
  schools: z2.array(schoolSchema2).nonempty()
});
async function action3({ request }) {
  let authUser = await authenticator.isAuthenticated(request);
  if (!authUser)
    throw new Error("User is not authenticated");
  let user = await prisma.user.findUnique({
    where: {
      id: authUser.id
    },
    include: {
      userJob: !0,
      education: !0
    }
  });
  invariant5(user, "User is not authenticated");
  let formData = await request.formData(), submission = parse2(formData, {
    schema: educationSchema2
  });
  invariant5(submission.value, "Bad form values");
  let { schools } = submission.value;
  return console.log(schools), schools.map(async (school) => {
    if (school.id)
      await prisma.education.update({
        where: {
          id: school.id,
          userId: user?.id
        },
        data: {
          school: school.school,
          degree: school.degree,
          graduationDate: school.graduationDate
        }
      });
    else {
      if (!user?.id)
        throw new Error("User is not authenticated");
      await prisma.education.create({
        data: {
          school: school.school,
          degree: school.degree,
          graduationDate: school.graduationDate,
          userId: user?.id
        }
      });
    }
  }), redirect2(`/profile?value=${JSON.stringify(submission.value)}`);
}

// app/routes/updateProfile.tsx
var updateProfile_exports = {};
__export(updateProfile_exports, {
  action: () => action4
});
import { redirect as redirect3 } from "@remix-run/node";

// app/components/forms/schemas/index.tsx
import { z as z3 } from "zod";
var UserJobSchema = z3.object({
  company: z3.string(),
  title: z3.string(),
  location: z3.string(),
  startDate: z3.string(),
  endDate: z3.string(),
  responsibilities: z3.string(),
  achievements: z3.string()
}), UpdateJobSchema = UserJobSchema.extend({
  id: z3.number()
}), UpdateUserSchema = z3.object({
  firstName: z3.string().optional(),
  lastName: z3.string().optional(),
  profession: z3.string().optional(),
  location: z3.string().optional(),
  phoneNumber: z3.string().optional(),
  linkedIn: z3.string().optional(),
  github: z3.string().optional(),
  languages: z3.array(z3.string()).optional(),
  libraries: z3.array(z3.string()).optional(),
  frameworks: z3.array(z3.string()).optional(),
  tools: z3.array(z3.string()).optional()
}), AuthSchema = z3.object({
  email: z3.string().email(),
  password: z3.string()
});

// app/routes/updateProfile.tsx
import { parse as parse3 } from "@conform-to/zod";
import invariant6 from "tiny-invariant";
async function action4({ request }) {
  let user = await authenticator.isAuthenticated(request);
  invariant6(user, "User is not authenticated");
  let formData = await request.formData(), submission = parse3(formData, { schema: UpdateUserSchema });
  invariant6(submission.value, "Bad form values");
  let {
    firstName,
    lastName,
    location,
    phoneNumber,
    linkedIn,
    github,
    languages,
    databases,
    frameworks,
    libraries,
    tools,
    profession
  } = submission.value;
  return await prisma.user.update({
    where: {
      id: user.id
    },
    data: {
      firstName,
      lastName,
      profession,
      location,
      phoneNumber,
      linkedIn,
      github,
      languages: languages || [],
      databases: databases || [],
      frameworks: frameworks || [],
      libraries: libraries || [],
      tools: tools || []
    }
  }), redirect3("/profile");
}

// app/routes/createResume.ts
var createResume_exports = {};
__export(createResume_exports, {
  loader: () => loader4
});
import invariant7 from "tiny-invariant";
import { json as json5 } from "@remix-run/node";
async function loader4({ request }) {
  console.log("in test loader");
  let userId = await requireUserId(request);
  console.log("userId", userId), invariant7(userId, "You must be logged in to use this feature");
  let user = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      education: !0,
      userJob: !0,
      projects: !0
    }
  });
  return await createDocxResume(user), json5(user);
}

// app/routes/profile.jobs.tsx
var profile_jobs_exports = {};
__export(profile_jobs_exports, {
  action: () => action5,
  default: () => Experience,
  loader: () => loader5
});
import { parse as parse4 } from "@conform-to/zod";
import { useForm as useForm2, conform as conform2 } from "@conform-to/react";
import { Button as Button2, Input as Input2, Tab, Tabs, Textarea } from "@nextui-org/react";
import invariant8 from "tiny-invariant";
import { Form as Form4, useLoaderData as useLoaderData3 } from "@remix-run/react";
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
async function loader5({ request }) {
  console.log("request");
  let user = await authenticator.isAuthenticated(request);
  return invariant8(user, "User is not authenticated"), { jobs: await prisma.userJob.findMany({
    where: {
      userId: user.id
    }
  }) };
}
async function action5({ request }) {
  let user = await authenticator.isAuthenticated(request);
  invariant8(user, "User is not authenticated");
  let formData = await request.formData(), submission = parse4(formData, { schema: UpdateJobSchema });
  invariant8(submission.value, "Bad form values");
  let { intent } = submission.payload;
  if (intent === "delete") {
    let { id: id2 } = submission.value;
    return await prisma.userJob.delete({
      where: {
        id: id2
      }
    }), null;
  }
  let { company, title, location, startDate, endDate, responsibilities, achievements, id } = submission.value;
  return await prisma.userJob.update({
    where: {
      id
    },
    data: {
      company,
      title,
      location,
      startDate,
      endDate,
      responsibilities
    }
  }), null;
}
function Experience() {
  let { jobs } = useLoaderData3(), job = jobs[0];
  console.log(jobs);
  let [
    form,
    { company, title, location, startDate, endDate, achievements, responsibilities, id }
  ] = useForm2({
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
  return /* @__PURE__ */ jsxDEV6(Tabs, { fullWidth: !0, children: jobs.map((job2) => /* @__PURE__ */ jsxDEV6(Tab, { title: job2.title, children: /* @__PURE__ */ jsxDEV6(
    Form4,
    {
      ...form.props,
      method: "post",
      navigate: !1,
      className: "flex flex-col gap-4",
      children: [
        /* @__PURE__ */ jsxDEV6("input", { type: "hidden", ...conform2.input(id), value: job2.id }, void 0, !1, {
          fileName: "app/routes/profile.jobs.tsx",
          lineNumber: 108,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV6(
          Input2,
          {
            type: "text",
            label: "Company",
            ...conform2.input(company),
            className: "border-none bg-[#f5f5f5] rounded-xl p-2",
            defaultValue: job2.company
          },
          void 0,
          !1,
          {
            fileName: "app/routes/profile.jobs.tsx",
            lineNumber: 109,
            columnNumber: 25
          },
          this
        ),
        /* @__PURE__ */ jsxDEV6(
          Input2,
          {
            type: "text",
            label: "Title",
            ...conform2.input(title),
            className: "border-none bg-[#f5f5f5] rounded-xl p-2",
            defaultValue: job2.title
          },
          void 0,
          !1,
          {
            fileName: "app/routes/profile.jobs.tsx",
            lineNumber: 116,
            columnNumber: 25
          },
          this
        ),
        /* @__PURE__ */ jsxDEV6(
          Input2,
          {
            type: "text",
            label: "Location",
            ...conform2.input(location),
            className: "border-none bg-[#f5f5f5] rounded-xl p-2",
            defaultValue: job2.location
          },
          void 0,
          !1,
          {
            fileName: "app/routes/profile.jobs.tsx",
            lineNumber: 123,
            columnNumber: 25
          },
          this
        ),
        /* @__PURE__ */ jsxDEV6(
          Input2,
          {
            type: "text",
            label: "Start Date",
            ...conform2.input(startDate),
            className: "border-none bg-[#f5f5f5] rounded-xl p-2",
            defaultValue: job2.startDate
          },
          void 0,
          !1,
          {
            fileName: "app/routes/profile.jobs.tsx",
            lineNumber: 130,
            columnNumber: 25
          },
          this
        ),
        /* @__PURE__ */ jsxDEV6(
          Input2,
          {
            type: "text",
            label: "End Date",
            ...conform2.input(endDate),
            className: "border-none bg-[#f5f5f5] rounded-xl p-2",
            defaultValue: job2.endDate
          },
          void 0,
          !1,
          {
            fileName: "app/routes/profile.jobs.tsx",
            lineNumber: 137,
            columnNumber: 25
          },
          this
        ),
        /* @__PURE__ */ jsxDEV6(
          Textarea,
          {
            label: "Responsibilities",
            ...conform2.input(responsibilities),
            className: "border-none bg-[#f5f5f5] rounded-xl p-2",
            defaultValue: job2.responsibilities
          },
          void 0,
          !1,
          {
            fileName: "app/routes/profile.jobs.tsx",
            lineNumber: 144,
            columnNumber: 25
          },
          this
        ),
        /* @__PURE__ */ jsxDEV6(
          Button2,
          {
            color: "success",
            type: "submit",
            className: "border-none text-[#1f2937] rounded-xl p-2",
            children: "Save"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/profile.jobs.tsx",
            lineNumber: 150,
            columnNumber: 25
          },
          this
        ),
        /* @__PURE__ */ jsxDEV6(
          Button2,
          {
            color: "danger",
            type: "submit",
            name: "intent",
            value: "delete",
            className: "border-none text-[#1f2937] rounded-xl p-2",
            children: "Delete"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/profile.jobs.tsx",
            lineNumber: 156,
            columnNumber: 25
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/profile.jobs.tsx",
      lineNumber: 103,
      columnNumber: 21
    },
    this
  ) }, job2.id, !1, {
    fileName: "app/routes/profile.jobs.tsx",
    lineNumber: 102,
    columnNumber: 17
  }, this)) }, void 0, !1, {
    fileName: "app/routes/profile.jobs.tsx",
    lineNumber: 100,
    columnNumber: 9
  }, this);
}

// app/routes/deleteJob.tsx
var deleteJob_exports = {};
__export(deleteJob_exports, {
  action: () => action6
});
import { parse as parse5 } from "@conform-to/zod";
import invariant9 from "tiny-invariant";
import { redirect as redirect4 } from "@remix-run/node";
async function action6({ request }) {
  let user = await authenticator.isAuthenticated(request);
  invariant9(user, "User is not authenticated");
  let formData = await request.formData(), submission = parse5(formData, { schema: UpdateJobSchema });
  console.log("submission"), console.log(submission), invariant9(submission.value, "Bad form values");
  let { id } = submission.value;
  return await prisma.userJob.delete({
    where: {
      id
    }
  }), redirect4("/profile");
}

// app/routes/updateJob.tsx
var updateJob_exports = {};
__export(updateJob_exports, {
  action: () => action7
});
import { parse as parse6 } from "@conform-to/zod";
import invariant10 from "tiny-invariant";
import { redirect as redirect5 } from "@remix-run/node";
async function action7({ request }) {
  let user = await authenticator.isAuthenticated(request);
  invariant10(user, "User is not authenticated");
  let formData = await request.formData(), submission = parse6(formData, { schema: UpdateJobSchema });
  invariant10(submission.value, "Bad form values");
  let { intent } = submission.payload;
  if (intent === "delete") {
    let { id: id2 } = submission.value;
    return await prisma.userJob.delete({
      where: {
        id: id2
      }
    }), redirect5("/profile");
  }
  let { company, title, location, startDate, endDate, responsibilities, achievements, id } = submission.value;
  return await prisma.userJob.update({
    where: {
      id
    },
    data: {
      company,
      title,
      location,
      startDate,
      endDate,
      responsibilities,
      achievements
    }
  }), redirect5("/profile");
}

// app/routes/register.tsx
var register_exports = {};
__export(register_exports, {
  action: () => action8
});
import invariant11 from "tiny-invariant";
import { redirect as redirect6 } from "@remix-run/node";
import { parse as parse7 } from "@conform-to/zod";
async function action8({ request }) {
  let formData = await request.formData(), submission = parse7(formData, { schema: AuthSchema });
  invariant11(submission.value, "Bad form values");
  let { email, password } = submission.value;
  return await register(email, password), redirect6("/login");
}

// app/routes/profile.tsx
var profile_exports = {};
__export(profile_exports, {
  default: () => Profile,
  loader: () => loader6
});
import { Card, CardHeader, CardBody, Divider, Button as Button5, Tabs as Tabs2, Tab as Tab2 } from "@nextui-org/react";
import { FaUserAstronaut } from "react-icons/fa/index.js";
import { Link as Link3, Outlet as Outlet3, useLoaderData as useLoaderData4, useLocation } from "@remix-run/react";
import { IconContext } from "react-icons";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure
} from "@nextui-org/react";

// app/components/forms/CreateJobForm.tsx
import { parse as parse8 } from "@conform-to/zod";
import { useForm as useForm3, conform as conform3 } from "@conform-to/react";
import { Button as Button3, Input as Input3, Textarea as Textarea2 } from "@nextui-org/react";
import { Form as Form5 } from "@remix-run/react";
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
function CreateJobForm() {
  let [form, { company, title, location, startDate, endDate, achievements, responsibilities }] = useForm3({
    onValidate({ formData }) {
      return parse8(formData, { schema: UserJobSchema });
    },
    shouldValidate: "onBlur"
  });
  return /* @__PURE__ */ jsxDEV7(
    Form5,
    {
      navigate: !1,
      ...form.props,
      method: "post",
      action: "/addJob",
      className: "flex flex-col gap-4",
      children: [
        /* @__PURE__ */ jsxDEV7(
          Input3,
          {
            type: "text",
            label: "Company",
            ...conform3.input(company),
            className: "border-none bg-[#f5f5f5] rounded-xl p-2"
          },
          void 0,
          !1,
          {
            fileName: "app/components/forms/CreateJobForm.tsx",
            lineNumber: 24,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV7(
          Input3,
          {
            type: "text",
            label: "Title",
            ...conform3.input(title),
            className: "border-none bg-[#f5f5f5] rounded-xl p-2"
          },
          void 0,
          !1,
          {
            fileName: "app/components/forms/CreateJobForm.tsx",
            lineNumber: 30,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV7(
          Input3,
          {
            type: "text",
            label: "Location",
            ...conform3.input(location),
            className: "border-none bg-[#f5f5f5] rounded-xl p-2"
          },
          void 0,
          !1,
          {
            fileName: "app/components/forms/CreateJobForm.tsx",
            lineNumber: 36,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV7(
          Input3,
          {
            type: "text",
            label: "Start Date",
            ...conform3.input(startDate),
            className: "border-none bg-[#f5f5f5] rounded-xl p-2"
          },
          void 0,
          !1,
          {
            fileName: "app/components/forms/CreateJobForm.tsx",
            lineNumber: 42,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV7(
          Input3,
          {
            type: "text",
            label: "End Date",
            ...conform3.input(endDate),
            className: "border-none bg-[#f5f5f5] rounded-xl p-2"
          },
          void 0,
          !1,
          {
            fileName: "app/components/forms/CreateJobForm.tsx",
            lineNumber: 48,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV7(
          Textarea2,
          {
            label: "Responsibilities",
            ...conform3.input(responsibilities),
            className: "border-none bg-[#f5f5f5] rounded-xl p-2",
            minRows: 5
          },
          void 0,
          !1,
          {
            fileName: "app/components/forms/CreateJobForm.tsx",
            lineNumber: 54,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV7(
          Textarea2,
          {
            label: "Achievements",
            ...conform3.input(achievements),
            className: "border-none bg-[#f5f5f5] rounded-xl p-2"
          },
          void 0,
          !1,
          {
            fileName: "app/components/forms/CreateJobForm.tsx",
            lineNumber: 60,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV7(Button3, { type: "submit", color: "success", fullWidth: !0, children: "Save" }, void 0, !1, {
          fileName: "app/components/forms/CreateJobForm.tsx",
          lineNumber: 65,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/forms/CreateJobForm.tsx",
      lineNumber: 18,
      columnNumber: 9
    },
    this
  );
}

// app/components/forms/UpdateProfileForm/index.tsx
import { useForm as useForm4, conform as conform4 } from "@conform-to/react";
import { Button as Button4, Input as Input5 } from "@nextui-org/react";

// app/components/forms/UpdateProfileForm/ChipSelect.tsx
import { Chip, Input as Input4 } from "@nextui-org/react";
import React2 from "react";
import { Fragment, jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
var ChipSelect = ({ currentItems, collectionName }) => {
  let [items, setItems] = React2.useState(currentItems ?? []), [itemInput, setItemInput] = React2.useState(""), handleKeyPress = (e) => {
    e.key === "Enter" && (e.preventDefault(), setItems([...items, itemInput]), setItemInput(""));
  }, handleRemoveItem = (itemToRemove) => {
    setItems(items.filter((item) => item !== itemToRemove));
  };
  return /* @__PURE__ */ jsxDEV8(Fragment, { children: [
    /* @__PURE__ */ jsxDEV8(
      Input4,
      {
        label: capitalize(collectionName),
        value: itemInput,
        onKeyDown: handleKeyPress,
        onChange: (e) => setItemInput(e.target.value)
      },
      void 0,
      !1,
      {
        fileName: "app/components/forms/UpdateProfileForm/ChipSelect.tsx",
        lineNumber: 23,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV8("div", { className: "flex flex-wrap gap-2", children: items.map((item, index) => /* @__PURE__ */ jsxDEV8("div", { children: [
      /* @__PURE__ */ jsxDEV8(
        Input4,
        {
          type: "hidden",
          className: "hidden",
          value: item,
          name: collectionName
        },
        index,
        !1,
        {
          fileName: "app/components/forms/UpdateProfileForm/ChipSelect.tsx",
          lineNumber: 33,
          columnNumber: 29
        },
        this
      ),
      /* @__PURE__ */ jsxDEV8(
        Chip,
        {
          variant: "bordered",
          color: "secondary",
          onClose: () => handleRemoveItem(item),
          children: item
        },
        index,
        !1,
        {
          fileName: "app/components/forms/UpdateProfileForm/ChipSelect.tsx",
          lineNumber: 40,
          columnNumber: 29
        },
        this
      )
    ] }, index, !0, {
      fileName: "app/components/forms/UpdateProfileForm/ChipSelect.tsx",
      lineNumber: 32,
      columnNumber: 25
    }, this)) }, void 0, !1, {
      fileName: "app/components/forms/UpdateProfileForm/ChipSelect.tsx",
      lineNumber: 29,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/forms/UpdateProfileForm/ChipSelect.tsx",
    lineNumber: 22,
    columnNumber: 9
  }, this);
};

// app/components/forms/UpdateProfileForm/index.tsx
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
function UpdateProfileForm({ user }) {
  let [form, { firstName, lastName, github, location, phoneNumber, linkedIn, profession }] = useForm4();
  return /* @__PURE__ */ jsxDEV9("form", { ...form.props, method: "post", action: "/updateProfile", children: [
    /* @__PURE__ */ jsxDEV9("div", { className: "flex flex-col gap-y-3", children: [
      /* @__PURE__ */ jsxDEV9("div", { className: "flex gap-5", children: [
        /* @__PURE__ */ jsxDEV9(
          Input5,
          {
            type: "text",
            label: "First Name",
            defaultValue: user?.firstName,
            ...conform4.input(firstName),
            className: "border-none bg-[#f5f5f5] rounded-xl"
          },
          void 0,
          !1,
          {
            fileName: "app/components/forms/UpdateProfileForm/index.tsx",
            lineNumber: 14,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ jsxDEV9(
          Input5,
          {
            type: "text",
            label: "Last Name",
            defaultValue: user?.lastName,
            ...conform4.input(lastName),
            className: "border-none bg-[#f5f5f5] rounded-xl"
          },
          void 0,
          !1,
          {
            fileName: "app/components/forms/UpdateProfileForm/index.tsx",
            lineNumber: 21,
            columnNumber: 21
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/forms/UpdateProfileForm/index.tsx",
        lineNumber: 13,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV9(
        Input5,
        {
          type: "text",
          label: "Profession",
          defaultValue: user?.profession,
          ...conform4.input(profession),
          className: "border-none bg-[#f5f5f5] rounded-xl"
        },
        void 0,
        !1,
        {
          fileName: "app/components/forms/UpdateProfileForm/index.tsx",
          lineNumber: 29,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV9(
        Input5,
        {
          type: "text",
          label: "Location",
          defaultValue: user?.location,
          ...conform4.input(location)
        },
        void 0,
        !1,
        {
          fileName: "app/components/forms/UpdateProfileForm/index.tsx",
          lineNumber: 36,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV9(
        Input5,
        {
          type: "text",
          label: "Phone Number",
          defaultValue: user?.phoneNumber,
          ...conform4.input(phoneNumber)
        },
        void 0,
        !1,
        {
          fileName: "app/components/forms/UpdateProfileForm/index.tsx",
          lineNumber: 42,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV9(
        Input5,
        {
          type: "text",
          label: "LinkedIn",
          defaultValue: user?.linkedIn,
          ...conform4.input(linkedIn)
        },
        void 0,
        !1,
        {
          fileName: "app/components/forms/UpdateProfileForm/index.tsx",
          lineNumber: 48,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV9(
        Input5,
        {
          type: "text",
          label: "GitHub",
          defaultValue: user?.github,
          ...conform4.input(github)
        },
        void 0,
        !1,
        {
          fileName: "app/components/forms/UpdateProfileForm/index.tsx",
          lineNumber: 54,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV9(ChipSelect, { currentItems: user.languages, collectionName: "languages" }, void 0, !1, {
        fileName: "app/components/forms/UpdateProfileForm/index.tsx",
        lineNumber: 60,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV9(ChipSelect, { currentItems: user.frameworks, collectionName: "frameworks" }, void 0, !1, {
        fileName: "app/components/forms/UpdateProfileForm/index.tsx",
        lineNumber: 61,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV9(ChipSelect, { currentItems: user.libraries, collectionName: "libraries" }, void 0, !1, {
        fileName: "app/components/forms/UpdateProfileForm/index.tsx",
        lineNumber: 62,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV9(ChipSelect, { currentItems: user.tools, collectionName: "tools" }, void 0, !1, {
        fileName: "app/components/forms/UpdateProfileForm/index.tsx",
        lineNumber: 63,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/forms/UpdateProfileForm/index.tsx",
      lineNumber: 12,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV9(Button4, { type: "submit", color: "success", className: "mt-3", fullWidth: !0, children: "Save" }, void 0, !1, {
      fileName: "app/components/forms/UpdateProfileForm/index.tsx",
      lineNumber: 65,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/forms/UpdateProfileForm/index.tsx",
    lineNumber: 11,
    columnNumber: 9
  }, this);
}

// app/routes/profile.tsx
import invariant12 from "tiny-invariant";
import { Fragment as Fragment2, jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
async function loader6({ request }) {
  let authUser = await authenticator.isAuthenticated(request);
  if (!authUser)
    throw new Error("User is not authenticated");
  let user = await prisma.user.findUnique({
    where: {
      id: authUser.id
    },
    include: {
      UserJob: !0
    }
  });
  return invariant12(user, "User is not authenticated"), { user };
}
function Profile() {
  let { isOpen, onOpen, onClose } = useDisclosure(), { user } = useLoaderData4(), navigation = useLocation();
  return /* @__PURE__ */ jsxDEV10(IconContext.Provider, { value: { style: { verticalAlign: "middle" }, size: "40px" }, children: /* @__PURE__ */ jsxDEV10("div", { children: [
    /* @__PURE__ */ jsxDEV10(
      Modal,
      {
        size: "2xl",
        isOpen,
        onClose,
        placement: "top-center",
        backdrop: "blur",
        children: /* @__PURE__ */ jsxDEV10(ModalContent, { children: /* @__PURE__ */ jsxDEV10(Fragment2, { children: [
          /* @__PURE__ */ jsxDEV10(ModalHeader, { className: "flex flex-col gap-1", children: "Add Job Experience" }, void 0, !1, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 58,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV10(ModalBody, { children: /* @__PURE__ */ jsxDEV10(CreateJobForm, {}, void 0, !1, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 62,
            columnNumber: 33
          }, this) }, void 0, !1, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 61,
            columnNumber: 29
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/profile.tsx",
          lineNumber: 57,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/routes/profile.tsx",
          lineNumber: 56,
          columnNumber: 21
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/profile.tsx",
        lineNumber: 50,
        columnNumber: 17
      },
      this
    ),
    /* @__PURE__ */ jsxDEV10(Card, { className: "max-w-[800px] mx-auto mt-[100px]", children: [
      /* @__PURE__ */ jsxDEV10(CardHeader, { className: "flex justify-between gap-3", children: [
        /* @__PURE__ */ jsxDEV10("div", { className: "flex gap-3 items-center", children: [
          /* @__PURE__ */ jsxDEV10(FaUserAstronaut, {}, void 0, !1, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 70,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV10("h1", { children: "Profile" }, void 0, !1, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 71,
            columnNumber: 29
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/profile.tsx",
          lineNumber: 69,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV10(Button5, { className: "w-[125px]", onPress: onOpen, children: "Add Job" }, void 0, !1, {
          fileName: "app/routes/profile.tsx",
          lineNumber: 73,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/profile.tsx",
        lineNumber: 68,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV10(Divider, { className: "bg-gray-400" }, void 0, !1, {
        fileName: "app/routes/profile.tsx",
        lineNumber: 77,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV10(CardBody, { children: /* @__PURE__ */ jsxDEV10(Tabs2, { fullWidth: !0, selectedKey: navigation.pathname, children: [
        /* @__PURE__ */ jsxDEV10(Tab2, { title: "Profile", as: Link3, to: ".", children: /* @__PURE__ */ jsxDEV10(UpdateProfileForm, { user }, void 0, !1, {
          fileName: "app/routes/profile.tsx",
          lineNumber: 81,
          columnNumber: 33
        }, this) }, "/profile", !1, {
          fileName: "app/routes/profile.tsx",
          lineNumber: 80,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ jsxDEV10(
          Tab2,
          {
            title: "Education",
            as: Link3,
            to: "education",
            children: /* @__PURE__ */ jsxDEV10(Outlet3, {}, void 0, !1, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 88,
              columnNumber: 33
            }, this)
          },
          "/profile/education",
          !1,
          {
            fileName: "app/routes/profile.tsx",
            lineNumber: 83,
            columnNumber: 29
          },
          this
        ),
        /* @__PURE__ */ jsxDEV10(Tab2, { as: Link3, to: "jobs", title: "Experience", children: /* @__PURE__ */ jsxDEV10(Outlet3, {}, void 0, !1, {
          fileName: "app/routes/profile.tsx",
          lineNumber: 91,
          columnNumber: 33
        }, this) }, "/profile/jobs", !1, {
          fileName: "app/routes/profile.tsx",
          lineNumber: 90,
          columnNumber: 29
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/profile.tsx",
        lineNumber: 79,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/routes/profile.tsx",
        lineNumber: 78,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV10(Divider, {}, void 0, !1, {
        fileName: "app/routes/profile.tsx",
        lineNumber: 95,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/profile.tsx",
      lineNumber: 67,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/profile.tsx",
    lineNumber: 49,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/profile.tsx",
    lineNumber: 48,
    columnNumber: 9
  }, this);
}

// app/routes/addJob.tsx
var addJob_exports = {};
__export(addJob_exports, {
  action: () => action9
});
import { parse as parse9 } from "@conform-to/zod";
import invariant13 from "tiny-invariant";
import { redirect as redirect7 } from "@remix-run/node";
async function action9({ request }) {
  let user = await authenticator.isAuthenticated(request);
  if (!user)
    throw new Error("User is not authenticated");
  let formData = await request.formData(), submission = parse9(formData, { schema: UserJobSchema });
  console.log("submission"), console.log(submission), invariant13(submission.value, "Bad form values");
  let { company, title, location, startDate, endDate, responsibilities, achievements } = submission.value;
  return await prisma.userJob.create({
    data: {
      userId: user.id,
      company,
      title,
      location,
      startDate,
      endDate,
      responsibilities,
      achievements
    }
  }), redirect7("/profile/jobs");
}

// app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action10
});
var action10 = async ({ request }) => (console.log("in logout action"), await authenticator.logout(request, {
  redirectTo: "/"
}));

// app/routes/resume.tsx
var resume_exports = {};
__export(resume_exports, {
  default: () => ResumePage
});

// app/utils/resume/resume.pdf.server.ts
import { jsPDF } from "jspdf";
async function createPDFResume(user) {
  let {
    firstName,
    lastName,
    phoneNumber,
    location,
    profession,
    email,
    github,
    linkedIn,
    frameworks,
    languages,
    libraries,
    tools,
    userJob,
    education,
    projects
  } = user, doc = new jsPDF(), pageWidth = doc.internal.pageSize.getWidth(), leftMargin = 10, rightMargin = 10, centerWidth = pageWidth / 2;
  doc.setFontSize(20), doc.text("Chase Buchholz", centerWidth, 10, { align: "center" }), doc.text("Software Engineer", centerWidth, 20, { align: "center" }), doc.setFontSize(12), doc.text(
    "Kansas City, MO 64012 \u2022 chasebuchholzdev@gmail.com \u2022 (816) 678-9990",
    centerWidth,
    30,
    { align: "center" }
  ), doc.setFontSize(16), doc.text("PROFESSIONAL EXPERIENCE", 10, 40), doc.line(10, 42, 200, 42);
  let company = "Go Local Interactive";
  doc.text(company, leftMargin, 50);
  let rightTextWidth = doc.getStringUnitWidth(location) * doc.getFontSize() / doc.internal.scaleFactor, rightTextX = pageWidth - rightTextWidth - rightMargin;
  doc.text(location, rightTextX, 50);
  let jobTitle = "Go Local Interactive";
  doc.text(jobTitle, leftMargin, 50);
  let jobLocation = "Overland Park, KS", jobLocationWidth = doc.getStringUnitWidth(location) * doc.getFontSize() / doc.internal.scaleFactor, jobLocationX = pageWidth - jobLocationWidth - rightMargin;
  doc.text(jobLocation, jobLocationX, 50), doc.save("a1.pdf");
  function splitRow2(leftText, rightText, yPos) {
    doc.setFontSize(12), doc.text(leftText, leftMargin, yPos);
    let rightTextWidth2 = doc.getStringUnitWidth(rightText) * doc.getFontSize() / doc.internal.scaleFactor, rightTextX2 = pageWidth - rightTextWidth2 - rightMargin;
    doc.text(rightText, rightTextX2, yPos);
  }
}

// app/routes/resume.tsx
import { jsxDEV as jsxDEV11 } from "react/jsx-dev-runtime";
async function ResumePage() {
  return await createPDFResume(), /* @__PURE__ */ jsxDEV11("div", { children: "hi" }, void 0, !1, {
    fileName: "app/routes/resume.tsx",
    lineNumber: 13,
    columnNumber: 12
  }, this);
}

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action11,
  default: () => Login
});
import { useActionData as useActionData2 } from "@remix-run/react";
import { conform as conform5, useForm as useForm5 } from "@conform-to/react";
import { Tabs as Tabs3, Tab as Tab3, Input as Input6, Link as Link4, Button as Button6, Card as Card2, CardBody as CardBody2 } from "@nextui-org/react";
import { parse as parse10 } from "@conform-to/zod";
import React3 from "react";
import { jsxDEV as jsxDEV12 } from "react/jsx-dev-runtime";
async function action11({ request }) {
  return await authenticator.authenticate("form", request, {
    failureRedirect: "/",
    successRedirect: "/"
  });
}
function Login() {
  let data = useActionData2();
  console.log(`data: ${data}`);
  let [selected, setSelected] = React3.useState("Login");
  console.log(selected);
  let [form, { email, password }] = useForm5({
    onValidate({ formData }) {
      return parse10(formData, { schema: AuthSchema });
    }
  });
  return /* @__PURE__ */ jsxDEV12("div", { className: "flex w-full justify-center", children: /* @__PURE__ */ jsxDEV12(Card2, { className: "max-w-full w-[340px] mt-[100px]", children: /* @__PURE__ */ jsxDEV12(CardBody2, { className: "overflow-hidden", children: /* @__PURE__ */ jsxDEV12(
    Tabs3,
    {
      fullWidth: !0,
      size: "md",
      "aria-label": "Tabs form",
      selectedKey: selected,
      onSelectionChange: (key) => {
        setSelected(key.toString());
      },
      children: [
        /* @__PURE__ */ jsxDEV12(Tab3, { title: "Login", children: /* @__PURE__ */ jsxDEV12("form", { ...form.props, method: "post", action: "/login", children: [
          /* @__PURE__ */ jsxDEV12(
            Input6,
            {
              isRequired: !0,
              label: "Email",
              placeholder: "Enter your email",
              type: "email",
              className: "mb-3",
              ...conform5.input(email)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/login.tsx",
              lineNumber: 48,
              columnNumber: 33
            },
            this
          ),
          /* @__PURE__ */ jsxDEV12(
            Input6,
            {
              isRequired: !0,
              label: "Password",
              placeholder: "Enter your password",
              type: "password",
              ...conform5.input(password),
              className: "mb-3"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/login.tsx",
              lineNumber: 56,
              columnNumber: 33
            },
            this
          ),
          /* @__PURE__ */ jsxDEV12("p", { className: "text-center text-small", children: [
            "Need to create an account?",
            " ",
            /* @__PURE__ */ jsxDEV12(
              Link4,
              {
                size: "sm",
                onPress: () => setSelected("Register"),
                className: "cursor-pointer mb-2",
                children: "Sign up"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/login.tsx",
                lineNumber: 66,
                columnNumber: 37
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/login.tsx",
            lineNumber: 64,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ jsxDEV12(Button6, { fullWidth: !0, color: "primary", type: "submit", children: "Login" }, void 0, !1, {
            fileName: "app/routes/login.tsx",
            lineNumber: 73,
            columnNumber: 33
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/login.tsx",
          lineNumber: 47,
          columnNumber: 29
        }, this) }, "Login", !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 46,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV12(Tab3, { title: "Register", children: /* @__PURE__ */ jsxDEV12("form", { ...form.props, method: "post", action: "/register", children: [
          /* @__PURE__ */ jsxDEV12(
            Input6,
            {
              isRequired: !0,
              label: "Email",
              placeholder: "Enter your email",
              type: "email",
              className: "mb-3",
              ...conform5.input(email)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/login.tsx",
              lineNumber: 80,
              columnNumber: 33
            },
            this
          ),
          /* @__PURE__ */ jsxDEV12(
            Input6,
            {
              isRequired: !0,
              label: "Password",
              placeholder: "Enter your password",
              type: "password",
              className: "mb-3",
              ...conform5.input(password)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/login.tsx",
              lineNumber: 88,
              columnNumber: 33
            },
            this
          ),
          /* @__PURE__ */ jsxDEV12("p", { className: "text-center text-small", children: [
            "Already have an account?",
            " ",
            /* @__PURE__ */ jsxDEV12(
              Link4,
              {
                size: "sm",
                onPress: () => setSelected("Login"),
                className: "cursor-pointer mb-2",
                children: "Login"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/login.tsx",
                lineNumber: 98,
                columnNumber: 37
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/login.tsx",
            lineNumber: 96,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ jsxDEV12(Button6, { fullWidth: !0, color: "primary", type: "submit", children: "Register" }, void 0, !1, {
            fileName: "app/routes/login.tsx",
            lineNumber: 105,
            columnNumber: 33
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/login.tsx",
          lineNumber: 79,
          columnNumber: 29
        }, this) }, "Register", !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 78,
          columnNumber: 25
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/login.tsx",
      lineNumber: 40,
      columnNumber: 21
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/login.tsx",
    lineNumber: 39,
    columnNumber: 17
  }, this) }, void 0, !1, {
    fileName: "app/routes/login.tsx",
    lineNumber: 38,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/login.tsx",
    lineNumber: 37,
    columnNumber: 9
  }, this);
}

// app/routes/jobs.tsx
var jobs_exports = {};
__export(jobs_exports, {
  action: () => action12,
  default: () => Jobs,
  loader: () => loader7
});
import { Form as Form7, useLoaderData as useLoaderData5 } from "@remix-run/react";

// app/components/Skills.tsx
import { Button as Button7 } from "@nextui-org/react";
import { jsxDEV as jsxDEV13 } from "react/jsx-dev-runtime";
var Skills = ({ skills, skillsFilter, setSkillsFilter }) => /* @__PURE__ */ jsxDEV13("div", { children: [
  /* @__PURE__ */ jsxDEV13("h3", { className: "text-left text-2xl my-3", children: "Skills" }, void 0, !1, {
    fileName: "app/components/Skills.tsx",
    lineNumber: 7,
    columnNumber: 13
  }, this),
  /* @__PURE__ */ jsxDEV13("div", { className: "flex flex-wrap gap-2 bg-black rounded-2xl", children: skills.map((skill) => /* @__PURE__ */ jsxDEV13(
    Button7,
    {
      onClick: () => setSkillsFilter(
        skillsFilter.includes(skill) ? skillsFilter.filter((s) => s !== skill) : [...skillsFilter, skill]
      ),
      color: skillsFilter.includes(skill) ? "success" : "default",
      children: skill
    },
    skill,
    !1,
    {
      fileName: "app/components/Skills.tsx",
      lineNumber: 11,
      columnNumber: 25
    },
    this
  )) }, void 0, !1, {
    fileName: "app/components/Skills.tsx",
    lineNumber: 8,
    columnNumber: 13
  }, this)
] }, void 0, !0, {
  fileName: "app/components/Skills.tsx",
  lineNumber: 6,
  columnNumber: 9
}, this);

// app/routes/jobs.tsx
import { json as json6 } from "@remix-run/node";
import { Table, TableBody, TableColumn, TableRow, TableCell, TableHeader } from "@nextui-org/react";
import React4 from "react";

// app/components/TableCellContent.tsx
import { Form as Form6 } from "@remix-run/react";
import { jsxDEV as jsxDEV14 } from "react/jsx-dev-runtime";
var TableCellContent = ({ job, columnKey }) => {
  let cellValue = job[columnKey] || "Gen";
  if (Array.isArray(cellValue))
    return cellValue.join(", ");
  switch (columnKey) {
    case "description":
      return excerpt(cellValue);
    case "generateResume":
      return /* @__PURE__ */ jsxDEV14(Form6, { action: "/jobs", method: "post", children: [
        /* @__PURE__ */ jsxDEV14("input", { type: "hidden", name: "jobDescription", value: job.description }, void 0, !1, {
          fileName: "app/components/TableCellContent.tsx",
          lineNumber: 24,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV14("input", { type: "submit", value: "Create Resume" }, void 0, !1, {
          fileName: "app/components/TableCellContent.tsx",
          lineNumber: 25,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/TableCellContent.tsx",
        lineNumber: 23,
        columnNumber: 17
      }, this);
    default:
      return cellValue;
  }
};

// app/routes/jobs.tsx
import { jsxDEV as jsxDEV15 } from "react/jsx-dev-runtime";
async function action12({ request }) {
  return console.log("sending request to openai"), await createDocxResume(request);
}
async function loader7() {
  let jobs = await prisma.job.findMany(), skills = Array.from(new Set(jobs.flatMap((job) => job.keywords))).sort();
  return json6({ jobs, skills });
}
function Jobs() {
  let { jobs, skills } = useLoaderData5(), [skillsFilter, setSkillsFilter] = React4.useState(["all"]), filteredItems = React4.useMemo(() => {
    let filteredJobs = [...jobs];
    return skillsFilter.length === 1 && skillsFilter.includes("all") || (filteredJobs = filteredJobs.filter((job) => job.keywords.some((keyword) => skillsFilter.includes(keyword)))), filteredJobs;
  }, [jobs, skillsFilter]);
  return /* @__PURE__ */ jsxDEV15("div", { className: "max-w-[1200px] mx-auto", children: [
    /* @__PURE__ */ jsxDEV15("h1", { children: "Jobs" }, void 0, !1, {
      fileName: "app/routes/jobs.tsx",
      lineNumber: 45,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV15(Form7, { action: "/jobs", method: "post", children: /* @__PURE__ */ jsxDEV15("input", { type: "submit", value: "Create Resume" }, void 0, !1, {
      fileName: "app/routes/jobs.tsx",
      lineNumber: 47,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/jobs.tsx",
      lineNumber: 46,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV15("div", { children: /* @__PURE__ */ jsxDEV15(
      Skills,
      {
        skills,
        skillsFilter,
        setSkillsFilter
      },
      void 0,
      !1,
      {
        fileName: "app/routes/jobs.tsx",
        lineNumber: 50,
        columnNumber: 17
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/jobs.tsx",
      lineNumber: 49,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV15(Table, { topContent: `${filteredItems.length} jobs`, className: "mt-3", children: [
      /* @__PURE__ */ jsxDEV15(TableHeader, { children: [
        /* @__PURE__ */ jsxDEV15(TableColumn, { className: "w-[100px]", children: "Title" }, "title", !1, {
          fileName: "app/routes/jobs.tsx",
          lineNumber: 59,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV15(TableColumn, { children: "Description" }, "description", !1, {
          fileName: "app/routes/jobs.tsx",
          lineNumber: 62,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV15(TableColumn, { children: "Salary" }, "salary", !1, {
          fileName: "app/routes/jobs.tsx",
          lineNumber: 63,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV15(TableColumn, { children: "Skills" }, "keywords", !1, {
          fileName: "app/routes/jobs.tsx",
          lineNumber: 64,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV15(TableColumn, { children: "Company" }, "company", !1, {
          fileName: "app/routes/jobs.tsx",
          lineNumber: 65,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV15(TableColumn, { children: "Location" }, "location", !1, {
          fileName: "app/routes/jobs.tsx",
          lineNumber: 66,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV15(TableColumn, { children: "Source" }, "source", !1, {
          fileName: "app/routes/jobs.tsx",
          lineNumber: 67,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV15(TableColumn, { children: "Gen" }, "generateResume", !1, {
          fileName: "app/routes/jobs.tsx",
          lineNumber: 68,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/jobs.tsx",
        lineNumber: 58,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV15(TableBody, { items: filteredItems, children: (item) => /* @__PURE__ */ jsxDEV15(TableRow, { children: (columnKey) => /* @__PURE__ */ jsxDEV15(TableCell, { children: /* @__PURE__ */ jsxDEV15(TableCellContent, { job: item, columnKey }, void 0, !1, {
        fileName: "app/routes/jobs.tsx",
        lineNumber: 76,
        columnNumber: 41
      }, this) }, void 0, !1, {
        fileName: "app/routes/jobs.tsx",
        lineNumber: 75,
        columnNumber: 37
      }, this) }, void 0, !1, {
        fileName: "app/routes/jobs.tsx",
        lineNumber: 73,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/routes/jobs.tsx",
        lineNumber: 70,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/jobs.tsx",
      lineNumber: 57,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/jobs.tsx",
    lineNumber: 44,
    columnNumber: 9
  }, this);
}

// app/routes/pdf.tsx
var pdf_exports = {};
__export(pdf_exports, {
  loader: () => loader8
});
import { renderToStream } from "@react-pdf/renderer";

// app/components/Resume.tsx
import { Document as Document2, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { jsxDEV as jsxDEV16 } from "react/jsx-dev-runtime";
var bullets = [
  "Spearheaded the creation of custom WordPress themes and plugins, tailored specifically for diverse industries\u2014self-storage, pest control, multifamily, and banking\u2014ensuring high client satisfaction and user experience.",
  "Engineered and integrated advanced features in WordPress sites by incorporating third-party services and APIs, resulting in enhanced functionality and meeting detailed client requirements.",
  "Led the development of specialized dashboards using React, which interfaced with Laravel APIs, enabling clients to effectively manage their properties and facilities with ease.",
  "Designed and implemented an innovative updater API for WordPress themes and plugins, automating updates across numerous sites, which significantly increased efficiency and reduced maintenance workload.",
  "Authored a Python script for automated image optimization, achieving target size requirements, thus saving considerable developer time and contributing to increased company profits.",
  "Initiated and successfully drove a quality assurance campaign by incorporating a comprehensive testing framework for APIs, boosting test coverage from 0% to 73% within a few months.",
  "Extended API capabilities to integrate additional property and facility management systems, unlocking new customer segments and supporting business growth.",
  "Contributed to the professional development of the team by conducting technical interviews, mentoring new developers, and maintaining high code standards through rigorous pull request reviews.",
  "Maintained a commitment to continuous learning and staying abreast of industry best practices, which, combined with solid technical expertise in WordPress, front-end technologies, and PHP, significantly improves project outcomes."
], styles = StyleSheet.create({
  page: {
    padding: 60
  },
  header: {
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 10
  },
  horizontalRule: {
    marginTop: 2,
    marginBottom: 10,
    width: "100%",
    // Adjust width as needed
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    borderBottomStyle: "solid"
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5
  },
  listItem: {
    flexDirection: "row",
    marginBottom: 5,
    fontSize: 10
  },
  bulletPoint: {
    width: 10,
    // Adjust the width for the bullet point
    textAlign: "right",
    marginRight: 7
  },
  bulletedList: {
    paddingLeft: 15
  },
  itemContent: {
    flex: 1,
    textAlign: "left"
    // Adjust text alignment as needed
  },
  contactDetails: {
    fontSize: 10,
    fontWeight: "normal",
    marginTop: 5
  },
  section: {
    marginBottom: 10
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5
  },
  subheader: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 3
  },
  education: {
    fontSize: 10,
    marginBottom: 3
  },
  technicalSkills: {
    fontSize: 10,
    marginBottom: 3
  }
});
function Section({ title, children }) {
  return /* @__PURE__ */ jsxDEV16(View, { style: styles.section, children: [
    /* @__PURE__ */ jsxDEV16(Text, { style: styles.sectionTitle, children: title }, void 0, !1, {
      fileName: "app/components/Resume.tsx",
      lineNumber: 96,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV16(View, { style: styles.horizontalRule }, void 0, !1, {
      fileName: "app/components/Resume.tsx",
      lineNumber: 97,
      columnNumber: 13
    }, this),
    children
  ] }, void 0, !0, {
    fileName: "app/components/Resume.tsx",
    lineNumber: 95,
    columnNumber: 9
  }, this);
}
function PDFDocument({ user }) {
  let {
    firstName,
    lastName,
    email,
    profession,
    location,
    phoneNumber,
    linkedIn,
    github,
    languages,
    frameworks,
    tools,
    libraries,
    userJob
  } = user, { company, title, location: jobLocation, startDate, endDate } = userJob[0];
  return console.log(company), console.log(title), console.log(user), /* @__PURE__ */ jsxDEV16(Document2, { children: /* @__PURE__ */ jsxDEV16(Page, { style: styles.page, children: [
    /* @__PURE__ */ jsxDEV16(View, { style: styles.header, children: [
      /* @__PURE__ */ jsxDEV16(Text, { children: [
        firstName,
        " ",
        lastName
      ] }, void 0, !0, {
        fileName: "app/components/Resume.tsx",
        lineNumber: 131,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV16(Text, { children: profession }, void 0, !1, {
        fileName: "app/components/Resume.tsx",
        lineNumber: 134,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV16(Text, { style: styles.contactDetails, children: [
        location,
        " \u2022 ",
        email,
        " \u2022 ",
        phoneNumber
      ] }, void 0, !0, {
        fileName: "app/components/Resume.tsx",
        lineNumber: 135,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Resume.tsx",
      lineNumber: 130,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV16(Section, { title: "PROFESSIONAL EXPERIENCE", children: [
      /* @__PURE__ */ jsxDEV16(View, { style: styles.subheader, children: [
        /* @__PURE__ */ jsxDEV16(View, { style: styles.flexRow, children: [
          /* @__PURE__ */ jsxDEV16(Text, { children: company }, void 0, !1, {
            fileName: "app/components/Resume.tsx",
            lineNumber: 142,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV16(Text, { children: location }, void 0, !1, {
            fileName: "app/components/Resume.tsx",
            lineNumber: 143,
            columnNumber: 29
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Resume.tsx",
          lineNumber: 141,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV16(View, { style: styles.flexRow, children: [
          /* @__PURE__ */ jsxDEV16(Text, { children: title }, void 0, !1, {
            fileName: "app/components/Resume.tsx",
            lineNumber: 146,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV16(Text, { children: [
            startDate,
            " - ",
            endDate
          ] }, void 0, !0, {
            fileName: "app/components/Resume.tsx",
            lineNumber: 147,
            columnNumber: 29
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Resume.tsx",
          lineNumber: 145,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Resume.tsx",
        lineNumber: 140,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV16(View, { style: styles.bulletedList, children: bullets.map((bullet, i) => /* @__PURE__ */ jsxDEV16(View, { style: styles.listItem, children: [
        /* @__PURE__ */ jsxDEV16(Text, { style: styles.bulletPoint, children: "\u2022" }, void 0, !1, {
          fileName: "app/components/Resume.tsx",
          lineNumber: 156,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV16(Text, { style: styles.itemContent, children: bullet }, void 0, !1, {
          fileName: "app/components/Resume.tsx",
          lineNumber: 157,
          columnNumber: 33
        }, this)
      ] }, i, !0, {
        fileName: "app/components/Resume.tsx",
        lineNumber: 155,
        columnNumber: 29
      }, this)) }, void 0, !1, {
        fileName: "app/components/Resume.tsx",
        lineNumber: 153,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Resume.tsx",
      lineNumber: 139,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV16(Section, { title: "EDUCATION", children: /* @__PURE__ */ jsxDEV16(View, { style: styles.education, children: [
      /* @__PURE__ */ jsxDEV16(View, { style: styles.flexRow, children: [
        /* @__PURE__ */ jsxDEV16(Text, { children: "Parkville University" }, void 0, !1, {
          fileName: "app/components/Resume.tsx",
          lineNumber: 166,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ jsxDEV16(Text, { children: "Parkville, MO" }, void 0, !1, {
          fileName: "app/components/Resume.tsx",
          lineNumber: 167,
          columnNumber: 29
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Resume.tsx",
        lineNumber: 165,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ jsxDEV16(View, { style: styles.flexRow, children: [
        /* @__PURE__ */ jsxDEV16(Text, { children: "Bachelor of Science in Computer Science" }, void 0, !1, {
          fileName: "app/components/Resume.tsx",
          lineNumber: 170,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ jsxDEV16(Text, { children: "Aug 2017 - May 2017" }, void 0, !1, {
          fileName: "app/components/Resume.tsx",
          lineNumber: 171,
          columnNumber: 29
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Resume.tsx",
        lineNumber: 169,
        columnNumber: 25
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Resume.tsx",
      lineNumber: 164,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/components/Resume.tsx",
      lineNumber: 163,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV16(Section, { title: "TECHNICAL SKILLS", children: /* @__PURE__ */ jsxDEV16(View, { style: styles.technicalSkills, children: [
      /* @__PURE__ */ jsxDEV16(View, { style: { flexDirection: "row" }, children: [
        /* @__PURE__ */ jsxDEV16(
          Text,
          {
            children: "Languages:"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Resume.tsx",
            lineNumber: 179,
            columnNumber: 29
          },
          this
        ),
        /* @__PURE__ */ jsxDEV16(Text, { children: "JavaScript, PHP, SQL, HTML/CSS" }, void 0, !1, {
          fileName: "app/components/Resume.tsx",
          lineNumber: 188,
          columnNumber: 29
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Resume.tsx",
        lineNumber: 178,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ jsxDEV16(View, { style: { flexDirection: "row" }, children: [
        /* @__PURE__ */ jsxDEV16(
          Text,
          {
            children: "Frameworks:"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Resume.tsx",
            lineNumber: 191,
            columnNumber: 29
          },
          this
        ),
        /* @__PURE__ */ jsxDEV16(Text, { children: "React, Node.js, Remix, Laravel, PHPUnit, WordPress" }, void 0, !1, {
          fileName: "app/components/Resume.tsx",
          lineNumber: 200,
          columnNumber: 29
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Resume.tsx",
        lineNumber: 190,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ jsxDEV16(View, { style: { flexDirection: "row" }, children: [
        /* @__PURE__ */ jsxDEV16(
          Text,
          {
            children: "Libraries:"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Resume.tsx",
            lineNumber: 203,
            columnNumber: 29
          },
          this
        ),
        /* @__PURE__ */ jsxDEV16(Text, { children: "Prisma, MongoDB, ChakraUI, NextUI, tRPC" }, void 0, !1, {
          fileName: "app/components/Resume.tsx",
          lineNumber: 212,
          columnNumber: 29
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Resume.tsx",
        lineNumber: 202,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ jsxDEV16(View, { style: { flexDirection: "row" }, children: [
        /* @__PURE__ */ jsxDEV16(
          Text,
          {
            children: "Developer Tools:"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Resume.tsx",
            lineNumber: 215,
            columnNumber: 29
          },
          this
        ),
        /* @__PURE__ */ jsxDEV16(Text, { children: "Git, S3, Cloudflare R2, PHPStorm" }, void 0, !1, {
          fileName: "app/components/Resume.tsx",
          lineNumber: 224,
          columnNumber: 29
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Resume.tsx",
        lineNumber: 214,
        columnNumber: 25
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Resume.tsx",
      lineNumber: 177,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/components/Resume.tsx",
      lineNumber: 176,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Resume.tsx",
    lineNumber: 129,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/Resume.tsx",
    lineNumber: 128,
    columnNumber: 9
  }, this);
}

// app/routes/pdf.tsx
import invariant14 from "tiny-invariant";
import { jsxDEV as jsxDEV17 } from "react/jsx-dev-runtime";
var loader8 = async ({ request, params }) => {
  let auth = await authenticator.isAuthenticated(request);
  invariant14(auth, "You must be logged in to use this feature");
  let user = await prisma.user.findUnique({
    where: {
      id: auth.id
    },
    include: {
      userJob: !0
    }
  }), stream = await renderToStream(/* @__PURE__ */ jsxDEV17(PDFDocument, { user }, void 0, !1, {
    fileName: "app/routes/pdf.tsx",
    lineNumber: 27,
    columnNumber: 39
  }, this)), body = await new Promise((resolve, reject) => {
    let buffers = [];
    stream.on("data", (data) => {
      buffers.push(data);
    }), stream.on("end", () => {
      resolve(Buffer.concat(buffers));
    }), stream.on("error", reject);
  }), headers = new Headers({ "Content-Type": "application/pdf" });
  return new Response(body, { status: 200, headers });
};

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-QZ6H52AR.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-B47IEXX4.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-U53SBQSA.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-3IWF7DW3.js", imports: ["/build/_shared/chunk-LJ55JIBM.js", "/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-VMRQGUXU.js", "/build/_shared/chunk-RR5CIDIT.js", "/build/_shared/chunk-JSCKBFOW.js", "/build/_shared/chunk-XEG4DGED.js", "/build/_shared/chunk-NMZL6IDN.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/addJob": { id: "routes/addJob", parentId: "root", path: "addJob", index: void 0, caseSensitive: void 0, module: "/build/routes/addJob-3GCTW25O.js", imports: void 0, hasAction: !0, hasLoader: !1, hasErrorBoundary: !1 }, "routes/createResume": { id: "routes/createResume", parentId: "root", path: "createResume", index: void 0, caseSensitive: void 0, module: "/build/routes/createResume-MKDFZKLH.js", imports: void 0, hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/deleteJob": { id: "routes/deleteJob", parentId: "root", path: "deleteJob", index: void 0, caseSensitive: void 0, module: "/build/routes/deleteJob-SX57IUSB.js", imports: void 0, hasAction: !0, hasLoader: !1, hasErrorBoundary: !1 }, "routes/jobs": { id: "routes/jobs", parentId: "root", path: "jobs", index: void 0, caseSensitive: void 0, module: "/build/routes/jobs-YHI33MOX.js", imports: ["/build/_shared/chunk-MGB6ZWPH.js", "/build/_shared/chunk-IWXJHFRL.js", "/build/_shared/chunk-P2DSO4RZ.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-WVX74XUA.js", imports: ["/build/_shared/chunk-ESAISFTX.js", "/build/_shared/chunk-25U62PYY.js", "/build/_shared/chunk-CRRESCNE.js", "/build/_shared/chunk-P2DSO4RZ.js"], hasAction: !0, hasLoader: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-GGSXPJWV.js", imports: void 0, hasAction: !0, hasLoader: !1, hasErrorBoundary: !1 }, "routes/pdf": { id: "routes/pdf", parentId: "root", path: "pdf", index: void 0, caseSensitive: void 0, module: "/build/routes/pdf-Z3HI2ULS.js", imports: void 0, hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/profile": { id: "routes/profile", parentId: "root", path: "profile", index: void 0, caseSensitive: void 0, module: "/build/routes/profile-TNPZXYBQ.js", imports: ["/build/_shared/chunk-ESAISFTX.js", "/build/_shared/chunk-MGB6ZWPH.js", "/build/_shared/chunk-25U62PYY.js", "/build/_shared/chunk-AUYLHJJM.js", "/build/_shared/chunk-IWXJHFRL.js", "/build/_shared/chunk-CRRESCNE.js", "/build/_shared/chunk-P2DSO4RZ.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/profile.education": { id: "routes/profile.education", parentId: "routes/profile", path: "education", index: void 0, caseSensitive: void 0, module: "/build/routes/profile.education-RAT5MC44.js", imports: ["/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-JSCKBFOW.js", "/build/_shared/chunk-XEG4DGED.js", "/build/_shared/chunk-NMZL6IDN.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/profile.jobs": { id: "routes/profile.jobs", parentId: "routes/profile", path: "jobs", index: void 0, caseSensitive: void 0, module: "/build/routes/profile.jobs-2MTHRQ2O.js", imports: ["/build/_shared/chunk-VMRQGUXU.js", "/build/_shared/chunk-RR5CIDIT.js", "/build/_shared/chunk-JSCKBFOW.js", "/build/_shared/chunk-XEG4DGED.js", "/build/_shared/chunk-NMZL6IDN.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/register": { id: "routes/register", parentId: "root", path: "register", index: void 0, caseSensitive: void 0, module: "/build/routes/register-S7TH6MKI.js", imports: void 0, hasAction: !0, hasLoader: !1, hasErrorBoundary: !1 }, "routes/resources.resume": { id: "routes/resources.resume", parentId: "root", path: "resources/resume", index: void 0, caseSensitive: void 0, module: "/build/routes/resources.resume-F6SBIWUM.js", imports: void 0, hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/resume": { id: "routes/resume", parentId: "root", path: "resume", index: void 0, caseSensitive: void 0, module: "/build/routes/resume-NYHRQIZS.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/updateEducation": { id: "routes/updateEducation", parentId: "root", path: "updateEducation", index: void 0, caseSensitive: void 0, module: "/build/routes/updateEducation-RO46CDAA.js", imports: void 0, hasAction: !0, hasLoader: !1, hasErrorBoundary: !1 }, "routes/updateJob": { id: "routes/updateJob", parentId: "root", path: "updateJob", index: void 0, caseSensitive: void 0, module: "/build/routes/updateJob-4UPARTI5.js", imports: void 0, hasAction: !0, hasLoader: !1, hasErrorBoundary: !1 }, "routes/updateProfile": { id: "routes/updateProfile", parentId: "root", path: "updateProfile", index: void 0, caseSensitive: void 0, module: "/build/routes/updateProfile-YTMLIH2T.js", imports: void 0, hasAction: !0, hasLoader: !1, hasErrorBoundary: !1 } }, version: "a062a90d", hmr: { runtime: "/build/_shared\\chunk-U53SBQSA.js", timestamp: 1705261963296 }, url: "/build/manifest-A062A90D.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/profile.education": {
    id: "routes/profile.education",
    parentId: "routes/profile",
    path: "education",
    index: void 0,
    caseSensitive: void 0,
    module: profile_education_exports
  },
  "routes/resources.resume": {
    id: "routes/resources.resume",
    parentId: "root",
    path: "resources/resume",
    index: void 0,
    caseSensitive: void 0,
    module: resources_resume_exports
  },
  "routes/updateEducation": {
    id: "routes/updateEducation",
    parentId: "root",
    path: "updateEducation",
    index: void 0,
    caseSensitive: void 0,
    module: updateEducation_exports
  },
  "routes/updateProfile": {
    id: "routes/updateProfile",
    parentId: "root",
    path: "updateProfile",
    index: void 0,
    caseSensitive: void 0,
    module: updateProfile_exports
  },
  "routes/createResume": {
    id: "routes/createResume",
    parentId: "root",
    path: "createResume",
    index: void 0,
    caseSensitive: void 0,
    module: createResume_exports
  },
  "routes/profile.jobs": {
    id: "routes/profile.jobs",
    parentId: "routes/profile",
    path: "jobs",
    index: void 0,
    caseSensitive: void 0,
    module: profile_jobs_exports
  },
  "routes/deleteJob": {
    id: "routes/deleteJob",
    parentId: "root",
    path: "deleteJob",
    index: void 0,
    caseSensitive: void 0,
    module: deleteJob_exports
  },
  "routes/updateJob": {
    id: "routes/updateJob",
    parentId: "root",
    path: "updateJob",
    index: void 0,
    caseSensitive: void 0,
    module: updateJob_exports
  },
  "routes/register": {
    id: "routes/register",
    parentId: "root",
    path: "register",
    index: void 0,
    caseSensitive: void 0,
    module: register_exports
  },
  "routes/profile": {
    id: "routes/profile",
    parentId: "root",
    path: "profile",
    index: void 0,
    caseSensitive: void 0,
    module: profile_exports
  },
  "routes/addJob": {
    id: "routes/addJob",
    parentId: "root",
    path: "addJob",
    index: void 0,
    caseSensitive: void 0,
    module: addJob_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/resume": {
    id: "routes/resume",
    parentId: "root",
    path: "resume",
    index: void 0,
    caseSensitive: void 0,
    module: resume_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/jobs": {
    id: "routes/jobs",
    parentId: "root",
    path: "jobs",
    index: void 0,
    caseSensitive: void 0,
    module: jobs_exports
  },
  "routes/pdf": {
    id: "routes/pdf",
    parentId: "root",
    path: "pdf",
    index: void 0,
    caseSensitive: void 0,
    module: pdf_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
