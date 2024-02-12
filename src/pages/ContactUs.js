import React from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

const styles = {
  app: {
    textAlign: 'center',
    backgroundColor: '#002333',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    margin: 0,
    padding: 0,
  },
  header: {
    backgroundColor: '#333',
    color: 'white',
  },
  nav: {
    backgroundColor: '#053047',
    color: 'white',
    padding: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '40px',
    margin: 0,
  },
  logo: {
    marginLeft: '20px',
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  navUl: {
    listStyleType: 'none',
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
  },
  navLi: {
    margin: '0 15px',
    cursor: 'pointer',
  },
  loginButton: {
    backgroundColor: '#002333',
    color: '#00ff84',
    padding: '10px 15px',
    borderRadius: '0px',
    cursor: 'pointer',
    marginRight: '20px',
  },
  contactSection: {
    backgroundColor: '#053047',
    padding: '20px 0',
  },
  contactHeading: {
    color: 'white',
  },
  detailsSection: {
    backgroundColor: '#063049',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  detailsField: {
    color: 'white',
    marginBottom: '10px',
  },
  footer: {
    backgroundColor: '#053047',
    color: 'white',
    padding: '30px',
    bottom: 0,
    width: 'auto',
  },
};

const NavBar = () => (
  <nav style={{ ...styles.nav, marginTop: '0' }}>
    <div style={styles.logo}>Logo</div>
    <ul style={styles.navUl}>
      <li style={styles.navLi}>Home</li>
      <li style={styles.navLi}>Our Missions</li>
      <li style={styles.navLi}>About Us</li>
      <li style={styles.navLi}>Clubs</li>
      <li style={styles.navLi}>Contact Us</li>
    </ul>
    <div style={styles.loginButton}>Login</div>
  </nav>
);

const Contact = () => (
  <div style={styles.contactSection}>
    <h1 style={styles.contactHeading}>Contact Us</h1>
  </div>
);

const Details = () => (
  <div style={styles.detailsSection}>
    <div style={styles.detailsField}>Name:</div>
    <div style={styles.detailsField}>Email ID:</div>
    <div style={styles.detailsField}>Institution:</div>
    <div style={styles.detailsField}>Phone Number:</div>
    <div style={styles.detailsField}>Country:</div>
  </div>
);

const Footer = () => (
  <footer style={{ ...styles.footer, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '30px' }}>
    <div style={{ marginRight: 'auto', textAlign: 'left' }}>
      <h2 style={{ marginBottom: '5px' }}>Contact Us</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li>• Company Name: ABC Corporation</li>
        <li>• Email: info@abccorp.com</li>
        <li>• Phone: (555) 123-4567</li>
        <li>• Address: 123 Main Street, Cityville, State, 12345</li>
      </ul>
    </div>
  </footer>
);

const ContactUs = () => (
  <div style={styles.app}>
    <NavBar />
    <Contact />
    <Details />
    <Footer />
  </div>
);

export default ContactUs;
