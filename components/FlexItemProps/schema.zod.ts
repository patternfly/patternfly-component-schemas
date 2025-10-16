// Auto-generated Zod schema for FlexItemProps
// Generated on: 2025-10-16T18:45:33.826Z
import { z } from 'zod'

export const FlexItemPropsSchema = z.object({
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
  children: z.custom<React.ReactNode>().optional(),
  /** additional classes added to the Flex layout */
  className: z.string().optional(),
  /** Sets the base component to render. defaults to div */
  component: z.any().optional(),
  /** Value to add for flex property at various breakpoints */
  flex: z.enum(['flexNone', 'flex_1', 'flex_2', 'flex_3', 'flex_4';
    sm?: 'flexDefault', 'flexNone', 'flex_1', 'flex_2', 'flex_3', 'flex_4';
    md?: 'flexDefault', 'flexNone', 'flex_1', 'flex_2', 'flex_3', 'flex_4';
    lg?: 'flexDefault', 'flexNone', 'flex_1', 'flex_2', 'flex_3', 'flex_4';
    xl?: 'flexDefault', 'flexNone', 'flex_1', 'flex_2', 'flex_3', 'flex_4';
    '2xl'?: 'flexDefault', 'flexNone', 'flex_1', 'flex_2', 'flex_3', 'flex_4';
  ']).optional(),
  /** Whether to set width: 100% at various breakpoints */
  fullWidth: z.record(z.unknown()).optional(),
  /** Whether to add flex: grow at various breakpoints */
  grow: z.record(z.unknown()).optional(),
  /** Modifies the flex layout element order property */
  order: z.record(z.unknown()).optional(),
  /** Whether to add flex: shrink at various breakpoints */
  shrink: z.record(z.unknown()).optional(),
  /** Spacers at various breakpoints */
  spacer: z.enum(['spacerNone', 'spacerXs', 'spacerSm', 'spacerMd', 'spacerLg', 'spacerXl', 'spacer2xl', 'spacer3xl', 'spacer4xl';
    sm?', 'spacerNone', 'spacerXs', 'spacerSm', 'spacerMd', 'spacerLg', 'spacerXl', 'spacer2xl', 'spacer3xl', 'spacer4xl';
    md?', 'spacerNone', 'spacerXs', 'spacerSm', 'spacerMd', 'spacerLg', 'spacerXl', 'spacer2xl', 'spacer3xl', 'spacer4xl';
    lg?', 'spacerNone', 'spacerXs', 'spacerSm', 'spacerMd', 'spacerLg', 'spacerXl', 'spacer2xl', 'spacer3xl', 'spacer4xl';
    xl?', 'spacerNone', 'spacerXs', 'spacerSm', 'spacerMd', 'spacerLg', 'spacerXl', 'spacer2xl', 'spacer3xl', 'spacer4xl';
    '2xl'?', 'spacerNone', 'spacerXs', 'spacerSm', 'spacerMd', 'spacerLg', 'spacerXl', 'spacer2xl', 'spacer3xl', 'spacer4xl';
  ']).optional()
})

export type FlexItemPropsProps = z.infer<typeof FlexItemPropsSchema>
