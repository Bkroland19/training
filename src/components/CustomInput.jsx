/* eslint-disable react/prop-types */

export const CustomInput = ({type,placeholder,name }) => {
  return (
      <div>
          <input className="custom-input" type={type} placeholder={placeholder} name={name}/>
    </div>
  )
}

