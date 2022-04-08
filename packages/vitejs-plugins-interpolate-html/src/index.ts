import type {
  IndexHtmlTransformContext,
  IndexHtmlTransformHook,
  Plugin,
} from "vite";

function escapeStringRegexp(str: string) {
  if (typeof str !== "string") {
    throw new TypeError("Expected a string");
  }

  // Escape characters with special meaning either inside or outside character sets.
  // Use a simple backslash escape when it’s always valid, and a `\xnn` escape when the simpler form would be disallowed by Unicode patterns’ stricter grammar.
  return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}

/**
 * index.html Transform Plugin
 *
 * @public
 */
export interface IndexHtmlTransformPlugin extends Plugin {
  transformIndexHtml: IndexHtmlTransformHook;
}

/**
 * Interpolate Options
 *
 * @public
 */
export interface InterpolateOptions {
  prefix?: string;
  suffix?: string;
}

/**
 * Interpolate
 *
 * @param replacements - 替代品
 * @param options - 选项
 * @returns
 */
export function interpolate(
  replacements: Record<string, string>,
  options: InterpolateOptions = {}
): IndexHtmlTransformPlugin {
  const { prefix = "%", suffix = "%" } = options;

  return {
    name: "vite-plugin-interpolate-html",

    transformIndexHtml(html: string, ctx: IndexHtmlTransformContext) {
      Object.entries(replacements).forEach(([key, value]) => {
        const pattern = `${prefix}${escapeStringRegexp(key)}${suffix}`;
        const regExp = new RegExp(pattern, "g");
        html = html.replace(regExp, value);
      });

      return html;
    },
  };
}

export default interpolate;
