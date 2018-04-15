import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const Page = ({ children }) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
);

Page.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Page;
