//require axios
const axios = require('axios')

// axios
// .get("https://swapi.dev/api/films/1")
// .then((res) => {
//     //no need to convert re json format
//     //axios give res with json format
//     console.log(res);
// })
// .catch((err) => {
//     console.error(err);
// });

//output

// {
//   status: 200,
//   statusText: 'OK',
//   headers: AxiosHeaders {
//     server: 'nginx/1.16.1',
//     date: 'Mon, 24 Oct 2022 09:15:57 GMT',
//     'content-type': 'application/json',
//     'transfer-encoding': 'chunked',
//     connection: 'close',
//     vary: 'Accept, Cookie',
//     'x-frame-options': 'SAMEORIGIN',
//     etag: '"5af12d8e740a258e0c502b480ae78f2f"',
//     allow: 'GET, HEAD, OPTIONS',
//     'strict-transport-security': 'max-age=15768000',
//     [Symbol(defaults)]: null
//   },
//   config: {
//     transitional: {
//       silentJSONParsing: true,
//       forcedJSONParsing: true,
//       clarifyTimeoutError: false
//     },
//     adapter: [Function: httpAdapter],
//     transformRequest: [ [Function: transformRequest] ],
//     transformResponse: [ [Function: transformResponse] ],
//     timeout: 0,
//     xsrfCookieName: 'XSRF-TOKEN',
//     xsrfHeaderName: 'X-XSRF-TOKEN',
//     maxContentLength: -1,
//     maxBodyLength: -1,
//     env: { FormData: [Function], Blob: null },
//     validateStatus: [Function: validateStatus],
//     headers: AxiosHeaders {
//       'User-Agent': 'axios/1.1.3',
//       'Accept-Encoding': 'gzip, deflate, br',
//       [Symbol(defaults)]: [Object]
//     },
//     method: 'get',
//     url: 'https://swapi.dev/api/films/1',
//     data: undefined
//   },
//   request: <ref *1> ClientRequest {
//     _events: [Object: null prototype] {
//       abort: [Function (anonymous)],
//       aborted: [Function (anonymous)],
//       connect: [Function (anonymous)],
//       error: [Function (anonymous)],
//       socket: [Function (anonymous)],
//       timeout: [Function (anonymous)],
//       prefinish: [Function: requestOnPrefinish]
//     },
//     _eventsCount: 7,
//     _maxListeners: undefined,
//     outputData: [],
//     outputSize: 0,
//     writable: true,
//     destroyed: false,
//     _last: true,
//     chunkedEncoding: false,
//     shouldKeepAlive: false,
//     _defaultKeepAlive: true,
//     useChunkedEncodingByDefault: false,
//     sendDate: false,
//     _removedConnection: false,
//     _removedContLen: false,
//     _removedTE: false,
//     _contentLength: 0,
//     _hasBody: true,
//     _trailer: '',
//     finished: true,
//     _headerSent: true,
//     socket: TLSSocket {
//       _tlsOptions: [Object],
//       _secureEstablished: true,
//       _securePending: false,
//       _newSessionPending: false,
//       _controlReleased: true,
//       secureConnecting: false,
//       _SNICallback: null,
//       servername: 'swapi.dev',
//       alpnProtocol: false,
//       authorized: true,
//       authorizationError: null,
//       encrypted: true,
//       _events: [Object: null prototype],
//       _eventsCount: 10,
//       connecting: false,
//       _hadError: false,
//       _parent: null,
//       _host: 'swapi.dev',
//       _readableState: [ReadableState],
//       _maxListeners: undefined,
//       _writableState: [WritableState],
//       allowHalfOpen: false,
//       _sockname: null,
//       _pendingData: null,
//       _pendingEncoding: '',
//       server: undefined,
//       _server: null,
//       ssl: [TLSWrap],
//       _requestCert: true,
//       _rejectUnauthorized: true,
//       parser: null,
//       _httpMessage: [Circular *1],
//       [Symbol(res)]: [TLSWrap],
//       [Symbol(verified)]: true,
//       [Symbol(pendingSession)]: null,
//       [Symbol(async_id_symbol)]: 5,
//       [Symbol(kHandle)]: [TLSWrap],
//       [Symbol(kSetNoDelay)]: false,
//       [Symbol(lastWriteQueueSize)]: 0,
//       [Symbol(timeout)]: null,
//       [Symbol(kBuffer)]: null,
//       [Symbol(kBufferCb)]: null,
//       [Symbol(kBufferGen)]: null,
//       [Symbol(kCapture)]: false,
//       [Symbol(kBytesRead)]: 0,
//       [Symbol(kBytesWritten)]: 0,
//       [Symbol(connect-options)]: [Object],
//       [Symbol(RequestTimeout)]: undefined
//     },
//     _header: 'GET /api/films/1 HTTP/1.1\r\n' +
//       'Accept: application/json, text/plain, */*\r\n' +
//       'User-Agent: axios/1.1.3\r\n' +
//       'Accept-Encoding: gzip, deflate, br\r\n' +
//       'Host: swapi.dev\r\n' +
//       'Connection: close\r\n' +
//       '\r\n',
//     _keepAliveTimeout: 0,
//     _onPendingData: [Function: noopPendingOutput],
//     agent: Agent {
//       _events: [Object: null prototype],
//       _eventsCount: 2,
//       _maxListeners: undefined,
//       defaultPort: 443,
//       protocol: 'https:',
//       options: [Object],
//       requests: {},
//       sockets: [Object],
//       freeSockets: {},
//       keepAliveMsecs: 1000,
//       keepAlive: false,
//       maxSockets: Infinity,
//       maxFreeSockets: 256,
//       scheduling: 'lifo',
//       maxTotalSockets: Infinity,
//       totalSocketCount: 1,
//       maxCachedSessions: 100,
//       _sessionCache: [Object],
//       [Symbol(kCapture)]: false
//     },
//     socketPath: undefined,
//     method: 'GET',
//     maxHeaderSize: undefined,
//     insecureHTTPParser: undefined,
//     path: '/api/films/1',
//     _ended: true,
//     res: IncomingMessage {
//       _readableState: [ReadableState],
//       _events: [Object: null prototype],
//       _eventsCount: 4,
//       _maxListeners: undefined,
//       socket: [TLSSocket],
//       httpVersionMajor: 1,
//       httpVersionMinor: 1,
//       httpVersion: '1.1',
//       complete: true,
//       headers: [Object],
//       rawHeaders: [Array],
//       trailers: {},
//       rawTrailers: [],
//       aborted: false,
//       upgrade: false,
//       url: '',
//       method: null,
//       statusCode: 200,
//       statusMessage: 'OK',
//       client: [TLSSocket],
//       _consuming: false,
//       _dumped: false,
//       req: [Circular *1],
//       responseUrl: 'https://swapi.dev/api/films/1',
//       redirects: [],
//       [Symbol(kCapture)]: false,
//       [Symbol(RequestTimeout)]: undefined
//     },
//     aborted: false,
//     timeoutCb: null,
//     upgradeOrConnect: false,
//     parser: null,
//     maxHeadersCount: null,
//     reusedSocket: false,
//     host: 'swapi.dev',
//     protocol: 'https:',
//     _redirectable: Writable {
//       _writableState: [WritableState],
//       _events: [Object: null prototype],
//       _eventsCount: 3,
//       _maxListeners: undefined,
//       _options: [Object],
//       _ended: true,
//       _ending: true,
//       _redirectCount: 0,
//       _redirects: [],
//       _requestBodyLength: 0,
//       _requestBodyBuffers: [],
//       _onNativeResponse: [Function (anonymous)],
//       _currentRequest: [Circular *1],
//       _currentUrl: 'https://swapi.dev/api/films/1',
//       [Symbol(kCapture)]: false
//     },
//     [Symbol(kCapture)]: false,
//     [Symbol(kNeedDrain)]: false,
//     [Symbol(corked)]: 0,
//     [Symbol(kOutHeaders)]: [Object: null prototype] {
//       accept: [Array],
//       'user-agent': [Array],
//       'accept-encoding': [Array],
//       host: [Array]
//     }
//   },
//   data: {
//     title: 'A New Hope',
//     episode_id: 4,
//     opening_crawl: 'It is a period of civil war.\r\n' +
//       'Rebel spaceships, striking\r\n' +
//       'from a hidden base, have won\r\n' +
//       'their first victory against\r\n' +
//       'the evil Galactic Empire.\r\n' +
//       '\r\n' +
//       'During the battle, Rebel\r\n' +
//       'spies managed to steal secret\r\n' +
//       "plans to the Empire's\r\n" +
//       'ultimate weapon, the DEATH\r\n' +
//       'STAR, an armored space\r\n' +
//       'station with enough power\r\n' +
//       'to destroy an entire planet.\r\n' +
//       '\r\n' +
//       "Pursued by the Empire's\r\n" +
//       'sinister agents, Princess\r\n' +
//       'Leia races home aboard her\r\n' +
//       'starship, custodian of the\r\n' +
//       'stolen plans that can save her\r\n' +
//       'people and restore\r\n' +
//       'freedom to the galaxy....',
//     director: 'George Lucas',
//     producer: 'Gary Kurtz, Rick McCallum',
//     release_date: '1977-05-25',
//     characters: [
//       'https://swapi.dev/api/people/1/',
//       'https://swapi.dev/api/people/2/',
//       'https://swapi.dev/api/people/3/',
//       'https://swapi.dev/api/people/4/',
//       'https://swapi.dev/api/people/5/',
//       'https://swapi.dev/api/people/6/',
//       'https://swapi.dev/api/people/7/',
//       'https://swapi.dev/api/people/8/',
//       'https://swapi.dev/api/people/9/',
//       'https://swapi.dev/api/people/10/',
//       'https://swapi.dev/api/people/12/',
//       'https://swapi.dev/api/people/13/',
//       'https://swapi.dev/api/people/14/',
//       'https://swapi.dev/api/people/15/',
//       'https://swapi.dev/api/people/16/',
//       'https://swapi.dev/api/people/18/',
//       'https://swapi.dev/api/people/19/',
//       'https://swapi.dev/api/people/81/'
//     ],
//     planets: [
//       'https://swapi.dev/api/planets/1/',
//       'https://swapi.dev/api/planets/2/',
//       'https://swapi.dev/api/planets/3/'
//     ],
//     starships: [
//       'https://swapi.dev/api/starships/2/',
//       'https://swapi.dev/api/starships/3/',
//       'https://swapi.dev/api/starships/5/',
//       'https://swapi.dev/api/starships/9/',
//       'https://swapi.dev/api/starships/10/',
//       'https://swapi.dev/api/starships/11/',
//       'https://swapi.dev/api/starships/12/',
//       'https://swapi.dev/api/starships/13/'
//     ],
//     vehicles: [
//       'https://swapi.dev/api/vehicles/4/',
//       'https://swapi.dev/api/vehicles/6/',
//       'https://swapi.dev/api/vehicles/7/',
//       'https://swapi.dev/api/vehicles/8/'
//     ],
//     species: [
//       'https://swapi.dev/api/species/1/',
//       'https://swapi.dev/api/species/2/',
//       'https://swapi.dev/api/species/3/',
//       'https://swapi.dev/api/species/4/',
//       'https://swapi.dev/api/species/5/'
//     ],
//     created: '2014-12-10T14:23:31.880000Z',
//     edited: '2014-12-20T19:49:45.256000Z',
//     url: 'https://swapi.dev/api/films/1/'
//   }
// }
//Want to use async/await? Add the `async` keyword to your outer function/method

// async function getFilms() {
//     try {
//       const response = await axios.get('https://swapi.dev/api/films/1');
//       console.log(response);
//     } catch (error) {
//       console.error(error);
//     }
// }
// getFilms();

//post request
axios.post('https://swapi.dev/api/starships/',{
    id : '9'
})
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  //and many more thing on https://www.npmjs.com/package/axios
