const Map = () => {
    return ( 
      <div className="md:mb-16 mb-8">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d328.2847260084754!2d36.8200270919046!3d-1.2720774750069654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f176031e46231%3A0xe20e00dc126b0071!2sFedha%20apartments%20ngara!5e0!3m2!1sen!2ske!4v1735048785196!5m2!1sen!2ske" 
          className="w-full md:h-[450px] h-[300px] border border-gray-300 shadow-md"
          allowFullScreen
          loading="eager"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    );
  };
  
  export default Map;
  