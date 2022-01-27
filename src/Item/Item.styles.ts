import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.4);
    height: 100%;
    border-radius: 20px;

    &:hover {
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
        transition: all 0.3s;
    }

    button {
        border-radius: 0 0 20px 20px;
        border-top: 1px solid rgba(0, 0, 0, 0.4);
    }

    img {
        max-height: 205px;
        object-fit: cover;
        border-radius: 20px 20px 0 0
    }

    div {
        font-family: Arial, Helvetica, sans-serif;
        padding: 1rem;
        height: 100%;
    }

    .item__inner {
        display: flex;
        flex-flow: column;
        justify-content: flex-start;
    }

    .item__price {
        margin-top: auto;
    }
`;