const Map = () => {
    return ( 
        <>
            <div className="md:my-16 my-8">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.779147314036!2d35.07905247416813!3d0.25389549974361203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17805d9fdb1c3ef5%3A0xbc1eb4850ca21c52!2sVabrise%20Technologies!5e0!3m2!1sen!2ske!4v1690119175186!5m2!1sen!2ske" 
                    className="w-full md:h-[450px] h-[300px] border-t border-b border-2"
                    // width="600" 
                    // height="450" 
                    // style="border:0;" 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"
                >
                </iframe>
            </div>
        </>
     );
}
 
export default Map;