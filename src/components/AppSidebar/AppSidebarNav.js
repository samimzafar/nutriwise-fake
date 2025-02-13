import React from 'react'
import { Menu } from 'antd'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import './styles.css'

const { SubMenu } = Menu

export const AppSidebarNav = ({ items }) => {
  const renderMenuItem = (item, index) => {
    const { name, to, icon, badge } = item
    return (
      <Menu.Item key={index} icon={icon}>
        <NavLink to={to}>
          {name}
          {badge && (
            <span
              className="sidebar-badge"
              style={{ backgroundColor: badge.color }}
            >
              {badge.text}
            </span>
          )}
        </NavLink>
      </Menu.Item>
    )
  }

  const renderSubMenu = (item, index) => {
    const { name, icon, items: subItems } = item
    return (
      <SubMenu key={index} icon={icon} title={name}>
        {subItems.map((subItem, subIndex) =>
          subItem.items
            ? renderSubMenu(subItem, subIndex)
            : renderMenuItem(subItem, subIndex),
        )}
      </SubMenu>
    )
  }

  return (
    <Menu mode="inline" theme="light" className="sidebar-menu">
      {items.map((item, index) =>
        item.items ? renderSubMenu(item, index) : renderMenuItem(item, index),
      )}
    </Menu>
  )
}

AppSidebarNav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
}
