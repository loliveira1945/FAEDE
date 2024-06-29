import styled from "styled-components";
import Button from "../Button";
import Title from "../Title";
import Label from "../Input/Label";
import Input from "../Input";
import FieldError from "../Input/FieldError";
import FormSuccess from "./FormSuccess";

import { validateForm, fetchAddress } from "./utils/formUtils";

import React, { useState } from 'react';

const FieldStyled = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: self-start;
    width: 60%;
    height: auto;
    
    @media (max-width: 900px) {
      width: 75%;
  }
`

const FieldAddressStyled = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: self-start;
  width: 48%;
  height: 100%;

  @media (max-width: 900px) {
    flex-direction: column;
    width: 100%;
  }
`

const AddressStyled = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 60%;

    @media (max-width: 900px) {
      width: 75%;
    }
`

const inputStyle = 'w-full p-3 rounded-lg text-black focus:outline-none focus:border-customColorBlue focus:ring-2 focus:ring-customColorBlue';
const largeInputStyle = `${inputStyle} py-6`;
const smallInputStyle = `${inputStyle} w-full`;


export default function Forms() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [state, setState] = useState('')
  const [city, setCity] = useState('')
  const [street, setStreet] = useState('')
  const [neighborhood, setNeighborhood] = useState('')
  const [complement, setComplement] = useState('')
  const [question, setQuestion] = useState('')

  const [showNameError, setShowNameError] = useState(false);
  const [showEmailError, setShowEmailError] = useState(false);
  const [showPhoneError, setShowPhoneError] = useState(false);
  const [showZipCodeError, setShowZipCodeError] = useState(false);
  const [showStateError, setShowStateError] = useState(false);
  const [showCityError, setShowCityError] = useState(false);
  const [showStreetError, setShowStreetError] = useState(false);
  const [showNeighborhoodError, setShowNeighborhoodError] = useState(false);
  const [showComplementError, setShowComplementError] = useState(false);
  const [showQuestionError, setShowQuestionError] = useState(false);

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleNameChange = (value: string) => {
    setName(value);
    setShowNameError(value === '');
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    setShowEmailError(value === '');
  };

  const handlePhoneChange = (value: string) => {
    setPhone(value);
    setShowPhoneError(value === '');
  };

  const handleZipCodeChange = (value: string) => {
    setZipCode(value);
    setShowZipCodeError(value === '');
    if (value.length === 8) {
      fetchAddress(value, setState, setCity, setStreet, setNeighborhood, setShowZipCodeError, setShowStateError, setShowCityError, setShowStreetError, setShowNeighborhoodError);
    }
  };

  const handleStateChange = (value: string) => {
    setState(value);
    setShowStateError(value === '');
  };

  const handleCityChange = (value: string) => {
    setCity(value);
    setShowCityError(value === '');
  };

  const handleStreetChange = (value: string) => {
    setStreet(value);
    setShowStreetError(value === '');
  };

  const handleNeighborhoodChange = (value: string) => {
    setNeighborhood(value);
    setShowNeighborhoodError(value === '');
  };

  const handleComplementChange = (value: string) => {
    setComplement(value);
    setShowComplementError(value === '');
  };

  const handleQuestionChange = (value: string) => {
    setQuestion(value);
    setShowQuestionError(value === ''); // Define o erro ao começar a digitar e ao apagar
  };

  const handleButtonClick = () => {
    setShowSuccessMessage(true);
  };

  const sendEmail = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()

    if (!validateForm(name, email, phone, zipCode, state, city, street, neighborhood, complement, question, setShowNameError, setShowEmailError, setShowPhoneError, setShowZipCodeError, setShowStateError, setShowCityError, setShowStreetError, setShowNeighborhoodError, setShowComplementError, setShowQuestionError)) {
      return; // Algum campo obrigatório não foi preenchido
    }

    console.log({
        name,
        email,
        phone,
        zipCode,
        state,
        city,
        street,
        neighborhood,
        complement,
        question
    })
    
    //limpar form ao enviar
    setPhone('')
    setZipCode('')
    setState('')
    setCity('')
    setStreet('')
    setNeighborhood('')
    setComplement('')
    setQuestion('')

    setShowSuccessMessage(true);

    // Reinicia os estados de exibição de erros
    setShowNameError(false);
    setShowEmailError(false);
    setShowPhoneError(false);
    setShowZipCodeError(false);
    setShowStateError(false);
    setShowCityError(false);
    setShowStreetError(false);
    setShowNeighborhoodError(false);
    setShowComplementError(false);
    setShowQuestionError(false);
  }

  return (
    <>
      {!showSuccessMessage && (<form 
      onSubmit={sendEmail}
      className="flex flex-col flex-wrap justify-center items-center rounded-lg h-full w-full my-8 bg-customColorBlue">
        <Title>Still have any questions? Contact us!</Title>

        <FieldStyled>
          <Label>Name *</Label>
          <Input 
            valor={name}
            onChanged = {handleNameChange}
            className={inputStyle}
            obrigatorio={showNameError}
            placeholder="Type your name" />
          {showNameError && <FieldError show>Field Name is mandatory</FieldError>}
        </FieldStyled>

        <FieldStyled>
          <Label>Email *</Label>
          <Input 
            valor={email}
            onChanged={handleEmailChange}
            className={inputStyle}
            typeField="email"
            placeholder="Type your email" />
          {showEmailError && <FieldError show>Field Email is mandatory</FieldError>}
        </FieldStyled>
        
        <FieldStyled>
          <Label>Phone Number *</Label>
          <Input 
            valor={phone}
            onChanged={handlePhoneChange}
            className={inputStyle}
            typeField="tel"
            placeholder="Enter your phone number" />
          {showPhoneError && <FieldError show>Field Phone Number is mandatory</FieldError>}
          
        </FieldStyled>

        <AddressStyled>

          <FieldAddressStyled>
            <Label>Zip Code *</Label>
            <Input 
              valor={zipCode}
              onChanged={handleZipCodeChange}
              className={smallInputStyle}
              placeholder="Type your zip code" />
            {showZipCodeError && <FieldError show>Field Zip Code is mandatory</FieldError>}
          </FieldAddressStyled>
          
          <FieldAddressStyled>
            <Label>State *</Label>
            <Input 
              valor={state}
              onChanged={handleStateChange}
              className={smallInputStyle}
              placeholder="Enter your state" />
            {showStateError && <FieldError show>Field State is mandatory</FieldError>}
          </FieldAddressStyled>

          <FieldAddressStyled>
            <Label>City *</Label>
            <Input 
              valor={city}
              onChanged={handleCityChange}
              className={smallInputStyle}
              placeholder="Enter your city" />
            {showCityError && <FieldError show>Field City is mandatory</FieldError>}
          </FieldAddressStyled>

          <FieldAddressStyled>
            <Label>Street Address *</Label>
            <Input 
              valor={street}
              onChanged={handleStreetChange}
              className={smallInputStyle}
              placeholder="Enter your street address" />
            {showStreetError && <FieldError show>Field Address is mandatory</FieldError>}
          </FieldAddressStyled>

          <FieldAddressStyled>
            <Label>Neighborhood *</Label>
            <Input 
              valor={neighborhood}
              onChanged={handleNeighborhoodChange}
              className={smallInputStyle}
              placeholder="Enter your neighborhood" />
            {showNeighborhoodError && <FieldError show>Field Neighborhood is mandatory</FieldError>}
          </FieldAddressStyled>

          <FieldAddressStyled>
            <Label>Complement *</Label>
            <Input 
              valor={complement}
              onChanged={handleComplementChange}
              className={smallInputStyle}
              placeholder="Enter a complement" />
            {showComplementError && <FieldError show>Field Complement is mandatory</FieldError>}
          </FieldAddressStyled>
          
        </AddressStyled>

        <FieldStyled>
          <Label>Question *</Label>
          <Input 
            valor={question}
            onChanged={handleQuestionChange}
            className={largeInputStyle}
            placeholder="Enter your question" />
          {showQuestionError && <FieldError show>Field Question is mandatory</FieldError>}
        </FieldStyled>

        <Button
          typeButton="submit"
          onClick={handleButtonClick}>
            To Send
        </Button>
      </form>)}

      {showSuccessMessage && (
        <FormSuccess name={name} email={email} />
      )}
    </>
  );
}