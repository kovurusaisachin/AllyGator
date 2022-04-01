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
- Login functionality has been enabled with JWT to authenticate user logins.
- JWT access tokens were generated which are used for authentication while logging in.
- Authorization middleware has been added which sits in between the client and the resource. The middleware would be invoked to validate and authorize the user credentials every time before hitting to the database.
- The mode of access for the APIs created have been changed from public to private so that only authorized users can access the APIs.
</br>
</br>

### API's Developed for Sprint 3: </br>
#### API- 1: GET</br>
[GET USERS BY EMAIL](https://documenter.getpostman.com/view/19334583/UVeGqkYL#265db6f0-6c81-4460-92ff-fa019c58e34b)</br>
This API fetches a particular student's information based on the email provided in the API.</br>       
#### API- 2: GET</br>
[GET USERS WITH DEPT NAME](https://documenter.getpostman.com/view/19334583/UVeGqkYL#b8645d2c-2e54-4a1c-8e3a-2fb749554a77) </br>
This API fetches student's information based on the department name. </br>
#### API- 3: POST</br>
[LOGIN](https://documenter.getpostman.com/view/19334583/UVeGqkYL#c0997aba-7528-49ca-aba2-d48a75ff2fc7) </br>
Login API for JWT authentication. </br>
</br>
For the list of all API's developed in the project, refer this link.
#### [Postman link for all API's](https://documenter.getpostman.com/view/19334583/UVeGqkYL#intro)</br>
</br>

### GOLANG UNIT TEST CASES: </br>
Unit-test cases for the API's have been added along with coverage report and HTML pages.</br>
[Unit test cases](https://github.com/kovurusaisachin/AllyGator/tree/main/Backend/coverage-report) </br>
</br>
## [Sprint 3- Video Link]()
