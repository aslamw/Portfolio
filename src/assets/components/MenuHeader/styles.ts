import styled from "styled-components";

const BoxMenu = styled.main`
    @media (max-width:700px ){
        display: flex;
        justify-content: space-around;
        align-items: center;

        width: 100vw;
        height: 6vh;
        padding: 2%;

        background: linear-gradient(to right,var(--blue-light) ,var(--blue-dark-small) );
        box-shadow: 0px 2px 10px black;
        z-index: 0;

    }
    `
const Menu = styled.div`
    @media (max-width:700px){
        display: flex;
        flex-direction: column;
        width: 100%;

        margin-left: 5%;
        z-index: 2;


        & .Box{
            background-color: white;

            width: 20px;
            padding:1px;
            margin-bottom:1%
        }
        & .BoxOne{

        }
        & .BoxTwo{

        }
        & .BoxThree{

        }
    }
`

export {
    BoxMenu,Menu
}