const RoutesNames = {
  // routes with params
  EDIT_PRODUCT: (productId) => `/edit-product/${productId}`,
  PRODUCT_DETAILS: (productId) => `/product-details/${productId}`,
  EDIT_INGREDIENT: (ingredientId) => `/edit-ingredient/${ingredientId}`,

  // routes without params
  HOME: '/',
  DASHBOARD: '/dashboard',
  PRODUCTS: '/products',
  FAILED_SCANS: '/failed-scans',
  ADD_PRODUCT: '/addproduct',
  ADD_INGREDIENT: 'add-ingredient',
  ADD_INGREDIENT_LIST: 'add-ingredient-list',
  THEME: '/theme',
  THEME_COLORS: '/theme/colors',
  THEME_TYPOGRAPHY: '/theme/typography',
  BASE: '/base',
  BASE_ACCORDION: '/base/accordion',
  BASE_BREADCRUMBS: '/base/breadcrumbs',
  BASE_CARDS: '/base/cards',
  BASE_CAROUSELS: '/base/carousels',
  BASE_COLLAPSES: '/base/collapses',
  BASE_LIST_GROUPS: '/base/list-groups',
  BASE_NAVS: '/base/navs',
  BASE_PAGINATIONS: '/base/paginations',
  BASE_PLACEHOLDERS: '/base/placeholders',
  BASE_POPOVERS: '/base/popovers',
  BASE_PROGRESS: '/base/progress',
  BASE_SPINNERS: '/base/spinners',
  BASE_TABLES: '/base/tables',
  BASE_TOOLTIPS: '/base/tooltips',

  BUTTONS: '/buttons',
  BUTTONS_DROPDOWNS: '/buttons/dropdowns',
  BUTTONS_GROUPS: '/buttons/button-groups',

  CHARTS: '/charts',

  FORMS: '/forms',
  FORMS_CONTROL: '/forms/form-control',
  FORMS_SELECT: '/forms/select',
  FORMS_CHECKS_RADIOS: '/forms/checks-radios',
  FORMS_RANGE: '/forms/range',
  FORMS_INPUT_GROUP: '/forms/input-group',
  FORMS_FLOATING_LABELS: '/forms/floating-labels',
  FORMS_LAYOUT: '/forms/layout',
  FORMS_VALIDATION: '/forms/validation',

  ICONS: '/icons',
  ICONS_COREUI: '/icons/coreui-icons',
  ICONS_FLAGS: '/icons/flags',
  ICONS_BRANDS: '/icons/brands',

  NOTIFICATIONS: '/notifications',
  NOTIFICATIONS_ALERTS: '/notifications/alerts',
  NOTIFICATIONS_BADGES: '/notifications/badges',
  NOTIFICATIONS_MODALS: '/notifications/modals',
  NOTIFICATIONS_TOASTS: '/notifications/toasts',

  WIDGETS: '/widgets',
}

export default RoutesNames
