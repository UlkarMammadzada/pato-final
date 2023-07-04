import BlogCard from "../../../components/cards/BlogCard";
import Text from "../../../components/shared/Text";
import Title from "../../../components/shared/Title";

const Blogs = () => {
  return (
    <div className="container m-auto my-32 px-6">
      <div className="text-center">
        <Text text="Latest News" color="red" />
        <Title text="THE BLOG" color="black" />
      </div>
      <div className="container m-auto gap-6 grid md:grid-cols-2 lg:grid-cols-3">
        <BlogCard
          img="blog-1.webp"
          title="BEST PLACES FOR WINE"
          description="Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros."
          moreText="CONTINUE READING"
        />
        <BlogCard
          img="blog-2.webp"
          title="EGGS AND CHEESE"
          description="Duis elementum, risus sit amet lobortis nunc justo condimentum ligula, vitae feugiat"
          moreText="CONTINUE READING"
        />
        <BlogCard
          img="blog-3.webp"
          title="STYLE THE WEDDING PARTY"
          description="Sed ornare ligula eget tortor tempor, quis porta tellus dictum."
          moreText="CONTINUE READING"
        />
      </div>
    </div>
  );
};

export default Blogs;
