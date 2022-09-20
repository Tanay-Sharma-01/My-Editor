import React, {useState} from "react";

function GetLanguage() {
    
    const [lang , setLang] = useState({});
    
  const getLang = () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "b27af1dbccmshfd2a44f218b824ap1adcf5jsn6125851982dc",
        "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
      },
    };

    fetch("https://judge0-ce.p.rapidapi.com/languages", options)
      .then((response) => response.json())
      .then((response) => {
        let data;
        for(let i=0 ; i<response.length; i++){
            let id = response[i].id;
            let name = response[i].name;
            data = {
                ...data,
                [name]: id
            }
        }
        setLang(data)
      })
      .catch((err) => console.error(err));
  };


  return <div></div>;
}

export default GetLanguage;
