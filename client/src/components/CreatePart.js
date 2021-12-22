
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

function CreatePart() {
    const [masinosid, setMasinosid] = useState("");
    const [pavadinimas, setPavadinimas] = useState("");
    const [modelis, setModelis] = useState("");
    const [metai, setMetai] = useState("");
    const [status, setStatus] = useState("");

    const create = () => {
        Axios.post("http://localhost:8080/api/v1/detale", {
          masinos_id: masinosid,
          pavadinimas: pavadinimas,
          modelis: modelis,
          metai: metai,
          status: status,
        }).then((response) => {
          console.log(response);
        });
      };

      return (
        <div className="App">
        <div className="Registration">
        <h1>Prašome įvesti duomenis detalės sukurimui:</h1>
        <label>Masinos id:</label>
          <Input
            type="text"
            onChange={(e) => {
              setMasinosid(e.target.value);
            }}
          />
          <label>Pavadinimas:</label>
          <Input
            type="text"
            onChange={(e) => {
              setPavadinimas(e.target.value);
            }}
          />
          <label>Modelis:</label>
          <Input
            type="text"
            onChange={(e) => {
              setModelis(e.target.value);
            }}
          />
  
          <label>Metai:</label>
          <Input
            type="text"
            onChange={(e) => {
              setMetai(e.target.value);
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

export default CreatePart
