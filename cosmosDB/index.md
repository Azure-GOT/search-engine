#UseCase
<!DOCTYPE html>
<html><body>
  <h1>Azure Cosmos DB</h1>

<h4>

Steps to Protect user's environment from azure Cosmos DB if Cosmos DB hacked and loophole which allows any user to download, </br>delete or manipulating a massive collection of commercial databases, as well as read/write access to Cosmos DB's underlying architecture 

 <h4>

<h2>Solutions: </h2>

<h3>1.Short term (Immediate Steps) </h3>

<h3>2.Long Term (Recommendations)  </h3>

 

<h4>Short term immediate Steps </h4>

<p>The primary step is to replace the Cosmos DB primary keys, and the second is to limit the network exposure of Cosmos DB accounts as much as could be expected. To regenerate primary keys, security teams should request that all database owners replace their primary keys, and they can use the PowerShell script to monitor the key upgrade process. 
</p>
<h5>Step #1: Regenerating primary keys in Cosmos DB </h5>

 

<p>Two main keys named primary key and secondary key in Cosmos DB Account. There is no distinction between the two; they both perform the same functions. <p>

 

<b>**Warning**: User cannot access the data When user regenerate a key, if you do not provide another key to your applications, it may cause severe disfunction. </b>

<h5><b>Best Procedure to regenerate Keys are given below </b></h5>
   <ol>

<li>Update all applications which are working with this primary key to alternative key. </li>

<li>Alternative key should be like the one that you do not intend to regenerate. </li>

 <li>Generate the primary key After setting the alternative key to your applications. </li>

<li>Then, replace the alternative key with generated primary key to all your 	applications. </li></ol>

<p>Or  </p>

<li> In your applications, continue using secondary key and replace the primary key with secondary key, then regenerate the primary key  </li>
<br>
<b>Steps to update primary key in azure portal </b>
<ol>
<li>log in to the portal.azure.com (azure portal). </li>

<li>select the cosmos DB account which user’s data and applications running in. </li>

<li>In the left side menu, search for name “Keys", click on it. </li>

<li>There user can able to see the primary and secondary keys and end of the both keys ,3 dots (like this ...) are appeared. </li>

  <li>click on three (3) dots, it will show [regenerate Prime key] or [regenerate Secondary key (not needed now)] then click on it. </li>

<li>it prompts whether regenerate the key or not, go with yes, key will generate within a couple of moments based on size of database in Cosmos DB.</li> </ol>

<h5>Step2: Reduce the network access</h5> 

 
<p>
It is important to limit the network traffic to applications which are running under Cosmos DB account. Especially, the cosmos DB account that cannot able to regenerate in time due to operational constraints. 

Regeneration of the primary keys takes minutes to couple of hours based on the data present in Cosmos DB. 

If user do not want to replace the primary and secondary keys, make sure user’s Cosmos DB has the most restricted network access possible. In this way, even if an attacker gets user’s keys, he will unable to access user’s data present in Cosmos data Base. 
</p>
<b>Network Access to the Cosmos DB can be reduced in multiple ways: <b>
<ul>
<li>Creating the Firewall Rules which can be specified to particular/exact IP addresses. These IP addresses can only access to the Cosmos DB Account. </li>

<li>By creating virtual networks, only the resources present within the virtual network can access the database in Cosmos DB of the User. </li>

<li>while creating the security system(firewall) and virtual networks, on the exceptions one of it, do not select “Accept connections from within public Azure datacenters” </li></ul>

<p>This ensures that user database is not exposed to the Azure IP range. Azure IP addresses should be treated as public addresses because those addresses can be obtained by anyone, including malicious users. 
</p>
<h2>Long Term recommendations </h2>
<ul>
<li>Using Role Based Access Control (RBAC): - sharing the primary keys to all is always insecure so by using RBAC only restricted user can get primary keys. </li>

<li>Using Private End-points, cosmos DB allows IP based access this can restrict the malicious attacks. </li></ul>
</body>
 </html>

 
