import { FACTORIES } from "./Issue.constant";

export const delay = (ms?: number) =>
  new Promise((resolve) => setTimeout(resolve, ms || 500));

export const apiGetListIssues = async () => {
  try {
    await delay(1000);
    return FACTORIES;
  } catch (error) {
    throw error;
  }
};
