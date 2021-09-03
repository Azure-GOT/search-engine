#usecase
<h1>Which Load balancing Service Suitable for You</h1>
<p>List Of Load Balancing Services </p>
<ol>
<li><b>Azure Front Door</b><br> As more people work remotly and more corporate assets move online,many organizations are turning to Content delivery networks to accelerate the delivery of digital assets such as media content ,apps,API's and websites. in fact 70% of All internet traffic today flows through CDN's that improve app performance and user experience,  CDN acceralate content delivery but it does not  protect your assets.<br> traditional CDN lack integrated security capabilities need to safe guard against increasingly sophisticated cyber attacks like automated bots,injection attacks and application layer denial server attacks.
  <br> so we need a solution that protect while ensuring fast reliable global content at global scale.
  <br>Azure Front Door is the remedy , its a secure cloud CDN service built on azure front Door combined security and CDN technology</li><br>
  
  
<li><b>Traffic Manager</b><br> its based on DNS layer and easily direct the traffic depending on the routing method that user chosen</li> <br>
  
  
<li><b>Application Gateway</b><br>this is a web traffic load balancer that can be used to separate traffic onto web applications.the web applications can reside on virtual machines or on the virtual machine scale sets or even on your on premise service.the application Gateway is an OSI layer 7 load balancer it also has support for secure sockets layer termination ,the request of the application Gateway can be secure in nature and then the requests can then go on to go back and pool resources in an encrypted fashion.</li><br>
  
<li><b>Azure Load Balancer</b><br> The load from the users is equally distributed among your resources like virtual machines. and don't want all the users to be hitting just one resource, that would not be effective. azure load balancer used to distribute the traffic from the users onto your resources.</li>  <br>

</ol>
<p>steps like Flow Chart that to decide the which load balncing rule that support for your application.</p>
<h3><b>when to chose </b></h3>
<h4>Load Balancer</h4>
<p>if  Your application is not web application that is no HTTP/HTTPS requests needed, and deployed in regional basis irrespective of application based on internet facing :-choose Load Balancer.</p>
<h4>Application Gateway</h4>
<p>if  Your application is web application that has HTTP/HTTPS requests ,not required to deploy in multiple regions/global and application wants to be internet facing or if the application is web application that  has HTTP/HTTPS requests  and no need of  internet facing :-choose application Gateway </p>
<h4>Traffic Manager</h4>
<p>if  Your application is not web application that is no HTTP/HTTPS requests needed, and application wants to be internet facing and need to deploy in multiple regions/global :- choose Traffic Manager and Azure Load Balancer </p>
<h4>AZure Front Door</h4>
<p>if Your  application is web application that has HTTP/HTTPS requests , required to deploy in multiple regions/global and application wants to be internet facing and hosting as PaaS :- choose azure front Door</p>

