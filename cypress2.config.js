import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://guest:welcome2qauto@qauto2.forstudy.space',
    env: {
      email: 'testbug@gmail.com',
      password: 'vH!88!u2WdXQQ5u',
    },
  },
});
