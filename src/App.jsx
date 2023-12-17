/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import CustomButton from "./components/CustomButton";
import { CustomInput } from "./components/CustomInput";

//arrow function
const App = () => {
    // const [variable,setFunc] = someHook()
    const [cart, setCart] = useState();
    const [number,setNumber] = useState()
    // returns jsx-> javascript xml

    const [product, setProduct] = useState({
        name:"",
        price:0
    });


    const handleIncrement = () => {
        setCart(cart + 1);
    };

    const handleDecrement = () => {
        if (cart > 0) setCart(cart - 1);
    };


    const handleInputChange = (e) =>{
        setNumber(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()

        console.log(number)
    }
  
  
  //come up with a code to increment orders and set  a new order value and title

    return (
        //React fragments
        <>
            <div className="container">
                <CustomButton
                    handleClick={() => handleIncrement()}
                    text={"INCREMENT COUNT"}
                />{" "}
                : {cart}
                <CustomButton
                    handleClick={() => handleDecrement()}
                    text={"DECREMENT COUNT"}
                />{" "}
            </div>
            <form>
            <CustomInput type={"password"} placeholder={"Enter number"} name={"number"}  handleChange={(e)=>handleInputChange(e)}/>
             <button onClick={(e)=>handleSubmit(e)} type="submit">Submit</button>
            </form>
        </>
    );
};

//default export
export default App;
