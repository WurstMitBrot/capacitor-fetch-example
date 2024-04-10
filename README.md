# capacitor-fetch-example

This app should showcase an issue with capacitor the http plugin using the following configuration.

```
  plugins: {
    CapacitorHttp: {
      enabled: true,
    },
  },
```

Some post request don't work anymore with this plugin.

There are two tabs using code snippets show where issues are.

# Starting the App

In order to make the requests the json server has to be started.
```
npm run startJsonBackend
```

After that just start the app for ios as usual and have a look at the console outputs.