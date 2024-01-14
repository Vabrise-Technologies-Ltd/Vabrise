import UseFetch from "../../components/UseFetch";

const Articles = () => {
  const {data: articles, error, loading } = UseFetch('http://localhost:8000/api/articles') 
    console.log(articles)
    return ( 
        <>
            
                <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Slug</th>
                      <th>Body</th>
                    </tr>
                  </thead>
                  
                  {articles.map((article) => (
                  <tbody>
                    {/* row 1 */}
                    <tr>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-16 h-16">
                              <img src={article.image} alt="Avatar Tailwind CSS Component" />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="font-bold">{article.title}</div>
                      </td>
                      <td>{article.slug}</td>
                      <td>{article.body.slice(0,60)}</td>
                    </tr>
                    
                  </tbody>
                  ))}
                  
                </table>
              </div>
        </>
     );
}
 
export default Articles;