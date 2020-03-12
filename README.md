# Google Home Local Execution : HTTPS error -> Failed to fetch
Writen date: 2020-03-05 10:31:23 Thursday.
Author: Rajaona Jean.

>[Local execution implementation documention from google.](https://developers.google.com/assistant/smarthome/concepts/local)
>
> Base code (git repository): 
>  - [Light Simulation](https://github.com/actions-on-google/smart-home-local)
>  	I used this code to illustrate my problem.

**Table of content**

1. [Prerequistes](#prerequistes)
2. [Get started](#get-started)
	- 2.1 [Create your project](#create-project)
	- 2.2 [Configure your Google Home App with your virtual devices](#config-google-home)
		 + 2.2.1 [Deploy cloud function firebase to synchronize your virtual devices with your google home app](#sync)
		 + 2.2.2 [Install Google Home App](#google-home-app)
	- 2.3 [Run the code locally](#run-locally)
		 + 2.2.1 [Run the app which will handle smart speaker request](#run-app)
		 + 2.2.2 [Run virtual hub and device](#run-hub)


<a name="prerequistes"></a>

# 1. Prerequistes

Be familiar with main concept of local execution.
> more details here: https://developers.google.com/assistant/smarthome/concepts/local

######  Environment
|       Name        |  Version                        | 
|----------| :--------------------------: |
| Google home nest mini   |        2nd generation     |
| Windows | 10 |
| ngrok | 2.2.8 |
| node  | 12.15.0 |
| firebase | '' |
| google Home app | '' |

<a name="get-started"></a>

# 2. Get started
Get the code, run command: `git clone https://github.com/killvi/localExecutionHttpsError.git`

<a name="create-project"></a>

#### 2.1 Create your project
 1. Go on this url: https://console.actions.google.com/ and connect yuourself with a google account.

 2. Click on **New Project**:

 	![error](https://raw.githubusercontent.com/killvi/localExecutionHttpsError/master/images/new_project.png)

 3. Now be aware of your project Id:

	![error](https://raw.githubusercontent.com/killvi/localExecutionHttpsError/master/images/first_page.PNG)

	![error](https://raw.githubusercontent.com/killvi/localExecutionHttpsError/master/images/project_id.PNG)

 4. Now give a name that will be seen in google home app when you will add this environment:

  	![error](https://raw.githubusercontent.com/killvi/localExecutionHttpsError/master/images/name_your_project.PNG)

<a name="config-google-home"></a>

#### 2.2 Configure your Google Home App with your virtual devices

<a name="sync"></a>

##### 2.2.1 Deploy cloud function firebase to synchronize your virtual devices with your google home app

<a name="google-home-app"></a>

Go in *syncHandlerFirebase*  folder and run these commands on a terminal:

 1. `npm install`

 2. `npm run firebase use ${your-project-id}`

	You Should see something like that:

	```shell
	PS C: /path/localExecutionhttpsError/syncHandlerFirebase> npm run firebase use ${your-project-id}  

	> smarthome-provider-placeholder@0.0.1 firebase C:/path/localExecution/https/syncHandlerFirebase
	> firebase "use" "your-project-id"

	Now using project ${your-project-id}
	```
 3. `npm run initHub`

	You Should see this:
	```shell
	PS C: /path/localExecutionhttpsError/syncHandlerFirebase> npm run initHub

	> smarthome-provider-placeholder@0.0.1 initHub C: /path/localExecutionhttpsError/syncHandlerFirebase
	> firebase functions:config:set hub1.leds=16 hub1.channel=1,2,3

	+  Functions config updated.

	Please deploy your functions for the change to take effect by running firebase deploy --only functions
	```
 4. `npm run deploy`
 
=========
 
Now you will need to configure Google Action Console, but first, some firebase information are needed:

 1. Go there: https://firebase.google.com/

 2. Click on **Go to console**:

 ![error](https://raw.githubusercontent.com/killvi/localExecutionHttpsError/master/images/firebase_acceuil.PNG)

 3. Click on your project:

 <img src="https://raw.githubusercontent.com/killvi/localExecutionHttpsError/master/images/firebase_project.PNG" height="400px">

 4. Click on **functions** and get these 3 urls:

 ![error](https://raw.githubusercontent.com/killvi/localExecutionHttpsError/master/images/firebase_functions.PNG)

<center>
	
	smarthome:   https://${region}-${your-project-id}.cloudfunctions.net/smarthome 
	
	***
	
	authorize: https://${region}-${your-project-id}.cloudfunctions.net/authorize
	
	***
	
	token: https://${region}-${your-project-id}.cloudfunctions.net/token
	
</center>

=========
 
 1. Now go here: https://console.actions.google.com/
 
 2. Put *smarthome* url here and save your changes:
 
  ![error](https://raw.githubusercontent.com/killvi/localExecutionHttpsError/master/images/google_action_smarthome_url.PNG)
  
 3. Put *authorization* and *token* urls here and save your changes:
 
  ![error](https://raw.githubusercontent.com/killvi/localExecutionHttpsError/master/images/google_action_auth_url.PNG)

##### 2.2.2 Install Google Home App
1. Go on Google Play or Apple store and dowload Google Home.

<img src="https://raw.githubusercontent.com/killvi/localExecutionHttpsError/master/images/phone_google_home.jpg" height="400px">

2. Configure your Google Home mini to work with your app.

3. Now add your devices environment. Here it will be your virtual devices. Follow theses steps:

<img src="https://raw.githubusercontent.com/killvi/localExecutionHttpsError/master/images/phone_acceuil.jpg" height="400px">  | <img src="https://raw.githubusercontent.com/killvi/localExecutionHttpsError/master/images/phone_configure.jpg" height="400px"> | <img src="https://raw.githubusercontent.com/killvi/localExecutionHttpsError/master/images/phone_add_skill.jpg" height="400px">

Search *the project* you created and add it.

<img src="https://raw.githubusercontent.com/killvi/localExecutionHttpsError/master/images/phone_search_skill.jpg" height="400px"> | <img src="https://raw.githubusercontent.com/killvi/localExecutionHttpsError/master/images/phone_search_skill_and_add.jpg" height="400px"> | <img src="https://raw.githubusercontent.com/killvi/localExecutionHttpsError/master/images/phone_confirm_account_linking.jpg" height="400px">

Now you will see your virtual devices

<img src="https://raw.githubusercontent.com/killvi/localExecutionHttpsError/master/images/phone_virtual_devices.jpg" height="400px">

<a name="run-locally"></a>

#### 2.2 Run the code locally

<a name="run-app"></a>

##### 2.2.1 Run the app which will handle request

Go in *app*  folder and run command:
1. `npm install`

2. `npm start`

<a name="run-hub"></a>

##### 2.2.2 Run virtual hub and devices

Go in *deviceDiscoverable*  folder and run command:
1. `npm install`

2. `npm start`

In terminal, you should see this:
```shell
PS C: /path/localExecutionhttpsError/deviceDiscoverable> npm start

> fakecandy@0.0.1 start C: /path/localExecutionhttpsError/deviceDiscoverable
> ts-node server.ts --device_id hub1 --udp_discovery_port 3311 --udp_discovery_packet A5A5A5A5 --channel 1 --channel 2 --channel 3

discovery listening { address: '0.0.0.0', family: 'IPv4', port: 3311 }
opc listening { address: '::', family: 'IPv6', port: 7890 }
```
