/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, FC, useContext, useMemo } from 'react';
import {
  CookieConsentHookState,
  CookieConsentHookOptions,
  useCookieConsent,
} from '@use-cookie-consent/core';

export const createCookieConsentContext = () =>
  createContext<CookieConsentHookState>({
    consent: {},
    acceptCookies: () => {},
    declineAllCookies: () => {},
    acceptAllCookies: () => {},
    didAcceptAll: () => false,
    didDeclineAll: () => false,
    cookies: {
      set: () => undefined,
      get: () => '',
      getAll: () => ({}),
      getJSON: () => {},
      getAllJSON: () => ({}),
      remove: () => {},
    },
  });

export const CookieConsentContext = createCookieConsentContext();

export interface CookieConsentProviderProps {
  useCookieConsentHooksOptions?: CookieConsentHookOptions;
}

export const CookieConsentProvider: FC<
  React.PropsWithChildren<CookieConsentProviderProps>
> = ({ useCookieConsentHooksOptions, children }) => {
  CookieConsentContext.Consumer;
  const {
    consent,
    acceptAllCookies,
    declineAllCookies,
    acceptCookies,
    didAcceptAll,
    didDeclineAll,
  } = useCookieConsent(useCookieConsentHooksOptions);

  const context = useMemo(
    () => ({
      consent,
      acceptAllCookies,
      declineAllCookies,
      acceptCookies,
      didAcceptAll,
      didDeclineAll,
    }),
    [
      consent,
      acceptAllCookies,
      declineAllCookies,
      acceptCookies,
      didAcceptAll,
      didDeclineAll,
    ],
  );

  return (
    <CookieConsentContext.Provider value={context}>
      {children}
    </CookieConsentContext.Provider>
  );
};

export const useCookieConsentContext = () => useContext(CookieConsentContext);
