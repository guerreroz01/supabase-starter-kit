import {
  FetchCreateContextFnOptions,
  fetchRequestHandler,
} from "@trpc/server/adapters/fetch";
import { appRouter } from "../trpc-router";

async function handler(req: Request, res: Response) {
  console.log(`Incoming request from ${req.url}`);
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req: req,
    router: appRouter,
    createContext: (
      opts: FetchCreateContextFnOptions
    ): object | Promise<object> => {
      opts.resHeaders.set("Access-Control-Allow-Origin", "*");
      opts.resHeaders.set("Access-Control-Request-Method", "*");
      opts.resHeaders.set("Access-Control-Allow-Methods", "OPTIONS, GET, POST");
      opts.resHeaders.set("Access-Control-Allow-Headers", "content-type");
      opts.resHeaders.set("Referrer-Policy", "no-referrer");
      opts.resHeaders.set("Access-Control-Allow-Credentials", "true");
      return opts;
    },
  });
}

export { handler as GET, handler as POST };
