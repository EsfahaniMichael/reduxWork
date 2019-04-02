import React from 'react';
import { Link } from 'react-router';


const Single = React.createClass({
    render(){
        return (
            <div>
                <h1>
                    <Link to="/">
                        I AM SINGLE
                    </Link>
                </h1>
            </div>
        )
    }
})

export default Single;