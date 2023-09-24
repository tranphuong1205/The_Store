const Footer = () => {
  return (
    <footer id="footer" class="footer">
      <div class="link">
        <div class="about_store">
          <p class="title">
            {" "}
            About The Store <br />
          </p>{" "}
          News <br /> Career <br /> Investors <br />{" "}
        </div>
        <div class="get_help">
          <p class="title">
            {" "}
            Help <br />
          </p>{" "}
          Order Status <br /> Delivery <br /> Payment Options
        </div>
      </div>
      <div class="icon">
        <i class="fa-facebook-square item"></i>
        <i class="fa-instagram-square item"></i>
        <i class="fa-twitter-square item"></i>
        <i class="fa-mail-bulk item"></i>
      </div>
    </footer>
  );
};

export default Footer;
