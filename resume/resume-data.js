const data = [];
data["experience"] = [
  {
    heading : {
      title : {
        dates : "December 2018 - December 2020",
        text : "Airspace Operations Lab<br>NASA Ames Research Center, Moffett Field, CA"
      },
      subtitles : [ 
        "Senior Software Engineer",
        "Contracted by ASRC Federal Data Solutions, Beltsville, MD"
      ]
    },
    item_list : [
      "Developed solutions in Java for NASA’s Multi-Aircraft Control System (MACS, a Java/Swing desktop application) in support of multiple research projects to study Unmanned Aircraft System (UAS) Traffic Management (UTM), as well as traditional air traffic management.",
      "Fixed numerous bugs within MACS, refactored legacy code to improve performance, and added new features/components, such as a Java WebSocket client, and Java data model packages, generated using Swagger/OpenApi, for use in conjunction with the Jackson Databind API for Java-JSON data conversion.",
      "Developed testing strategies using JMX and JConsole Plugin to simulate data communications flow from external components to MACS.",
      "Used Eclipse, Git, Jenkins, and Mantis Bug Tracker."
    ]
  },
  {
  heading : {
    title : { 
      dates : "January 2018 - March 2018",
      text : "Accenture/Google, San Jose, CA"
    },
    subtitles : [ 
      "Software Developer",
      "Contracted by BCForward, Indianapolis, IN"
    ]
    },
    item_list : [
      "Provided support, analysis, and testing for internal Google applications written in Python, the Google Apps Script API, and the Google Sheets API.",
      "Created a testing environment for an internal Google application using the Google Apps Script development environment and the Google Cloud Platform Project environment. Documented the step-by-step procedure to recreate the testing environment.",
      "Began development of a watchdog script, using the Google Apps Script API, and the Google Sheets API, to monitor the results of an internal Google application and generate email alerts to select users upon detection of possible error conditions.",
      "Researched and experimented with running an internal Google Apps Script application as a Borg scheduled task. This required research and experimentation with the Google Client API in Python to implement a startup script which could be compiled as a Borg executable and used to trigger the execution of the Google Apps Script application."
    ]
  },
  {
    heading : {
      title : { 
        dates : "October 2015 - April 2016",
        text : "VMware, Palo Alto, CA"
      },
      subtitles : [ 
        "Java Consultant/Test Tools Developer",
        "Contracted by Kelly Services, Troy, MI"
      ]
    },
    item_list : [
      "Developed test strategies for the ALPS automated test framework.",
      "Designed and implemented a generic solution for mock object testing of JDBC queries.",
      "Created custom test configuration scheme using Java annotations, Apache Ant, and XML.",
      "Fixed numerous bugs and implemented feature requests for the ALPS framework.",
      "Used Eclipse, JUnit, Ant, Jenkins, and Perforce in a Linux development environment.",
      "Other Tools: ReviewBoard, Bugzilla."
    ]
  },
  {
    heading : {
      title : { 
          dates : "August 2013 – January 2014",
          text : "HP Enterprise Services<br>Defense Manpower Data Center, Seaside, CA"
      },
      subtitles : [ 
          "Java Consultant",
          "Contracted by Veredus, Tampa, FL"
      ]
    },
    item_list : [
      "Analysis of legacy systems, applications, and documentation for Java/JEE development and porting of legacy applications.",
      "Developed a SOAP client, built with Ant, XMLTask, XMLUnit, and Perl, for automated testing of SOAP Web Services.",
      "Fixed bugs in a legacy ProC application.",
      "Used Eclipse, Ant, Maven, SVN, CVS, WebLogic Server, and MS Visual Studio."
    ]
  },
  {
    heading : {
      title : { 
          dates : "July 2011 – September 2011",
          text : "USRA/Sofia<br>NASA Ames Research Center, Moffett Field, CA"
      },
      subtitles : [ 
          "Java Consultant",
          "Contracted by Aerotek, San Jose, CA"
      ]
    },
    item_list : [
      "Made modifications to an existing Java desktop application, the Sofia Proposal Tool (SPT), developed to record research proposal information for the Sofia airborne observatory, which would be stored in XML format, and submitted, via FTP, to the Sofia Science Center.",
      "Made numerous enhancements and bug fixes to the SPT application, which included Java Swing GUI components, XML DOM manipulation using JDom, XML file generation with XSLT, and PDF file generation using iText.",
      "Used Eclipse, Apache Ant, and CVS in a Linux development environment."
    ]
  },
  {
    heading : {
      title : { 
	      dates : "June 2010 - December 2010",
        text : "Mirapoint Software, Sunnyvale, CA"
      },
      subtitles : [
        "Java Consultant",
        "Contracted by Oxford &amp; Associates, Sunnyvale, CA"
      ]
    },
    item_list : [
      "Developed solutions for the Mirapoint Message Server platform to integrate features of the open source Zimbra Collaboration Suite, 6.x, and enable the ZCS user interface as an alternate client for the Mirapoint Message Server platform.",
	    "Implemented rich email and group collaboration features, such as free/busy calendar lookup, task management, folder sharing, and TLS mode configuration.","Implemented RESTful web service client functionality to communicate with the Mirapoint Message Server via an HTTP request and consume XML content from the response.",
      "Modified client-side JavaScript and bash shell scripts, as well as Java, with patches to the Zimbra source code.",
      "Modified a proprietary version of the Apache 1.2 HTTP Server, and the mod_proxy module, embedded within the Mirapoint Message Server, to support the proxy of client requests to and from the ZCS server (Jetty HTTP Server).",
      "Used Eclipse, Ant, and Perforce in a Linux development environment."
    ]
  },
  {
    heading : {
      title : { 
        dates : "June 2008 - December 2008",
        text : "Hewlitt-Packard, Cupertino, CA"
      },
      subtitles : [ 
        "Java Consultant (Software Design Engineer VII)",
        "Contracted by Collabera, Inc., Morristown, NJ"
      ]        
    },
    item_list : [
      "Developed white box, in-container tests in Java, using a proprietary Java-based automated testing framework, targeting Web-based functionality for the HP Project and Portfolio Management product suite (PPM), as part of the HP Automation Center of Excellence team.",
      "Interfaced with overseas resources as well as local R&amp;D teams in developing automated test suites and documentation.",
      "Analyzed the PPM documentation and source code - a large scale multi-tiered Java/JEE application stack backed by Oracle RDBMS - to determine suitable automated testing strategies.",
      "Mentored other team members and provided technical support in different areas, ranging from software installation and usage to trouble-shooting and debugging.",
      "Used Eclipse, Ant, TOAD, Cygwin, and StarTeam."
    ]
  },
  {
    heading : {
      title : { 
	      dates : "January 2007 – March 2007",
        text : "BioFocus DPI, South San Francisco, CA"
      },
      subtitles : [ 
        "Java Consultant",
        "Contracted by James Moore &amp; Associates, Los Altos, CA"
      ]
    },
    item_list : [
      "Maintained internal Web-based software for chemical compound inventory management built with Struts, JSP, EJB, JDBC, SQL, Oracle 9i, and deployed to Apache and JBOSS on Linux.",
      "Fixed numerous bugs.",
      "Provided analysis and recommendations for improvements to existing design and implementation as well as new development.",
      "Used Eclipse, TOAD, Oracle SQL Developer, Ant, and CVS, in a Linux/Windows development environment."
    ]
  },
  {
	  heading : {
      title : { 
	      dates : "October 2005 – May 2006",
        text : "Genentech, South San Francisco, CA"
      },
      subtitles : [ 
        "Java &#38; Web Development Consultant",
        "Contracted by Stark Technical Group, Dallas, TX"
      ]      
    },
    item_list : [
      "Designed and developed data-driven Web applications with Java Servlets, JSP, JDBC, Oracle, JavaScript and AJAX, MVC and DAO design patterns, deployed to WebLogic Server.",
      "Designed and developed JSR 168 compliant Portlet applications deployed to Vignette Application Portal on WebLogic Server.",
      "Designed architecture for an inter-Portlet data sharing scheme allowing Portlets to easily share persistent data across the enterprise.",
      "Developed database triggers and stored procedures with PL/SQL for data journaling in Oracle 8i.",
      "Developed SQL scripts to execute DML and DDL operations for application deployment and upgrades.",
      "Developed Perl scripts to access data from Excel spreadsheets and generate SQL scripts to execute DML operations using the accessed data.",
      "Used Eclipse, TOAD, Ant, ClearCase, and Visio."
    ]
	},
  {
	  heading : {
      title : { 
    		  dates : "March 2005 - June 2005",
        text : "Northrop Grumman IT, San Mateo, CA"
      },
      subtitles : [ 
        "Java Consultant",
        "Contracted by Blackstone Technical Group, San Francisco, CA"
      ]           
    },
    item_list : [
      "Created a daemon application in Java for parallel execution of multiple UNIX shell scripts with recurring fixed-rate start times. Included a UNIX deployment script to start/stop the application within a Solaris environment, multi-threaded processing, internal monitors to warn of excessive process duration, configuration of all parameters via a properties file, and Log4J for daily logging as well as E-mail notifications.",
      "Developed Ant script to automate source code synchronization from PVCS repository to CVS repository.",
      "Used WSAD 5.1, Apache Ant, Log4J, PVCS, and CVS."
    ]
  },
  {
    heading : {
      title : { 
    	    dates : "October 2003 - March 2005",
        text : "Accenture, San Francisco, CA"
      },
      subtitles : [ 
        "Analyst Programmer"
      ]
    },
    item_list : [
      "Developed front-end and back-end architecture components for J2EE Web application framework.",
      "Integrated XSLT transformation engine, Xalan-Java 2, into Apache Struts to realize the user view component, rendered from XML/XSL.",
      "Integrated Java Architecture for XML Binding (JAXB) into application framework to enable the collation of dynamic data from multiple and diverse sources, i.e., pure Java objects as well as XML, into a single XML source instance.",
      "Developed a multi-threaded component to enable parallel execution of business processes.",
      "Developed a component to monitor business processes to determine process eligibility. Used Kodo JDO, as the persistence layer implementation, to insert and retrieve process eligibility data stored in Oracle database.",
      "Developed session cache component using Tangosol Coherence to maintain session data across server cluster.",
      "Used Cactus test framework and created stateless session EJB's to test all back-end components assigned for development. Used JDBC to insert test data into the database for each test.",
      "Used WSAD 5.1 for integrated Java development to create, configure, and run enterprise applications containing multiple projects, to configure build paths, libraries, and runtime dependencies, to create, configure, and run local development servers and data sources, and to implement WebSphere custom services configured to run at application startup, as well to create and run Cactus test cases.",
      "Used WebLogic Workshop, using it's built-in MVC architecture and NetUI tag library, to create JPF Controller and JSP View components for Web portal application development.",
      "Also used ClearCase, CVS, DBVisualizer, TOAD, XMLSpy, and Visio.",
    ]
  },
  {
    heading : {
      title : { 
  		dates : "July 2003 - August 2003",
          text : "JavaTell, San Jose, CA"
      },
      subtitles : [ 
          "Java &#38; Web Development Consultant"
      ]
    },
    item_list : [
      "Designed and developed a Web-enabled database administration tool.",
      "Implemented MVC design pattern with Java Servlets and JSP to run on Tomcat 4.1.24 Server and access MySQL 4.0.13 database with JDBC.",
      "Designed front-end user interfaces with HTML, CSS, and JavaScript."
    ]
  },
  {
    heading : {
      title : { 
    	    dates : "November 2000 - June 2001",
        text : "Achex, South San Francisco, CA"
      },
      subtitles : [ 
        "Java &#38; Web Development Engineer"
      ]
    },
    item_list : [
      "Maintained a Java Servlet/JSP driven Web site (achex.com), as part of the Achex Engineering team, to support and promote the Achex online payment services.",
      "Integrated an entire Web site redesign with new and existing functionality, coordinating with other team members in Engineering, Web Design and Product departments.",
      "Built a Web-based editing tool in Java, XML, HTML and CSS for internal use by non-technical team members, to edit online content, implemented using com.oreilly.servlet.MultipartRequest, the gnu.regexp package, and the Sun Java SAX API.",
      "Built and modified additional Web tools for a variety of tasks, such as modifying application environment variables, uploading data files from client to server and dynamically executing Unix shell scripts in support of development and QA efforts.",
      "Modified validation command logic (Java) used to validate user input from online forms.",
      "Provided technical support for other departments, particularly in JavaScript, CSS, and HTML.",
      "Periodically updated the BEA WebLogic deployment script (Unix) to support modifications to various Web applications.",
      "Used JBuilder, TOAD, Visual SourceSafe, SourceOffSite, PVCS, and Exceed."
    ]
  },
  {
    heading : {
      title : { 
        dates : "November 1999 - June 2000",
        text : "BroadVision, Redwood City, CA"
      },
      subtitles : [ 
        "Web Development Consultant"
      ]
    },
    item_list : [
      "Developed page scripts for dynamic content generation using the BroadVision One-To-One Enterprise technology and JavaScript API, along with native JavaScript, HTML, and CSS.",
      "Enhanced online application forms with the addition of form input elements and HTML tables, while expanding form validation and functionality using client-side JavaScript.",
      "Consolidated server-side JavaScript, shared by multiple forms for processing form input, into a single include file, thereby simplifying script development and maintenance.",
      "Created a dynamic navigational UI for Web site news and articles sections, which organized lengthy listings into smaller more readable pages.The new UI improved design and usability with an intuitive navigation bar, displayed list totals as well as pagination, and provided additional links between pages."
    ]
  }
];
data["education"] = [
  {
    heading : {
      title : {
        text : "UCSC Silicon Valley Extension, Santa Clara, CA"
      }  
    },
    item_list : [
      "Certificate in Information Technology, 2017.",
      "Certificate in Computer Programming, 2015.",
    ]
  },
  {
    heading : {
      title : {
        text : "Foothill College, Los Altos Hills, CA"
      }
    },
    item_list : [
      "AS, Computer Software Development, 2003.",
      "Career Certificate in OOP using Java.",
      "Career Certificate in OOP using C++",
    ]
  },
  {
  heading : {
    title : {
      text : "St. Mary's University, San Antonio, TX"
    }
  },
  item_list : [
      "BA, Psychology, Magna Cum Laude, 1982."
    ]
  },
  {
    heading : {
      title : {
        text : "Academic Awards"
      }
    },
    item_list : [
      "Phi Theta Kappa Honor Society, Foothill College Chapter, 2000.",
      "League for Innovation Student Technology Award Nominee, 1999.",
      "Who's Who Among American Colleges and Universities, 1981.",
      "Phi Kappa Phi Honor Society Fellowship, 1985."
    ]
  }  
];
data["summary"] = [
  {
    item_list : [
      "Languages and Technologies: Java/JEE, Servlets, JSP, Portlets, JAXP, JAXB, JDBC, SQL, XML, XSLT, Ant, Perl, JavaScript, AJAX, HTML, and CSS.", 
      "Development Tools: Eclipse, Perforce, StarTeam, CVS, ClearCase, Visio, TOAD, and DBVisualizer.", 
      "AS in Computer Software Development, with Career Certificate in OOP using Java, and Career Certificate in OOP using C++, Foothill College, Los Altos, CA, 2003.",
      "Certificate in Computer Programming, UCSC Silicon Valley Extension, Santa Clara, CA, 2015",
      "Certificate in Information Technology, UCSC Silicon Valley Extension, Santa Clara, CA, 2017",
      "Great track record in adapting to new systems and development environments, and learning new tools and technologies on the fly.",
      "Comfortable working in Windows, Unix, Linux, and Mac environments."
    ]
  }
];
