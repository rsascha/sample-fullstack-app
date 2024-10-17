/**
 * Validate fetch response object
 *
 * @param response Fetch response object
 * @throws Error if response is not OK, missing Content-Type header, or not JSON, etc.
 */
export function validateResponse(response: Response): void {
  if (!response.ok) {
    throw new Error(
      `Fetch error!\n` +
        `Status: ${response.status}\n` +
        `Status Text: ${response.statusText}\n` +
        `Error Code: error-1xmbdf`
    );
  }

  const contentType = response.headers.get("Content-Type");
  if (!contentType) {
    throw new Error(
      `Fetch error!\n` +
        `Missing Content-Type header!\n` +
        `Status: ${response.status}\n` +
        `Status Text: ${response.statusText}\n` +
        `Error Code: error-gshzry`
    );
  }

  const isJson = contentType.includes("application/json");
  if (!isJson) {
    throw new Error(
      `Fetch error!\n` +
        `Expecting JSON result!\n` +
        `Status: ${response.status}\n` +
        `Status Text: ${response.statusText}\n` +
        `Error Code: error-auckaa`
    );
  }
}
