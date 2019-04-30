import React from 'react';

import SiderCase from '../containers/SiderCase'
import Content from './Content.jsx'

import PropTypes from 'prop-types'
import styled from 'styled-components'
import config from '../utils/config'

function Section() {
  const Section = styled.section `
    display: flex;
    position: fixed;
    width: 80%;
    left: 10%;
    border-radius: 5px;
    right: 10%;
    margin: 0 auto;
    top: ${config.HEADER_HEIGHT+config.DIVIDER_HEIGHT}px;
    bottom: ${config.DIVIDER_HEIGHT}px;
  `
  return (
    <Section>
      <SiderCase a={true}></SiderCase>
      <Content></Content>
    </Section>
  );
}
Section.propTypes = {
  // menuData: PropTypes.array.isRequired,
}
export default Section;
