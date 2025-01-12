import WeddingLogo from '../components/WeddingLogo';

function Home() {
  return (
    <div className="wedding-container">
      <WeddingLogo />
      <div className="welcome-message">
        Welcome to our wedding celebration! We're overjoyed to share this special journey with you.
      </div>
      <h1 className="names">
        Alberto Pareja-Lecaros
        <br />
        <span>&</span>
        <br />
        Aries Limon
      </h1>
      <div className="wedding-date">October 18, 2025</div>
      <img 
        src="/engagement-photo.jpg" 
        alt="Alberto and Aries Engagement Photo" 
        className="engagement-photo"
      />
      <div className="location">Join us for our celebration of love</div>
    </div>
  );
}

export default Home;