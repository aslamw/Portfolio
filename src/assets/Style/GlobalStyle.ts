import {createGlobalStyle} from 'styled-components'
import reset from 'styled-reset'

export const CreateGlobal = createGlobalStyle`
    ${reset}
    :root{
        --blue-light: #00B6B6;
        --blue-half: #047B7B;
        --blue-dark-small: #047B7B;
        --blue-dark-tall: #073838;
        --gray-main: #CED1D1;
        --background-all: white;
        --text-all: black;
    }
`