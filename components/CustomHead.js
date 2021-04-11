import React from 'react';
import PropTypes from "prop-types";
import Head from 'next/head';
import { websiteInfo } from '../components/Constants'
import { capitalize } from "../components/Helper"

/**
 * GeistNavbar component
 */
export const CustomHead = (props) => {
  let subPage = capitalize(props.page) || "Portfolio"

  return (
    <Head>
      <title>{`${subPage} | ${websiteInfo.name}`}</title>
      <link rel="icon" href="/favicon.png" />
      <meta name="description" content={websiteInfo.pages[subPage].description} />
      <meta name="viewport" content="user-scalable=yes, initial-scale=1, maximum-scale=5, minimum-scale=1, width=device-width" />
      <meta property="og:title" content={`${subPage} | ${websiteInfo.name}`} />
      <meta property="og:site_name" content={websiteInfo.name} />
      <meta property="og:url" content={websiteInfo.url} />
      <meta property="og:description" content={websiteInfo.pages[subPage].description} />
      <meta property="og:type" content="profile" />
      <meta httpEquiv="content-language" content="en" />
    </Head>
  );
};

CustomHead.propTypes = {
  page: PropTypes.string,
};

export default CustomHead;
