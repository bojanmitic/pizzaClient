import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import { fetcher } from './../api/fetcher';

type AppComponentProps = AppProps & {
  currentUser: {
    email: string;
    id: number;
    isadmin: boolean;
    password: string;
  };
};

export default function App({
  Component,
  pageProps,
  currentUser,
}: AppComponentProps) {
  return <Component {...pageProps} currentUser={currentUser} />;
}

const currentUserApi = 'http://localhost:5000/api/users/current-user';

//TO DO: define appContext
App.getInitialProps = async (appContext: any) => {
  const currentUser = await fetcher(currentUserApi);
  let pageProps = {};
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(
      appContext.ctx,
      currentUser
    );
  }

  return {
    pageProps,
    currentUser: currentUser,
  };
};
