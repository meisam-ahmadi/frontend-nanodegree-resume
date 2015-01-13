var bio = {
	"name": "Meisam Ahmadi",
	"role": "Web Developer",
	"contacts":{
		"mobile":"---",
		"email":"meisam.ahmadi.1358@gmail.com",
		"github":"meisam-ahmadi"
	},
	"pic":"images/mypic.jpg",
	"welcomeMessage": "سلام",
	"skills": ["awesomeness","HTML","CSS","C#","Github","teamworker"]
};
var work = {
	"Jobs": [
	{
		"employer" :"ANZ",
		"title" : "Sales and Support Manager",
		"dates" : "Jun 2010 - now",
		"description" : "managing"
	},
	{
		"employer" :"Albalo Graphic",
		"title" : "CEO",
		"dates" : "Jul 2006 - Jan 2008",
		"description" : "managing"
	},
	{
		"employer" :"Falegh San'at",
		"title" : "Mechanical Engineer",
		"dates" : "Jun 2003 - Jul 2006",
		"description" : "Mechanical ENgineer"
	}]
};
	
var education = {
	"schools" : [
		{
			"name":"Sharif Unversity",
			"city":"Tehran",
			"degree" : "MBA",
			"major" : ["Management","Finance"],
			"years" : 2010,
			"city" : ["Tehran"]
		},
		{
			"name":"Sharif Unversity",
			"city":"Tehran",
			"degree" : "MS",
			"major" : ["Mechanical Engineering", "Fluid Mechanic"],
			"years" : 2003,
			"city" : ["Tehran"]
		} 
	
	],
	"onlineCourses" : [
	{
		"title" : "Intoduction to JavaScript",
		"School" : "Udacity",
		"dates" : 2014,
		"url" : "https://www.udacity.com/course/ud804"
	}]
};
var projects = {
	"projects" : [
	{
		"title":"Sample",
		"dates" : 2014,
		"description" : "No Description",
		"images" : [
			"http://placekitten.com/g/200/200",
			"http://placekitten.com/g/300/300"
		]
	}]
};
//436

var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
$("#header").prepend(formattedRole);
var formattedName = HTMLheaderName.replace("%data%",bio.name);
$("#header").prepend(formattedName);
var formattedPic = HTMLbioPic.replace("%data%",bio.pic);
$("#header").prepend(formattedPic);
if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart),
   for( i = 0; i <bio.skills.length;i++){
     var formattedSkills = HTMLskills.replace("%data%",bio.skills[i]);
     $("#
     }
  
};