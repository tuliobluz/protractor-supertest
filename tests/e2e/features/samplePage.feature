@samplePage
Feature: The user accesses the Sample Page

    Background: The user accesses the Sample Page
        Given The user is on Sample Page

    Scenario Outline: The user sends the message successfully
        When The user fills the comment field
        And The user fills the name with '<name>'
        And The user fills the email with '<email>'
        And The user submits the form
        Then The user should see the successfully message

        Examples:
            | name           | email               |
            | Teste Engineer | apptester@email.com |

    Scenario Outline: The user sends the message successfully
        When The user fills the comment field
        And The user fills the name with '<name>'
        And The user fills the email with '<email>'
        And The user submits the form
        Then The user should see the invalid message

        Examples:
            | name           | email              |
            | Teste Engineer | apptesteremail.com |