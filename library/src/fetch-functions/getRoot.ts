export async function getRoot(baseUrl: string) {
  const response = await fetch(baseUrl + "/");
  const data = await response.json();
  return data;
}
