// Auto-generated Zod schema for PageToggleButtonProps
import { z } from 'zod'

export const PageToggleButtonPropsSchema = z.object({
  /** Content of the page toggle button */
  children: z.custom<React.ReactNode>().optional(),
  /** IsHamburgerButton must be true for hamburgerVariant to be have an effect. Adjusts and animates the hamburger icon to indicate what will happen upon clicking the button. */
  hamburgerVariant: z.enum(['expand', 'collapse']).optional(),
  /** Button id */
  id: z.string().optional(),
  /** Flag indicating whether the hamburger button variation with animations should be used. */
  isHamburgerButton: z.boolean().optional(),
  /** True if the sidebar is shown */
  isSidebarOpen: z.boolean().optional(),
  /** Callback function to handle the sidebar toggle button, managed by the Page component if the Page isManagedSidebar prop is set to true */
  onSidebarToggle: z.custom<() => void>().optional(),
  /** Adds an accessible name to the toggle button. */
  'Unknown': z.string().optional()
})

export type PageToggleButtonPropsProps = z.infer<typeof PageToggleButtonPropsSchema>
