import React from 'react'

function Alert(props) {
  const capitalize = (str) => {
      return str[0].toUpperCase()+str.slice(1)
  }
    return (
      <div style={{height : '50px'}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
          {capitalize(props.alert.type)} : {props.alert.msg}
        </div>}
      </div>
  )
}

export default Alert