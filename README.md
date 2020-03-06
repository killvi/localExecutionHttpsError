# Google Home Local Execution : HTTPS error -> Failed to fetch
Writen date: 2020-03-05 10:31:23 Thursday.
Author: Rajaona Jean.

>[Local execution implementation documention from google.](https://developers.google.com/assistant/smarthome/concepts/local)

> Base code (git repositories): 
  - [Light Simulation](https://github.com/actions-on-google/smart-home-local)
  	I used this code to illustrate my problem.

**Table of content**

1. [Prerequistes](## 1. Prerequistes)
2. [Install your environment](## 2. Install your environment)
2.1. [Create your project](## 2.1. Create your project)
2.2. [Run the code locally](#### 2.2. Run the code locally)
	 + 2.2.1 [Run the app which will handle request](##### 2.2.1 Run the app which will handle request)
	 + 2.2.2 [Run virtual hub and device](#### 2.2.2 Run virtual hub and device)
	 + 2.2.3 [Deploy cloud function firebase to handle ](#### 2.2.3 Deploy cloud function firebase to handle )
# 1. Prerequistes

Be familiar with main concept of local execution.
> more details here: https://developers.google.com/assistant/smarthome/concepts/local

######  Environment
|       Name        |  Version                              | 
|----------| :--------------------------: |
| Google home nest mini   |        2nd generation     |
| Windows | 10 |
| ngrok | 2.2.8 |
| node  | 12.15.0 |

# 2. Install your environment
#### 2.1 Create your project
 1. Go on this url: https://console.actions.google.com/ and connect yuourself with a google account.
 2. Click on **New Project**:
 	![](https://github.com/killvi/localExecutionHttpsError.git/images/new_project)
 3. Now get your project Id:
	![](https://github.com/killvi/localExecutionHttpsError.git/images/first_page)
	![](https://github.com/killvi/localExecutionHttpsError.git/images/project_id)

#### 2.2 Run the code locally
Get the code, run command: `git clone https://github.com/killvi/localExecutionHttpsError.git`
##### 2.2.1 Run the app which will handle request

##### 2.2.2 Run virtual hub and device

##### 2.2.3 Deploy cloud function firebase to handle 