import { Link } from 'react-router';
import { useLocalStorage } from './localApi/blogDatas';
import { IoIosAdd } from 'react-icons/io';
import Swal from 'sweetalert2';

const BlogCom = () => {
    const [blogData, setBlogData] = useLocalStorage("data", [
        {
            id: 1,
            title: "Gokulakrishnan LifeStyle",
            published: "2025-03-15",
            read: 3,
            description: `Gokul is a sacred town in the Mathura district of Uttar Pradesh, India, revered as the place where Lord Krishna spent his early childhood (Kaumara lila) after being brought from Mathura. It is a major pilgrimage site, featuring attractions like Shri Nand Yashoda Bhawan, Gokul Dham, and the Raman Reti, where Krishna is said to have played as a child.`,
            url: "./favicon.png"
        },
    ]);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
             
        }).then((result) => {
            if (result.isConfirmed) {
                const filtered = blogData.filter(blog => blog.id !== id);
                setBlogData(filtered);
                Swal.fire({
                    title: "Deleted!",
                    text: "Your blog has been deleted.",
                    icon: "success"
                });
            }
        });


    };

    return (
        <div className="dark:bg-slate-900 bg-slate-50 min-h-screen py-10 px-4">
            <div className="max-w-5xl mx-auto space-y-6">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold dark:text-slate-100 text-slate-800">Latest Articles</h2>
                    <Link to="/blog/form" className="bg-purple-600 dark:text-slate-50 text-white px-4 py-2 rounded-lg flex items-center hover:bg-purple-700 transition shadow-md text-sm font-semibold">
                        <IoIosAdd className='font-bold text-2xl' /> New Post
                    </Link>
                </div>

                <div className="grid gap-6">
                    {blogData.length === 0 && (<p className="text-center dark:text-slate-900 text-slate-500 py-10">No Blogs found...</p>)}

                    {blogData.map((blog) => (
                        <div key={blog.id} className="group dark:bg-slate-900  dark:border-slate-600 bg-white border  border-slate-200 rounded-2xl flex flex-col md:flex-row overflow-hidden hover:shadow-xl transition-all duration-300">
                            {/* Image */}
                            <div className="w-full md:w-64 h-64 dark:bg-slate-900 bg-slate-200 shrink-0">
                                <img src={blog.url} className="w-full h-full object-cover" alt={blog.title} />
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col justify-between grow">
                                <div className="space-y-3">
                                    <Link to={`/blog/${blog.title}`}>
                                        <h1 className="font-bold text-2xl dark:text-slate-100 text-slate-800 hover:text-purple-600 transition-colors line-clamp-2">{blog.title}</h1>
                                    </Link>
                                    <div className="flex items-center gap-3 py-3 text-xs font-semibold dark:text-purple-400 text-purple-900 uppercase">
                                        <span>{blog.published}</span>
                                        <span className="text-slate-300">•</span>
                                        <span>{blog.read} min read</span>
                                    </div>
                                    <p className="dark:text-slate-100 text-slate-500 text-sm line-clamp-3">{blog.description}</p>
                                </div>

                                <div className="mt-4 pt-4 border-t border-slate-100 flex justify-between items-center">
                                    <Link to={`/blog/${blog.id}`} className="text-purple-600 font-bold text-sm">Read More →</Link>
                                    <div className='flex gap-2'>
                                        <Link to={`/blog/form/${blog.id}`} className='text-sm border-2 border-green-400 text-green-600 px-3 py-1 rounded hover:bg-green-50'>Edit</Link>
                                        <button onClick={() => handleDelete(blog.id)} className='text-sm border-2 border-red-400 text-red-500 px-3 py-1 rounded hover:bg-red-50 cursor-pointer'>Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogCom;
