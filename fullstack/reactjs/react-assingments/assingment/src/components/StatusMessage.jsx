import React from 'react'

const StatusMessage = (props) => {
    if (props.status == 'success'){
        return (
            <div>Operation was successful.</div>
        )
    }
    else{
        return(
            <div>There was an error.</div>
        )
    }
}

export default StatusMessage
