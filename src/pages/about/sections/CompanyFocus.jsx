import { Fade } from "react-reveal";
import { companyFocus } from "../data";

const CompanyFocus = () => {
    return ( 
        <>
            <div
                className='grid md:grid-cols-3 md:gap-16 gap-8 md:my-16 my-8 md:mb-32 mb-16 text-center'
                >
                {companyFocus.map((item, index) => (
                    <div key={index} className='hover:translate-y-4 duration-700'>
                        <Fade bottom>
                            <h2 className="font-semibold text-cyan-600 uppercase md:text-3xl text-2xl md:mb-4 mb-2">
                                {item.name}
                            </h2>
                            <p className="text-gray-800 md:tracking-wide text-light">
                                {item.details}
                            </p>
                        </Fade>
                    </div>
                ))}
            </div>
        </>
     );
}
 
export default CompanyFocus;