import ContentArea from '@/components/ContentArea';
import PeopleRoles from '@/components/PeopleRoles';
import TextSection from '@/components/TextSection';

const AboutUsPage = () => {
    return (
        <ContentArea>
            <h1 className='text-3xl font-extrabold m-4'>Insert catchphrase.</h1>
            <TextSection>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse iaculis erat sit amet lorem iaculis, vitae ultrices
                elit facilisis. In ut lorem metus. Sed nec urna aliquam,
                tristique nulla feugiat, vulputate turpis. Sed semper eros nec
                bibendum condimentum. Nulla at velit egestas, sollicitudin nisi
                nec, mollis est. Aenean tempor, erat sed luctus placerat, erat
                nisl pellentesque arcu, ac eleifend risus tortor eget risus.
                Nullam tincidunt imperdiet erat, sit amet pulvinar sapien
                condimentum ac.
            </TextSection>
            <img src='' alt='TODO: Insert images if any' />
            <hr />

            <TextSection heading='Our mission'>
                The SMU-International Law Association (ILA) Student Chapter
                Organising Committee is dedicated to fostering a deeper
                comprehension of international law within the student community.
                Our mission is dual-fold: organizing engaging events featuring
                distinguished practitioners and academics, and cultivating
                extensive research across diverse realms of private and public
                international law. Committed to expanding awareness and
                understanding, we aim to create a dynamic platform that brings
                together legal professionals, scholars, and students, driving
                insightful discussions and fostering a rich environment for
                intellectual exploration and collaboration within the
                captivating realm of international law.
            </TextSection>
            {/* NOTE: Insert timeline? */}
            {/* NOTE: Add sponsors? */}
            <hr />

            <TextSection heading='Our team'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                euismod vel nulla id vulputate. Cras nec tortor dui. Sed
                molestie.
            </TextSection>

            <div className='grid grid-cols-2 gap-4'>
                <PeopleRoles names={['Hor Wen Qin']} position='President' />
                <PeopleRoles
                    names={[
                        'Ling Shu Yi',
                        'Vinessa Martin Budithi',
                        'Jaime Song',
                    ]}
                    position='Vice Presidents'
                />
                <PeopleRoles
                    names={['Daniel Koh', 'Samuel Yap']}
                    position='Marketing Directors'
                />
                <PeopleRoles
                    names={['Lovein Sui', 'Raelee Toh', 'Ryan Seah']}
                    position='Sponsorship Directors'
                />
                <PeopleRoles
                    names={['Gabrielle Joy', 'Issac Lu Yang']}
                    position='Events Directors'
                />
                <PeopleRoles
                    names={['Benjamin Lee']}
                    position='Research Director'
                />
                <PeopleRoles
                    names={['Reuben Ang']}
                    position='Overseas Student Representative'
                />
            </div>
        </ContentArea>
    );
};

export default AboutUsPage;
