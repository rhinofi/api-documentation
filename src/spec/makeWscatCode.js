import {getWsSubscribeParams} from './makeJsCode';

export function makeWscatCode(spec, entry, path) {
  const url = `'wss://${spec.host}/${path}'`;
  const subParams = getWsSubscribeParams(entry.parameters, entry.operationId);

  const code = `wscat -c ${url}
  < {"event":"info","version":2,"serverId":"11111111-1111-1111-1111-111111111111","platform":{"status":1}}
  > {${subParams.map((p) => `${p.name}:${p.value}`)}}`;
  return code;
}
