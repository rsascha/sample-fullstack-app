import { useState } from "react";
import styles from "./GenerateDataTestId.module.css";

export function GenerateDataTestId() {
  const [name, setName] = useState("");
  const [dataTestIdCopied, setDataTestIdCopied] = useState(false);
  const [testIdCopied, setTestIdCopied] = useState(false);

  const uniqueId = Math.random().toString(36).substring(7);

  const id = `${name}-${uniqueId}`.toLowerCase();
  const dataTestIdText = `data-testid="${id}"`;
  const testIdText = `testID="${id}"`;

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function handleDataTestIdCopyClick() {
    navigator.clipboard.writeText(dataTestIdText);
    setDataTestIdCopied(true);
    setTimeout(() => {
      setDataTestIdCopied(false);
    }, 500);
  }

  function handleTestIdCopyClick() {
    navigator.clipboard.writeText(dataTestIdText);
    setTestIdCopied(true);
    setTimeout(() => {
      setTestIdCopied(false);
    }, 500);
  }

  const dataTestIdCopiedClass = dataTestIdCopied
    ? styles.display
    : styles.hidden;

  const testIdCopiedClass = testIdCopied ? styles.display : styles.hidden;

  return (
    <div className={styles.wrapper}>
      <p>TestID Generator</p>
      <input
        id="name"
        data-testid="name"
        name="name"
        type="text"
        placeholder="Name"
        value={name}
        onChange={handleChange}
      />
      <div>
        <div className={styles.copyWrapper}>
          <div>
            <pre>{dataTestIdText}</pre>
            <button onClick={handleDataTestIdCopyClick}>copy</button>
            <span className={dataTestIdCopiedClass}>
              copied to your clipboard
            </span>
          </div>
          <div>
            <pre>{testIdText}</pre>
            <button onClick={handleTestIdCopyClick}>copy</button>
            <span className={testIdCopiedClass}>copied to your clipboard</span>
          </div>
        </div>
      </div>
    </div>
  );
}
