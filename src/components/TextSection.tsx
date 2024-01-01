const TextSection = (props: {
    heading?: string;
    children?: React.ReactNode;
}) => {
    return (
        <>
            {props.heading && (
                <h2 className='my-4 pt-8 text-2xl font-extrabold text-slate-800'>
                    {props.heading}
                </h2>
            )}
            {props.children && (
                <p className='my-4 py-2 text-slate-600'>{props.children}</p>
            )}
        </>
    );
};

export default TextSection;
