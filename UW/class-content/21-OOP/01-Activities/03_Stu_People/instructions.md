# Model a classroom: create some people

Often times we need to model people in our applications: who they are, what they do and where they live. People take on different roles though. Sometimes people are users. Sometimes they are contacts. Sometimes they are students in a classroom. Let's model a class.

I'm less concerned with the code running, more concerned with thinking through the conceptual model.

In a single .js file:

1) Create a Person super class
2) Create a Teacher class that extends a Person. A teacher has a list of Classrooms, subjects he/she can teach
3) Create a Student class that extends a Person. Students have assignment submissions, attendence record
4) Create a Classroom class that uses Teachers and Students appropriately. Classrooms have assignments, a Teacher, a list of Students, a start date and an end date, a list of scheduled class sessions.

Assume we will need to be able to contact everybody (by email, phone or mail) though the app

Q. What goes in the Person class that needs to be shared Teachers and Students?