import styled from "@emotion/styled";
export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(#fcf9ee, #ffffff, #fcf9ee);
`;
export const Title = styled.button`
  font-size: 20px;
  font-weight: 700;
  margin-top: 20px;
  width: 205px;
  height: 40px;
  box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  background-color: hsla(0, 0%, 62%, 0.2);
  border-radius: 5px;
`;
export const MainImg = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
`;
