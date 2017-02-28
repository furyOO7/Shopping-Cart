var Product=require("../models/product");

var mongoose=require("mongoose");
mongoose.connect("localhost:27017/shopping");
 
 var products=[
	 new Product({
	 	imagepath:"https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png",
	 	title: "Gothic",
	 	description: "Awesome game!!!",
	 	price:10
	 }),
	  new Product({
	 	imagepath:"http://gameway.com.ua/wp-content/uploads/2012/10/dishonored_video_game-wallpaper.jpg",
	 	title: "Dischonered",
	 	description: "Awesome game!!!",
	 	price:20
	 }), 
	  new Product({
	 	imagepath:"http://3.bp.blogspot.com/-ynQYPW8OCCg/UXtD1nF8r6I/AAAAAAAAtLw/XRFvX8nqWwo/s1600/Game+HD+Wallpaper+(10).jpg",
	 	title: "IGI!!",
	 	description: "Awesome game!!!",
	 	price:30
	 }),
	 new Product({
	 	imagepath:"http://laliko.com/uploads/posts/2013-01/1357658219_planetside_2-1600x900.jpg",
	 	title: "PlanetSide",
	 	description: "Awesome game!!!",
	 	price:40
	 }),
	 new Product({
	 	imagepath:"http://www.glitters20.com/quotes/wp-content/uploads/2012/12/Games-271.jpg",
	 	title: "NFS",
	 	description: "Awesome game!!!",
	 	price:50
	 }),
	 new Product({
	 	imagepath:"http://wordpress.applicamos.com/wp-content/uploads/2014/09/destiny.jpg",
	 	title: "Destiny",
	 	description: "Awesome game!!!",
	 	price:60
	 })
 ];
 var done=0;
for (var i = 0; i < products.length; i++){
	products[i].save(function (err, result){
		done++;
		if(done===products.length){
			exit();
		}
	});
}
function exit(){
	mongoose.disconnect();
}