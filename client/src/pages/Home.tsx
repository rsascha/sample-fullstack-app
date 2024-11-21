import { getRoot } from "@library/fetch-functions";

export function Home() {
  async function handleButtonClick() {
    const data = await getRoot("/api");
    console.debug(data);
  }

  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the home page!</p>
      <button onClick={handleButtonClick}>Test</button>
    </div>
  );
}
