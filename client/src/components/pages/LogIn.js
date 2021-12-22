import React, { useEffect, useState } from "react";
import '../../App.css';
import Axios from "axios";
import Footer from '../Footer';
import tw from "twin.macro";

const SearchContainer = tw.div`
  
`;

const SearchText = tw.h2`
  text-xl
    text-gray-800
  mr-6
`;

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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  Axios.defaults.withCredentials = true;

  const login = () => {
    Axios.post("http://localhost:8080/api/users/login", {
      email: email,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        console.log(response);
        setLoginStatus(response.data.message);
        window.location.href = 'http://localhost:3000/partsAdmin'; 
      } else {
        setLoginStatus(response.data[0].username);
        window.location.href = 'http://localhost:3000/partsAdmin'; 
      }
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:8080/api/users/login").then((response) => {
      if (response.data.loggedIn == true) {
        console.log(response);
        setLoginStatus(response.data.user[0].email);
      }
    });
  }, []);

    return (
      <div className="App">
      <div className="login">
        
        <h1>Prašome prisijungti: </h1>
        <Input
          type="text"
          placeholder="El. paštas..."
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Input
          type="password"
          placeholder="Slaptažodis..."
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button onClick={login}> Prisijungti </Button>

      </div>

      <h1>{loginStatus}</h1>
      <Footer />
    </div>
      );
}

export default LogIn
