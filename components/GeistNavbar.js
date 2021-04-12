import React, { useState } from "react";
import PropTypes from "prop-types";
import Link from 'next/link'
import { ButtonDropdown } from '@geist-ui/react'
import { capitalize } from "../components/Helper"
import { websiteInfo } from "./Constants";
import { Menu } from "@geist-ui/react-icons";

/**
 * GeistNavbar component
 */
export const GeistNavbar = (props) => {
  let subPage = capitalize(props.page) || "Portfolio"
  const [navStatus, setNavStatus] = useState('')
  const toggleNav = () => {
    if (navStatus == '') setNavStatus('nav-open')
    else setNavStatus('')
  }

  let activeStatus = {
    Portfolio: "inactive",
    Films: "inactive",
    Contact: "inactive"
  };
  activeStatus[subPage] = "active";

  let categoryStatus = {}
  websiteInfo.imageCategories.map(category => {
    categoryStatus[category.title] = false;
  })

  if (subPage in categoryStatus) categoryStatus[subPage] = true;
  else categoryStatus['Portfolio'] = true;

  return (
    <div className={`navbar ${navStatus}`}>
      <div className="logo-container">
        <Link href="/"><a><img width="36" height="36" src="/favicon.png"></img><span className="title">TATIA PHOTOGRAPHY</span></a></Link>
      </div>
      <div className="menu">
        <Link href="/"><a className={`underline ${activeStatus['Portfolio']}`}>Portfolio</a></Link>
        <Link href="/films"><a className={`underline ${activeStatus['Films']}`}>Films</a></Link>
        <Link href="/contact"><a className={`underline ${activeStatus['Contact']}`}>Contact</a></Link>
        <ButtonDropdown type="default" size="small">
          <ButtonDropdown.Item type="default" main={categoryStatus['Portfolio']}><Link href="/"><a>Categories</a></Link></ButtonDropdown.Item>
          {websiteInfo.imageCategories.map((cat, i) => <ButtonDropdown.Item key={`category-${i}`} type="default" main={categoryStatus[cat.title]}><Link href={cat.url}><a>{cat.title}</a></Link></ButtonDropdown.Item>)}
        </ButtonDropdown>
      </div>
      <div className="nav__backdrop"></div>
      <nav className="nav">
        <button className="nav__toggle" onClick={toggleNav}>
          <span className="hamburger"></span>
        </button>
        <ul className="nav__list">
          <li className="nav__item"><Link href="/"><a className={`underline ${activeStatus['Portfolio']}`}>Portfolio</a></Link></li>
          <li className="nav__item"><Link href="/films"><a className={`underline ${activeStatus['Films']}`}>Films</a></Link></li>
          <li className="nav__item"><Link href="/contact"><a className={`underline ${activeStatus['Contact']}`}>Contact</a></Link></li>
          {websiteInfo.imageCategories.map((cat, i) => <li key={`nav-item-${i}`} className="nav__item"><Link href={cat.url}><a className="underline">{cat.title}</a></Link></li>)}
        </ul>
      </nav>
    </div>
  );
};

GeistNavbar.propTypes = {
  page: PropTypes.string,
};

export default GeistNavbar;