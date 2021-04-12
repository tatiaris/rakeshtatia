import { useState, useEffect } from 'react';
import Head from 'next/head';
import { Button, Page, Text, Image } from '@geist-ui/react';
import GeistNavbar from '../components/GeistNavbar';
import CustomHead from '../components/CustomHead';
import Footer from '../components/Footer';

export default function Films() {
  return (
    <>
      <GeistNavbar page="Films" />
      <CustomHead page="Films" />
      <Page>
      </Page>
      <Footer/>
    </>
  );
}
