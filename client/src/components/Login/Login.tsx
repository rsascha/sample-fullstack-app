import { useAuth0 } from "@auth0/auth0-react";
import { LoadingIndicator } from "@client/components";
import styles from "./Login.module.css";
import { FaRegUser, FaUser } from "react-icons/fa6";

type WrapperProps = {
  className: string;
  children: React.ReactNode;
};

function Wrapper({ className, children }: WrapperProps) {
  const wrapperClassName = `${styles.wrapper} ${className}`;
  return <div className={wrapperClassName}>{children}</div>;
}

type LoginProps = {
  className: string;
};

export function Login({ className }: LoginProps) {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <Wrapper className={className}>
        <LoadingIndicator />
      </Wrapper>
    );
  }

  if (!isAuthenticated) {
    return (
      <Wrapper className={className}>
        <FaRegUser onClick={() => loginWithRedirect()} />
      </Wrapper>
    );
  }

  return (
    <Wrapper className={className}>
      <FaUser onClick={() => {}} />
    </Wrapper>
  );
}
