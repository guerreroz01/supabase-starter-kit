import {
  FetchCreateContextFnOptions,
  fetchRequestHandler,
} from "@trpc/server/adapters/fetch";
import { NextRequest, NextResponse } from "next/server";
import { appRouter } from "../trpc-router";

async function handler(req: NextRequest, res: NextResponse) {
  console.log(`Incoming request from ${req.url}`);
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req: req,
    router: appRouter,
    createContext: (
      opts: FetchCreateContextFnOptions
    ): object | Promise<object> => {
      return {};
    },
  });
}

export { handler as GET, handler as POST };
