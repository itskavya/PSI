import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

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
  sliderContainer: {
    width: '100%',
    maxWidth: '100%',
    marginLeft: '0px',
    marginTop: '0px',
    overflow: 'hidden',
  },
  carouselContainer: {
    boxSizing: 'none',
  },
  carouselImage: {
    width: '100%',
    height: '100%',
    objectFit: 'fit',
  },
  missionSection: {
    backgroundColor: '#002333',
    marginTop: '100px',
    display: 'flex',
    margin: '0px',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  missionCard: {
    width: '30%',
    margin: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '0px',
    overflow: 'hidden',
  },
  missionImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  },
  missionCardContent: {
    padding: '15px',
  },
  missionTitle: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '50px',
  },
  missionDescription: {
    fontSize: '1rem',
    color: '#555',
  },
  eventsSection: {
    marginTop: '100px',
    marginBottom:'70px',
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  eventCard: {
    width: '30%',
    margin: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '0px',
    overflow: 'hidden',
  },
  eventImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  },
  eventCardContent: {
    padding: '15px',
  },
  eventTitle: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  eventDescription: {
    fontSize: '1rem',
    color: '#555',
  },
  registerButton: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 15px',
    marginLeft: '250px',
    borderRadius: '0px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  programGrid: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '50px',
  },
  programRow: {
    display: 'flex',
    margin:'0px',
    justifyContent: 'space-around',
    width: '97%',
  },
  programCard: {
    width: '100%',
    margin: '4px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '0px',
    overflow: 'hidden',
    position: 'relative',
  },
  programImage: {
    width: '100%',
    height: '290px',
    objectFit: 'cover',
  },
  programName: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
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
    padding: '10px 14px',
    borderRadius: '5px',
    cursor: 'pointer',
    position: 'absolute',
    bottom: '-20px',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  main: {
    flex: 1,
    padding: '0px',
  },
  footer: {
    backgroundColor: '#053047',
    color: 'white',
    padding: '30px',
    bottom: 0,
    width: 'auto',
  },
  aboutSection: {
    marginTop: '150px',
    marginBottom: '75px',
    display: 'flex',
    alignItems: 'left',
    justifyContent: 'left',
  },
  statisticsSection: {
    marginTop: '100px',
    textAlign: 'center',
    marginBottom: '50px',
  },
  statisticsHeading: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '50px',
    color: '#007bff',
  },
  statisticsContent: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  statisticItem: {
    flex: 1,
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    margin: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  statisticValue: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  statisticLabel: {
    fontSize: '1rem',
    color: '#555',
  },
};

const Header = () => (
  <header style={styles.header}>
    {/* Removed website name */}
  </header>
);

