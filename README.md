# Google Home Local Execution : HTTPS error -> Failed to fetch
Writen date: 2020-03-05 10:31:23 Thursday.
Author: Rajaona Jean.

>[Local execution implementation documention from google.](https://developers.google.com/assistant/smarthome/concepts/local)

> Base code (git repository): 
>  - [Light Simulation](https://github.com/actions-on-google/smart-home-local)
  	I used this code to illustrate my problem.

**Table of content**

1. [Prerequistes](#prerequistes)
2. [Get started](#get-started)
	- 2.1. [Create your project](#create-project)
	- 2.2. [Run the code locally](#run-locally)
		 + 2.2.1 [Run the app which will handle request](#run-app)
		 + 2.2.2 [Run virtual hub and device](#run-hub)
		 + 2.2.3 [Deploy cloud function firebase to handle ](#sync)

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

<a name="get-started"></a>

# 2. Get started

<a name="create-project"></a>

#### 2.1 Create your project
 1. Go on this url: https://console.actions.google.com/ and connect yuourself with a google account.
 2. Click on **New Project**:
 	![alt text](/images/new_project.png)
 3. Now get your project Id:
	![](/images/first_page.png)
	![](/images/project_id.png)

<a name="run-locally"></a>

#### 2.2 Run the code locally
Get the code, run command: `git clone https://github.com/killvi/localExecutionHttpsError.git`

<a name="run-app"></a>

##### 2.2.1 Run the app which will handle request

<a name="run-hub"></a>

##### 2.2.2 Run virtual hub and devices

Go in *deviceDiscoverable*  folder and run command: `npm start`.

In terminal, you should see this:
```
$ C: path/localExecutionhttpsError/deviceDiscoverable> npm start

> fakecandy@0.0.1 start C: path/localExecutionhttpsError/deviceDiscoverable
> ts-node server.ts --device_id hub1 --udp_discovery_port 3311 --udp_discovery_packet A5A5A5A5 --channel 1 --channel 2 --channel 3

discovery listening { address: '0.0.0.0', family: 'IPv4', port: 3311 }
opc listening { address: '::', family: 'IPv6', port: 7890 }
```
<a name="sync"></a>

##### 2.2.3 Deploy firebase cloud function to handle SYNC request