import { validateResponse } from "@client/functions";
import { useState } from "react";
import { ErrorDisplay } from "@client/components";
import styles from "./AddUserForm.module.css";

export function AddUserForm() {
  const [error, setError] = useState<Error | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "" });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      validateResponse(response);
      const json = await response.json();
      console.debug(json);
    } catch (error: unknown) {
      setError(error as Error);
    }
  }

  if (error) {
    return <ErrorDisplay error={error} />;
  }

  return (
    <form onSubmit={handleSubmit} className={styles.wrapper}>
      <div>
        <label htmlFor="name">Name</label>
        <br />
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Otto"
          value={formData.name}
          data-testid="name-sjehsi"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <br />
        <input
          id="email"
          name="email"
          type="email"
          placeholder="otto@gmail.com"
          value={formData.email}
          data-testid="email-3hiv9h"
          onChange={handleChange}
        />
      </div>
      <div className={styles.buttonWrapper}>
        <button type="submit" data-testid="submit-jivw0s">
          Add User
        </button>
        <button type="reset" data-testid="reset-swp3bd">
          Reset
        </button>
      </div>
    </form>
  );
}
