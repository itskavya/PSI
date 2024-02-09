import React from 'react';

const styles = {
  nav: {
    backgroundColor: '#444',
    color: 'white',
    padding: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  ul: {
    listStyleType: 'none',
    display: 'flex',
  },
  li: {
    margin: '0 15px',
    cursor: 'pointer',
  },
  login: {
    backgroundColor: '#555',
    color: 'white',
    padding: '10px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  programSection: {
    display: 'flex',
    alignItems: 'center',
    padding: '50px',
  },
  image: {
    maxWidth: '200px',
    maxHeight: '300px',
    marginRight: '50px',
  },
  footer: {
    backgroundColor: '#333',
    color: 'white',
    padding: '30px',
    width: '95.3%',
  },
  content: {
    textAlign: 'left',
  },
  programTitle: {
    color: '#888', // Light grey color
  },
};

const NavBar = () => (
  <nav style={styles.nav}>
    <div style={styles.logo}>Logo</div>
    <ul style={styles.ul}>
      <li style={styles.li}>Home</li>
      <li style={styles.li}>About Us</li>
      <li style={styles.li}>Services</li>
      <li style={styles.li}>Contact</li>
    </ul>
    <div style={styles.login}>Login</div>
  </nav>
);

const ProgramSection = ({ title, imageUrl, content, isImageOnRight }) => {
  const containerStyle = {
    ...styles.programSection,
    flexDirection: isImageOnRight ? 'row-reverse' : 'row',
  };

  return (
    <div style={containerStyle}>
      <img src={imageUrl} alt={title} style={styles.image} />
      <div style={styles.content}>
        <h2 style={styles.programTitle}>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

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

const Missions = () => (
  <div>
    <NavBar />
    <ProgramSection
      title="Program 1"
      imageUrl="https://via.placeholder.com/200x300"
      content="This is some content about Program 1. You can add more details here."
    />
    <ProgramSection
      title="Program 2"
      imageUrl="https://via.placeholder.com/200x300"
      content="This is some content about Program 2. You can add more details here."
      isImageOnRight
    />
    <ProgramSection
      title="Program 3"
      imageUrl="https://via.placeholder.com/200x300"
      content="This is some content about Program 3. You can add more details here."
    />
    <ProgramSection
      title="Program 4"
      imageUrl="https://via.placeholder.com/200x300"
      content="This is some content about Program 4. You can add more details here."
      isImageOnRight
    />
    <Footer />
  </div>
);

export default Missions;
