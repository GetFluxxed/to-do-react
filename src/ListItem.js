import React from 'react'

export default class ListItem extends React.Component {

    render() {

        return (

            // This "props" value is the value that is taken from where the information is saved
            <li>{this.props.task}</li>
        )
    }
}