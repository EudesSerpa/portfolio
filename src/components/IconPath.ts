/**
 * Code from: https://stackblitz.com/github/withastro/astro/tree/latest/examples/portfolio?file=src%2Fcomponents%2FIconPaths.ts
 *
 * 1. Remove the `<svg>` wrapper so you only have elements like `<path>`, `<circle>`, `<rect>` etc.
 * 2. Remove any `stroke="#000000"` attributes
 * 3. Replace any `fill="#000000"` attributes with `stroke="none"`
 *    (or add `stroke="none"` on shapes with no `fill` or `stroke` specified)
 */
export const iconPaths = {
	arrow: `<path stroke="none" d="m216.49 104.49-80 80a12 12 0 0 1-17 0l-80-80a12 12 0 0 1 17-17L128 159l71.51-71.52a12 12 0 0 1 17 17Z"/>`,
	"moon-stars": `
    <path
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
      d="M216 112V64m24 24h-48m-24-64v32m16-16h-32m65 113A92 92 0 0 1 103 39h0a92 92 0 1 0 114 114Z"/>
  `,
	sun: `<circle cx="128" cy="128" r="60" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M128 36V16M63 63 49 49m-13 79H16m47 65-14 14m79 13v20m65-47 14 14m13-79h20m-47-65 14-14"/>`,
};
