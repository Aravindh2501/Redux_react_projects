import React, { useState } from 'react';
import BlogShow from './BlogShow';
import BlogCreate from './BlogCreate';

const BlogMain = () => {
    const [active, setActive] = useState("1");
    const [editBlog, setEditBlog] = useState(null);

    const handleActive = (id) => {
        setActive(id);
    };

    const handleEdit = (blog) => {
        setEditBlog(blog);
        setActive("2");
    };

    return (
        <div className='blog_main'>
            <div className="blog_nav">
                <h5>Blogs</h5>
                <div>
                    <button onClick={() => handleActive("1")}>Show Blogs</button>
                    <button onClick={() => handleActive("2")}>Create Blog</button>
                </div>
            </div>
            {active === "1" ? <BlogShow onEdit={handleEdit} /> : <BlogCreate blog={editBlog} resetEdit={() => setEditBlog(null)} />}
        </div>
    );
};

export default BlogMain;
