import React, { useEffect, useState } from "react";
import '../../App.css';
import Axios from "axios";
import Footer from '../Footer';
import tw from "twin.macro";
const Input = tw.input`
  h-8
  border-2
  border-solid
  border-green-500
  outline-none
  p-4
  rounded-lg
`;
const Button = tw.button`
  pl-4
  pr-4
  pt-2
  pb-2
  text-black
  rounded-md
  bg-green-300
  hover:bg-green-200
  transition-colors
`;

function LogIn() {
  const [fnameReg, setFnameReg] = useState("");
  const [lnameReg, setLnameRegReg] = useState("");
  const [genderReg, setGenderReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [numberReg, setNumberReg] = useState("");


  Axios.defaults.withCredentials = true;

  const register = () => {
    Axios.post("http://localhost:8080/api/users/register", {
      first_name: fnameReg,
      last_name: lnameReg,
      gender: genderReg,
      email: emailReg,
      password: passwordReg,
      number: numberReg,
    }).then((response) => {
      console.log(response);
    });
  };


    return (
      <div className="App">
      <div className="Registration">
      <h1>Prašome įvesti duomenis registracijai:</h1>
      <label>Vardas:</label>
        <Input
          type="text"
          onChange={(e) => {
            setFnameReg(e.target.value);
          }}
        />
        <label>Pavarde:</label>
        <Input
          type="text"
          onChange={(e) => {
            setLnameRegReg(e.target.value);
          }}
        />
        <label>Lytis:</label>
        <Input
          type="text"
          onChange={(e) => {
            setGenderReg(e.target.value);
          }}
        />

        <label>El. paštas:</label>
        <Input
          type="text"
          onChange={(e) => {
            setEmailReg(e.target.value);
          }}
        />
        <label>Slaptažodis:</label>
        <Input
          type="text"
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
        />
        <label>Mobilus numeris:</label>
        <Input
          type="text"
          onChange={(e) => {
            setNumberReg(e.target.value);
          }}
        />
        <Button onClick={register}> Registruotis </Button>
      </div>
      <Footer />
    </div>
      );
}

export default LogIn