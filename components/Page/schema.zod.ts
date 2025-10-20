// Auto-generated Zod schema for Page
import { z } from 'zod'

export const PageSchema = z.object({
  /** Additional content of the group */
  additionalGroupedContent: z.custom<React.ReactNode>().optional(),
  /** Banner component for the page. This will be rendered above a breadcrumb if one is also passed. */
  banner: z.custom<React.ReactNode>().optional(),
  /** Breadcrumb component for the page */
  breadcrumb: z.custom<React.ReactNode>().optional(),
  /** Additional props of the breadcrumb */
  breadcrumbProps: z.unknown().optional(),
  /** Content rendered inside the main section of the page layout (e.g. <PageSection />) */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the page layout */
  className: z.string().optional(),
  /** If true, the managed sidebar is initially open for desktop view */
  defaultManagedSidebarIsOpen: z.boolean().optional().default(true),
  /** Sets default drawer size */
  drawerDefaultSize: z.string().optional(),
  /** Sets the maximum drawer size */
  drawerMaxSize: z.string().optional(),
  /** Sets the minimum drawer size */
  drawerMinSize: z.string().optional(),
  /** The page resize observer uses the breakpoints returned from this function when adding the pf-m-breakpoint-[default|sm|md|lg|xl|2xl] class
You can override the default getBreakpoint function to return breakpoints at different sizes than the default
You can view the default getBreakpoint function here:
https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/helpers/util.ts */
  getBreakpoint: z.enum(['sm', 'md', 'lg', 'xl', '2xl']).optional().default('(width: number): 'default' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' => {
  if (width === null) {
    return null;
  }
  if (width >= globalWidthBreakpoints['2xl']) {
    return '2xl';
  }
  if (width >= globalWidthBreakpoints.xl) {
    return 'xl';
  }
  if (width >= globalWidthBreakpoints.lg) {
    return 'lg';
  }
  if (width >= globalWidthBreakpoints.md) {
    return 'md';
  }
  if (width >= globalWidthBreakpoints.sm) {
    return 'sm';
  }
  return 'default';
}'),
  /** The page resize observer uses the breakpoints returned from this function when adding the pf-m-breakpoint-[default|sm|md|lg|xl|2xl] class
You can override the default getVerticalBreakpoint function to return breakpoints at different sizes than the default
You can view the default getVerticalBreakpoint function here:
https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/helpers/util.ts */
  getVerticalBreakpoint: z.enum(['sm', 'md', 'lg', 'xl', '2xl']).optional().default('(height: number): 'default' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' => {
  if (height === null) {
    return null;
  }
  if (height >= globalHeightBreakpoints['2xl']) {
    return '2xl';
  }
  if (height >= globalHeightBreakpoints.xl) {
    return 'xl';
  }
  if (height >= globalHeightBreakpoints.lg) {
    return 'lg';
  }
  if (height >= globalHeightBreakpoints.md) {
    return 'md';
  }
  if (height >= globalHeightBreakpoints.sm) {
    return 'sm';
  }
  return 'default';
}'),
  /** Additional props of the group */
  groupProps: z.unknown().optional(),
  /** Horizontal sub navigation component for the page */
  horizontalSubnav: z.custom<React.ReactNode>().optional(),
  /** Flag indicating if the breadcrumb should be in a group */
  isBreadcrumbGrouped: z.boolean().optional(),
  /** Flag indicating if breadcrumb width should be limited */
  isBreadcrumbWidthLimited: z.boolean().optional().default(false),
  /** Enables children to fill the available vertical space. Child page sections or groups that should fill should be passed the isFilled property. */
  isContentFilled: z.boolean().optional(),
  /** Flag indicating if the horizontal sub navigation should be in a group */
  isHorizontalSubnavGrouped: z.boolean().optional(),
  /** Flag indicating if horizontal sub navigation width should be limited */
  isHorizontalSubnavWidthLimited: z.boolean().optional(),
  /** If true, manages the sidebar open/close state and there is no need to pass the isSidebarOpen boolean into
the sidebar component or add a callback onSidebarToggle function into the Masthead component */
  isManagedSidebar: z.boolean().optional().default(false),
  /** Flag indicating Notification drawer in expanded */
  isNotificationDrawerExpanded: z.boolean().optional().default(false),
  /** Accessible label, can be used to name main section */
  mainAriaLabel: z.string().optional(),
  /** HTML component used as main component of the page. Defaults to 'main', only pass in 'div' if another 'main' element already exists. */
  mainComponent: z.enum(['main', 'div']).optional().default('main'),
  /** an id to use for the [role="main"] element */
  mainContainerId: z.string().optional(),
  /** tabIndex to use for the [role="main"] element, null to unset it */
  mainTabIndex: z.any().optional().default(-1),
  /** Masthead component (e.g. <Masthead />) */
  masthead: z.custom<React.ReactNode>().optional(),
  /** Notification drawer component for an optional notification drawer (e.g. <NotificationDrawer />) */
  notificationDrawer: z.custom<React.ReactNode>().optional(),
  /** Callback when notification drawer panel is finished expanding. */
  onNotificationDrawerExpand: z.any().optional().default('() => null'),
  /** Can add callback to be notified when resize occurs, for example to set the sidebar isSidebarOpen prop to false for a width < 768px
Returns object { mobileView: boolean, windowSize: number } */
  onPageResize: z.any().optional(),
  /** Sets the value for role on the <main> element */
  role: z.string().optional(),
  /** Sidebar component for a side nav, recommended to be a PageSidebar. If set to null, the page grid layout
will render without a sidebar. */
  sidebar: z.custom<React.ReactNode>().optional(),
  /** Skip to content component for the page */
  skipToContent: z.custom<React.ReactElement>().optional()
})

export type PageProps = z.infer<typeof PageSchema>
