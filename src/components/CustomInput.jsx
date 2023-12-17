/* eslint-disable react/prop-types */

export const CustomInput = ({type,placeholder,name,handleChange }) => {
  return (
      <div>
          <input className="custom-input" type={type} placeholder={placeholder} name={name} onChange={handleChange}/>
    </div>
  )
}

