# @patternfly/component-metadata

JSON Schema metadata for PatternFly React components, providing structured validation and documentation for component props.

## 📦 Installation

```bash
npm install @patternfly/component-metadata
```

## 🏗️ Structure

This package uses a split structure for optimal performance and modularity:

```
@patternfly/component-metadata/
├── components/
│   ├── AboutModal/
│   │   ├── schema.json     # JSON Schema for AboutModal props
│   │   └── index.js        # Component metadata exports
│   ├── ActionList/
│   │   ├── schema.json
│   │   └── index.js
│   └── ...
├── scripts/
│   └── generate-schemas.js # Generation script
├── index.js                # Main export file
└── package.json
```

## 🚀 Usage

### Import Individual Components

```javascript
// Import specific component schema
import { default as AboutModalSchema } from '@patternfly/component-metadata/components/AboutModal';

// Or use the named export
import { schema } from '@patternfly/component-metadata/components/AboutModal';

// Validate props against schema
import Ajv from 'ajv';
const ajv = new Ajv();
const validate = ajv.compile(AboutModalSchema);

const props = {
  brandImageAlt: "My App Logo",
  brandImageSrc: "/logo.png",
  children: "About my application"
};

const isValid = validate(props);
if (!isValid) {
  console.log(validate.errors);
}
```

### Import All Schemas

```javascript
// Import from main package
import { 
  AboutModal, 
  ActionList, 
  componentNames,
  getComponentSchema,
  getAllSchemas 
} from '@patternfly/component-metadata';

// Get component by name (async)
const schema = await getComponentSchema('AboutModal');

// Get all schemas (async)
const allSchemas = await getAllSchemas();

// List all available components
console.log(componentNames); // ['AboutModal', 'ActionList', ...]
```

### Component Metadata

Each component export includes helpful metadata:

```javascript
import { 
  componentName,
  componentDescription,
  propsCount,
  requiredProps 
} from '@patternfly/component-metadata/components/AboutModal';

console.log(componentName);        // "AboutModal"
console.log(componentDescription); // "An about modal displays..."
console.log(propsCount);          // 13
console.log(requiredProps);       // ["brandImageAlt", "brandImageSrc", "children"]
```

## 🛠️ Development

### Generating Schemas

To generate component schemas from metadata:

```bash
# Generate from your metadata file
npm run build

# Or run the script directly
node scripts/generate-schemas.js your-metadata.json
```

### Input Format

The generation script expects metadata in this format:

```json
{
  "ComponentName": {
    "name": "ComponentName",
    "description": "Component description",
    "props": [
      {
        "name": "propName",
        "type": "string",
        "description": "Prop description",
        "required": true
      }
    ]
  }
}
```

### Available Scripts

- `npm run build` - Generate schemas from metadata
- `npm run clean` - Remove all generated component directories
- `npm run rebuild` - Clean and rebuild all schemas

## 📋 Schema Features

- ✅ **JSON Schema Draft 7** compliance
- ✅ **Type validation** for common types (string, boolean, number)
- ✅ **Required props** validation
- ✅ **Union types** with enum support
- ✅ **Complex types** documented in descriptions
- ✅ **Default values** when available
- ✅ **React-specific types** (ReactNode, event handlers)

## 🎯 Use Cases

- **Prop Validation**: Validate component props at runtime
- **Form Generation**: Auto-generate forms from component schemas
- **Documentation**: Generate prop tables and documentation
- **IDE Support**: Enhanced autocomplete and validation in editors
- **Testing**: Validate test fixtures and mock data
- **AI Development**: Provide structured component information

## 📝 Example Schema

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "title": "AboutModal Props",
  "description": "Props for the AboutModal component",
  "properties": {
    "brandImageSrc": {
      "type": "string",
      "description": "The URL of the image for the brand"
    },
    "isOpen": {
      "type": "boolean", 
      "description": "Flag to show the about modal"
    }
  },
  "required": ["brandImageSrc"],
  "additionalProperties": false
}
```

## 📄 License

MIT
