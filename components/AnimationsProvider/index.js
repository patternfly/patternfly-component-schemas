// AnimationsProvider component metadata
import schema from './schema.json' assert { type: 'json' };

export default schema;
export { schema };

// Component metadata
export const componentName = "AnimationsProvider";
export const componentDescription = "AnimationsProvider is an application-level provider that provides uniform\nanimation configuration for all PatternFly React components via the React context API.\n\n**Usage**: Place this provider at the root of your application to enable global\nanimation control without requiring manual prop drilling throughout your component tree.\n\n**Benefits**:\n- Centralized animation control for the entire application\n- Respects user accessibility preferences (reduced motion)\n- Components can still override the global setting when needed\n- Works with all PatternFly components that support animations\n\n@example\n```tsx\n// App.tsx - Place at your application root\nimport { AnimationsProvider } from '@patternfly/react-core';\n\nconst App = () => (\n  <AnimationsProvider config={{ hasAnimations: true }}>\n    <MyApplication />\n  </AnimationsProvider>\n);\n```";
export const propsCount = 2;
export const requiredProps = ["children","config"];
