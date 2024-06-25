import Link from "next/link";

const Page = () => {
    const blogs = [
        {
            "id": 1,
            "title": "Introduction to JSON",
            "author": "John Doe",
            "content": "JSON (JavaScript Object Notation) is a lightweight data-interchange format...",
            "tags": ["JSON", "Data Interchange", "Web Development"]
        },
        {
            "id": 2,
            "title": "Deep Dive into RESTful APIs",
            "author": "Jane Smith",
            "content": "REST (Representational State Transfer) is an architectural style for distributed hypermedia systems...",
            "tags": ["REST", "API", "Web Services"]
        },
        {
            "id": 3,
            "title": "Python Tips and Tricks",
            "author": "Alice Johnson",
            "content": "Python is a versatile programming language known for its simplicity and readability...",
            "tags": ["Python", "Programming", "Tips"]
        }
    ];

    return (
        <div>
            <h1>Blogs </h1>
            {blogs.map((blog) => (
                <div key={blog.id} className='border-2 p-12'>
                    <h3>{blog.title}</h3>
                    <p>{blog.content}</p>
                   <button className="bg-red-400 p-2">
                   <Link href={`/blogs/${blog.id}`}>
                        View Details
                    </Link>
                   </button>
                </div>
            ))}
        </div>
    );
};

export default Page;

