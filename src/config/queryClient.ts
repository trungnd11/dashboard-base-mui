import { QueryClient } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      retryDelay: (attemptIndex: number) => attemptIndex * 1000,
    },
  },
});

export default queryClient;
