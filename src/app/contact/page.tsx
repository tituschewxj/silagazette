import ContentArea from '@/components/ContentArea';
import LinkText from '@/components/LinkText';
import TextSection from '@/components/TextSection';
import Link from 'next/link';

const ContactPage = () => {
    return (
        <ContentArea>
            <TextSection heading='Get in touch'>
                Proin volutpat consequat porttitor cras nullam gravida at. Orci
                molestie a eu arcu. Sed ut tincidunt integer elementum id sem.
                Arcu sed malesuada et magna.
            </TextSection>

            {/* TODO: insert contact info */}
            <div className='grid grid-cols-1 p-4'>
                <div>
                    <i className='bx bx-buildings p-4 align-middle text-2xl'></i>
                    545 Mavis Island Chicago, IL 99191
                </div>
                <div>
                    <i className='bx bx-phone p-4 align-middle text-2xl'></i>
                    +1 (555) 234-5678
                </div>
                <div>
                    <i className='bx bx-envelope p-4 align-middle text-2xl'></i>
                    hello@example.com
                </div>
            </div>

            {/* TODO: Link to google form */}
            <TextSection heading=''>
                Interested in writing for us? Have a piece you'd like to
                publish? Drop us a message&nbsp;
                <LinkText
                    link='https://forms.gle/P13qvdUQjGT1ALoN9'
                    text='here'
                ></LinkText>
                !
            </TextSection>
        </ContentArea>
    );
};

export default ContactPage;
