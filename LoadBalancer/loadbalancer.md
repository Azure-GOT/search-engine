#use case
<h1>Use Case Scenario</h1>
<p>customer has onpremise data center and azure virtual network ,in virtual network ,there are two virtual machines hosting the same Application. Company employees established site -site VPN connection.so they actually connect the virtual machines using privite ip address.now they want publish the application 
what are other implementations should be taken for application</p><br>
<h2>Solution</h2>
<p>Customer want to release the application to public so it may face traffic issues leads to servers down .that is one of virtual machine or both may go down and will not work properly .</p><br>
<p>in order to avoid this servers down issues,if we design to share/balance the traffic to each virtual machine ,there is high possibility that servers will run in good health</p><br>
<p>even the servers increases to manage traffic ,for all servers need a guide that how to distribute the traffic among them.</p>
<p>So Load balancing serices are the solution and for this usecase load balancer is enough </p>
<h3>basic Pre requisites that need to build this Structure in azure </h3>
<ol>
<li>virtual machines to host an application and are need to be part of availability set or virtual machine scale set.</li>
<li>azure Load Balncer ,backend pool,health probe,load balancing rules,public ip address </li>
<li>public ip address is assigned to azure load balancer not for virtual machines </li>
</ol>
<h3>Internal Process after implentation and how application works</h3>
<ol>
<li>create public IP address,azure load balancer and then need to create backend pool and need to add health probe</li>
<li>backend pool contains virtual machines .we need to configure the virtual machines corresponding to the application in backend pool. </li><br>
<li>adding the helth probe will help the load balancer understand if virtual machines are health(like heart beat) </li><br>
<li>load balancing rules helps when the request comes from the user to the load balncer,the request will be routed across the virtual machines (balancing the traffic),so when multiple requests comes ,then these requests will split across the Virtual machines which are part of backend pool.</li></ol>
