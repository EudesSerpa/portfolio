/**
 * Code from: https://stackblitz.com/github/withastro/astro/tree/latest/examples/portfolio?file=src%2Fcomponents%2FIconPaths.ts
 *
 * 1. Remove the `<svg>` wrapper so you only have elements like `<path>`, `<circle>`, `<rect>` etc.
 * 2. Remove any `stroke="#000000"` attributes
 * 3. Replace any `fill="#000000"` attributes with `stroke="none"`
 *    (or add `stroke="none"` on shapes with no `fill` or `stroke` specified)
 *
 * Considerations: All icons must be 256 in size
 */
export const iconPaths = {
	"arrow-top": `<path stroke="none" d="M128 85.33c-2.5 0-4.9.87-6.83 2.46l-64 53.33a10.68 10.68 0 0 0 13.66 16.43l57.17-47.8 57.17 46.09a10.67 10.67 0 0 0 15.04-1.6 10.65 10.65 0 0 0-1.5-15.57l-64-51.52a10.67 10.67 0 0 0-6.71-1.82Z"/>`,
	"arrow-bottom": `<path stroke="none" d="M128 170.67c-2.5 0-4.9-.87-6.83-2.46l-64-53.33a10.68 10.68 0 0 1 13.66-16.43l57.17 47.8 57.17-46.09a10.67 10.67 0 0 1 15.04 1.6 10.65 10.65 0 0 1-1.5 15.57l-64 51.52a10.66 10.66 0 0 1-6.71 1.82Z"/>`,
	"arrow-left": `<path stroke="none" d="M85.33 128c0-2.5.87-4.9 2.46-6.83l53.33-64a10.68 10.68 0 0 1 16.43 13.66L109.75 128l46.09 57.17a10.67 10.67 0 0 1-1.6 15.04 10.65 10.65 0 0 1-15.57-1.5l-51.52-64a10.67 10.67 0 0 1-1.82-6.71Z"/>`,
	"arrow-right": `<path stroke="none" d="M170.67 128c0-2.5-.87-4.9-2.46-6.83l-53.33-64a10.68 10.68 0 0 0-16.43 13.66l47.8 57.17-46.09 57.17a10.67 10.67 0 0 0 1.6 15.04 10.65 10.65 0 0 0 15.57-1.5l51.52-64a10.66 10.66 0 0 0 1.82-6.71Z"/>`,
	close: `<path stroke="none" d="m151.7 127.97 71.43-71.43a16.8 16.8 0 0 0 0-23.67 16.82 16.82 0 0 0-23.67 0l-71.43 71.43-71.44-71.43A16.74 16.74 0 0 0 28 44.71a16.82 16.82 0 0 0 4.93 11.83l71.44 71.43-71.44 71.44A16.74 16.74 0 0 0 28 211.24a16.74 16.74 0 0 0 28.6 11.84l71.43-71.44 71.43 71.44a16.8 16.8 0 0 0 23.67 0 16.8 16.8 0 0 0 0-23.67l-71.43-71.44Z"/>`,
	code: `<path stroke="none" d="M69.87 88.6 31.74 128l38.13 39.4c2.52 2.6 4.1 6.35 4.4 10.4.3 4.06-.72 8.1-2.82 11.23-2.1 3.13-5.12 5.1-8.4 5.46-3.26.37-6.52-.89-9.04-3.5L4.46 139.8a15.4 15.4 0 0 1-3.29-5.28A18.5 18.5 0 0 1 0 128c0-2.26.4-4.48 1.17-6.52a15.4 15.4 0 0 1 3.29-5.28L54 65a11.9 11.9 0 0 1 4.24-2.87 10.15 10.15 0 0 1 9.44 1.07 13.2 13.2 0 0 1 3.76 3.76 16.77 16.77 0 0 1 2.31 5.27 18.87 18.87 0 0 1-.86 11.7 15.22 15.22 0 0 1-3.03 4.67Zm181.67 27.6L202 65a11.9 11.9 0 0 0-4.24-2.87 10.15 10.15 0 0 0-9.44 1.07 13.35 13.35 0 0 0-3.76 3.76 16.78 16.78 0 0 0-2.31 5.27 18.88 18.88 0 0 0 .86 11.7 15.2 15.2 0 0 0 3.03 4.67l38.13 39.4-38.13 39.4a15.2 15.2 0 0 0-3.03 4.66 18.21 18.21 0 0 0-1.37 5.74c-.3 4.06.72 8.1 2.82 11.23 2.1 3.13 5.12 5.1 8.4 5.46 1.61.18 3.25-.03 4.8-.63 1.55-.6 3-1.58 4.24-2.87l49.55-51.2a15.42 15.42 0 0 0 3.3-5.28A18.51 18.51 0 0 0 256 128c0-2.26-.4-4.48-1.17-6.52a15.42 15.42 0 0 0-3.29-5.28ZM165.27.92c-3.1-1.39-6.5-1.2-9.48.52-2.97 1.72-5.28 4.84-6.4 8.67L83.33 235.38a18.75 18.75 0 0 0 .4 11.75 15.63 15.63 0 0 0 2.87 4.84c1.2 1.36 2.6 2.42 4.13 3.1a10.22 10.22 0 0 0 9.48-.51 13.1 13.1 0 0 0 3.9-3.55 16.4 16.4 0 0 0 2.5-5.13l66.06-225.27a18.73 18.73 0 0 0-.41-11.75 15.63 15.63 0 0 0-2.86-4.83 12.25 12.25 0 0 0-4.13-3.1Z"/>`,
	eye: `<path d="M233.28 123.13c-6.83-11.84-44.37-71.26-108.16-69.34-58.99 1.5-93.12 53.34-102.4 69.34a10.67 10.67 0 0 0 0 10.66c6.72 11.63 42.67 69.34 105.5 69.34h2.66c58.99-1.5 93.23-53.34 102.4-69.34a10.67 10.67 0 0 0 0-10.66Zm-102.93 58.66C84.37 182.86 54.4 143.5 45 128.46c10.67-17.18 38.51-52.27 81.18-53.33 45.76-1.18 75.84 38.29 85.33 53.33-10.99 17.17-38.5 52.26-81.17 53.33Z" stroke="none"/><path d="M128 91.12a37.34 37.34 0 1 0 0 74.68 37.34 37.34 0 0 0 0-74.68Zm0 53.34a16 16 0 1 1 0-32 16 16 0 0 1 0 32Z" stroke="none"/>`,
	heart: `<path d="M240 98a57.63 57.63 0 0 1-17 41l-89.3 90.62a8 8 0 0 1-11.4 0L33 139a58 58 0 0 1 82-82.1l13 12.15 13.09-12.19A58 58 0 0 1 240 98Z"/>`,
	"moon-stars": `
    <path
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
      d="M216 112V64m24 24h-48m-24-64v32m16-16h-32m65 113A92 92 0 0 1 103 39h0a92 92 0 1 0 114 114Z"/>
  `,
	sun: `<circle cx="128" cy="128" r="60" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M128 36V16M63 63 49 49m-13 79H16m47 65-14 14m79 13v20m65-47 14 14m13-79h20m-47-65 14-14"/>`,
	github: `<path stroke="none" d="M128 0a125.314 125.314 0 0 0-48.984 9.985c-15.53 6.593-29.64 16.255-41.526 28.436C13.486 63.021 0 96.387 0 131.178c0 57.98 36.736 107.172 87.552 124.619 6.4 1.049 8.448-3.017 8.448-6.559v-22.169c-35.456 7.871-43.008-17.578-43.008-17.578-5.888-15.217-14.208-19.283-14.208-19.283-11.648-8.133.896-7.871.896-7.871 12.8.918 19.584 13.512 19.584 13.512 11.136 19.939 29.952 14.036 37.248 10.887 1.152-8.526 4.48-14.298 8.064-17.578-28.416-3.279-58.24-14.56-58.24-64.539 0-14.561 4.864-26.236 13.184-35.55-1.28-3.279-5.76-16.921 1.28-34.63 0 0 10.752-3.542 35.2 13.38 10.112-2.886 21.12-4.329 32-4.329 10.88 0 21.888 1.443 32 4.329 24.448-16.922 35.2-13.38 35.2-13.38 7.04 17.709 2.56 31.351 1.28 34.63 8.32 9.314 13.184 20.989 13.184 35.55 0 50.11-29.952 61.129-58.496 64.408 4.608 4.067 8.832 12.069 8.832 24.268v35.943c0 3.542 2.048 7.739 8.576 6.559C219.392 238.219 256 189.158 256 131.178a134.02 134.02 0 0 0-9.743-50.2c-6.433-15.915-15.861-30.376-27.747-42.557-11.886-12.18-25.997-21.843-41.527-28.436A125.31 125.31 0 0 0 128 0Z"/>`,
	linkedin: `<path stroke="none" d="M229 10H27c-9 0-17 8-17 17v202c0 9 8 17 17 17h202c9 0 17-8 17-17V27c0-9-8-17-17-17ZM80 211H45V98h35v113ZM62 83a20 20 0 1 1 0-40 20 20 0 0 1 0 40Zm149 128h-35v-55c0-13 0-30-18-30s-21 15-21 29v56h-35V98h34v16c5-9 16-18 33-18 36 0 42 23 42 53v62Z"/>`,
	message: `<path stroke="none" d="M202.667 42.667H53.334a32 32 0 0 0-32 32v106.667a31.998 31.998 0 0 0 32 32h149.333a32.002 32.002 0 0 0 32-32V74.667a32 32 0 0 0-32-32ZM195.521 64l-67.52 50.667L60.481 64h135.04Zm7.146 128H53.334a10.664 10.664 0 0 1-10.667-10.666v-104l78.934 59.2a10.67 10.67 0 0 0 12.8 0l78.933-59.2v104A10.666 10.666 0 0 1 202.667 192Z"/>`,
	"external-link": `
	<path stroke="none" d="M213.335 117.333A10.667 10.667 0 0 0 202.668 128v64a10.666 10.666 0 0 1-10.667 10.667h-128A10.665 10.665 0 0 1 53.335 192V64A10.667 10.667 0 0 1 64 53.333h64a10.667 10.667 0 1 0 0-21.333h-64a32 32 0 0 0-32 32v128a31.999 31.999 0 0 0 32 32h128a31.998 31.998 0 0 0 32-32v-64c0-2.829-1.123-5.542-3.124-7.542a10.663 10.663 0 0 0-7.542-3.125Z"/>
	<path stroke="none" d="M170.668 53.333h16.853l-67.093 66.987a10.672 10.672 0 0 0-3.155 7.573 10.673 10.673 0 0 0 3.155 7.574 10.67 10.67 0 0 0 15.147 0l67.093-66.987v16.853a10.668 10.668 0 0 0 18.209 7.543c2.001-2 3.124-4.714 3.124-7.543V42.667A10.664 10.664 0 0 0 213.335 32h-42.667a10.665 10.665 0 0 0-10.667 10.667 10.665 10.665 0 0 0 10.667 10.666Z"/>`,
	pause: `<path d="M200 32h-40a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h40a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm0 176h-40V48h40ZM96 32H56a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h40a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm0 176H56V48h40Z"/>`,
	play: `<path d="M232.4 114.49 88.32 26.35a16 16 0 0 0-16.2-.3A15.86 15.86 0 0 0 64 39.87v176.26A15.94 15.94 0 0 0 80 232a16.07 16.07 0 0 0 8.36-2.35l144.04-88.14a15.81 15.81 0 0 0 0-27ZM80 215.94V40l143.83 88Z"/>`,
	"check-mark": `<path stroke="none" d="M128 0a128 128 0 1 0 0 256 128 128 0 0 0 0-256Zm64 57 23 23-103 103-55-55 23-23 32 32 80-80Z" />`,
	pencil: `<path stroke="none" d="m192 0-32 32 64 64 32-32-64-64Zm-64 64L0 192v64h64l128-128-64-64Z" />`,
};
