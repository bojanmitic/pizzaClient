import React from 'react';
import Layout from '../components/Layout';
import { Container, Row } from 'react-bootstrap';
import utilStyles from '../styles/utils.module.css';

const TableBooking = () => {
  return (
    <Layout title="Table Booking">
      <Container className={utilStyles.mtmd}>
        <Row>Table booking</Row>
      </Container>
    </Layout>
  );
};

export default TableBooking;
