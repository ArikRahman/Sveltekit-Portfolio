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
    let url = "https://media.licdn.com/dms/image/D5603AQEtPAFBt42ajA/profile-displayphoto-shrink_200_200/0/1708056541133?e=1715212800&v=beta&t=zEdGcaawcUfdj1ivmW3MKeofFsSMdSL5zUDXsDsAqpw" 
</script>
