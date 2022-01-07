import {getWsSubscribeParams} from './makeJsCode';

export function makeWscatCode(spec, entry, path) {
  const url = `'wss://${spec.host}${path}'`;
  const subParams = getWsSubscribeParams(entry.parameters, entry.operationId);

  const code = `wscat -c ${url}
  {${subParams.map((p) => `${p.name}:${p.value}`)}}`;
  return code;
}
