import React from 'react'

const SearchBar = ({filterText, inStockOnly, handleFilterTextChange, handleInStockChange}) => {

  
  handleFilterTextChange = (e) => {
    onFilterTextChange(e.target.value);
  }
  
  handleInStockChange =(e) => {
    onInStockChange(e.target.checked);
  }
  
  
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={filterText}
          onChange={this.handleFilterTextChange}
        />
        <p>
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={this.handleInStockChange}
          />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
}

export default SearchBar;