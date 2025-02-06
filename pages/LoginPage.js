import { test, expect } from '@playwright/test';

export class LoginPage {
      constructor(page) {
        this.page = page;
        this.usernameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.errorMessage = page.locator('[data-test="error"]');
      }
    
      async navigate() {
        await this.page.goto('https://www.saucedemo.com/');
      }
    
      async enterUsername(username) {
        await this.usernameInput.fill(username);
      }
    
      async enterPassword(password) {
        await this.passwordInput.fill(password);
        
        const type = await this.passwordInput.getAttribute('type');
        expect(type).toBe('password');
      }
    
      async clickLogin() {
        await this.loginButton.click();
      }
    
      async verifyLoginError() {
        
        await expect(this.errorMessage).toBeVisible();
        await expect(this.errorMessage).toHaveText(
          'Epic sadface: Username and password do not match any user in this service'
        );
      }

      async verifyFieldsAreEmpty() {
            await expect(this.usernameInput).toBeEmpty();
            await expect(this.passwordInput).toBeEmpty();
          }
          
    }
