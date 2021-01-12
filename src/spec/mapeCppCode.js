import {getExampleFromSchema} from './getBodyExample';
import {getWsSubscribeParams} from './makeJsCode';

export function makeCppCode(spec, entry, path, method) {
  const variableInit = (entry.parameters || [])
    .filter(variable => variable.in === 'path' || variable.in === 'query')
    .map(variable => `std::string param_${variable.name} = ${JSON.stringify(variable['x-example'])};`);

  const url = `https://${spec.host}${path}`
    .replace(/\{([^}]*)\}/g, (_, name) => `" + param_${name} + "`);

  const queryString = entry.parameters
    ?.filter(variable => variable.in === 'query')
    ?.map(variable => `${variable.name}=" + param_${variable.name} + "`)
    ?.join('&');
  const queryStringCode = queryString ? `url += "?${queryString}";\n` : '';

  const bodyParam = entry.parameters?.find(x => x.in === 'body');
  const bodyParamCode = bodyParam ? `std::string body = "${escapeString(JSON.stringify(getExampleFromSchema(bodyParam.schema)))}";` : '';
  const bodyOpts = bodyParam ? `
request.setOpt(new curlpp::options::PostFields(body));
request.setOpt(new curlpp::options::PostFieldSize(body.length()));
  `.trim() : '';

  return `
${variableInit.join('\n')}
${bodyParamCode}
std::string url = "${url}";
${queryStringCode}
curlpp::Easy request;
std::ostringstream response;

// set the request options
request.setOpt(new curlpp::options::Url(url));
request.setOpt(new curlpp::options::WriteStream(&response));
${bodyOpts}

// perform the request
request.perform();

// print the result
std::cout << response.str() << std::endl;
  `.trim();
}

export function makeWsCppCode(spec, entry, path) {
  const url = `wss://${spec.host}/${path}`;
  const subParams = getWsSubscribeParams(entry.parameters, entry.operationId);
  return `// Required on Windows
ix::initNetSystem();
// Our websocket object
ix::WebSocket webSocket;
std::string url("${url}");
webSocket.setUrl(url);
// Setup a callback to be fired when a message or an event (open, close, error) is received
webSocket.setOnMessageCallback([](const ix::WebSocketMessagePtr& msg)
  {
      if (msg->type == ix::WebSocketMessageType::Message)
      {
          std::cout << msg->str << std::endl;
      }
  }
);
// Now that our callback is setup, we can start our background thread and receive messages
webSocket.start();
// Send a message to the server (default to TEXT mode)
webSocket.send("{${subParams.map((p) => ` ${p.name}:${p.value}`).toString().replace(/"/g, '\\"')} }");`;
}

function escapeString(str) {
  if (!str) {
    return '';
  }
  return str
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"');
}
