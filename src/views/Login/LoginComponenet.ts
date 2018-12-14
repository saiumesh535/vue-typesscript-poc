import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Component({
  name: 'LoginComponent',
  template: require('./login.html'),
  style: require('./some.css'),
  scoped: false,
  beforeRouteLeave: (to, from, next) => {
    next();
  },
})
export default class LoginComponent extends Vue {
  public message: string = 'Hello!';
  @Prop()
  public name!: string;
  constructor() {
    super();
  }
  public onClick(): void {
    window.alert(this.message);
  }
}
