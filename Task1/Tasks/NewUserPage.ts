import { Page, Locator, expect  } from '@playwright/test';

export class NewUserPage {

    readonly page: Page;

    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly passwordInput: Locator;
    readonly retypePasswordInput: Locator;
    readonly signupButton: Locator;
    readonly verifyButton: Locator;
    // readonly resendotp: Locator;

    constructor(page: Page) {
        this.page = page;

        this.firstNameInput = page.locator('#fname'); // locators must contains # before locators name
        this.lastNameInput = page.locator('#lname');
        this.passwordInput = page.locator('#password');
        this.retypePasswordInput = page.locator('#re-password');
        this.signupButton = page.locator('button[ng-click="validationFirstStep($event,formBasic)"]');
        this.verifyButton = page.locator('button[ladda-button="otpOptions.loggingIn"]');
        // this.resendotp = page.locator('button[ng-click="requestOTP(field)"]');
        
    }
    async fillUserDetails(firstName: string,lastName: string,password: string,repeatpassword: string){
        await this.firstNameInput.fill(firstName);

        await this.lastNameInput.fill(lastName);

        await this.passwordInput.fill(password);

        await this.retypePasswordInput.fill(repeatpassword);
        
        await this.signupButton.click();

        await this.page.waitForTimeout(15000);        
    }

    async otpverification(){
        await this.verifyButton.click();

        // await this.page.waitForTimeout(5000);

        // await this.resendotp.click();

        await expect(this.page.getByText('Add your role details in')).toBeVisible();
    }

}