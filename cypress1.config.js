import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://guest:welcome2qauto@qauto.forstudy.space',
    env: {
      email: 'testnormal@gmail.com',
      password: 'uQVkV65yyXEx28R',
    },
  },
});
