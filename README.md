# Blackstar

https://blackstar05.netlify.com/

<img src="https://i.imgur.com/jXBBk80.png" width="100%">

This is a group assignment completed by a team of Computer Graphic Designers, Digital Designers and Web Developers from Yrgo. first assignment I completed which combines PHP, HTML, CSS and SQLite. It is a news feed consisting of 10 fake news articles. 

## About This Project
There are two versions of this project; `index.php` and `indexSQL.php`.
* `index.php` is the main project document. With every reload of this file in the browser, each of the 10 news articles are constructed by randomly selecting an author (name & corresponding portrait), published date, as well as the number of likes & dislikes from larger datasets. Furthermore, the articles are always presented with the most recently written at the top of the news feed (even if they were publications from the future!). All of the authors who pop up in the feed (except one!) are students who studied with me in the Webbutvecklare course at YRGO, Lindholmen in 2019.
* `indexSQL.php` is an extra exercise as part of the assignment. It renders the same webpage as `index.php`, however the project data is read in from a SQLite database, and hence doesn't include the random features that were originally built into `index.php`. Enjoy!

## Download
* Clone the repository using `git clone https://github.com/AltDom/wu19-fakenews.git` in your chosen bash terminal.
* Enter the project folder using the command `cd project/`.
* Run the project using the command `php index.php`.
* Create a local server using the command `php -S localhost:8000`.
* Open your browser of choice and go to the url `localhost:8000`.
* Enjoy ...and remember to keep reloading the page!

## Testers
* Camilla Kylmänen Sjörén
* Alexander Gustafsson Flink
* Karl-Johan Lundholm

## License
This assignment is licensed under the MIT License. You can get all the details [here](https://github.com/AltDom/wu19-fakenews/blob/master/LICENSE). 