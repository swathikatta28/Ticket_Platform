module.exports = {
    resolve: {
      fallback: {
        "path": require.resolve("path-browserify"),
        "fs": false, // fs is not available in the browser
        "crypto": require.resolve("crypto-browserify"),
        "zlib": require.resolve("browserify-zlib"),
        "querystring": require.resolve("querystring-es3"),
        "http": require.resolve("stream-http"),
        "stream": require.resolve("stream-browserify"),
        "os": require.resolve("os-browserify/browser"),
      }
    }
  };
  