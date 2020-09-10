import { Button, Carousel, Modal } from 'react-bootstrap';
import { IImage } from '../pages/gallery';

const ImagesModal = (props: any) => {
  const { images } = props;
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      {...props}
    >
      <Modal.Body>
        <Carousel>
          {images &&
            images.map((image: IImage) => (
              <Carousel.Item key={image.id}>
                <img
                  className="d-block w-100"
                  src={image.imageurl}
                  alt="Dish image"
                />
              </Carousel.Item>
            ))}
        </Carousel>
      </Modal.Body>
    </Modal>
  );
};

export default ImagesModal;
