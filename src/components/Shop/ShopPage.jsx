import ProductList from './ProductList';
import Pagination from './Pagination';
import { useState } from 'react';
import useFetchProduct from '../../hooks/useFetchProducts';
import FilterSection from './FilterSection';
import useFetchCategories from '../../hooks/useFetchCategories';

const ShopPage = () => {

    const [currentPage,setCurrentPage] = useState(1);
    const [priceRange,setPriceRange] = useState([0,1000]);

    const [selectedCategory,setSelectedCategory] = useState("")
    const {products,loading,totalPages} = useFetchProduct(currentPage,priceRange,selectedCategory);
    const categories = useFetchCategories();
    const handlePriceChange = (index,value) =>{
        setPriceRange((prev)=>{
            const newRange = [...prev];
            newRange[index] = value;
            return newRange;
        });
        setCurrentPage(1);
    }
    // const fetchProducts = () => {
    //     setLoading(true);
    //     apiClient.get(`/products/?page=${currentPage}`)
    //     .then((res) =>{
    //         setProducts(res.data.results)
    //         setTotalPages(Math.ceil(res.data.count / res.data.results.length));
    //     })
    //     .catch((error) => console.log(error))
    //     .finally(() => setLoading(false));
    // }
    

    return (
        <div>
            <FilterSection priceRange={priceRange} handlePriceChange={handlePriceChange} categories={categories} selectedCategory={selectedCategory} handleCategoryChange={setSelectedCategory}/>
            <ProductList products={products} loading={loading}/>
            <Pagination totalPages={totalPages} currentPage={currentPage} handlePageChange={setCurrentPage}/>
        </div>
    );
};

export default ShopPage;