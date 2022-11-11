import React from "react";

import { Refine } from "@pankod/refine-core";
import {
  NotificationsProvider,
  notificationProvider,
  MantineProvider,
  Global,
  LightTheme,
  ReadyPage,
  ErrorComponent,
  AuthPage,
} from "@pankod/refine-mantine";

import routerProvider from "@pankod/refine-react-router-v6";
import nestjsxCrudDataProvider from "@pankod/refine-nestjsx-crud";
import { RefineKbarProvider } from "@pankod/refine-kbar";
import { useTranslation } from "react-i18next";
import { Title, Sider, Layout, Header } from "components/layout";
import { OffLayoutArea } from "components/offLayoutArea";
import { authProvider } from "./authProvider";

function App() {
  const { t, i18n } = useTranslation();

  const API_URL = "https://api.nestjsx-crud.refine.dev";
  const dataProvider = nestjsxCrudDataProvider(API_URL);

  const i18nProvider = {
    translate: (key: string, params: object) => t(key, params),
    changeLocale: (lang: string) => i18n.changeLanguage(lang),
    getLocale: () => i18n.language,
  };

  return (
    <MantineProvider theme={LightTheme} withNormalizeCSS withGlobalStyles>
      <Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />
      <NotificationsProvider position="top-right">
        <RefineKbarProvider>
          <Refine
            notificationProvider={notificationProvider}
            ReadyPage={ReadyPage}
            catchAll={<ErrorComponent />}
            routerProvider={routerProvider}
            dataProvider={dataProvider}
            authProvider={authProvider}
            LoginPage={AuthPage}
            Title={Title}
            Sider={Sider}
            Layout={Layout}
            Header={Header}
            OffLayoutArea={OffLayoutArea}
            i18nProvider={i18nProvider}
          />
        </RefineKbarProvider>
      </NotificationsProvider>
    </MantineProvider>
  );
}

export default App;
