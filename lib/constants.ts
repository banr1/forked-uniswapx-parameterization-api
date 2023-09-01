export const WEBHOOK_CONFIG_BUCKET = 'rfq-config';
export const SYNTH_SWITCH_BUCKET = 'synth-config-prod';
export const INTEGRATION_S3_KEY = 'integration.json';
export const PRODUCTION_S3_KEY = 'production.json';

export const DYNAMO_TABLE_NAME = {
  FADES: 'Fades',
  SYNTHETIC_SWITCH: 'SyntheticSwitch',
};

export const DYNAMO_TABLE_KEY = {
  FILLER: 'filler',
  INPUT_TOKEN: 'inputToken',
  INPUT_TOKEN_CHAIN_ID: 'inputTokenChainId',
  OUTPUT_TOKEN: 'outputToken',
  OUTPUT_TOKEN_CHAIN_ID: 'outputTokenChainId',
  TRADE_TYPE: 'type',
  LOWER: 'lower',
  ENABLED: 'enabled',
};