const NavBar = () => (
  <nav style={styles.nav}>
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

const ImageSlider = () => (
  <div style={styles.sliderContainer}>
    <Carousel showThumbs={false} autoPlay infiniteLoop interval={2000} style={styles.carouselContainer}>
      <div>
        <img alt="Slide 1" src="https://via.placeholder.com/800x300" style={styles.carouselImage} />
      </div>
      <div>
        <img alt="Slide 2" src="https://via.placeholder.com/800x300" style={styles.carouselImage} />
      </div>
      <div>
        <img alt="Slide 3" src="https://via.placeholder.com/800x300" style={styles.carouselImage} />
      </div>
    </Carousel>
  </div>
);


const EventCard = ({ title, description, imageUrl }) => (
  <Card sx={styles.eventCard}>
    <CardMedia
      component="img"
      alt={title}
      height="200"
      image={imageUrl}
      sx={styles.eventImage}
    />
    <CardContent sx={styles.eventCardContent}>
      <Typography variant="h5" sx={styles.eventTitle}>
        {title}
      </Typography>
      <Typography variant="body2" sx={styles.eventDescription}>
        {description}
      </Typography>
      <button style={styles.registerButton}>Enroll Now  </button>
    </CardContent>
  </Card>
);
<hr></hr>

const ProgramGrid = () => (
  <div style={styles.programGrid}>
    <div style={styles.programRow}>
      <div style={styles.programCard}>
        <img alt="Program 1" src="https://via.placeholder.com/800x300" style={styles.programImage} />
        <div style={styles.programName}>Program 1</div>
      </div>
      <div style={styles.programCard}>
        <img alt="Program 2" src="https://via.placeholder.com/800x300" style={styles.programImage} />
        <div style={styles.programName}>Program 2</div>
      </div>
    </div>
    <div style={styles.programRow}>
      <div style={styles.programCard}>
        <img alt="Program 3" src="https://via.placeholder.com/800x300" style={styles.programImage} />
        <div style={styles.programName}>Program 3</div>
      </div>
      <div style={styles.programCard}>
        <img alt="Program 4" src="https://via.placeholder.com/800x300" style={styles.programImage} />
        <div style={styles.programName}>Program 4</div>
      </div>
    </div>
    <hr></hr>

  </div>
);

const ClubCircle = ({ imageSrc, clubName }) => (
  <div style={styles.clubCircle}>
    <div style={styles.clubImageContainer}>
      <img alt={clubName} src={imageSrc} style={styles.clubImage} />
      <button style={styles.joinButton}>Join Now</button>
    </div>
  </div>
);

const MainContent = () => (
  <main style={styles.main}>
    <ImageSlider />
    <hr></hr>

   
    <h1>UPCOMING EVENTS</h1>
    <div style={styles.eventsSection}>
      <EventCard
        title="Event 1"
        description="Description of event 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        imageUrl="https://via.placeholder.com/800x300"
      />
      <EventCard
        title="Event 2"
        description="Description of event 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        imageUrl="https://via.placeholder.com/800x300"
      />
      <EventCard
        title="Event 3"
        description="Description of event 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        imageUrl="https://via.placeholder.com/800x300"
      />
    </div>
    <hr></hr>

    
    <h1>PROGRAM GRID</h1>
    <ProgramGrid />
    <hr></hr>

    <h1>OUR CLUBS</h1>
    <div style={styles.clubSection}>
      <ClubCircle imageSrc="https://via.placeholder.com/150" clubName="Club 1" />
      <ClubCircle imageSrc="https://via.placeholder.com/150" clubName="Club 2" />
      <ClubCircle imageSrc="https://via.placeholder.com/150" clubName="Club 3" />
    </div>
    <hr></hr>

  </main>
);

const AboutSection = () => (
  <div>
  <div style={{ ...styles.aboutSection }}>
    <div style={{ display: 'flex', alignItems: 'left' }}>
      <img
        src="https://via.placeholder.com/160x250"
        alt="Placeholder"
        style={{ width: '200px', height: 'auto', marginRight: '100px' }}
      />
      <div>
        <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>About Us</h1>
        <p>This is the About Us section content.</p>
      </div>
    </div>
  </div>
    <hr></hr>
    </div>

  
);

const StatisticsSection = () => (
  <div style={styles.statisticsSection}>
    <h1 style={styles.statisticsHeading}>Statistics</h1>
    <div style={styles.statisticsContent}>
      <div style={styles.statisticItem}>
        <div style={styles.statisticValue}>1000</div>
        <div style={styles.statisticLabel}>Members</div>
      </div>
      <div style={styles.statisticItem}>
        <div style={styles.statisticValue}>50</div>
        <div style={styles.statisticLabel}>Clubs</div>
      </div>
      <div style={styles.statisticItem}>
        <div style={styles.statisticValue}>20</div>
        <div style={styles.statisticLabel}>Events</div>
      </div>
    </div>
    <hr></hr>
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
        <li>• Our Missions</li>
        <li>• About Us</li>
        <li>• Clubs</li>
        <li>• Contact Us</li>
      </ul>
    </div>
  </footer>
);

const Home = () => (
  <div style={styles.app}>
    <Header />
    <NavBar />
    <MainContent />
    <AboutSection />
    <StatisticsSection />
    <Footer />
  </div>
);

export default Home;