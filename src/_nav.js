import React from 'react'
import { CNavItem } from '@coreui/react'
import {
  MdEmail,
  MdErrorOutline,
  MdFolderOpen,
  MdGridView,
  MdOutlinePeople,
  MdOutlineSettings,
} from 'react-icons/md'
import RoutesNames from './router/routes'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: RoutesNames.DASHBOARD,
    icon: <MdGridView size="18px" className="" />,
  },
  {
    component: CNavItem,
    name: 'Product Listing',
    to: RoutesNames.PRODUCTS,
    icon: <MdEmail size="18px" className="" />,
  },
  {
    component: CNavItem,
    name: 'Failed Scans',
    to: RoutesNames.FAILED_SCANS,
    icon: <MdErrorOutline size="18px" className="" />,
  },
  {
    component: CNavItem,
    name: 'Add Product',
    to: RoutesNames.ADD_PRODUCT,
    icon: <MdFolderOpen size="18px" className="" />,
  },
  {
    component: CNavItem,
    name: 'Users',
    to: RoutesNames.HOME,
    icon: <MdOutlinePeople size="18px" className="" />,
  },
]

export default _nav
