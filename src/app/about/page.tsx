import PeopleRoles from '@/components/PeopleRoles';

const AboutUsPage = () => {
    return (
        <>
            <h1 className='text-3xl font-extrabold m-4'>Insert catchphrase.</h1>
            <p className='text-slate-800 m-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse iaculis erat sit amet lorem iaculis, vitae ultrices
                elit facilisis. In ut lorem metus. Sed nec urna aliquam,
                tristique nulla feugiat, vulputate turpis. Sed semper eros nec
                bibendum condimentum. Nulla at velit egestas, sollicitudin nisi
                nec, mollis est. Aenean tempor, erat sed luctus placerat, erat
                nisl pellentesque arcu, ac eleifend risus tortor eget risus.
                Nullam tincidunt imperdiet erat, sit amet pulvinar sapien
                condimentum ac.
            </p>
            <img src='' alt='TODO: Insert images if any' />
            <hr />

            <h2 className='text-2xl font-extrabold m-4'>
                Our mission/organisation
            </h2>
            <p className='text-slate-800 m-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse iaculis erat sit amet lorem iaculis, vitae ultrices
                elit facilisis. In ut lorem metus. Sed nec urna aliquam,
                tristique nulla feugiat, vulputate turpis. Sed semper eros nec
                bibendum condimentum. Nulla at velit egestas, sollicitudin nisi
                nec, mollis est. Aenean tempor, erat sed luctus placerat, erat
                nisl pellentesque arcu, ac eleifend risus tortor eget risus.
                Nullam tincidunt imperdiet erat, sit amet pulvinar sapien
                condimentum ac.
            </p>
            {/* NOTE: Insert timeline? */}
            <hr />

            <h2 className='text-2xl font-extrabold m-4'>Our values</h2>
            {/* NOTE: Use a table? */}
            <p className='text-slate-800 m-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse iaculis erat sit amet lorem iaculis, vitae ultrices
                elit facilisis. In ut lorem metus. Sed nec urna aliquam,
                tristique nulla feugiat, vulputate turpis. Sed semper eros nec
                bibendum condimentum. Nulla at velit egestas, sollicitudin nisi
                nec, mollis est. Aenean tempor, erat sed luctus placerat, erat
                nisl pellentesque arcu, ac eleifend risus tortor eget risus.
                Nullam tincidunt imperdiet erat, sit amet pulvinar sapien
                condimentum ac.
            </p>
            <hr />

            <h2 className='text-2xl font-extrabold m-4'>Our team/people</h2>
            <p className='text-slate-800 m-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                euismod vel nulla id vulputate. Cras nec tortor dui. Sed
                molestie.
            </p>
            <div className='grid grid-cols-2 gap-4'>
                <PeopleRoles
                    names={[
                        'Alex Johnson',
                        'Eva Rodriguez',
                        'Maxwell Thompson',
                        'Olivia Chen',
                    ]}
                    position='Co-Founders'
                />
                <PeopleRoles
                    names={['Emily Davis', 'Victor Lee']}
                    position='Content Creators'
                />
                <PeopleRoles
                    names={['Sophie Bennett', 'Liam Patel']}
                    position='Graphic Designers'
                />
                <PeopleRoles
                    names={['Nina Williams', 'Gabriel Kim']}
                    position='Marketing Team'
                />
                <PeopleRoles
                    names={['Mia Hernandez', 'Daniel Miller']}
                    position='Tech Enthusiasts'
                />
                <PeopleRoles
                    names={['Isaac Turner', 'Ava Robinson']}
                    position='Customer Support'
                />
                <PeopleRoles
                    names={['Zoe Mitchell', 'Oscar Davis']}
                    position='Social Media Managers'
                />
            </div>
        </>
    );
};

export default AboutUsPage;
