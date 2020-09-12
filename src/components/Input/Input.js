import React from 'react';

const Input = ({type,error,onChange,value,name,placeholder}) => {
    return (
        <div className="input-container" >
            <input className="input" name={name} type= {type} value={value} onChange={onChange} placeholder={placeholder}/>
            <span className = "input-error"> {error} </span>
        </div>
     );
}
 
export default Input;