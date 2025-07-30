export function ContactInfo() {
  return (
    <div className="contact-grid">
      <ContactCard
        type="emergency"
        title="Emergency"
        items={["(237) 681-812-255", "(237) 666-331-894"]}
      />
      <ContactCard
        type="location"
        title="Location"
        items={["0123 Some place", "9876 Some country"]}
      />
      <ContactCard
        type="email"
        title="Email"
        items={["fildineeesoe@gmil.com", "myebstudios@gmail.com"]}
      />
      <ContactCard
        type="hours"
        title="Working Hours"
        items={["Mon-Sat 09:00-20:00", "Sunday Emergency only"]}
      />

      <style jsx>{`
        .contact-grid {
          display: flex;
          gap: 20px;
          margin-top: 64px;
          width: 100%;
          max-width: 1000px;
        }
        @media (max-width: 991px) {
          .contact-grid {
            flex-direction: column;
            max-width: 100%;
            margin-top: 40px;
          }
        }
      `}</style>
    </div>
  );
}

function ContactCard({ type, title, items }) {
  const isLocation = type === "location";

  return (
    <div className={`contact-card ${type}`}>
      <h3 className="card-title">{title}</h3>
      {items.map((item, index) => (
        <p key={index} className="card-text" style={{ marginTop: index === 0 ? "8px" : "5px" }}>
          {item}
        </p>
      ))}

      <style jsx>{`
        .contact-card {
          flex: 1;
          border-radius: 5px;
          background: #bfd2f8;
          color:rgb(0, 20, 59);
          padding: 105px 30px 50px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .location {
          background: #bfd2f8;
        }
        .card-title {
          font-family: Work Sans, sans-serif;
          font-size: 18px;
          font-weight: 700;
          text-transform: uppercase;
          color: ${isLocation ? "#bfd2f8" : "#1f2b6c"};
        }
        .card-text {
          font-family: Work Sans, sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 1.4;
          color: ${isLocation ? "#bfd2f8" : "#1f2b6c"};
        }
        @media (max-width: 991px) {
          .contact-card {
            margin-top: 20px;
            padding: 100px 20px 50px;
          }
        }
      `}</style>
    </div>
  );
}

