import { install } from "./docsify-share";

if (!(window as any).$docsify) {
    (window as any).$docsify = {};
}

(window as any).$docsify.plugins = (
    (window as any).$docsify.plugins || []
).concat(install);

export * from "./docsify-share";
