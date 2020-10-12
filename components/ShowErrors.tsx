import { Alert } from 'react-bootstrap';

export interface IError {
  message: string;
  field?: string;
}

const ShowErrors = ({ errors }: { errors: IError[] }) => {
  return (
    <>
      {errors &&
        errors.map((err: IError) => (
          <Alert key={err.message} variant="danger">
            <p>{err.message}</p>
            <p>{err.field}</p>
          </Alert>
        ))}
    </>
  );
};

export default ShowErrors;
