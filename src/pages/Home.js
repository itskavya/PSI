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
    marginTop:'25px',
    marginBottom: '35px',
  },
  missionDescription: {
    fontSize: '1rem',
    color: '#555',
  },
  eventsSection: {
    marginTop: '60px',
    marginBottom:'70px',
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  eventCard: {
    width: '30%',
    margin: '10px',
    boxShadow: '2px 3px 5px rgba(255, 255, 255, 15)',
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
    backgroundColor: '#002333',
    color: '#02ff84',
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
    marginBottom:'40px',
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
    top: '90%',
    left: '10%',
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
    marginTop: '60px',
    marginBottom:'70px',
  },
  clubCard: {
    width: '270px',
    height:'300px',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '1px 2px 6px rgba(0, 255, 132, 0.8)',
    backgroundColor: 'rgba(17, 25, 40, 0.8)',
    color: '#fff',
    textAlign: 'center',
  },
  clubImage: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '12px 12px 0 0',
  },
  clubCardContent: {
    padding: '50px',
  },
  clubName: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '8px',
  },
  joinButton: {
    backgroundColor: '#002333',
    color: '#02ff84',
    padding: '10px 14px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  main: {
    flex: 1,
    color:'#eee',
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
    marginTop: '0px',
    marginBottom: '0px',
    
  },
  statisticsSection: {
    marginTop: '100px',
    textAlign: 'center',
    marginBottom: '50px',
    backgroundColor: '#002333', // Change this to your desired color
  },
  statisticsHeading: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginTop:'72px',
    marginBottom: '0px',
    color: '#007bff',
  },
  statisticsContent: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop:'0px',
    alignItems:'center',

  },
  statisticItem: {
    flex: 1,
    color: '#00ff84',
    padding: '20px',
    border: '0px solid ',
    borderRadius: '0px',
    margin: '10px',
    boxShadow: '0px 3px 10px  rgba(0, 255, 132, 0.5)',
    backgroundColor:'#063049',
    position: 'relative',
  },
  statisticValue: {
    // fontSize: '1.5rem',
    fontWeight: 'bold',
    padding:'62px',
    fontSize:'36px',
    position: 'relative',
    // backgroundColor:'rgba(0, 0, 0, 0.1)'
    background:''
  },
  statisticLabel: {
    fontSize: '1rem',
    color: '#555',
    textAlign:'center',
    position: 'relative',

  },
  statisticLine: {
    content: "",
    position: 'absolute',
    top: '96px',
    bottom: '0px',
    left: '15px',
    height: '65px',
    borderRadius: '25px',
    width: '5px',
    backgroundColor: 'rgb(0, 255, 132)',
    transform: 'translateX(-50%)',
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
    <Carousel showThumbs={false} autoPlay ={true} infiniteLoop interval={2000} showStatus={false} style={styles.carouselContainer}>
      <div>
        <img alt="Slide 1" src="https://cdn.discordapp.com/attachments/1205756212445192263/1205756751660453908/1.png?ex=65d9877b&is=65c7127b&hm=be4838c224e55ea6ba8927a529c377d79fff4bef1a4e35c0d63e0faadd849744&" style={styles.carouselImage} />
      </div>
      <div>
        <img alt="Slide 2" src="https://cdn.discordapp.com/attachments/1205756212445192263/1205756752088408094/2.png?ex=65d9877b&is=65c7127b&hm=e780502dd16513f61f7f76c66343774757556433a2db3abe78825f00a2b27c29&" style={styles.carouselImage} />
      </div>
      <div>
        <img alt="Slide 3" src="https://cdn.discordapp.com/attachments/1205756212445192263/1205756752545583144/3.png?ex=65d9877b&is=65c7127b&hm=fdbb401e6ca44b0dde5a61315c99f36d76eea6784d5b0f1e8818fe0d37f876c6&" style={styles.carouselImage} />
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
        <img alt="Program 1" src="https://cdn.discordapp.com/attachments/1205756212445192263/1205763020190384198/5.png?ex=65d98d52&is=65c71852&hm=b4109f5252b78111b15bc7288d97574bf5f072cd83428a3ce0f84a49cc364d73&" style={styles.programImage} />
        <div style={styles.programName}>Courses</div>
      </div>
      <div style={styles.programCard}>
        <img alt="Program 2" src="https://cdn.discordapp.com/attachments/1205756212445192263/1205763020463149106/6.png?ex=65d98d52&is=65c71852&hm=31cb1a34d1bd095481029b17d2e52ea055a468b91cb389a4789500f41e646c89&" style={styles.programImage} />
        <div style={styles.programName}>Workshops</div>
      </div>
    </div>
    <div style={styles.programRow}>
      <div style={styles.programCard}>
        <img alt="Program 3" src="https://cdn.discordapp.com/attachments/1205756212445192263/1205763020731453440/7.png?ex=65d98d52&is=65c71852&hm=d1ddb5fd6482ae5ec26a42643ab3a7d3143c02fb65de715c2429b5baf6b6f06a&" style={styles.programImage} />
        <div style={styles.programName}>Internships</div>
      </div>
      <div style={styles.programCard}>
        <img alt="Program 4" src="https://cdn.discordapp.com/attachments/1205756212445192263/1205763021046030356/8.png?ex=65d98d52&is=65c71852&hm=0f5c25b778feaaaaff192e1d2317271f0f973466c7d9b141828e1940ea246890&" style={styles.programImage} />
        <div style={styles.programName}>Webinars</div>
      </div>
    </div>
    

  </div>
);

