# bcommerce

## Source: [BigCommerce WebDAV Documentation](https://support.bigcommerce.com/articles/Public/File-Access-WebDAV/?_ga=2.123956298.1363489839.1534794440-2090424515.1532551091#login-info)



Single-click Login
The Cyberduck connection file allows you to download a Duck file to your computer. Clicking on the file will open Cyberduck with your login information pre-populated, except for the password. Follow the steps below to download the Duck file.

 
Before following these instructions. Cyberduck must be downloaded and installed onto your computer.

1. Go to Server Settings › File Access (WebDAV).

2. Click Download next to Cyberduck Connection File.

![alt text](https://support.bigcommerce.com/servlet/rtaImage?eid=ka61B00000006Lz&feoid=00N1300000BR3CT&refid=0EM1B0000018xZR)

Connection File

3. A file called [store-url].duck will be downloaded to your computer. Locate and double-click this file. When CyberDuck loads, enter your password (found in Server Settings › File Access (WebDAV)) when prompted.

![alt text](https://support.bigcommerce.com/servlet/rtaImage?eid=ka61B00000006Lz&feoid=00N1300000BR3CT&refid=0EM1B0000018xZl)

 
Can't download the file? If you aren't the store owner, you need to have the Manage Settings user permission enabled for your user account under Users.

 
 
Connecting with Cyberduck Manually
If you don't wish to download the Cyberduck connection file, you can follow the steps listed below to connect to Cyberduck.

FINDING YOUR LOGIN CREDENTIALS
1. In your BigCommerce control panel, go to Server Settings › File Access (WebDAV).

2. You will see your WebDAV login information listed under the WebDAV tab.

![alt text](https://support.bigcommerce.com/servlet/rtaImage?eid=ka61B00000006Lz&feoid=00N1300000BR3CT&refid=0EM1B0000005nG0)

CONNECT WITH CYBERDUCK
1. Open Cyberduck.

![alt text](https://support.bigcommerce.com/servlet/rtaImage?eid=ka61B00000006Lz&feoid=00N1300000BR3CT&refid=0EM1B0000005nG5)


2. Click on Open Connection.

![alt text](https://support.bigcommerce.com/servlet/rtaImage?eid=ka61B00000006Lz&feoid=00N1300000BR3CT&refid=0EM1B0000005nGA)

3. Enter the login information from the BigCommerce control panel into Cyberduck/

Server - enter the WebDAV Path. The port 443 will fill itself in, and /dav will move to the Path field.
Username - this is the email address listed under WebDAV username.
Password - this is the WebDAV Password.
You may need to uncheck the Anonymous Login check box to input your username and password

![alt text](https://support.bigcommerce.com/servlet/rtaImage?eid=ka61B00000006Lz&feoid=00N1300000BR3CT&refid=0EM1B0000005nGF)

4. Click Connect. When the login is successful, you will see your store's folders.

![alt text](https://support.bigcommerce.com/servlet/rtaImage?eid=ka61B00000006Lz&feoid=00N1300000BR3CT&refid=0EM1B0000005nGK)

5. Once you are logged in, make sure you have set the following settings:
Under Edit › Preferences under the General tab, ensure that the checkbox next to "Save Workspace" is unchecked.

![alt](https://support.bigcommerce.com/servlet/rtaImage?eid=ka61B00000006Lz&feoid=00N1300000BR3CT&refid=0EM1B0000005nGP)

6. Next, click on the Transfers Tab. You want to ensure that Transfer Files is set to Open multiple connections.

![alt](https://support.bigcommerce.com/servlet/rtaImage?eid=ka61B00000006Lz&feoid=00N1300000BR3CT&refid=0EM1B0000005nGU)
