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
  console.log(currentUser);
  return <Component {...pageProps} currentUser={currentUser} />;
}

const currentUserApi = 'https://localhost:5000/api/users/current-user';

App.getInitialProps = async (appContext: any) => {
  const userRes = await fetcher(currentUserApi);
  const currentUser = await userRes.json();

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
