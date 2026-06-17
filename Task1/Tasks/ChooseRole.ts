import { Page, Locator, expect } from '@playwright/test';

export class ChooseRole {

    readonly page: Page;

    readonly roleDropdown: Locator;
    readonly yearofjoining: Locator;
    readonly Checkbox1: Locator;
    readonly Checkbox2: Locator;
    readonly joinButton: Locator;

    constructor(page: Page) {
        this.page = page;
    
        this.roleDropdown = page.locator('[name="role"]');
        this.yearofjoining = page.locator('[name="yoj"]'); // locators must contains # before locators name
        this.Checkbox1 = page.getByText('I have read and agree to the');
        this.Checkbox2 = page.getByText('I confirm that I have read and understood the ');
        this.joinButton = page.locator('#btn3_sgnup');
        
    }

    async chooseRoleandYear() {
        await this.roleDropdown.selectOption({label: 'Staff / Faculty'});
        await this.yearofjoining.selectOption({label: '2026'});
    }

    async TermsandConditions() {
        await this.Checkbox1.click();
        await this.Checkbox2.click();
        await this.joinButton.click();
        // await this.page.waitForTimeout(5000);
        await expect(this.page).toHaveTitle('Noticeboard');
    }
}
