var work = {
    'jobs': [{
            'employer': 'Charles Schwab',
            'title': 'Database Developer',
            'location': 'San Francisco, CA',
            'dates': '2011',
            'description': 'Performed physical and logical data modeling,' +
                'provide support, analysis, changes and '  +
                'occasional production support'
        },

        {
            'employer':'Wells Fargo',
            'title': "Database Engineer",
            'location': 'San Francisco, CA',
            'dates': '2010-2011',
            'description': 'Worked on a Conversion project to reformat data from a ' +
                'newly acquired bank to comply with current business' +
                'rules and display correctly in applications for' +
                'business analysis'
        },

        {
            'employer': 'Gracenote',
            'title': 'Database Engineer',
            'location': 'Emeryville, CA',
            'dates': '2009',
            'description': 'Created code as part of a project to properly receive' +
                'classical works information from user submissions'
        },

        {
            'employer': 'RealNetworks',
            'title': 'Database Developer',
            'location': 'San Francisco, CA',
            'dates': '2009',
            'description': 'Worked on a project to internationalize the music ' +
                'ingestion/encoding/catalog process'
        }
    ]
};

work.display = function() {

    var job;
    var data = "%data%";

     for (var i = 0; i < work.jobs.length; i++){
     	$("#workExperience").append(HTMLworkStart);
     	var formattedWorkEmployer = HTMLworkEmployer.replace(data, work.jobs[i].employer);
     	var formattedWorkTitle = HTMLworkTitle.replace(data, work.jobs[i].title);
     	var formattedEmployerTitle = formattedWorkEmployer.concat(formattedWorkTitle);
     	var formattedWorkLocation = HTMLworkLocation.replace(data, work.jobs[i].location);
     	var formattedWorkDates = HTMLworkDates.replace(data, work.jobs[i].dates);
         var formattedWorkDesc = HTMLworkDescription.replace(data, work.jobs[i].description);
     	$('.work-entry:last').append(formattedEmployerTitle);
     	$('.work-entry:last').append(formattedWorkLocation.concat(formattedWorkDates).concat(formattedWorkDesc));

     }
};
work.display();

var project = {
    'projects': [{
			        'title': 'GetThere App',
			        'dates': '2015',
			        'description': 'Display current and/or ongoing events in preferred categories '+
			        				'(i.e. conventions, fitness) that are occurring in the city and '+
			        				'state of the user\'s choice, and during a particular calendar date '+
			        				'or between a set of dates.',
            		'images': ['images/map.png','images/janis.png']
    		   },{
			        'title': 'Food-Shelter App',
			        'dates': '2015',
			        'description': 'provide someone with locations of establishments that are currently '+
			        			  'open and provide a low-to-no-barrier entry in acquiring nourishment '+
			        			   'and/or shelter, based on either their current location or their '+
			        			   'district. These locations will immediately include the name, address, '+
			        			    'walking distance, approximate time left before closing and phone number',
			        'images': ['images/app.png','images/breadline.png']
               },{
			        'title': 'Google Map Vine Integration Project',
			        'dates': '2015',
			        'description': 'Find a way to integrate Vine routes into Google Map calculations',
			            'images': ["images/vine.png","images/bus.png"]
              }]
};

project.display = function() {
    var data = "%data%";
    var i;
             for (i = 0; i < project.projects.length; i++) {
    	    var formattedProjectTitle = HTMLprojectTitle.replace(
            data, project.projects[i].title);
            var formattedProjectDates = HTMLprojectDates.replace(
            data, project.projects[i].dates);
            var formattedProjectDesc = HTMLprojectDescription.replace(
             data, project.projects[i].description);

            $('#projects').append(HTMLprojectStart);
            $('.project-entry:last').append(formattedProjectTitle);
            $('.project-entry:last').append(formattedProjectDates);
            $('.project-entry:last').append(formattedProjectDesc);

            project.projects[i].images.forEach(function(val) {
            		var formattedProjectImage = HTMLprojectImage.replace(
            			data,val);
            		$('.project-entry:last').append(formattedProjectImage);
            });  		
    }
};

project.display();


var bio = {
    'name': 'Dana Bienenfeld',
    'role': 'Web Developer, INFJ',
    'contacts': {
        'mobile': '987-654-3210',
        'email': 'example@gmail.com',
        'github': 'danabase',
        'twitter': '@_DanaBase_',
        'location': 'SF'
    },
    'welcomeMessage': 'With every step / I chart out the starry path / of my destiny',
    'skills': ['HTML', 'CSS', 'JavaScript', 'jQuery', 'JSON', 'Node', 'grunt',
        'Ruby', 'Rails', 'Google Maps API', 'Github'
    ],
    'biopic': 'images/korra.png'
};

