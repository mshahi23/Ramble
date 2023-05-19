# Ramble 
## CS 320 - User Interface Design
### Note: Orignial repo is in the course's organization which is private
### Note: Software will not work anymore as access to Cloudstore Database has expired
<hr/>


## **Group Name**: We Tried, Ok?

## **Devs**: Manan Shahi, Ussama Mustafa

## **Client**: Blue Otter
<hr/>

### App Description

Ramble is a social media app that is similar to Twitter but with a focus on long form posts. The app is meant to be viewed on a computer with a 16:9 aspect ratio monitor in full screen. The app unfortunately does not scale based on the resolution and aspect ratio of the device.

### Motivation

The plan is to leverage the good aspects of social media and packaging that into an appealing UI which respects the concepts learnt in class.

### Developer Bio

#### Manan Shahi

Senior International student from Nepal. Computer science major.

#### Ussama Mustafa

Senior International student. CS and Math major.

### Installation / Setup

#### STEP 1

Download the zip file and extract it some where accesible.

Alternatively, clone the repository/

#### STEP 2

Download Node.js and restart your computer

https://nodejs.org/en/download/

#### STEP 3

Open the terminal and navigate to the ramble folder. Once there, type:

```
npm cache clean --force
npm install --force
```

This will install the packages and dependecies required to run Ramble

**Note: This has been tested on another Windows machine and it was functional even without an IDE. This might not work on your machine**

#### STEP 4

To run the application type:

```
npm start
```

### User Guide

#### Login / Sign Up

Before logging in, users need to create an account in the following register page. This page takes 3 fields, a username, an email and a password.

Make sure to remember the email and password especially since those are the fields you need to login. 

The forms have error handling which is done by firebase. If the password is too weak or if the email does not follow email regular expression (user@gmail.com), you will get an alert with an error message.

**If you would like to skip the register process, we have created a user for Dr. guarnera. email: dg@email.com | password: drewguarnera**

![image](https://user-images.githubusercontent.com/77845955/207215725-7a77b458-3b46-410f-9ad6-7847a57b2a5d.png)

Once registered, you can login in the following form, where you simply put your email and password. After that you will be redirected to the home page.

![image](https://user-images.githubusercontent.com/77845955/207215839-0a2cf41a-3ce7-418e-bc72-dd15524bf860.png)

#### Navigation

The navigation in the website is done through a sidebar which first has a logo. Clicking the logo simply redirects you to the home page.

The Home button also redirects to the home page where all posts by all users are shown from newest to oldest.

The topics button redirects to the topics page where all posts by all users are shown but sorted by topic.

The profile button redirects to the user's profile page where they can see their avatar, username, email, bio and an option to edit those. The profile page also has all the posts created by this specific user.

The ramble button below summons a text box which can be used to create a Ramble post. This is a quality of life features to enable users to make posts without using the main text box at the top of the home page

Below that is a logout button which logs the user out once it is clicked.

The sidebar is visible from the Home, Topics, and Profile page.

![image](https://user-images.githubusercontent.com/77845955/207217162-efff4945-6a78-4098-b440-b85b074971c4.png)

#### Home

The Home page is the first thing that a user is redirected to once they are logged in. It contains a sidebar on the left, a Ramble text box with all necessary input fields and a scrollable timeline with every post sorted by time in the middle section, and a recommended section on the right.

The timeline is scrollable but the other elements are fixed. The text box at the top is also fixed but can be summoned using the ramble button in the sidebar. 

![image](https://user-images.githubusercontent.com/77845955/207217415-1a5a8104-c054-4c87-8162-2633a0a89d4b.png)

#### Ramble

In order to create a ramble post, a user can simply log in and then go to the home page where there is a Ramble box at the top of the timeline where they can specify the title, the topic, the content as well as add a media URL to post their ramble. Once the fields are filled, the user can tap Enter or click the Ramble button to post their Ramble. This can also be done through the Ramble button in the sidebar since it is possible for a user to want to make a post while scrolling the timeline or while in the Topics or Profile pages.

**You cannot post a Ramble without adding content but it is possible to post a Ramble with no title or topic or media URL, in the latter case, the title will be set to untitled and the topic will be set to no topic**

![image](https://user-images.githubusercontent.com/77845955/207218040-b45f93b7-e2e6-4373-80af-523291c57637.png)

#### Delete Ramble

To delete a Ramble post, a user must be logged in and then press the trash can icon as shown in the image below. Once pressed, there will be a confirmation window that asks users if they are sure about deleting. This is simply a security measure. If the user answers yes, the post will be deleted.

![image](https://user-images.githubusercontent.com/77845955/207218468-49addfba-f652-4a6b-a5be-35e50991def7.png)

#### Topics

The topics page is simply a page where all the Ramble posts are sorted alphabetically by topic, so if a user wants to see all the posts from a specific topic they can simply scroll down and find the first post with said topic, all other posts will be right below it.

![image](https://user-images.githubusercontent.com/77845955/207218685-24c9f33c-1894-4e30-b357-b7a551506254.png)

#### Profile

The profile page is where a user can go to see their own information at the top of the middle section and to also see all the posts they have made.

![image](https://user-images.githubusercontent.com/77845955/207217969-8553da8a-60cb-49be-b4a3-beeb02570458.png)

#### Edit Profile

The edit profile page can be accessed by first going to the profile page, then clicking the edit profile button in the top middle section below the user info.

![image](https://user-images.githubusercontent.com/77845955/207219146-4306c01f-544e-461b-b5a2-8cee11f51164.png)

The edit profile page allows users to edit 3 fields. their username, their email and their profile picture. The current usernames and emails are already input, the user can then click the input boxes and write the new name and email they want and then click the Save button below and get redirected to the profile page with their edited info.

For first time users, the profile picture is blank, but once they are in the edit profile page, they can update it. To do so, they can press the update profile picture button below the avatar, which will open a dialog box, which can allow users to browse their local files from which they can select a picture that they can also crop to fit the round avatar. Once that is done, the user can press the Save button and they will be redirected to the profile page where they can see their new profile picture.

All posts made following edits of profile info will have the new profile picture and usernames.

If you accidentally access the edit profile page and wish to go back to the profile, you can simply press the back arrow in your browser.

![image](https://user-images.githubusercontent.com/77845955/207218801-2f552852-cad8-491b-823d-55fc378ba482.png)

#### Logout 

Once a user wishes to logout, they can simply go to any page that has the sidebar (Home, Topics and Profile) and press the logout icon at the bottom of the sidebar. They will then be logged out and redirected to the Sign up page.

![image](https://user-images.githubusercontent.com/77845955/207219058-070538f8-013e-4d24-a5fb-fb200cea9a74.png)

### Error Handling

Since our website uses firebase and is not deployed yet, there are some issues with refreshing pages such as the profile page. if you refresh a page and get an error screen, you can simply go to the search bar and write '/home', or '/signup', or '/register' after the server domain and that should fix the error.

We genuinely advise the lack of use of the refresh button since our website has real time updates so there is never a need to refresh a page to see any changes.









