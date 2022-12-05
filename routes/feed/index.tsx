import type { Handlers, PageProps } from "$fresh/server.ts";
import { getCookies } from "https://deno.land/x/std/http/cookie.ts";
import Header from "../../components/Header/index.tsx";
import { route } from "preact-router";
interface IsLogged {
  isAllowed: boolean;
}

export const handler: Handlers = {
  GET(req, ctx) {
    const cookies = getCookies(req.headers);

    return ctx.render!({ isAllowed: cookies.auth === "bar" });
    //{data.isAllowed ? "are" : "are not"}
  },
};

export default function Feed({ data }: PageProps<IsLogged>) {
  return (
    <div>
      <Header />
      <div class="bg-[#F2F2F2]">
        <h4>asasf</h4>
        <h4>asasf</h4>
        <div>You currently logged in.</div>
        <h4>asasf</h4>
      </div>
    </div>
  );
}
