import React, { useEffect, useState } from "react";
import '../App.css';
import Axios from "axios";
import Footer from './Footer';
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


function CreateService() {
    const [pavadinimas, setPavadinimas] = useState("");
    const [adresas, setAdresas] = useState("");
    const [telefononr, setTelefonoNr] = useState("");
    const [status, setStatus] = useState("");

    const create = () => {
        Axios.post("http://localhost:8080/api/v1/servisas", {
          pavadinimas: pavadinimas,
          adresas: adresas,
          telefono_nr: telefononr,
          status: status,
        }).then((response) => {
          console.log(response);
        });
      };

      return (
        <div className="App">
        <div className="Registration">
        <h1>Prašome įvesti duomenis detalės sukurimui:</h1>
          <label>Pavadinimas:</label>
          <Input
            type="text"
            onChange={(e) => {
              setPavadinimas(e.target.value);
            }}
          />
          <label>Adresas:</label>
          <Input
            type="text"
            onChange={(e) => {
              setAdresas(e.target.value);
            }}
          />
  
          <label>Mobilus nr.:</label>
          <Input
            type="text"
            onChange={(e) => {
              setTelefonoNr(e.target.value);
            }}
          />
          <label>Status:</label>
          <Input
            type="text"
            onChange={(e) => {
              setStatus(e.target.value);
            }}
          />
          <Button onClick={create}> Sukurti </Button>
        </div>
        <Footer />
      </div>
        );
}

export default CreateService
