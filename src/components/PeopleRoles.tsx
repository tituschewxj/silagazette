const PeopleRoles = (props: { names: string[]; position: string }) => {
    return (
        <div className='text-center'>
            <div className='font-semibold text-slate-800'>{props.position}</div>
            {props.names.map((name) => {
                return (
                    <div id={name} className='text-slate-600'>
                        {name}
                    </div>
                );
            })}
        </div>
    );
};

export default PeopleRoles;
