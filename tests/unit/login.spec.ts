import Login from '@/components/Authentication/Login.vue'
import { shallowMount, mount, Wrapper } from '@vue/test-utils'
import FirebaseAuth from '@/components/Authentication/firebaseauth.service'
import { ComponentOptions } from 'vue/types/options';

jest.mock('@/components/Authentication/firebaseauth.service');

describe("Login.vue", () => {
    
    
    beforeEach(() => {
        // const wrapper = shallowMount(Login);
    })
    
    describe("login()", async() => {

        it("calls signIn function from FirebaseAuth Service", () => {
            const wrapper = mount(Login);
            const loginComponent = (wrapper.vm as any);
            const fakeSignIn = jest.spyOn(loginComponent.firebaseAuthService, 'signIn')
                .mockReturnValue(new Promise((resolve)=>{resolve({data: "uhh"})}));
            loginComponent.login();

            expect(fakeSignIn).toHaveBeenCalled();
        });

    });
})