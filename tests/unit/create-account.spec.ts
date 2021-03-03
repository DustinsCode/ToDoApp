import CreateAccount from "@/components/Authentication/CreateAccount.vue";
import { mount } from "@vue/test-utils";

jest.mock("@/components/Authentication/firebaseauth.service");

describe("CreateAccount.vue", () => {
  describe("signUp()", () => {
    it("calls signUp function from FirebaseAuth Service", () => {
      const wrapper = mount(CreateAccount);
      const createAccountComponent = wrapper.vm as any;
      const fakeSignUp = jest
        .spyOn(createAccountComponent.firebaseAuthService, "signUp")
        .mockReturnValue(
          new Promise(resolve => {
            resolve({ data: "uhh" });
          })
        );
      createAccountComponent.signUp();

      expect(fakeSignUp).toHaveBeenCalled();
    });
  });
});
