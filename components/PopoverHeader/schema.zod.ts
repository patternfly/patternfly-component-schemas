// Auto-generated Zod schema for PopoverHeader
// Generated on: 2025-10-10T18:12:17.771Z
import { z } from 'zod'

export const PopoverHeaderSchema = z.object({
  /** Text announced by screen reader when alert severity variant is set to indicate severity level */
  alertSeverityScreenReaderText: z.string().optional(),
  /** Severity variants for an alert popover. This modifies the color of the header to match the severity. */
  alertSeverityVariant: z.enum(['custom', 'info', 'warning', 'success', 'danger']).optional(),
  /** Content of the popover header. */
  children: z.any(),
  /** Class to be applied to the header. */
  className: z.string().optional(),
  /** Indicates the header contains an icon. */
  icon: z.any().optional(),
  /** Id of the header */
  id: z.string().optional(),
  /** Heading level of the header title */
  titleHeadingLevel: z.enum(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).optional().default('h6')
})

export type PopoverHeaderProps = z.infer<typeof PopoverHeaderSchema>
