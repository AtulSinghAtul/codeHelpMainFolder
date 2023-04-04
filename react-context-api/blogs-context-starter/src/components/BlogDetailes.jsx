import { NavLink } from "react-router-dom";

const BlogDetailes = (props) => {
  const post = props.post;

  return (
    <div className="flex flex-col justify-center items-start gap-y-2 ">
      <NavLink to={`/blog/${post.id}`}>
        <span className="text-lg font-bold ">{post.title}</span>
      </NavLink>

      <p className="text-[12px] flex gap-x-1">
        By <span className="italic ">{post.author}</span>
        on
        <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
          <span className="underline">{post.category}</span>
        </NavLink>
      </p>
      <p className="text-[10px]">Posted on {post.date}</p>
      <p className="text-xm mt-[10px]">{post.content}</p>

      <div className="flex gap-x-2">
        {post.tags.map((tag, index) => (
          <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`}>
            {" "}
            <span className="text-blue-700 underline font-bold text-[10px] mt-[4px]">{`#${tag}`}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BlogDetailes;
