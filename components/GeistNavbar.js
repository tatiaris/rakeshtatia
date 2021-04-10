import React, { lazy, Suspense } from "react";
import PropTypes from "prop-types";
import Link from 'next/link'
import { Tabs, Row, Loading, ButtonDropdown } from '@geist-ui/react'
import { Homepage } from "./Homepage"
import { Home, Monitor } from '@geist-ui/react-icons'
import { capitalize } from "../components/Helper"

/**
 * GeistNavbar component
 */
export const GeistNavbar = (props) => {
  let subPage = capitalize(props.page) || "Portfolio"

  let activeStatus = {
    Portfolio: "inactive",
    Films: "inactive",
    Contact: "inactive",
    Baby: "inactive"
  };
  activeStatus[subPage] = "active";

  let categoryStatus = {
    Portfolio: false,
    Baby: false
  };
  let categoryList = ["Portfolio", "Baby"]
  if (subPage in categoryStatus) categoryStatus[subPage] = true;
  else categoryStatus['Portfolio'] = true;

  return (
    <div className="navbar">
      <div className="logo-container">
        <img src="/favicon.png"></img>
        <Link href="/"><a><span className="title">RAKESH TATIA PHOTOGRAPHY</span></a></Link>
      </div>
      <div className="menu">
        <Link href="/"><a className={`underline ${activeStatus['Portfolio']}`}>Portfolio</a></Link>
        <Link href="/films"><a className={`underline ${activeStatus['Films']}`}>Films</a></Link>
        <Link href="/contact"><a className={`underline ${activeStatus['Contact']}`}>Contact</a></Link>
        <ButtonDropdown type="secondary" size="small">
          <ButtonDropdown.Item type="secondary" main={categoryStatus['Portfolio']}><Link href="/"><a>Categories</a></Link></ButtonDropdown.Item>
          <ButtonDropdown.Item type="secondary" main={categoryStatus['Baby']}><Link href="/baby"><a>Baby</a></Link></ButtonDropdown.Item>
          {/* <ButtonDropdown.Item type="secondary" main={false}>Tertiary Action</ButtonDropdown.Item> */}
        </ButtonDropdown>
      </div>
    </div>
  );
};

GeistNavbar.propTypes = {
  page: PropTypes.string,
};

export default GeistNavbar;