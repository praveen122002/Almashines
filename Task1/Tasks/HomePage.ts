import { Page, Locator, expect} from '@playwright/test';

export class HomePage{

    readonly page : Page;
    readonly SearchEmailTextbox : Locator;

    constructor(page:Page){
        this.page=page;

        this.SearchEmailTextbox = page.locator('email');
    }

    async goToURL(){
        await this.page.goto(`${process.env.ALMASHINES_URL}`);
    }

    async EnterYourEmail(username:string){
       
        await this.page.locator('#email').fill(username);
        await this.page.locator('#emailBtn').click();
        await this.page.waitForTimeout(2000);
        // I preferred explicit waits based on element visibility 
        // because they make the test more stable and efficient than fixed timeouts. 
        // The script proceeds as soon as the required element appears, 
        // rather than waiting for a predefined duration.
        await expect(this.page.getByRole('heading', { name: 'Test Platform' })).toBeVisible();
    }

    async isExistingUser(): Promise<boolean> {
        return await this.page
            .getByText('E-mail login')
            .isVisible()
            .catch(() => false);
    }
}