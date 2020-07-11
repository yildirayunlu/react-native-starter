export const ActionConsts = {
  auth: {
    login: '[auth / authentication] login',
    logout: '[auth / authentication] logout',
  },
  login: {
    request: '[user / login] request',
    success: '[user / login] success',
    failed: '[user / login] failed',
  },
  register: {
    request: '[user / register] request',
    success: '[user / register] success',
    failed: '[user / register] failed',
  },
  user: {
    list: {
      request: '[user / list] request',
      success: '[user / list] success',
      failed: '[user / list] failed',
    },
  },
};
