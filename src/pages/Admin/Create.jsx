import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Create = () => {
    const [title, setTitle] = useState('')
    const [slug, setSlug] = useState('')
    const [category, setCategory] = useState(null)
    const [image, setImage] = useState('')
    const [body,setBody]=useState('')
    const navigate = useNavigate()

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    const handleForm = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append('file', image);
            formData.append('upload_preset', 'your_cloudinary_upload_preset');

            const response = await axios.post(
                'https://api.cloudinary.com/v1_1/your_cloud_name/image/upload',
                formData
            );

            const newArticle = {
                title,
                content,
                image: response.data.secure_url,
            };

            await axios.post('http://localhost:3001/api/articles', newArticle);

        navigate('/admin')
        
        } catch (error) {
            console.error('Error adding article:', error);
        }
        

    }

    return (
        <>
            <div className="bg-white md:mx-32 md:mb-16 mb-8 md:p-8 p-4 rounded-lg">
                <h1 className="content-title">Add Products</h1>
                <form onSubmit={handleForm} >
                    <div className="my-4">
                        <input 
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                            className="input" 
                            type="text" name="title" 
                            placeholder="Product Name" 
                            required 
                        />
                    </div>
                    <div className="my-4">
                        <select className="px-3 py-2 input" required name={image}
                            onChange={(e) => setType(e.target.value)} >
                            <option value="Databases">Databases</option>
                            <option value="DataScience">DataScience</option>
                            <option value="Security">Security</option>
                            <option value="Software Development">Software Development</option>
                            <option value="AI & Machine Learning">AI & Machine Learning</option>
                            <option value="IOT & Robotics">IOT & Robotics</option>
                        </select>
                    </div>
                    <div className="my-4">
                        <input 
                            onChange={handleImageChange}
                            value={image}
                            className="input" 
                            name="image" 
                            type="file"
                            placeholder="Image.."
                            required 
                        />
                    </div>
                    <div className="my-4">
                        <input 
                            onChange={(e) => setSlug(e.target.value)}
                            value={slug}
                            className="input" 
                            type="number" 
                            name="price" 
                            placeholder="Plain price" 
                            required 
                        />
                    </div>
                    <div className="my-4">
                        <input 
                            onChange={(e) => setCategory(e.target.value)}
                            value={category}
                            className="input" 
                            type="number" 
                            name="price" 
                            placeholder="Branded price" 
                            required 
                        />
                    </div>
                    <div className="my-4">
                        <textarea 
                            onChange={(e) => setBody(e.target.value)}
                            value={body}
                            className="px-3 py-2 input" 
                            name="description" 
                            placeholder="Description" 
                            cols="30" 
                            rows="6"
                        ></textarea>
                    </div>
                    <button className="btn font-medium bg-[#084E7A] w-full">
                        Add Product
                    </button>

                </form>
            </div>
        </>
    );
}
 
export default Create;