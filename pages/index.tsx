import { Col, Row } from 'react-bootstrap';
import Layout from '../components/Layout';
import utilStyles from '../styles/utils.module.css';
import styles from './index.module.css';

const IndexPage = () => (
  <Layout title="Home">
    <Row className={`${utilStyles.alignCenter} ${utilStyles.mtxl}`}>
      <Col lg={{ span: 6, offset: 3 }}>
        <p className={`${utilStyles.leading}`}>EXCLUSIVELY FRESH INGREDIENTS</p>
        <div className={`${utilStyles.redSeparator}`} />
        <p className={`${utilStyles.fontSizeM}`}>
          In our kitchen we make sure that the dishes are prepared only from the
          highest quality products. Thanks to this, our pizza is a delicacy that
          can not be resisted!
        </p>
      </Col>
    </Row>
    <Row className={`${utilStyles.mtxl}`}>
      <Col>
        <div className={styles.image} />
      </Col>
    </Row>
  </Layout>
);

export default IndexPage;
