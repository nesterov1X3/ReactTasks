import React from 'react';

class Search extends React.Component {
    state = {
         value: '',
         alertVal: 'Search text:'
         }

    handleChange = event => {
        this.setState({value: event.target.value})
    }
     search = event => {
        event.preventDefault()
         alert(this.state.alertVal)
     }

    render() {
        return (
            <>
                <form className="search" onSubmit={this.search}>
                    <input type="text"
                        onChange={this.handleChange}
                        value={this.state.value}
                        className="search__input" />
                    <button className="search__button" type='submit'>Search</button>
                </form>
            </>
        );
    }
}

export default Search;