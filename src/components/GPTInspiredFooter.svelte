<!-- <!DOCTYPE html> -->

<head>
  <style>
    .footer {
      background-color: #f8f9fa;
      color: #212529;
      padding: 20px 0;
      position: relative;
      bottom: 0;
      width: 100%;
      margin-top: 200px;
    }
    .footer .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      margin: 0 auto;
      max-width: 1000px;
      padding: 0 15px;
    }
    .footer .copyright {
      flex: 1 1 auto;
    }
    .footer .social {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 15px;
    }
    .footer .social a {
      color: #212529;
      margin: 0 5px;
      text-decoration: none;
    }
    .footer .nav {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .footer .nav a {
      color: #212529;
      margin: 0 5px;
      text-decoration: none;
    }
    @media (max-width: 768px) {
      .footer .container {
        flex-direction: column;
      }
      .footer .social, .footer .nav {
        margin-top: 10px;
      }
    }
  </style>
</head>
<body>
  <div class="footer">
    <div class="container">
      <div class="copyright">
        &copy; {year} Arik Rahman
      </div>
      <div class="social">
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">Instagram</a>
      </div>
      <div class="nav">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="#">Contact</a>
      </div>
    </div>
  </div>
</body>

<script>
  let time = new Date();
  $: year= time.getFullYear();
</script>