Description:<br />
Allygator is a comprehensive yet useful idea of connecting the future gators with experienced gators hence the name "ALLY-GATOR". This application encompasses multi-functional features just to achieve the sole purpose of this idea i.e. "Get Help & Provide Help" for students.
<br />
<br />
FRONTEND DEVELOPMENT<br />
Features already achieved in Sprint1:<br />
The following webpages were developed and integrated with the available API's:<br />
Homepage - localhost:3000 <br />
Login - localhost:3000/login <br />
Signup - localhost:3000/signup <br />
Dashboard - localhost:3000/dashboard <br />
Profile - localhost:3000/dashboard/profile <br />
Forum - localhost:3000/dashboard/forum <br />
<br />
<br />

Features added in Sprint2:<br />
1. Forum page new desgin was added: <br />
    1.  localhost:3000/forum <br />
    2.  localhost:3000/forum/[slug] <br />
    3.  localhost:3000/forum/addPost <br />
2.  Information page was added: <br />
    1.  localhost:3000/miscellaneous <br />
    2.  localhost:3000/miscellaneous/cellphones <br />
    3.  localhost:3000/miscellaneous/electricity <br />
    4.  localhost:3000/miscellaneous/emergencyrooms <br />
    5.  localhost:3000/miscellaneous/ethnicfoodstores <br />
    6.  localhost:3000/miscellaneous/offcampussafety <br />
    7.  localhost:3000/miscellaneous/temporaryhousing <br />
    8.  localhost:3000/miscellaneous/ufmobileoutreachclinic <br />
3.  Chat page was added. <br />
4.  Profile page ui was updated <br />  

Cypress Testing page was added: <br />
1.  homepage testing <br />
2.  Dashboard testing <br />
3.  Connectionlist mock testing <br />
4.  Profile data mock testing <br />
5.  login page testing <br />
6.  Registeration page testing <br />
<br/>
<br />


BACKEND DEVELOPMENT:<br /><br />
Features already achieved in Sprint1:<br /><br />
Created the Database and have connected it using sqlite3 drivers.<br />
For sprint 1, we have created 3 API's in the backend as listed below<br />
API- 1 --> GET<br />
GET USERS LIST : This API fetches the list of all registered students from the database<br />
localhost:8080/api/v1/user<br />
API-2 --> GET<br />
GET USER BY ID : This API fetches a particular student's information based on the id provided in the API<br />
localhost:8080/api/v1/user/?id=1<br />
API-3 --> POST<br />
REGISTER (ADD USERS) : This API is used to insert student's information into the database after registration(sign-up) using the front-end page.<br />
localhost:8080/api/v1/register/<br />

Features added in Sprint2:<br /><br />
API- 4 --> PUT
UPDATE USER : This API is used to update student's information into the database.<br />
localhost:8080/api/v1/user/?id=1<br />
API- 5 --> DEL<br />
DELETE USER: This API is used to delete student's information from the database using the front-end page.<br />
localhost:8080/api/v1/user/?id=1<br />
<br /><br />
DEPARTMENT API's<br /><br />
API- 6 --> GET<br />
GET DEPARTMENT LIST: This API fetches the list of all departments from the database<br />
localhost:8080/api/v1/department<br />
API- 7 --> GET<br />
GET DEPARTMENT BY ID: This API fetches a particular department's information based on the id provided in the API<br />
localhost:8080/api/v1/department/117<br />
API-8 --> POST<br />
ADD DEPARTMENT: This API is used to Add Department's information into the database.<br />
localhost:8080/api/v1/addDept<br />
API- 9 --> PUT<br />
UPDATE DEPARTMENT: <br />
This API is used to Update department's information into the database.<br />
localhost:8080/api/v1/department/117<br />
API- 10 --> DEL<br />
DELETE DEPARTMENT: This API is used to delete Department's Information from the database.<br />
localhost:8080/api/v1/department/117<br />
<br /><br />
COURSE API's<br /><br />
API- 11 --> GET<br />
GET COURSE LIST: This API fetches the list of all courses from the database<br />
localhost:8080/api/v1/course<br />
API- 12 --> GET<br />
GET COURSE BY ID: This API fetches a particular course's information based on the id provided in the API.<br />
localhost:8080/api/v1/course/1000<br />
API- 13 --> POST<br />
ADD COURSE: This API is used to Add Course's information into the database.<br />
localhost:8080/api/v1/addCourse<br />
API- 14 --> PUT<br />
UPDATE COURSE: This API is used to Update Course's information into the database.<br />
localhost:8080/api/v1/course/5001<br />
<br /><br />
FACULTY API's<br />
API- 15 --> GET<br />
GET FACULTY LIST: This API fetches the list of all faculties from the database<br />
localhost:8080/api/v1/faculty<br />
API- 16 --> GET<br />
GET FACULTY BY ID: This API fetches a particular faculty's information based on the id provided in the API.<br />
localhost:8080/api/v1/faculty/20<br />
API- 17 --> POST<br />
ADD FACULTY: This API is used to Add Faculty's information into the database.<br />
localhost:8080/api/v1/addFaculty<br />
API- 18 --> PUT<br />
UPDATE FACULTY: This API is used to Update Faculty's information into the database.<br />
localhost:8080/api/v1/faculty/26<br />
<br /><br />
For better understanding of the API's, please refer the below link.
Sprint 2 API's: https://documenter.getpostman.com/view/19334583/UVeGqkYL <br />

GO-LANG UNIT-TEST CASES: <br />
Unit-test cases for the API's have been added along with coverage report and HTML pages.
https://github.com/kovurusaisachin/AllyGator/tree/main/Backend
https://drive.google.com/drive/u/1/folders/1NarjzdOcaf43jcIE_Z-lVBP0AkOUTaeT
<br /><br />
Video link:
Sprint 1 Video: https://drive.google.com/drive/u/1/folders/1TYdBOjd0T9YLY2Q4KmH3epmAuQ9s0ypi <br />
Sprint 2 Video: https://drive.google.com/drive/u/1/folders/1IDLY8AcIK71pOHG7tH-Hi7PFp7IRF3rV <br />
