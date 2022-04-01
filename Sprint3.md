### Description:
Allygator is a comprehensive yet useful idea of connecting the future gators with experienced gators hence the name "ALLY-GATOR". This application encompasses multi-functional features just to achieve the sole purpose of this idea i.e. "Get Help & Provide Help" for students.

### Frontend Development <br />

<b>Note:</b> To install frontend follow the below steps (only first time):<br/> 
```
1. change directory to frontend
2. change directory to allygator_frontend
3. run npm install
4. run npm chat
```
<br />

<b>Note:</b> To run frontend follow the below steps:<br/>
```
1. change directory to frontend
2. change directory to allygator_frontend
3. run npm next dev
```
<br />

### Features already achieved in Sprint 1 </br>
Features already achieved in Sprint1:
The following webpages were developed and integrated with the available API's:
Homepage - localhost:3000
Login - localhost:3000/login
Signup - localhost:3000/signup
Dashboard - localhost:3000/dashboard
Profile - localhost:3000/dashboard/profile
Forum - localhost:3000/dashboard/forum



### Features added in Sprint 2: </br>
1. Forum page new desgin was added: <br />
    1. localhost:3000/forum <br />
    2. localhost:3000/forum/[slug] <br />
    3. localhost:3000/forum/addPost <br />
2. Information page was added: <br />
    1. localhost:3000/miscellaneous <br />
    2. localhost:3000/miscellaneous/cellphones <br />
    3. localhost:3000/miscellaneous/electricity <br />
    4. localhost:3000/miscellaneous/emergencyrooms <br />
    5. localhost:3000/miscellaneous/ethnicfoodstores <br />
    6. localhost:3000/miscellaneous/offcampussafety <br />
    7. localhost:3000/miscellaneous/temporaryhousing <br />
    8. localhost:3000/miscellaneous/ufmobileoutreachclinic <br />
3. Chat page was added. <br />
4. Profile page ui was updated <br />  

### Cypress Testing was added for the following page: </br> 
1. homepage testing </br>
2. Dashboard testing </br>
3. Connectionlist mock testing <br>
4. login page testing </br>
</br>

</br>
</br>

### Features acheieved in Sprint 3</br>
1. Added authentication feature everywhere by integrating JWT system. 
2. Added validation to login and registration page and integrated them with the jwt functionality: http://localhost:3000/signup & http://localhost:3000/login
3. Added two more table's (course list and faculty list) to the dashboard page:http://localhost:3000/dashboard 
4. Added filters such as search box, select from drop down on dashboard in all the tables i.e connection list, course and faculty: http://localhost:3000/dashboard
5. Created component for connection page ui and added filters and almost all the functionality to the connection page: http://localhost:3000/connection 
6. Updated ui and integrated update and add functionality to the profile page: http://localhost:3000/profile
7. Solved the bug problem related to chat page: http://localhost:3000/chat
8. Added the logout functionality to the system.

</br >
</br >

### Cypress Testing was added for the following page</br> 
- Connectionlist mock testing
- Registration testing.
- Information page / offcampus safety 
- Information page / cellphones 
- Information page / electricity 
- Information page / temporary housing 
- Information page /ufmobileoutreach 
</br>
</br>


### Backend Development <br />
<b>Note:</b> To run backend follow the below steps:<br/>
```
1. change directory to backend 
2. go build 
3. ./gatorweb 
```
<br />


### Security Enhancement</br>
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
[Click here](https://drive.google.com/drive/folders/10oltzia50AMlg0RmO42ari2H6yb-nLgd)
