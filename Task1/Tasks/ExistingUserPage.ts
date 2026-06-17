import { Page, Locator, expect  } from '@playwright/test';

export class ExistingUserPage {

    readonly page: Page;
    readonly loginWithOtpButton: Locator;
    readonly verifyButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.loginWithOtpButton = page.getByText('Login with OTP').first();
        this.verifyButton = page.locator('button[ladda-button="otpOptions.loggingIn"]');
    }

    async verifyExistingUserFlow() {
        await expect(this.loginWithOtpButton).toBeVisible();
    }

    async clickLoginWithOtp() {
        await this.loginWithOtpButton.click();
        await this.page.waitForTimeout(15000);
        await this.verifyButton.click();
        // await this.page.waitForTimeout(3000);
        await expect(this.page).toHaveTitle('Noticeboard');
    }
}