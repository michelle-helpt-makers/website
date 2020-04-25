import Image from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import { down } from 'styled-breakpoints';

interface Props {
  foreword: string;
  imageFluid: any;
  html: string;
}

const Wrapper = styled.div`
  font-family: adobe-garamond-pro;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 300;
  letter-spacing: 0em;
  line-height: 1.8;
  white-space: pre-wrap;
  word-wrap: break-word;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row nowrap;
  align-items: center;

  ${down('tablet')} {
    display: block;
  }
`;

const ImageWrapper = styled.div`
  flex: 6;

  ${down('tablet')} {
    margin-bottom: 2rem;
  }
`;

const Spacer = styled.div`
  flex: 2;
`;

const ForeWord = styled.div`
  flex: 4;
`;

const Body = styled.div`
  font-size: 1.5rem;
  width: 75%;
  margin: 0 auto;
  padding-top: 10vmax;

  p {
    margin: 0;
  }

  strong {
    font-weight: bold;
  }

  ${down('tablet')} {
    width: 100%;
    font-size: inherit;
  }
`;

const About = ({ foreword, imageFluid, html }: Props) => {
  return (
    <Wrapper>
      <Row>
        <ImageWrapper>
          <Image fluid={imageFluid} />
        </ImageWrapper>
        <Spacer />
        <ForeWord>{foreword}</ForeWord>
      </Row>

      <Body dangerouslySetInnerHTML={{ __html: html }} />
    </Wrapper>
  );
};

export default About;