bio.display = function() {
    var $header = $('#header');
    var $topContacts = $('#topContacts');
    var $footerContacts = $('#footerContacts');
    var data = "%data%";
    var formattedBioName = HTMLheaderName.replace(data, bio.name)
    var formattedBioRole = HTMLheaderRole.replace(data, bio.role)
    var formattedBiolocation = HTMLlocation.replace(data, bio.contacts.location)
    var formattedBioTwitter = HTMLtwitter.replace(data, bio.contacts.twitter)
    var formattedBioGithub = HTMLgithub.replace(data, bio.contacts.github)
    var formattedBioEmail = HTMLemail.replace(data, bio.contacts.email)
    var formattedBioMobile = HTMLmobile.replace(data, bio.contacts.mobile)
    var formattedBioMessage =  HTMLwelcomeMsg.replace(data, bio.welcomeMessage)
    var formattedBioPic = HTMLbioPic.replace(data,bio.biopic);

    var formattedFooterMobile = HTMLfooterMobile.replace(data, bio.contacts.mobile);
	var formattedFooterEmail = HTMLfooterEmail.replace(data, bio.contacts.email);
	var formattedFooterGithub = HTMLfooterGithub.replace(data, bio.contacts.github);
	var formattedFooterTwitter = HTMLfooterTwitter.replace(data, bio.contacts.twitter);
	var formattedFooterLocation = HTMLfooterLocation.replace(data, bio.contacts.location);
	$footerContacts.append(formattedFooterMobile);
	$footerContacts.append(formattedFooterEmail);
	$footerContacts.append(formattedFooterGithub);
	$footerContacts.append(formattedFooterTwitter);
	$footerContacts.append(formattedFooterLocation);
    $header.prepend(formattedBioRole);
    $header.prepend(formattedBioName);
    $topContacts.prepend(formattedBioMessage);
    $topContacts.prepend(formattedBiolocation);
    $topContacts.prepend(formattedBioTwitter);
    $topContacts.prepend(formattedBioGithub);
    $topContacts.prepend(formattedBioEmail);
    $topContacts.prepend(formattedBioMobile);

    $header.append(HTMLskillsStart);
    $header.append(formattedBioPic);

    var i = 0;
    var skill;

    bio.skills.forEach(function(val) {
    	var formattedSkill = HTMLskills.replace(data, val);
    	if ((Math.abs(i % 2) == 1)) {
            formattedSkill = formattedSkill.replace("white-text", "green-text");
        }
        $("#skills").append(formattedSkill);
        i++;
    });
};

bio.display();

var education = {
    'schools': [{
        'name': 'AcademyX',
        'location': 'San Francisco, CA',
        'degree': 'Rails Developer',
        'majors': ['Rails','Ruby','AJAX','MongoDB'],
        'dates': 2015,
        'url': 'http://www.academyx.com/'
    }, {
        'name': 'College of Creative Studies, University of California, Santa Barbara',
        'location': 'Santa Barbara, California',
        'degree': 'Bachelors of Arts',
        'majors': ['Music Composition','Musica'],
        'dates': 2007,
        'url': 'https://www.ccs.ucsb.edu/'
    }],

    'onlineCourses': [{
       'title': 'Front-End Web Developer Nanodegree',
       'school': 'Udacity',
       'date': 2016,
       'url': 'https://www.udacity.com'
    }]

};

education.display = function() {
    var ed;
    var data = "%data%";
    for (ed in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace(data, education.schools[ed].name);
        var formattedSchoolLoc = HTMLschoolLocation.replace(data, education.schools[ed].location);
        var formattedSchoolDegree = HTMLschoolDegree.replace(data, education.schools[ed].degree);
        var formattedSchoolMajor = HTMLschoolMajor.replace(data, education.schools[ed].majors);
        var formattedSchoolDates = HTMLschoolDates.replace(data, education.schools[ed].dates);
        var formattedSchoolURL = HTMLschoolURL.replace(data, education.schools[ed].url);
        $('.education-entry:last').append(formattedSchoolName);
        $('.education-entry:last').append(formattedSchoolLoc);
        $('.education-entry:last').append(formattedSchoolDegree);
        $('.education-entry:last').append(formattedSchoolMajor);
        $('.education-entry:last').append(formattedSchoolDates);
        $('.education-entry:last').append(formattedSchoolURL);
    }
    $("#education").append(HTMLonlineClasses);
    var online;
    for (online in education.onlineCourses) {
        $("#education").append(HTMLonlineStart);
        var formattedOnlineTitle = HTMLonlineTitle.replace(data, education.onlineCourses[online].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace(data, education.onlineCourses[online].school);
        var formattedOnlineDate = HTMLonlineDate.replace(data, education.onlineCourses[online].date);
        var formattedOnlineURL = HTMLonlineURL.replace(data, education.onlineCourses[online].url);
        $('.online-entry:last').append(formattedOnlineTitle);   
        $('.online-entry:last').append(formattedOnlineSchool);
        $('.online-entry:last').append(formattedOnlineDate);
        $('.online-entry:last').append(formattedOnlineURL);
    }
};

education.display();
$("#mapDiv").append(googleMap);