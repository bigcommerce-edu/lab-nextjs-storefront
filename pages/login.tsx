import { GetServerSideProps } from 'next';
import getGlobalServerSideProps from '@/lib/getGlobalServerSideProps';
import { useState } from 'react';
import { useRouter } from 'next/router';
import PageHeading from '@/components/PageHeading';
import { useCustomerSession } from '@/context/customerSession';

export const getServerSideProps = (async (context) => {
  return {
    props: {
      ... await getGlobalServerSideProps(context),
    }
  };
}) satisfies GetServerSideProps;

export default function LoginPage() {
  return (
    <>

    </>
  )
}