# AGENTS.md

This guide is for AI agents working in the hwj-zone blog repository.

## Project Overview

Next.js 16.1.6 (App Router) blog with React 19.2.4. Content fetched from remote markdown via GitHub/Gitee raw URLs. Uses unified/remark/rehype for markdown processing.

## Development Commands

```bash
# Development
bun run dev          # Start dev server with hot reload (localhost:3000)
bun run build        # Production build
bun run start        # Start production server

# Type Checking (jsconfig.json exists but no tsc command configured)
# No linting configured (no ESLint/Prettier)
# No tests configured
```

CI/CD: Jenkinsfile uses `yarn build` with Node.js 14 Alpine image.

## Import Patterns

- ES6 imports exclusively
- Path aliases (defined in jsconfig.json):
  - `@/*` → `src/*`
  - `@components` → `src/components`
  - `@styles` → `src/styles`
  - `@styles/*` → `src/styles/*`
  - `@apis` → `src/apis`
  - `@libs` → `src/libs`
  - `@config` → `src/common-config`

```javascript
// Examples
import { PostList } from '@components'
import { getIndexData } from '@/apis'
import { CONTENT_BASE } from '@config'
import styles from './Post.module.scss'
```

## Component Structure

### Server Components (default)
- Async functions in `src/app/` directory
- No `'use client'` directive
- Used for pages and data fetching
- Can use React's `cache()` for memoization

```javascript
export default async function Page({ params }) {
  const data = await fetchData()
  return <PostList postsMeta={posts} />
}
```

### Client Components
- Marked with `'use client'` at the top
- Used for interactivity (useState, useEffect, usePathname)
- Located in `src/components/`

```javascript
'use client'
import { useState } from 'react'
export default function NavBlock({ title, href }) {
  const [loading, setLoading] = useState(false)
  // ...
}
```

### Component Organization
- Directory index.js files re-export components:
  ```javascript
  // src/components/index.js
  export { PageHeader, PostList, Aside, /*...*/ }
  ```
- Each component folder: index.js + subcomponents
- CSS Modules co-located: `ComponentName.module.scss`

## Data Fetching Patterns

### API Functions (src/apis/)
- Async functions that fetch remote data
- Use `cache()` wrapper for memoization:
  ```javascript
  import { cache } from 'react'
  const fetchData = cache(() => getIndexData())
  ```

### Fetch Configuration
- Cache control: `{ cache: 'no-cache' }` or `{ next: { tags: ['tag'] } }`
- 404 handling: `notFound()` from 'next/navigation'
- Error response check:
  ```javascript
  const response = await fetch(url, { cache: 'no-cache' })
  if (!response.ok) {
    notFound()
  }
  return await response.json()
  ```

### Page Data Pattern
```javascript
const fetchData = cache((cat, path) => getPost(cat, path))

export async function generateMetadata({ params }) {
  const postData = await fetchData(cat, path)
  return { title: `${postData.title} | ${DEFAULT_TITLE}` }
}

export default async function Page({ params }) {
  const data = await fetchData(cat, path)
  return <Content {...data} />
}
```

## Styling

### CSS Modules (SCSS)
- Component-scoped styles: `ComponentName.module.scss`
- Import: `import styles from './ComponentName.module.scss'`
- Usage: `className={styles.className}`

### Global Styles
- `src/styles/globals.scss` - global styles, animations
- `src/styles/_colors.scss` - color variables (`colors.$bg-color`)
- `src/styles/_commons.scss` - common variables (`commons.$layer-1`)

### SCSS Imports
```scss
@use '../../styles/colors';
@use '../../styles/commons';

.className {
  color: colors.$bg-color;
  z-index: commons.$layer-1;
}
```

### Z-Index Layers (commons.scss)
- `$lowest-layer: 0`
- `$layer-1: 1000` through `$layer-8: 3320`
- `$highest-layer: 99999`

## Naming Conventions

- **Components**: PascalCase (`PostList`, `NavBlock`)
- **Functions**: camelCase (`fetchData`, `createMeta`)
- **Variables**: camelCase (`posts`, `isLoading`)
- **Files**: kebab-case (`post-list/item.js`, `page-header.module.scss`)
- **Constants**: UPPER_SNAKE_CASE (`CONTENT_BASE`, `DEFAULT_TITLE`)

## Error Handling

- Missing resources: `notFound()` from 'next/navigation'
- Fetch errors: Check `response.ok` before parsing
- No explicit try/catch in current codebase - let Next.js handle

## Markdown Processing

Content uses unified pipeline:
- `remarkParse` → `remarkGfm` → `remarkRehype` → `rehypeRewrite` → `rehypePrism` → `rehypeReact`
- Frontmatter: TOML (gray-matter with toml engine)
- Code highlighting: prismjs with language imports

## API Routes

Route handlers in `src/app/` use standard Next.js pattern:
```javascript
export async function GET(request, { params }) {
  const data = await fetchData(params.id)
  return Response.json(data)
}
```

## Path Aliases Reference

Always use path aliases for internal imports:
- `@components` for components
- `@apis` for API functions
- `@styles` (or `@styles/*`) for styles
- `@config` for `src/common-config.js`
- `@libs` for libraries
- `@/*` for any other src/ path

## Environment Variables

- `CONTENT_BASE`: Remote markdown URL (Gitee in dev, GitHub in prod)
- `NODE_ENV`: development vs production
