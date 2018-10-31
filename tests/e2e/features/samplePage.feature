@samplePage
Feature: The user accesses the Sample Page

    Background: The user accesses the Sample Page
        Given The user is on Sample Page

    Scenario Outline: The user sends the message successfully
        When The user fills some fields
        And The user fills the name with '<name>'
        And The user fills the email with '<email>'
        And The user submits the form
        Then The user should see the successful message

        Examples:
            | name           | email               |
            | Teste Engineer | apptester@email.com |

    Scenario Outline: The user tries to send a comment with an invalid email
        When The user fills some fields
        And The user fills the name with '<name>'
        And The user fills the email with '<email>'
        And The user submits the form
        Then The user should see the invalid email

        Examples:
            | name           | email              |
            | Teste Engineer | apptesteremail.com |

    Scenario Outline: The user tries to send a duplicate comment
        When The user fills some fields
        And The user fills the name with '<name>'
        And The user fills the email with '<email>'
        And The user submits the form
        Then The user should see the duplicate message

        Examples:
            | name           | email               |
            | Teste Engineer | apptester@email.com |

    Scenario Outline: The user tries to send a comment without comment
        When The user fills the name with '<name>'
        And The user fills the email with '<email>'
        And The user submits the form
        Then The user should see the required comment message

        Examples:
            | name           | email               |
            | Teste Engineer | apptester@email.com |