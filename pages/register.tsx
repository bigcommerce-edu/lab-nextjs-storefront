import { GetServerSideProps } from 'next';
import getGlobalServerSideProps from '@/lib/getGlobalServerSideProps';
import { useState } from 'react';
import { useRouter } from 'next/router';
import PageHeading from '@/components/PageHeading';

export const getServerSideProps = (async (context) => {
  return {
    props: {
      ... await getGlobalServerSideProps(context),
    }
  };
}) satisfies GetServerSideProps;

export default function RegisterPage() {
  return (
    <>

    </>
  )
}
