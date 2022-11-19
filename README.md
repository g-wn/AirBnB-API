<p align="center">
  <a href="https://nocleaningfees.herokuapp.com" target="_blank">
    <img src="https://user-images.githubusercontent.com/98988710/202827332-8c23708f-5e0a-4b86-982f-39b6342c65bf.png" alt="Logo" width="150" height="150">
  </a>

  <h1 style="border-bottom:none" align="center">noCleaningfees</h1>

  <p align="center">
    <a href="https://nocleaningfees.herokuapp.com" target="_blank">- Check out the live site -</a>
  </p>
    <br />
    <br />
    <br />
</p>


## Project Information

<br />

<p>
noCleaningfees is an AirBnB clone where the price you see is the price you pay. There are no additional fees tacked on at final booking, ever! Users can browse through available spots and read reviews to help them decide whether they might be interested in staying there. If they feel so inclined, they can even add a review of their own. (And then change their mind and delete it). If they want to get in on the action, Users can choose to host their own home to try making an extra buck or two.
</p>

<p>(In fact, you can't be charged anything, ever, because this site is fake and these spots are not actually for rent).</p>

<br />

### Built Using:
* [React](https://beta.reactjs.org/)
* [Redux](https://redux.js.org/)
* [Express.js](https://expressjs.com/)
* [Sequelize](https://sequelize.org/)
* [PostgreSQL](https://www.postgresql.org/docs/)
* [Sqlite](https://www.sqlite.org/docs.html)

<br />

## How to Navigate the Site:

<br />

<p>
  All Users can view a list of available spots, and navigate to a separate detail page for any single spot.
</p>

<br />

<h2>PLACEHOLDER FOR SPLASH SCROLL AND NAVIGATE TO SPOT DETAIL</h2>

<br />

<p>
  Users can easily create their own account in order to fully explore the site, or they can simply choose to log-in with any of the provided Demo User accounts.
</p>

<br />

<h2>PLACEHOLD FOR GIF OF LOGIN</h2>

<br/>

<p>
  Logged-in Users can choose to list a new spot to rent on the site.
</p>

<br/>

<h2>PLACEHOLDER FOR GIF OF SPOT CREATION</h2>

<br />

<p>
  Logged-in Users can view a list of their currently hosted spots. From this list they can choose to update or delete their spot.
</p>

<br/>

<h2>PLACEHOLDER FOR GIF OF USER SPOTS LIST</h2>

<br/>

<p>
  Logged-in Users can choose to update information on one of their currently hosted spots.
</p>

<br/>

<h2>PLACEHOLDER FOR GIF OF USER SPOT UPDATE</h2>

<br/>

<p>
  Logged-in Users can view a list of all of the reviews that they have left on other spots. From this list they can choose to delete a review.
</p>

<br/>

<h2>PLACEHOLDER FOR GIF OF USER REVIEWS LIST</h2>

<br/>

<p>
  Logged-in Users can choose to leave a review for any spot from the detail page for that spot.
</p>

<br/>

<h2>PLACEHOLDER FOR GIF OF LEAVING A REVIEW</h2>

<br/>

## Challenges During This Project:
### Live Rendering On Modal and Background

<br />

<p>
  It became difficult to Add and Delete reviews from a modal and have that item be updated in real time in the background beneath the modal.
</p>

<br />

<p>
  To solve this, I adjusted the onClick functions for the addition and deletion of of reviews to trigger a re-render of the background to reflect the newly updated Redux Store. This allowed the review that was being added or deleted to be shown appropriately not only in the currently active modal, but also on the main page rendering in the modal background.
</p>
