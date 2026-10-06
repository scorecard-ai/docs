# CLAUDE.md

This file provides guidance to Claude Code when working with the Scorecard AI documentation repository.

## Project Context
This is the official documentation site for Scorecard AI, a platform for testing, evaluating, and monitoring AI applications. The documentation is built with Mintlify, a modern documentation framework optimized for developer experience.

## Commands

### Development
- Start local dev server: `npx mintlify dev` (opens at http://localhost:3000 or http://localhost:3001)
- Validate docs configuration: `npx mintlify broken-links`

### API Reference Generation
- Generate API reference docs from OpenAPI spec: `npx @mintlify/scraping@latest openapi-file openapi.yaml -o api-reference`
- The OpenAPI spec (v3.1.0) is located at `/openapi.yaml`

### Troubleshooting
- Ensure you're in the folder containing `docs.json` when running commands
- Clear cache if changes aren't showing: `rm -rf .mintlify`
- Check for broken links: `npx mintlify broken-links`

## Architecture Overview

This is a Mintlify-based documentation site for Scorecard AI. The repository structure consists of:

- **docs.json**: Main configuration file defining navigation, styling, and site structure
- **openapi.yaml**: OpenAPI 3.1.0 specification for the Scorecard API v2
- **changelog.mdx**: Weekly product updates in a standardized format
- **MDX documentation files** organized by type. The navigation in `docs.json`, not the folder, decides where a page appears:
  - `/intro/`: Overview, quickstarts, concepts, FAQ, and some older integration and guide pages
  - `/features/`: One page per product area (tracing, records, testsets, metrics, runs, review, admin)
  - `/integrations/`: How to send traces from a specific SDK, framework, or agent
  - `/guides/`: Task-focused recipes that combine several features
  - `/api-reference/`: Auto-generated API documentation from the OpenAPI spec
- **Images**: Stored in `/images/` subdirectories organized by feature/topic
- **Snippets**: Reusable components in `/snippets/`: `dark-light-image.jsx` and `claude-code-env.mdx` (the Claude Code tracing environment variables, used on several pages)

### Navigation

The **Documentation** tab follows the user's journey: Get started, Trace, Evaluate, Review, Automate, Guides, Administration. The **Integrations** tab holds one page per tracing integration. Keep groups short (two to six pages) and add new pages to the group that matches the job they help with.

### URLs are stable

Page paths are linked from the Scorecard app, partner docs (Vercel AI SDK, OpenAI Agents SDK), and old changelog entries, so don't rename or move a page without a redirect in `docs.json`. When you remove a page, redirect it to the page that now covers its topic. Redirect destinations without an `#anchor` pass `mintlify broken-links`; destinations with one fail it if anything in the docs links to the source.

The app links to these pages and anchors; keep them working:

- `intro/`: `tracing-quickstart` (`#sdk-wrappers-for-deeper-integration`), `sdk-quickstart`, `claude-agent-sdk-tracing`, `langchain-quickstart`, and the redirected `ui-quickstart`, `metrics-quickstart`, `mcp-quickstart`, `quickstart`
- `features/`: `tracing`, `testsets` (`#importing-from-a-file`), `metrics`, `runs`, `prompts`, `projects`, `mcp`, `ai-sdk-wrapper`, `github-actions` (`#setup-the-github-integration`), and the redirected `systems`, `analysis`, `monitoring`

When a heading an app link points to changes, keep the old anchor with an empty `<a id="old-anchor" />` above the new heading.

### Images

The `check-unused-images` workflow fails if any file in `/images/` isn't referenced by an MDX page. Delete images when you stop using them, and add both light and dark versions when you add one.

## Writing Guidelines

- **Verify against the product.** Check behavior and UI labels in the product code before documenting them. Don't describe features that are internal, flagged off, or planned.
- **Lead with the task.** Start pages with what the reader can do, then show how. Keep explanation short and link to [Core concepts](/intro/concepts) for background.
- **Sentence case** for titles and headings. Task pages start with a verb ("Push scores from your code"); reference pages use a noun ("Metrics").
- **UI labels in bold**, exactly as the app shows them: **Score Records**, **Add Metric**. Product nouns stay lowercase in prose: testset, testcase, record, run, metric, system version.
- **No marketing language** in docs pages: no "powerful", "seamless", "simply", emojis, or unverifiable claims. Use the `humanize` skill on new prose.
- **Code samples run as written.** Include imports and environment variables, show Python and TypeScript in a `CodeGroup` when both SDKs support the feature, and use the current SDK method signatures. `run_and_evaluate` always passes `(inputs, system_version)` in Python.
- **Every page** has a `title` and a one-sentence `description` (it feeds search and `llms.txt`) and ends with a `## Next steps` `CardGroup` of two to four links. Hub pages that are already lists of links (Overview, FAQ, Integrations overview), Security and privacy, and the changelog don't need one.
- **Integration pages** follow one shape: what it traces, prerequisites, install, configure, verify on the Records page, what's captured, troubleshooting, next steps.
- **Don't repeat setup blocks.** Link to the page that owns a topic, or use a snippet from `/snippets/`.

## Changelog Format Guidelines

The changelog.mdx file is updated weekly with product updates. Follow this standardized format:

### Structure
```mdx
---
title: "Product Updates"
description: "New updates and improvements"
---

import { DarkLightImage } from "/snippets/dark-light-image.jsx";

<Update label="Month DD, YYYY">
  ### Major Feature Title

  One or two sentences stating what changed. No emojis, no rationale.

  <DarkLightImage
    lightSrc="/images/feature-name-light.png"
    caption={null}
    alt="Screenshot of the [feature name]"
  />

  ### Bug Fixes and Improvements

  - **[Component]** What changed
  - **[Feature Area]** What changed
</Update>
```

### Changelog Entry Guidelines

1. **Date Format**: Use "Month DD, YYYY" (e.g., "July 25, 2025")

2. **Default to minor**: Most changes belong as one-line bullets under "### Bug Fixes and Improvements" with a **[Component]** prefix. Many weeks the entire entry is just that list. Promote a change to its own feature section ONLY when it is a genuinely new user-facing capability — something a customer could not do before and needs to learn about. Removed controls, widened limits, new env vars, and UX polish are bullets, not sections.

3. **Section Headers**:
   - Plain text, no emojis
   - Keep titles concise and action-oriented
   - Use ### for main sections within each update

4. **Content Style**:
   - State WHAT changed, not why — no motivation, root-cause analysis, or implementation detail
   - Keep it short: 1–2 sentences per item
   - Be specific (names of controls, endpoints, limits, versions)
   - Link to relevant documentation with `[text](/path)`
   - Include version numbers for SDK releases

5. **Images**:
   - Use DarkLightImage component for UI screenshots (feature sections only)
   - Store images in `/images/` with descriptive names
   - Include both light and dark versions when applicable
   - Add meaningful alt text for accessibility

6. **Bug Fixes Format**:
   - Start with **[Component/Area]** in bold
   - Describe what was fixed, not just the bug
   - Group related fixes together

7. **Code Examples**:
   - Include code snippets for API/SDK updates
   - Show both Python and JavaScript examples when relevant
   - Use proper syntax highlighting

8. **Special Elements**:
   - Embed videos with iframe for major features
   - Use image width constraints for logos/posters
   - Include links to npm/PyPI for SDK releases

## Documentation Style Guidelines

### MDX Page Structure
Each MDX file must begin with frontmatter:
```mdx
---
title: "Page Title"
sidebarTitle: "Sidebar title (optional)"
description: "Page description"
icon: "icon-name" # Optional, from Font Awesome or Lucide
---
```

### Mintlify Components

#### Layout Components
- **Steps**: `<Steps>` with `<Step title="Step Title">` for step-by-step content
  - Props: `titleSize` ("p", "h2", "h3"), `icon`, `stepNumber`
- **Tabs**: `<Tabs>` with `<Tab title="Tab Name">` for switchable content
- **Accordion**: `<Accordion title="Title">` for collapsible sections
  - Props: `title`, `description`, `defaultOpen`, `icon`
- **AccordionGroup**: `<AccordionGroup>` wraps multiple accordions
- **Columns**: `<Columns cols={2}>` for grid layouts with Cards

#### Content Components
- **Card**: `<Card title="Title" icon="icon" href="/link">` for feature highlights
  - Props: `title`, `icon`, `iconType`, `color`, `href`, `horizontal`, `img`, `cta`, `arrow`
- **Frame**: `<Frame caption="Optional caption">` for centering images/components
- **CodeGroup**: `<CodeGroup>` wraps multiple code blocks with filenames for tabs
- **Icon**: `<Icon icon="name" size={32} color="#hex">` from Font Awesome/Lucide
- **Tooltip**: `<Tooltip tip="Hover text">Main text</Tooltip>` for hover definitions
- **DarkLightImage**: Custom component for theme-aware images

#### Callout Components
- **Note**: `<Note>Important information</Note>`
- **Warning**: `<Warning>Critical warning</Warning>`
- **Info**: `<Info>General information</Info>`
- **Tip**: `<Tip>Helpful tip</Tip>`
- **Check**: `<Check>Success message</Check>`
- **Update**: `<Update label="Date">Changelog content</Update>` for changelog entries

### Code Examples
- **Basic code block**: Use triple backticks with language
  ```javascript
  console.log("Hello");
  ```
- **Code block with title**:
  ```javascript title="example.js"
  console.log("Hello world");
  ```
- **Line highlighting**:
  ```javascript {1,3-5}
  console.log("Hello world")
  ```
- **Expandable code**:
  ```javascript title="Long Example" [expandable]
  console.log("Very long example...");
  ```
- **Inline code**: Use single backticks `code`
- **CodeGroup**: Each code block must have a filename
  - Wrap multiple code blocks with `<CodeGroup>` tags
  - Each code block needs a filename after the language identifier
  - Example: ` ```js example.js` for JavaScript files
  - Structure: Opening `<CodeGroup>`, multiple code blocks with filenames, closing tag

### Text Formatting
- Headers: `##` for section titles, `###` for subsections
- Styling: **bold**, _italic_, ~strikethrough~
- Links: `[text](url)` for external, `[text](/path)` for internal
- LaTeX: Inline `$equation$`, block `$$equation$$`

### Content Organization
- Follow hierarchical organization in docs.json navigation structure
- Place images in appropriate /images subdirectories
- Use descriptive file names matching navigation paths
- Maintain consistent structure across feature documentation

## Mintlify-Specific Features

### Configuration (docs.json)
- Theme: "maple" (modern, clean aesthetics for AI/SaaS products)
- Primary color: #ff6e3e (Scorecard orange)
- Icon library: Lucide
- Navigation structure with tabs, groups, and pages
- API documentation with code examples in JavaScript, Python, Go, and cURL

### AI Integration
- Pages automatically generate `/llms.txt` for AI indexing
- Markdown versions available for AI processing
- Quick copy/share options for AI tools

## Best Practices

1. **Image Management**:
   - Always provide both light and dark mode versions
   - Use WebP format for better compression when possible
   - Store in organized subdirectories by feature

2. **Link Management**:
   - Use relative links for internal navigation
   - Verify external links remain active
   - Run `npx mintlify broken-links` before committing

3. **Component Usage**:
   - Prefer Mintlify components over raw HTML
   - Use appropriate callout types for different messages
   - Leverage CodeGroup for multi-language examples

4. **Changelog Maintenance**:
   - Update weekly on consistent schedule
   - Archive older updates periodically
   - Include visual assets for major features
   - Cross-reference with documentation updates