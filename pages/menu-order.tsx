import React, { useState } from 'react';
import Layout from '../components/Layout';
import DishCard from '../components/DishCard';
import {
  Col,
  Container,
  Row,
  Navbar,
  Nav,
  Spinner,
  Dropdown,
  Form,
} from 'react-bootstrap';
import { Link } from 'react-scroll';
import useSWR from 'swr';
import { fetcher } from '../api/fetcher';
import styles from './menu-order.module.css';
import utilStyles from '../styles/utils.module.css';
import DeliveryModal from './../components/DeliveryModal';
import SignInModal from './../components/SignInModal';
import { currentUser } from '../../server/src/middlewares/curentUser';

const mealsUrl = 'https://localhost:5000/api/meals';

interface MealSection {
  id: string;
  name: string;
  Meal: IMeal[];
}

interface IMeal {
  imageurl: 'string';
  name: 'string';
  description: 'string';
  price: number;
  id: number;
}

const MenuOrder = (props) => {
  console.log('props from menu order', props);
  const { data, error } = useSWR(mealsUrl, fetcher);
  const [showDeliveryModal, setShowDeliveryModal] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);

  const [delivery, setDelivery] = useState('pickUp');

  let status;

  if (error) status = <div>Failed to load</div>;
  if (!data)
    status = (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );

  const handleDelivery = (event: React.ChangeEvent<HTMLInputElement>) => {
    const deliveryMethod = event.currentTarget.value;
    setDelivery(deliveryMethod);
    deliveryMethod === 'delivery' && setShowDeliveryModal(true);
  };

  const handleSignInModal = () => {
    setShowSignInModal(!showSignInModal);
  };

  return (
    <Layout title="Menu/Order">
      <Container className={utilStyles.mtmd}>
        <Row>
          {status}
          <Col md="9">
            <Navbar className={styles.dishesNavBar}>
              <Nav className={styles.dishesNav}>
                {data &&
                  data.map((mealSection: MealSection) => (
                    <Nav.Link
                      className={styles.dishesNavLink}
                      key={mealSection.id}
                      as="div"
                    >
                      <Link
                        className={styles.scrollLink}
                        to={`${mealSection.id}`}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        as="div"
                      >
                        {mealSection.name}
                      </Link>
                    </Nav.Link>
                  ))}
              </Nav>
            </Navbar>
            <Container className={styles.dishesSection}>
              {data &&
                data.map((mealSection: MealSection) => (
                  <div key={mealSection.id} id={mealSection.id}>
                    <h2 className={styles.dishHeading}>{mealSection.name}</h2>
                    <Row className={styles.meals}>
                      {mealSection.Meal.map((meal: IMeal) => (
                        <Col md="4" xs="12" key={meal.id}>
                          <DishCard
                            name={meal.name}
                            id={meal.id}
                            imageUrl={meal.imageurl}
                            description={meal.description}
                            price={meal.price}
                            key={meal.id}
                          />
                        </Col>
                      ))}
                    </Row>
                  </div>
                ))}
            </Container>
          </Col>
          <Col md="3">
            <Row>
              <Col md="6">
                <div className={styles.cartHeading}>Mama Rosa</div>
                <div className={styles.resAddress}>Helsingin katu 44</div>
              </Col>
              <Col md="6">
                <Dropdown>
                  <Dropdown.Toggle variant="">Account</Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={handleSignInModal}>
                      Sign in
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Register</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>
            <Row className={utilStyles.mts}>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Control
                  as="select"
                  defaultValue="pickUp"
                  onChange={handleDelivery}
                >
                  <option value="pickUp">Pick Up</option>
                  <option value="delivery">Home Delivery</option>
                </Form.Control>
              </Form.Group>
            </Row>
          </Col>
        </Row>
        <DeliveryModal
          show={showDeliveryModal}
          onHide={() => setShowDeliveryModal(false)}
        />
        <SignInModal
          show={showSignInModal}
          onHide={() => setShowSignInModal(false)}
        />
      </Container>
    </Layout>
  );
};

export default MenuOrder;
