const SearchItems = () => {
    const [search, setSearch] = useState('')

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }
    
    const filteredMenus = menus.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))

    return ( 
        <>
            <div className="md:m-8 m-4 md:flex justify-between space-y-4">
                <div>
                    <input 
                        value={search}
                        onChange={handleSearch}
                        type="search" 
                        className="input border border-gray-300 w-full" 
                        placeholder="Search foods.." 
                    />
                </div>

                <select className="select select-bordered w-full max-w-xs">
                    <option disabled selected>Categories</option>
                    <option value=''>Salads</option>
                    <option value=''>Meat</option>
                    <option value=''>Soup</option>
                    <option value=''>Vegan</option>
                </select>
            </div>
        </>
     );
}
 
export default SearchItems;