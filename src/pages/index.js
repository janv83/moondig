import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Divider, Stack } from '@mui/material';
import { useAuthContext } from '../contexts/auth-context';
import { MainLayout } from '../components/main-layout';
import { HomeHero } from '../components/home/home-hero';
import { HomeHandcash } from '../components/home/home-handcash';
import { HomeDurodogs } from '../components/home/home-durodogs';
import { authApi } from '../_api_/auth-api';
import { redirect } from 'next/dist/server/api-utils';


const Page = () => {

  const [redirectionUrl, setRedirectionUrl] = useState("/")

  useEffect(() => {
    authApi.getRedirectionURL().then((url) => { if (url) setRedirectionUrl(url); });
  }, []);

  return (
    <>
      <Head>
        <title>
          Moon Dig
        </title>
      </Head>
      <main>
          <Stack alignItems='center'><img onClick={()=>{ if(redirectionUrl) window.location.href=redirectionUrl}} style={{height: '50vh'}} src='/static/images/moondig2.png' alt='moon' /></Stack>
          <HomeHandcash />
      </main>
    </>
  );
};

Page.getLayout = (page) => (
  <MainLayout>
    {page}
  </MainLayout>
);

export default Page;
