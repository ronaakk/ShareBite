# ShareBite

ShareBite is a platform that connects restaurants with local homeless shelters to donate leftover food, reducing waste and supporting the community.

## The problem it solves
In the restaurant and fast food industry, a significant amount of food goes to waste each day simply because it wasn’t sold, as new batches are prepared daily. In the United States alone, around 84.3% of unused food is wasted, only 14% is recycled, and just 1.4% is donated (https://www.fourth.com/article/how-much-food-restaurants-waste). Meanwhile, many cities are facing rising homelessness, overcrowded shelters, and limited resources to support those in need. Our platform provides a solution by connecting restaurants with nearby shelters to help reduce food waste and meet local demand. Restaurants can quickly list their available surplus, while shelters receive real-time updates on nearby donations, allowing both to work together in providing food to the community and making a tangible impact.

## Platform
<img width="932" alt="1" src="https://github.com/user-attachments/assets/582fdb4d-ac94-4471-b1b0-9ef09807f563">
<img width="925" alt="2" src="https://github.com/user-attachments/assets/3d11da17-29e4-4c22-adc8-2e17524c3e90">
<img width="491" alt="3" src="https://github.com/user-attachments/assets/aaad2d5a-2e59-4227-bb06-f90eb15807d7">
<img width="721" alt="4" src="https://github.com/user-attachments/assets/88ad1b67-0fbc-4069-a732-32bc30297409">
<img width="918" alt="5" src="https://github.com/user-attachments/assets/a18291d8-6f4e-4f69-80ee-86947a672bd2">

## Video demo
[![sharebite](http://img.youtube.com/vi/MONdByJx7ys/0.jpg)](https://www.youtube.com/watch?v=MONdByJx7ys)

## Challenges we ran into

- **Authentication Issues**: While implementing a reliable auth proces, we encountered issues with fully logging users out. The session persisted across tabs, causing confusion when users expected a complete logout. After exploring Auth0 forums and documentation, we found a solution by modifying the handleLogout method for our auth routes.

- **Redirect Logic**: Properly redirecting users based on their status in our database was another hurdle. We needed a way to determine if a user was already registered with a restaurant or shelter role, or if they required onboarding entirely. To address this, we implemented middleware on our authentication routes that ran a method to check if a user and their role exists in the database. If setup, they were routed directly to their dashboard. Otherwise, they were directed to an onboarding flow to select the establishment they represented. This middleware setup still needs to be worked on.

- **Varying Time Zones**: Our team, spread across different time zones, managed to coordinate effectively, finding times to meet and discuss features so we could keep the project on track. We’re really proud of how we overcame these logistical challenges and worked together seamlessly despite the distance.

## What's next

There's still a long way for this application to become what we hope for it to be. Some features that will help us get there include:
- **Live Food Availability Updates:** Allow restaurants to update food availability in real-time, so shelters can see exactly what's available and act quickly.
- **Partner with Delivery Services:** Work with local delivery services or gig economy platforms to arrange for food pickup and drop-off, making the process easier for shelters without transportation.
- **Itemized Donation Details:** Allow restaurants to specify details about food items (e.g., type, quantity, dietary restrictions, expiration date).
- **Real-Time Route Optimization:** Provide shelters with optimized routes to reach multiple restaurants efficiently.



## Technologies Used

Next.js, Typescript, React, Tailwind CSS, MongoDB, Auth0, GeoJSON, MapBox API

## Team
- Ronak
- Harsha
- Francis
- Liz
