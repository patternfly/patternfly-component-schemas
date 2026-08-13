# @patternfly/patternfly-component-schemas

JSON Schema and Zod schema metadata for PatternFly React components, providing structured validation and documentation for component props.

## 📦 Installation

```bash
npm install @patternfly/patternfly-component-schemas
```

> **Note:** This package includes **Zod v4** for runtime validation support.Learn more at [zod.dev/v4](https://zod.dev/v4).

## 🏗️ Structure

This package uses a split structure for optimal performance and modularity:

```
@patternfly/patternfly-component-schemas/
├── components/
│   ├── AboutModal/
│   │   ├── schema.json     # JSON Schema for AboutModal props
│   │   ├── schema.zod.ts   # Zod Schema for AboutModal props ✨
│   │   └── index.js        # Component metadata exports
│   ├── Button/
│   │   ├── schema.json
│   │   ├── schema.zod.ts   ✨
│   │   └── index.js
│   ├── Alert/
│   │   ├── schema.json
│   │   ├── schema.zod.ts   ✨
│   │   └── index.js
│   └── ... (462 total components)
├── zod/
│   └── index.ts            # Barrel export of all Zod schemas ✨
├── scripts/
│   ├── generate-schemas.js     # JSON Schema generation
│   └── generate-zod-schemas.js # Zod Schema generation ✨
├── index.js                # Main JSON Schema exports
├── component-metadata.json # Source metadata (dev only)
└── package.json
```

## 🤖 AI Integration

This package is specifically designed for AI-assisted development tools and Model Context Protocol (MCP) servers. AI systems can consume these schemas to:

- **Understand component structure** and available props
- **Validate component usage** in generated code
- **Provide intelligent suggestions** for prop values
- **Generate documentation** and examples
- **Assist with component selection** based on requirements

### MCP Server Integration
#### Individual Component Imports (Tree-Shakeable)
```javascript
// MCP servers can load and query component schemas
import { componentNames, getComponentSchema } from '@patternfly/patternfly-component-schemas';

// Discover available components
const components = componentNames; // 462 PatternFly components

// Get detailed component information
const buttonSchema = await getComponentSchema('Button');
// Returns: { schema, componentName, propsCount, requiredProps }
```

#### JSON-Optimized Integration
```javascript
// JSON-optimized interface with lazy loading:
// - Single import of lightweight metadata for fast discovery of all components
// - Bulk schema access lazy loaded on first query
// - Fast subsequent queries after initial load

import { componentNames, getComponentSchema } from '@patternfly/patternfly-component-schemas/json';

// Discover all available components (no full schemas loaded yet)
const components = componentNames; // 462 PatternFly components

// Get detailed component information (lazy loads full schemas on first call)
const buttonSchema = await getComponentSchema('Button');
// Returns JSON Schema with properties, required props, etc.
```

### Zod Schema - Runtime Validation for LLM-Generated Components ✨
```typescript
import { ButtonSchema, AlertSchema } from '@patternfly/patternfly-component-schemas/zod';

// Validate LLM-generated component props at runtime
const llmGeneratedProps = {
  variant: "primary",
  size: "lg",
  children: "Click me"
};

// Type-safe validation with detailed error messages
const validatedProps = ButtonSchema.parse(llmGeneratedProps);
// ✅ Returns type-safe props ready for React component

// Safe parsing with error handling
const result = AlertSchema.safeParse(userInput);
if (result.success) {
  // Use result.data with confidence
  return <Alert {...result.data} />;
} else {
  console.error('Invalid props:', result.error.issues);
}
```

### AI Assistant Examples
- **"What props does the Button component accept?"** → AI reads Button schema
- **"Generate a PatternFly Alert component"** → AI uses Alert schema for validation
- **"Show me all navigation components"** → AI filters components by name/description
- **"Create a form with proper PatternFly components"** → AI selects appropriate form components
- **"Validate this generated component"** → AI uses Zod schema for runtime validation ✨

## 📦 Package Architecture

### Two Interfaces for Different Needs

This package provides two interfaces optimized for different use cases:

#### 🌳 Individual Component Imports (Tree-Shakeable)
**Import**: `@patternfly/patternfly-component-schemas`

**Characteristics**:
- Optimized for selective access
- Each component loads individually
- Tree-shakeable (only import what you need)

#### 🚀 JSON-Optimized Interface
**Import**: `@patternfly/patternfly-component-schemas/json`

**Characteristics**:
- Optimized for bulk access patterns
- Lightweight metadata for fast discovery
- Lazy-loaded (full schemas on demand)

### Quick Decision Guide

**Use Tree-Shakeable if you**:
- Need minimal application bundle size
- Know which components you'll use at build time
- Want per-component imports

**Use JSON-Optimized if you**:
- Need all component metadata quickly
- Are building tools that need runtime discovery
- Want fast discovery and bulk operations

## 🔧 Development

### Building from Source
```bash
# Install dependencies
npm install

# Regenerate schemas from metadata
npm run build

# Clean and rebuild
npm run rebuild
```

### Customizing PatternFly Version (pfVersion)

You can pass a custom PatternFly version (`pfVersion`) when generating JSON schemas. This version is added to the generated `schemas/index.json` under the `pfVersion` key and is also exported as `pfVersion` from the JSON-optimized entry point (`@patternfly/patternfly-component-schemas/json`).

By default, the version is set to `6.x.x`, a compatible semver range.

To pass a custom version:

```bash
npm run build:json -- --pf-version=6.0.0-beta.3
```

### Source Data
The package is generated from `component-metadata.json` which contains the raw PatternFly component metadata for the latest release. This file is included in the git repository for development but excluded from the NPM package.

### Updating Component Metadata

**📋 Manual Process (Current)**
1. Clone https://github.com/patternfly/patternfly-doc-core
2. Run `npm run build:props` in the doc-core directory
3. Copy `dist/props.json` content to `component-metadata.json` of this repo
4. Run `npm run build` to regenerate schemas
5. Commit with: `feat(components): sync with PatternFly vX.X.X`
6. Push to `main` → **automatic release triggers** 🚀

**🔮 Future Automation**
- Dependency management via Renovate/Dependabot
- Automated PRs for PatternFly quarterly releases
- Human-in-the-loop review for component updates

## 📊 Package Contents

- **462 PatternFly components** with JSON Schema validation
- **462 PatternFly components** with Zod Schema validation ✨
- **3,487 component props** converted to Zod schemas ✨
- **Individual exports** for tree-shaking optimization
- **TypeScript-friendly** prop definitions
- **Runtime type inference** from Zod schemas ✨
- **Enum validation** for variant props
- **Required prop** indicators
- **Default value** documentation

## 🤖 AI & Tooling Benefits

This package is specifically designed for:
- **AI/LLM consumption** via Model Context Protocol (JSON Schema)
- **Runtime validation** of LLM-generated components (Zod) ✨
- **TypeScript type inference** from Zod schemas ✨
- **IDE autocompletion** and IntelliSense
- **Component validation** and linting
- **Documentation generation** 
- **Form builders** and UI tools
- **Code generation** assistants

## 🎯 Usage Examples

### JSON Schema (Documentation & Tooling)
```javascript
import { Button, Alert } from '@patternfly/patternfly-component-schemas';

// Use for documentation, IDE support, or MCP servers
console.log(Button.schema); // Full JSON Schema
console.log(Button.componentName); // "Button"
console.log(Button.propsCount); // 24
```

### Zod Schema (Runtime Validation) ✨
```typescript
import { ButtonSchema, AlertSchema, type ButtonProps } from '@patternfly/patternfly-component-schemas/zod';
import type { z } from 'zod';

// Basic validation
const props = ButtonSchema.parse({ variant: "primary" });

// Type inference
type InferredButtonProps = z.infer<typeof ButtonSchema>;
// Or use the exported type directly
const myProps: ButtonProps = { variant: "primary", size: "lg" };

// Safe parsing with error handling
const result = AlertSchema.safeParse(dynamicProps);
if (result.success) {
  console.log('Valid props:', result.data);
} else {
  console.error('Validation errors:', result.error.format());
}

// Dynamic component validation
import { getComponentSchema } from '@patternfly/patternfly-component-schemas/zod';

async function validateComponent(name: string, props: unknown) {
  const schema = await getComponentSchema(name);
  return schema.parse(props);
}
```

## 📄 License

MIT

## 🚀 Automated Releases

This package uses **semantic-release** for automated versioning and publishing based on conventional commits.

### Commit Message Format

Follow [Conventional Commits](https://conventionalcommits.org/) specification:

```
<type>[optional scope]: <description>
```

**Examples:**
```bash
feat: add new component schemas
fix: correct required props validation  
docs: update installation instructions
chore: update dependencies
```

### Release Process

1. **Push commits** to `main` branch using conventional format
2. **GitHub Actions** runs CI and tests
3. **Semantic-release** analyzes commits and publishes to NPM
4. **GitHub releases** created automatically

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Update `component-metadata.json` with your changes
4. Run `npm run build` to regenerate schemas
5. Commit using conventional commit format
6. Submit a pull request

### Development Setup

```bash
# Install dependencies
npm install

# Build schemas
npm run build

# Watch for changes
npm run dev

# Clean and rebuild
npm run rebuild
```

---

Generated schemas follow [JSON Schema Draft 2020-12](https://json-schema.org/draft/2020-12) specification.
