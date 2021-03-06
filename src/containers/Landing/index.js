import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import LandingWraper from '../../components/LandingWraper';
import { CenterDiv } from '../../styles/GlobalStyles';
const Landing = () => {
  return (
    <LandingWraper>
      <CenterDiv direction='row'>
        <Link to='/signin'>
          <Button buttonType={'primary'}>Sign In</Button>
        </Link>
        <Link to='/signup'>
          <Button buttonType={'primary'}>Sign Up</Button>
        </Link>
      </CenterDiv>
    </LandingWraper>
  );
};
export default Landing;
