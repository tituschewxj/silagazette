import ContentArea from '@/components/ContentArea';
import LinkText from '@/components/LinkText';
import TextSection from '@/components/TextSection';
import { ACCOUNTS } from '@/constants';

const ContactPage = () => {
    return (
        <ContentArea>
            <TextSection heading='Get in touch'>
                We would love to hear from you! Whether you have questions, need
                assistance, or just want to say hello, we're here for you. Feel
                free to reach out using the contact information below.
            </TextSection>

            {/* TODO: insert contact info */}
            <div className='grid grid-cols-1 p-4'>
                {/* <div>
                    <i className='bx bx-buildings p-4 align-middle text-2xl'></i>
                    545 Mavis Island Chicago, IL 99191
                </div>
                <div>
                    <i className='bx bx-phone p-4 align-middle text-2xl'></i>
                    +1 (555) 234-5678
                </div> */}
                <div>
                    <i className='bx bx-envelope p-4 align-middle text-2xl'></i>
                    {ACCOUNTS.EMAIL_ACCOUNT}
                </div>
            </div>

            {/* TODO: Link to google form */}
            <TextSection heading=''>
                Interested in writing for us? Have a piece you'd like to
                publish? Drop us a message&nbsp;
                <LinkText
                    link='https://forms.gle/P13qvdUQjGT1ALoN9'
                    text='here'
                    new_tab
                    inline
                ></LinkText>
                !
            </TextSection>
        </ContentArea>
    );
};

export default ContactPage;
