import { AppRouter } from "@/app/api/trpc/trpc-router";
import { CreateTRPCReact, createTRPCReact } from "@trpc/react-query";

export const trpc = createTRPCReact<AppRouter>();
