declare function require(path: string): any;

export enum ConnectionEnum {
  NONE = 'NONE',
  CONNECTED = 'CONNECTED',
  ERROR = 'ERROR',
  CONNECTING = 'CONNECTING'
}

export interface NotificationParams {
  id: string;
  text: string;
  type: string;
}

export interface MessageData {
  message: string;
  id: string;
  user: {
    name?: string;
    id?: string;
    color?: string;
    room?: string;
  };
}
