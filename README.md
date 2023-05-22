# Vrishank Viswanath's Porfolio

This is my definitive portfolio website to showcase my projects and skills in a visually appealing manner. The site also functions as a way of showing off my web development skills, as the site was built from scratch with a blank NextJS project.

<!-- ## Technologies Used:

- **Frontend**: React app styled with TailwindCSS and deployed to Firebase
- **Backend**: ExpressJS server hosted on Heroku that pulls headlines from CNN and FOX every hour and saves data to a Firestore DB. Webscraper built with Puppeteer. -->

## Dev Proccess & Challenges:

### Design

I was a bit indecisive on the website's design, but I ultimately went for a simple, minimalistic design with a dark theme to provide visitors with a means of quickly and easily navigate the site. My design heavily takes inspiration from [Vercel's](https://vercel.com/) landing page which engages viewers with high contrasts and beautiful gradients.

### Development

After creating a mockup on figma, it was timw to start coding the site, which I chose to do with with NextJS. I chose Nextjs because of it's built in support for server side rendering and static site generation, which is perfect for a portfolio website. Since I didn't want to meddle with the codebase for every future project I make, I opted to fetch the repo data using Github's API, selecting all of the repositories I belong to. This data is not subject to change too often, so a framework like NextJS that fetches and renders this data on the server and caches it after the user loads the page, as opposed to fetching it from the client on every page load, was aptly suited for this project's needs. That said, this was my first time using a full-fledged React Framework, as I was used to only using React as a single-page application and if needed, connecting it to a separate backend. As a result, I there was a small learning curve of understanding how elements are rendered on the server, as well as when to use server VS client components. After even a few hours of messing around to get a feel for the framework, I was able to get a good grasp of the performance benefits of server side rendering and static site generation, and how to use them to my advantage, and it has given me a new perspective on how to approach web development and an appreciation for the power of React frameworks.

As I've gotten used to doing with web-based project's I used TailwindCSS to style the site, which I've found to be a very powerful and intuitive CSS framework. It has been reliable in allowing me to quickly style web components in a way that keeps them responsive, accessible and cohesive with the rest of the site. This time, in order to add a little complexity in the timing of the animations of certain elements as they enter on screen, I used the [Framer Motion](https://www.framer.com/motion/) library to animate the components. I found it to be very easy to use and it allowed me to add a little more flair to the site.

I additionally added a contact form to my site, so that visitors of my site can contact me without having to leave to their email client. The third-party React hook, [React-Hook-Form](https://react-hook-form.com/), was a life-saver in this regard, as it allowed me to easily create a form with validation and error handling. I also used the [Nodemailer](https://nodemailer.com/) API to send the form data to my email, which was very easy to set up and use. In order to extend the professionalism beyond the site, I used [React Email](https://react.email/) to create a custom html email template to confirm to the visitor that their message was sent successfully.

## Future Plans:

I plan on adding an about section that goes into more detail about me so visitors have a glimpse into me life before getting to meet me and my work. I also plan to add filters to my projects page that allows visitors to filter projects by language, framework, etc. As I discover more captivating UI and interactions, I plan to implement them into my site
