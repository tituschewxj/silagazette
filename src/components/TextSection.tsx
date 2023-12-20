const TextSection = (props: {
    heading?: string;
    children?: React.ReactNode;
}) => {
    return (
        <>
            {props.heading && (
                <h2 className='text-2xl font-extrabold m-4 pt-8 text-slate-800'>
                    {props.heading}
                </h2>
            )}
            {props.children && (
                <p className='text-slate-600 m-4 py-2'>{props.children}</p>
            )}
        </>
    );
};

export default TextSection;
