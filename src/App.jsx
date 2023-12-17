/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import CustomButton from "./components/CustomButton";
// import { CustomInput } from "./components/CustomInput";

//arrow function
const App = () => {
    // const [variable,setFunc] = someHook()
    const [cart, setCart] = useState(0);
    // returns jsx-> javascript xml

    const handleIncrement = () => {
        setCart(cart + 1);
    };

    const handleDecrement = () => {
        if (cart > 0) setCart(cart - 1);
    };
  
  
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
            {/* <CustomInput type={"text"} placeholder={"Enter Name"} name={"Fname"} />
        <CustomInput type={"date"} name={"Fname"} />
          <CustomInput type={"number"}  /> */}
        </>
    );
};

//default export
export default App;
