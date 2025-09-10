# patternfly-component-schemas

JSON Schema metadata for PatternFly React components, providing structured validation and documentation for component props.

## 📦 Installation

```bash
npm install patternfly-component-schemas
```

## 🏗️ Structure

This package uses a split structure for optimal performance and modularity:

```
patternfly-component-schemas/
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
**Current Process - (Manual)**
1. Clone https://github.com/patternfly/patternfly-doc-core
2. Run `npm run build:props` in the doc-core directory
3. Copy `dist/props.json` content to `component-metadata.json` of this repo. 
4. Run `npm run build` to regenerate schemas
5. Test and publish

**Future**: This will be automated to sync with PatternFly releases.

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

## 🤝 Contributing

1. Fork the repository
2. Update `component-metadata.json` with your changes
3. Run `npm run build` to regenerate schemas
4. Submit a pull request

---

Generated schemas follow [JSON Schema Draft 7](https://json-schema.org/specification-links.html#draft-7) specification.