import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
    
`;

export const WrapperInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: 200px;
    margin-left: 10px;
    h1 {
        font-size: 35px;
        font-weight: bold;
    }
    h3 {
        font-size: 18px;
        font-weight: bold;
    }
    h4 {
        font-size: 16px;
        font-weight: bold;
    }
    
`;

export const WrapperStatusCount = styled.div`
    display: flex;
    align-items: flex-start;
    div {
        margin:0 8px 8px 0px;
        text-align: center;
    }
    
`;

export const WrapperUserName = styled.div`
    display: flex;
    align-items: center;
    margin-top: 8px;
    h3 {
        margin-right: 8px;
    };

    a{
        color: orange;
        font-weight: bold;
        font-size: 18px;
    }
    
`;

export const WrapperImage = styled.img`
    border-radius: 50%;
    width: 220px;
    margin: 8px;

    
`;
