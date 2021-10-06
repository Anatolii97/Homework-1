import styled from "styled-components";

export const isOnline = styled.span`
        border: 15px solid;
        border-color:  ${(online) => online.status === true ? 'green' : 'red'};
        border-radius: 50%;
        width: 0px;
    `;

export default isOnline;