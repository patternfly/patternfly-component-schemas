// Auto-generated Zod schema for FlexProps
// Generated on: 2025-10-16T18:45:33.827Z
import { z } from 'zod'

export const FlexPropsSchema = z.object({
  /** Value to use for margin: auto at various breakpoints */
  align: z.enum(['alignRight';
    sm?: 'alignLeft', 'alignRight';
    md?: 'alignLeft', 'alignRight';
    lg?: 'alignLeft', 'alignRight';
    xl?: 'alignLeft', 'alignRight';
    '2xl'?: 'alignLeft', 'alignRight';
  ']).optional(),
  /** Value to add for align-content property at various breakpoints */
  alignContent: z.enum(['alignContentFlexStart', 'alignContentFlexEnd', 'alignContentCenter', 'alignContentStretch', 'alignContentSpaceBetween', 'alignContentSpaceAround';
    sm?', 'alignContentFlexStart', 'alignContentFlexEnd', 'alignContentCenter', 'alignContentStretch', 'alignContentSpaceBetween', 'alignContentSpaceAround';
    md?', 'alignContentFlexStart', 'alignContentFlexEnd', 'alignContentCenter', 'alignContentStretch', 'alignContentSpaceBetween', 'alignContentSpaceAround';
    lg?', 'alignContentFlexStart', 'alignContentFlexEnd', 'alignContentCenter', 'alignContentStretch', 'alignContentSpaceBetween', 'alignContentSpaceAround';
    xl?', 'alignContentFlexStart', 'alignContentFlexEnd', 'alignContentCenter', 'alignContentStretch', 'alignContentSpaceBetween', 'alignContentSpaceAround';
    '2xl'?', 'alignContentFlexStart', 'alignContentFlexEnd', 'alignContentCenter', 'alignContentStretch', 'alignContentSpaceBetween', 'alignContentSpaceAround';
  ']).optional(),
  /** Value to add for align-items property at various breakpoints */
  alignItems: z.enum(['alignItemsFlexStart', 'alignItemsFlexEnd', 'alignItemsCenter', 'alignItemsStretch', 'alignItemsBaseline';
    sm?: 'alignItemsFlexStart', 'alignItemsFlexEnd', 'alignItemsCenter', 'alignItemsStretch', 'alignItemsBaseline';
    md?: 'alignItemsFlexStart', 'alignItemsFlexEnd', 'alignItemsCenter', 'alignItemsStretch', 'alignItemsBaseline';
    lg?: 'alignItemsFlexStart', 'alignItemsFlexEnd', 'alignItemsCenter', 'alignItemsStretch', 'alignItemsBaseline';
    xl?: 'alignItemsFlexStart', 'alignItemsFlexEnd', 'alignItemsCenter', 'alignItemsStretch', 'alignItemsBaseline';
    '2xl'?', 'alignItemsFlexStart', 'alignItemsFlexEnd', 'alignItemsCenter', 'alignItemsStretch', 'alignItemsBaseline';
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
  /** Gap beween columns at various breakpoints. This will override spacers for the main axis. */
  columnGap: z.enum(['columnGap', 'columnGapNone', 'columnGapXs', 'columnGapSm', 'columnGapMd', 'columnGapLg', 'columnGapXl', 'columnGap2xl', 'columnGap3xl', 'columnGap4xl';
    sm?', 'columnGap', 'columnGapNone', 'columnGapXs', 'columnGapSm', 'columnGapMd', 'columnGapLg', 'columnGapXl', 'columnGap2xl', 'columnGap3xl', 'columnGap4xl';
    md?', 'columnGap', 'columnGapNone', 'columnGapXs', 'columnGapSm', 'columnGapMd', 'columnGapLg', 'columnGapXl', 'columnGap2xl', 'columnGap3xl', 'columnGap4xl';
    lg?', 'columnGap', 'columnGapNone', 'columnGapXs', 'columnGapSm', 'columnGapMd', 'columnGapLg', 'columnGapXl', 'columnGap2xl', 'columnGap3xl', 'columnGap4xl';
    xl?', 'columnGap', 'columnGapNone', 'columnGapXs', 'columnGapSm', 'columnGapMd', 'columnGapLg', 'columnGapXl', 'columnGap2xl', 'columnGap3xl', 'columnGap4xl';
    '2xl'?', 'columnGap', 'columnGapNone', 'columnGapXs', 'columnGapSm', 'columnGapMd', 'columnGapLg', 'columnGapXl', 'columnGap2xl', 'columnGap3xl', 'columnGap4xl';
  ']).optional(),
  /** Sets the base component to render. defaults to div */
  component: z.any().optional(),
  /** Value to add for flex-direction property at various breakpoints */
  direction: z.enum(['columnReverse', 'row', 'rowReverse';
    sm?: 'column', 'columnReverse', 'row', 'rowReverse';
    md?: 'column', 'columnReverse', 'row', 'rowReverse';
    lg?: 'column', 'columnReverse', 'row', 'rowReverse';
    xl?: 'column', 'columnReverse', 'row', 'rowReverse';
    '2xl'?: 'column', 'columnReverse', 'row', 'rowReverse';
  ']).optional(),
  /** Value to set to display property at various breakpoints */
  display: z.enum(['inlineFlex';
    md?: 'flex', 'inlineFlex';
    lg?: 'flex', 'inlineFlex';
    xl?: 'flex', 'inlineFlex';
    '2xl'?: 'flex', 'inlineFlex';
  ']).optional(),
  /** Value to add for flex property at various breakpoints */
  flex: z.enum(['flexNone', 'flex_1', 'flex_2', 'flex_3', 'flex_4';
    sm?: 'flexDefault', 'flexNone', 'flex_1', 'flex_2', 'flex_3', 'flex_4';
    md?: 'flexDefault', 'flexNone', 'flex_1', 'flex_2', 'flex_3', 'flex_4';
    lg?: 'flexDefault', 'flexNone', 'flex_1', 'flex_2', 'flex_3', 'flex_4';
    xl?: 'flexDefault', 'flexNone', 'flex_1', 'flex_2', 'flex_3', 'flex_4';
    '2xl'?: 'flexDefault', 'flexNone', 'flex_1', 'flex_2', 'flex_3', 'flex_4';
  ']).optional(),
  /** Value to set for flex-wrap property at various breakpoints */
  flexWrap: z.enum(['wrapReverse', 'nowrap';
    sm?: 'wrap', 'wrapReverse', 'nowrap';
    md?: 'wrap', 'wrapReverse', 'nowrap';
    lg?: 'wrap', 'wrapReverse', 'nowrap';
    xl?: 'wrap', 'wrapReverse', 'nowrap';
    '2xl'?: 'wrap', 'wrapReverse', 'nowrap';
  ']).optional(),
  /** Whether to set width: 100% at various breakpoints */
  fullWidth: z.record(z.unknown()).optional(),
  /** Gap between items at various breakpoints. This will override spacers for the main axis. */
  gap: z.enum(['gapNone', 'gapXs', 'gapSm', 'gapMd', 'gapLg', 'gapXl', 'gap2xl', 'gap3xl', 'gap4xl';
    sm?: 'gap', 'gapNone', 'gapXs', 'gapSm', 'gapMd', 'gapLg', 'gapXl', 'gap2xl', 'gap3xl', 'gap4xl';
    md?: 'gap', 'gapNone', 'gapXs', 'gapSm', 'gapMd', 'gapLg', 'gapXl', 'gap2xl', 'gap3xl', 'gap4xl';
    lg?: 'gap', 'gapNone', 'gapXs', 'gapSm', 'gapMd', 'gapLg', 'gapXl', 'gap2xl', 'gap3xl', 'gap4xl';
    xl?: 'gap', 'gapNone', 'gapXs', 'gapSm', 'gapMd', 'gapLg', 'gapXl', 'gap2xl', 'gap3xl', 'gap4xl';
    '2xl'?: 'gap', 'gapNone', 'gapXs', 'gapSm', 'gapMd', 'gapLg', 'gapXl', 'gap2xl', 'gap3xl', 'gap4xl';
  ']).optional(),
  /** Whether to add flex: grow at various breakpoints */
  grow: z.record(z.unknown()).optional(),
  /** Value to add for justify-content property at various breakpoints */
  justifyContent: z.enum(['justifyContentFlexStart', 'justifyContentFlexEnd', 'justifyContentCenter', 'justifyContentSpaceBetween', 'justifyContentSpaceAround', 'justifyContentSpaceEvenly';
    sm?', 'justifyContentFlexStart', 'justifyContentFlexEnd', 'justifyContentCenter', 'justifyContentSpaceBetween', 'justifyContentSpaceAround', 'justifyContentSpaceEvenly';
    md?', 'justifyContentFlexStart', 'justifyContentFlexEnd', 'justifyContentCenter', 'justifyContentSpaceBetween', 'justifyContentSpaceAround', 'justifyContentSpaceEvenly';
    lg?', 'justifyContentFlexStart', 'justifyContentFlexEnd', 'justifyContentCenter', 'justifyContentSpaceBetween', 'justifyContentSpaceAround', 'justifyContentSpaceEvenly';
    xl?', 'justifyContentFlexStart', 'justifyContentFlexEnd', 'justifyContentCenter', 'justifyContentSpaceBetween', 'justifyContentSpaceAround', 'justifyContentSpaceEvenly';
    '2xl'?', 'justifyContentFlexStart', 'justifyContentFlexEnd', 'justifyContentCenter', 'justifyContentSpaceBetween', 'justifyContentSpaceAround', 'justifyContentSpaceEvenly';
  ']).optional(),
  /** Modifies the flex layout element order property */
  order: z.record(z.unknown()).optional(),
  /** Gap between rows at various breakpoints. This will override spacers for the main axis. */
  rowGap: z.enum(['rowGap', 'rowGapNone', 'rowGapXs', 'rowGapSm', 'rowGapMd', 'rowGapLg', 'rowGapXl', 'rowGap2xl', 'rowGap3xl', 'rowGap4xl';
    sm?', 'rowGap', 'rowGapNone', 'rowGapXs', 'rowGapSm', 'rowGapMd', 'rowGapLg', 'rowGapXl', 'rowGap2xl', 'rowGap3xl', 'rowGap4xl';
    md?', 'rowGap', 'rowGapNone', 'rowGapXs', 'rowGapSm', 'rowGapMd', 'rowGapLg', 'rowGapXl', 'rowGap2xl', 'rowGap3xl', 'rowGap4xl';
    lg?', 'rowGap', 'rowGapNone', 'rowGapXs', 'rowGapSm', 'rowGapMd', 'rowGapLg', 'rowGapXl', 'rowGap2xl', 'rowGap3xl', 'rowGap4xl';
    xl?', 'rowGap', 'rowGapNone', 'rowGapXs', 'rowGapSm', 'rowGapMd', 'rowGapLg', 'rowGapXl', 'rowGap2xl', 'rowGap3xl', 'rowGap4xl';
    '2xl'?', 'rowGap', 'rowGapNone', 'rowGapXs', 'rowGapSm', 'rowGapMd', 'rowGapLg', 'rowGapXl', 'rowGap2xl', 'rowGap3xl', 'rowGap4xl';
  ']).optional(),
  /** Whether to add flex: shrink at various breakpoints */
  shrink: z.record(z.unknown()).optional(),
  /** Space items at various breakpoints */
  spaceItems: z.enum(['spaceItemsNone', 'spaceItemsXs', 'spaceItemsSm', 'spaceItemsMd', 'spaceItemsLg', 'spaceItemsXl', 'spaceItems2xl', 'spaceItems3xl', 'spaceItems4xl';
    sm?', 'spaceItemsNone', 'spaceItemsXs', 'spaceItemsSm', 'spaceItemsMd', 'spaceItemsLg', 'spaceItemsXl', 'spaceItems2xl', 'spaceItems3xl', 'spaceItems4xl';
    md?', 'spaceItemsNone', 'spaceItemsXs', 'spaceItemsSm', 'spaceItemsMd', 'spaceItemsLg', 'spaceItemsXl', 'spaceItems2xl', 'spaceItems3xl', 'spaceItems4xl';
    lg?', 'spaceItemsNone', 'spaceItemsXs', 'spaceItemsSm', 'spaceItemsMd', 'spaceItemsLg', 'spaceItemsXl', 'spaceItems2xl', 'spaceItems3xl', 'spaceItems4xl';
    xl?', 'spaceItemsNone', 'spaceItemsXs', 'spaceItemsSm', 'spaceItemsMd', 'spaceItemsLg', 'spaceItemsXl', 'spaceItems2xl', 'spaceItems3xl', 'spaceItems4xl';
    '2xl'?', 'spaceItemsNone', 'spaceItemsXs', 'spaceItemsSm', 'spaceItemsMd', 'spaceItemsLg', 'spaceItemsXl', 'spaceItems2xl', 'spaceItems3xl', 'spaceItems4xl';
  ']).optional(),
  /** Spacers at various breakpoints */
  spacer: z.enum(['spacerNone', 'spacerXs', 'spacerSm', 'spacerMd', 'spacerLg', 'spacerXl', 'spacer2xl', 'spacer3xl', 'spacer4xl';
    sm?', 'spacerNone', 'spacerXs', 'spacerSm', 'spacerMd', 'spacerLg', 'spacerXl', 'spacer2xl', 'spacer3xl', 'spacer4xl';
    md?', 'spacerNone', 'spacerXs', 'spacerSm', 'spacerMd', 'spacerLg', 'spacerXl', 'spacer2xl', 'spacer3xl', 'spacer4xl';
    lg?', 'spacerNone', 'spacerXs', 'spacerSm', 'spacerMd', 'spacerLg', 'spacerXl', 'spacer2xl', 'spacer3xl', 'spacer4xl';
    xl?', 'spacerNone', 'spacerXs', 'spacerSm', 'spacerMd', 'spacerLg', 'spacerXl', 'spacer2xl', 'spacer3xl', 'spacer4xl';
    '2xl'?', 'spacerNone', 'spacerXs', 'spacerSm', 'spacerMd', 'spacerLg', 'spacerXl', 'spacer2xl', 'spacer3xl', 'spacer4xl';
  ']).optional()
})

export type FlexPropsProps = z.infer<typeof FlexPropsSchema>
