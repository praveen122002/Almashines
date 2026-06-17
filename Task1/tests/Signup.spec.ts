// import Playwright Module
import {test} from '@playwright/test'
import { HomePage } from "../src/Tasks/HomePage"
import { ExistingUserPage} from "../src/Tasks/ExistingUserPage"
import { NewUserPage} from "../src/Tasks/NewUserPage"
import { ChooseRole} from "../src/Tasks/ChooseRole"

// import { PlaylistPage } from "../src/pages/PlaylistPage"

test('signup and login test case', async ({page})=>{

    
    const homepage = new HomePage(page);
    const existingUserpage = new ExistingUserPage(page);
    const newUserpage = new NewUserPage(page);
    const chooserole = new ChooseRole(page);
    // const chooseRole = new ChooseRole(page);

    // Create Object of HomePage
    await homepage.goToURL();
    await homepage.EnterYourEmail(`${process.env.YOUR_EMAIL}`);
    const isExisting = await homepage.isExistingUser();

    // // Create Object of ExistingUserPage
    if (isExisting) {


        await existingUserpage.verifyExistingUserFlow();

        await existingUserpage.clickLoginWithOtp();

    } else {
        
        await newUserpage.fillUserDetails(
            `${process.env.FIRST_NAME}`, 
            `${process.env.LAST_NAME}`,
            `${process.env.PASSWORD}`,
            `${process.env.REPEAT_PASSWORD}`);

            await newUserpage.otpverification();

            await chooserole.chooseRoleandYear();

            await chooserole.TermsandConditions();
        }

        /*
         OTP Verification
         Manual Step
        */

    
    
    // await resultPage.ClickOnPlaylist(`${process.env.SEARCH_KEYWORDS}`);

    // // Create Object of PlaylistPage
    // const playlistPage = new PlaylistPage(page);
    // await playlistPage.ValidateTitle(`${process.env.Title_KEY}`);
})