export const ActionConsts = {
  auth: {
    login: '[auth / authentication] login',
    logout: '[auth / authentication] logout',
  },
  user: {
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
    list: {
      request: '[user / list] request',
      success: '[user / list] success',
      failed: '[user / list] failed',
    },
  },
};
