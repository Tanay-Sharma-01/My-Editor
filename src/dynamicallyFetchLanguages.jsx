import React,{useEffect,useState} from 'react'

function dynamicallyFetchLanguages() {

    const [languages, setLanguages] = useState({});
  const [currentLang, setCurrentLang] = useState();
  const [langArray, setLangArray] = useState([]);
  const [monacoLanguage , setMonacoLanguage] = useState({});

    const mainArr = {"C": 50,
    "CLOJURE": 86,
    "ELIXIR": 57,
    "GO": 60,
    "JAVA": 62,
    "JAVASCRIPT": 63,
    "KOTLIN": 78,
    "LUA": 64,
    "PASCAL": 67,
    "PERL": 85,
    "PHP": 68,
    "PYTHON": 71,
    "R": 80,
    "RUBY": 72,
    "RUST": 73,
    "SCALA": 81,
    "SQL": 82,
    "SWIFT": 83,
    "TYPESCRIPT": 74}

  const getLanguages = () => {
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
        let data = {};
        response.forEach((element) => {
          const id = element.id;
          const name = element.name.toUpperCase().split(" ")[0];
          data = {
            ...data,
            [name]: id,
          };
        });
        setLanguages(data);
        setLangArray(Object.keys(data));
      })
      .catch((err) => console.error(err));
  };

  const refineLanguages = () => {
    const arr = [
      "abap",
      "aes",
      "apex",
      "azcli",
      "bat",
      "bicep",
      "c",
      "cameligo",
      "clojure",
      "coffeescript",
      "cpp",
      "csharp",
      "csp",
      "css",
      "cypher",
      "dart",
      "dockerfile",
      "ecl",
      "elixir",
      "flow9",
      "fsharp",
      "go",
      "graphql",
      "handlebars",
      "hcl",
      "html",
      "ini",
      "java",
      "javascript",
      "json",
      "julia",
      "kotlin",
      "less",
      "lexon",
      "liquid",
      "lua",
      "m3",
      "markdown",
      "mips",
      "msdax",
      "mysql",
      "objective",
      "pascal",
      "pascaligo",
      "perl",
      "pgsql",
      "php",
      "pla",
      "plaintext",
      "postiats",
      "powerquery",
      "powershell",
      "proto",
      "pug",
      "python",
      "qsharp",
      "r",
      "razor",
      "redis",
      "redshift",
      "restructuredtext",
      "ruby",
      "rust",
      "sb",
      "scala",
      "scheme",
      "scss",
      "shell",
      "sol",
      "sparql",
      "sql",
      "st",
      "swift",
      "systemverilog",
      "tcl",
      "twig",
      "typescript",
      "vb",
      "verilog",
      "xml",
      "yaml",
    ];
    const mp = new Map();
    for (let i = 0; i < langArray.length; i++) {
      const ele = langArray[i];
      mp.set(ele , 1);
    }

    let data = {}
    for(let i=0 ; i<arr.length; i++){
        const val = arr[i].toUpperCase();
        if(mp.get(val) != undefined){
            data = {
                ...data,
                [val] : languages[val]
            }
        }
    }
  };

  useEffect(() => {
    getLanguages();
  }, []);

  useEffect(() => {
    refineLanguages();
  }, [langArray]);


  return (
    <div>dynamicallyFetchLanguages</div>
  )
}

export default dynamicallyFetchLanguages