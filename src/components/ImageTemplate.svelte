
<button on:click={handleClick}> Click me </button>
<button on:click={handleClick2}> Click me </button>
<div>
    <p>Here are  {amt} 4k quality wallpapers of {type} </p>
    {#each Array(amt) as _, index (index)}
    <img src= {url} alt="Mountains etc"> 
    {/each}

</div>

<style>
    img {
    max-width: 100%;
    height: auto;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
}
</style>

<script>
    var url = "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg"
    var type = "mountains"
    
    let amt = 100
    function handleClick() {
        url = "https://images.pexels.com/photos/1485894/pexels-photo-1485894.jpeg?cs=srgb&dl=pexels-mohamed-almari-1485894.jpg"
        // url = url
    //   alert(amt+" 4k images coming right up!");
        type = "bridges"
    }
    function handleClick2() {
        url = "https://images.pexels.com/photos/592077/pexels-photo-592077.jpeg?cs=srgb&dl=pexels-katja-592077.jpg"
        // url = url
        type = "mountains"
    //   alert(amt+" 4k images coming right up!");
    }
</script>
