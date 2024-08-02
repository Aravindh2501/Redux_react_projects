import { createSlice } from '@reduxjs/toolkit';

const blogSlice = createSlice({
    name: 'blog',
    initialState: {
        blogs: [],
    },
    reducers: {
        addBlog: (state, action) => {
            state.blogs.push(action.payload);
        },
        editBlog: (state, action) => {
            const { id, updatedBlog } = action.payload;
            const index = state.blogs.findIndex(blog => blog.id === id);
            if (index !== -1) {
                state.blogs[index] = { ...state.blogs[index], ...updatedBlog };
            }
        },
        deleteBlog: (state, action) => {
            const id = action.payload;
            state.blogs = state.blogs.filter(blog => blog.id !== id);
        },
    },
});

export const { addBlog, editBlog, deleteBlog } = blogSlice.actions;
export default blogSlice.reducer;
