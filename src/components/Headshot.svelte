<img src={url}>
{#each Array(1) as _, index (index)}
    <img src= {url} alt="Mountains etc"> 
    {/each}
<style>
    img {
    max-width: 100%;
    height: auto;
    display: block;
    margin-left: 1.5%;
    /* margin-right: auto; */
    margin-top:5%;
    margin-bottom: 10%;
    width: 30%;
    /* position:fixed; */
}
@media (max-width: 768px) {
    img{
        
        margin-top:28%;
    }
}
</style>

<script>
    let url = "https://media.licdn.com/dms/image/D5603AQGQCffHl8shGQ/profile-displayphoto-shrink_800_800/0/1683310419377?e=1693440000&v=beta&t=07_hwdI2xn2--0Mgx7zV2ininJ2YYwRK3cEOwH4ODgg" 
</script>