import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MainLayout from "./layouts/Main";
import Home from "./pages/Home";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <MainLayout>
      <Home />
    </MainLayout>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);

export default App;
