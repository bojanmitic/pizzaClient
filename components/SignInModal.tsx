import React from 'react';
import { useForm } from 'react-hook-form';
import { Modal, Form, Col } from 'react-bootstrap';
import Button from './Button';

interface IModalProps {
  onHide: () => void;
  show: boolean;
}

const SignInModal = (props: IModalProps) => {
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
        <Modal.Title id="contained-modal-title-vcenter">LOG IN</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="email">
            <Form.Label>Login(Email)</Form.Label>
            <Form.Control
              placeholder="email"
              name="email"
              ref={register({
                required: 'Required',
                minLength: 4,
              })}
            />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              ref={register({
                required: 'Required',
                minLength: 8,
              })}
              isInvalid={!!errors.password}
            />
            <Form.Control.Feedback type={'invalid'}>
              Password must be at least 8 characters long.
            </Form.Control.Feedback>
          </Form.Group>
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

export default SignInModal;
