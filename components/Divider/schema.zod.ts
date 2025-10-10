// Auto-generated Zod schema for Divider
// Generated on: 2025-10-10T18:12:17.787Z
import { z } from 'zod'

export const DividerSchema = z.object({
  /** Additional classes added to the divider */
  className: z.string().optional(),
  /** The component type to use */
  component: z.enum(['hr', 'li', 'div']).optional().default('DividerVariant.hr'),
  /** Insets at various breakpoints. */
  inset: z.enum(['insetXs', 'insetSm', 'insetMd', 'insetLg', 'insetXl', 'inset2xl', 'inset3xl';
  sm?: 'insetNone', 'insetXs', 'insetSm', 'insetMd', 'insetLg', 'insetXl', 'inset2xl', 'inset3xl';
  md?: 'insetNone', 'insetXs', 'insetSm', 'insetMd', 'insetLg', 'insetXl', 'inset2xl', 'inset3xl';
  lg?: 'insetNone', 'insetXs', 'insetSm', 'insetMd', 'insetLg', 'insetXl', 'inset2xl', 'inset3xl';
  xl?: 'insetNone', 'insetXs', 'insetSm', 'insetMd', 'insetLg', 'insetXl', 'inset2xl', 'inset3xl';
  '2xl'?: 'insetNone', 'insetXs', 'insetSm', 'insetMd', 'insetLg', 'insetXl', 'inset2xl', 'inset3xl';
']).optional(),
  /** Indicates how the divider will display at various breakpoints. Vertical divider must be in a flex layout. */
  orientation: z.enum(['horizontal';
  sm?: 'vertical', 'horizontal';
  md?: 'vertical', 'horizontal';
  lg?: 'vertical', 'horizontal';
  xl?: 'vertical', 'horizontal';
  '2xl'?: 'vertical', 'horizontal';
']).optional()
})

export type DividerProps = z.infer<typeof DividerSchema>
