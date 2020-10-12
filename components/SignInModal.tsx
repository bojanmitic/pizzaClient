import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { signIn } from '../api/actions';

import { Modal, Form } from 'react-bootstrap';
import Button from './Button';
import ShowErrors from './ShowErrors';

interface IModalProps {
  onHide: () => void;
  show: boolean;
}

const SignInModal = (props: IModalProps) => {
  const [submitting, setSubmitting] = useState(false);
  const [resErr, setResErr] = useState([]);
  const { register, handleSubmit, errors } = useForm({
    mode: 'onSubmit',
  });
  const onSubmit = async (data: any) => {
    setResErr([]);
    setSubmitting(true);
    try {
      const user = await signIn(data);
      console.log(user);
      onHide();
    } catch (error) {
      setResErr(error.response.data.errors);
    }
    setSubmitting(false);
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
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type={'invalid'}>
              Email is required.
            </Form.Control.Feedback>
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
        <Button
          pending={!!submitting}
          disabled={!!submitting}
          spinnerColor="light"
          onClick={handleSubmit(onSubmit)}
          type="submit"
        >
          Confirm
        </Button>
      </Modal.Footer>
      {resErr && <ShowErrors errors={resErr} />}
    </Modal>
  );
};

export default SignInModal;
