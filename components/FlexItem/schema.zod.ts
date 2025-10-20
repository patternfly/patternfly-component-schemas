// Auto-generated Zod schema for FlexItem
import { z } from 'zod'

export const FlexItemSchema = z.object({
  /** Value to use for margin: auto at various breakpoints */
  align: z.record(z.unknown()).optional(),
  /** Value to add for align-self property at various breakpoints */
  alignSelf: z.record(z.unknown()).optional(),
  /** content rendered inside the Flex layout */
  children: z.custom<React.ReactNode>().optional().default('null'),
  /** additional classes added to the Flex layout */
  className: z.string().optional().default(''),
  /** Sets the base component to render. defaults to div */
  component: z.any().optional().default('div'),
  /** Value to add for flex property at various breakpoints */
  flex: z.record(z.unknown()).optional(),
  /** Whether to set width: 100% at various breakpoints */
  fullWidth: z.record(z.unknown()).optional(),
  /** Whether to add flex: grow at various breakpoints */
  grow: z.record(z.unknown()).optional(),
  /** Modifies the flex layout element order property */
  order: z.record(z.unknown()).optional(),
  /** Whether to add flex: shrink at various breakpoints */
  shrink: z.record(z.unknown()).optional(),
  /** Spacers at various breakpoints */
  spacer: z.record(z.unknown()).optional()
})

export type FlexItemProps = z.infer<typeof FlexItemSchema>
