import { mount, shallowMount } from "@vue/test-utils";
import AuthPage from "@/components/Authentication/Authpage.vue";
import { component } from "vue/types/umd";

describe("Authpage.vue", () => {
  let component: any;

  beforeEach(() => {
    const wrapper = shallowMount(AuthPage);
    component = wrapper.vm as any;
  });

  describe("switchBetweenLoginAndCreateAccountForm()", () => {
    it("should set loginMode to false when true", () => {
      component.loginMode = false;

      component.switchBetweenLoginAndCreateAccountForm();

      expect(component.loginMode).toBeTruthy();
    });
    it("should set loginMode to true when false", () => {
      component.loginMode = true;

      component.switchBetweenLoginAndCreateAccountForm();

      expect(component.loginMode).toBeFalsy();
    });
  });
});
