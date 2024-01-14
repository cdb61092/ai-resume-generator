// node_modules/@nextui-org/aria-utils/dist/chunk-3MION23H.mjs
"use client";

// node_modules/@nextui-org/aria-utils/dist/chunk-WQVQ7P2I.mjs
"use client";
var getTransformOrigins = (placement) => {
  const origins = {
    top: {
      originY: 1
    },
    bottom: {
      originY: 0
    },
    left: {
      originX: 1
    },
    right: {
      originX: 0
    },
    "top-start": {
      originX: 0,
      originY: 1
    },
    "top-end": {
      originX: 1,
      originY: 1
    },
    "bottom-start": {
      originX: 0,
      originY: 0
    },
    "bottom-end": {
      originX: 1,
      originY: 0
    },
    "right-start": {
      originX: 0,
      originY: 0
    },
    "right-end": {
      originX: 0,
      originY: 1
    },
    "left-start": {
      originX: 1,
      originY: 0
    },
    "left-end": {
      originX: 1,
      originY: 1
    }
  };
  return (origins == null ? void 0 : origins[placement]) || {};
};
var toReactAriaPlacement = (placement) => {
  const mapPositions = {
    top: "top",
    bottom: "bottom",
    left: "left",
    right: "right",
    "top-start": "top start",
    "top-end": "top end",
    "bottom-start": "bottom start",
    "bottom-end": "bottom end",
    "left-start": "left top",
    "left-end": "left bottom",
    "right-start": "right top",
    "right-end": "right bottom"
  };
  return mapPositions[placement];
};
var getShouldUseAxisPlacement = (axisPlacement, overlayPlacement) => {
  if (overlayPlacement.includes("-")) {
    const [position] = overlayPlacement.split("-");
    if (position.includes(axisPlacement)) {
      return false;
    }
  }
  return true;
};
var getArrowPlacement = (dynamicPlacement, placement) => {
  if (placement.includes("-")) {
    const [, position] = placement.split("-");
    return `${dynamicPlacement}-${position}`;
  }
  return dynamicPlacement;
};

// node_modules/@nextui-org/aria-utils/dist/chunk-DE4KHMGD.mjs
"use client";
var refCountMap = /* @__PURE__ */ new WeakMap();
var observerStack = [];
function ariaHideOutside(targets, root = document.body) {
  let visibleNodes = new Set(targets);
  let hiddenNodes = /* @__PURE__ */ new Set();
  let walk = (root2) => {
    for (let element of root2.querySelectorAll(
      "[data-live-announcer], [data-react-aria-top-layer]"
    )) {
      visibleNodes.add(element);
    }
    let acceptNode = (node) => {
      const parentElement = node.parentElement;
      if (visibleNodes.has(node) || hiddenNodes.has(parentElement) && parentElement.getAttribute("role") !== "row") {
        return NodeFilter.FILTER_REJECT;
      }
      for (let target of visibleNodes) {
        if (node.contains(target)) {
          return NodeFilter.FILTER_SKIP;
        }
      }
      return NodeFilter.FILTER_ACCEPT;
    };
    let walker = document.createTreeWalker(root2, NodeFilter.SHOW_ELEMENT, { acceptNode });
    let acceptRoot = acceptNode(root2);
    if (acceptRoot === NodeFilter.FILTER_ACCEPT) {
      hide(root2);
    }
    if (acceptRoot !== NodeFilter.FILTER_REJECT) {
      let node = walker.nextNode();
      while (node != null) {
        hide(node);
        node = walker.nextNode();
      }
    }
  };
  let hide = (node) => {
    var _a;
    let refCount = (_a = refCountMap.get(node)) != null ? _a : 0;
    if (node.getAttribute("aria-hidden") === "true" && refCount === 0) {
      return;
    }
    if (refCount === 0) {
      node.setAttribute("aria-hidden", "true");
    }
    hiddenNodes.add(node);
    refCountMap.set(node, refCount + 1);
  };
  if (observerStack.length) {
    observerStack[observerStack.length - 1].disconnect();
  }
  walk(root);
  let observer = new MutationObserver((changes) => {
    for (let change of changes) {
      if (change.type !== "childList" || change.addedNodes.length === 0) {
        continue;
      }
      if (![...visibleNodes, ...hiddenNodes].some((node) => node.contains(change.target))) {
        for (let node of change.removedNodes) {
          if (node instanceof Element) {
            visibleNodes.delete(node);
            hiddenNodes.delete(node);
          }
        }
        for (let node of change.addedNodes) {
          if ((node instanceof HTMLElement || node instanceof SVGElement) && (node.dataset.liveAnnouncer === "true" || node.dataset.reactAriaTopLayer === "true")) {
            visibleNodes.add(node);
          } else if (node instanceof Element) {
            walk(node);
          }
        }
      }
    }
  });
  observer.observe(root, { childList: true, subtree: true });
  let observerWrapper = {
    observe() {
      observer.observe(root, { childList: true, subtree: true });
    },
    disconnect() {
      observer.disconnect();
    }
  };
  observerStack.push(observerWrapper);
  return () => {
    observer.disconnect();
    for (let node of hiddenNodes) {
      let count = refCountMap.get(node);
      if (count == null) {
        continue;
      }
      if (count === 1) {
        node.removeAttribute("aria-hidden");
        refCountMap.delete(node);
      } else {
        refCountMap.set(node, count - 1);
      }
    }
    if (observerWrapper === observerStack[observerStack.length - 1]) {
      observerStack.pop();
      if (observerStack.length) {
        observerStack[observerStack.length - 1].observe();
      }
    } else {
      observerStack.splice(observerStack.indexOf(observerWrapper), 1);
    }
  };
}

// node_modules/@nextui-org/aria-utils/dist/index.mjs
"use client";

export {
  getTransformOrigins,
  toReactAriaPlacement,
  getShouldUseAxisPlacement,
  getArrowPlacement,
  ariaHideOutside
};
//# sourceMappingURL=/build/_shared/chunk-VMRQGUXU.js.map
