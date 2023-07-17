import styled from "styled-components";
import background from "../../assets/img/batmanx3.jpg";




//import 'src/assets/fonts/batman_forever/batmfa__.ttf';
//creo estilos y estilos con promps
export const StyledForm= styled.form`
gap: 1.25em;
margin: 2em;
color: white;

padding: 1em;
display : flex;

border-radius: 5px;
align-items: center;
flex-direction: column;
background-color: ${props=> props.register ? 'rgba(100,0,255,75%)' : 'rgba(0,0,0,30%)'};
background-image: url(${background});
background-size: 100% 100%;
background-repeat: no-repeat;
border: 5px solid black;


font-family: 'Stalinist One', cursive;


font-size: 1.2em;

transition: .5s all;
box-shadow: 5px 10px 3px 3px rgba(0,0,0,20%), 0px 5px 20px 3px rgba(0,0,0,30%)
`


export const StyledTitle= styled.h1`
      font-size: 2em;
      text-shadow: -3px -3px 10px #000;
      
`

export const StyledInput= styled.input`
      width: 100%;
      border: 8px;
      padding: 0.5em;
      font-size: 0.8em;
      font-family: 'Aclonica', sans-serif;
      border-radius: 0.25em;
      box-shadow: 0px 1px 7px rgba(0,0,0,50%)
`

export const StyledError= styled.div`
      background: linear-gradient(45deg, rgba(255,0,0,1), rgba(200,73,73,1) 100%);
      color: white;
      width:75%;
      transition: all 1s;
      padding: 0.2em 0;
      font-size; inherit;
      border-radius: 0.2em;
      tranform: scale(0);
      text-shadow: 0px 2px 5px black;
      text-aling: center

`

export const StyledButton = styled.button`
      border: 1px solid black;
      color: white;
      diplay: flex;
      
      cursor: pointer;
      padding: 0.5em 2em;
      width: fit-content;
      font-size: inherit;
      border-radius: 0.2em;
      font-family: 'Aclonica', sans-serif;
      text-shadow: 3px 3px 5px #000;
      justify-content: center;
      box-shadow: 0px 1px 7px rgba(0,0,0,50%);
      background: ${props => props.changeButton ? 'linear-gradient(45deg, rgba(0,28,130,1) 0%, rgba(200,73,73,1) 100%)'
                    : props.google ? 'red'
                    : 'linear-gradient(45deg, rgba(73,28,138,1) 0%, rgba(110,67,163,1) 100%)'
                    
                  };
      &:hover{
            background: linear-gradient(45deg, rgba(28,130,127,1) 0%, rgba(64,163,155,1) 100%)
      };
`
