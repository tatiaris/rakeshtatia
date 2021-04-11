import React from "react";
import PropTypes from "prop-types";
import Link from 'next/link'
import { ButtonDropdown } from '@geist-ui/react'
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
    Baby: "inactive",
    Wedding: "inactive"
  };
  activeStatus[subPage] = "active";

  let categoryStatus = {
    Portfolio: false,
    Baby: false,
    Wedding: false
  };
  if (subPage in categoryStatus) categoryStatus[subPage] = true;
  else categoryStatus['Portfolio'] = true;

  return (
    <div className="navbar">
      <div className="logo-container">
        
        <Link href="/"><a><img src="/favicon.png"></img><span className="title">RAKESH TATIA PHOTOGRAPHY</span></a></Link>
      </div>
      <div className="menu">
        <Link href="/"><a className={`underline ${activeStatus['Portfolio']}`}>Portfolio</a></Link>
        <Link href="/films"><a className={`underline ${activeStatus['Films']}`}>Films</a></Link>
        <Link href="/contact"><a className={`underline ${activeStatus['Contact']}`}>Contact</a></Link>
        <ButtonDropdown type="secondary" size="small">
          <ButtonDropdown.Item type="secondary" main={categoryStatus['Portfolio']}><Link href="/"><a>Categories</a></Link></ButtonDropdown.Item>
          <ButtonDropdown.Item type="secondary" main={categoryStatus['Baby']}><Link href="/baby"><a>Baby</a></Link></ButtonDropdown.Item>
          <ButtonDropdown.Item type="secondary" main={categoryStatus['Wedding']}><Link href="/wedding"><a>Wedding</a></Link></ButtonDropdown.Item>
        </ButtonDropdown>
      </div>
    </div>
  );
};

GeistNavbar.propTypes = {
  page: PropTypes.string,
};

export default GeistNavbar;