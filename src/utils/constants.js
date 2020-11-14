export const IS_PROD = process.env.NODE_ENV === "production";
export const API_PROD_URI =
  "https://iqpzpq69i6.execute-api.ap-southeast-2.amazonaws.com/prod/v1";
export const API_DEV_URI = "http://localhost:8888/portfolio/api/index.php";

export const ROUTES = {
  HOME: "/",
  PAGE_NOT_FOUND: "/page-not-found",
};
