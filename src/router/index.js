import React from 'react'
import RoutesNames from './routes'
import FailedScans from '../views/FailedScans'
import AddProductIndex from '../views/AddProduct'
import AddProductForm from '../views/AddProduct/AddProductForm'
const Dashboard = React.lazy(() => import('../views/dashboard/Dashboard'))
const Colors = React.lazy(() => import('../views/theme/colors/Colors'))
const Typography = React.lazy(
  () => import('../views/theme/typography/Typography'),
)

//Products
const Products = React.lazy(() => import('../views/products'))
const ProductDetails = React.lazy(() => import('../views/ProductDetails'))

// Base
const Accordion = React.lazy(() => import('../views/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(
  () => import('../views/base/breadcrumbs/Breadcrumbs'),
)
const Cards = React.lazy(() => import('../views/base/cards/Cards'))
const Carousels = React.lazy(() => import('../views/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('../views/base/collapses/Collapses'))
const ListGroups = React.lazy(
  () => import('../views/base/list-groups/ListGroups'),
)
const Navs = React.lazy(() => import('../views/base/navs/Navs'))
const Paginations = React.lazy(
  () => import('../views/base/paginations/Paginations'),
)
const Placeholders = React.lazy(
  () => import('../views/base/placeholders/Placeholders'),
)
const Popovers = React.lazy(() => import('../views/base/popovers/Popovers'))
const Progress = React.lazy(() => import('../views/base/progress/Progress'))
const Spinners = React.lazy(() => import('../views/base/spinners/Spinners'))
const Tables = React.lazy(() => import('../views/base/tables/Tables'))
const Tooltips = React.lazy(() => import('../views/base/tooltips/Tooltips'))

// Buttons
const Buttons = React.lazy(() => import('../views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(
  () => import('../views/buttons/button-groups/ButtonGroups'),
)
const Dropdowns = React.lazy(
  () => import('../views/buttons/dropdowns/Dropdowns'),
)

//Forms
const ChecksRadios = React.lazy(
  () => import('../views/forms/checks-radios/ChecksRadios'),
)
const FloatingLabels = React.lazy(
  () => import('../views/forms/floating-labels/FloatingLabels'),
)
const FormControl = React.lazy(
  () => import('../views/forms/form-control/FormControl'),
)
const InputGroup = React.lazy(
  () => import('../views/forms/input-group/InputGroup'),
)
const Layout = React.lazy(() => import('../views/forms/layout/Layout'))
const Range = React.lazy(() => import('../views/forms/range/Range'))
const Select = React.lazy(() => import('../views/forms/select/Select'))
const Validation = React.lazy(
  () => import('../views/forms/validation/Validation'),
)

const Charts = React.lazy(() => import('../views/charts/Charts'))

// Icons
const CoreUIIcons = React.lazy(
  () => import('../views/icons/coreui-icons/CoreUIIcons'),
)
const Flags = React.lazy(() => import('../views/icons/flags/Flags'))
const Brands = React.lazy(() => import('../views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('../views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('../views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('../views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('../views/notifications/toasts/Toasts'))

const Widgets = React.lazy(() => import('../views/widgets/Widgets'))

const routes = [
  { path: RoutesNames.HOME, exact: true, name: 'Home' },
  { path: RoutesNames.DASHBOARD, name: 'Dashboard', element: Dashboard },
  { path: RoutesNames.PRODUCTS, name: 'Products', element: Products },
  {
    path: `${RoutesNames.ADD_PRODUCT}/*`,
    name: 'AddProduct',
    element: AddProductIndex,
  },
  { path: RoutesNames.FAILED_SCANS, name: 'FailedScans', element: FailedScans },
  {
    path: RoutesNames.EDIT_PRODUCT(':productId'),
    name: 'EditProduct',
    element: AddProductForm,
  },
  {
    path: RoutesNames.PRODUCT_DETAILS(':productId'),
    name: 'ProductDetails',
    element: ProductDetails,
  },

  { path: RoutesNames.THEME, name: 'Theme', element: Colors, exact: true },
  { path: RoutesNames.THEME_COLORS, name: 'Colors', element: Colors },
  {
    path: RoutesNames.THEME_TYPOGRAPHY,
    name: 'Typography',
    element: Typography,
  },

  { path: RoutesNames.BASE, name: 'Base', element: Cards, exact: true },
  { path: RoutesNames.BASE_ACCORDION, name: 'Accordion', element: Accordion },
  {
    path: RoutesNames.BASE_BREADCRUMBS,
    name: 'Breadcrumbs',
    element: Breadcrumbs,
  },
  { path: RoutesNames.BASE_CARDS, name: 'Cards', element: Cards },
  { path: RoutesNames.BASE_CAROUSELS, name: 'Carousel', element: Carousels },
  { path: RoutesNames.BASE_COLLAPSES, name: 'Collapse', element: Collapses },
  {
    path: RoutesNames.BASE_LIST_GROUPS,
    name: 'List Groups',
    element: ListGroups,
  },
  { path: RoutesNames.BASE_NAVS, name: 'Navs', element: Navs },
  {
    path: RoutesNames.BASE_PAGINATIONS,
    name: 'Paginations',
    element: Paginations,
  },
  {
    path: RoutesNames.BASE_PLACEHOLDERS,
    name: 'Placeholders',
    element: Placeholders,
  },
  { path: RoutesNames.BASE_POPOVERS, name: 'Popovers', element: Popovers },
  { path: RoutesNames.BASE_PROGRESS, name: 'Progress', element: Progress },
  { path: RoutesNames.BASE_SPINNERS, name: 'Spinners', element: Spinners },
  { path: RoutesNames.BASE_TABLES, name: 'Tables', element: Tables },
  { path: RoutesNames.BASE_TOOLTIPS, name: 'Tooltips', element: Tooltips },

  { path: RoutesNames.BUTTONS, name: 'Buttons', element: Buttons, exact: true },
  {
    path: RoutesNames.BUTTONS_DROPDOWNS,
    name: 'Dropdowns',
    element: Dropdowns,
  },
  {
    path: RoutesNames.BUTTONS_GROUPS,
    name: 'Button Groups',
    element: ButtonGroups,
  },

  { path: RoutesNames.CHARTS, name: 'Charts', element: Charts },

  { path: RoutesNames.FORMS, name: 'Forms', element: FormControl, exact: true },
  {
    path: RoutesNames.FORMS_CONTROL,
    name: 'Form Control',
    element: FormControl,
  },
  { path: RoutesNames.FORMS_SELECT, name: 'Select', element: Select },
  {
    path: RoutesNames.FORMS_CHECKS_RADIOS,
    name: 'Checks & Radios',
    element: ChecksRadios,
  },
  { path: RoutesNames.FORMS_RANGE, name: 'Range', element: Range },
  {
    path: RoutesNames.FORMS_INPUT_GROUP,
    name: 'Input Group',
    element: InputGroup,
  },
  {
    path: RoutesNames.FORMS_FLOATING_LABELS,
    name: 'Floating Labels',
    element: FloatingLabels,
  },
  { path: RoutesNames.FORMS_LAYOUT, name: 'Layout', element: Layout },
  {
    path: RoutesNames.FORMS_VALIDATION,
    name: 'Validation',
    element: Validation,
  },

  { path: RoutesNames.ICONS, exact: true, name: 'Icons', element: CoreUIIcons },
  {
    path: RoutesNames.ICONS_COREUI,
    name: 'CoreUI Icons',
    element: CoreUIIcons,
  },
  { path: RoutesNames.ICONS_FLAGS, name: 'Flags', element: Flags },
  { path: RoutesNames.ICONS_BRANDS, name: 'Brands', element: Brands },

  {
    path: RoutesNames.NOTIFICATIONS,
    name: 'Notifications',
    element: Alerts,
    exact: true,
  },
  { path: RoutesNames.NOTIFICATIONS_ALERTS, name: 'Alerts', element: Alerts },
  { path: RoutesNames.NOTIFICATIONS_BADGES, name: 'Badges', element: Badges },
  { path: RoutesNames.NOTIFICATIONS_MODALS, name: 'Modals', element: Modals },
  { path: RoutesNames.NOTIFICATIONS_TOASTS, name: 'Toasts', element: Toasts },

  { path: RoutesNames.WIDGETS, name: 'Widgets', element: Widgets },
]
export default routes
