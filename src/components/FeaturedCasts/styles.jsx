import styled from "styled-components";

export const Container = styled.div`
  width: ${({ exclusive }) => (exclusive ? "450px" : "250px")};
`;

export const Image = styled.img`
  width: 100%;
  height: 370px;
  object-fit: ${({ exclusive }) => (exclusive ? "none" : "cover")};
`;

export const Name = styled.p`
  font-size: 18px;
  line-height: 23px;
  font-weight: 700;
  padding-top: 12px;
`;
