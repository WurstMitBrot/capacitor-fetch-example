# capacitor-fetch-example

This App example showcases an issue with android and the Capacitor Http Plugin while using RTK Query.
(Everything works fine on iOS)

While the http plugin is active the body is missing from post requests. This only affects requests done from RTK Query, normal fetch requests work.

This app should showcase an issue with capacitor the http plugin using the following configuration.

```
  plugins: {
    CapacitorHttp: {
      enabled: true,
    },
  },
```

There are two tabs using code snippets show where issues are.

Tab 1 shows normal usage of fetch which works.
Tab 2 shows usage with RTK Query where the body is missing in POST requests.

# Starting the App

The Example makes use of json-server https://www.npmjs.com/package/json-server
In order to make the requests the json server has to be started.

```
npm run startJsonBackend
```
If the json server isn't reachable enter the servers ip in the constants file under src/constants.ts

```
export const JSON_SERVER_URL = "http://localhost:8000"
```

After that just start the app for ios as usual and have a look at the console outputs.
