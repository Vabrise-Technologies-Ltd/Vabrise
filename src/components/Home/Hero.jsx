import { useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
    const navigate = useNavigate()
    const handleQuoteLink = () => {
        navigate('/contact')
    }
    return ( 
        <>
            <div className="hero min-h-screen" style={{backgroundImage: 'url(https://futurefast.co.ke/assets/images/futurefast/photo1.jpg)'}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content md:text-right text-neutral-content">
                    <div className="md:max-w-lg">
                        <h1 className="mb-5 md:text-5xl text-4xl font-bold">We Build Ideas Driven by the Future</h1>
                        <p className="mb-5">Manage your bussiness without having to worry about the the software solutions you are using. Less hustle more growth.</p>
                        <p className="text-cyan-500 md:text-4xl text-xl">
                                <Typewriter
                                    words={[
                                        'Software Development', 
                                        'Graphics Design', 
                                        'AI & Automation',
                                        'IOT Systems',
                                        'Cloud Soltions',
                                        'Cyber Security'
                                    ]}
                                    loop={Infinity}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={100}
                                    deleteSpeed={50}
                                    delaySpeed={2000}
                                />
                            </p>
                        <button onClick={handleQuoteLink} className="btn btn-primary mt-8">
                            Get Quote
                        </button>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Hero;