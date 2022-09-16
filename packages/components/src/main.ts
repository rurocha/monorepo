

import Button from './components/Button.vue'

export default {
  install: (app: any, options: any) => {
    app.component('Button', Button)
  }
}
