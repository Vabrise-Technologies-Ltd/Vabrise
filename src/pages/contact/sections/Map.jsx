const Map = () => {
    return ( 
      <div className="md:mb-16 mb-8">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d997.2087870071148!2d36.81992710107038!3d-1.271993257221529!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1726006aad25%3A0x754c6540750c1800!2sStima%20View%20Flats!5e0!3m2!1sen!2ske!4v1736069885054!5m2!1sen!2ske" 
          className="w-full md:h-[450px] h-[300px] border border-gray-300 shadow-md"
          allowFullScreen
          loading="eager"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    );
  };
  
  export default Map;
  