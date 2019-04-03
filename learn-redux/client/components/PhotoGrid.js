import React from 'react';
import { Link } from 'react-router';


const PhotoGrid = React.createClass({
    render(){
        return (
            <div>
                {JSON.stringify(this.props.posts,null, ' ')}
            </div>
        )
    }
})

export default PhotoGrid;