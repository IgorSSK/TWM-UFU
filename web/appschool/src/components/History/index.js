import React from 'react'
import { Link } from 'react-router-dom'

const History = () => (
    <div className='history-container card' style={{ width: '100%' }}>
        <img className='card-img-top' src='...' alt='Card image cap'/>
        <div className='card-body'>
            <h5 className='card-title'>Card title</h5>
            <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <ul className='list-group list-group-flush'>
            <li className='list-group-item'>Cras justo odio</li>
            <li className='list-group-item'>Dapibus ac facilisis in</li>
            <li className='list-group-item'>Vestibulum at eros</li>
        </ul>
        <div className='card-body'>
            <Link to='#' className='card-link'>Card link</Link>
            <Link to='#' className='card-link'>Another link</Link>
        </div>
    </div>
)

export default History