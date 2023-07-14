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
      return opts;
    },
  });
}

export { handler as GET, handler as POST };
