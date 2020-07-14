import React from 'react';
import SearchBar from './SearchBar.jsx';
import ProductTable from './ProductTable.jsx';

const FilterableProductTable = ({products}) =>  {
    
      return (
        <div>
          <SearchBar />
          <ProductTable products={products} />
        </div>
      );
    
  }

export default FilterableProductTable;