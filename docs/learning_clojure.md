# Learning Clojure

[Clojure](https://clojure.org/) is a dialect of Lisp that has [interop with Java](https://clojure.org/reference/java_interop)

Let's a build a simple Clojure app that has text, images, and communicates with a web service.

We'll start with creating Heroku's sample ["hello world" Clojure project](https://devcenter.heroku.com/articles/getting-started-with-clojure) which also has an incredibly easy deployment strategy.

This Heroku project uses leiningen, [compojure](https://github.com/weavejester/compojure) and [ring](https://github.com/ring-clojure/ring).

```
$ git clone https://github.com/heroku/clojure-getting-started.git
$ cd clojure-getting-started
$ lein repl
user=>(require 'clojure-getting-started.web)
user=>(def server (clojure-getting-started.web/-main))
user=>(use 'clojure-getting-started.web :reload)
```
Your app should now be running on [localhost:5000](http://localhost:5000/).

Now you can deploy the hello world to Heroku. You can either do control-d to stop the REPL or open a new tab to the same directory:

```
$ heroku login
$ heroku create
$ git add -A
$ git commit -m "clojure sweet clojure"
$ git push heroku master
$ heroku open
```

So I can see "hello world" - nice! - but how do I [add static resources like css and images](https://nelsonmorris.net/2015/06/01/how-does-serving-html-css-and-javascript-fit-in-a-clojure-web-app.html)?

You can also view your logs which are a "stream of time-ordered events aggregated from the output streams of all your app and Heroku components, providing a single channel for all of the events"

```
heroku logs --tail
```

## tutorials
* [REPL first learning](https://kimh.github.io/clojure-by-example/#about)
* [Clojure web apps: Zero to 'Hello World' on Heroku in Clojure in 15 minutes.](https://adambard.com/blog/Getting-started-with-Clojure-web-apps/)
* [{:4clojure problems}](http://www.4clojure.com/)
* [{:4clojure ansnwers}](https://github.com/qiuxiafei/4clojure/tree/master/answers)
* [Compojure Address Book Part 1](http://www.jarrodctaylor.com/posts/Compojure-Address-Book-Part-1/)
* [Clojure Collections](https://purelyfunctional.tv/guide/clojure-collections)
* [Learn X in Y minutes where X = Clojure](https://learnxinyminutes.com/docs/clojure/)

## Compojure
* [how do I add images?](https://stackoverflow.com/questions/7836030/compojure-access-filesystem) 

## clojurians
* [beginners](https://clojurians-log.clojureverse.org/beginners/2017-11-01)

## Podcasts
* [lispcast](https://lispcast.com/)
* [cognitect](http://blog.cognitect.com/cognicast/)
* [workflow with Stuart Sierra](http://thinkrelevance.com/blog/2013/05/29/stuart-sierra-episode-032)

## RSS
* [elfeed-cljsrn](https://github.com/areina/elfeed-cljsrn)

## Books
* [Clojure for the Brave and True](https://www.braveclojure.com/clojure-for-the-brave-and-true/)

## Creator of Clojure
* [Rich Hickey](https://www.infoq.com/profile/Rich-Hickey)
