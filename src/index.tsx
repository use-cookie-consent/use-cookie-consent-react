import React, { createContext, FC, useContext, useMemo } from 'react';
import { CookieConsentHookState, useCookieConsent } from '@use-cookie-consent/core';

export const CookieConsentContext = createContext<CookieConsentHookState>({
  consent: {},
  acceptCookies() {
    /**/
  },
  declineAllCookies() {
    /**/
  },
  acceptAllCookies() {
    /**/
  },
  didAcceptAll() {
    return false;
  },
  didDeclineAll() {
    return false;
  },
  cookies: {
    set() {
      return undefined;
    },
    get() {
      return '';
    },
    getAll() {
      return {};
    },
    getJSON() {
      /**/
    },
    getAllJSON() {
      return {};
    },
    remove() {
      /**/
    },
  },
});

export const CookieConsentProvider: FC = ({ children }) => {
  const {
    consent,
    acceptAllCookies,
    declineAllCookies,
    acceptCookies,
    didAcceptAll,
    didDeclineAll,
    cookies,
  } = useCookieConsent();

  const context = useMemo(
    () => ({
      consent,
      acceptAllCookies,
      declineAllCookies,
      acceptCookies,
      didAcceptAll,
      didDeclineAll,
      cookies,
    }),
    [consent, acceptAllCookies, declineAllCookies, acceptCookies, didAcceptAll, didDeclineAll, cookies],
  );

  return <CookieConsentContext.Provider value={context}>{children}</CookieConsentContext.Provider>;
};

export const useCookieConsentContext = () => useContext(CookieConsentContext);
