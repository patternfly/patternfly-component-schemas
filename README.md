# @patternfly/patternfly-component-schemas

JSON Schema metadata for PatternFly React components, providing structured validation and documentation for component props.

## 📦 Installation

```bash
npm install @patternfly/patternfly-component-schemas
```

## 🏗️ Structure

This package uses a split structure for optimal performance and modularity:

```
@patternfly/patternfly-component-schemas/
├── components/
│   ├── AboutModal/
│   │   ├── schema.json     # JSON Schema for AboutModal props
│   │   └── index.js        # Component metadata exports
│   ├── Button/
│   │   ├── schema.json
│   │   └── index.js
│   ├── Alert/
│   │   ├── schema.json
│   │   └── index.js
│   └── ... (462 total components)
├── scripts/
│   └── generate-schemas.js # Generation script
├── index.js                # Main export file
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
```javascript
// MCP servers can load and query component schemas
import { componentNames, getComponentSchema } from 'patternfly-component-schemas';

// Discover available components
const components = componentNames; // 462 PatternFly components

// Get detailed component information
const buttonSchema = await getComponentSchema('Button');
// Returns: { schema, componentName, propsCount, requiredProps }
```

### AI Assistant Examples
- **"What props does the Button component accept?"** → AI reads Button schema
- **"Generate a PatternFly Alert component"** → AI uses Alert schema for validation
- **"Show me all navigation components"** → AI filters components by name/description
- **"Create a form with proper PatternFly components"** → AI selects appropriate form components

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

### Source Data
The package is generated from `component-metadata.json` which contains the raw PatternFly component metadata for the latest release. This file is included in the git repository for development but excluded from the NPM package.

### Updating Component Metadata

**🤖 Automated Sync (Recommended)**
- **Daily checks** for new PatternFly releases at 9 AM UTC
- **Smart download**: Tries multiple sources for pre-built props.json
- **Fallback build**: Builds from PatternFly source if pre-built unavailable
- **Auto-sync** when new PatternFly version is released
- **Manual trigger** available in GitHub Actions tab
- **Automatic release** after successful sync

**Sync Sources (in priority order):**
1. 📦 PatternFly doc-core release assets
2. 📦 PatternFly main repo release assets  
3. 🌐 CDN/public URLs (if available)
4. 🔨 **Official PatternFly doc-core CLI** ([cli/cli.ts#L65](https://github.com/patternfly/patternfly-doc-core/blob/a7e8e82d753b93feac1b90a35df673ef2c6e0971/cli/cli.ts#L65))

**📋 Manual Process (Fallback)**
1. Clone https://github.com/patternfly/patternfly-doc-core
2. Run `npm run build:props` in the doc-core directory
3. Copy `dist/props.json` content to `component-metadata.json` of this repo
4. Run `npm run build` to regenerate schemas
5. Commit with: `feat(components): sync with PatternFly vX.X.X`
6. Push to `main` → automatic release triggers

## 📊 Package Contents

- **462 PatternFly components** with JSON Schema validation
- **Individual exports** for tree-shaking optimization
- **TypeScript-friendly** prop definitions
- **Enum validation** for variant props
- **Required prop** indicators
- **Default value** documentation

## 🤖 AI & Tooling Benefits

This package is specifically designed for:
- **AI/LLM consumption** via Model Context Protocol
- **IDE autocompletion** and IntelliSense
- **Component validation** and linting
- **Documentation generation** 
- **Form builders** and UI tools
- **Code generation** assistants

## 📄 License

MIT

## 🚀 Automated Releases

This package uses **semantic-release** for automated versioning and publishing based on conventional commits.

### Commit Message Format

Follow [Conventional Commits](https://conventionalcommits.org/) specification:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

**Types:**
- `feat`: New features (minor version bump)
- `fix`: Bug fixes (patch version bump) 
- `docs`: Documentation changes (patch version bump)
- `chore`: Maintenance tasks (no version bump)
- `ci`: CI/CD changes (no version bump)
- `refactor`: Code refactoring (patch version bump)

**Scopes:**
- `components`: Component schema changes
- `schemas`: Schema generation changes
- `build`: Build system changes
- `ci`: CI/CD configuration
- `docs`: Documentation updates
- `deps`: Dependency updates

**Examples:**
```bash
feat(components): add new Button variant schema
fix(schemas): correct required props validation
docs(readme): update installation instructions
chore(deps): update semantic-release to v22
```

### Release Process

1. **Automatic**: Push commits to `main` branch
2. **CI/CD**: GitHub Actions runs tests and build
3. **Release**: Semantic-release analyzes commits and publishes
4. **Changelog**: Automatically generated and committed

### Manual Release (if needed)

```bash
npm run semantic-release
```

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
