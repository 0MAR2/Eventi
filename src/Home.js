import React from "react";
import "./index.css";
import "./pic.jpg";
import AuthForm from "./AuthForm";
function Home() {
  return (
    <>
      <NavBar />
      <AuthForm />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar-top">
        <Logo />
        <NavigationButtons />
      </div>

      {<SearchBox />}
    </div>
  );
}
function Logo() {
  return (
    <p className="logo">
      <span style={{ color: "#2c9cf0" }}>E</span>VENTI
    </p>
  );
}
function NavigationButtons() {
  return (
    <div className="nav-buttons">
      <button className="btn">Trending</button>
      <button className="btn">Sports</button>
      <button className="btn">Concerts</button>
      <button className="btn">Theater</button>
      <button className="signup">Sign Up</button>
      <button className="login">Login</button>
    </div>
  );
}
function SearchBox() {
  return (
    <div className="navbar-search">
      <SearchBar />
      <button className="search-button">Search</button>
    </div>
  );
}
function SearchBar() {
  return (
    <input
      type="text"
      className="search-bar"
      placeholder="🔍 Search by Event, Artist, Location..."
    />
  );
}
function Main() {
  return (
    <div>
      <HighlitedEventBox />
      <BrowseByCategoryBox />
      <TopPicksBox />
    </div>
  );
}
function HighlitedEventBox() {
  return (
    <div className="highlited-box">
      <div className="highlited-image">
        <p className="highlited-text">Get your music fix with festival !!</p>
        <button className="highlited-btn">Book Now</button>
      </div>
      <button className="highlited-next">→</button>
    </div>
  );
}
function BrowseByCategoryBox() {
  return (
    <div className="browsing-box">
      <HeadOfBoxs text={"Browse By Category"} buttonText={"See More"} />
      <div className="cards-box">
        <Card text={"Concert"} imgUrl={"/concert.jpg"} />
        <Card text={"Sport"} imgUrl={"/sport.jpg"} />
        <Card text={"Theater"} imgUrl={"/theater.jpg"} />
        <Card text={"Family"} imgUrl={"/family.jpg"} />
      </div>
    </div>
  );
}
function TopPicksBox() {
  return (
    <div>
      <HeadOfBoxs text={"Top picks for you"} buttonText={"Filter"} />
      <div className="top-picks-box">
        <EventItem
          imgUrl={"/concert.jpg"}
          date={"13-DEC"}
          time={"10-PM"}
          eventName={"NAME"}
          place={"Darna"}
        />
        <EventItem
          imgUrl={"/concert.jpg"}
          date={"13-DEC"}
          time={"10-PM"}
          eventName={"NAME"}
          place={"Darna"}
        />

        <button className="book-btn">See More</button>
      </div>
    </div>
  );
}
function EventItem({ imgUrl, date, time, eventName, place }) {
  return (
    <div className="event-item">
      <img src={imgUrl} alt="taswira" />
      <div className="event-details">
        <p>{date}</p>
        <p>{time}</p>
        <p>
          <strong>{eventName}</strong>
        </p>
        <p>
          <strong>{place}</strong>
        </p>
      </div>
      <div className="event-pick-buttons">
        <button className="details-btn">View Details</button>
        <button className="book-btn">Book Now</button>
      </div>
    </div>
  );
}
function HeadOfBoxs({ text, buttonText }) {
  return (
    <div className="head-of-boxs">
      <p>{text}</p>
      <button className="search-button">{buttonText}</button>
    </div>
  );
}
function Card({ text, imgUrl }) {
  return (
    <div
      className="card"
      style={{
        backgroundImage: `url(${imgUrl})`,
      }}
    >
      <button className="login" style={{ border: "0.3rem #FFFFFF solid" }}>
        {text}
      </button>
    </div>
  );
}
function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <Logo />

        <div className="footer-contact">
          <ContactItem>Email: eventi2024@gmail.com</ContactItem>
          <ContactItem>Phone: 88888888888888</ContactItem>
          <ContactItem>Working Days: Monday-Sunday</ContactItem>
          <ContactItem>Working Hours: 8:00AM-8:00PM(Tn)</ContactItem>
          <ContactItem>Address: DenDen-Mannouba</ContactItem>
        </div>
      </div>
      <p className="footer-text">© 2024 EVENTI. All rights reserved.</p>
    </div>
  );
}
function ContactItem({ children }) {
  return (
    <div className="contact-item">
      <p>{children}</p>
    </div>
  );
}
