import Image from 'gatsby-image';
import React from 'react';
import { Wrapper, ImageWrapper, Spacer, HomeText, Hello } from './styles';

interface Props {
  imageFluid: any;
  taglineHtml: string;
}

const Home = ({ imageFluid, taglineHtml }: Props) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image fluid={imageFluid} />
      </ImageWrapper>
      <Spacer />
      <HomeText>
        <Hello>Hallo,</Hello>
        Ik ben Michelle
        <div dangerouslySetInnerHTML={{ __html: taglineHtml }} />
      </HomeText>
    </Wrapper>
  );
};

export default Home;
