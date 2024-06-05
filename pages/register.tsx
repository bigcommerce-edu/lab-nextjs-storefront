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
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const router = useRouter();

  const submitRegister = async () => {
    setLoading(true);
    setErrorMsg(null);

    const loginResp = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        firstName,
        lastName,
        password,
      }),
    }).then(res => res.json());

    setLoading(false);
    
    if (loginResp.success) {
      router.push("/login");
    } else {
      setErrorMsg(loginResp.error ?? "An unexpected error occurred");
    }
  }

  return (
    <>
      <PageHeading>Register</PageHeading>
      <div className="w-1/3">
        <form onSubmit={(e) => {e.preventDefault(); submitRegister()}}
          className="">

          {errorMsg && (
            <div className="bg-rose-400 p-2 font-bold text-sm text-center">
              {errorMsg}
            </div>
          )}

          <div className="my-8 p-4">
            <label className="font-bold text-lg block">Email</label>
            <input className="w-full border border-neutral-300 p-2
              hover:border-neutral-700"
              type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="my-8 p-4">
            <label className="font-bold text-lg block">First Name</label>
            <input className="w-full border border-neutral-300 p-2
              hover:border-neutral-700"
              type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div className="my-8 p-4">
            <label className="font-bold text-lg block">Last Name</label>
            <input className="w-full border border-neutral-300 p-2
              hover:border-neutral-700"
              type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>
          <div className="my-8 p-4">
            <label className="font-bold text-lg block">Password</label>
            <input className="w-full border border-neutral-300 p-2
              hover:border-neutral-700"
              type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="my-8 p-4 text-center">
          <button disabled={loading} className="p-2 rounded-md text-lg w-44
            bg-neutral-700 text-white hover:bg-neutral-500 disabled:bg-neutral-500">
            {loading ? (
              <span>...</span>
            ) : (
              <span>
                Register
              </span>
            )}
          </button>
          </div>
        </form>
      </div>
    </>
  )
}
