const Button = (props: { href: string; children?: React.ReactNode }) => {
    return (
        <div className='mx-auto py-8 text-center'>
            <a
                href={props.href}
                className='bg-white shadow-md text-red-700 py-2 px-4 rounded-full font-semibold hover:bg-gray-100 transition duration-300'
            >
                {props.children}
            </a>
        </div>
    );
};

export default Button;
