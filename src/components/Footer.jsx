const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()


    return ( 
        <>
            <div className="py-8">
                <p className="text-sm font-light text-gray-800 text-center">
                    Copyright © {year} || 
                    <span className="text-blue-500 px-1">Vabrise Technologies</span>
                </p>
            </div>
        </>
    );
}
 
export default Footer;