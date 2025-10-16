// Auto-generated Zod schema for Masthead
// Generated on: 2025-10-16T19:02:51.741Z
import { z } from 'zod'

export const MastheadSchema = z.object({
  /** Content rendered inside of the masthead */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the masthead */
  className: z.string().optional(),
  /** Display type at various breakpoints */
  display: z.enum(['stack';
  sm?: 'inline', 'stack';
  md?: 'inline', 'stack';
  lg?: 'inline', 'stack';
  xl?: 'inline', 'stack';
  '2xl'?: 'inline', 'stack';
']).optional().default('{
  md: 'inline'
}'),
  /** Insets at various breakpoints */
  inset: z.enum(['insetXs', 'insetSm', 'insetMd', 'insetLg', 'insetXl', 'inset2xl', 'inset3xl';
  sm?: 'insetNone', 'insetXs', 'insetSm', 'insetMd', 'insetLg', 'insetXl', 'inset2xl', 'inset3xl';
  md?: 'insetNone', 'insetXs', 'insetSm', 'insetMd', 'insetLg', 'insetXl', 'inset2xl', 'inset3xl';
  lg?: 'insetNone', 'insetXs', 'insetSm', 'insetMd', 'insetLg', 'insetXl', 'inset2xl', 'inset3xl';
  xl?: 'insetNone', 'insetXs', 'insetSm', 'insetMd', 'insetLg', 'insetXl', 'inset2xl', 'inset3xl';
  '2xl'?: 'insetNone', 'insetXs', 'insetSm', 'insetMd', 'insetLg', 'insetXl', 'inset2xl', 'inset3xl';
']).optional()
})

export type MastheadProps = z.infer<typeof MastheadSchema>
