import { Page, Locator } from '@playwright/test';

export class login

{
    
readonly page: Page;
readonly url = 'https://playwright.dev';
readonly autourl = 'https://testautomationpractice.blogspot.com/';
// readonly loclinkbtn: Locator

  constructor(page: Page) {
    this.page = page;
   // this.loclinkbtn = page.getByRole('link' , {name:  });

  }
 

async geturl()
{

return await this.page.goto('https://playwright.dev');

}

async getautourl()
{

  return await this.page.goto(this.autourl);

}


}