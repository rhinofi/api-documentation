import {w3cwebsocket} from 'websocket';
import {getWsSubscribeParams} from './makeJsCode';

export async function tryWsEndpoint(endpoint, parameterValues, body) {
  try {
    const ws = w3cwebsocket(endpoint.path);

    const mergedParams = endpoint.parameters.map((p) => {
      if (parameterValues[p.name]) { return {...p, 'x-example': parameterValues[p.name]}; }
      return p;
    });
    const wsSubParams = getWsSubscribeParams(mergedParams, endpoint.name);
    const wsSubMessage = {};
    wsSubParams.forEach((p) => {
      // convert to simple strings
      const key = p.name.replace(/"/g, '');
      const value = p.value.replace(/"/g, '');
      wsSubMessage[key] = value;
    });

    let firstDataReceived;
    let firstDataError;
    const waitForData = new Promise((resolve, reject) => {
      firstDataReceived = resolve;
      firstDataError = reject;
      setTimeout(() => { reject(new Error('Request timeout')); }, 10000);
    });

    ws.onopen = () => {
      ws.send(JSON.stringify(wsSubMessage));
    };

    ws.onmessage = (message) => {
      const parsedData = JSON.parse(message.data);

      if (parsedData['event'] && parsedData['event'] === 'error') {
        return firstDataError(parsedData['msg']);
      }

      // skip other informational messages
      if (parsedData['event']) { return; }

      firstDataReceived(parsedData);
    };

    ws.onerror = (err) => {
      firstDataError(err);
    };

    const message = await waitForData;

    ws.close();

    return [null, {
      status: 200,
      body: message,
    }];
  } catch (err) {
    return [err];
  }
}
