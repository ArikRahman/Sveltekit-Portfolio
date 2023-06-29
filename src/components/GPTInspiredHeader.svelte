
<head>
<style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

    body {
    font-family: 'Roboto', sans-serif;
    }
    .header {
    background-color: rgb(80,0,0);
    color: white;
    padding: 10px 0;
    position: fixed;
    top: 0;
    width: 100%;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
    @include transition(all .5s ease);
    
    }
    .header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    max-width: 1000px;
    padding: 0 15px;
    }
    .header .logo {
    flex: 1 1 auto;
    font-size: 1.5em;
    }
    .header .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    }
    .header .nav a {
    color: white;
    margin-left: 100px;
    text-decoration: none;
    
    }
    @media (max-width: 768px) {
    .header .nav {
        
        flex-direction: column;
        align-items: flex-start;
    }
    .header .nav a {
        margin: 5px 50px;
    }
    }
</style>


</head>


<body>
<div class="header">
    <div class="container">
    <div class="logo">
        Arik Rahman
    </div>
    <div class="nav">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/portfolio">Portfolio</a>
        <a href="/contact">Contact</a>
        
    </div>
    </div>
</div>
</body>
