# StoryGen

# What is it?

Story Gen was created as an individual project designed to show off what I had learnt in my first eight weeks of training with QA Consulting. It is a RESTful API designed as a tool to help create writing prompts in different genres.

When running, simply click generate random to have a story generated for you. You can toggle which genre you would like the story to be in.

# What else can it do?

The API was required to have full CRUD functionality. By going to another tab you can view any word stored, add your own, change a word’s genre. To prevent database being destroyed, you must be a logged in user to do anything except read entries.

# What technologies were used to make it?

The API was made with a Java EE back end connected to a H2 in memory database. The front end was made using React. The back end was thoroughly tested using Junit and Mockito.

# To run:

1. Clone repo.
2. Open command line/powershell.
3. Type mvn clean install
4. Move war file to Wildfly deployment folder. Run wildfly.
5. Return to project folder.
6. Npm update
7. Npm start
8. Go to localhost:3000/

# Future for the project?

Very involved, isn’t it? The project was briefly hosted on a GCP VM and therefore accessible with a link. However, the VM is currently shut down and is unlikely to be restarted.

If I ever return to this project, I would change it to run with Spring and have an actual SQL database or have a downloadable version that a user that destroy to their heart’s content.
