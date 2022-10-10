import { nanoid } from "nanoid"
import BlogPreviewCard from "./BlogPreviewCard"


const BlogPreviewList = () => {
  return (
    <div>
        <h2>Top Blogs</h2>
        {Array(10).fill(0).map(() => <BlogPreviewCard key={nanoid()} />)}
    </div>
  )
}
export default BlogPreviewList