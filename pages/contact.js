import { useState, useEffect } from 'react';
import Head from 'next/head';
import { Button, Page, Text, Image } from '@geist-ui/react';
import GeistNavbar from '../components/GeistNavbar';
import Copyright from '../components/Copyright';
import CustomHead from '../components/CustomHead';

export default function Contact() {
  return (
    <>
      <GeistNavbar page="Contact" />
      <CustomHead page="Contact" />
      <Page>
      </Page>
    </>
  );
}
