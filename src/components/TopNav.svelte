<div class="navbar">
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/cv">CV</a>
    <a href="/contact">Contact</a>
    
</div> 


<style>
* {box-sizing: border-box}
body {font-family: Arial, Helvetica, sans-serif;}

.navbar {
    width: 100%;
    background-color: rgb(80,0,0);
    overflow: auto;
    position:sticky;
    top:0
}

.navbar a {
    position:sticky;
    float: left;
    padding: 12px;
    color: white;
    text-decoration: none;
    font-size: 17px;
    width: 25%; /* Four links of equal widths */
    text-align: center;
}

.navbar a:hover {
    position:sticky;
    background-color: rgb(120,0,0);
}

.navbar a.active {
    position:sticky;
    background-color: rgb(80, 0, 0);
}

@media screen and (max-width: 500px) {
    .navbar a {
    float: none;
    display: block;
    width: 100%;
    text-align: left;
    position:sticky;
    }
}
</style>
