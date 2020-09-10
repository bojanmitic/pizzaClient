import React from 'react';
import { useForm } from 'react-hook-form';
import { Modal, Form, Col } from 'react-bootstrap';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';

interface IModalProps {
  onHide: () => void;
  show: boolean;
}

const DeliveryModal = (props: IModalProps) => {
  const { register, handleSubmit, errors } = useForm({
    mode: 'onSubmit',
  });
  const onSubmit = (data: any) => {
    console.log(data);
    onHide();
  };
  const { onHide } = props;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <FontAwesomeIcon icon={faMapMarkedAlt} /> ENTER DELIVERY ADDRESS
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="street">
            <Form.Label>Street</Form.Label>
            <Form.Control
              placeholder="Street"
              name="street"
              ref={register({
                required: 'Required',
                minLength: 5,
              })}
              isInvalid={!!errors.street}
            />
            <Form.Control.Feedback type={'invalid'}>
              Please provide a valid street.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Row>
            <Form.Group as={Col} controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control
                placeholder="City"
                name="city"
                ref={register({
                  required: 'Required',
                  minLength: 3,
                })}
                isInvalid={!!errors.city}
              />
              <Form.Control.Feedback type={'invalid'}>
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} controlId="zip">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                placeholder="Zip"
                name="zip"
                ref={register({
                  required: 'Required',
                  minLength: 5,
                })}
                isInvalid={!!errors.zip}
              />
              <Form.Control.Feedback type={'invalid'}>
                Please provide a valid zip code.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleSubmit(onSubmit)} type="submit">
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeliveryModal;
