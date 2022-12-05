import type { Handlers, PageProps } from "$fresh/server.ts";
import { getCookies } from "https://deno.land/x/std/http/cookie.ts";

interface IsLogged {
  isAllowed: boolean;
}

export const handler: Handlers = {
  GET(req, ctx) {
    const cookies = getCookies(req.headers);
    return ctx.render!({ isAllowed: cookies.auth === "bar" });
  },
};

export default function Feed({ data }: PageProps<IsLogged>) {
  return (
    <div>
      <div>You currently {data.isAllowed ? "are" : "are not"} logged in.</div>
    </div>
  );
}
