# useCookieConsent hook for React.js

[![Build](https://img.shields.io/github/checks-status/use-cookie-consent/use-cookie-consent-react/main)](https://github.com/use-cookie-consent/use-cookie-consent-react/actions)
[![NPM Version](https://img.shields.io/npm/v/@use-cookie-consent/react)](https://www.npmjs.com/package/@use-cookie-consent/react)
[![NPM Downloads](https://img.shields.io/npm/dm/@use-cookie-consent/react)](https://www.npmjs.com/package/@use-cookie-consent/react)
[![Codecov](https://img.shields.io/codecov/c/github/use-cookie-consent/use-cookie-consent-react)](https://github.com/use-cookie-consent/use-cookie-consent-react/actions/workflows/codecov.yml)
![Lines of code](https://img.shields.io/tokei/lines/github/use-cookie-consent/use-cookie-consent-react)
[![License](https://img.shields.io/npm/l/@use-cookie-consent/react)](https://github.com/use-cookie-consent/use-cookie-consent-react/blob/main/LICENSE)

## Description

This package provides a wrapper around [`@use-cookie-consent/core`](https://github.com/use-cookie-consent/use-cookie-consent-core) package to provide best experience for React applications. Namely, it provides a React context, which provides all the functionality of [core](https://github.com/use-cookie-consent/use-cookie-consent-core) package but with reactive updates.

## Installation

```bash
npm install @use-cookie-consent/react
```

or

```bash
yarn add @use-cookie-consent/react
```

## Usage

### Basic usage

The first step to this setup is to wrap your app in the `CookieConsentProvider`:

```jsx
import { CookieConsentProvider } from '@use-cookie-consent/react'

export default function App() {
  return {
    <CookieConsentProvider>
      ...
    </CookieConsentProvider>
  }
}
```

Then you can read and update the cookie consent data from any component which is inside of the `<CookieConsentProvider>`. Both components you see below are not connected to each other in any way except the `useCookieConsentContext` function. You would put both of them separately somewhere in your app WITHOUT connecting them by any callbacks or passing state through props.

```jsx
// This component is an example of a component that you use to
// accept/decline cookie consent, without reading any data.
const CookieBanner = () => {
  const { acceptAllCookies, declineAllCookies, acceptCookies } =
    useCookieConsentContext();

  return (
    <div>
      <button onClick={acceptAllCookies}>Accept all</button>
      <button onClick={() => acceptCookies({ thirdParty: true })}>
        Accept third-party
      </button>
      <button onClick={() => acceptCookies({ firstParty: true })}>
        Accept first-party
      </button>
      <button onClick={declineAllCookies}>Reject all</button>
    </div>
  );
};
```

```jsx
// This component is an example of a component which would show
// the state of the cookie consent, without updating anything.
const CookiesPreview = () => {
  const { consent } = useCookieConsentContext();

  return (
    <div>
      <div>
        {`Third-party cookies ${consent.thirdParty ? 'approved' : 'rejected'}`}
      </div>
      <div>
        {`First-party cookies ${consent.firstParty ? 'approved' : 'rejected'}`}
      </div>
    </div>
  );
};
```

Thanks to @pixelass for prividing the examples you see above.

## Contributors

- [Antoni Silvestrovic](https://github.com/bring-shrubbery)
- [Gregor Adams](https://github.com/pixelass)

## License

[MIT](https://github.com/use-cookie-consent/use-cookie-consent-react/blob/main/LICENSE)
