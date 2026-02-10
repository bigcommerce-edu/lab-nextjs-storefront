import RegisterForm from "@/components/account/register-form";
import PageHeading from "@/components/page-heading";

export default async function RegisterPage() {  
  return (
    <>
      <PageHeading>Register</PageHeading>
      <div className="w-1/3">
        <RegisterForm />
      </div>
    </>
  );
}
