import { getRoot } from "@library/fetch-functions";
import { describe, expect, it, test } from "vitest";
import { config } from "./config";

describe("api-route", () => {
  it("should get data", async () => {
    const data = await getRoot(config.BASE_URL);
    expect(data).toStrictEqual({ success: true });
  });
});
