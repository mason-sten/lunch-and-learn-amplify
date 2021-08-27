import { route } from "static-route-paths";

export const routes = route({
  root: route(),
  feed: route("feed"),
  reportNew: route("report-new"),
  about: route("about"),
  authenticate: route("authenticate"),
});
