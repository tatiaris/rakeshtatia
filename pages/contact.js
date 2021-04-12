import { useState, useEffect } from 'react';
import { Button, Page, Text, Image } from '@geist-ui/react';
import GeistNavbar from '../components/GeistNavbar';
import CustomHead from '../components/CustomHead';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <>
      <GeistNavbar page="Contact" />
      <CustomHead page="Contact" />
      <Page>
      </Page>
      <Footer/>
    </>
  );
}
