import styled from 'styled-components';
import { down } from 'styled-breakpoints';

export const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;

  ${down('tablet')} {
    display: block;
  }
`;

export const HomeText = styled.div`
  flex: 7;
  font-family: cormorant-garamond;
  font-size: 2.8rem;
  font-weight: 500;
  line-height: 1.2992;
  white-space: pre-wrap;

  p {
    margin-top: 2rem;
    margin-bottom: 0;
  }
`;

export const ImageWrapper = styled.div`
  box-sizing: border-box;
  flex: 4;
  padding: 0 34px 17px 0;

  ${down('tablet')} {
    padding: 0;
  }
`;

export const Spacer = styled.div`
  flex: 1;
`;

export const Hello = styled.div`
  color: #423d3d;
  font-size: 1.6rem;
  line-height: 1.3664;
  margin: 2rem 0;
`;
