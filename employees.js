"use strict";
$(document).ready(function () {
	var container = $('#container');

	var empArr = [];

	function Employee () {
		this.firstName = "";
		this.lastName = "";
	}

	//-----Clinical Employees
	function Clinician () {
		this.expertise = "";
	}

	Clinician.prototype = new Employee();

	// employee 1
	var bobSmith = new Clinician();
	bobSmith.firstName = "Bob";
	bobSmith.lastName = "Smith";
	bobSmith.expertise = "Anesthesiologist";

	// employee 2
	var tomKruze = new Clinician();
	tomKruze.firstName = "Tom";
	tomKruze.lastName = "Kruze";
	tomKruze.expertise = "Doctor of Crazy";
	
	
	//-----Ops Employees
	function Ops () {
		this.responsibility = "";
	}

	Ops.prototype = new Employee();

	// employee 3
	var carolChanning = new Ops();
	carolChanning.firstName = "Carol";
	carolChanning.lastName = "Channing";
	carolChanning.responsibility = "Accounts Payable";
	
	// employee 4
	var marshaPerson = new Ops();
	marshaPerson.firstName = "Marsha";
	marshaPerson.lastName = "Person";
	marshaPerson.responsibility = "Human Resources";


	//====================
	//=====DEPARTMENTS====
	//====================

	// clinician or ops
	function Department () {
			this.deptName = "";
		}

	function FieldOffice () {
		this.uniqueCity = "";
	}

	FieldOffice.prototype = new Department();

	function Headquarters () {
		this.hQ = "Headquarters";
	}

	Headquarters.prototype = new Department();

	// emp 1
	bobSmith.workplace = new FieldOffice();
	bobSmith.workplace.deptName = "Clinician";
	bobSmith.workplace.uniqueCity = "Boston Field Office";
	empArr.push(bobSmith);

	//emp 2
	tomKruze.workplace = new Headquarters();
	tomKruze.workplace.deptName = "Clinician";
	empArr.push(tomKruze);
	// location is "Headquarters"

	//emp 3 
	carolChanning.workplace = new Headquarters();
	carolChanning.workplace.deptName = "Operations";
	carolChanning.workplace.hq;
	empArr.push(carolChanning);
	// location is "Headquarters"

	//emp 4
	marshaPerson.workplace = new FieldOffice();
	marshaPerson.workplace.deptName = "Operations";
	marshaPerson.workplace.uniqueCity = "Atlanta Field Office";
	empArr.push(marshaPerson);

	container.html (`
		<h3>${tomKruze.firstName} ${tomKruze.lastName} works as a ${tomKruze.workplace.deptName} at the ${tomKruze.workplace.hQ}, and is a ${tomKruze.expertise}.</h3>
		<h3>${bobSmith.firstName} ${bobSmith.lastName} works as a ${bobSmith.workplace.deptName} at the ${bobSmith.workplace.uniqueCity}, and is a ${bobSmith.expertise}.</h3>
		<h3>${carolChanning.firstName} ${carolChanning.lastName} works in ${carolChanning.workplace.deptName} at the ${carolChanning.workplace.hQ}, and is a ${carolChanning.responsibility} team member.</h3>
		<h3>${marshaPerson.firstName} ${marshaPerson.lastName} works in ${marshaPerson.workplace.deptName} at the ${marshaPerson.workplace.uniqueCity}, and is a ${marshaPerson.responsibility} team member.</h3>
		`); 
}); // END OF JQUERY READY FUNCTION





