import React from 'react';
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
  header: {
    backgroundColor: '#333',
    color: 'white',
    padding: '10px',
    width: '100%',
    boxSizing: 'border-box',
  },
  nav: {
    backgroundColor: '#444',
    color: 'white',
    padding: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100px',
    width: '100%',
    boxSizing: 'border-box',
    marginTop: '0', // Removed space above the nav bar
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
  },
  navLi: {
    margin: '0 15px',
    cursor: 'pointer',
  },
  loginButton: {
    backgroundColor: '#555',
    color: 'white',
    padding: '10px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginRight: '20px',
  },
  aboutSection: {
    marginTop: '20px',
    marginBottom: '75px',
    textAlign: 'left',
    paddingLeft: '20px',
  },
  introductionHeading: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#333',
  },
  introductionContent: {
    fontSize: '1.2rem',
    color: '#555',
  },
  ourWorksSection: {
    marginTop: '100px',
    marginBottom: '50px',
    width: '80%',
  },
  worksContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1px',
  },
  work: {
    width: '100%',
  },
  OurFounderWordsSection: {
    backgroundColor: '#eee',
    padding: '50px 0',
    display: 'flex',
    alignItems: 'center',
  },
  OurFounderWordsContent: {
    flex: '1',
    paddingRight: '50px',
  },
  OurFounderWordsParagraph: {
    fontsize: '1rem',
    color: '#555',
  },
  OurFounderWordsImageContainer: {
    flex: '1',
  },
  OurFounderWordsImage: {
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: '8px',
  },
  OurVisionSection: {
    backgroundColor: '#eee',
    padding: '50px 0',
    display: 'flex',
    alignItems: 'center',
  },
  OurVisionImageContainer: {
    flex: '1',
  },
  OurVisionImage: {
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: '8px',
  },
  OurVisionContent: {
    flex: '1',
    paddingLeft: '50px',  // Adjusted paddingLeft for space between image and paragraph
  },
  OurVisionParagraph: {
    fontSize: '1rem',
    color: '#555',
  },
  OurMissionSection: {
    backgroundColor: '#eee',
    padding: '50px 0',
    display: 'flex',
    alignItems: 'center',
  },
  OurMissionContent: {
    flex: '1',
    paddingRight: '50px',
  },
  OurMissionParagraph: {
    fontsize: '1rem',
    color: '#555',
  },
  OurMissionImageContainer: {
    flex: '1',
  },
  OurMissionImage: {
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: '8px',
  },
  ourValuesSection: {
    marginTop: '50px',
    marginBottom: '50px',
    width: '80%',
  },
  valuesContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  value: {
    textAlign: 'center',
    width: '30%',
    marginBottom: '30px',
  },
  circle: {
    width: '100px',
    height: '100px',
    backgroundColor: '#ccc',
    borderRadius: '50%',
    margin: '0 auto',
    marginBottom: '10px',
  },
  MethodologyHeading: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#333',
  },
  MethodlogyContent: {
    fontSize: '1.2rem',
    color: '#555',
  },
  footer: {
    backgroundColor: '#333',
    color: 'white',
    padding: '30px',
    bottom: 0,
    width: '95.3%',
  },
};

const NavBar = () => (
  <nav style={{ ...styles.nav, marginTop: '0' }}> {/* Added marginTop: '0' */}
    <div style={styles.logo}>Logo</div>
    <ul style={styles.navUl}>
      <li style={styles.navLi}>Home</li>
      <li style={styles.navLi}>Our Missions</li>
      <li style={styles.navLi}>About Us</li>
      <li style={styles.navLi}>Clubs</li>
      <li style={styles.navLi}>Methodlogy</li>
      <li style={styles.navLi}>Contact Us</li>
    </ul>
    <div style={styles.loginButton}>Login</div>
  </nav>
);

const AboutSection = () => (
  <div style={styles.aboutSection}>
    <div>
      <h1 style={styles.introductionHeading}>Introduction</h1>
      <p style={styles.introductionContent}>Andhra University is not just one of the oldest educational institutions in the country, but is also the first to be conceived as a residential and teaching-cum-affiliating University, mainly devoted to post-graduate teaching and research.

The people of the State have an emotional attachment to the institution, since it came into being after a prolonged and collective struggle of the Telugu elite for a University in the educationally backward northern Circars and Ceded districts of the erstwhile Madras Presidency.

Andhra University was constituted in the year 1926 by the Madras Act of 1926. The 97-year-old institution is fortunate to have Sir C.R. Reddy as its founder Vice-Chancellor, as the steps taken by this visionary proved to be fruitful in the long run.</p>
    </div>
  </div>
);

const ImageSection = ({ src, alt }) => (
  <div>
    <img style={{ width: '100%', height: '268px' }} src={src} alt={alt} />
  </div>
);

