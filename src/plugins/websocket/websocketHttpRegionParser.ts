import * as utils from '../../utils';
import { WebsocketRequestClient } from './websocketRequestClient';

export const parseWebsocketLine = utils.parseRequestLineFactory({
  protocol: 'WS',
  methodRegex: /^\s*(ws|wss|websocket)\s*(?<url>.+?)\s*$/iu,
  protocolRegex: /^\s*ws(s)?:\/\/(?<url>.+?)\s*$/iu,
  requestClientFactory(request, context) {
    return new WebsocketRequestClient(request, context);
  },
  modifyRequest(request) {
    request.supportsStreaming = true;
  },
});
