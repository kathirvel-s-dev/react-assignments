import { useEffect, useState } from "react";
import "./ProductSite.css"
import axios from "axios";
function ProductSite() {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [error, setError] = useState("");
    //search should be in string
    const [loading, setLoading] = useState(true);
    useEffect(() => {

        axios.get("https://dummyjson.com/products/category/mobile-accessories")
            .then((res) =>{
                setProducts(res.data.products) 
                setLoading(false)
            })
            .catch((err)=>{
                setError(err.message)
                // console.log(err);
                
                setLoading(false)
            })
             // store in state
        },[])




    const filteredData= products.filter((product)=> {
        return product.title.toLowerCase().includes(search.toLowerCase())
        
    })
if(error) return <h1>{error}</h1>
if(loading) return <h1>Loading...</h1>
    return (
        <>
        <input
    type="text"
    className="searchBox"
    placeholder="Search product..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
/>

<div className="productsContainer">

    {filteredData.length ? (

        filteredData.map((p) => (
            <div key={p.id} className="productCard">

                <img
                    src={p.images[0]}
                    alt={p.title}
                    width="150"
                />

                <h3>{p.title}</h3>

                <p>
                    <strong>Description:</strong> {p.description}
                </p>

                <p>
                    <strong>Price:</strong> ${p.price}
                </p>

                <p>
                    <strong>Rating:</strong> {p.rating} ★
                </p>

                <p>
                    <strong>Status:</strong> {p.availabilityStatus}
                </p>

            </div>
        ))

    ) : (

        <h1>Product not found</h1>

    )}

</div>
        </>
    );
}

export default ProductSite;