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
  },
  post: {
    list: {
      request: '[post / list] request',
      success: '[post / list] success',
      failed: '[post / list] failed',
    },
  },
};
