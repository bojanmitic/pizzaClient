import { useState } from 'react';
import Layout from '../components/Layout';
import useSWR from 'swr';
import styles from './gallery.module.css';
import utilStyles from '../styles/utils.module.css';
import { fetcher } from '../api/fetcher';
import { Col, Row, Container, Spinner } from 'react-bootstrap';
import ImagesModal from '../components/ImagesModal';

const imagesUrl = 'http://localhost:5000/api/images';

export interface IImage {
  id: number;
  imageurl: string;
}

const Gallery = () => {
  const { data, error } = useSWR(imagesUrl, fetcher);
  const [modalShow, setModalShow] = useState(false);

  let status;

  if (error) status = <div>Failed to load</div>;
  if (!data)
    status = (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );

  return (
    <Layout title="Gallery">
      <Container className={utilStyles.mtxl}>
        <Row>
          {status}
          {data &&
            data.map((image: IImage) => (
              <Col sm={12} md={6} xl={4} key={image.id}>
                <div
                  className={styles.imageDiv}
                  style={{ backgroundImage: `url(${image.imageurl})` }}
                  onClick={() => setModalShow(true)}
                ></div>
              </Col>
            ))}
        </Row>
      </Container>
      <ImagesModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        images={data}
      />
    </Layout>
  );
};

export default Gallery;
