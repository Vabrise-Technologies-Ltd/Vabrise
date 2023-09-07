const AboutHero = () => {
    return ( 
        <>
            <div className="hero bg-cover" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
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