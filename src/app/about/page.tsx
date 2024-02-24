import ContentArea from '@/components/ContentArea';
import PeopleRoles from '@/components/PeopleRoles';
import TextSection from '@/components/TextSection';

const AboutUsPage = () => {
    return (
        <ContentArea>
            <div className='flex items-center justify-center'>
                <img src='SILA_full_logo.jpg' alt='SILA logo' />
            </div>
            {/* <h1 className='m-4 mt-16 text-3xl font-extrabold'></h1> */}
            {/* <hr /> */}

            <TextSection heading='Our mission'>
                SILA (Singapore) is Singapore’s inaugural Student Chapter of the
                International Law Association and the first in the world! We aim
                to cultivate student interest in international law, provide
                insightful perspectives on international law, and foster
                meaningful connections between students and professionals.
            </TextSection>
            {/* NOTE: Insert timeline? */}
            {/* NOTE: Add sponsors? */}
            <hr />

            <TextSection heading='2024 Organising Committee'></TextSection>

            <div className='grid grid-cols-2 gap-6 py-10'>
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
                    names={['Gabrielle Joy', 'Isaac Lu Yang']}
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
