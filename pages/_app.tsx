import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Container } from "react-bootstrap";
import AppRouterCacheProvider from "@mui/material-nextjs/v13-appRouter/appRouterV13";
import StyledComponentsRegistry from "@/@core/lib/registry";
import { StyledRoot } from "@/@theme/styledRoot";
import { Suspense } from "react";
import Loading from "./loading";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container fluid>
      <AppRouterCacheProvider>
        <StyledComponentsRegistry>
          <StyledRoot>
            <Suspense fallback={<Loading />}>
              <Component {...pageProps} />
            </Suspense>
          </StyledRoot>
        </StyledComponentsRegistry>
      </AppRouterCacheProvider>
    </Container>
  );
}
