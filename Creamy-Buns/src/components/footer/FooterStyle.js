import styled from "styled-components";
import { FaHome, FaBook, FaUsers } from "react-icons/fa";
import { HiAnnotation } from "react-icons/hi";


//css del footer de navegacion

export const FooterList = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    padding: 0;
    margin: 0;
    padding: 10px 0;
`;

export const IconStyledFaHome = styled(FaHome)`
    font-size: 40px;
    color: #000;
`
export const IconStyledFaBook = styled(FaBook)`
    font-size: 40px;
    color: #000;
`

export const IconStyledHiAnnotation = styled(HiAnnotation)`
    font-size: 40px;
    color: #000;
`

export const IconStyledFaUsers = styled(FaUsers)`
    font-size: 40px;
    color: #000;
`

