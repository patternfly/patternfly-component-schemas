// Auto-generated Zod schema for FlexItem
// Generated on: 2025-10-10T18:12:17.760Z
import { z } from 'zod'

export const FlexItemSchema = z.object({
  /** Value to use for margin: auto at various breakpoints */
  align: z.enum(['alignRight';
  sm?: 'alignLeft', 'alignRight';
  md?: 'alignLeft', 'alignRight';
  lg?: 'alignLeft', 'alignRight';
  xl?: 'alignLeft', 'alignRight';
  '2xl'?: 'alignLeft', 'alignRight';
']).optional(),
  /** Value to add for align-self property at various breakpoints */
  alignSelf: z.enum(['alignSelfFlexEnd', 'alignSelfCenter', 'alignSelfStretch', 'alignSelfBaseline';
  sm?: 'alignSelfFlexStart', 'alignSelfFlexEnd', 'alignSelfCenter', 'alignSelfStretch', 'alignSelfBaseline';
  md?: 'alignSelfFlexStart', 'alignSelfFlexEnd', 'alignSelfCenter', 'alignSelfStretch', 'alignSelfBaseline';
  lg?: 'alignSelfFlexStart', 'alignSelfFlexEnd', 'alignSelfCenter', 'alignSelfStretch', 'alignSelfBaseline';
  xl?: 'alignSelfFlexStart', 'alignSelfFlexEnd', 'alignSelfCenter', 'alignSelfStretch', 'alignSelfBaseline';
  '2xl'?: 'alignSelfFlexStart', 'alignSelfFlexEnd', 'alignSelfCenter', 'alignSelfStretch', 'alignSelfBaseline';
']).optional(),
  /** content rendered inside the Flex layout */
  children: z.any().optional().default('null'),
  /** additional classes added to the Flex layout */
  className: z.string().optional().default(''),
  /** Sets the base component to render. defaults to div */
  component: z.any().optional().default('div'),
  /** Value to add for flex property at various breakpoints */
  flex: z.enum(['flexNone', 'flex_1', 'flex_2', 'flex_3', 'flex_4';
  sm?: 'flexDefault', 'flexNone', 'flex_1', 'flex_2', 'flex_3', 'flex_4';
  md?: 'flexDefault', 'flexNone', 'flex_1', 'flex_2', 'flex_3', 'flex_4';
  lg?: 'flexDefault', 'flexNone', 'flex_1', 'flex_2', 'flex_3', 'flex_4';
  xl?: 'flexDefault', 'flexNone', 'flex_1', 'flex_2', 'flex_3', 'flex_4';
  '2xl'?: 'flexDefault', 'flexNone', 'flex_1', 'flex_2', 'flex_3', 'flex_4';
']).optional(),
  /** Whether to set width: 100% at various breakpoints */
  fullWidth: z.object({}).optional(),
  /** Whether to add flex: grow at various breakpoints */
  grow: z.object({}).optional(),
  /** Modifies the flex layout element order property */
  order: z.object({}).optional(),
  /** Whether to add flex: shrink at various breakpoints */
  shrink: z.object({}).optional(),
  /** Spacers at various breakpoints */
  spacer: z.enum(['spacerNone', 'spacerXs', 'spacerSm', 'spacerMd', 'spacerLg', 'spacerXl', 'spacer2xl', 'spacer3xl', 'spacer4xl';
  sm?', 'spacerNone', 'spacerXs', 'spacerSm', 'spacerMd', 'spacerLg', 'spacerXl', 'spacer2xl', 'spacer3xl', 'spacer4xl';
  md?', 'spacerNone', 'spacerXs', 'spacerSm', 'spacerMd', 'spacerLg', 'spacerXl', 'spacer2xl', 'spacer3xl', 'spacer4xl';
  lg?', 'spacerNone', 'spacerXs', 'spacerSm', 'spacerMd', 'spacerLg', 'spacerXl', 'spacer2xl', 'spacer3xl', 'spacer4xl';
  xl?', 'spacerNone', 'spacerXs', 'spacerSm', 'spacerMd', 'spacerLg', 'spacerXl', 'spacer2xl', 'spacer3xl', 'spacer4xl';
  '2xl'?', 'spacerNone', 'spacerXs', 'spacerSm', 'spacerMd', 'spacerLg', 'spacerXl', 'spacer2xl', 'spacer3xl', 'spacer4xl';
']).optional()
})

export type FlexItemProps = z.infer<typeof FlexItemSchema>
