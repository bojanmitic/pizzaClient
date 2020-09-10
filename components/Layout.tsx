import React, { ReactNode, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';

import styles from './layout.module.css';
import { Nav, Navbar, Container } from 'react-bootstrap';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'Pizza App' }: Props) => {
  const [key, setKey] = useState('/');
  console.log(key);
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container fluid>
        <header className={styles.header}>
          <Navbar bg="white" expand="lg">
            <Link href="/" passHref>
              <Navbar.Brand>Pizza App</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-center"
            >
              <Nav activeKey={key} onSelect={(linkKey) => setKey(linkKey!)}>
                <Link href="/" passHref>
                  <Nav.Link className={styles.navItem} eventKey="/">
                    HOME
                  </Nav.Link>
                </Link>
                <Link href="/gallery" passHref>
                  <Nav.Link className={styles.navItem} eventKey="/gallery">
                    GALLERY
                  </Nav.Link>
                </Link>
                <Link href="/table-booking" passHref>
                  <Nav.Link className={styles.navItem} eventKey="/tableBooking">
                    TABLE BOOKING
                  </Nav.Link>
                </Link>
                <Link href="/menu-order" passHref>
                  <Nav.Link className={styles.navItem} eventKey="/menu-order">
                    MENU/ORDER ONLINE
                  </Nav.Link>
                </Link>
                <Link href="/contact" passHref>
                  <Nav.Link className={styles.navItem} eventKey="/contact">
                    CONTACT
                  </Nav.Link>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </header>
        {children}
        <footer>
          <hr />
          <span>I'm here to stay (Footer)</span>
        </footer>
      </Container>
    </div>
  );
};

export default Layout;
