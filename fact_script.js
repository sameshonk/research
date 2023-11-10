const funFacts = [
	"Linux is a popular choice for governments and space agencies due to its security and reliability",
	"The chrome operating system that our school cromebooks run are based on the linux kernel",
	"The International Space Station and the Mars Rover both use Linux-based systems",
	"Tux the penguin is the official mascot of Linux, chosen by Linus Torvalds, the creator of Linux, because penguins are cute and don't have much to do with operating systems.",
	"The Linux kernel, the core of the Linux operating system, was initially released by Linus Torvalds in 1991 when he was just a student at the University of Helsinki.",
	"Android, the popular mobile operating system, is based on the Linux kernel. This means that Android devices are, in essence, running a version of Linux.",
	"The ARPANET, the precursor to the modern internet, was developed in the late 1960s and early 1970s by the U.S. Department of Defense's Advanced Research Projects Agency (ARPA), which is where the term 'ARPANET' comes from.",
	"The first email was sent over the ARPANET in 1971 by Ray Tomlinson. He used the '@' symbol to separate the user's name from the computer they were using.",
	"The World Wide Web (WWW) was created in 1989 by British computer scientist Tim Berners-Lee while working at CERN in Switzerland. The first website went live in 1991.",
	"The C programming language was created by Dennis Ritchie at Bell Labs in the early 1970s. It evolved from the B programming language, which was developed by Ken Thompson.",
	"The tradition of using 'Hello, World!' dates back to the book 'The C Programming Language' by Brian Kernighan and Dennis Ritchie, which introduced C to a wider audience.",
	"C is considered a 'low-level' programming language because it provides a high level of control over hardware and memory. This makes it suitable for systems programming and developing operating systems.",
	"Open-source projects like Linux showcase global collaboration, with developers worldwide working together to create and enhance software.",
	"There are over 1.8 billion websites on the internet, highlighting its vastness. It would take over 57 years to visit each one at a rate of one per second.",
];	

document.addEventListener("DOMContentLoaded", function() {
	const funFactContainer = document.getElementById("funfactcontainer");
	const funFactElement = document.getElementById("funfact");

	// Generate a random index to select a fun fact
	const randomIndex = Math.floor(Math.random() * funFacts.length);

	// Display the randomly selected fun fact
	funFactElement.textContent = funFacts[randomIndex];
});