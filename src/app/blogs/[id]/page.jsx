

const page = ({params}) => {
    const {title,content} = blogs.find((blog)=>blog.id===parseInt(params.id));
    return (
        <div className="h-screen">
           <h4>{title}</h4>
           <h4>{content}</h4>
        </div>
    );
}
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
export default page;