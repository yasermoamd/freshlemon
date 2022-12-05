// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/about/index.tsx";
import * as $1 from "./routes/api/joke.ts";
import * as $2 from "./routes/feed/index.tsx";
import * as $3 from "./routes/index.tsx";
import * as $4 from "./routes/signin/index.tsx";
import * as $5 from "./routes/signup/index.tsx";
import * as $$0 from "./islands/Counter.tsx";
import * as $$1 from "./islands/Search.tsx";

const manifest = {
  routes: {
    "./routes/about/index.tsx": $0,
    "./routes/api/joke.ts": $1,
    "./routes/feed/index.tsx": $2,
    "./routes/index.tsx": $3,
    "./routes/signin/index.tsx": $4,
    "./routes/signup/index.tsx": $5,
  },
  islands: {
    "./islands/Counter.tsx": $$0,
    "./islands/Search.tsx": $$1,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
