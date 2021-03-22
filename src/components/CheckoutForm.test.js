import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";

const firstNameInputSetUp = (input) =>{
    const firstNameInput = screen.getByLabelText(/first name/i);
    userEvent.type(firstNameInput, input);
}
const lastNameInputSetUp = (input) =>{
    const lastNameInput = screen.getByLabelText(/last name/i);
    userEvent.type(lastNameInput, input);
}
const addressInputSetUp = (input) =>{
    const addressInput = screen.getByLabelText(/address/i);
    userEvent.type(addressInput, input);
}
const cityInputSetUp = (input) =>{
    const cityInput = screen.getByLabelText(/city/i);
    userEvent.type(cityInput, input);

}
const stateInputSetUp = (input) =>{
    const stateInput = screen.getByLabelText(/state/i);
    userEvent.type(stateInput, input);

}
const zipInputSetUp = (input) =>{
    const zipInput = screen.getByLabelText(/zip/i);
    userEvent.type(zipInput, input);

}
const clickSubmit = () =>{
    const submitButton = screen.getByTestId('submitButton');
    userEvent.click(submitButton);
}

test("form header renders", () => {
    render(<CheckoutForm errors={[]}/>); 
});

test("form shows success message on submit with form details", async () => {
    expect(render(<CheckoutForm />));
    firstNameInputSetUp('Justin');
    lastNameInputSetUp('Burk');
    addressInputSetUp('123 main st');
    cityInputSetUp('Dallas');
    stateInputSetUp('TX');
    zipInputSetUp('12345');

    clickSubmit();
    const firstName = screen.getByText('Justin');

    const lastName = screen.getAllByText('Burk');
    const address = screen.getAllByText('123 main st');
    const city = screen.getAllByText('Dallas');
    const state = screen.getAllByText('TX');
    const zip = screen.getAllByText('12345');

    expect(firstName).toBeInTheDocument;
    expect(lastName).toBeInTheDocument;
    expect(address).toBeInTheDocument;
    expect(city).toBeInTheDocument;
    expect(state).toBeInTheDocument;
    expect(zip).toBeInTheDocument;

});
