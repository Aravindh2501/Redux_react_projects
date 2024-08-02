import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBlog } from '../../redux/slices/blogSlices/BlogSlice';

const BlogShow = ({ onEdit }) => {
    const blogs = useSelector(state => state.blog.blogs);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteBlog(id));
    };

    const renderBlogs = () => {
        return blogs.map(blog => (
            <li key={blog.id}>
                {blog.image && (
                    <img
                        src={URL.createObjectURL(blog.image)}
                        alt="Blog"
                        className="blog-image"
                    />
                )}
                <h3>{blog.title}</h3>
                <p>{blog.description}</p>
                <p>Category: {blog.category}</p>
                <button onClick={() => onEdit(blog)} className="edit-button">
                    Edit
                </button>
                <button onClick={() => handleDelete(blog.id)} className="delete-button">
                    Delete
                </button>
            </li>
        ));
    };

    return (
        <div className="blog_show">
            <h2>Blog Posts</h2>
            {blogs.length === 0 ? <p>No blogs available.</p> : <ul>{renderBlogs()}</ul>}
        </div>
    );
};

export default BlogShow;
