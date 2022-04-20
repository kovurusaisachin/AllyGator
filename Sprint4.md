### Description:
Allygator is a comprehensive yet useful idea of connecting the future gators with experienced gators hence the name "ALLY-GATOR". This application encompasses multi-functional features just to achieve the sole purpose of this idea i.e. "Get Help & Provide Help" for students.

## Frontend Development <br />

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

### Features achieved in Sprint 3</br>
1. Updated connection page to make it fully functional with new api in the backend: http://localhost:3000/connection. 
2. Updated the forum page, add question page and single question. Later integrated it with the backend api to make it functional and useful: http://localhost:3000/forum, http://localhost:3000/forum/addPost, http://localhost:3000/forum/slug
3. Added pagination feature to all the table to make it fast and ui- consistent everywhere:http://localhost:3000/dashboard, http://localhost:3000/connection
4. updated filters such as search box and select from drop down on dashboard in all the tables i.e connection list, course and faculty: http://localhost:3000/dashboard
5. Uodated few of the sub module information page for asthetic ui and good UX: http://localhost:3000/information/slug 
7. Solved the bug problem related to chat page: http://localhost:3000/chat

</br >
### Front-end features achieved in Sprint 4</br>


</br >

### Cypress Testing was added for the following page</br> 
- Information page / offcampus safety 
- Information page / cellphones 
- Information page / electricity 
- Information page / temporary housing 
- Information page /ufmobileoutreach 
</br>
</br>

## Backend Development <br />
<b>Note:</b> To run backend follow the below steps:<br/>
```
1. change directory to backend 
2. go build 
3. ./gatorweb 
```
<br />

## API's Developed for Sprint 4: </br>
#### API- 1: GET</br>
[GET POSTS](https://documenter.getpostman.com/view/19334583/UVeGqkYL#3884a9cd-dc4f-4a93-a0e3-72a2be7946c0)</br>
This API fetches all POSTS.</br>       
#### API- 2: GET</br>
[GET POSTS BY USERID](https://documenter.getpostman.com/view/19334583/UVeGqkYL#3f70195f-570a-4cd2-a63d-19a5392c7d4a) </br>
This API fetches all the posts based on the USER-ID. </br>
#### API- 2: GET</br>
[GET POSTS BY POSTID](https://documenter.getpostman.com/view/19334583/UVeGqkYL#38613e3b-837a-4b93-bbfe-d3694be24d40) </br>
This API fetches particular information of a post based on the POST-ID. </br>
#### API- 3: POST</br>
[ADD POST](https://documenter.getpostman.com/view/19334583/UVeGqkYL#4a4be6df-a4cd-44f8-a87a-c35baeacb849) </br>
This API is used to add post in the FORUM PAGE </br>
</br>
For the list of all API's developed in the project, refer this link.
#### [Postman link for all API's using POSTMAN](https://documenter.getpostman.com/view/19334583/UVeGqkYL#5f2eba34-3aa7-4502-ab0c-d66b92ab0725)</br>
#### [Postman link for all API's in Git's Wiki](https://github.com/kovurusaisachin/AllyGator/wiki/API-documentation)</br>
</br>

### GOLANG UNIT TEST CASES: </br>
Unit-test cases for the API's have been added along with coverage report and HTML pages.</br>
[Unit test cases](https://github.com/kovurusaisachin/AllyGator/tree/main/Backend/coverage-report) </br>
</br>

## Demo: </br>
https://user-images.githubusercontent.com/44776908/164147361-83547ecd-36e2-42c8-85d7-450999a13564.mp4
