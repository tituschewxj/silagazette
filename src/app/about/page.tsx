import ContentArea from '@/components/ContentArea';
import LinkText from '@/components/LinkText';
import PeopleRoles from '@/components/PeopleRoles';
import TextSection from '@/components/TextSection';

const AboutUsPage = () => {
    return (
        <ContentArea>
            <div className='flex items-center justify-center'>
                <img src='SILA_full_logo.jpg' alt='SILA logo' />
            </div>
            {/* NOTE: Catchphrase? */}
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

            <div className='grid grid-cols-2 gap-4 py-8'>
                <PeopleRoles people={['Hor Wen Qin']} position='President' />
                <PeopleRoles
                    people={[
                        'Ling Shu Yi',
                        'Vinessa Martin Budithi',
                        'Jaime Song',
                    ]}
                    position='Vice Presidents'
                />
                <PeopleRoles
                    people={['Daniel Koh', 'Samuel Yap']}
                    position='Marketing Directors'
                />
                <PeopleRoles
                    people={['Lovein Sui', 'Raelee Toh', 'Ryan Seah']}
                    position='Sponsorship Directors'
                />
                <PeopleRoles
                    people={['Gabrielle Joy', 'Isaac Lu Yang']}
                    position='Events Directors'
                />
                <PeopleRoles
                    people={['Benjamin Lee']}
                    position='Research Director'
                />
                <PeopleRoles
                    people={['Reuben Ang']}
                    position='Overseas Student Representative'
                />
                <PeopleRoles
                    people={[
                        {
                            name: 'Anthony Cheah Nicholls',
                            profile_link:
                                'https://havelocklaw.com.sg/anthony-cheah-nicholls-profile/',
                        },
                        {
                            name: 'Stefanie Schacherer',
                            profile_link:
                                'https://law.smu.edu.sg/faculty/profile/6486/stefanie-schacherer',
                        },
                    ]}
                    position='Advisors'
                />
            </div>
        </ContentArea>
    );
};

export default AboutUsPage;
