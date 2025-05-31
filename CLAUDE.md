# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- Start local dev server: `mintlify dev`
- Re-install dependencies: `mintlify install`

### API Reference Generation
- Generate API reference docs from OpenAPI spec: `npx @mintlify/scraping@latest openapi-file openapi.yaml -o api-reference`

### Troubleshooting
- If `mintlify dev` isn't running: Run `mintlify install` to re-install dependencies
- Ensure you're in the folder containing `docs.json` when running commands

## Architecture Overview

This is a Mintlify-based documentation site for Scorecard AI. The repository structure consists of:

- **docs.json**: Main configuration file defining navigation, styling, and site structure
- **openapi.yaml**: OpenAPI 3.1.0 specification for the Scorecard API v2
- **MDX documentation files** organized by topic:
  - `/intro/`: Introduction and getting started guides
  - `/features/`: Feature documentation
  - `/how-to-use-scorecard/`: Tutorials and guides
  - `/api-reference/`: Auto-generated API documentation from OpenAPI spec
- **Images**: Stored in `/images/` subdirectories organized by feature/topic

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

#### Callout Components
- **Note**: `<Note>Important information</Note>`
- **Warning**: `<Warning>Critical warning</Warning>`
- **Info**: `<Info>General information</Info>`
- **Tip**: `<Tip>Helpful tip</Tip>`
- **Check**: `<Check>Success message</Check>`

### Code Examples
- **Basic code block**: Use triple backticks with language
  ```javascript
  console.log("Hello");
  ```
- **Code block with title**: ```javascript title="example.js"
- **Line highlighting**: ```javascript {1,3-5}
- **Expandable code**: ```javascript title="Long Example" [expandable]
- **Inline code**: Use single backticks `code`
- **CodeGroup**: Each code block must have a filename
  ```
  <CodeGroup>
    ```js example.js
    // JavaScript code
    ```
    ```py example.py
    # Python code
    ```
  </CodeGroup>
  ```

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

### AI Integration
- Pages automatically generate `/llms.txt` for AI indexing
- Markdown versions available for AI processing
- Quick copy/share options for AI tools

### Navigation Configuration
- Configure in docs.json under `navigation` property
- Support for tabs, groups, anchors, and dropdowns
- Version and language partitioning available

### Theme Options
Current theme is "maple" (modern, clean aesthetics for AI/SaaS products)