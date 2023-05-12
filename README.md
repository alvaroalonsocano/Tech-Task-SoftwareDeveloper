# Tech-Task-SoftwareDeveloper

Technology stack:
-Angular ^15
-Node ^16/Express ^4.18
-MongoDB (use atlas free tier to ease the task)

1-Create a vehicle's monitoring system that allows admin to post,edit, create and delete different vehicles (cars, trucks and boats). The app will have at least 4 views.

- Login view with Auth0 that allows to create new users, but not admins.
- Main view with a table that shows the vehicles and a paginator. In case that user's is an admin, POST,EDIT and DELETE buttons must been show, but normal user only get vehicle's data.
- Dashboard view. A view with a bar's graph that count how many elements of every vehicle we can find on the database. ONLY Admin must have access to this view.
- Admin/User profile view with just name and role.

2-Create a Node/Express API with GET/POST/PUT/DELETE methods that get the data from a MongoDB.

3-Add testing to the app an the API.

4-Create a README about deployment of the application and the API.

Vehicle data example:

Vehicle = {
  'licensePlate': '57689 LKK',
  'cv': 250,
  'color': 'red'
}

Car extends Vehicle = {
  'extras': ['ABS','Radio']
}

Truck extends Vehicle = {
  'load': 3000
}

Boat extends Vehicle = {
  'model': ENUM = 'Small'
}

