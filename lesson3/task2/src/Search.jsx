import React, { Component} from 'react'
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

export class Search extends Component {
    render(){
        return (
                    <div className="search">
                        <h1 className="serach__title">{`Hello, ${this.props.name}. What to search for you?`}</h1>
                        <div className="serach__field">
                            <input type="text" className="search__input"/>
                            <button className="search__button">Search</button>
                        </div>
                    </div>
                )
    }
}