import React from "react";
import { render,screen,fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>)


    const fnameInput = screen.getByLabelText(/first name/i)
    const lnameInput = screen.getByLabelText(/last name/i)

    fireEvent.change(fnameInput,{target:{value:'ahmad'}})
    fireEvent.change(lnameInput,{target:{value:'sayadi'}})

  
 
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>)


});







