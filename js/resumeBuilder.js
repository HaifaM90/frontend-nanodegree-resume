/*
This is empty on purpose! Your code to build the resume will go here.
*/
var contacts;
var bio = {
  'name' : 'Haifa Al-Ajlan',
  'role' : 'Application Developer',
  'contacts' : {
    'mobile': '+966552248899',
    'email': 'alajlan.h@gmail.com',
    'github': 'HaifaM90',
    'twitter': '_hma_',
    'location': 'Saudi Arabia - Riyadh'
  },
  'welcomeMessage': 'Greeting',
  'skills': ['programming', 'photoshop designer', 'digital painter'],
  'biopic': 'images/myname.jpg',
  'display': function ()
  {
    var formattedName= HTMLheaderName.replace("%data%",bio.name);
    var formattedRole=  HTMLheaderRole.replace("%data%",bio.role);
    var formattedMobile= HTMLmobile.replace("%data%",bio.contacts.mobile);
    var formattedEmail= HTMLemail.replace("%data%",bio.contacts.email);
    var formattedTwitter= HTMLtwitter.replace("%data%",bio.contacts.twitter);
    var formattedGithub= HTMLgithub.replace("%data%",bio.contacts.github);
    var formattedLocation= HTMLlocation.replace("%data%",bio.contacts.location);
    contacts= formattedMobile + formattedEmail + formattedTwitter + formattedGithub + formattedLocation;
    var formattedImg= HTMLbioPic.replace("%data%",bio.biopic);
    var formattedMsg= HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
    var formattedSkilles = "";
    for (var i=0; i< bio.skills.length;i++) {
      formattedSkilles+= HTMLskills.replace("%data%",bio.skills[i]);
    }
    $('#header').prepend(formattedName + formattedRole);
    $('#topContacts').append(formattedMobile);
    $('#topContacts').append(formattedEmail);
    $('#topContacts').append(formattedTwitter);
    $('#topContacts').append(formattedGithub);
    $('#topContacts').append(formattedLocation);
    $('#header').append(formattedImg);
    $('#header').append(formattedMsg);
    $('#header').append(HTMLskillsStart);
    $('#skills').append(formattedSkilles);

  }
} ;
var education = {
  'schools': [
    {
      'name': 'King Saud University',
      'location': 'Almalz - Riyadh',
      'degree': 'Bachelor',
      'majors': ['Computer Science and Information Technology'],
      'dates': '2008 - 2011'
    },
    {
      'name': '45 Secondry Schools',
      'location': 'Almasif - Riyadh',
      'degree': 'Secondry',
      'majors': ['scientific'],
      'dates': '2006 - 2008'
    }
  ],
  'onlineCourses': [
    {
      'title': 'Front-End Web Developer Nanodegree Program',
      'school': 'Udacity',
      'dates': '2017',
      'url': 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
    },
    {
      'title': 'The Complete React Native and Redux Course',
      'school': 'Udemy',
      'dates': '2017',
      'url': 'https://www.udemy.com/the-complete-react-native-and-redux-course/'
    },
    {
      'title': 'Ionic 1 by Example: Create Mobile Apps in HTML5',
      'school': 'Udemy',
      'dates': '2016',
      'url': 'https://www.udemy.com/ionic-by-example/'
    }
  ],
  'display': function() {
    var formattedEducation = "";
    for (var i=0 ; i < education.schools.length ; i++) {
      formattedEducation+= HTMLschoolName.replace("%data%",education.schools[i].name) +
                           HTMLschoolDegree.replace("%data%",education.schools[i].degree) +
                           HTMLschoolDates.replace("%data%",education.schools[i].dates) +
                           HTMLschoolLocation.replace("%data%",education.schools[i].location) +
                           HTMLschoolMajor.replace("%data%",education.schools[i].majors);
    }
    $('#education').append(HTMLschoolStart);
    $('.education-entry').append(formattedEducation);
    var formattedCourses = "";
    for (var i=0 ; i < education.onlineCourses.length ; i++) {
      formattedCourses+= HTMLonlineTitle.replace("%data%",education.onlineCourses[i].title) +
                         HTMLonlineSchool.replace("%data%",education.onlineCourses[i].school) +
                         HTMLonlineDates.replace("%data%",education.onlineCourses[i].dates) +
                         HTMLonlineURL.replace("%data%",education.onlineCourses[i].url);

    }

    $('.education-entry').append(HTMLonlineClasses);
    $('h3').css('padding-left',0)
    $('.education-entry').append(formattedCourses);

  }

};

var work = {
  'jobs': [
    {
      'employer': 'Tamkeen Technologies',
      'title': 'Application Developer',
      'location': 'Riyadh',
      'dates': '2013 - present',
      'description': 'Software development on multiple platform web and mobile in native and cross platform.'
    },
    {
      'employer': 'AOU',
      'title': 'Technical Support',
      'location': 'Riyadh',
      'dates': '2012 - 2013',
      'description': 'Help Desk'
    }
  ],
  'display': function() {
    var formattedJobs = "";
    for ( var i=0; i < work['jobs'].length ;i++)
    {
      formattedJobs+= HTMLworkEmployer.replace("%data%",work.jobs[i].employer) +
                      HTMLworkTitle.replace("%data%",work.jobs[i].title) +
                      HTMLworkDates.replace("%data%",work.jobs[i].dates) +
                      HTMLworkLocation.replace("%data%",work.jobs[i].location) +
                      HTMLworkDescription.replace("%data%",work.jobs[i].description);
    }
    $('#workExperience').append(HTMLworkStart);
    $('.work-entry').append(formattedJobs);

  }
};

var projects = {
  'projects':[
    {
      'title': 'Kawader',
      'dates': '2016 - 2017',
      'description': 'Kawader Portal offers companies and employers the opportunity to access a large database containing information on highly skilled expatriate workers that are locally experienced and wish to work for another employer',
      'images': [
        'https://www.kawadir.com.sa/images/aboutus_en1.png',
        'https://www.kawadir.com.sa/images/aboutus_en3.png',
        'https://www.kawadir.com.sa/images/aboutus_en4.png',
      ]
    },
    {
      'title': 'Musaned',
      'dates': '2014 - present',
      'description': 'Musaned is a program initiated by the Ministry of Labor and Social Development to monitor and improve the domestic labor market',
      'images': [
        'http://pic.accessify.com/thumbnails/777x423/m/musaned.gov.sa.png',
        'https://pbs.twimg.com/media/C7mLMuxVQAIQ1p-.png',
      ]
    }
  ],
  'display': function() {
    var formattedProject = "";
    for (var i=0; i < projects.projects.length; i++) {
      formattedProject+= HTMLprojectTitle.replace("%data%",projects.projects[i].title) +
                         HTMLprojectDates.replace("%data%",projects.projects[i].dates) +
                         HTMLprojectDescription.replace("%data%",projects.projects[i].description);
                        for (var x=0; x < projects.projects[i].images.length ; x++) {
                          formattedProject+= HTMLprojectImage.replace("%data%",projects.projects[i].images[x]);
                        }
    }

    $('#projects').append(HTMLprojectStart);
    $('.project-entry').append(formattedProject);
    $('.project-entry img').css('width','20%');
  }
};
bio.display();
work.display();
projects.display();
education.display();
$('#mapDiv').append(googleMap);
$('#footerContacts').append(contacts);
