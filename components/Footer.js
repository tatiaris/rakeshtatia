import React from 'react';
import { Text, Link } from '@geist-ui/react';
import { Facebook, Instagram, Mail, Phone } from '@geist-ui/react-icons'
/**
 * GeistNavbar component
 */
export const Footer = () => {
  return (
    <div className="footer">
      <Text small style={{ float: 'right', color: 'red', display: "flex", gap: "20px" }}>
        <Link href="https://www.instagram.com/rakeshtatiaphotography/"><Instagram/></Link>
        <Link href="https://www.facebook.com/rakeshtatiaphotography/"><Facebook/></Link>
        <Link href="mailto:tatiaphotography@gmail.com"><Mail/></Link>
        <Link href="tel:+91 7976737453"><Phone/></Link>
      </Text>
    </div>
  );
};

export default Footer;
