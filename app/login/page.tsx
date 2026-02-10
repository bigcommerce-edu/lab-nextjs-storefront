import LoginForm from "@/components/account/login-form";
import PageHeading from "@/components/page-heading";

export default function LoginPage() {
  return (
    <>
      <PageHeading>Log In</PageHeading>
      <div className="w-1/3">
        <LoginForm />
      </div>
    </>
  );
}
