# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with the Scorecard AI documentation repository.

## Project Context
This is the official documentation site for Scorecard AI, a platform for testing, evaluating, and monitoring AI applications. The documentation is built with Mintlify, a modern documentation framework optimized for developer experience.

## Commands

### Development
- Start local dev server: `mintlify dev` (opens at http://localhost:3000)
- Re-install dependencies: `mintlify install`
- Validate docs configuration: `mintlify broken-links`

### API Reference Generation
- Generate API reference docs from OpenAPI spec: `npx @mintlify/scraping@latest openapi-file openapi.yaml -o api-reference`
- The OpenAPI spec (v3.1.0) is located at `/openapi.yaml`

### Troubleshooting
- If `mintlify dev` isn't running: Run `mintlify install` to re-install dependencies
- Ensure you're in the folder containing `docs.json` when running commands
- Clear cache if changes aren't showing: `rm -rf .mintlify`
- Check for broken links: `mintlify broken-links`

## Architecture Overview

This is a Mintlify-based documentation site for Scorecard AI. The repository structure consists of:

- **docs.json**: Main configuration file defining navigation, styling, and site structure
- **openapi.yaml**: OpenAPI 3.1.0 specification for the Scorecard API v2
- **changelog.mdx**: Weekly product updates in a standardized format
- **MDX documentation files** organized by topic:
  - `/intro/`: Introduction and getting started guides
  - `/features/`: Feature documentation
  - `/how-to-use-scorecard/`: Tutorials and guides
  - `/api-reference/`: Auto-generated API documentation from OpenAPI spec
- **Images**: Stored in `/images/` subdirectories organized by feature/topic
- **Snippets**: Reusable React components in `/snippets/` (e.g., dark-light-image.jsx)

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
  ### 📊 Main Feature Title
  
  Brief description of the feature and its benefits. Explain what changed and why it matters to users.
  
  <DarkLightImage
    lightSrc="/images/feature-name-light.png"
    caption={null}
    alt="Screenshot of the [feature name]"
  />
  
  ### 🔍 Secondary Feature Title
  
  Description with bullet points if needed:
  
  - **Key point 1**: Description of the improvement
  - **Key point 2**: What users can now do
  - **Key point 3**: Technical details if relevant
  
  ### 🛠️ Bug Fixes and Improvements
  
  - **[Component]** Description of the fix or improvement
  - **[Feature Area]** What was changed and the impact
  - **[Performance]** Optimization details
</Update>
```

### Changelog Entry Guidelines

1. **Date Format**: Use "Month DD, YYYY" (e.g., "July 25, 2025")

2. **Section Headers**: 
   - Use emojis to make sections visually distinct and engaging
   - Common examples: 📊 for analytics, 🔍 for search/discovery, 🛠️ for bug fixes, 🚀 for performance, 🎨 for UI/design, 🤖 for AI features
   - Keep titles concise and action-oriented
   - Use ### for main sections within each update

3. **Content Style**:
   - Lead with user impact - what they can now do
   - Be specific about improvements (e.g., "reduced from ~15s to 3s")
   - Link to relevant documentation with `[text](/path)`
   - Include version numbers for SDK releases

4. **Images**:
   - Use DarkLightImage component for UI screenshots
   - Store images in `/images/` with descriptive names
   - Include both light and dark versions when applicable
   - Add meaningful alt text for accessibility

5. **Bug Fixes Format**:
   - Start with **[Component/Area]** in bold
   - Describe what was fixed, not just the bug
   - Group related fixes together

6. **Code Examples**:
   - Include code snippets for API/SDK updates
   - Show both Python and JavaScript examples when relevant
   - Use proper syntax highlighting

7. **Special Elements**:
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
  - Example: ` ```js example.js ` for JavaScript files

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

### Analytics
- Google Analytics 4 integration (G-Y98MZSSCE3)
- Track documentation usage and user behavior

## Best Practices

1. **Image Management**:
   - Always provide both light and dark mode versions
   - Use WebP format for better compression when possible
   - Store in organized subdirectories by feature

2. **Link Management**:
   - Use relative links for internal navigation
   - Verify external links remain active
   - Run `mintlify broken-links` before committing

3. **Component Usage**:
   - Prefer Mintlify components over raw HTML
   - Use appropriate callout types for different messages
   - Leverage CodeGroup for multi-language examples

4. **Changelog Maintenance**:
   - Update weekly on consistent schedule
   - Archive older updates periodically
   - Include visual assets for major features
   - Cross-reference with documentation updates