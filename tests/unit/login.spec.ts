import Login from "@/components/Authentication/Login.vue";
import { mount } from "@vue/test-utils";

jest.mock("@/components/Authentication/firebaseauth.service");

describe("Login.vue", () => {
  describe("login()", () => {
    it("calls signIn function from FirebaseAuth Service", () => {
      const wrapper = mount(Login);
      const loginComponent = wrapper.vm as any;
      const fakeSignIn = jest
        .spyOn(loginComponent.firebaseAuthService, "signIn")
        .mockReturnValue(
          new Promise(resolve => {
            resolve({ data: "uhh" });
          })
        );
      loginComponent.login();

      expect(fakeSignIn).toHaveBeenCalled();
    });
  });
});
