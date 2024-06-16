import { Fade } from "react-reveal";
import { companyFocus } from "../data";

const CompanyFocus = () => {
    return ( 
        <>
                <h3 className="section-title lg:mb-12 md:mb-8 mb-4">Who We Are</h3>

            <div
                className='grid md:grid-cols-3 md:gap-16 gap-8 md:my-16 my-8 md:mb-32 mb-16 text-center'
                >
                {companyFocus.map((item, index) => (
                    <div 
                        key={index} 
                        className={` ${index === 0 || index === companyFocus.length - 1 ? 'service-card1' : index === Math.floor(companyFocus.length / 2) ? 'service-card2' : ''}`}
                        >
                        <h3 
                            className={`md:text-lg font-semibold mb-1 ${index === 0 || index === companyFocus.length - 1 ? 'text-gray-700' : index === Math.floor(companyFocus.length / 2) ? 'text-gray-800' : ''}`}
                        >
                            {item.name}
                        </h3>
                        <p className='md:tracking-wide font-light md:text-base text-sm'>
                            {item.details}
                        </p>
                    </div>
                ))}
            </div>
        </>
     );
}
 
export default CompanyFocus;