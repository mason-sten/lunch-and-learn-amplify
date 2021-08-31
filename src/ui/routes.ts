import { route } from "static-route-paths";

export const routes = route({
  root: route("", {
    show: route(":id"),
  }),
  new: route("new"),
});
