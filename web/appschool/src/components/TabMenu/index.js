import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

const TabMenu = ({ contentArray }) => {

    return (

    <div className='accordion' id='contentAccordion'>
        <div className='d-flex flex-row'>

            {
                contentArray.map( content => (

                    <div className='card menu-item'>
                        <div className='card-header' id={ `heading${ content.id }` }>
                        <h2 className='mb-0'>
                            <button className='btn btn-link' type='button' data-toggle='collapse' data-target={ `#collapse${ content.id }` } aria-expanded='true' aria-controls={ `collapse${ content.id }` }>
                                { content.title }
                            </button>
                        </h2>
                        </div>
                    </div>
                 ) )
            }
        
        </div>

        <div className='accordion-body-container'>
            {
                contentArray.map(content => (

                    <div id={ `collapse${ content.id }` } className={ `collapse ${ content.id === 'One' ? 'show' : '' } justify-content-center` } aria-labelledby={ `heading${ content.id }` } data-parent='#contentAccordion'>
                        { content.content }
                    </div>
                ))
            }
        </div>
    </div>
)

    }

export default TabMenu