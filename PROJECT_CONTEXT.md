# Project Context

## Goal

Turn the Figma personal website design into a static front-end site.

Confirmed requirements:

- Stack: Astro + Vue + Tailwind CSS.
- Content: Markdown files for articles.
- Deployment: GitHub Pages using a `username.github.io` repository.
- Pages: home, articles, about, plus generated article detail pages.
- Theme: light/dark toggle based on the two Figma variants.
- Home title: `Ad infinitum`.
- Chinese font direction: Source Han Serif style. Current implementation uses Google Fonts `Noto Serif SC` as the web fallback, plus `Gloock` and `EB Garamond`.

## Figma Source

File URL:

```txt
https://www.figma.com/design/pOV34laEpn5rotdBPimaQp/individual-website--Copy-?t=50wmiORywewevr4X-0
```

Figma file key:

```txt
pOV34laEpn5rotdBPimaQp
```

Important Figma observations from extracted data:

- Canvas/frame size: `1920 x 1080` for home variants.
- Dark background: `#1A1A1A`.
- Light background: `#FFFFFF`.
- Main title: `Ad infinitum`, positioned around `x=240`, `y=307`, size `128px`, font `Gloock`.
- Subtitle: `向着远方`, positioned around `x=240`, `y=432`, size `48px`, font `Source Han Serif CN Medium`.
- Large background keyword text: positioned around `x=-60`, `y=25`, size `200px`, font `Source Han Serif CN Light`, stroked gray.
- Header height: about `106px`.
- Navigation starts around `x=108`, `y=0`, horizontal gap `32px`.
- Navigation items use Chinese main label around `48px` and English sublabel around `15px`, uppercase, Garamond bold, wide letter spacing.
- Quote block: positioned around `x=1104`, `y=846`, width `784`, height `135`, font around `36px`.
- Article/card page size: dark long frame `1920 x 2147`.
- Article card/post element starts around `x=258`, `y=355`, width `889`, height `160`.
- Timeline/decorative vertical line around `x=258`, `y=175`, height about `1797.5`, stroke `#A8A8A8`, weight `4px`.

## Current Implementation

The project has been created in the workspace root:

```txt
C:\Users\Rocora\Documents\web
```

Key files:

- `astro.config.mjs`: Astro config, Vue integration, Tailwind Vite plugin, GitHub Pages site URL.
- `package.json`: dependencies and npm scripts.
- `src/styles/global.css`: Tailwind v4 import, typography plugin, theme CSS variables, Google font imports.
- `src/layouts/BaseLayout.astro`: global HTML shell, header, theme initialization script.
- `src/components/Header.astro`: bilingual navigation and current page state.
- `src/components/ThemeToggle.vue`: Vue light/dark theme toggle using `localStorage`.
- `src/components/TimelinePostCard.astro`: article list card component.
- `src/pages/index.astro`: current home page.
- `src/pages/about.astro`: about page.
- `src/pages/posts/index.astro`: article timeline list page.
- `src/pages/posts/[slug].astro`: generated article detail page.
- `src/layouts/PostLayout.astro`: Markdown article detail layout.
- `src/content.config.ts`: Astro 6 content collection config.
- `src/content/posts/website-note.md`: sample article.
- `src/content/posts/design-direction.md`: sample article.

## Validation So Far

Dependencies were installed successfully after correcting package versions.

The build command passed:

```txt
npm run build
```

Build output generated these pages:

- `/`
- `/about/`
- `/posts/`
- `/posts/website-note/`
- `/posts/design-direction/`

Local dev server command:

```txt
npm run dev -- --host 127.0.0.1
```

Local URL:

```txt
http://127.0.0.1:4321/
```

## Known Problems

The user reviewed the local result and said the finished page is very poor compared with Figma.

Likely causes:

- Current implementation is too generic and not pixel-faithful enough.
- Home page background keyword layer is not positioned like Figma.
- Header/nav visual treatment is too normal and does not match the Figma composition.
- Article timeline/card page is only inspired by the Figma post card, not close enough to the original long-frame design.
- Current responsive choices may have diluted the desktop Figma layout too much.
- The implementation should be rebuilt from exact Figma geometry first, then made responsive second.

Important limitation:

- The model cannot read `image.png` screenshot input in this environment. Use Figma MCP data instead of screenshots for comparison.

## Next Recommended Work

Priority should be design correction, not adding features.

Recommended next steps:

1. Re-fetch focused Figma data for specific frames, especially home dark/light and article dark/light frames.
2. Export SVG/PNG assets from Figma for decorative shapes if needed.
3. Rework `Header.astro` to use Figma-like absolute positioning, sizes, letter spacing, and active states.
4. Rework `src/pages/index.astro` around a 1920px design coordinate system with responsive scaling.
5. Rework `src/pages/posts/index.astro` to match the Figma long dark/light card page: vertical line at the correct x-position, post cards at correct x/y positions, and background texture/decorative line treatment.
6. Keep Markdown/content routing intact unless required.
7. Run `npm run build` after each significant correction.

## Notes For Future Agent

- Do not assume the current visual implementation is acceptable; treat it as a functional scaffold only.
- Preserve the working Astro/Vue/Tailwind/Markdown architecture.
- Make the smallest correct changes focused on visual fidelity.
- If the GitHub username is not `rocora`, update `site` in `astro.config.mjs`.
- Do not revert unrelated user changes if the worktree becomes dirty.
