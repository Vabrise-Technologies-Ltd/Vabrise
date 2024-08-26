const AboutHero = () => {
    return ( 
        <>
            <div 
                className="hero bg-cover" 
                style={{
                    backgroundAttachment: 'fixed',
                    objectPosition: 'cover',
                    backgroundImage: 'url(https://t3.ftcdn.net/jpg/01/64/56/20/360_F_164562000_AuB4fwJAm5KWP9KxpYvXqH86gVDpnRho.jpg)'
                }}
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content md:py-16 py-8">
                    <div className="max-w-md">
                    <h1 className="mb-5 md:text-4xl text-2xl font-bold">About Us</h1>
                    <p className="mb-5 md:text-base text-sm">Welcome to Vabrise Technologies</p>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default AboutHero;