export function DoctorCard({ image, name, specialty }) {
  return (
    <article className="doctor-card">
      <img loading="lazy" src={image} className="doctor-image" />
      <div className="info-section">
        <div className="info-content">
          <h3 className="doctor-name">{name}</h3>
          <p className="doctor-specialty">{specialty}</p>
          <div className="social-links">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/cf44c0ce78c240a28faac630188f1a27/c5568f177eacf503b920a825369a0fb65ef636c4a5118e29d732212b55aa7210?placeholderIfAbsent=true"
              className="social-icon"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/cf44c0ce78c240a28faac630188f1a27/2d813d797e99277bec26cfeb9df6d66fffdc58e70c63ea6ab99aa9395c9484a3?placeholderIfAbsent=true"
              className="social-icon"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/cf44c0ce78c240a28faac630188f1a27/7e1098dee3f52b395caf54c7dacee51f74d97c03e0158a5a67705f37400d27ab?placeholderIfAbsent=true"
              className="social-icon"
            />
          </div>
        </div>
      </div>
      <div className="profile-link">
        <span className="link-text">View Profile</span>
      </div>

      <style jsx>{`
        .doctor-card {
          flex: 1;
        }
        .doctor-image {
          aspect-ratio: 0.91;
          object-fit: contain;
          width: 100%;
          border-radius: 5px 5px 0px 0px;
        }
        .info-section {
          background: #bfd2f8;
          padding: 24px 32px;
        }
        .info-content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .doctor-name {
          color: #1f2b6c;
          font-family: Work Sans, sans-serif;
          font-size: 18px;
          font-weight: 400;
          line-height: 1.4;
        }
        .doctor-specialty {
          color: #1f2b6c;
          font-family: Work Sans, sans-serif;
          font-size: 18px;
          font-weight: 700;
          letter-spacing: 2.88px;
          text-transform: uppercase;
          margin-top: 8px;
        }
        .social-links {
          display: flex;
          margin-top: 16px;
          gap: 20px;
        }
        .social-icon {
          aspect-ratio: 1;
          object-fit: contain;
          width: 24px;
          fill: #1f2b6c;
        }
        .profile-link {
          background: #1f2b6c;
          border-radius: 0px 0px 5px 5px;
          padding: 12px 32px;
          text-align: center;
        }
        .link-text {
          color: #bfd2f8;
          font-family: Work Sans, sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 1.4;
        }
        @media (max-width: 991px) {
          .info-section {
            padding: 24px 20px;
          }
          .profile-link {
            padding: 12px 20px;
          }
        }
      `}</style>
    </article>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          <div className="brand-column">
            <h2 className="brand-name">
              <span className="brand-highlight">Med</span>
              <span className="brand-highlight">dical</span>
            </h2>
            <p className="brand-tagline">
              Leading the Way in Medical
              <br />
              Execellence, Trusted Care.
            </p>
          </div>

          <nav className="links-column">
            <h3 className="footer-heading">Important Links</h3>
            <a href="#" className="footer-link">
              Appointment
            </a>
            <a href="#" className="footer-link">
              Doctors
            </a>
            <a href="#" className="footer-link">
              Services
            </a>
            <a href="#" className="footer-link">
              About Us
            </a>
          </nav>

          <div className="contact-column">
            <h3 className="footer-heading">Contact Us</h3>
            <p className="footer-text">Call: (237) 681-812-255</p>
            <p className="footer-text">Email: fildineesoe@gmail.com</p>
            <p className="footer-text">Address: 0123 Some place</p>
            <p className="footer-text">Some country</p>
          </div>

          <div className="newsletter-column">
            <h3 className="footer-heading">Newsletter</h3>
            <div className="newsletter-input">
              <span className="input-placeholder">
                Enter your email address
              </span>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/cf44c0ce78c240a28faac630188f1a27/7c5a858c1c7f55341c8967392990fc08fa464c409722ac54a6e710ec84aa2d32?placeholderIfAbsent=true"
                className="send-icon"
              />
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <p className="copyright">
            © 2021 Hospital's name All Rights Reserved by PNTEC-LTD
          </p>
          <div className="social-links">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/cf44c0ce78c240a28faac630188f1a27/6f5abbdcfeead6f2ac784af2e1ae384daa72c805be925980551233311112e6d3?placeholderIfAbsent=true"
              className="social-icon"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/cf44c0ce78c240a28faac630188f1a27/ba45ec44ad83a7369b453e900e86a67b40c39275802783224e4a88917f16663b?placeholderIfAbsent=true"
              className="social-icon"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/cf44c0ce78c240a28faac630188f1a27/a8ad1c36fc6d8cb56ec76d681152f7c1cf9ad928f0ef1222ceea1ed6392f77f1?placeholderIfAbsent=true"
              className="social-icon"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: #1f2b6c;
          width: 100%;
          padding: 72px 80px;
          margin-top: 64px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .footer-content {
          width: 100%;
          max-width: 992px;
        }
        .footer-grid {
          display: flex;
          gap: 20px;
        }
        .brand-column {
          width: 27%;
        }
        .brand-name {
          color: #bfd2f8;
          font-family: Yeseva One, serif;
          font-size: 36px;
          font-weight: 400;
          text-transform: uppercase;
        }
        .brand-highlight {
          color: #bfd2f8;
        }
        .brand-tagline {
          color: #fcfefe;
          font-family: Work Sans, sans-serif;
          font-size: 18px;
          line-height: 25px;
          margin-top: 18px;
        }
        .links-column {
          width: 16%;
          display: flex;
          flex-direction: column;
        }
        .footer-heading {
          color: #fcfefe;
          font-family: Work Sans, sans-serif;
          font-size: 18px;
          font-weight: 600;
        }
        .footer-link {
          color: #fcfefe;
          font-family: Work Sans, sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 1.4;
          margin-top: 7px;
          text-decoration: none;
        }
        .footer-link:first-of-type {
          margin-top: 39px;
        }
        .contact-column {
          width: 26%;
        }
        .footer-text {
          color: #fcfefe;
          font-family: Work Sans, sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 1.4;
          margin-top: 7px;
        }
        .footer-text:first-of-type {
          margin-top: 39px;
        }
        .newsletter-column {
          width: 31%;
        }
        .newsletter-input {
          background: #bfd2f8;
          border-radius: 5px;
          display: flex;
          margin-top: 39px;
          padding: 13px 14px;
          align-items: center;
          gap: 25px;
        }
        .input-placeholder {
          color: #1f2b6c;
          font-family: Work Sans, sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 1.4;
          flex-grow: 1;
        }
        .send-icon {
          aspect-ratio: 1;
          object-fit: contain;
          width: 23px;
        }
        .footer-divider {
          width: 100%;
          stroke-width: 1px;
          stroke: #bfd2f8;
          margin: 47px 0 43px;
          border: none;
          border-top: 1px solid #bfd2f8;
        }
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }
        .copyright {
          color: #fcfefe;
          font-family: Work Sans, sans-serif;
          font-size: 16px;
          font-weight: 400;
        }
        .social-links {
          display: flex;
          gap: 20px;
        }
        .social-icon {
          aspect-ratio: 1;
          object-fit: contain;
          width: 24px;
          fill: #bfd2f8;
        }
        @media (max-width: 991px) {
          .footer {
            padding: 72px 20px;
            margin-top: 40px;
          }
          .footer-content {
            max-width: 100%;
          }
          .footer-grid {
            flex-direction: column;
          }
          .brand-column,
          .links-column,
          .contact-column,
          .newsletter-column {
            width: 100%;
            margin-top: 34px;
          }
          .footer-divider {
            margin: 40px 0;
          }
          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
          .copyright {
            max-width: 100%;
          }
        }
      `}</style>
    </footer>
  );
}

export function TestimonialSection() {
  return (
    <section className="testimonial-section">
      <div className="testimonial-content">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/cf44c0ce78c240a28faac630188f1a27/e25c41622b32ca0afdadfd5131bfdcd376e16ce2592489f6a6eeb2dc298e63a3?placeholderIfAbsent=true"
          className="quote-icon"
        />
        <p className="testimonial-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          placerat scelerisque tortor ornare ornare. Quisque placerat
          scelerisque felis vitae tortor augue. Velit nascetur Consequat
          faucibus porttitor enim et.
        </p>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/cf44c0ce78c240a28faac630188f1a27/eebb0a955f88753716f71d8b1c5e6cb2958b72d18bb08efec14061172af463fc?placeholderIfAbsent=true"
          className="divider"
        />
        <p className="author-name">John Doe</p>
      </div>

      <style jsx>{`
        .testimonial-section {
          background-color: rgba(31, 43, 108, 0.6);
          width: 100%;
          display: flex;
          margin-top: 64px;
          padding: 64px 80px 112px;
          flex-direction: column;
          align-items: center;
          background: #1f2b6c;
        }
        .testimonial-content {
          display: flex;
          margin-bottom: -22px;
          width: 634px;
          max-width: 100%;
          flex-direction: column;
          align-items: center;
        }
        .quote-icon {
          aspect-ratio: 1.5;
          object-fit: contain;
          width: 45px;
          fill: #bfd2f8;
        }
        .testimonial-text {
          color: #fcfefe;
          text-align: center;
          font-family: Work Sans, sans-serif;
          font-size: 22px;
          font-weight: 400;
          line-height: 31px;
          margin-top: 40px;
        }
        .divider {
          aspect-ratio: 200;
          object-fit: contain;
          width: 222px;
          stroke-width: 1px;
          stroke: #bfd2f8;
          margin-top: 20px;
        }
        .author-name {
          color: #fcfefe;
          text-align: center;
          font-family: Work Sans, sans-serif;
          font-size: 22px;
          font-weight: 400;
          line-height: 1.4;
          margin-top: 19px;
        }
        @media (max-width: 991px) {
          .testimonial-section {
            padding: 64px 20px 100px;
            margin-top: 40px;
          }
          .testimonial-content {
            margin-bottom: 10px;
          }
          .testimonial-text {
            max-width: 100%;
          }
          .divider {
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
}

export function WelcomeSection() {
  return (
    <section className="welcome-section">
      <div className="content-wrapper">
        <div className="image-column">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/cf44c0ce78c240a28faac630188f1a27/52c5863cdebcae30bf9eb07c4cd346b139d2e5d6f7af4449bcb6e15670051a3b?placeholderIfAbsent=true"
            className="welcome-image"
          />
        </div>
        <div className="text-column">
          <h3 className="subtitle">Welcome to Hospital name</h3>
          <h1 className="title">
            Best Care for Your
            <br />
            Good Health
          </h1>

          <div className="features-grid">
            <div className="features-column">
              <FeatureItem text="A Passion for Healing" />
              <FeatureItem text="All our best" />
              <FeatureItem text="Always Caring" />
            </div>
            <div className="features-column">
              <FeatureItem text="5-Star Care" />
              <FeatureItem text="Believe in Us" />
              <FeatureItem text="A Legacy of Excellence" />
            </div>
          </div>

          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            placerat scelerisque tortor ornare ornare. Quisque placerat
            scelerisque tortor ornare ornare Convallis felis vitae tortor augue.
            Velit nascetur proin massa in. Consequat faucibus porttitor enim et.
          </p>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            placerat scelerisque. Convallis felis vitae tortor augue. Velit
            nascetur proin massa in.
          </p>
        </div>
      </div>

      <style jsx>{`
        .welcome-section {
          margin-top: 22px;
          width: 100%;
          max-width: 988px;
        }
        .content-wrapper {
          gap: 20px;
          display: flex;
        }
        .image-column {
          width: 42%;
        }
        .welcome-image {
          aspect-ratio: 0.8;
          object-fit: contain;
          object-position: center;
          width: 100%;
        }
        .text-column {
          width: 58%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .subtitle {
          color: #159eec;
          font-family: Work Sans, sans-serif;
          font-size: 18px;
          font-weight: 700;
          letter-spacing: 2.88px;
          text-transform: uppercase;
        }
        .title {
          color: #1f2b6c;
          font-family: Yeseva One, serif;
          font-size: 48px;
          font-weight: 400;
          margin-top: 8px;
        }
        .features-grid {
          margin-top: 24px;
          width: 100%;
          max-width: 478px;
          display: flex;
          gap: 20px;
        }
        .features-column {
          width: 50%;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .description {
          color: #000;
          font-family: Work Sans, sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 22px;
          margin-top: 32px;
        }
        .description + .description {
          margin-top: 16px;
        }
        @media (max-width: 991px) {
          .welcome-section {
            max-width: 100%;
          }
          .content-wrapper {
            flex-direction: column;
          }
          .image-column {
            width: 100%;
          }
          .text-column {
            width: 100%;
            margin-top: 16px;
          }
          .title {
            font-size: 40px;
          }
          .features-grid {
            flex-direction: column;
          }
          .features-column {
            width: 100%;
            margin-top: 38px;
          }
        }
      `}</style>
    </section>
  );
}

function FeatureItem({ text }) {
  return (
    <div className="feature-item">
      <div className="feature-dot" />
      <span className="feature-text">{text}</span>

      <style jsx>{`
        .feature-item {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .feature-dot {
          border-radius: 50px;
          background: #159eec;
          width: 16px;
          height: 16px;
          flex-shrink: 0;
        }
        .feature-text {
          color: #000;
          font-family: Work Sans, sans-serif;
          font-size: 18px;
          font-weight: 400;
          line-height: 1.4;
        }
      `}</style>
    </div>
  );
}
