export const About = () => {
  return (
    <div 
      id="about"
      className="relative inset-0 bg-cover bg-center p-80"
      style={{ backgroundImage: "url('/images/backstab.jpg')" }}
    >
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-cusgray opacity-100"></div>
      <div className="relative">
        <h1 className="text-white">ABOUT US</h1>
        <p className="text-white">
          Noceiling Games, where innovation meets passion! Founded by a team of dedicated gamers and creators, we strive to push the boundaries of gaming to deliver unforgettable experiences. Our mission is simple – to craft games that not only entertain but also engage and connect with the vibrant gaming community.
        </p>
      </div>
    </div>
  );
}
