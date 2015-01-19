var bio = {
	"name" : "Matt Cox",
	"role" : "Lawyer, Web-Developer, Student of the Brain",
	"contact" : {
		"email" : "cox.matthew.765@gmail.com",
		"mobile" : "(765) 702-7627",
		"twitter" : "@mattstweetself",
		"github" : "coxmatthew",
		"location" : "Orange, CA"
	},
	"welcomeMessage" : "Hello there",
	"skills" : ["Legal Analysis", "Web Development", "Problem Sovling"],
	"biopic" : "images/fry.jpg",
}


bio.display = function() {
	
	

	var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
	$('#header').prepend(formattedRole);

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$('#header').prepend(formattedName);

	var formattedEmail = HTMLemail.replace('%data%', bio.contact.email);
	$('#topContacts').prepend(formattedEmail);

	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contact.twitter);
	$('#topContacts').append(formattedTwitter);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contact.mobile);
	$('#topContacts').append(formattedMobile);

	var formattedLocation = HTMLlocation.replace("%data%", bio.contact.location);
	$('#topContacts').append(formattedLocation);

	var formattedPic = HTMLbioPic.replace('%data%', bio.biopic);
	$('#header').append(formattedPic);

	var formattedWelcomeMessage = HTMLWelcomeMsg.replace('%data%', bio.welcomeMessage);
	$('#header').append(formattedWelcomeMessage); 

	$('#header').append(HTMLskillsStart);
	for(skill in bio.skills){
		var formattedSkill = HTMLskills.replace('%data%', bio.skills[skill]);
		$('#skills').append(formattedSkill); 
	}

}

bio.display();

var education = {
	"schools" : [
		{
			"name" : "Ball State University",
			"location" : "Muncie, IN, US",
			"degree" : "Transferred",
			"date"	: "May 2010",
			"major" : ["Biochemistry, Premedicine"]
		},
		{
			"name" : "Indiana University",
			"location" : "Bloomington, IN, US",
			"degree" : "BS",
			"date" : "May 2012",
			"major" : ["Neuroscience"]
		},
		{
			"name" : "Fowler School of Law at Chapman University",
			"location" : "Orange, CA",
			"degree" : "JD",
			"date" : "May 2015",
			"major" : ["Law", " Advocacy and Dispute Resolution"]
		}
	],
	
	"onlineCourses" : [	
		{
			"title" : "Intro to HTML/CSS",
			"school" : "Udacity",
			"date" : "12/08/2014",
			"url" : "https://www.udacity.com/verified-certificate/ud304"
		},
		{
			"title" : "Intro to JavaScript",
			"school" : "Udacity",
			"date" : "1/19/2015",
			"url" : "text"
		}
	]
}

education.display = function() {
	for(school in education.schools){
		$("#education").append(HTMLschoolStart); 

		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name); 
		$(".education-entry:last").append(formattedSchoolName);

		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedSchoolLocation);

		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].date);
		$(".education-entry:last").append(formattedSchoolDates);

		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);

		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		
		var fullSchoolDegree = formattedSchoolMajor + formattedSchoolDegree
		$(".education-entry:last").append(fullSchoolDegree);
	};


	$('#education').append(HTMLonlineClasses);

	for (course in education.onlineCourses){

		$('#education').append(HTMLschoolStart);

		var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[course].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[course].school);
		var formattedSchoolTitle = formattedOnlineTitle + formattedOnlineSchool;
		$('.education-entry:last').append(formattedSchoolTitle);

		var formattedOnlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[course].date);
		$('.education-entry:last').append(formattedOnlineDates);

		var formattedOnlineURL = HTMLonlineURL.replace('%data%', education.onlineCourses[course].url);
		$('.education-entry:last').append(formattedOnlineURL)

	}

}

education.display();

var work = {
	"jobs" : [
		{
			"employer" : "Miles, Bauer, Bergstrom, and Winters, LLP",
			"title" : "Legal Assistant",
			"location" : "Santa Ana, CA, USA",
			"date" : "September 2013 - September 2014",
			"description" : "Compliance reserach, draft legal documents, contact clients, research civil issues, write for trade magazine"
		},
		{
			"employer" : "Chapman University School of Law: Freidman Research",
			"title" : "Research Assistant",
			"location" : "Orange, CA, USA", 
			"date" : "May 2013 - May 2014",
			"description" : "Researched recent appllate court holdings on commercial leasing to update the Freidman on Leases Treatise"
		}
	],

	"clinics" : [
		{
			"name" : "Mediation Clinic",
			"description" : "Mediate civil matters for Riverside County Superior Court"
		},
		{
			"name" : "Alona Cortese Elder Law Clinic",
			"description" : "Assist low-income clients with end-of-life and conservatorsip matters"
		}
	]
}

work.display = function() {
	for(job in work.jobs){
		$("#workExperience").append(HTMLworkStart);  //For each job this appends the HTMLworkStart 
		//object to the workExperience section, found in the html code

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer); //Notice this uses the 
		//iterator job as the index for our variable. This means that each time the for-in loop encounters an object
		//[job] in the work.jobs array, it will insert that object into this place holder

		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].date);
		$(".work-entry:last").append(formattedWorkDates);

		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedWorkLocation);

		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedWorkDescription);
		//.work-entry: last = in jQuery we are selecting every
		//object with a class "work-entry". We know we want a class because of the dot in front. The last portion tells
		//us that we want to append after the last element with a class work-entry.
	};
}

work.display();

var projects = {
	"projects" : [
		{
			"title" : "Web-Development Portfolio",
			"date" 	: "December 2014",
			"description" : "Built self portfolio to learn web development skills",
			"images" : 0
		},
		{
			"title" : "Phone to Telescope Mount",
			"date" : "January 2014",
			"description" : "Made a mount to use phone as camera and screen to look through telescope lens",
			"iamges" : 0
		}
	]
}

projects.display = function() {
	$("#projects").append(HTMLprojectStart); 
	//HTMLprojectStart creates an element with the class "project-entry" so we can grab this class and append info to
	for (project in projects.projects){
		
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].date);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}

	}
}

projects.display();
















/*
if (bio.skills > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkills);

	var formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkills);

	var formattedSkills = HTMLskills.replace("%data%", bio.skills[2])
	$("#skills").append(formattedSkills);

};

for(var i = 0; i < 9; i++){
	console.log(i);
};
*/



$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});


function locationizer(work_obj) {
    locsArray = [];
    for (var job in work_obj.jobs){
      locsArray.push(work_obj.jobs[job].location);
    }
    return locsArray 
}    

// Did locationizer() work? This line will tell you!
console.log(locationizer(work));


$("#main").append(internationalizeButton)

function inName(oldName) {
    var finalName = oldName;
    var names = oldName.trim().split(" ");  //trim removes white space before and after the name. if there is white space the function will not sort the contents properly
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    return finalName;
}







$("#mapDiv").append(googleMap);