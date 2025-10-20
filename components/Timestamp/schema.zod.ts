// Auto-generated Zod schema for Timestamp
import { z } from 'zod'

export const TimestampSchema = z.object({
  /** Displays custom content inside the timestamp, such as a relative time. This prop will
override the default content that is displayed. Custom content will not be affected by
any props that format or add to displayed content. */
  children: z.custom<React.ReactNode>().optional(),
  /** Class to add to the outer span. */
  className: z.string().optional(),
  /** Applies custom formatting to the displayed date and/or time. Passing this prop in will
override the dateFormat and timeFormat props. */
  customFormat: z.record(z.unknown()).optional(),
  /** Determines the default content that is displayed inside the timestamp and the value of
the inner time element's datetime attribute. */
  date: z.date().optional(),
  /** Determines the format of the displayed date in the timestamp and UTC tooltip. Examples:
"Full" => Tuesday, August 9, 2022;
"Long" => August 9, 2022;
"Medium" => Aug 9, 2022;
"Short" => 8/9/22 */
  dateFormat: z.enum(['full', 'long', 'medium', 'short']).optional(),
  /** Applies a custom suffix to the displayed content, usually after the time, such as a
custom time zone. */
  displaySuffix: z.string().optional().default(''),
  /** Flag for displaying the time in a 12 hour format. If this prop is not passed in,
the hour format will be based on the locale prop's value. */
  is12Hour: z.boolean().optional(),
  /** Determines which locale to use in the displayed content. Defaults to the current locale
when this prop is not passed in. For more information about locale's:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation */
  locale: z.string().optional(),
  /** Flag indicating whether the default content should be displayed as a UTC string
instead of a local string. */
  shouldDisplayUTC: z.boolean().optional(),
  /** Determines the format of the displayed time in the timestamp and UTC tooltip. Examples:
"Full" => 11:25:00 AM Eastern Daylight Time
"Long" => 11:25:00 AM EDT
"Medium" => 11:25:00 AM
"Short" => 11:25 AM */
  timeFormat: z.enum(['full', 'long', 'medium', 'short']).optional(),
  /** Adds a tooltip to the timestamp. */
  tooltip: z.unknown().optional()
})

export type TimestampProps = z.infer<typeof TimestampSchema>
