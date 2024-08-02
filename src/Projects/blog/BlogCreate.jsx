import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addBlog, editBlog } from '../../redux/slices/blogSlices/BlogSlice';

const BlogCreate = ({ blog, resetEdit }) => {
    const [blogData, setBlogData] = useState({
        title: '',
        description: '',
        category: '',
        image: null,
    });
    const [imagePreview, setImagePreview] = useState('');
    const [message, setMessage] = useState("");
    const dispatch = useDispatch();

    // Define resetForm using useCallback
    const resetForm = useCallback(() => {
        setBlogData({ title: '', description: '', category: '', image: null });
        setImagePreview('');
        setMessage('');
        resetEdit(); // Clear the edit state
    }, [resetEdit]);

    // Use resetForm in useEffect
    useEffect(() => {
        if (blog) {
            setBlogData(blog);
            if (blog.image) {
                setImagePreview(URL.createObjectURL(blog.image));
            }
        } else {
            resetForm();
        }
    }, [blog, resetForm]); // Make sure resetForm is in the dependency array

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'image' && files.length > 0) {
            setBlogData({ ...blogData, image: files[0] });
            setImagePreview(URL.createObjectURL(files[0]));
        } else {
            setBlogData({ ...blogData, [name]: value });
        }
    };

    const handlePost = (e) => {
        e.preventDefault();
        if (!blogData.title || !blogData.description || !blogData.category) {
            setMessage('Please fill in all fields.');
            return;
        }
        if (blog) {
            dispatch(editBlog({ id: blog.id, updatedBlog: blogData }));
        } else {
            dispatch(addBlog(blogData));
        }
        resetForm();
    };

    return (
        <div className="blogs_create">
            <div className="blog_card">
                <h2>{blog ? "Edit Blog Post" : "Create a Blog Post"}</h2>
                <form onSubmit={handlePost}>
                    <div>
                        <label htmlFor="title">Title:</label>
                        <input
                            type="text"
                            name="title"
                            value={blogData.title}
                            placeholder="Type the title"
                            onChange={handleChange}
                        />
                        {message && <p className="error-message">{message}</p>}
                    </div>

                    <div>
                        <label htmlFor="description">Description:</label>
                        <textarea
                            name="description"
                            value={blogData.description}
                            placeholder="Type the description"
                            onChange={handleChange}
                        />
                        {message && <p className="error-message">{message}</p>}
                    </div>

                    <div>
                        <label htmlFor="category">Category Name:</label>
                        <select
                            name="category"
                            value={blogData.category}
                            onChange={handleChange}
                        >
                            <option value="">Select a category</option>
                            <option value="tech">Tech</option>
                            <option value="health">Health</option>
                            <option value="lifestyle">Lifestyle</option>
                            <option value="finance">Finance</option>
                        </select>
                        {message && <p className="error-message">{message}</p>}
                    </div>

                    <div>
                        <label htmlFor="image">Upload Image:</label>
                        <input
                            type="file"
                            name="image"
                            accept=".jpg,.svg,.png"
                            onChange={handleChange}
                        />
                    </div>

                    {imagePreview && (
                        <div className="image-preview">
                            <h4>Image Preview:</h4>
                            <img src={imagePreview} alt="Preview" />
                        </div>
                    )}
                    <div>
                        <button type="submit">{blog ? "Update" : "Post"}</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BlogCreate;
