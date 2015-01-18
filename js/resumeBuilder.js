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
	"skills" : "Legal Analysis, Computers, Brains",
	"biopic" : "images/fry.jpg",
	/*"display" : FUNCTION*/
}

var education = {
	"schools" : [
		{
			"name" : "Ball State University",
			"city" : "Muncie, IN, US",
			"degree" : "None",
			"major" : ["Biochemistry, Premedicine"]
		},
		{
			"name" : "Indiana University",
			"city" : "Bloomington, IN, US",
			"degree" : "BS",
			"major" : ["Neuroscience"]
		},
		{
			"name" : "Fowler School of Law at Chapman University",
			"city" : "Orange, CA",
			"degree" : "JD",
			"major" : ["Law", "Advocacy and Dispute Resolution"]
		}
	],
	
	"online courses" : [	
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
	/*"display" : FUNCTION*/
}

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

/*var projects = {
	"projects" : [
		{
			"title" : "Web-Development Portfolio",
			"date" 	: "December 2014",
			"description" : "Built self portfolio to learn web development skills",
			"images" : ""
		},
		{
			"title" : "Phone to Telescope Mount",
			"date" : "January 2014",
			"description" : "Made a mount to use phone as camera and screen to look through telescope lens",
			"iamges" : ""
		}
	}
*/

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

var name = "Matt Cox";
var formattedName = 
	HTMLheaderName.replace("%data%", name);

var role = "Lawyer, Web-Developer";
var formattedRole = 
	HTMLheaderRole.replace("%data%", role);

//$("#header").prepend(formattedName, formattedRole);


var formattedPic = 
	HTMLbioPic.replace("%data%", bio.biopic);
var formattedSkills =
	HTMLskills.replace("%data%", bio.skills);
var formattedEmail =
	HTMLemail.replace("%data%", bio.contact.email);
var formattedTwitter = 
	HTMLtwitter.replace("%data%", bio.contact.twitter);
var formattedMobile =
	HTMLmobile.replace("%data%", bio.contact.mobile);
var formattedLocation = 
	HTMLlocation.replace("%data%", bio.contact.location)


$("#header").append(formattedName, formattedRole, formattedPic);
$("#header").append(HTMLskillsStart, formattedSkills);
$("#header").append(formattedEmail, formattedTwitter, formattedMobile, formattedLocation);



function displayWork(){
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

displayWork();

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

$("#mapDiv").append(googleMap);