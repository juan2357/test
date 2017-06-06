  // $( document ).ready(function() {
  //
  //
  //   // var awesomeThoughts = "I am Juan and I am AWESOME!"
  //   // console.log(awesomeThoughts);
  //   //
  //   // var email = "juanperez@icloud.com";
  //   // var newEmail = email.replace("icloud", "me");
  //   // console.log(email);
  //   // console.log(newEmail);
  //   //
  //   // var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
  //   // $("#main").append(funThoughts);
  //   //
  //   // var formattedName = "Juan Perez";
  //   // var formattedRole = "Full Stack Web Developer";
  //   // $("#name").append(formattedName);
  //   // $("#role").append(formattedRole);
  //
  //   var skills = ['Web Development',
  //                 'Responsive Web Design',
  //                 'Ruby',
  //                 'Ruby on Rails',
  //                 'HTML5',
  //                 'CSS3',
  //                 'JavaScript',
  //                 'jQuery',
  //                 'Sinatra',
  //                 'Bootstrap',
  //                 'Github']
  //
  //   // object literal
  //   var bio = {
  //     "name": "Juan Perez",
  //     "role": "Full Stack Web Developer",
  //     "contacts": {
  //       "cell": "754-300-6399",
  //       "email": "juanfperez@me.com",
  //       "Github": "juan2357",
  //     },
  //     "welcome": "Welcome to my resume page",
  //     "skills": skills,
  //     "pic": "img/profile.png"
  //   };
  //
  //   $("#name").append(bio.name);
  //   $("#role").append(bio.role);
  //
  // // Dot Notation
  //   var work = {};
  //     work.title = "Freelance Web Developer";
  //     work.employer = "self";
  //     work.years = "0.1";
  //     work.city = "Weston";
  //   // bracket Notation
  //   var education = {};
  //   education["school"] = "FAU";
  //   education["city"] = "Boca Raton";
  //   education["years"] = "2016-2018";
  //
  //   // $("#work").append(work["title"]);
  //   // $("#education").append(education.school);
  //
  //   // JSON
  //   var education = {
  //     "schools": [
  //       {
  //         "name": "FAU",
  //         "city": "Boca Raton",
  //         "major": "Computer Science"
  //       },
  //       {
  //         "name": "Udacity",
  //         "city": "Weston",
  //         "major": "FEND"
  //       }
  //     ]
  //   }
  //
  //
  // });
  var bio = {
    "name": "Juan Perez",
    "role": "Full Stack Web Developer",
    "welcome": "Welcome to my resume page. Here is a culmination of my skills knowledge and expertise. (UNDER CONSTRUCTION, 6/28/16)[UPDATE 6/29: links to project available ] ",
    "mobile": "754-300-6399",
    "email": "juanfperez@me.com",
    "Github": "juan2357",
    "linkedin": "in/JuanPerezFSWD",
    "twitter": "@JuanBluePerez",
    "skills": [
      'Web Development',
      'Responsive Web Design',
      'Ruby',
      'Ruby on Rails',
      'HTML5',
      'CSS3',
      'JavaScript',
      'jQuery',
      'Sinatra',
      'Bootstrap'
    ],
    "biopic": "img/profile.png",
    "location": "Weston, Florida"
  };

  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  $("#header").append(formattedName);

  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").append(formattedRole);

  var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcome);
  $("#header").append(formattedMsg);

  var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
  $("#header").append(formattedBioPic);

  var formattedLocation = HTMLlocation.replace("%data%", bio.location);
  $("#footerContacts").append(formattedLocation);

  var formattedMobile = HTMLmobile.replace("%data%", bio.mobile);
  $("#footerContacts").append(formattedMobile);

  var contactLinks = $("#footerContacts").find("a:last");
  contactLinks.attr("href", "tel:" + bio.mobile);

  var formattedEmail = HTMLemail.replace("%data%", bio.email);
  $("#footerContacts").append(formattedEmail);

  var contactLinks = $("#footerContacts").find("a:last");
  contactLinks.attr("href", "mailto:" + bio.email);

  var formattedlinkedin = HTMLlinkedin.replace("%data%", bio.linkedin);
  $("#footerContacts").append(formattedlinkedin);

  var contactLinks = $("#footerContacts").find("a");
  contactLinks.attr("href", "http://linkedin.com/" + bio.linkedin);

  var formatttedGitHub = HTMLGitHub.replace("%data%", bio.Github);
  $("#footerContacts").append(formatttedGitHub);

  var contactLinks = $("#footerContacts").find("a");
  contactLinks.attr("href", "http://Github.com/" + bio.Github);

  var formatttedTwitter = HTMLtwitter.replace("%data%", bio.twitter);
  $("#footerContacts").append(formatttedTwitter);

  var contactLinks = $("#footerContacts").find("a");
  contactLinks.attr("href", "http://twitter.com/" + bio.twitter);

  function inName(name) {
    name = name.trim().split(" ");
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() +
      name[0].slice(1).toLowerCase();

    return name[0] +" "+name[1];
  };

  $("#main").append(internationalizeButton);

  // if(bio.skills.length > 0) {
  //   $("#header").append(HTMLskillsStart);
  //
  //   var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  //   $("#skills").append(formattedSkill);
  //   formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  //   $("#skills").append(formattedSkill);
  //   formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  //   $("#skills").append(formattedSkill);
  //   formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
  //   $("#skills").append(formattedSkill);
  //   formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
  //   $("#skills").append(formattedSkill);
  //   formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
  //   $("#skills").append(formattedSkill);
  //   formattedSkill = HTMLskills.replace("%data%", bio.skills[6]);
  //   $("#skills").append(formattedSkill);
  //   formattedSkill = HTMLskills.replace("%data%", bio.skills[7]);
  //   $("#skills").append(formattedSkill);
  //   formattedSkill = HTMLskills.replace("%data%", bio.skills[8]);
  //   $("#skills").append(formattedSkill);
  //   formattedSkill = HTMLskills.replace("%data%", bio.skills[9]);
  //   $("#skills").append(formattedSkill);
  //   formattedSkill = HTMLskills.replace("%data%", bio.skills[10]);
  // };
  $("#header").append(HTMLskillsStart);
  for (i = 0; i < bio.skills.length; i++) {

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
    $("#skills").append(formattedSkill);
  };

  var work = {
    "jobs": [
      {
        "employer": "Wyncode Academy",
        "title": "Full-Stack Web Developer",
        "location": "Fort Lauderdale, FL",
        "dates": "Spring 2016",
        "description": "- Pitch Day Winner. <br> - Developed code using Ruby, Rails, Javascript, jQuery, HTML and CSS. <br> - Executed code using Github, Sinatra, Materialize, and Bootstrap.<br>- Collaborated with classmates to build complex applications.<br>- Built and created a sensor application with Ruby on Rails, that utilized a Raspberry Pi to load temperature, humidity, and other types of data.",
      },
      {
        "employer": "Somerset Academy Charter Schools",
        "title": "Mathematics & Science Teacher",
        "location": "North Lauderdale, FL",
        "dates": "2014-2016",
        "description": "- Facilitated Math and Science Instruction.<br>- Effectively utilized positive reinforcement classroom management techniques.<br>- Adapted lessons to accommodate all students’ abilities.<br>- Accommodated instruction to assist ESE and ESOL students.<br>- Created and providing enrichment activities to gifted high level learners."
      },
      {
        "employer": "Palm Beach County School District",
        "title": "Elementary School Teacher",
        "location": "West Palm Beach, FL",
        "dates": "2013-2014",
        "description": "- Effectively utilized C.H.A.M.P.S classroom management techniques.<br>- Effectively utilized Reader’s and Writer’s Workshop during instruction.<br>- Adapted lessons to accommodate all students’ abilities.<br>- Accommodated instruction to assist ESE and ESOL students<br>- Created and providing enrichment activities to gifted high level learners."
      },
      {
        "employer": "Charter Schools USA",
        "title": "Elementary School Teacher",
        "location": "Fort Lauderdale, FL",
        "dates": "Fall 2012",
        "description": "- Served as the Science Fair Coordinator.<br>- Served as the Science, Technology, Engineering, Math Club Faculty Advisor. <br>- Served on grant committee.<br>- Effectively utilized C.H.A.M.P.S classroom management techniques.<br>- Adapted lessons to accommodate ESE students.<br>- Accommodated instruction to assist low level learners<br>- Created and providing enrichment activities to gifted high level learners."
      },
      {
        "employer": "United States Marine Corps",
        "title": "Lance Corporal",
        "location": "United States",
        "dates": "1995-1999",
        "description": "- Honorably Discharged.<br>- Validated request for table of organization and equipment change.<br>- Challenged inaccurate allowance data.<br>- Supervised maintenance of the property control document. <br>- Maintained edit error and exception listing."
      }
    ]
  };

  function displayWork() {
    for(job in work.jobs) {
      $("#workExperience").append(HTMLworkStart);

      var formattedEmployer = HTMLworkEmployer.replace
        ("%data%", work.jobs[job].employer);
      var formattedTitle = HTMLworkTitle.replace
        ("%data%", work.jobs[job].title);

      var formattedLocation = HTMLworkLocation.replace
        ("%data%", work.jobs[job].location);
      $(".work-entry:last").append(formattedLocation);

      var formattedEmployerTitle = formattedEmployer + formattedTitle;
      $(".work-entry:last").append(formattedEmployerTitle);

      var formattedDates = HTMLworkDates.replace
        ("%data%", work.jobs[job].dates);
      $(".work-entry:last").append(formattedDates);

      var formattedDescription = HTMLworkDescription.replace
        ("%data%", work.jobs[job].description);
      $(".work-entry:last").append(formattedDescription);
    }
  };

  displayWork();

  var projects = {
    "projects": [
      {
        "title": "Sensoree",
        "dates": "June 2016",
        "description": "Sensoree is a web application to help anyone build a network of smart sensors using devices such as Raspberry Pi or Arduino. It will provide an interface where they can send sensor data, view it, get notifications, sample code, a web API, sensor data storage, and an admin portal to interact with their data and their device. Initial support for basic sensors such as temperature, motion,and distance sensors can teach students to build and interact with other web services, receive notifications, and share graphic representations of their data with others.",
        "images": ["img/sensoree.png"],
        "url": "http://sensoree.net"
      },
      {
        "title": "Brighton Times",
        "dates": "June 2016",
        "description": "A website refactored to be reponsive to multiple media queries.",
        "images": ["img/dog.jpg"],
        "url": "https://github.com/juan2357/rwdf"
      },
      {
        "title": "Animal Traind Card",
        "dates": "June 2016",
        "description": "HTML rendering of a mock up image.",
        "images": ["img/falcon.jpg"],
        "url": "https://github.com/juan2357/animal_trading_card"
      },
      {
        "title": "My Portfolio Site",
        "dates": "June 2016",
        "description": "A responsive website displaying multiple projects.",
        "images": ["img/egyptian-pyramids.jpeg"],
        "url": "https://github.com/juan2357/Build-a-Portfolio-Site"
      }
    ]
  };



  function displayProjects() {
    for (project in projects.projects) {
      $("#projects").append(HTMLprojectStart);

      var formattedTitle = HTMLprojectTitle.replace
        ("%data%", projects.projects[project].title);

      var formattedDates = HTMLprojectDates.replace
        ("%data%", projects.projects[project].dates);
      $(".project-entry:last").append(formattedTitle);

      var formattedDescription = HTMLprojectDescription.replace
        ("%data%", projects.projects[project].description);
      $(".project-entry:last").append(formattedDescription);

      var formattedImage = HTMLprojectImage.replace
        ("%data%", projects.projects[project].images);
      $(".project-entry:last").append(formattedImage);

      var projectLinks = $("#projects").find("a:last");
      projectLinks.attr("href", projects.projects[project]["url"]);
      }
  };

  displayProjects();

  var education = {
    "schools": [
      {
        "name": "Florida Atlantic University",
        "location": "Boca Raton, FL",
        "degree": "B.S., Computer Science",
        "dates": "2016-2018"
        // "url":
      },
      {
        "name": "Wyncode Academy",
        "location": "Fort Lauderdale, FL",
        "degree": "Certificate, Full Stack Web Development",
        "dates": "2016"
        // "url":
      },
      {
        "name": "Florida Atlantic University",
        "location": "Boca Raton, FL",
        "degree": "Master's Education",
        "dates": "2009-2012"
        // "url":
      },
      {
        "name": "Chapman University",
        "location": "San Diego, CA",
        "degree": "B.A., Social Science",
        "dates": "1999-2007"
        // "url":
      }
    ],
    // "onlineCourses": [
    //   "title": ,
    //   "school": ,
    //   "dates": ,
    //   "url":
    // ]
  };

  function displayEducation() {
    for (school in education.schools) {
      $("#education").append(HTMLschoolStart);

      var formattedName = HTMLschoolName.replace
        ("%data%", education.schools[school].name);
      $(".education-entry:last").append(formattedName);

      var formattedLocation = HTMLschoolLocation.replace
        ("%data%", education.schools[school].location);
      $(".education-entry:last").append(formattedLocation);

      var formattedDegree = HTMLschoolDegree.replace
        ("%data%", education.schools[school].degree);
      $(".education-entry:last").append(formattedDegree);

      var formattedDates = HTMLschoolDates.replace
        ("%data%", education.schools[school].dates);
      $(".education-entry:last").append(formattedDates);
    }
  };

  displayEducation();

  $(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
  })


      //
      // function locationizer(work_obj) {
      //   var locationArray = [];
      //
      //   for (job in work_obj.jobs) {
      //     var newlocation = work_obj.jobs[job].location;
      //     locationArray.push(newlocation);
      //   }
      //   return locationArray;
      // };
      //
      // console.log(locationizer(work));
