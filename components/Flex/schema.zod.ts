// Auto-generated Zod schema for Flex
import { z } from 'zod'

export const FlexSchema = z.object({
  /** Value to use for margin: auto at various breakpoints */
  align: z.record(z.unknown()).optional(),
  /** Value to add for align-content property at various breakpoints */
  alignContent: z.record(z.unknown()).optional(),
  /** Value to add for align-items property at various breakpoints */
  alignItems: z.record(z.unknown()).optional(),
  /** Value to add for align-self property at various breakpoints */
  alignSelf: z.record(z.unknown()).optional(),
  /** content rendered inside the Flex layout */
  children: z.custom<React.ReactNode>().optional().default('null'),
  /** additional classes added to the Flex layout */
  className: z.string().optional().default(''),
  /** Gap beween columns at various breakpoints. This will override spacers for the main axis. */
  columnGap: z.record(z.unknown()).optional(),
  /** Sets the base component to render. defaults to div */
  component: z.any().optional().default('div'),
  /** Value to add for flex-direction property at various breakpoints */
  direction: z.record(z.unknown()).optional(),
  /** Value to set to display property at various breakpoints */
  display: z.record(z.unknown()).optional(),
  /** Value to add for flex property at various breakpoints */
  flex: z.record(z.unknown()).optional(),
  /** Value to set for flex-wrap property at various breakpoints */
  flexWrap: z.record(z.unknown()).optional(),
  /** Whether to set width: 100% at various breakpoints */
  fullWidth: z.record(z.unknown()).optional(),
  /** Gap between items at various breakpoints. This will override spacers for the main axis. */
  gap: z.record(z.unknown()).optional(),
  /** Whether to add flex: grow at various breakpoints */
  grow: z.record(z.unknown()).optional(),
  /** Value to add for justify-content property at various breakpoints */
  justifyContent: z.record(z.unknown()).optional(),
  /** Modifies the flex layout element order property */
  order: z.record(z.unknown()).optional(),
  /** Gap between rows at various breakpoints. This will override spacers for the main axis. */
  rowGap: z.record(z.unknown()).optional(),
  /** Whether to add flex: shrink at various breakpoints */
  shrink: z.record(z.unknown()).optional(),
  /** Space items at various breakpoints */
  spaceItems: z.record(z.unknown()).optional(),
  /** Spacers at various breakpoints */
  spacer: z.record(z.unknown()).optional()
})

export type FlexProps = z.infer<typeof FlexSchema>
