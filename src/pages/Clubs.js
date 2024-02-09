import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const styles = {
  app: {
    textAlign: 'center',
    backgroundColor: '#f4f4f4',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  nav: {
    backgroundColor: '#444',
    color: 'white',
    padding: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    boxSizing: 'border-box',
  },
  logo: {
    marginLeft: '20px',
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  footer: {
    backgroundColor: '#333',
    color: 'white',
    padding: '30px',
    width: '100%',
  },
  sliderContainer: {
    width: '80%', // Increased slider box width
    margin: 'auto',
    marginTop: '50px',
  },
  sliderImage: {
    maxWidth: '100%',
    maxHeight: '70vh', // Decreased slider box height
  },
  clubSection: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: '100px',
  },
  clubCircle: {
    textAlign: 'center',
    margin: '10px',
  },
  clubImageContainer: {
    position: 'relative',
  },
  clubImage: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    marginBottom: '10px',
  },
  joinButton: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
    position: 'absolute',
    bottom: '-20px',
    left: '50%',
    transform: 'translateX(-50%)',
  },
};

const NavBar = () => (
  <nav style={styles.nav}>
    <div style={styles.logo}>Logo</div>
    <ul style={{ listStyleType: 'none', display: 'flex' }}>
      <li style={{ margin: '0 15px', cursor: 'pointer' }}>Home</li>
      <li style={{ margin: '0 15px', cursor: 'pointer' }}>About Us</li>
      <li style={{ margin: '0 15px', cursor: 'pointer' }}>Services</li>
      <li style={{ margin: '0 15px', cursor: 'pointer' }}>Contact</li>
    </ul>
    <div style={{ backgroundColor: '#555', color: 'white', padding: '10px 15px', borderRadius: '5px', cursor: 'pointer', marginRight: '20px' }}>Login</div>
  </nav>
);

const SliderSection = () => (
  <div style={styles.sliderContainer}>
    <Carousel autoPlay={true} interval={2000} showThumbs={false} showStatus={false} infiniteLoop={true}>
      <div>
        <img style={styles.sliderImage} src="https://via.placeholder.com/600x400" alt="Slider 1" />
      </div>
      <div>
        <img style={styles.sliderImage} src="https://via.placeholder.com/600x400" alt="Slider 2" />
      </div>
      <div>
        <img style={styles.sliderImage} src="https://via.placeholder.com/600x400" alt="Slider 3" />
      </div>
    </Carousel>
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
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: 'auto', textAlign: 'left'}}>
      
      <h2 style={{ marginBottom: '10px' }}>Menu</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li>• Home</li>
        <li>• About Us</li>
        <li>• Partners</li>
        <li>• Clubs</li>
        <li>• Contact Us</li>
      </ul>
    </div>
    <div style={{ textAlign: 'center' ,display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
      <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#ccc', marginBottom: '10px' }}></div>
      <p>Follow us on</p>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#ccc', marginRight: '5px' }}></div>
        <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#ccc', marginRight: '5px' }}></div>
        <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#ccc', marginRight: '5px' }}></div>
      </div>
    </div>
  </footer>
);

const Clubs = () => (
  <div style={styles.app}>
    <NavBar />
    <SliderSection />
    <h1 >OUR CLUBS</h1>
    <div style={styles.clubSection}>
      <div style={styles.clubCircle}>
        <h2>Club 1</h2>
        <div style={styles.clubImageContainer}>
          <img alt="Club 1" src="https://via.placeholder.com/150" style={styles.clubImage} />
          <button style={styles.joinButton}>Join Now</button>
        </div>
      </div>
      <div style={styles.clubCircle}>
        <h2>Club 2</h2>
        <div style={styles.clubImageContainer}>
          <img alt="Club 2" src="https://via.placeholder.com/150" style={styles.clubImage} />
          <button style={styles.joinButton}>Join Now</button>
        </div>
      </div>
      <div style={styles.clubCircle}>
        <h2>Club 3</h2>
        <div style={styles.clubImageContainer}>
          <img alt="Club 3" src="https://via.placeholder.com/150" style={styles.clubImage} />
          <button style={styles.joinButton}>Join Now</button>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Clubs;