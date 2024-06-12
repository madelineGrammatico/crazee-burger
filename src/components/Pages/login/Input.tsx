// import styled from "styled-components";
export default function Input({value, onChange, ...restProps}) {
  return (
    <div className='input-Container '>
      <input
        value={ value } 
        onChange={ onChange }
        {...restProps}
      />
    </div>
  )

}

     