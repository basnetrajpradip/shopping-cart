import aboutStyles from "./about.module.css";

export default function About() {
  return (
    <div className={aboutStyles.mainContainer}>
      <div className={aboutStyles.aboutHero}>
        <div className={aboutStyles.heroTitle}>
          ABOUT MERO <span className={aboutStyles.heroStyle}>दोकान</span>
        </div>
        <div className={aboutStyles.info}>
          At MERO दोकान, we redefine the shopping experience, offering you a diverse and extensive range of products that cater to every aspect of your life. From trendy fashion to the latest gadgets,
          home essentials to unique handcrafted items, we&apos;ve got it all under one virtual roof.
        </div>
      </div>
      <div className={aboutStyles.contentContainer}>
        <div className={aboutStyles.heroContainer}>
          <div className={aboutStyles.heroTitle}>OUR STORY </div>
          <div className={aboutStyles.info}>
            Welcome to Mero दोकान, where every product has a story, and every purchase marks a moment in your journey with us. Our story is one of passion, discovery, and the relentless pursuit of
            providing a unique and fulfilling shopping experience.
          </div>
        </div>

        <div className={aboutStyles.content}>
          <ul>
            <li>
              <div>
                <div className={aboutStyles.contentTitle}>The Inception</div>
                <div className={aboutStyles.contentInfo}>
                  It all began with a simple idea — to create a marketplace where people could discover not just products, but stories. In 2023, Mero दोकान came to life, founded on the belief that
                  every item sold carries a narrative waiting to be explored.
                </div>
              </div>
            </li>
            <li>
              <div>
                <div className={aboutStyles.contentTitle}>The Vision</div>
                <div className={aboutStyles.contentInfo}>
                  Our vision extends beyond being just a shopping destination; it's about curating a space where diversity, quality, and community thrive. We envisioned a platform where shoppers could
                  find not only the latest trends but also timeless classics, handpicked for their uniqueness.
                </div>
              </div>
            </li>
            <li>
              <div>
                <div className={aboutStyles.contentTitle}>Curating Uniqueness</div>
                <div className={aboutStyles.contentInfo}>
                  Mero दोकान is more than an online marketplace; it's a celebration of diversity. Our team tirelessly scours the globe to bring you a collection that reflects different cultures,
                  styles, and innovations. Each product is carefully chosen, not just for its utility, but for the stories it tells.
                </div>
              </div>
            </li>
            <li>
              <div>
                <div className={aboutStyles.contentTitle}>Community & Connections</div>
                <div className={aboutStyles.contentInfo}>
                  As our family of shoppers grew, so did our sense of community. Mero दोकान is a place where like-minded individuals come together to share their love for quality products and
                  meaningful experiences. Join us in building a community that appreciates the beauty in every purchase.
                </div>
              </div>
            </li>
            <li>
              <div>
                <div className={aboutStyles.contentTitle}>Our Commitment</div>
                <div className={aboutStyles.contentInfo}>
                  At Mero दोकान, we are committed to transparency, authenticity, and exceptional customer service. Every step we take is guided by our dedication to providing you with a seamless,
                  enjoyable, and secure shopping experience.
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className={aboutStyles.aboutEnd}>
          <div className={aboutStyles.heroTitle}>JOIN US IN THIS JOURNEY</div>
          <div className={aboutStyles.info}>
            Our story is still unfolding, and we invite you to be a part of it. Explore our virtual aisles, discover unique finds, and make Mero दोकान a part of your shopping rituals. Thank you for
            being a part of our story. Here&apos;s to many more chapters of discovery, joy, and connection at Mero दोकान!
          </div>
        </div>
      </div>
    </div>
  );
}