const ClubCard = ({ imageSrc, clubName }) => (
  <Card sx={styles.clubCard}>
    <CardMedia
      component="img"
      alt={clubName}
      height="120"
      image={imageSrc}
      sx={styles.clubImage}
    />
    <CardContent sx={styles.clubCardContent}>
      <Typography variant="h6" sx={styles.clubName}>
        {clubName}
      </Typography>
      <button style={styles.joinButton}>Join Now</button>
    </CardContent>
  </Card>
);
const MainContent = () => (
  <main style={styles.main}>
    <ImageSlider />
    <h1>UPCOMING EVENTS</h1>
    <div style={styles.eventsSection}>
      <EventCard
        title="Event 1"
        description="Description of event 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        imageUrl="https://cdn.discordapp.com/attachments/1205756212445192263/1205781810223521812/15.png?ex=65d99ed1&is=65c729d1&hm=37550d6c8cc7d2c9ff63498cd676b00bb0d9ef288e33f4efe4942db6a1713ea6&"
      />
      <EventCard
        title="Event 2"
        description="Description of event 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        imageUrl="https://cdn.discordapp.com/attachments/1205756212445192263/1205781810466918450/12.png?ex=65d99ed1&is=65c729d1&hm=637278f4f489dccba2d2859079be569a9b2dc9c875ddc3574d68e2f7366c3652&"
      />
      <EventCard
        title="Event 3"
        description="Description of event 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        imageUrl="https://cdn.discordapp.com/attachments/1205756212445192263/1205781810819244042/13.png?ex=65d99ed2&is=65c729d2&hm=dd74aff8e66c506dc122073806e573f92a9ab9f2788e91b62ced36b51337d297&"
      />
    </div>
  

    
    <h1>Our Programmes</h1>
    <ProgramGrid />
  
    

     <h1>OUR CLUBS</h1>
    <div style={styles.clubSection}>
      <ClubCard imageSrc="https://cdn.discordapp.com/attachments/1205756212445192263/1205786539808784394/15.png?ex=65d9a339&is=65c72e39&hm=cd0999048c7718602ec123238ee9168ab72b5816fe1ebf28138bab7a9fbcb91d&" clubName="Innovation Club" />
      <ClubCard imageSrc="https://cdn.discordapp.com/attachments/1205756212445192263/1205787286873047080/12.jpg?ex=65d9a3eb&is=65c72eeb&hm=0f2ea5049c2bbaaa928563a0439a187735fec06ab9d6686827a4dc953c7b427b&" clubName="Technology Club" />
      <ClubCard imageSrc="https://cdn.discordapp.com/attachments/1205756212445192263/1205787387301732393/14.jpg?ex=65d9a403&is=65c72f03&hm=6b9bb339bd0cf9f542ba52daf632df6829846fc6040e9cace1eb9d6c548e8bab&" clubName="R&D Club" />
    </div>

  </main>
);

const AboutSection = () => (
  <div>
  <div style={{ ...styles.aboutSection }}>
    <div style={{ display: 'flex', alignItems: 'left', justifyContent: 'space-between' ,top:0,marginLeft:'30px'}}>
      <div style={{ flex: 1,textAlign:'left' ,top:0,color:'#ffffff'}}>
        <h1 style={{ textAlign: 'left',top:0, marginBottom: '20px' }}>About Us</h1>
        <p>
        Welcome to Dr. Palamsetty Innovations, where we are dedicated to empowering students in their academic journey and beyond. Founded with a passion for education and innovation, we strive to provide comprehensive support to students, helping them excel in their studies and prepare for successful careers.At Dr. Palamsetty Innovations, we understand the importance of staying ahead in today's rapidly evolving world. That's why we offer a range of services, including academic assistance, internship opportunities, courses, workshops, and seminars. Our goal is to equip students with the knowledge, skills, and experiences they need to thrive in their academic pursuits and transition seamlessly into the professional realm.
        </p>
      </div>
      <img
        src="https://cdn.discordapp.com/attachments/1205756212445192263/1205772571379769464/10.jpg?ex=65d99637&is=65c72137&hm=93b4336bbd16fc3dfb3e6ed21bdc3801a5daf7f5ba3698050ba8f3696c2d69fd&"
        alt="Placeholder"
        style={{ width: '500px', height: '450px', marginLeft: '100px' }}
      />
    </div>
  </div>
</div>

  
);

const StatisticsSection = () => (
  <div style={{ ...styles.statisticsSection, display: 'flex', justifyContent: 'space-around' ,}}>
    <div style={{ ...styles.statisticItem, width: '270px', height: '200px', position: 'relative', }}>
      <div style={styles.statisticValue}>1000+ <br></br>Students</div>
      <div style={{ ...styles.statisticLine, left: '15%', transform: 'translateX(-50%)' }}></div>
    </div>
    <div style={{ ...styles.statisticItem, width: '270px', height: '200px', position: 'relative' }}>
      <div style={styles.statisticValue}>50+ <br></br>Sections</div>
      <div style={{ ...styles.statisticLine, left: '15%', transform: 'translateX(-50%)' }}></div>
    </div>
    <div style={{ ...styles.statisticItem, width: '270px', height: '200px', position: 'relative' }}>
      <div style={styles.statisticValue}>20+ <br></br>Events</div>
      <div style={{ ...styles.statisticLine, left: '15%', transform: 'translateX(-50%)' }}></div>
    </div>
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