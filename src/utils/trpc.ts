import { AppRouter } from "@/app/api/trpc/trpc-router";
import { createNextApiHandler } from "@trpc/server/adapters/next";
import { createTRPCReact } from "@trpc/react-query";

export const trpc = createTRPCReact<AppRouter>();
