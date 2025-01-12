import React from 'react';

function EventDetails() {
  return (
    <div className="wedding-container">
      <h1>Event Details</h1>
      
      <div className="event-section">
        <h2>Wedding Ceremony & Reception</h2>
        <div className="event-time">Saturday, October 18, 2025</div>
        <p>Ceremony begins at 5:00 PM</p>
        <p>Reception immediately following</p>
      </div>

      <div className="event-section">
        <h2>Location</h2>
        <p>Playa Studios</p>
        <p>11260 Playa Ct</p>
        <p>Culver City, CA 90230</p>
        
        <div className="map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.0757843856897!2d-118.41244792427655!3d34.01652897297655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2ba3bc0c46427%3A0x3a1f6e0c3045a79c!2sPlaya%20Studios!5e0!3m2!1sen!2sus!4v1708482433657!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Wedding Venue Location"
          ></iframe>
        </div>

        <div className="parking-info">
          <h3>Parking</h3>
          <p>Complimentary valet parking will be provided for all guests.</p>
        </div>
      </div>

      <div className="event-section">
        <h2>Schedule of Events</h2>
        <p>5:00 PM - Wedding Ceremony</p>
        <p>5:45 PM - Cocktail Hour</p>
        <p>6:45 PM - Reception Celebration</p>
        
        <div className="dress-code">
          <h3>Dress Code</h3>
          <p>Formal Wedding Attire</p>
          <p>We kindly request that guests dress in formal attire to celebrate this special occasion.</p>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;