/*import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers';*/

import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
        let { title, description, imageUrl,url,date} = this.props;
        return (

            <div>
                <div className="card" style={{size:'1rem'}}>
                <img src={imageUrl} style={{borderRadius:4}}/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-body-secondary">{date}</small></p>
                        <a rel="noreferrer" href={url} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                        
                    </div>
                </div></div>
        )
    }
}

export default Newsitem