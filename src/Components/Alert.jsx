import React from 'react'

const Alert = (props) => {
    const capitalize = (text) => {
        const lower = text.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
        <>
            <div id='Alert'>
                {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                    <strong>{capitalize(props.alert.type)}!</strong>{props.alert.mssg}
                </div>}
            </div>
        </>
    )
}

export default Alert;
