import React, { Component } from 'react'
import './search.scss'
// export const Search = props => {
//     console.log(props);

//      return (
//         <div className="search">
//             <h1 className="serach__title">{`Hello, ${props.name}. What to search for you?`}</h1>
//             <div className="serach__field">
//                 <input type="text" className="search__input"/>
//                 <button className="search__button">Search</button>
//             </div>
//         </div>
//     )

// }

 class Search extends Component {
    render() {
        return (
                <div className="search">
                    <h1 className="search__title">{`Hello, ${this.props.name}. What to search for you?`}</h1>
                    <div className="search__field">
                        <input type="text" className="search__input" />
                        <button className="search__button">Search</button>
                    </div>
                </div>
        )
    }
}

export default Search;