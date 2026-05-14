import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router";
import { useLocalStorage } from "../localApi/blogDatas";
import { useEffect } from "react";
import Header from "../../../components/Header";
import { IoIosArrowDropleft, IoMdArrowDropleft } from 'react-icons/io'
import Swal from 'sweetalert2';

export default function BlogForm() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [blogData, setBlogData] = useLocalStorage("data", []);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    useEffect(() => {
        if (id) {
            const blogToEdit = blogData.find(b => String(b.id) === id);
            if (blogToEdit) {
                reset({
                    title: blogToEdit.title,
                    publishDate: blogToEdit.published,
                    readTime: blogToEdit.read,
                    description: blogToEdit.description,
                    imageUrl: blogToEdit.url
                });
            }
        }
    }, [id, blogData, reset]);

    const onSubmit = (data) => {
        if (id) {
            Swal.fire({
                title: "Do you want to save the changes?",
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: "Save",
                denyButtonText: `Don't save`,
               
            }).then((result) => {
                if (result.isConfirmed) {
                    const updatedData = blogData.map(blog =>
                        String(blog.id) === id ? { ...blog, ...newBlog(data) } : blog
                    );

                    setBlogData(updatedData);
                    Swal.fire("Saved!", "", "success");
                    navigate('/blog');
                } else if (result.isDenied) {
                    Swal.fire("Changes are not saved", "", "info");
                }
            });
        } else {

            const addNewBlog = [...blogData, { id: crypto.randomUUID(), ...newBlog(data) }];
            setBlogData(addNewBlog);
            Swal.fire("Created!", "New blog added.", "success");
            navigate('/blog')
        }
    };



    const newBlog = (data) => ({
        title: data.title,
        published: data.publishDate,
        read: data.readTime,
        description: data.description,
        url: data.imageUrl
    });


    return (


        <div className="min-h-screen dark:bg-slate-950  bg-slate-50">
            <title>Blog Form </title>
            <Header />
            <div className="flex mx-10 ">
                <Link to="/blog"><IoIosArrowDropleft className="text-2xl dark:text-white hover:text-purple-600" /></Link>
            </div>
            <div className="flex flex-col items-center justify-center p-4">

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="w-full max-w-[125] space-y-5 my-10 dark:bg-slate-800 dark:border-slate-700 bg-white border border-slate-200 shadow-xl px-8 py-10 rounded-2xl"
                >
                    <div className="space-y-1">
                        <h1 className="text-center text-2xl font-bold dark:text-slate-100 text-slate-800">Add New Blog</h1>
                        <p className="text-center text-slate-500 text-sm">Share your thoughts with the world</p>
                    </div>

                    {/* Title */}
                    <div className="flex flex-col gap-1">
                        <label htmlFor="title" className="text-sm font-semibold dark:text-white text-slate-700">Title <span className="text-rose-500">*</span></label>
                        <input
                            id="title"
                            placeholder="Enter blog title..."
                            className="w-full outline-none px-3 py-2 rounded-lg bg-slate-100 border border-transparent focus:border-purple-500 focus:bg-white transition-all duration-200 text-slate-800 placeholder:text-slate-400"
                            {...register("title", { required: "Title is required" })}
                        />
                        {errors.title && <span className="text-rose-500 text-[12px] font-medium">{errors.title.message}</span>}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {/* Published Date */}
                        <div className="flex flex-col gap-1">
                            <label htmlFor="publish" className="text-sm font-semibold dark:text-white text-slate-700">Date <span className="text-rose-500">*</span></label>
                            <input
                                type="date"
                                id="publish"
                                className="w-full outline-none px-3 py-2 rounded-lg bg-slate-100 border border-transparent focus:border-purple-500 focus:bg-white transition-all text-slate-800"
                                {...register("publishDate", { required: "Required" })}
                            />
                            {errors.publishDate && <span className="text-rose-500 text-[12px] font-medium">{errors.publishDate.message}</span>}
                        </div>

                        {/* Read Time */}
                        <div className="flex flex-col gap-1">
                            <label htmlFor="read" className="text-sm font-semibold dark:text-white text-slate-700">Read Time <span className="text-rose-500">*</span></label>
                            <input
                                type="number"
                                id="read"
                                placeholder="Mins"
                                className="w-full outline-none px-3 py-2 rounded-lg bg-slate-100 border border-transparent focus:border-purple-500 focus:bg-white transition-all text-slate-800"
                                {...register("readTime", { required: "Required" })}
                            />
                            {errors.readTime && <span className="text-rose-500 text-[12px] font-medium">{errors.readTime.message}</span>}
                        </div>
                    </div>

                    {/* Description */}
                    <div className="flex flex-col gap-1">
                        <label htmlFor="des" className="text-sm font-semibold dark:text-white text-slate-700">Description <span className="text-rose-500">*</span></label>
                        <textarea
                            id="des"
                            rows={4}
                            placeholder="What's on your mind?"
                            className="w-full outline-none px-3 py-2 rounded-lg bg-slate-100 border border-transparent focus:border-purple-500 focus:bg-white transition-all text-slate-800 resize-none"
                            {...register("description", { required: "Description is required" })}
                        />
                        {errors.description && <span className="text-rose-500 text-[12px] font-medium">{errors.description.message}</span>}
                    </div>

                    {/* Image URL */}
                    <div className="flex flex-col gap-1">
                        <label htmlFor="url" className="text-sm font-semibold dark:text-white text-slate-700">Cover Image URL <span className="text-rose-500">*</span></label>
                        <input
                            type="url"
                            id="url"
                            placeholder="https://images.com..."
                            className="w-full outline-none px-3 py-2 rounded-lg bg-slate-100 border border-transparent focus:border-purple-500 focus:bg-white transition-all text-slate-800"
                            {...register("imageUrl", { required: "Image URL is required" })}
                        />
                        {errors.imageUrl && <span className="text-rose-500 text-[12px] font-medium">{errors.imageUrl.message}</span>}
                    </div>


                    <button type="submit" className="bg-purple-600 w-full text-center rounded py-1 text-white">
                        {id ? "Update Blog" : "Publish Post"}
                    </button>

                </form>
            </div>
        </div>
    )
}
