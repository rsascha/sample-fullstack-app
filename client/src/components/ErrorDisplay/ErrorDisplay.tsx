import { DisplayChildren } from "@client/components";
import styles from "./ErrorDisplay.module.css";
import drawingPencil from "@client/assets/drawing-pencil-svgrepo-com.svg";

type ErrorDisplayProps = {
  error: Error | string;
  displayDetails?: boolean;
};

export function ErrorDisplay({
  error,
  displayDetails = true,
}: ErrorDisplayProps) {
  let name = "";
  let message = "";
  let stack = "";

  if (typeof error === "string") {
    message = error;
  }

  if (error instanceof Error) {
    name = error.name || name;
    message = error.message || message;
    stack = error.stack || stack;
  }

  return (
    <div data-testid="error-c31l6" className={styles.wrapper}>
      <div>
        <img
          src={drawingPencil}
          width={100}
          height={100}
          alt="drawing pencil"
        />
      </div>
      <div>
        <h1>Oops! Something went wrong</h1>
        <p>We are working on it and we'll get it fixed as soon as we can.</p>
        <DisplayChildren condition={name}>
          <p>Name: {name}</p>
        </DisplayChildren>
        <DisplayChildren condition={message && !stack}>
          <p>Message: {message}</p>
        </DisplayChildren>
        <DisplayChildren condition={displayDetails && stack}>
          <p className={styles.stack}>Stack: {stack}</p>
        </DisplayChildren>
      </div>
    </div>
  );
}
