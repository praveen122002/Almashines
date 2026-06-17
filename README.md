# Almashines
# Almashines Sign Up Automation Assessment
## Overview

This project contains automation tests for the Almashines Sign Up flow using Playwright with TypeScript and the Page Object Model (POM) design pattern.

The objective of this assessment was to evaluate the Sign Up workflow, identify critical scenarios for automation, document manual test cases that were not automated, and report defects discovered during testing.

# Technology Stack
Playwright
TypeScript
Node.js
Page Object Model (POM)

# Project Structure
project

pages

  HomePage.ts
  
  ExistingUser.ts
  
  NewUser.ts
  
  ChooseRole.ts
  
 tests
 
  signup.spec.ts
   
test-data

  testData.ts

playwright.config.ts

package.json


# Sign Up Flow Covered

The following flow was tested:

1. Navigate to the Sign Up page
2. Enter Email Address
3. Validate Existing User or New User flow
4. Enter User Details
  First Name
  Last Name
  Password
  Confirm Password
5. OTP Verification
6. Choose Role
7. Accept Terms and Conditions
8. Complete Registration

# Automated Scenarios
## Existing User Flow
1. Verify existing email redirects user to Login with OTP flow
New User Flow
2. Verify the new user can proceed with registration
3. Verify First Name field
4. Verify Last Name field
5. Verify Password field
6. Verify Confirm Password field
7. Verify Role Selection
8. Verify Terms Acceptance
9. Verify Successful Registration

# Validation Checks
1. Existing User Detection
2. New User Detection
3. Password Matching Validation
4. Mandatory Field Validation

# Manual Test Cases Not Automated
The following scenarios were intentionally left for manual testing:

1. OTP Email Delivery
2. OTP Expiry Validation
3. OTP Resend Functionality
4. UI Responsiveness
5. Browser Zoom Testing
6. Accessibility Testing
7. Session Handling
8. Visual Verification

Reason:
These scenarios involve external dependencies, visual validations, accessibility validations, or low automation return on investment.

# OTP Verification Approach

For the submitted solution, OTP verification was performed manually.

Reason:
Automating OTP retrieval through Gmail requires:

Gmail API access
OAuth authentication
Secure storage of credentials
Dedicated test mailbox

To avoid exposing personal credentials or authentication tokens within a public assessment repository, OTP verification was executed manually.

The framework supports full OTP automation through Gmail API integration if secure test credentials are available.

# Assumptions
Test data remains available during execution.

The application environment is accessible.

OTP emails are delivered successfully.

User has access to the registered email account.
