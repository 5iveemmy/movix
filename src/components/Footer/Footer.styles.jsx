import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 37px;
  align-items: center;
  padding: 50px 0px 63px;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 48px;
`;

export const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 48px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const Icon = styled.img``;

export const Text = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  color: #111827;
`;

export const CopyRight = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  color: #6b7280;
`;
