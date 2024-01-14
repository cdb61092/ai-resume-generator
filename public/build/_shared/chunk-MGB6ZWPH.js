import {
  createHotContext
} from "/build/_shared/chunk-U53SBQSA.js";

// app/utils/index.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\utils\\index.ts"
  );
  import.meta.hot.lastModified = "1702179426366.679";
}
var excerpt = (text, length = 1e3) => {
  if (text.length < length)
    return text;
  return `${text.slice(0, length)}...'`;
};
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export {
  excerpt,
  capitalize
};
//# sourceMappingURL=/build/_shared/chunk-MGB6ZWPH.js.map
