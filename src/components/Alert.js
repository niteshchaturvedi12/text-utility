import React from 'react'

function Alert(props) {
  const capitalize = (str) => {
      return str[0].toUpperCase()+str.slice(1)
  }
    return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        {capitalize(props.alert.type)} : {props.alert.msg}
    </div>
  )
}

export default Alert