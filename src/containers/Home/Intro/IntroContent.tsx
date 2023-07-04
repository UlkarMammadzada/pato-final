import BlogCard from "../../../components/cards/BlogCard";


const IntroContent = () => {
  return (
    <div className="container m-auto my-32 px-5 gap-8 grid md:grid-cols-2 xl:grid-cols-3">
      <BlogCard
        img="intro-01.webp"
        title="ROMANTIC RESTAURANT"
        description="Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros."
      />
      <BlogCard
        img="intro-02.webp"
        title="DELICIOUS FOOD"
        description="Aliquam eget aliquam magna, quis posuere risus ac justo ipsum nibh urna"
      />
      <BlogCard
        img="intro-04.webp"
        title="RED WINES YOU LOVE"
        description="Sed ornare ligula eget tortor tempor, quis porta tellus dictum."
      />
    </div>
  );
};

export default IntroContent;
