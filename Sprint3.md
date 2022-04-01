### Description:
Allygator is a comprehensive yet useful idea of connecting the future gators with experienced gators hence the name "ALLY-GATOR". This application encompasses multi-functional features just to achieve the sole purpose of this idea i.e. "Get Help & Provide Help" for students.
FRONTEND DEVELOPMENT</br></br>

### BACKEND DEVELOPMENT <br />
<b>Note:</b> To run backend follow the below steps:<br/>
```
1. change directory to backend 
2. go build 
3. ./gatorweb 
```
<br />


### SECURITY ENHANCEMENT</br>
- Security enhancement for the project has been done from the backend using JWT.
- Login functionality has been authenticated with JWT to authenticate user logins.
- JWT access tokens were generated which are used for authentication while logging in.
- Authorization middleware has been added which sits in between the client and the resource. The middleware would be invoked to validate and authorize the user credentials every time before hitting to the database.
- The mode of access for the APIs created have been changed from public to private so that only authorized users can access the APIs.
</br>
</br>

### API's: </br>
#### API- 1: GET</br>
[GET USERS BY EMAIL](localhost:8080/api/v1/mail/kovuru.saisachin@ufl.edu)</br>
This API fetches a particular student's information based on the email provided in the API.</br>       
</br>
#### API- 2: GET</br>
[GET USERS WITH DEPT NAME](localhost:8080/api/v1/users) </br>
This API fetches student's information based on the department name. </br>
</br>
#### API- 3: POST</br>
[LOGIN](localhost:8080/api/v1/login) </br>
Login API for JWT authentication. </br>
           
