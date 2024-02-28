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

            {/* TODO: abstract out to separate component? */}
            <TextSection heading='Practitioner Advisor'>
                <LinkText
                    text='Anthony Cheah Nicholls'
                    link='https://havelocklaw.com.sg/anthony-cheah-nicholls-profile/'
                    className='text-lg text-slate-800'
                    new_tab
                />
                <p className='my-4'>Counsel, International Arbitration</p>
                Anthony is a dual-qualified international dispute resolution
                lawyer who is regularly engaged as counsel, arbitrator or
                mediator for commercial disputes. He is the exclusive winner of
                Lexology’s 2024 Client Choice Award for Arbitration in Singapore
                where he was described as having “excellent legal skills” and
                “sharp analytical skills”, being “extremely approachable and
                always willing to meet clients’ demands”, and overall being
                “very commercial minded…a successful problem solver”.
            </TextSection>
            <hr />

            <TextSection heading='Academic Advisor'>
                <LinkText
                    text='Stefanie Schacherer'
                    link='https://law.smu.edu.sg/faculty/profile/6486/stefanie-schacherer'
                    className='text-lg text-slate-800'
                    new_tab
                />
                <p className='my-4'>
                    Full-time Faculty, Assistant Professor of Law
                </p>
                <li>
                    Doctor iuris, Universities of Geneva and Vienna
                    (co-tutelle), 2019
                </li>
                <li>LL.M., King’s College London, 2014</li>
                <li>Master of Laws, University of Geneva, 2013</li>
                <li>Bachelor of Laws, University of Geneva, 2011</li>
            </TextSection>
            <hr />

            <TextSection heading='2024 Organising Committee'></TextSection>

            <div className='grid grid-cols-2 gap-4 py-8'>
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
