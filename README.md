# User Management

With User Management administrators can make changes to their profile as well as maintaining other users. Users can view their profile and information.

## Endpoints

### `/users`
* Ability to see a list of all users, and their account details
  * Clicking a record will take the user to /user?userId=*ActualUserId*
  * Clicking delete button will remove the user
* Only accessible to administrator and god level accounts

### `/user`
* Ability to see all account details of user, which could be for another user, depending on access level
  * Clicking any element will allow user to edit
* Accessible to user, administrator, and god level accounts

## Learn More

Learn more at [SartainStudios.com](https://sartainstudios.com/EntityInformation?title=User%20Management)
