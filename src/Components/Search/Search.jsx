import React from 'react'
import Context from '../../ContextAPI/Context'
import SearchBar from '../SearchBar/SearchBar'
import '../Search/Search.scss'
import Arrow from '../../Assets/arrow.svg'



const Search = () => {

    return (
        <Context.Consumer>
            {(context) => (
                <div>
                    <SearchBar />

                    <div className='result-title'>
                        {context?.searchLen} results found for '{context?.searchQuery}'
                    </div>

                    <div className='results-container'>

                        <div className='results-container-in'>
                            {context?.searchResults?.map((value) => {
                                return (
                                    <div>
                                        <div className='single-result'>
                                            <div className='single-result-1'>
                                                <div>
                                                <div className='search-sku'>
                                                    {value?.sku}
                                                </div>

                                                <div className='search-prod-name'>
                                                    {value?.product_name}
                                                </div>

                                                <div className='search-prod-desc'>
                                                    {value?.product_description}
                                                </div>
                                                </div>
                                                <div className='single-result'>
                                                    <img src={Arrow}/>
                                                </div>
                                            </div>

                                        </div>
                                        <div className='line'></div>


                                    </div>
                                )

                            })}
                        </div>
                    </div>

                </div>
            )}
        </Context.Consumer>
    )
}

export default Search