const OurWorksSection = () => (
  <div style={styles.ourWorksSection}>
    <h2>Our Works</h2>
    <div style={styles.worksContainer}>
      <div style={styles.work}>
        <ImageSection src="https://via.placeholder.com/150x150" alt="Work 1" />
      </div>
      <div style={styles.work}>
        <ImageSection src="https://via.placeholder.com/150x150" alt="Work 2" />
      </div>
      <div style={styles.work}>
        <ImageSection src="https://via.placeholder.com/150x150" alt="Work 3" />
      </div>
      <div style={styles.work}>
        <ImageSection src="https://via.placeholder.com/150x150" alt="Work 4" />
      </div>
      <div style={styles.work}>
        <ImageSection src="https://via.placeholder.com/150x150" alt="Work 5" />
      </div>
      <div style={styles.work}>
        <ImageSection src="https://via.placeholder.com/150x150" alt="Work 6" />
      </div>
    </div>
  </div>
);

const OurFounderWordsSection = () => (
  <div style={styles.OurFounderWordsSection}>
    <div style={styles.OurFounderWordsContent}>
      <h2>Our Founder's Words</h2>
      <p style={styles.OurFounderWordsParagraph}>The primary goal of education is to give the youth the training they need to become efficient citizens in this Republic. We must remember that intelligence is not enough. Intelligence plus character - that is the goal of true education.</p>
    </div>
    <div style={styles.OurFounderWordsImageContainer}>
      <img style={styles.OurFounderWordsImage} src="https://via.placeholder.com/600x400" alt="Our Founder's Words" />
    </div>
  </div>
);

const OurVisionSection = () => (
  <div style={styles.OurVisionSection}>
    <div style={styles.OurVisionImageContainer}>
      <img style={styles.OurVisionImage} src="https://via.placeholder.com/600x400" alt="Our Vision" />
    </div>
    <div style={styles.OurVisionContent}>
      <h2>Our Vision</h2>
      <p style={styles.OurVisionParagraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod justo quis dolor sagittis hendrerit. Nulla facilisi. Suspendisse ut condimentum ante. Fusce sed sapien tristique, mattis urna sed, feugiat magna.</p>
    </div>
  </div>
);

const OurMissionSection = () => (
  <div style={styles.OurMissionSection}>
    <div style={styles.OurMissionContent}>
      <h2>Our Mission</h2>
      <p style={styles.OurMissionParagraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod justo quis dolor sagittis hendrerit. Nulla facilisi. Suspendisse ut condimentum ante. Fusce sed sapien tristique, mattis urna sed, feugiat magna.</p>
    </div>
    <div style={styles.OurMissionImageContainer}>
      <img style={styles.OurMissionImage} src="https://via.placeholder.com/600x400" alt="Our Mission" />
    </div>
  </div>
);

const ValuesSection = () => (
  <div style={styles.ourValuesSection}>
    <h2>Our Values</h2>
    <div style={styles.valuesContainer}>
      <div style={styles.value}>
        <div style={styles.circle}></div>
        <h3>Value 1</h3>
      </div>
      <div style={styles.value}>
        <div style={styles.circle}></div>
        <h3>Value 2</h3>
      </div>
      <div style={styles.value}>
        <div style={styles.circle}></div>
        <h3>Value 3</h3>
      </div>
      <div style={styles.value}>
        <div style={styles.circle}></div>
        <h3>Value 4</h3>
      </div>
      <div style={styles.value}>
        <div style={styles.circle}></div>
        <h3>Value 5</h3>
      </div>
      <div style={styles.value}>
        <div style={styles.circle}></div>
        <h3>Value 6</h3>
      </div>
    </div>
  </div>
);

const MethodologySection = () => (
  <div style={styles.aboutSection}>
    <h1 style={styles.MethodologyHeading}>Our Methodlogy</h1>
    <p style={styles.MethodlogyContent}>Andhra University is not just one of the oldest educational institutions in the country, but is also the first to be conceived as a residential and teaching-cum-affiliating University, mainly devoted to post-graduate teaching and research. The people of the State have an emotional attachment to the institution, since it came into being after a prolonged and collective struggle of the Telugu elite for a University in the educationally backward northern Circars and Ceded districts of the erstwhile Madras Presidency. Andhra University was constituted in the year 1926 by the Madras Act of 1926. The 97-year-old institution is fortunate to have Sir C.R. Reddy as its founder Vice-Chancellor, as the steps taken by this visionary proved to be fruitful in the long run.</p>
  </div>
);

const ApproachSection = () => (
  <div style={styles.aboutSection}>
    <h1 style={styles.MethodologyHeading}>Our Approach</h1>
    <p style={styles.MethodlogyContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod justo quis dolor sagittis hendrerit. Nulla facilisi. Suspendisse ut condimentum ante. Fusce sed sapien tristique, mattis urna sed, feugiat magna.</p>
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

const AboutUs = () => (
  <div style={styles.app}>
    <NavBar />
    <AboutSection />
    <OurWorksSection />
    <OurFounderWordsSection />
    <OurVisionSection />
    <OurMissionSection />
    <ValuesSection />
    <MethodologySection />
    <ApproachSection />
    <Footer />
  </div>
);

export default AboutUs;