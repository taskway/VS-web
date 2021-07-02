import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  Calendar, Explore, UserCircle, Users
} from 'common/icons'
import styles from './styles.module.sass'

export const NavBar = () => (
  <div className={styles.container}>
    <NavLink to="/explore" activeClassName={styles.activeLink}><Explore /></NavLink>
    <NavLink to="/users" activeClassName={styles.activeLink}><Users /></NavLink>
    <NavLink to="/calendar" activeClassName={styles.activeLink}><Calendar /></NavLink>
    <NavLink to="/profile" activeClassName={styles.activeLink}><UserCircle /></NavLink>
  </div>
)
